import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const CONTENT_PATTERNS = [
  /^src\/pages\/(?!.*\.test\.tsx?$).*\.tsx$/,
  /^src\/data\//,
  /^src\/assets\//,
  /^src\/components\/charts\/InvestmentTree\.tsx$/,
  /^public\/(?!spa-redirect\.js$|fonts\/)/,
  /^index\.html$/,
  /^README\.md$/,
  /^CHANGELOG\.md$/,
];

const COMMIT_RE = /\bgit\b[^\n;&|]*?\s(commit)\b/;
const PUSH_RE = /\bgit\b[^\n;&|]*?\s(push)\b/;
const PR_RE = /\bgh\s+pr\s+(create|merge|edit)\b/;

const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();

function git(args, allowFail = false) {
  try {
    return execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (err) {
    if (allowFail) return null;
    throw err;
  }
}

function lines(out) {
  return (out || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

function isContentPath(p) {
  return CONTENT_PATTERNS.some((re) => re.test(p));
}

function normalize(text) {
  if (text === null) return null;
  return text
    .replace(/^\s*import[\s\S]*?from\s+["'][^"']+["'];?\s*$/gm, "")
    .replace(/^\s*import\s+["'][^"']+["'];?\s*$/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function blob(ref, p) {
  return git(["show", `${ref}:${p}`], true);
}

function workingFile(p) {
  const abs = path.join(root, p);
  return existsSync(abs) ? readFileSync(abs, "utf8") : null;
}

function differs(a, b) {
  return normalize(a) !== normalize(b);
}

function pendingContentChanges() {
  const hits = new Set();
  const hasHead = git(["rev-parse", "--verify", "HEAD"], true) !== null;
  const files = new Set([
    ...lines(git(["diff", "--cached", "--name-only"])),
    ...lines(git(["diff", "--name-only"])),
    ...lines(git(["ls-files", "--others", "--exclude-standard"])),
  ]);
  for (const p of files) {
    if (!isContentPath(p)) continue;
    const head = hasHead ? blob("HEAD", p) : null;
    if (differs(head, blob("", p)) || differs(head, workingFile(p)))
      hits.add(p);
  }
  return hits;
}

function commitContentChanges(shas) {
  const hits = new Set();
  for (const sha of shas) {
    const entries = lines(
      git([
        "diff-tree",
        "--no-commit-id",
        "--root",
        "-r",
        "--name-only",
        "-m",
        "--first-parent",
        sha,
      ]),
    );
    for (const p of entries) {
      if (!isContentPath(p)) continue;
      const before = blob(`${sha}^`, p);
      const after = blob(sha, p);
      if (differs(before, after)) hits.add(`${p} (${sha.slice(0, 7)})`);
    }
  }
  return hits;
}

function unpublishedCommits(includeBaseBranch) {
  const shas = new Set(
    lines(git(["rev-list", "HEAD", "--not", "--remotes"], true)),
  );
  if (includeBaseBranch) {
    for (const base of ["origin/main", "main"]) {
      const out = git(["rev-list", `${base}..HEAD`], true);
      if (out !== null) {
        lines(out).forEach((s) => shas.add(s));
        break;
      }
    }
  }
  return [...shas];
}

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (c) => (input += c));
process.stdin.on("end", () => {
  let command = "";
  try {
    command = JSON.parse(input)?.tool_input?.command ?? "";
  } catch {
    process.exit(0);
  }

  const wantsCommit = COMMIT_RE.test(command);
  const wantsPush = PUSH_RE.test(command);
  const wantsPr = PR_RE.test(command);
  if (!wantsCommit && !wantsPush && !wantsPr) process.exit(0);

  let hits;
  try {
    hits = new Set();
    if (wantsCommit) {
      for (const h of pendingContentChanges()) hits.add(h);
    }
    if (wantsPush || wantsPr) {
      for (const h of commitContentChanges(unpublishedCommits(wantsPr)))
        hits.add(h);
    }
  } catch (err) {
    process.stderr.write(
      `content-guard: impossible d'analyser le dépôt (${err.message}). Commit/push/PR bloqué par sécurité.`,
    );
    process.exit(2);
  }

  if (hits.size === 0) process.exit(0);

  const action = [wantsCommit && "commit", wantsPush && "push", wantsPr && "PR"]
    .filter(Boolean)
    .join("/");
  process.stderr.write(
    [
      `BLOQUÉ (${action}) : changement de contenu détecté. Seul l'utilisateur peut committer, pousser ou ouvrir une PR contenant du contenu.`,
      "Fichiers concernés :",
      ...[...hits].map((h) => `  - ${h}`),
      "Ne tente pas de contourner ce blocage. Arrête-toi, résume les changements de contenu à l'utilisateur et laisse-le relire puis committer lui-même.",
    ].join("\n"),
  );
  process.exit(2);
});

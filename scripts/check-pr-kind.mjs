import { execFileSync } from "node:child_process";
import { checkPullRequest } from "./change-kind.mjs";

const title = process.env.PR_TITLE ?? "";
const labels = JSON.parse(process.env.PR_LABELS ?? "[]");
const base = process.env.PR_BASE_SHA;
const head = process.env.PR_HEAD_SHA ?? "HEAD";

if (!base) {
  console.error("PR_BASE_SHA is required.");
  process.exit(1);
}

const files = execFileSync(
  "git",
  ["diff", "--name-only", `${base}...${head}`],
  { encoding: "utf8" },
)
  .split("\n")
  .filter(Boolean);

const result = checkPullRequest({ title, labels, files });

if (!result.ok) {
  for (const line of result.errors) console.error(line);
  process.exit(1);
}

console.log(`"${title}" matches the ${files.length} changed files.`);

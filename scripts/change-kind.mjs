const contentPatterns = [
  /^src\/pages\/.+\.tsx$/,
  /^src\/data\//,
  /^src\/assets\//,
  /^src\/components\/charts\/InvestmentTree\.tsx$/,
  /^public\//,
  /^index\.html$/,
  /^README\.md$/,
  /^CHANGELOG\.md$/,
];

const testPattern = /\.test\.[jt]sx?$/;

export const technicalTypes = [
  "feat",
  "fix",
  "chore",
  "refactor",
  "test",
  "ci",
  "build",
  "deps",
];

export const contentType = "content";

export const overrideLabel = "kind:technical-override";

const titlePattern = new RegExp(
  `^(${[...technicalTypes, contentType].join("|")})(\\([^)]+\\))?!?: \\S.*$`,
);

export function isContentFile(file) {
  const normalized = file.replaceAll("\\", "/");
  if (testPattern.test(normalized)) return false;
  return contentPatterns.some((pattern) => pattern.test(normalized));
}

export function classifyFiles(files) {
  const content = files.filter(isContentFile);
  const technical = files.filter((file) => !isContentFile(file));
  return { content, technical };
}

export function checkPullRequest({ title, labels, files }) {
  const match = titlePattern.exec(title);
  if (!match) {
    return {
      ok: false,
      errors: [
        `Title "${title}" must follow Conventional Commits with one of: ${[...technicalTypes, contentType].join(", ")}.`,
      ],
    };
  }

  const type = match[1];
  const overridden = labels.includes(overrideLabel);
  const { content, technical } = classifyFiles(files);
  const errors = [];

  if (overridden && type === contentType) {
    errors.push(
      `Label "${overrideLabel}" marks every file as technical, so the title cannot use "${contentType}:".`,
    );
  } else if (type === contentType && technical.length > 0) {
    errors.push(
      `A "${contentType}:" pull request must only touch content files. Technical files:`,
      ...technical.map((file) => `  ${file}`),
    );
  } else if (type !== contentType && !overridden && content.length > 0) {
    errors.push(
      `A "${type}:" pull request must only touch technical files. Content files:`,
      ...content.map((file) => `  ${file}`),
      `If these changes are limited to imports or formatting, add the "${overrideLabel}" label.`,
    );
  }

  return { ok: errors.length === 0, errors };
}

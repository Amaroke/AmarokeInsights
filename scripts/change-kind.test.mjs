import { describe, expect, it } from "vitest";
import {
  checkPullRequest,
  classifyFiles,
  isContentFile,
  overrideLabel,
} from "./change-kind.mjs";

describe("isContentFile", () => {
  it.each([
    "src/pages/Basics.tsx",
    "src/pages/tools/RentVsBuy.tsx",
    "src/data/glossary.ts",
    "src/assets/logo.png",
    "src/components/charts/InvestmentTree.tsx",
    "public/robots.txt",
    "index.html",
    "README.md",
    "CHANGELOG.md",
  ])("treats %s as content", (file) => {
    expect(isContentFile(file)).toBe(true);
  });

  it.each([
    "src/pages/tools/LoanCalculator.test.tsx",
    "src/components/Layout.tsx",
    "src/utils/finance.ts",
    "scripts/change-kind.mjs",
    "package.json",
    ".github/workflows/ci.yml",
    "docs/agents/domain.md",
  ])("treats %s as technical", (file) => {
    expect(isContentFile(file)).toBe(false);
  });

  it("accepts Windows separators", () => {
    expect(isContentFile("src\\pages\\Basics.tsx")).toBe(true);
  });
});

describe("classifyFiles", () => {
  it("splits files by kind", () => {
    expect(
      classifyFiles(["src/pages/Basics.tsx", "src/utils/finance.ts"]),
    ).toEqual({
      content: ["src/pages/Basics.tsx"],
      technical: ["src/utils/finance.ts"],
    });
  });
});

describe("checkPullRequest", () => {
  const contentFile = "src/pages/Basics.tsx";
  const technicalFile = "src/utils/finance.ts";

  it("rejects a title outside Conventional Commits", () => {
    const result = checkPullRequest({
      title: "Update stuff",
      labels: [],
      files: [technicalFile],
    });
    expect(result.ok).toBe(false);
  });

  it("rejects an unknown type", () => {
    const result = checkPullRequest({
      title: "docs: explain",
      labels: [],
      files: [technicalFile],
    });
    expect(result.ok).toBe(false);
  });

  it("accepts a scoped breaking technical title", () => {
    const result = checkPullRequest({
      title: "feat(search)!: rework index",
      labels: [],
      files: [technicalFile],
    });
    expect(result.ok).toBe(true);
  });

  it("accepts a content pull request touching only content", () => {
    const result = checkPullRequest({
      title: "content: rewrite the PEA section",
      labels: [],
      files: [contentFile],
    });
    expect(result.ok).toBe(true);
  });

  it("rejects a content pull request touching technical files", () => {
    const result = checkPullRequest({
      title: "content: rewrite the PEA section",
      labels: [],
      files: [contentFile, technicalFile],
    });
    expect(result.ok).toBe(false);
  });

  it("rejects a technical pull request touching content files", () => {
    const result = checkPullRequest({
      title: "refactor: extract helper",
      labels: [],
      files: [contentFile, technicalFile],
    });
    expect(result.ok).toBe(false);
  });

  it("accepts a technical pull request touching content files with the override label", () => {
    const result = checkPullRequest({
      title: "refactor: extract helper",
      labels: [overrideLabel],
      files: [contentFile, technicalFile],
    });
    expect(result.ok).toBe(true);
  });

  it("rejects a content title combined with the override label", () => {
    const result = checkPullRequest({
      title: "content: rewrite the PEA section",
      labels: [overrideLabel],
      files: [contentFile],
    });
    expect(result.ok).toBe(false);
  });
});

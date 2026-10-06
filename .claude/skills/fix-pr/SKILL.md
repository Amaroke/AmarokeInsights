---
name: fix-pr
description: Diagnose every open PR (failing checks, conflicts, Change kind rejections, review comments), fix them, commit and push the fixes after the user confirms the rules, and explain what the user must still do by hand.
disable-model-invocation: true
argument-hint: "[PR number]"
---

# Fix PR

With `/pr`, the only allowed path for `git commit`, `git push`, `gh pr edit` and `gh pr comment` in this repo (see `CLAUDE.md`). This command never merges a PR: merging deploys the site, the user does it in the GitHub UI.

Talk to the user in French. Commit messages, PR titles and PR descriptions stay in English.

Arguments: `$ARGUMENTS` (one PR number to restrict the run, or empty for every open PR).

The rules of the "Rules this command enforces" section of `.claude/skills/pr/SKILL.md` apply here unchanged.

## 1. Survey

Stop if `git status --short` shows uncommitted changes: ask the user to ship or stash them first. Note the current branch to return to it at the end.

Run in parallel:

```bash
git fetch origin --prune
gh pr list --state open --json number,title,headRefName,author,isDraft,labels,mergeable,mergeStateStatus,reviewDecision,statusCheckRollup
```

## 2. Diagnosis

For each PR, find every **blocker**:

- **Failing check**: `gh pr checks <N>`, then `gh run view <run-id> --log-failed` for each failure. Name the root cause, not the symptom.
- **Change kind rejection**: rerun the check locally with `scripts/check-pr-kind.mjs` (env `PR_TITLE`, `PR_LABELS`, `PR_BASE_SHA`, `PR_HEAD_SHA`) to see whether the title, a missing `kind:technical-override` label, or a technical and content mix is at fault.
- **Conflict** or branch behind `main`: `mergeable` is `CONFLICTING` or `mergeStateStatus` is `BEHIND` or `DIRTY`.
- **Review comments**: `gh pr view <N> --json reviews,comments` and unresolved review threads.
- **Draft**: note it, never treat it as a blocker to fix.

Done when every open PR has a list of blockers, possibly empty, each with its root cause.

## 3. Plan

For each blocker, pick the fix:

- **Code fix**: change on the PR branch (lint, test, typecheck, build, search index, audit, breaking API in a dependency bump, review comment), committed and pushed.
- **Conflict**: merge `origin/main` into the branch and resolve with the `resolving-merge-conflicts` skill. On a Dependabot PR, comment `@dependabot rebase` instead.
- **Wrong title or missing label**: `gh pr edit <N> --title ... --add-label ...`.
- **Mixed technical and content changes**: split as in step 6.4 of `.claude/skills/pr/SKILL.md`, the PR keeps its kind and the other files move to a new PR.
- **Manual**: anything left that needs a secret, a repo setting, a GitHub UI action or an editorial decision on content the user has not written.

A fix keeps the PR kind. A technical fix needed by a content PR (or the reverse) goes in a new PR opened from `origin/main`.

A commit pushed to a Dependabot branch stops Dependabot from rebasing it later. Prefer `@dependabot rebase` or `@dependabot recreate` when they solve the blocker.

## 4. Confirmation

Show the user, per PR: the blockers, the planned fix for each, the content files the fix touches with a one-line summary of what changes for the visitor, and the manual steps.

Ask with `AskUserQuestion`, all at once, in French:

1. **Rules** (multiSelect, all must be checked):
   - "J'ai relu les changements de contenu prévus" (only if a fix touches content files)
   - "Une PR ne mélange pas technique et contenu"
2. **PRs to fix** (multiSelect): every PR with a planned fix, all pre-selected.
3. One question per real choice the plan leaves open (two ways to fix a breaking change, split or close a mixed PR, Dependabot comment or local commit). Skip if there are none.

If a rule is left unchecked or the user cancels: run nothing and stop.

## 5. Execution

For each selected PR, one at a time:

1. `gh pr checkout <N>`.
2. Apply the fixes. Reproduce each failing check locally before touching code, then confirm the same command passes. After adding or removing an info bubble, run `npm run generate:search-index`.
3. `npm run check`. On failure: fix and rerun. If a blocker resists, discard the changes on this PR with `git restore` and `git clean` on the files you touched, move the blocker to manual with what you tried, and go to the next PR.
4. Stage files by name, commit with a Conventional Commits message of the PR kind (`fix: ...`, `deps: ...`, `content: ...`). End each message with the `Co-Authored-By` attribution line required by the environment.
5. `git push`.
6. Title, label and Dependabot comment fixes with `gh pr edit` and `gh pr comment`.

These commands trigger a permission prompt. That is intended.

Done when every selected PR has its fixes pushed, or its blocker moved to manual. Then switch back to the branch noted in step 1.

## 6. Report

For each PR, in French:

- number, title, link
- blockers found
- what was fixed, with the commit hash
- what the user must still do by hand, as numbered steps with the exact command or the exact place in the GitHub UI

End with the PRs ready to "Squash and merge" once the CI is green.

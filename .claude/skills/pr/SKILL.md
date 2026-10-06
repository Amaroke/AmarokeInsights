---
name: pr
description: Commit, push, open or update a PR, close related issues and clean up local branches, after the user explicitly confirms the rules. The only allowed way to commit, push or open a PR in this repo.
disable-model-invocation: true
argument-hint: "[commit message or PR title]"
---

# PR

The only allowed path for `git commit`, `git push`, `git branch -D`, `gh pr create`, `gh pr edit` and `gh pr merge`. Outside this command, these actions are forbidden (see `CLAUDE.md`).

Talk to the user in French. Commit messages and PR descriptions stay in English.

Arguments: `$ARGUMENTS`

## 1. Survey

Run in parallel:

```bash
git fetch origin --prune
git branch --show-current
git status --short -uall
git diff --stat HEAD
git log --oneline origin/main..HEAD
git branch -vv
gh pr list --head "$(git branch --show-current)" --state open --json number,url,title
gh issue list --state open --limit 50 --json number,title,labels
```

Also read open local issues: every `.scratch/*/issues/*.md` and `.scratch/*/spec.md` whose `Status:` line is neither `closed` nor `wontfix`.

Classify each changed file using `CONTEXT.md`:

- **Content change**: what the visitor reads or sees. Typical files: `src/pages/**/*.tsx` (except tests), `src/data/**`, `src/assets/**`, `src/components/charts/InvestmentTree.tsx`, `public/**`, `index.html`, `README.md`, `CHANGELOG.md`. A diff in these files limited to imports or formatting is still technical.
- **Technical change**: everything else.

If there is nothing to commit and every commit is already pushed to an up-to-date PR (or there are no commits missing from `origin/main`): say so, skip to step 7 (cleanup) and stop after it.

## 2. Related issues

Match the diff and the branch commits against open issues (local and GitHub): files touched, described behaviour, acceptance criteria. For each candidate, note whether it is fully or partially resolved.

## 3. Summary

Show the user:

- the current branch, and the open PR if there is one
- the technical files
- the content files, each with a one-line summary of what changes for the visitor
- unpushed local commits
- issues that are candidates for closing, marked fully or partially resolved
- local branches that will be deleted at the end (all except `main` and the PR branch), flagging those not merged into `origin/main` or with unpushed commits

## 4. Rules confirmation

Ask with `AskUserQuestion`, all at once, in French:

1. **Rules** (multiSelect, all must be checked):
   - "J'ai relu tous les changements de contenu listés" (only if there are any)
   - "Un commit ne mélange pas technique et contenu"
   - "Merger la PR sur main déploie le site en production"
2. **Issues to close** (multiSelect): the candidates, fully resolved ones pre-selected. Skip if there are none.
3. **Unmerged branches** (only if any): delete anyway or keep.
4. **Split** (only if technical and content changes are mixed): two separate commits (recommended) or cancel.

If a rule is left unchecked or the user cancels: run nothing and stop.

## 5. Checks

```bash
npm run lint
npx tsc -b
npm test
```

On failure: show the output and stop without committing.

## 6. Execution

1. Branch: if on `main`, create a branch named after the change (`feat/...`, `fix/...`, `chore/...`, `content/...`) and switch to it.
2. Selected local issues: set their line to `Status: closed` and add a line under `## Comments` naming the PR branch. These files belong to the technical commit.
3. Stage files by name, never `git add -A` or `git add .`.
4. Technical commit first, then the content commit if split. Conventional message (`feat:`, `fix:`, `chore:`, `refactor:`, `content:` for content), in English like the history, or the one given in `$ARGUMENTS`. End each message with the `Co-Authored-By` attribution line required by the environment.
5. `git push -u origin <branch>`.
6. PR: if a PR is already open for the branch, update its description with `gh pr edit`, otherwise `gh pr create --base main`. Short description listing technical and content changes separately, then one `Closes #N` line per selected GitHub issue, and the list of closed local issues.

These commands trigger a permission prompt. That is intended.

## 7. Local cleanup

1. Update `main` without switching branch: `git fetch origin main:main` (or `git pull --ff-only` when on `main`).
2. Delete every local branch except `main` and the PR branch: `git branch -d` for those merged into `main`, `git branch -D` only for those the user agreed to delete in step 4.
3. `git remote prune origin`.

## 8. Report

Give the commit hashes, the PR link, the closed issues, and the deleted or kept branches.

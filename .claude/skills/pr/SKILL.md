---
name: pr
description: Commit, push, open or update a PR, close related issues and clean up local branches, after the user explicitly confirms the rules. The only allowed way to commit, push or open a PR in this repo.
disable-model-invocation: true
argument-hint: "[PR title]"
---

# PR

With `/fix-pr` and `/clean-branches`, the only allowed path for `git commit`, `git push`, `git branch -D`, `gh pr create`, `gh pr edit` and `gh pr merge`. Outside these three commands, these actions are forbidden (see `CLAUDE.md`).

Talk to the user in French. Commit messages, PR titles and PR descriptions stay in English.

Arguments: `$ARGUMENTS`

## Rules this command enforces

- PRs are **squash-merged**: one PR becomes one commit on `main`, titled after the PR title, with the PR description as body.
- One PR never mixes a technical change and a content change. The `Change kind` CI check rejects it.
- The PR title follows Conventional Commits. Technical types: `feat`, `fix`, `chore`, `refactor`, `test`, `ci`, `build`, `deps`. Content type: `content`.
- The `kind:technical-override` label lets a technical PR touch content files whose diff is limited to imports or formatting.

## 1. Survey

Run in parallel:

```bash
git fetch origin --prune
git branch --show-current
git status --short -uall
git diff --stat HEAD
git log --oneline origin/main..HEAD
git branch -vv
gh pr list --head "$(git branch --show-current)" --state open --json number,url,title,labels
gh issue list --state open --limit 50 --json number,title,labels
```

Classify each changed file (uncommitted and in `origin/main..HEAD`) with the patterns in `scripts/change-kind.mjs`, the single source shared with the CI. Content files are what the visitor reads or sees (see `CONTEXT.md`). For each content file, check whether its diff is limited to imports or formatting: if so, it is technical and the PR needs the override label.

If there is nothing to commit and every commit is already pushed to an up-to-date PR (or there are no commits missing from `origin/main`): say so, skip to step 7 (cleanup) and stop after it.

If commits already on the branch mix technical and content files: stop and explain that the branch must be split by hand.

## 2. Related issues

Match the diff and the branch commits against open GitHub issues: files touched, described behaviour, acceptance criteria. For each candidate, note whether it is fully or partially resolved.

## 3. Summary

Show the user:

- the current branch, and the open PR if there is one
- the technical files, flagging content files treated as technical (override label)
- the content files, each with a one-line summary of what changes for the visitor
- the PR(s) to open: one technical, one content, or both, each with its proposed title
- unpushed local commits
- issues that are candidates for closing, marked fully or partially resolved
- local branches that will be deleted at the end (all except `main` and the PR branches), flagging those not merged into `origin/main` or with unpushed commits

## 4. Rules confirmation

Ask with `AskUserQuestion`, all at once, in French:

1. **Rules** (multiSelect, all must be checked):
   - "J'ai relu tous les changements de contenu listÃ©s" (only if there are any)
   - "Une PR ne mÃ©lange pas technique et contenu"
   - "Merger une PR sur main dÃ©ploie le site en production"
2. **Issues to close** (multiSelect): the candidates, fully resolved ones pre-selected. Skip if there are none.
3. **Unmerged branches** (only if any): delete anyway or keep.
4. **Split** (only if technical and content changes are mixed): two PRs (recommended) or cancel.

If a rule is left unchecked or the user cancels: run nothing and stop.

## 5. Checks

```bash
npm run check
```

On failure: show the output and stop without committing.

## 6. Execution

1. Branch: if on `main`, create a branch named after the change (`feat/...`, `fix/...`, `chore/...`, `deps/...`, `content/...`) and switch to it.
2. Stage files by name, never `git add -A` or `git add .`.
3. Commit with the PR title as message, or the one given in `$ARGUMENTS`. End each message with the `Co-Authored-By` attribution line required by the environment.
4. If split: commit the technical files on the current branch first. Then stash the content files, create `content/<slug>` from `origin/main`, pop the stash and run `npm run check` there. If it fails, the content depends on the technical change: leave the content changes uncommitted on that branch, tell the user to merge the technical PR first and run `/pr` again, and skip the content PR.
5. `git push -u origin <branch>` for each branch.
6. PR, for each branch: if a PR is already open, update its title and description with `gh pr edit`, otherwise `gh pr create --base main --title "<title>"`. Add `--label kind:technical-override` when step 1 flagged it. Short description of the change, then one `Closes #N` line per selected issue that this PR resolves.

These commands trigger a permission prompt. That is intended.

Merging is done by the user in the GitHub UI with "Squash and merge", once the CI is green.

## 7. Local cleanup

1. Update `main` without switching branch: `git fetch origin main:main` (or `git pull --ff-only` when on `main`).
2. Delete every local branch except `main` and the PR branches: `git branch -d` for those merged into `main`, `git branch -D` only for those the user agreed to delete in step 4. Git does not see a squash-merged branch as merged: a branch whose PR is merged (`gh pr list --state merged --head <branch>`) counts as merged and is deleted with `git branch -D`.
3. `git remote prune origin`.

## 8. Report

Give the commit hashes, the PR links, the issues each PR closes, and the deleted or kept branches.

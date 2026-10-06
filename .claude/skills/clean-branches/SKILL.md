---
name: clean-branches
description: Switch back to an up-to-date local main and delete unused local and remote branches, after the user confirms the list.
disable-model-invocation: true
---

# Clean branches

The only allowed path for `git branch -D` and `git push origin --delete` outside `/pr` (see `CLAUDE.md`). This command never commits, never opens or closes a PR.

Talk to the user in French.

## 1. Survey

Stop if `git status --short` shows uncommitted changes: ask the user to ship them with `/pr` or stash them first.

Run in parallel:

```bash
git fetch origin --prune
git branch -vv
git branch -r
gh pr list --state all --limit 100 --json number,state,headRefName,title
```

## 2. Classify

Sort every branch except `main` and `origin/HEAD`, local and remote, into one bucket:

- **Merged**: its PR is merged, or `git diff --quiet origin/main <branch>` is empty, or every commit is in `origin/main` (`git log origin/main..<branch>` empty). PRs are squash-merged, so Git alone does not see them as merged: the PR state is the authority.
- **Abandoned**: its PR is closed without merge, or a local branch whose upstream is `gone` with no PR found.
- **Active**: an open PR, or a branch with commits missing from `origin/main` and no PR. Kept, never deleted.

Done when every branch sits in exactly one bucket, with its PR number when there is one.

## 3. Confirmation

Show the user the three buckets, local and remote separately, with for each branch its PR and last commit.

Ask with `AskUserQuestion`, in French:

1. **Branches to delete** (multiSelect): every merged branch pre-selected, then every abandoned branch, flagged "non mergÃ©e". Group local and remote copies of the same branch into one option when both exist.
2. **Active branches** (only if any): keep all (recommended) or pick ones to delete anyway.

If the user cancels or selects nothing: run nothing and stop.

## 4. Execution

1. `git switch main` then `git pull --ff-only`.
2. Local branches: `git branch -d` when Git accepts it, `git branch -D` for the selected ones it refuses.
3. Remote branches: `git push origin --delete <branch>` for each selected one.
4. `git remote prune origin`.

These commands trigger a permission prompt. That is intended.

## 5. Report

The current branch and `main` commit, then the deleted branches and the kept branches with the reason.

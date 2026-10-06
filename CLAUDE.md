# AmarokeInsights

## Commit, push and PR

You are forbidden from running `git commit`, `git push`, `git branch -D`, `gh pr create`, `gh pr edit` and `gh pr merge`, whatever the kind of change. This also applies at the end of `/implement`, `/tdd` and `/code-review`: when a skill says to commit, stop instead and say the work is ready for `/pr`.

The only allowed path is the `/pr` command, run by the user. It makes the user confirm the rules before acting. Never invoke it yourself.

Never work around this ban (wrapper script, alias, another shell, `git -c`, GitHub API, editing `.claude/settings.json` or the skill).

Never mix a **technical change** and a **content change** in the same pull request (see `CONTEXT.md`). PRs are squash-merged, so one PR becomes one commit on `main`. The CI enforces this from the PR title and the paths listed in `scripts/change-kind.mjs`.

## Project

React 19 + Vite + Tailwind 4 site, written in French, deployed on GitHub Pages. Editorial content lives directly in `src/pages/*.tsx` and `src/data/`. After adding or removing an info bubble, run `npm run generate:search-index`. Before handing work to `/pr`, run `npm run check`: it runs every check the CI runs (lint, format, markdownlint, typecheck, tests, build, search index, production audit).

The user speaks French. Map their French terms to code using the `_French_` lines in `CONTEXT.md`.

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues on `Amaroke/AmarokeInsights`, through the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

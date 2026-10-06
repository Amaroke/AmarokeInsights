# AmarokeInsights

## Commit, push and PR

You are forbidden from running `git commit`, `git push`, `git branch -D`, `gh pr create`, `gh pr edit` and `gh pr merge`, whatever the kind of change. This also applies at the end of `/implement`, `/tdd` and `/code-review`: when a skill says to commit, stop instead and say the work is ready for `/pr`.

The only allowed path is the `/pr` command, run by the user. It makes the user confirm the rules before acting. Never invoke it yourself.

Never work around this ban (wrapper script, alias, another shell, `git -c`, GitHub API, editing `.claude/settings.json` or the skill).

Never mix a **technical change** and a **content change** in the same commit (see `CONTEXT.md`).

## Project

React 19 + Vite + Tailwind 4 site, written in French, deployed on GitHub Pages. Editorial content lives directly in `src/pages/*.tsx` and `src/data/`. After adding or removing an info bubble, run `npm run generate:search-index`. Checks before a technical commit: `npm run lint`, `npx tsc -b`, `npm test`, `npm run build`.

The user speaks French. Map their French terms to code using the `_French_` lines in `CONTEXT.md`.

## Agent skills

### Issue tracker

Issues are tracked as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

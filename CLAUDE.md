# AmarokeInsights

## Commit, push et PR

Interdiction totale de `git commit`, `git push`, `git branch -D`, `gh pr create`, `gh pr edit` et `gh pr merge`, quel que soit le type de changement. Ça vaut aussi à la fin de `/implement`, `/tdd` et `/code-review` : quand un skill dit de committer, tu t'arrêtes à la place et tu indiques que le travail est prêt pour `/pr`.

Le seul chemin autorisé est la commande `/pr`, lancée par l'utilisateur. Elle lui fait confirmer les règles avant d'agir. Ne l'invoque jamais toi-même.

Ne contourne jamais l'interdiction (script intermédiaire, alias, autre shell, `git -c`, API GitHub, modification de `.claude/settings.json` ou du skill).

Ne mélange jamais **changement technique** et **changement de contenu** dans un même commit (voir `CONTEXT.md`).

## Projet

Site React 19 + Vite + Tailwind 4, en français, déployé sur GitHub Pages. Le contenu éditorial vit directement dans `src/pages/*.tsx` et `src/data/`. Après ajout ou suppression d'une bulle d'info, lancer `npm run generate:search-index`. Vérifications avant commit technique : `npm run lint`, `npm test`, `npm run build`.

## Agent skills

### Issue tracker

Issues are tracked as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

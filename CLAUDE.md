# AmarokeInsights

## Commit, push et PR

Tu peux committer, pousser ou ouvrir une PR seulement pour un **changement technique** (voir `CONTEXT.md`).

Dès qu'un diff contient un **changement de contenu** (texte, chiffre, taux, exemple, terme, titre, lien, image, date `lastUpdated`, `CHANGELOG.md`, `README.md`, métadonnées SEO), tu ne commits pas, ne pousses pas et n'ouvres pas de PR. Ça vaut aussi à la fin de `/implement` et de `/code-review`. Tu t'arrêtes, tu listes les changements de contenu et tu laisses l'utilisateur relire et committer.

Ne mélange jamais technique et contenu dans un même commit. Si une tâche touche les deux, committe d'abord la partie technique seule, puis laisse la partie contenu non commitée.

Un hook (`.claude/hooks/content-guard.mjs`) bloque ces commandes quand il détecte du contenu. Ne tente jamais de le contourner (script intermédiaire, autre shell, `git -c`, désactivation des hooks, modification du hook ou des settings). S'il bloque, arrête-toi et préviens l'utilisateur.

## Projet

Site React 19 + Vite + Tailwind 4, en français, déployé sur GitHub Pages. Le contenu éditorial vit directement dans `src/pages/*.tsx` et `src/data/`. Après ajout ou suppression d'une bulle d'info, lancer `npm run generate:search-index`. Vérifications avant commit technique : `npm run lint`, `npm test`, `npm run build`.

## Agent skills

### Issue tracker

Issues are tracked as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

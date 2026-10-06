---
name: pr
description: Commit, push, ouverture ou mise à jour de PR, clôture des issues liées et nettoyage des branches locales, après confirmation explicite des règles par l'utilisateur. Seul moyen autorisé de committer, pousser ou ouvrir une PR dans ce dépôt.
disable-model-invocation: true
argument-hint: "[message ou titre de PR]"
---

# PR

Seul chemin autorisé pour `git commit`, `git push`, `gh pr create` et `gh pr merge`. Hors de cette commande, ces actions sont interdites (voir `CLAUDE.md`).

Arguments reçus : `$ARGUMENTS`

## 1. État des lieux

Lance en parallèle :

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

Lis aussi les issues locales ouvertes : chaque fichier `.scratch/*/issues/*.md` et `.scratch/*/spec.md` dont la ligne `Status:` n'est pas `closed` ni `wontfix`.

Classe chaque fichier modifié selon `CONTEXT.md` :

- **Changement de contenu** : ce que le visiteur lit ou voit. Fichiers typiques `src/pages/**/*.tsx` (hors tests), `src/data/**`, `src/assets/**`, `src/components/charts/InvestmentTree.tsx`, `public/**`, `index.html`, `README.md`, `CHANGELOG.md`. Dans ces fichiers, un diff limité aux imports ou au formatage reste technique.
- **Changement technique** : tout le reste.

Rien à commiter et aucun commit absent de `origin/main` : dis-le, passe directement à l'étape 7 (nettoyage) et arrête-toi après.

## 2. Issues liées

Rapproche le diff et les commits de la branche des issues ouvertes (locales et GitHub) : fichiers touchés, comportement décrit, critères d'acceptation. Pour chaque issue candidate, note si elle est entièrement résolue ou seulement en partie.

## 3. Récapitulatif

Affiche à l'utilisateur :

- la branche courante, et la PR déjà ouverte s'il y en a une
- la liste des fichiers techniques
- la liste des fichiers de contenu, avec pour chacun un résumé d'une ligne de ce qui change pour le visiteur
- les commits locaux non poussés
- les issues candidates à la clôture, avec résolue ou partielle
- les branches locales qui seront supprimées à la fin (toutes sauf `main` et la branche de la PR), en signalant celles qui ne sont pas mergées dans `origin/main` ou qui ont des commits non poussés

## 4. Confirmation des règles

Pose les questions avec `AskUserQuestion`, en une seule fois :

1. **Règles** (multiSelect, toutes doivent être cochées) :
   - "J'ai relu tous les changements de contenu listés" (seulement s'il y en a)
   - "Un commit ne mélange pas technique et contenu"
   - "Merger la PR sur main déploie le site en production"
2. **Issues à clôturer** (multiSelect) : les candidates, les entièrement résolues pré-cochées.
3. **Branches non mergées** (seulement s'il y en a) : les supprimer quand même ou les garder.
4. **Découpage** (seulement si technique et contenu sont mélangés) : deux commits séparés (recommandé) ou annuler.

Si une règle n'est pas cochée ou si l'utilisateur annule : n'exécute rien et arrête-toi.

## 5. Vérifications

```bash
npm run lint
npx tsc -b
npm test
```

Un échec : montre la sortie et arrête-toi sans committer.

## 6. Exécution

1. Branche : si tu es sur `main`, crée une branche nommée d'après le changement (`feat/...`, `fix/...`, `chore/...`, `content/...`) et bascule dessus.
2. Issues locales retenues : passe leur ligne à `Status: closed` et ajoute sous `## Comments` une ligne qui indique la branche de la PR. Ces fichiers font partie du commit technique.
3. Indexe les fichiers par nom, jamais `git add -A` ni `git add .`.
4. Commit technique d'abord, puis commit de contenu si découpage. Message au format conventionnel (`feat:`, `fix:`, `chore:`, `refactor:`, `content:` pour le contenu), en anglais comme l'historique, ou celui fourni dans `$ARGUMENTS`. Termine chaque message par la ligne d'attribution `Co-Authored-By` demandée par l'environnement.
5. `git push -u origin <branche>`.
6. PR : si une PR est déjà ouverte pour la branche, mets à jour sa description avec `gh pr edit`, sinon `gh pr create --base main`. Description courte qui liste technique et contenu séparément, puis une ligne `Closes #N` par issue GitHub retenue, et la liste des issues locales clôturées.

Ces commandes déclenchent une demande de permission. C'est voulu.

## 7. Nettoyage local

1. Mets `main` à jour sans changer de branche : `git fetch origin main:main` (ou `git pull --ff-only` si tu es sur `main`).
2. Supprime toutes les branches locales sauf `main` et la branche de la PR : `git branch -d` pour celles mergées dans `main`, `git branch -D` seulement pour celles que l'utilisateur a accepté de supprimer à l'étape 4.
3. `git remote prune origin`.

## 8. Compte rendu

Donne les hash des commits, le lien de la PR, les issues clôturées, et les branches supprimées ou conservées.

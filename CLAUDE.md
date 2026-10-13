# Notes pour les assistants IA

Lisez d'abord **[docs/PROJECT_GUIDE.md](docs/PROJECT_GUIDE.md)** : structure du site,
comment ajouter une page ou une image, mise en ligne.

## Code
- Site React + TypeScript + Vite. Toute nouvelle page s'ajoute dans
  `src/routes.ts` **et** dans `PAGES` de `src/App.tsx`.
- Vérifier que `npm run build` passe avant de proposer un commit.

## Git : jamais sans accord explicite
- **Ne jamais faire `git commit` ni `git push` sans l'accord explicite de la
  propriétaire du projet, à chaque fois.** Un accord donné une fois ne vaut pas
  pour les fois suivantes.
- Préparer les modifications, les montrer, puis demander avant de committer ou
  d'envoyer sur GitHub.
- Ne jamais faire de `git push --force`.

## Contenu
- Ne jamais inventer de contenu scientifique ou médical (bienfaits de la
  harpothérapie, études, chiffres, citations, témoignages). Le contenu vient de
  la propriétaire ; l'IA aide à structurer, mettre en forme et corriger.
- Laisser des textes d'exemple clairement identifiables plutôt qu'inventer.

## Périmètre
- Ce projet est indépendant du wiki iGEM (`Desktop\unilausanne`). Ne rien
  modifier dans ce dossier-là depuis ce projet.

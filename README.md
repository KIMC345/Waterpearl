# Waterpearl
A wiki dedicated to music and harp-therapy

Site React + TypeScript + Vite, publié gratuitement avec GitHub Pages sur
[kimc345.github.io/Waterpearl](https://kimc345.github.io/Waterpearl/).

## Démarrer

```
npm install      # une seule fois (installe les dépendances)
npm run dev      # site en local sur http://localhost:5173, mis à jour en direct
npm run build    # construit le site final dans dist/ (pour vérifier)
```

## Ajouter une page

1. Créez `src/pages/MaPage.tsx` (copiez `Bio.tsx`).
2. Ajoutez la page dans `src/routes.ts`.
3. Ajoutez son composant dans `PAGES` dans `src/App.tsx`.

Le menu se met à jour automatiquement.

Détails complets : [docs/PROJECT_GUIDE.md](docs/PROJECT_GUIDE.md).

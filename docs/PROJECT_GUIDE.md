# Waterpearl — Project Guide

> Pour toute personne (ou assistant IA) qui découvre ce projet.

---

## 1. Le projet

**Waterpearl** est un wiki consacré à la musique et à la harpothérapie.

- Dépôt GitHub : https://github.com/KIMC345/Waterpearl
- Site en ligne : https://kimc345.github.io/Waterpearl/

## 2. Technologie

- **React + TypeScript**, construit avec **Vite**.
- **React Router** pour la navigation entre les pages.
- Publié par **GitHub Pages** via **GitHub Actions** (`.github/workflows/deploy.yml`).

Le site doit être *construit* (`npm run build`) avant publication : GitHub
Actions le fait automatiquement à chaque push sur `main`.

## 3. Structure des fichiers

```
Waterpearl/
├── index.html              -> point d'entrée (ne contient que <div id="root">)
├── src/
│   ├── main.tsx            -> démarre React
│   ├── App.tsx             -> associe chaque adresse à sa page
│   ├── routes.ts           -> LA liste des pages (adresse + titre)
│   ├── image.ts            -> img(), audio(), video() : adresse d'un fichier
│   ├── audios.ts           -> liste des audios (page Audio et vidéos)
│   ├── videos.ts           -> liste des vidéos (page Audio et vidéos)
│   ├── style.css           -> styles communs à tout le site
│   ├── components/
│   │   ├── Layout.tsx      -> cadre commun : menu + contenu + pied de page
│   │   ├── Nav.tsx         -> menu (généré depuis routes.ts)
│   │   └── Footer.tsx      -> pied de page
│   └── pages/
│       ├── Home.tsx          -> Accueil         (/)
│       ├── HarpeTherapie.tsx -> Harpe thérapie  (/harpe-therapie)
│       ├── Projets.tsx       -> Projets         (/projets)
│       ├── HarpSheets.tsx    -> Harp sheets     (/harp-sheets)
│       ├── AudioVideos.tsx   -> Audio et vidéos (/audio-videos)
│       └── Bio.tsx           -> Bio             (/bio)
├── public/                 -> copié tel quel dans le site final
│   ├── images/             -> images du site
│   ├── audio/              -> fichiers MP3
│   └── video/              -> petits fichiers MP4
├── scripts/
│   └── postbuild.mjs       -> crée un fichier par page après le build
├── .github/workflows/
│   └── deploy.yml          -> publication automatique sur GitHub Pages
├── docs/PROJECT_GUIDE.md   -> ce guide
├── CLAUDE.md               -> règles pour les assistants IA
└── package.json            -> dépendances et commandes npm
```

`node_modules/` (dépendances installées) et `dist/` (site construit) ne sont
pas versionnés (voir `.gitignore`).

## 4. Travailler en local

```
npm install      # une seule fois, ou après un changement de package.json
npm run dev      # ouvre le site sur http://localhost:5173, mis à jour en direct
npm run build    # construit le site final dans dist/
npm run preview  # sert dist/ pour vérifier le résultat final
```

Avant de committer, toujours vérifier que `npm run build` passe sans erreur.

## 5. Ajouter une page

1. Créer `src/pages/MaPage.tsx` (copier `Bio.tsx` comme modèle).
2. Ajouter la page dans `src/routes.ts` :
   ```ts
   { path: '/ma-page', title: 'Ma page' },
   ```
   Adresse : minuscules, sans accents ni espaces, mots séparés par `-`.
3. Ajouter le composant dans `PAGES` dans `src/App.tsx` :
   ```tsx
   import MaPage from './pages/MaPage.tsx'
   // ...
   '/ma-page': MaPage,
   ```
   Si on oublie cette étape, TypeScript affiche une erreur au build.

Le menu, le titre de l'onglet et le fichier généré pour GitHub Pages suivent
automatiquement `routes.ts` : pas besoin de les modifier.

## 6. Ajouter une image

1. Placer le fichier dans `public/images/` (nom sans accents ni espaces).
2. L'insérer dans une page avec la fonction `img()` :
   ```tsx
   import { img } from '../image.ts'
   // ...
   <img src={img('ma-photo.jpg')} alt="Description de l'image" />
   ```
   Ne pas écrire `src="/images/ma-photo.jpg"` : le site est publié sous
   `/Waterpearl/`, et cette adresse ne fonctionnerait pas en ligne.
3. Toujours remplir `alt` (accessibilité).
4. Préférer des images légères (JPG/WebP, moins de ~500 Ko).
5. N'utiliser que des images dont on a les droits.

## 7. Ajouter un audio ou une vidéo

- **Audio** : placer le MP3 dans `public/audio/`, puis remplir un emplacement
  dans `src/audios.ts` (`titre`, `fichier`, et `image` facultative).
- **Vidéo** : de préférence sur YouTube (lien dans le champ `youtube` de
  `src/videos.ts`). Seuls de courts extraits légers (moins de ~20 Mo) vont
  dans `public/video/` (champ `fichier`) : GitHub refuse les fichiers de plus
  de 100 Mo et le site est limité à environ 1 Go.
- Un champ vide affiche un emplacement « à venir ».

## 8. Couleurs et style

Le design reprend celui du site Wix Waterpearl Harpe : bandeau turquoise,
fond bleu très pâle, textes en italique.

- Couleurs et polices : en haut de `src/style.css` (bloc `:root`).
- Polices : **Playfair Display** (grand titre) et **Libre Baskerville**
  (menu, texte), installées via npm (`@fontsource/...`) et importées dans
  `src/main.tsx` : elles sont intégrées au site, sans service externe.
- Images pas encore fournies : emplacements vides (classe `image-vide`),
  à remplacer par `<img src={img('...')} />`.

## 9. Mise en ligne

- Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui construit
  le site et le publie. Suivi dans l'onglet **Actions** du dépôt GitHub.
- Réglage requis une fois : **Settings → Pages → Source : GitHub Actions**.
- Adresse : `kimc345.github.io/Waterpearl/`, d'où `base: '/Waterpearl/'` dans
  `vite.config.ts` (repris par le routeur et par `img()`).
- Pour un domaine personnalisé plus tard : l'acheter, configurer ses DNS,
  le déclarer dans **Settings → Pages → Custom domain**, ajouter
  `public/CNAME` et passer `base` à `'/'`. Ne jamais déclarer un domaine
  qui ne fonctionne pas encore : GitHub y redirige tous les visiteurs.
- GitHub Pages ne connaît que des fichiers : `scripts/postbuild.mjs` copie
  `index.html` dans `dist/<page>/index.html` pour chaque page de `routes.ts`
  (sinon `/bio` renverrait une erreur 404), plus un `404.html`.

## 10. Git

- Branche principale : `main`.
- `git pull` avant de commencer à travailler.
- Petits commits avec des messages clairs.
- **Aucun commit ni push sans l'accord de la propriétaire** (voir `CLAUDE.md`).
- Jamais de `git push --force`.

## 11. Ce qui reste à faire

- Écrire le contenu réel des pages (actuellement textes d'exemple).
- Définir la liste des pages et le menu.
- Choisir les couleurs du site.

### Traduction (décidé le 14 octobre 2026, à faire plus tard)

- Choix retenu : de **vraies versions traduites**, relues par la
  propriétaire, avec un sélecteur de langue (FR / EN…) dans le bandeau.
- Écarté : le widget Google Traduction (envoie le contenu à Google et fait
  planter les sites React) et la seule traduction automatique du navigateur.
- **À faire seulement quand tous les textes français seront écrits**, pour ne
  pas traduire deux fois. Demander d'abord quelles langues ajouter.
- Traduire fidèlement, sans ajouter de contenu, puis faire relire avant
  de committer.

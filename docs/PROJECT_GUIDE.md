# Waterpearl — Project Guide

> Pour toute personne (ou assistant IA) qui découvre ce projet.

---

## 1. Le projet

**Waterpearl** est un wiki consacré à la musique et à la harpothérapie.

- Dépôt GitHub : https://github.com/KIMC345/Waterpearl
- Site en ligne (une fois GitHub Pages activé) : https://kimc345.github.io/Waterpearl/

## 2. Technologie

Site **statique en HTML + CSS**, sans framework ni étape de build :
ce qui est dans le dépôt est exactement ce qui est publié.

## 3. Structure des fichiers

```
Waterpearl/
├── index.html          -> page d'accueil
├── a-propos.html       -> page "À propos"
├── style.css           -> styles communs à toutes les pages
├── images/             -> images du site
├── docs/
│   └── PROJECT_GUIDE.md  -> ce guide
├── CLAUDE.md           -> règles pour les assistants IA
└── README.md
```

## 4. Voir le site en local

Double-cliquer sur `index.html` : il s'ouvre dans le navigateur.
Après une modification, recharger la page (F5).

## 5. Ajouter une page

1. Copier `a-propos.html` et renommer la copie (ex. `harpotherapie.html`).
   Noms de fichiers : minuscules, sans accents ni espaces, mots séparés par `-`.
2. Changer le `<title>` et le contenu dans `<main>`.
3. Ajouter un lien vers la nouvelle page dans le `<nav>` de **chaque** page
   (le menu est recopié dans chaque fichier).
4. Dans le menu de la nouvelle page, mettre `class="actif"` sur son propre lien.

## 6. Ajouter une image

1. Placer le fichier dans `images/` (nom sans accents ni espaces).
2. L'insérer dans la page :
   ```html
   <img src="images/ma-photo.jpg" alt="Description de l'image">
   ```
3. Toujours remplir `alt` (accessibilité).
4. Préférer des images légères (JPG/WebP, moins de ~500 Ko).
5. N'utiliser que des images dont on a les droits (photos personnelles,
   images libres de droits avec crédit si demandé).

## 7. Couleurs et style

Les couleurs sont définies en haut de `style.css` (bloc `:root`).
Le mode sombre suit automatiquement le réglage de l'ordinateur ; ses couleurs
sont dans le bloc `@media (prefers-color-scheme: dark)`.

## 8. Mise en ligne

Le site est publié par **GitHub Pages** (gratuit, dépôt public) :
Settings → Pages → Branch `main` / `(root)`.
Chaque `git push` sur `main` met le site à jour en 1 à 2 minutes.

## 9. Git

- Branche principale : `main`.
- `git pull` avant de commencer à travailler.
- Petits commits avec des messages clairs.
- **Aucun commit ni push sans l'accord de la propriétaire** (voir `CLAUDE.md`).
- Jamais de `git push --force`.

## 10. Ce qui reste à faire

- Remplacer le titre provisoire « Mon wiki » par « Waterpearl » dans toutes les pages.
- Écrire le contenu réel des pages (actuellement textes d'exemple).
- Définir la liste des pages et le menu.
- Choisir les couleurs du site.

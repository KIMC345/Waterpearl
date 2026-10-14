// Liste de toutes les pages du site.
// Elle sert au menu (Nav.tsx), aux routes (App.tsx) et au script de build
// (scripts/postbuild.mjs), qui crée un fichier par page pour GitHub Pages.
// Pour ajouter une page : ajoutez-la ici, puis son composant dans App.tsx.
export const ROUTES = [
  { path: '/', title: 'Accueil' },
  { path: '/harpe-therapie', title: 'Harpe thérapie' },
  { path: '/projets', title: 'Projets' },
  { path: '/harp-sheets', title: 'Harp sheets' },
  { path: '/audio-videos', title: 'Audio et vidéos' },
  { path: '/bio', title: 'Bio' },
] as const

export type RoutePath = (typeof ROUTES)[number]['path']

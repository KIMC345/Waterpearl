// Adresse d'une image de public/images/, quel que soit l'endroit où le site
// est publié (base dans vite.config.ts). Exemple : img('harpe.jpg')
export function img(name: string) {
  return `${import.meta.env.BASE_URL}images/${name}`
}

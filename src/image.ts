// Adresse d'une image de public/images/, quel que soit l'endroit où le site
// est publié (base dans vite.config.ts). Exemple : img('harpe.jpg')
export function img(name: string) {
  return `${import.meta.env.BASE_URL}images/${name}`
}

// Adresse d'un audio de public/audio/. Exemple : audio('morceau.mp3')
export function audio(name: string) {
  return `${import.meta.env.BASE_URL}audio/${name}`
}

// Adresse d'une vidéo de public/video/. Exemple : video('extrait.mp4')
export function video(name: string) {
  return `${import.meta.env.BASE_URL}video/${name}`
}

// Vidéos de la page « Audio et vidéos », dans l'ordre d'affichage.
//
// Pour chaque vidéo, remplissez UN des deux champs :
// - youtube : lien de la vidéo YouTube (ex. 'https://youtu.be/xxxxxxxxxxx'),
//             conseillé pour les vidéos longues (concerts, séances)
// - fichier : MP4 court et léger (moins de ~20 Mo) placé dans public/video/
// Si les deux sont vides, un emplacement vide « à venir » s'affiche.

export type Video = {
  titre: string
  youtube: string
  fichier: string
}

export const VIDEOS: Video[] = [
  { titre: '', youtube: '', fichier: '' },
  { titre: '', youtube: '', fichier: '' },
  { titre: '', youtube: '', fichier: '' },
  { titre: '', youtube: '', fichier: '' },
]

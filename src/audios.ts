// Audios de la page « Audio et vidéos », rangés par catégorie.
//
// Pour remplir un emplacement :
// - fichier : MP3 placé dans public/audio/ (nom sans accents ni espaces)
// - image   : petite vignette placée dans public/images/ (facultative)
// - titre   : texte affiché à côté du bouton lecture
// Un champ laissé vide ('') affiche un emplacement vide « à venir ».
//
// Pour ajouter une ligne, copiez une ligne { titre: ..., image: ... },
// pour ajouter une catégorie, copiez tout un bloc { titre: ..., audios: [...] },

export type Audio = {
  titre: string
  fichier: string
  image: string
}

export type CategorieAudio = {
  titre: string
  audios: Audio[]
}

export const CATEGORIES_AUDIO: CategorieAudio[] = [
  {
    titre: '',
    audios: [
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
    ],
  },
  {
    titre: '',
    audios: [
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
      { titre: '', fichier: '', image: '' },
    ],
  },
]

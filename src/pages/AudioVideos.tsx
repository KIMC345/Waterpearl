import { useRef, useState } from 'react'
import { audio, img, video } from '../image.ts'
import { CATEGORIES_AUDIO } from '../audios.ts'
import { VIDEOS, type Video } from '../videos.ts'

// Identifiant d'une vidéo YouTube à partir de son lien
// (youtu.be/…, youtube.com/watch?v=…, /embed/…, /shorts/…).
function idYoutube(lien: string) {
  return lien.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([\w-]{11})/)?.[1]
}

function IconeLecture({ pause }: { pause: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {pause ? (
        <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
      ) : (
        <path d="M6 3.5v17L20 12z" />
      )}
    </svg>
  )
}

function CadreVideo({ v }: { v: Video }) {
  const id = v.youtube && idYoutube(v.youtube)
  if (id) {
    // youtube-nocookie : pas de cookies publicitaires avant la lecture
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={v.titre || 'Vidéo'}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }
  if (v.fichier) {
    return <video controls preload="metadata" src={video(v.fichier)} />
  }
  return (
    <div className="video-vide">
      <IconeLecture pause={false} />
    </div>
  )
}

export default function AudioVideos() {
  // Un seul lecteur pour toute la page : lancer un morceau arrête le précédent.
  const lecteur = useRef<HTMLAudioElement>(null)
  const [actif, setActif] = useState('')
  const [enLecture, setEnLecture] = useState(false)

  function basculer(fichier: string) {
    const el = lecteur.current
    if (!el) return
    if (fichier === actif) {
      if (el.paused) el.play()
      else el.pause()
    } else {
      el.src = audio(fichier)
      setActif(fichier)
      el.play()
    }
  }

  return (
    <div className="medias">
      <h1>Audio et vidéos</h1>

      <section>
        <h2 className="medias-section">Audio</h2>
        <div className="categories-audio">
          {CATEGORIES_AUDIO.map((categorie, i) => (
            <div key={i} className="categorie-audio">
              <h3 className={categorie.titre ? undefined : 'a-venir'}>
                {categorie.titre || 'Catégorie à venir'}
              </h3>
              <ul>
                {categorie.audios.map((a, j) => {
                  const joue = a.fichier !== '' && a.fichier === actif && enLecture
                  return (
                    <li key={j} className="piste">
                      {a.image ? (
                        <img className="piste-vignette" src={img(a.image)} alt="" />
                      ) : (
                        <span className="piste-vignette image-vide" />
                      )}
                      <button
                        type="button"
                        className="piste-lecture"
                        disabled={!a.fichier}
                        onClick={() => basculer(a.fichier)}
                        aria-label={`${joue ? 'Pause' : 'Écouter'} : ${a.titre || 'audio à venir'}`}
                      >
                        <IconeLecture pause={joue} />
                      </button>
                      <span className={a.titre ? 'piste-titre' : 'piste-titre a-venir'}>
                        {a.titre || 'Titre à venir'}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <audio
          ref={lecteur}
          preload="none"
          onPlay={() => setEnLecture(true)}
          onPause={() => setEnLecture(false)}
          onEnded={() => setEnLecture(false)}
        />
      </section>

      <section>
        <h2 className="medias-section">Vidéos</h2>
        <div className="grille-videos">
          {VIDEOS.map((v, i) => (
            <figure key={i} className="carte-video">
              <div className="cadre-video">
                <CadreVideo v={v} />
              </div>
              <figcaption className={v.titre ? undefined : 'a-venir'}>
                {v.titre || 'Vidéo à venir'}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

import type { ReactNode } from 'react'

// Liens des réseaux sociaux : à remplir avec les vraies adresses.
// Tant qu'une adresse est vide, l'icône s'affiche sans lien.
const FACEBOOK = ''
const INSTAGRAM = ''

function IconeFacebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-4.5 1.9-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

function IconeInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.3" />
    </svg>
  )
}

function Reseau({ url, nom, children }: { url: string; nom: string; children: ReactNode }) {
  return url ? (
    <a href={url} target="_blank" rel="noreferrer" aria-label={nom}>{children}</a>
  ) : (
    <span title={`${nom} (lien à ajouter)`}>{children}</span>
  )
}

export default function Bio() {
  return (
    <div className="bio">
      <section className="bio-haut">
        {/* Photo à venir : remplacer par <img className="bio-photo" src={img('...')} alt="..." /> */}
        <div className="bio-photo image-vide" role="img" aria-label="Photo à venir" />

        <div className="bio-bonjour">
          <h1>Bonjour !</h1>
          <p>
            Bienvenue sur mon site ! En tant que praticienne en harpe thérapie, je suis
            profondément passionnée par toutes les formes d’art qui favorisent des échanges
            authentiques et non verbaux. Je crois que ces pratiques nous offrent un espace
            privilégié pour nous révéler pleinement, loin des attentes sociétales, et permettent
            de nous reconnecter à la vie qui nous anime.
            <br />
            Comme vous le découvrirez sur ce site, la harpe thérapie propose une multitude
            d’applications. Si vous souhaitez explorer cette pratique, je serai ravie de discuter
            de vos besoins et de votre projet.
          </p>
          <div className="bio-reseaux">
            <Reseau url={FACEBOOK} nom="Facebook"><IconeFacebook /></Reseau>
            <Reseau url={INSTAGRAM} nom="Instagram"><IconeInstagram /></Reseau>
          </div>
        </div>
      </section>

      <section className="bio-histoire">
        <h2>Mon histoire</h2>
        <p>
          Après plus de vingt ans passés dans le secteur bancaire, où j’ai acquis rigueur et
          expertise, j’ai toujours ressenti le besoin profond d’explorer un autre chemin, plus
          intime et créatif. D’abord tournée vers ma famille, ma curiosité et mon temps libre se
          sont ensuite portés vers la musique, passion qui a pris tout son sens avec la
          découverte de la harpe.
        </p>
        <p>
          Les rencontres avec des personnes sensibles à mes valeurs et à mes créations musicales
          ont été une révélation. Elles m’ont permis de réaliser à quel point la musique est un
          langage essentiel dans ma vie. Pourtant, je cherchais encore à donner plus de
          profondeur à cette expression.
        </p>
        <p>
          C’est alors que j’ai découvert la harpe thérapie, une voie qui permet d’ouvrir un
          dialogue au-delà des mots, offrant un moyen unique d’exprimer et de comprendre les
          émotions autrement. L’expérience fut si riche que le désir de partager cette pratique
          s’est imposé à moi. Aujourd’hui, je souhaite mettre cette pratique au service de ceux
          qui, comme moi, ressentent le besoin de se connecter différemment, à travers la
          vibration profonde qu’apportent la musique et le son.
        </p>
      </section>
    </div>
  )
}

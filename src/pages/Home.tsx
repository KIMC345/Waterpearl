import { Link } from 'react-router-dom'

// Les deux images sont pour l'instant des emplacements vides
// (classe "image-vide") : à remplacer par <img src={img('...')} /> plus tard.
export default function Home() {
  return (
    <>
      <section className="accueil">
        <div className="accueil-rond image-vide" role="img" aria-label="Image à venir" />
        <h1 className="accueil-titre">
          Waterpearl
          <br />
          Harpe
        </h1>
        <div className="accueil-portrait image-vide" role="img" aria-label="Image à venir" />
      </section>

      <section className="accueil-texte">
        <p>Bienvenue sur mon site dédié à la Harpe Thérapie.</p>
        <p>
          Vous y découvrirez les différentes applications de cette pratique encore peu connue
          en Europe, ainsi que les nombreux bienfaits qu’elle peut offrir, tant sur le plan
          émotionnel que physique.
        </p>
        <p>
          Découvrez ma sélection de partitions de harpe, incluant des compositions spécialement
          conçues pour les petites harpes celtiques ou popharpes. Inspirées par des instants de
          vie, ces compositions invitent à l’introspection, soutiennent la relaxation et
          participent au bien-être global des participants ou auditeurs.
        </p>
        <p>
          Que vous soyez harpiste débutant·e ou expérimenté·e, ou simplement en quête de
          bien-être à travers la musique et les vibrations, j’espère que ce site éveillera en
          vous une résonance intérieure et vous offrira les ressources nécessaires pour faire
          rayonner autour de vous les bienfaits profonds et transformateurs de la harpe.
        </p>
      </section>

      <section className="accueil-actions">
        <Link to="/harpe-therapie" className="lien-majuscules">Découvrir la harpe thérapie</Link>
        <Link to="/harp-sheets" className="bouton-pilule">Vers les partitions</Link>
      </section>
    </>
  )
}

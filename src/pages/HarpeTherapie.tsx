import { img } from '../image.ts'

// Fond : la photo des voiles, éclaircie par un voile blanc pour que le texte reste lisible.
const FOND = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${img('harpe-voiles-fond.jpg')})`

export default function HarpeTherapie() {
  return (
    <section className="fond-image" style={{ backgroundImage: FOND }}>
      <div className="texte-page">
        <h1 className="titre-majuscules">Harpe thérapie</h1>

        <p>
          La harpe thérapie a vu le jour en Californie dans les années 1990 grâce à l'initiative
          de Christina Tourin, et fait partie du domaine passionnant de la musicothérapie.
          <br />
          En plaçant la musique de la harpe au cœur des échanges, les harpe thérapeutes adaptent
          leur répertoire pour favoriser un dialogue musical basé sur l'écoute et l'empathie.
          Cette approche crée un environnement propice à l'exploration des ressources
          intérieures, permettant à chacun d'atteindre équilibre et sérénité. Bien que la harpe
          thérapie ne soit pas encore officiellement reconnue en Europe, elle trouve de plus en
          plus sa place dans divers environnements, tels que les hôpitaux, maisons de retraite
          ou centres de bien-être, offrant des séances personnalisées adaptées aux besoins
          chacun.
        </p>

        <p>
          Vous trouverez ci-dessous les différents domaines d'application de la harpe thérapie
          et leurs bienfaits.
        </p>
      </div>
    </section>
  )
}

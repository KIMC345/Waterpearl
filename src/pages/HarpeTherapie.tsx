import { img } from '../image.ts'

// Fond : la photo des voiles, éclaircie par un voile blanc pour que le texte reste lisible.
const FOND = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${img('harpe-voiles-fond.jpg')})`

// Les 6 domaines d'application, affichés en 2 rangées de 3 dans cet ordre.
// "titre" : une entrée par ligne du titre.
// Photos à venir : ajouter image: 'nom.jpg' (fichier dans public/images/).
type Domaine = {
  titre: string[]
  texte: string
  conclusion: string
  image?: string
  alt?: string
}

const DOMAINES: Domaine[] = [
  {
    titre: ['Dans les crèches ou les écoles', 'au service de la créativité'],
    texte:
      "La harpe est un instrument idéal grâce à sa forme unique et à la richesse de ses sonorités. Elle offre une multitude de possibilités sonores qui permettent d'explorer le jeu tout en faisant ses premières expériences musicales. La harpe reste accessible et encourage l'apprentissage créatif.",
    conclusion:
      "Découvrir la musique de manière créative et expressive tout en honorant la personnalité unique de chaque enfant.",
  },
  {
    titre: ['Dans les centres de bien-être', 'ou en Entreprise'],
    texte:
      "La harpe thérapie est un magnifique complément aux séances de yoga yin, restauratif ou yoga nidra, apportant détente et harmonie. Son intégration en entreprise constitue un atout précieux pour la gestion du stress, favorisant ainsi un environnement de travail plus serein.",
    conclusion: 'Offrez à votre esprit et à votre corps cette expérience apaisante et revitalisante.',
  },
  {
    titre: ['En EMS, ou en EHPAD'],
    texte:
      "La thérapie par la harpe en maison de retraite offre des séances individuelles dans les chambres ou des sessions de groupe, créant un lien précieux au-delà des soins. Les séances peuvent aider à aborder avec bienveillance la perte d'indépendance, de mobilité, ainsi que les changements liés aux différents sens.",
    conclusion:
      "Les expériences et la sagesse des personnes âgées constituent un trésor inestimable, qu'il est essentiel de chérir et de célébrer.",
  },
  {
    titre: ['Pour des projets interactifs', 'avec la harpe'],
    texte:
      "La harpe thérapie permet d'organiser des sessions personnalisées, adaptées aux besoins spécifiques de chaque groupe. Elle favorise ainsi les échanges, et crée un espace propice à l'expression et à l'écoute. La harpe devient ainsi un vecteur d'harmonie, favorisant l'enrichissement mutuel au travers d'expériences collectives partagées.",
    conclusion:
      "La diversité de l'être humain, dans toutes ses différences, est une richesse précieuse à reconnaître, à respecter et à cultiver.",
  },
  {
    titre: ['Dans les services hospitaliers'],
    texte:
      "Les harpe thérapeutes peuvent intervenir dans différents services hospitaliers, tels que la néonatologie, l'oncologie afin de créer un cadre apaisant qui diminue le stress et l'anxiété des patients. À travers leur musique, ils souhaitent contribuer à une expérience de soin plus positive. L'entourage ainsi que le personnel hospitalier profite généralement également du son apaisant de l'instrument.",
    conclusion:
      'Accompagner et apaiser par le son en créant un cocon sonore pour un environnement plus tranquillisant et rassurant.',
  },
  {
    titre: ['En soin palliatif'],
    texte:
      "La harpe, avec sa douceur apaisante, se révèle être un précieux intermédiaire pour accompagner les personnes en fin de vie. Elle permet de maintenir un lien et d'initier une préparation sereine à cette transition vers une nouvelle dimension. La musique devient alors un soutien réconfortant dans ces moments délicats.",
    conclusion:
      'Pouvoir accompagner la personne que nous chérissons vers la lumière est un cadeau inestimable.',
  },
]

export default function HarpeTherapie() {
  return (
    <>
      <section className="fond-image" style={{ backgroundImage: FOND }}>
        <div className="texte-page">
          <h1 className="titre-majuscules">Harpe thérapie</h1>

          <p>
            La harpe thérapie a vu le jour en Californie dans les années 1990 grâce à
            l'initiative de Christina Tourin, et fait partie du domaine passionnant de la
            musicothérapie.
            <br />
            En plaçant la musique de la harpe au cœur des échanges, les harpe thérapeutes
            adaptent leur répertoire pour favoriser un dialogue musical basé sur l'écoute et
            l'empathie. Cette approche crée un environnement propice à l'exploration des
            ressources intérieures, permettant à chacun d'atteindre équilibre et sérénité. Bien
            que la harpe thérapie ne soit pas encore officiellement reconnue en Europe, elle
            trouve de plus en plus sa place dans divers environnements, tels que les hôpitaux,
            maisons de retraite ou centres de bien-être, offrant des séances personnalisées
            adaptées aux besoins de chacun.
          </p>

          <p>
            Vous trouverez ci-dessous les différents domaines d'application de la harpe thérapie
            et leurs bienfaits.
          </p>
        </div>
      </section>

      <section className="domaines">
        {DOMAINES.map((d) => (
          <article key={d.titre.join(' ')} className="domaine">
            <h2 className="domaine-titre">
              {d.titre.map((ligne, i) => (
                <span key={i}>{ligne}</span>
              ))}
            </h2>
            {d.image ? (
              <img className="domaine-image" src={img(d.image)} alt={d.alt ?? ''} />
            ) : (
              <div className="domaine-image image-vide" role="img" aria-label="Image à venir" />
            )}
            <p className="domaine-texte">{d.texte}</p>
            <p className="domaine-etoiles" aria-hidden="true">***</p>
            <p className="domaine-conclusion">{d.conclusion}</p>
          </article>
        ))}
      </section>
    </>
  )
}

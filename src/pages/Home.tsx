// Les deux images sont pour l'instant des emplacements vides
// (classe "image-vide") : à remplacer par <img src={img('...')} /> plus tard.
export default function Home() {
  return (
    <section className="accueil">
      <div className="accueil-rond image-vide" role="img" aria-label="Image à venir" />
      <h1 className="accueil-titre">
        Waterpearl
        <br />
        Harpe
      </h1>
      <div className="accueil-portrait image-vide" role="img" aria-label="Image à venir" />
    </section>
  )
}

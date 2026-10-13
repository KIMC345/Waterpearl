export default function Home() {
  return (
    <>
      <h1>Bienvenue</h1>
      <p>Ma maman, c'est la meilleure !</p>

      <h2>Une section</h2>
      <p>Pour ajouter une image, placez-la dans le dossier <code>public/images/</code> puis :</p>
      <pre><code>{'<img src={img(\'ma-photo.jpg\')} alt="Description de la photo" />'}</code></pre>
    </>
  )
}

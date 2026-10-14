import type { ComponentType } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES, type RoutePath } from './routes.ts'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import HarpeTherapie from './pages/HarpeTherapie.tsx'
import Projets from './pages/Projets.tsx'
import HarpSheets from './pages/HarpSheets.tsx'
import AudioVideos from './pages/AudioVideos.tsx'
import Bio from './pages/Bio.tsx'

// Un composant par page de routes.ts. TypeScript signale une erreur
// si une page de la liste n'a pas de composant ici.
const PAGES: Record<RoutePath, ComponentType> = {
  '/': Home,
  '/harpe-therapie': HarpeTherapie,
  '/projets': Projets,
  '/harp-sheets': HarpSheets,
  '/audio-videos': AudioVideos,
  '/bio': Bio,
}

export default function App() {
  return (
    <Routes>
      {ROUTES.map(({ path, title }) => {
        const Page = PAGES[path]
        return (
          <Route
            key={path}
            path={path}
            element={
              <Layout title={title}>
                <Page />
              </Layout>
            }
          />
        )
      })}
      <Route
        path="*"
        element={
          <Layout title="Page introuvable">
            <div className="page">
              <h1>Page introuvable</h1>
              <p>Cette page n'existe pas.</p>
            </div>
          </Layout>
        }
      />
    </Routes>
  )
}

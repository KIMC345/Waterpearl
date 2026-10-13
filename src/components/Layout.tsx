import { useEffect, type ReactNode } from 'react'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'

// Cadre commun à toutes les pages : menu, contenu, pied de page.
export default function Layout({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title === 'Accueil' ? 'Waterpearl' : `${title} — Waterpearl`
  }, [title])

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

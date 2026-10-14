import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '../routes.ts'

// Petite flèche (chevron) des boutons de défilement du menu sur téléphone
function Chevron({ vers }: { vers: 'gauche' | 'droite' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={vers === 'droite' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} />
    </svg>
  )
}

export default function Nav() {
  // Sur téléphone, le menu défile : on retient s'il reste des onglets
  // cachés à gauche ou à droite, pour afficher les flèches et le fondu.
  const menu = useRef<HTMLElement>(null)
  const [cache, setCache] = useState({ gauche: false, droite: false })
  const { pathname } = useLocation()

  function mettreAJour() {
    const el = menu.current
    if (!el) return
    setCache({
      gauche: el.scrollLeft > 4,
      droite: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    })
  }

  function defiler(sens: 1 | -1) {
    const el = menu.current
    el?.scrollBy({ left: sens * el.clientWidth, behavior: 'smooth' })
  }

  // À chaque changement de page, on fait apparaître l'onglet actif
  // (par ex. « Bio », qui est dans la partie cachée au départ).
  useEffect(() => {
    const el = menu.current
    const actif = el?.querySelector<HTMLElement>('a.actif')
    if (el && actif && actif.offsetLeft + actif.offsetWidth > el.scrollLeft + el.clientWidth) {
      el.scrollLeft = actif.offsetLeft
    }
    mettreAJour()
  }, [pathname])

  useEffect(() => {
    window.addEventListener('resize', mettreAJour)
    return () => window.removeEventListener('resize', mettreAJour)
  }, [])

  const classes = ['onglets-cadre', cache.gauche && 'cache-gauche', cache.droite && 'cache-droite']

  return (
    <header className="bandeau">
      <div className="bandeau-ligne">
        <Link to="/" className="marque">
          {/* Même dessin que l'icône d'onglet (public/favicon.svg) */}
          <img className="logo" src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" />
          Waterpearl Harpe
        </Link>
        <div className={classes.filter(Boolean).join(' ')}>
          <button
            type="button"
            className="onglets-fleche gauche"
            onClick={() => defiler(-1)}
            aria-label="Onglets précédents"
            tabIndex={cache.gauche ? 0 : -1}
          >
            <Chevron vers="gauche" />
          </button>
          <nav className="onglets" ref={menu} onScroll={mettreAJour}>
            {ROUTES.map(({ path, title }) => (
              <NavLink
                key={path}
                to={path}
                end
                className={({ isActive }) => (isActive ? 'actif' : undefined)}
              >
                <span>{title}</span>
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="onglets-fleche droite"
            onClick={() => defiler(1)}
            aria-label="Onglets suivants"
            tabIndex={cache.droite ? 0 : -1}
          >
            <Chevron vers="droite" />
          </button>
        </div>
        {/* Icône panier reprise du site Wix (décorative : pas de boutique ici) */}
        <svg className="panier" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 4h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2" />
          <circle cx="9.5" cy="19" r="1.2" />
          <circle cx="17" cy="19" r="1.2" />
        </svg>
      </div>
    </header>
  )
}

import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../routes.ts'

export default function Nav() {
  return (
    <header className="bandeau">
      <div className="bandeau-ligne">
        <Link to="/" className="marque">Waterpearl Harpe</Link>
        <nav className="onglets">
          {ROUTES.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) => (isActive ? 'actif' : undefined)}
            >
              {title}
            </NavLink>
          ))}
        </nav>
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

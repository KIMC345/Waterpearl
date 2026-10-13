import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../routes.ts'

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/" className="titre">Waterpearl</Link>
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
    </header>
  )
}

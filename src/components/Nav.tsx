import { useState } from 'react'
import NavItem from './NavItem'
import NavDropdown from './NavDropdown'
import SpotterIcon from '../assets/icons/SpotterIcon'
import SpotterLogo from '../assets/icons/SpotterLogo'
import { DEFAULT_LINKS, PRODUCT_DROPDOWN_ITEMS, NAV_ITEMS, NAV_LABELS, URLS, ICON_SIZES } from '../constants'

type NavLink = { label: string; href: string }

export default function Nav({ links = DEFAULT_LINKS }: { links?: readonly NavLink[] }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={`nav${mobileOpen ? ' nav--open' : ''}`}>
      <div className="nav__inner">
     <div className="nav__header">
      <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}>
          <span className="nav__bar" />
          <span className="nav__bar" />
          <span className="nav__bar" />
        </button>
        <a className="nav__brand" href={URLS.HOME}>
          <SpotterIcon height={ICON_SIZES.SPOTTER_ICON} />
          <SpotterLogo height={ICON_SIZES.SPOTTER_LOGO} />
        </a>
        </div>
        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <NavItem key={link.href} label={link.label} href={link.href} />
          ))}
          <NavDropdown
            label={NAV_LABELS.PRODUCTS}
            items={PRODUCT_DROPDOWN_ITEMS}
          />
          {NAV_ITEMS.map((item) => (
            <NavItem 
              key={item.href} 
              label={item.label} 
              href={item.href} 
              icon={item.icon} 
            />
          ))}
        </nav>

        <div className="nav__cta">
          <a className="nav__button" href={URLS.SIGNUP}>{NAV_LABELS.SIGN_UP}</a>
        </div>
      </div>
    </header>
  )
}



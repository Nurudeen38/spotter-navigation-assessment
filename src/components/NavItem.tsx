import React from 'react'
import { ICON_SIZES } from '../constants'

export type NavItemProps = {
  label: string
  href: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
  active?: boolean
  icon?: React.ComponentType<{ width?: string | number; height?: string | number; className?: string }>
}

export default function NavItem({ label, href, target, rel, active, icon }: NavItemProps) {
  return (
    <a
      className={`nav__item${active ? ' nav__item--active' : ''}`}
      href={href}
      target={target}
      rel={rel}
    >
      {icon && React.createElement(icon, { width: ICON_SIZES.NAV_ICON, height: ICON_SIZES.NAV_ICON })}
      {label}
    </a>
  )
}



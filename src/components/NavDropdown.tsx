import React, { useState, useRef, useEffect } from 'react'
import { ICON_SIZES } from '../constants'


export type NavDropdownItem = {
  label: string
  href: string
  icon?: React.ComponentType<{ width?: string | number; height?: string | number; className?: string }>
}

export default function NavDropdown({ label, items }: { label: string; items: readonly NavDropdownItem[] }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 150) // 150ms delay
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`dropdown${open ? ' dropdown--open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="dropdown__trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <span className="dropdown__chevron" aria-hidden>▾</span>
      </button>
      <div className="dropdown__menu" role="menu">
        {items.map((item) => (
          <a key={item.href} className="dropdown__item" role="menuitem" href={item.href}>
            {item.icon && React.createElement(item.icon, { width: ICON_SIZES.DROPDOWN_ICON, height: ICON_SIZES.DROPDOWN_ICON })}
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}




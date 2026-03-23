'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const franceCities = [
  { label: 'Nice', href: '/destinations/france/nice' },
  { label: 'Montpellier', href: '/destinations/france/montpellier' },
  { label: 'Marseille', href: '/destinations/france/marseille' },
  { label: 'Annecy', href: '/destinations/france/annecy' },
  { label: 'Avignon', href: '/destinations/france/avignon' },
  { label: 'Paris', href: '/destinations/france/paris' },
  { label: 'Saint-Malo', href: '/destinations/france/saint-malo' },
  { label: 'Carcassonne', href: '/destinations/france/carcassonne' },
  { label: 'Lyon', href: '/destinations/france/lyon' },
  { label: 'Bordeaux', href: '/destinations/france/bordeaux' },
]

const europeCities = [
  { label: 'Barcelone', href: '/destinations/europe/barcelone' },
  { label: 'Rome', href: '/destinations/europe/rome' },
  { label: 'Amsterdam', href: '/destinations/europe/amsterdam' },
  { label: 'Lisbonne', href: '/destinations/europe/lisbonne' },
  { label: 'Berlin', href: '/destinations/europe/berlin' },
  { label: 'Prague', href: '/destinations/europe/prague' },
  { label: 'Copenhague', href: '/destinations/europe/copenhague' },
  { label: 'Budapest', href: '/destinations/europe/budapest' },
]

const staticLinks = [
  { href: '/categories/itineraires', label: 'Itinéraires' },
  { href: '/categories/week-end', label: 'Week-ends' },
  { href: '/categories/voyager-malin', label: 'Voyager malin' },
  { href: '/a-propos', label: 'Notre famille' },
]

function DestinationsDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-1 text-sm font-medium text-brun-muted hover:text-terracotta transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Destinations
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-sable-dark z-50 overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-sable">
            {/* France */}
            <div className="p-4">
              <p className="text-xs font-semibold text-brun uppercase tracking-widest mb-3 flex items-center gap-1">
                🇫🇷 France
              </p>
              <ul className="space-y-1.5">
                {franceCities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="block text-sm text-brun-muted hover:text-terracotta transition-colors py-0.5"
                      onClick={() => setOpen(false)}
                    >
                      {city.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/destinations"
                    className="block text-xs text-terracotta font-medium hover:underline pt-2"
                    onClick={() => setOpen(false)}
                  >
                    Toutes les villes de France →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Europe */}
            <div className="p-4">
              <p className="text-xs font-semibold text-brun uppercase tracking-widest mb-3 flex items-center gap-1">
                🌍 Europe
              </p>
              <ul className="space-y-1.5">
                {europeCities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="block text-sm text-brun-muted hover:text-terracotta transition-colors py-0.5"
                      onClick={() => setOpen(false)}
                    >
                      {city.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/destinations"
                    className="block text-xs text-terracotta font-medium hover:underline pt-2"
                    onClick={() => setOpen(false)}
                  >
                    Toutes les destinations Europe →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDestsOpen, setMobileDestsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-creme/95 backdrop-blur-sm sticky top-0 z-50 border-b border-sable-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-display text-xl md:text-2xl text-brun font-bold tracking-tight">
              Souvenirs de Route
            </span>
            <span className="text-xs text-brun-muted hidden sm:block">
              2 adultes, 2 enfants, 1 envie d&apos;ailleurs
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <DestinationsDropdown />
            {staticLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-terracotta',
                  pathname === link.href ? 'text-terracotta' : 'text-brun-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Burger mobile */}
          <button
            className="md:hidden p-2 text-brun"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-creme border-t border-sable-dark">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {/* Destinations accordion */}
            <button
              className="flex items-center justify-between py-2 text-sm font-medium text-brun border-b border-sable"
              onClick={() => setMobileDestsOpen(!mobileDestsOpen)}
            >
              Destinations
              <svg
                className={`w-4 h-4 transition-transform ${mobileDestsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileDestsOpen && (
              <div className="pl-4 py-2 space-y-1 border-b border-sable">
                <p className="text-xs font-semibold text-brun-muted uppercase tracking-wide mb-1">🇫🇷 France</p>
                {franceCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="block text-sm text-brun-muted py-1 hover:text-terracotta"
                    onClick={() => setMenuOpen(false)}
                  >
                    {city.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold text-brun-muted uppercase tracking-wide mt-3 mb-1">🌍 Europe</p>
                {europeCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="block text-sm text-brun-muted py-1 hover:text-terracotta"
                    onClick={() => setMenuOpen(false)}
                  >
                    {city.label}
                  </Link>
                ))}
                <Link
                  href="/destinations"
                  className="block text-sm text-terracotta font-medium pt-2 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Toutes les destinations →
                </Link>
              </div>
            )}

            {staticLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'py-2 text-sm font-medium border-b border-sable last:border-0 transition-colors',
                  pathname === link.href ? 'text-terracotta' : 'text-brun'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

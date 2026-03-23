'use client'

import { useEffect, useState } from 'react'

interface SaveButtonProps {
  slug: string
  titre: string
  ville: string
}

interface SavedArticle {
  slug: string
  titre: string
  ville: string
  savedAt: string
}

export default function SaveButton({ slug, titre, ville }: SaveButtonProps) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const data = localStorage.getItem('souvenirs-favoris')
      if (data) {
        const items: SavedArticle[] = JSON.parse(data)
        setSaved(items.some((i) => i.slug === slug))
      }
    } catch {
      // localStorage non disponible
    }
  }, [slug])

  const toggle = () => {
    try {
      const data = localStorage.getItem('souvenirs-favoris')
      const items: SavedArticle[] = data ? JSON.parse(data) : []

      if (saved) {
        const updated = items.filter((i) => i.slug !== slug)
        localStorage.setItem('souvenirs-favoris', JSON.stringify(updated))
        setSaved(false)
      } else {
        const updated = [...items, { slug, titre, ville, savedAt: new Date().toISOString() }]
        localStorage.setItem('souvenirs-favoris', JSON.stringify(updated))
        setSaved(true)
      }
    } catch {
      // localStorage non disponible
    }
  }

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
        saved
          ? 'bg-terracotta text-white border-terracotta'
          : 'bg-white text-brun border-sable-dark hover:border-terracotta hover:text-terracotta'
      }`}
      aria-label={saved ? 'Retirer des favoris' : 'Sauvegarder cet article'}
    >
      <svg
        className="w-4 h-4"
        fill={saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      {saved ? 'Sauvegardé' : 'Sauvegarder'}
    </button>
  )
}

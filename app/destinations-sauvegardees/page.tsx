'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface SavedArticle {
  slug: string
  titre: string
  ville: string
  savedAt: string
}

export default function DestinationsSauvegardeesPage() {
  const [saved, setSaved] = useState<SavedArticle[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const data = localStorage.getItem('souvenirs-favoris')
      if (data) setSaved(JSON.parse(data))
    } catch {
      // localStorage non disponible
    }
    setLoaded(true)
  }, [])

  const removeFavorite = (slug: string) => {
    const updated = saved.filter((s) => s.slug !== slug)
    setSaved(updated)
    localStorage.setItem('souvenirs-favoris', JSON.stringify(updated))
  }

  if (!loaded) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-brun-muted">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-3xl font-bold text-brun mb-2">
        Mes destinations sauvegardées
      </h1>
      <p className="text-brun-muted mb-8">
        Retrouvez ici tous les articles que vous avez mis de côté.
      </p>

      {saved.length === 0 ? (
        <div className="text-center py-16 bg-sable rounded-2xl">
          <p className="text-4xl mb-4">🔖</p>
          <p className="font-display text-xl text-brun mb-2">
            Aucune destination sauvegardée
          </p>
          <p className="text-brun-muted mb-6 text-sm">
            Cliquez sur le bouton &laquo;Sauvegarder&raquo; sur n&apos;importe quel article
            pour le retrouver ici.
          </p>
          <Link href="/destinations" className="btn-primary">
            Explorer les destinations
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {saved.map((item) => (
            <div
              key={item.slug}
              className="flex items-center justify-between bg-white border border-sable-dark rounded-xl p-4 gap-4"
            >
              <div className="flex-1 min-w-0">
                <Link
                  href={`/articles/${item.slug}`}
                  className="font-medium text-brun hover:text-terracotta transition-colors block truncate"
                >
                  {item.titre}
                </Link>
                {item.ville && (
                  <p className="text-sm text-brun-muted mt-0.5">📍 {item.ville}</p>
                )}
              </div>
              <button
                onClick={() => removeFavorite(item.slug)}
                className="text-brun-muted hover:text-terracotta transition-colors shrink-0"
                aria-label="Retirer des favoris"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}

          <div className="pt-4 text-center">
            <button
              onClick={() => {
                setSaved([])
                localStorage.removeItem('souvenirs-favoris')
              }}
              className="text-sm text-brun-muted hover:text-terracotta transition-colors underline"
            >
              Tout effacer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

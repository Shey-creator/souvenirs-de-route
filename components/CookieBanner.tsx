'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type ConsentChoice = 'all' | 'none' | null

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) setVisible(true)
  }, [])

  const accept = (choice: ConsentChoice) => {
    if (choice) {
      localStorage.setItem('cookie-consent', choice)
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-sable-dark p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="font-medium text-brun mb-1">🍪 Ce site utilise des cookies</p>
            <p className="text-sm text-brun-muted">
              Nous utilisons des cookies pour analyser notre audience (Plausible, sans données personnelles)
              et améliorer votre expérience. Aucun cookie publicitaire.{' '}
              <Link href="/politique-de-confidentialite" className="text-terracotta hover:underline">
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => accept('none')}
              className="px-4 py-2 rounded-full text-sm font-medium border border-sable-dark text-brun-muted hover:border-brun transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={() => accept('all')}
              className="px-4 py-2 rounded-full text-sm font-medium bg-terracotta text-white hover:bg-terracotta-dark transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

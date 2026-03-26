'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'sdr_popup_dismissed'
const DELAY_MS = 60_000

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Ne pas afficher si déjà fermé lors d'une session précédente
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        localStorage.setItem(STORAGE_KEY, '1')
        setTimeout(() => setVisible(false), 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Inscription à la newsletter"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={dismiss}
        aria-hidden
      />

      {/* Popup */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-[slideUp_0.3s_ease]">

        {/* Bouton fermer */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-brun-muted hover:text-brun transition-colors p-1"
          aria-label="Fermer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <span className="text-5xl block mb-4" aria-hidden>🎉</span>
            <h2 className="font-display text-xl font-bold text-brun mb-2">
              Bienvenue dans la famille !
            </h2>
            <p className="text-brun-muted text-sm">
              Tu recevras nos prochains articles directement dans ta boîte mail.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <span className="text-4xl block mb-3" aria-hidden>✈️</span>
              <h2 className="font-display text-xl font-bold text-brun mb-2">
                Rejoins les familles qui voyagent malin
              </h2>
              <p className="text-brun-muted text-sm leading-relaxed">
                Nouvelles destinations, bons plans et checklist à télécharger,
                directement dans ta boîte mail. Zéro spam, promis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.fr"
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  <>Je m&apos;inscris<span aria-hidden> →</span></>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-xs text-center">
                  Une erreur est survenue. Réessaie depuis la page d&apos;accueil.
                </p>
              )}
            </form>

            <button
              onClick={dismiss}
              className="w-full text-center text-brun-muted text-xs mt-3 hover:text-brun transition-colors"
            >
              Non merci, je ne veux pas de bons plans voyage
            </button>
          </>
        )}
      </div>
    </div>
  )
}

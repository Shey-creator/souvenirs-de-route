import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable | Souvenirs de Route',
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">🧳</div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brun mb-4">
          Oups, on s&apos;est perdus... comme en voyage !
        </h1>
        <p className="text-brun-muted text-lg mb-8">
          Cette page n&apos;existe pas, mais nos destinations, elles, existent vraiment.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/destinations" className="btn-secondary">
            Voir toutes les destinations
          </Link>
        </div>
      </div>
    </div>
  )
}

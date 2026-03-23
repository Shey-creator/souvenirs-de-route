import Link from 'next/link'
import Image from 'next/image'
import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toutes nos destinations : voyages en famille',
  description:
    'France et Europe : découvrez toutes nos destinations testées en famille par Sophie, Lucas, Léa (8 ans) et Tom (5 ans). Itinéraires, budgets, conseils pratiques.',
}

const pays = [
  {
    nom: 'France',
    emoji: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    description: 'De la Normandie à la Provence, on a exploré la France en long et en large.',
    count: '8 destinations',
    href: '/destinations',
  },
  {
    nom: 'Europe',
    emoji: '🇪🇺',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    description: "Barcelone, Rome, Lisbonne... les premières aventures hors de France.",
    count: '4 destinations',
    href: '/destinations',
  },
]

export default function DestinationsPage() {
  const articles = getAllArticles()

  return (
    <>
      {/* Header */}
      <section className="bg-sable py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-brun font-bold mb-3">
            Nos destinations
          </h1>
          <p className="text-brun-muted text-lg max-w-xl mx-auto">
            D&apos;abord la France, puis l&apos;Europe, à notre rythme, avec les enfants.
          </p>
        </div>
      </section>

      {/* Par pays */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pays.map((p) => (
            <Link key={p.nom} href={p.href} className="group card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={p.image}
                  alt={`Voyager en ${p.nom} en famille`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brun/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                    <span>{p.emoji}</span>
                    {p.nom}
                  </h2>
                  <span className="tag-terracotta text-xs mt-1 inline-block">{p.count}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-brun-muted text-sm">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Tous les articles */}
        <div>
          <h2 className="font-display text-2xl font-bold text-brun mb-6">
            Tous nos articles
          </h2>

          {articles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} featured />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-sable rounded-2xl">
              <p className="text-4xl mb-4">✈️</p>
              <p className="font-display text-xl text-brun">
                Les articles arrivent bientôt !
              </p>
              <p className="text-brun-muted text-sm mt-2">
                On prépare nos prochains itinéraires.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

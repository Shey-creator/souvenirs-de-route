import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticlesByCategory } from '@/lib/articles'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export const metadata: Metadata = {
  title: 'Voyager malin en famille | Souvenirs de Route',
  description: 'Tous nos conseils pratiques pour voyager intelligemment en famille : SNCF, avion, applis, road trip et astuces budget.',
}

const EMOJI: Record<string, string> = {
  'astuces-sncf-famille': '🚄',
  'avion-enfants-moins-5-ans': '✈️',
  'meilleures-applis-voyage-famille': '📱',
  'road-trip-famille-conseils': '🚗',
  'pack-your-bag-voyage-famille': '🎒',
}

export default function VoyagerMalinPage() {
  const articles = getArticlesByCategory('voyager-malin')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <span className="tag-sage mb-4 inline-block">Conseils pratiques</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brun mb-4">
          Voyager malin
        </h1>
        <p className="text-brun-muted text-lg max-w-2xl mx-auto">
          Nos meilleures astuces pour organiser des voyages famille sans stress et sans exploser
          le budget. Du train low-cost aux applis incontournables.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="flex gap-5 bg-white border border-sable-dark rounded-2xl p-6 hover:border-terracotta hover:shadow-md transition-all group"
            >
              <span className="text-4xl shrink-0">{EMOJI[article.slug] ?? '💡'}</span>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-lg font-bold text-brun group-hover:text-terracotta transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-brun-muted text-sm leading-relaxed mb-3 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-brun-muted">
                  <span>{format(new Date(article.date), 'd MMM yyyy', { locale: fr })}</span>
                  <span>·</span>
                  <span>{article.tempsLecture} min de lecture</span>
                  <span className="ml-auto text-terracotta font-medium group-hover:underline">
                    Lire →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-brun-muted">
          <p className="text-4xl mb-4">🔧</p>
          <p className="font-display text-xl">Articles bientôt disponibles</p>
        </div>
      )}

      <div className="mt-12 bg-sable rounded-2xl p-8 text-center">
        <p className="text-2xl mb-3">💡</p>
        <h2 className="font-display text-xl font-bold text-brun mb-2">
          Des questions sur l&apos;organisation de votre voyage ?
        </h2>
        <p className="text-brun-muted text-sm mb-4">
          Inscrivez-vous à la newsletter et recevez nos conseils directement dans votre boîte mail.
        </p>
        <Link href="/#newsletter" className="btn-primary">
          Recevoir les conseils
        </Link>
      </div>
    </div>
  )
}

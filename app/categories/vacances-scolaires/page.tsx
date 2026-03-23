import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Où partir pendant les vacances scolaires | Souvenirs de Route',
  description: 'Nos meilleures idées de destinations pour chaque vacances scolaires : Toussaint, Noël, Février, Pâques, été. Avec des enfants.',
}

const VACANCES = [
  {
    periode: 'Vacances de la Toussaint',
    mois: 'Octobre - Novembre',
    description: 'La basse saison commence. Parfait pour les destinations d\'été sans les foules.',
    suggestions: ['Nice', 'Barcelone', 'Lisbonne', 'Montpellier'],
    emoji: '🍂',
  },
  {
    periode: 'Vacances de Noël',
    mois: 'Décembre - Janvier',
    description: 'Marchés de Noël, ski ou soleil en famille ? Les villes européennes sont magiques.',
    suggestions: ['Strasbourg', 'Colmar', 'Prague', 'Bruges'],
    emoji: '🎄',
  },
  {
    periode: 'Vacances de Février',
    mois: 'Février',
    description: 'Ski pour les ados, villes calmes pour les petits. Évitez les stations bondées.',
    suggestions: ['Annecy', 'Chamonix', 'Rome', 'Madrid'],
    emoji: '⛷️',
  },
  {
    periode: 'Vacances de Pâques',
    mois: 'Avril',
    description: 'La saison s\'ouvre. Bonne période pour l\'Italie, l\'Espagne ou la Provence.',
    suggestions: ['Rome', 'Avignon', 'Barcelone', 'Amsterdam'],
    emoji: '🌸',
  },
  {
    periode: 'Grandes vacances',
    mois: 'Juillet - Août',
    description: 'Évitez le pic de juillet-août sur la Côte d\'Azur. Cap sur la mer Baltique ou le Portugal.',
    suggestions: ['Porto', 'Copenhague', 'Tallinn', 'Biarritz'],
    emoji: '☀️',
  },
]

export default async function VacancesScolairesPage() {
  const articles = getAllArticles().filter(
    (a) => a.categories.some((c) => c.toLowerCase().includes('vacances'))
  )

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <span className="tag-terracotta mb-4 inline-block">Calendrier famille</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brun mb-4">
          Vacances scolaires
        </h1>
        <p className="text-brun-muted text-lg max-w-2xl mx-auto">
          Où partir à chaque période de l&apos;année avec les enfants ? Nos suggestions
          destination par destination, selon votre zone et votre budget.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {VACANCES.map((vac) => (
          <div key={vac.periode} className="bg-white border border-sable-dark rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">{vac.emoji}</span>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 flex-wrap mb-2">
                  <h2 className="font-display text-lg font-bold text-brun">{vac.periode}</h2>
                  <span className="text-sm text-brun-muted">{vac.mois}</span>
                </div>
                <p className="text-brun-muted text-sm mb-3">{vac.description}</p>
                <div className="flex flex-wrap gap-2">
                  {vac.suggestions.map((dest) => (
                    <span key={dest} className="bg-sable text-brun text-xs px-3 py-1 rounded-full">
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {articles.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold text-brun mb-6">
            Nos articles sur les vacances scolaires
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 bg-terracotta/10 rounded-2xl p-8 text-center">
        <p className="text-2xl mb-3">📅</p>
        <h2 className="font-display text-xl font-bold text-brun mb-2">
          Ne ratez pas nos prochains guides vacances
        </h2>
        <p className="text-brun-muted text-sm mb-4">
          Inscrivez-vous à la newsletter et recevez nos idées destination en avance sur les vacances.
        </p>
        <Link href="/#newsletter" className="btn-primary">
          Je m&apos;inscris
        </Link>
      </div>
    </div>
  )
}

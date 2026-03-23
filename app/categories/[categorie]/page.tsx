import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

const categoriesMap: Record<string, { titre: string; description: string; emoji: string }> = {
  itineraires: {
    titre: 'Itinéraires en famille',
    description: 'Des itinéraires jour par jour, testés avec nos enfants Léa et Tom.',
    emoji: '🗺️',
  },
  'week-end': {
    titre: 'Week-ends en famille',
    description: '2 à 3 jours loin du quotidien, à portée de voiture.',
    emoji: '🏖️',
  },
  'vacances-scolaires': {
    titre: 'Vacances scolaires',
    description: 'Toutes zones confondues : des idées adaptées aux calendriers scolaires.',
    emoji: '📅',
  },
  budget: {
    titre: 'Voyager malin',
    description: 'Des vrais budgets, des vraies astuces, parce que voyager en famille coûte cher.',
    emoji: '💶',
  },
  'pack-your-bag': {
    titre: 'Pack your bag',
    description: 'Nos check-listes interactives pour ne rien oublier.',
    emoji: '🎒',
  },
}

interface PageProps {
  params: { categorie: string }
}

export async function generateStaticParams() {
  return Object.keys(categoriesMap).map((categorie) => ({ categorie }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cat = categoriesMap[params.categorie]
  if (!cat) return {}
  return {
    title: `${cat.titre} | Souvenirs de Route`,
    description: cat.description,
  }
}

export default function CategoriePage({ params }: PageProps) {
  const cat = categoriesMap[params.categorie]
  const articles = getAllArticles().filter((a) =>
    a.categories.some(
      (c) => c.toLowerCase().replace(/\s+/g, '-') === params.categorie
    )
  )

  if (!cat) return null

  return (
    <>
      <section className="bg-sable py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-4xl mb-3 block">{cat.emoji}</span>
          <h1 className="font-display text-4xl font-bold text-brun mb-3">{cat.titre}</h1>
          <p className="text-brun-muted max-w-xl mx-auto">{cat.description}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {articles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-sable rounded-2xl">
            <p className="text-4xl mb-4">✍️</p>
            <p className="font-display text-xl text-brun">
              Des articles dans cette catégorie arrivent bientôt !
            </p>
          </div>
        )}
      </section>
    </>
  )
}

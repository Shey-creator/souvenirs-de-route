import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Voyager malin en famille | Souvenirs de Route',
  description: 'Tous nos conseils pratiques pour voyager intelligemment en famille : SNCF, avion, applis, road trip et astuces budget.',
}

const ARTICLES = [
  {
    titre: 'Astuces SNCF famille : cartes, réductions et réservations',
    description: 'Carte Famille Nombreuse, billets Ouigo, réservations à l\'avance : tout ce qu\'il faut savoir pour voyager en train avec les enfants sans se ruiner.',
    href: '/categories/voyager-malin',
    emoji: '🚄',
    tags: ['SNCF', 'train', 'budget'],
  },
  {
    titre: 'Prendre l\'avion avec des enfants de moins de 5 ans',
    description: 'Poussette en cabine ou en soute ? Siège enfant ou sur les genoux ? Jouets à emporter ? On a testé tout ça avec Tom dès ses 18 mois.',
    href: '/categories/voyager-malin',
    emoji: '✈️',
    tags: ['avion', 'bebe', 'conseils'],
  },
  {
    titre: 'Les meilleures applis voyage famille',
    description: 'Google Maps offline, Citymapper, TripAdvisor, Notion pour les itinéraires : les applis qu\'on utilise vraiment sur le terrain.',
    href: '/categories/voyager-malin',
    emoji: '📱',
    tags: ['applis', 'organisation', 'tech'],
  },
  {
    titre: 'Comment préparer un road trip avec des enfants',
    description: 'Jeux pour la voiture, horaires de route, arrêts stratégiques, musique en voiture : notre méthode pour des trajets sans crise.',
    href: '/categories/voyager-malin',
    emoji: '🚗',
    tags: ['road trip', 'voiture', 'conseils'],
  },
]

export default function VoyagerMalinPage() {
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

      <div className="space-y-6">
        {ARTICLES.map((article) => (
          <Link
            key={article.titre}
            href={article.href}
            className="flex gap-5 bg-white border border-sable-dark rounded-2xl p-6 hover:border-terracotta hover:shadow-md transition-all group"
          >
            <span className="text-4xl shrink-0">{article.emoji}</span>
            <div className="flex-1">
              <h2 className="font-display text-lg font-bold text-brun group-hover:text-terracotta transition-colors mb-2">
                {article.titre}
              </h2>
              <p className="text-brun-muted text-sm leading-relaxed mb-3">
                {article.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

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

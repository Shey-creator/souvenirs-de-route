import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Articles à venir | Souvenirs de Route',
  description: 'Découvrez les prochains articles et destinations que nous préparons pour le blog voyage famille Souvenirs de Route.',
}

const ARTICLES_A_VENIR = [
  {
    mois: 'Avril 2025',
    articles: [
      { titre: 'Rome en famille : 4 jours entre histoire et gelati', destination: 'Rome', categorie: 'Itinéraire' },
      { titre: 'Annecy au printemps : le tour du lac en vélo avec les enfants', destination: 'Annecy', categorie: 'Week-end' },
    ],
  },
  {
    mois: 'Mai 2025',
    articles: [
      { titre: 'Avignon en famille : le Palais des Papes expliqué aux petits', destination: 'Avignon', categorie: 'Itinéraire' },
      { titre: 'Valises Toussaint : notre checklist définitive', destination: null, categorie: 'Pack your bag' },
      { titre: 'Copenhague avec des enfants : Tivoli et bien plus', destination: 'Copenhague', categorie: 'Itinéraire' },
    ],
  },
  {
    mois: 'Juin 2025',
    articles: [
      { titre: 'Carcassonne : la cité médiévale fait toujours son effet', destination: 'Carcassonne', categorie: 'Week-end' },
      { titre: 'Comment éviter les foules en été avec des enfants', destination: null, categorie: 'Voyager malin' },
      { titre: 'Budapest : thermes, château et Danube en famille', destination: 'Budapest', categorie: 'Itinéraire' },
    ],
  },
  {
    mois: 'Juillet 2025',
    articles: [
      { titre: 'La route des Calanques avec des enfants (sans voiture)', destination: 'Marseille', categorie: 'Itinéraire' },
      { titre: 'Dubrovnik en famille : Game of Thrones et baignade', destination: 'Dubrovnik', categorie: 'Itinéraire' },
    ],
  },
]

const CATEGORIE_COLORS: Record<string, string> = {
  'Itinéraire': 'bg-terracotta/10 text-terracotta',
  'Week-end': 'bg-sage/20 text-sage-dark',
  'Pack your bag': 'bg-accent/30 text-brun',
  'Voyager malin': 'bg-bleu/30 text-brun',
}

export default function AvenirPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <span className="tag-terracotta mb-4 inline-block">Calendrier éditorial</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brun mb-4">
          Ce qu&apos;on prépare pour vous
        </h1>
        <p className="text-brun-muted text-lg">
          Voici les prochains articles en cours de rédaction. Inscrivez-vous à la newsletter
          pour être notifiée dès leur publication.
        </p>
        <Link href="/#newsletter" className="btn-primary mt-6 inline-flex">
          M&apos;inscrire à la newsletter
        </Link>
      </div>

      <div className="space-y-10">
        {ARTICLES_A_VENIR.map((moisData) => (
          <div key={moisData.mois}>
            <h2 className="font-display text-xl font-bold text-brun border-b border-sable-dark pb-3 mb-6">
              {moisData.mois}
            </h2>
            <div className="space-y-4">
              {moisData.articles.map((article) => (
                <div
                  key={article.titre}
                  className="flex items-start gap-4 bg-white rounded-xl border border-sable-dark p-4"
                >
                  <div className="flex-1">
                    <p className="font-medium text-brun">{article.titre}</p>
                    {article.destination && (
                      <p className="text-sm text-brun-muted mt-1">📍 {article.destination}</p>
                    )}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${CATEGORIE_COLORS[article.categorie] || 'bg-sable text-brun-muted'}`}>
                    {article.categorie}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-terracotta/10 rounded-2xl p-8 text-center">
        <p className="text-2xl mb-3">📬</p>
        <h2 className="font-display text-xl font-bold text-brun mb-2">
          Ne ratez aucun article
        </h2>
        <p className="text-brun-muted mb-4 text-sm">
          Inscrivez-vous à la newsletter et recevez nos prochains itinéraires directement
          dans votre boîte mail.
        </p>
        <Link href="/#newsletter" className="btn-primary">
          Je m&apos;inscris
        </Link>
      </div>
    </div>
  )
}

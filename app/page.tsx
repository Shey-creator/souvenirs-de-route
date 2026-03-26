import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import DestinationCard from '@/components/DestinationCard'
import DestinationQuiz from '@/components/DestinationQuiz'
import { fetchMultipleImages, FAMILY_PHOTO_QUERY } from '@/lib/unsplash'
import type { Metadata } from 'next'

const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80'

export const metadata: Metadata = {
  title: 'Souvenirs de Route, blog voyage en famille',
  description:
    'Des itinéraires testés, des adresses honnêtes, des conseils qui marchent vraiment. Le blog voyage en famille.',
}

// Destinations : photos de LIEUX (monuments/quartiers), jamais de photos famille generiques
const DESTINATIONS = [
  {
    ville: 'Montpellier',
    query: 'Montpellier France city',
    duree: '3 jours',
    budget: 'EE',
    highlight: 'La Comédie, le Peyrou, les plages à 15 min : une ville qui adore les enfants.',
    slug: '/articles/que-faire-montpellier-enfants-3-jours',
  },
  {
    ville: 'Nice',
    query: 'Nice promenade des anglais',
    duree: '3 jours',
    budget: 'EE',
    highlight: 'La Promenade, les galets, le Vieux-Nice et la colline du Château : la Côte d\'Azur à son meilleur.',
    slug: '/destinations/france/nice',
  },
  {
    ville: 'Paris',
    query: 'Eiffel Tower Paris',
    duree: '4 jours',
    budget: 'EEE',
    highlight: 'La Tour Eiffel, le Louvre, Montmartre : l\'essentiel de Paris, bien préparé.',
    slug: '/destinations/france/paris',
  },
  {
    ville: 'Barcelone',
    query: 'Sagrada Familia Barcelona',
    duree: '4 jours',
    budget: 'EEE',
    highlight: 'La Sagrada Familia, le Parc Güell, la plage : notre première grande aventure hors de France.',
    slug: '/destinations/europe/barcelone',
  },
]

export default async function HomePage() {
  const articles = getAllArticles()
  const latestArticles = articles.slice(0, 6)

  const [sophieImage, ...destinationImages] = await fetchMultipleImages([
    { query: FAMILY_PHOTO_QUERY, orientation: 'squarish' },
    ...DESTINATIONS.map((d) => ({ query: d.query, orientation: 'squarish' as const })),
  ])

  return (
    <>
      {/* HERO PLEINE LARGEUR */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '80vh' }}>
        <Image
          src={HERO_IMAGE_URL}
          alt="Voyage en famille, paysage"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Parce que les souvenirs de famille, ça se prépare.
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Des itinéraires testés, des adresses honnêtes,<br className="hidden sm:block" />
            des conseils qui marchent vraiment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/destinations" className="btn-primary">
              Explorer les destinations
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center px-6 py-3 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-brun transition-colors"
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </section>

      {/* DERNIERS ARTICLES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="section-title">Nos articles récents</h2>
          <Link
            href="/destinations"
            className="text-terracotta text-sm font-medium hover:underline hidden sm:block"
          >
            Voir tout →
          </Link>
        </div>

        {latestArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} featured={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-brun-muted">
            <p className="text-4xl mb-4">✈️</p>
            <p className="font-display text-xl">Les premiers articles arrivent bientôt !</p>
          </div>
        )}
      </section>

      {/* QUIZ DESTINATION */}
      <section className="bg-sable py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-terracotta text-sm font-medium uppercase tracking-wide mb-1">
                Votre prochaine aventure
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brun mb-4">
                Trouvez votre destination idéale
              </h2>
              <p className="text-brun-muted leading-relaxed mb-4">
                4 questions, 3 destinations. On connaît vos envies mieux que vous.
                Enfin, presque.
              </p>
              <p className="text-brun-muted text-sm">
                Durée, budget, type de voyage, âge des enfants : notre mini quiz
                personnalise vos recommandations en 30 secondes.
              </p>
            </div>
            <DestinationQuiz />
          </div>
        </div>
      </section>

      {/* PITCH SOPHIE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto relative rounded-3xl overflow-hidden shadow-lg">
                {sophieImage.url ? (
                  <Image
                    src={sophieImage.url}
                    alt={sophieImage.alt || 'Sophie et sa famille en vacances dans le sud de la France'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FFE66D 100%)' }} />
                )}
              </div>
              <div className="absolute top-4 right-4 md:-right-8 bg-white rounded-2xl shadow p-3 text-center">
                <p className="text-2xl">🌞</p>
                <p className="text-xs font-medium text-brun">Sud de la France</p>
              </div>
            </div>

            <div>
              <span className="tag-sage mb-4 inline-block">Notre famille</span>
              <h2 className="font-display text-3xl md:text-4xl text-brun font-bold mb-4">
                Bonjour, moi c&apos;est Sophie !
              </h2>
              <div className="space-y-4 text-brun-muted leading-relaxed">
                <p>
                  J&apos;ai 38 ans, je vis dans le Sud avec mon mari Lucas et nos deux enfants :
                  Léa qui a 8 ans et Tom qui en a 5. On voyage ensemble depuis que Léa avait
                  18 mois. On a appris sur le tas, on a raté des trucs, et on a vécu des moments
                  qu&apos;on n&apos;oubliera jamais.
                </p>
                <p>
                  Ce blog, c&apos;est mon carnet de route. Pas de photos retouchées, pas
                  d&apos;itinéraires parfaits. Juste la vérité : le bon resto qu&apos;on a adoré,
                  les galères qu&apos;on n&apos;avait pas prévues, et la magie qui reste malgré tout.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-brun font-medium mt-4">
                  «&nbsp;On part avec un plan. On rentre avec des histoires.
                  C&apos;est ça, voyager en famille.&nbsp;»
                  <cite className="block not-italic text-sm text-brun-muted mt-1 font-normal">Sophie</cite>
                </blockquote>
              </div>
              <Link href="/a-propos" className="btn-primary mt-6 inline-flex">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-terracotta text-sm font-medium uppercase tracking-wide mb-1">
            La carte
          </p>
          <h2 className="section-title mb-3">Nos destinations</h2>
          <p className="text-brun-muted max-w-xl mx-auto">
            D&apos;abord la France, puis l&apos;Europe, à notre rythme, avec les enfants.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard
              key={dest.ville}
              ville={dest.ville}
              image={destinationImages[i]?.url || null}
              duree={dest.duree}
              budget={dest.budget}
              highlight={dest.highlight}
              slug={dest.slug}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/destinations" className="btn-secondary">
            Toutes les destinations
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-brun py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Trouver votre voyage
            </h2>
            <p className="text-sable-dark">
              On a organisé tout ça pour vous faciliter la vie.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { emoji: '🗺️', label: 'Itinéraires', href: '/categories/itineraires', desc: 'Jour par jour' },
              { emoji: '🏖️', label: 'Week-ends', href: '/categories/week-end', desc: '2 à 3 jours' },
              { emoji: '📅', label: 'Vacances sco.', href: '/categories/vacances-scolaires', desc: 'Selon les zones' },
              { emoji: '💶', label: 'Budget', href: '/categories/budget', desc: 'Malin et vrai' },
              { emoji: '🎒', label: 'Pack your bag', href: '/categories/pack-your-bag', desc: 'Check-listes' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="bg-brun-light rounded-2xl p-5 text-center hover:bg-terracotta transition-colors duration-200 group"
              >
                <span className="text-3xl mb-2 block">{cat.emoji}</span>
                <p className="font-display text-white font-bold text-sm mb-1">{cat.label}</p>
                <p className="text-sable-dark text-xs group-hover:text-white/80">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        <span className="text-4xl mb-4 block">📬</span>
        <h2 className="font-display text-3xl font-bold text-brun mb-3">
          On part, vous venez ?
        </h2>
        <p className="text-brun-muted mb-2">
          Rejoignez les familles qui voyagent malin.
        </p>
        <p className="text-brun-muted mb-6 text-sm">
          Nouvelles destinations, bons plans et checklist à télécharger,
          directement dans votre boîte mail. Zéro spam, promis.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="votre@email.com"
            className="flex-1 px-4 py-3 rounded-full border border-sable-dark bg-white text-brun placeholder-brun-muted focus:outline-none focus:ring-2 focus:ring-terracotta"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Je m&apos;inscris
          </button>
        </form>
        <p className="text-xs text-brun-muted mt-3">Pas de spam. Juste nos aventures.</p>
      </section>
    </>
  )
}

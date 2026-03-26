import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carte des destinations | Souvenirs de Route',
  description: 'Toutes nos destinations famille en France et en Europe : 25 villes françaises et 20 destinations européennes testées avec Léa et Tom.',
}

const DESTINATIONS_FRANCE = [
  // Sud et Méditerranée
  { slug: 'nice',                 nom: 'Nice',                 region: 'Côte d\'Azur',         emoji: '☀️' },
  { slug: 'cannes',               nom: 'Cannes',               region: 'Côte d\'Azur',         emoji: '🎬' },
  { slug: 'antibes',              nom: 'Antibes',              region: 'Côte d\'Azur',         emoji: '⛵' },
  { slug: 'menton',               nom: 'Menton',               region: 'Côte d\'Azur',         emoji: '🍋' },
  { slug: 'marseille',            nom: 'Marseille',            region: 'Provence',              emoji: '⚓' },
  { slug: 'aix-en-provence',      nom: 'Aix-en-Provence',      region: 'Provence',              emoji: '⛲' },
  { slug: 'montpellier',          nom: 'Montpellier',          region: 'Occitanie',             emoji: '🎭' },
  { slug: 'sete',                 nom: 'Sète',                 region: 'Occitanie',             emoji: '🚤' },
  { slug: 'nimes',                nom: 'Nîmes',                region: 'Occitanie',             emoji: '🏛️' },
  { slug: 'avignon',              nom: 'Avignon',              region: 'Provence',              emoji: '🏰' },
  { slug: 'les-baux-de-provence', nom: 'Les Baux',             region: 'Provence',              emoji: '🪨' },
  { slug: 'gordes',               nom: 'Gordes',               region: 'Provence',              emoji: '🌿' },
  { slug: 'arles',                nom: 'Arles',                region: 'Provence',              emoji: '🎨' },
  { slug: 'carcassonne',          nom: 'Carcassonne',          region: 'Occitanie',             emoji: '⚔️' },
  { slug: 'biarritz',             nom: 'Biarritz',             region: 'Nouvelle-Aquitaine',   emoji: '🏄' },
  // Reste de la France
  { slug: 'paris',                nom: 'Paris',                region: 'Île-de-France',        emoji: '🗼' },
  { slug: 'lyon',                 nom: 'Lyon',                 region: 'Auvergne-Rhône-Alpes', emoji: '🍽️' },
  { slug: 'bordeaux',             nom: 'Bordeaux',             region: 'Nouvelle-Aquitaine',   emoji: '🍷' },
  { slug: 'strasbourg',           nom: 'Strasbourg',           region: 'Grand Est',             emoji: '🥨' },
  { slug: 'colmar',               nom: 'Colmar',               region: 'Grand Est',             emoji: '🏡' },
  { slug: 'annecy',               nom: 'Annecy',               region: 'Alpes',                 emoji: '🏔️' },
  { slug: 'chamonix',             nom: 'Chamonix',             region: 'Alpes',                 emoji: '⛷️' },
  { slug: 'saint-malo',           nom: 'Saint-Malo',           region: 'Bretagne',              emoji: '🌊' },
  { slug: 'mont-saint-michel',    nom: 'Mont-Saint-Michel',    region: 'Normandie',             emoji: '🏝️' },
  { slug: 'dijon',                nom: 'Dijon',                region: 'Bourgogne',             emoji: '🌭' },
]

const DESTINATIONS_EUROPE = [
  { slug: 'barcelone',  nom: 'Barcelone',  pays: 'Espagne',     emoji: '🌞' },
  { slug: 'rome',       nom: 'Rome',       pays: 'Italie',      emoji: '🍕' },
  { slug: 'londres',    nom: 'Londres',    pays: 'Angleterre',  emoji: '🎡' },
  { slug: 'amsterdam',  nom: 'Amsterdam',  pays: 'Pays-Bas',    emoji: '🚲' },
  { slug: 'berlin',     nom: 'Berlin',     pays: 'Allemagne',   emoji: '🐻' },
  { slug: 'prague',     nom: 'Prague',     pays: 'Tchéquie',    emoji: '🏰' },
  { slug: 'lisbonne',   nom: 'Lisbonne',   pays: 'Portugal',    emoji: '🛤️' },
  { slug: 'vienne',     nom: 'Vienne',     pays: 'Autriche',    emoji: '🎻' },
  { slug: 'budapest',   nom: 'Budapest',   pays: 'Hongrie',     emoji: '♨️' },
  { slug: 'bruges',     nom: 'Bruges',     pays: 'Belgique',    emoji: '🍫' },
  { slug: 'seville',    nom: 'Séville',    pays: 'Espagne',     emoji: '💃' },
  { slug: 'valence',    nom: 'Valence',    pays: 'Espagne',     emoji: '🥘' },
  { slug: 'porto',      nom: 'Porto',      pays: 'Portugal',    emoji: '🍷' },
  { slug: 'edimbourg',  nom: 'Édimbourg',  pays: 'Écosse',      emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { slug: 'copenhague', nom: 'Copenhague', pays: 'Danemark',    emoji: '🧸' },
  { slug: 'ljubljana',  nom: 'Ljubljana',  pays: 'Slovénie',    emoji: '🐉' },
  { slug: 'tallinn',    nom: 'Tallinn',    pays: 'Estonie',     emoji: '🏛️' },
  { slug: 'dubrovnik',  nom: 'Dubrovnik',  pays: 'Croatie',     emoji: '🌊' },
  { slug: 'malte',      nom: 'Malte',      pays: 'Malte',       emoji: '🏖️' },
  { slug: 'reykjavik',  nom: 'Reykjavik',  pays: 'Islande',     emoji: '🌌' },
]

export default function CartePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

      {/* En-tête */}
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          25 destinations France + 20 Europe
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brun mb-4">
          Toutes nos destinations famille
        </h1>
        <p className="text-brun-muted text-lg max-w-xl mx-auto">
          Testées avec Léa (8 ans) et Tom (5 ans). Cliquez sur une destination
          pour accéder aux articles, infos pratiques et bonnes adresses.
        </p>
      </div>

      {/* FRANCE */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl" aria-hidden>🇫🇷</span>
          <div>
            <h2 className="font-display text-2xl font-bold text-brun">France</h2>
            <p className="text-brun-muted text-sm">25 destinations</p>
          </div>
          <div className="flex-1 h-px bg-gray-200 ml-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {DESTINATIONS_FRANCE.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/france/${dest.slug}`}
              className="group relative bg-white rounded-2xl border border-gray-100 p-4 text-center hover:border-primary/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-3xl block mb-2" aria-hidden>{dest.emoji}</span>
              <p className="font-display font-bold text-brun text-sm group-hover:text-primary transition-colors leading-tight">
                {dest.nom}
              </p>
              <p className="text-brun-muted text-[11px] mt-0.5 leading-tight">{dest.region}</p>
              {/* Badge épingle orange */}
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
            </Link>
          ))}
        </div>
      </section>

      {/* EUROPE */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl" aria-hidden>🌍</span>
          <div>
            <h2 className="font-display text-2xl font-bold text-brun">Europe</h2>
            <p className="text-brun-muted text-sm">20 destinations</p>
          </div>
          <div className="flex-1 h-px bg-gray-200 ml-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {DESTINATIONS_EUROPE.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/europe/${dest.slug}`}
              className="group relative bg-white rounded-2xl border border-gray-100 p-4 text-center hover:border-secondary/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-3xl block mb-2" aria-hidden>{dest.emoji}</span>
              <p className="font-display font-bold text-brun text-sm group-hover:text-secondary transition-colors leading-tight">
                {dest.nom}
              </p>
              <p className="text-brun-muted text-[11px] mt-0.5 leading-tight">{dest.pays}</p>
              {/* Badge épingle turquoise */}
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA newsletter */}
      <div className="mt-16 bg-fond-alt rounded-3xl p-8 text-center">
        <p className="text-2xl mb-3" aria-hidden>✈️</p>
        <h2 className="font-display text-xl font-bold text-brun mb-2">
          Une nouvelle destination arrive chaque mois
        </h2>
        <p className="text-brun-muted text-sm mb-5">
          Inscris-toi à la newsletter pour être notifiée des nouveaux articles.
        </p>
        <Link href="/#newsletter" className="btn-primary">
          Je m&apos;inscris
        </Link>
      </div>
    </div>
  )
}

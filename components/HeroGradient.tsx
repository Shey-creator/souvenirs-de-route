interface HeroGradientProps {
  ville?: string
  region?: string
  pays?: string
  className?: string
  height?: string
}

type GradientZone = 'sud' | 'nord' | 'alpes' | 'europe'

// Villes du Sud de la France (gradient chaud orange → jaune)
const SUD_FRANCE = new Set([
  'nice', 'cannes', 'antibes', 'menton', 'marseille', 'aix-en-provence',
  'montpellier', 'sète', 'nîmes', 'avignon', 'les baux-de-provence',
  'gordes', 'arles', 'biarritz', 'carcassonne', 'toulouse', 'perpignan',
])

// Villes du Nord / Est de la France (gradient frais turquoise → bleu ciel)
const NORD_FRANCE = new Set([
  'paris', 'strasbourg', 'colmar', 'saint-malo', 'mont-saint-michel',
  'lille', 'reims', 'rouen', 'caen', 'dijon', 'metz', 'nancy',
])

// Alpes / montagne (gradient bleu ciel → turquoise)
const ALPES_FRANCE = new Set(['annecy', 'chamonix', 'grenoble', 'chambéry', 'val d\'isère'])

const GRADIENTS: Record<GradientZone, { from: string; to: string }> = {
  sud:    { from: '#FF6B35', to: '#FFE66D' },   // Orange → Jaune soleil
  nord:   { from: '#4ECDC4', to: '#A8DADC' },   // Turquoise → Bleu ciel
  alpes:  { from: '#A8DADC', to: '#4ECDC4' },   // Bleu ciel → Turquoise (montagne)
  europe: { from: '#A8DADC', to: '#4ECDC4' },   // Bleu ciel → Turquoise
}

function getZone(ville?: string, pays?: string): GradientZone {
  if (pays && pays.toLowerCase() !== 'france') return 'europe'
  if (!ville) return 'sud'

  const key = ville.toLowerCase()
  if (SUD_FRANCE.has(key)) return 'sud'
  if (NORD_FRANCE.has(key)) return 'nord'
  if (ALPES_FRANCE.has(key)) return 'alpes'

  // Par défaut pour la France → chaleur du Sud
  return 'sud'
}

/**
 * Hero gradient élégant affiché quand Unsplash ne trouve pas de photo.
 * Dégradé selon la région : Sud → orange/jaune, Nord → turquoise/bleu, Alpes → bleu ciel, Europe → bleu ciel.
 * Nom de la ville en Playfair Display 72px au centre.
 */
export default function HeroGradient({
  ville,
  region,
  pays,
  className = '',
  height = 'h-72 md:h-[480px]',
}: HeroGradientProps) {
  const zone = getZone(ville, pays)
  const { from, to } = GRADIENTS[zone]

  return (
    <div
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      {/* Motif de points décoratifs */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, #1A1A2E 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Cercles flottants décoratifs */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
        style={{ background: 'rgba(255,255,255,0.4)' }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-15"
        style={{ background: 'rgba(255,255,255,0.3)' }}
      />

      {/* Nom de la ville */}
      <div className="relative text-center px-8 z-10">
        {ville && (
          <h2
            className="font-display font-bold text-white leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 7.5rem)',
              textShadow: '0 2px 30px rgba(0,0,0,0.15)',
              letterSpacing: '-0.02em',
            }}
          >
            {ville}
          </h2>
        )}
        {region && (
          <p
            className="text-white/75 mt-3 uppercase tracking-[0.25em] font-body font-medium"
            style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}
          >
            {region}
          </p>
        )}
        {!ville && (
          <p className="font-display text-white text-5xl font-bold">
            Souvenirs de Route
          </p>
        )}
      </div>

      {/* Vague décorative en bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-white"
        style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}
      />
    </div>
  )
}

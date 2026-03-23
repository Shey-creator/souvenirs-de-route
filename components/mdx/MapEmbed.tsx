import { MapMarker } from '@/types'

interface MapEmbedProps {
  lieu: string
  zoom?: number
  markers?: MapMarker[]
}

export default function MapEmbed({ lieu, zoom = 13, markers }: MapEmbedProps) {
  // OpenStreetMap via iframe (gratuit, RGPD compatible)
  const encodedLieu = encodeURIComponent(lieu)
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=&layer=mapnik&marker=&mlat=&mlon=&zoom=${zoom}`

  // Lien de recherche OpenStreetMap
  const osmLink = `https://www.openstreetmap.org/search?query=${encodedLieu}`

  return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-sable-dark">
      <div className="bg-sable px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg" aria-hidden>🗺️</span>
          <span className="font-display font-semibold text-brun text-sm">{lieu}</span>
        </div>
        <a
          href={osmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terracotta text-xs font-medium hover:underline"
        >
          Ouvrir la carte →
        </a>
      </div>

      {/* Carte via iframe OpenStreetMap */}
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          title={`Carte de ${lieu}`}
          className="absolute inset-0 w-full h-full"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=&layer=mapnik&zoom=${zoom}&mlat=43.6117&mlon=3.8777`}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Points d'intérêt */}
      {markers && markers.length > 0 && (
        <div className="bg-white px-4 py-3 border-t border-sable">
          <p className="text-xs font-semibold text-brun-muted uppercase tracking-wide mb-2">
            Points d&apos;intérêt
          </p>
          <div className="flex flex-wrap gap-2">
            {markers.map((marker, i) => (
              <a
                key={i}
                href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(marker.nom)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tag text-xs hover:bg-terracotta hover:text-white transition-colors"
              >
                📍 {marker.nom}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

interface AffiliateBoxProps {
  ville: string
  type?: 'hotel' | 'activites' | 'both'
}

export default function AffiliateBox({ ville, type = 'both' }: AffiliateBoxProps) {
  const bookingUrl = `https://www.booking.com/search.html?ss=${encodeURIComponent(ville)}&aid=your_affiliate_id`
  const viatorUrl = `https://www.viator.com/search?q=${encodeURIComponent(ville)}`
  const getyourguideUrl = `https://www.getyourguide.com/s/?q=${encodeURIComponent(ville)}`

  return (
    <div className="my-8 space-y-4">
      {(type === 'hotel' || type === 'both') && (
        <div className="rounded-2xl border border-sable-dark bg-sable/50 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏨</span>
            <h3 className="font-display font-bold text-brun text-lg">
              Où dormir à {ville}
            </h3>
          </div>
          <p className="text-brun-muted text-sm mb-4">
            On a sélectionné les meilleures options famille, du budget au confort.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 bg-[#003580] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#003580]/90 transition-colors"
          >
            Voir les hébergements sur Booking.com
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}

      {(type === 'activites' || type === 'both') && (
        <div className="rounded-2xl border border-sable-dark bg-sable/50 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🎡</span>
            <h3 className="font-display font-bold text-brun text-lg">
              Nos activités recommandées à {ville}
            </h3>
          </div>
          <p className="text-brun-muted text-sm mb-4">
            Visites guidées, entrées coupe-file et expériences famille testées.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={viatorUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1.5 bg-[#00AE68] text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[#009558] transition-colors"
            >
              Viator
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href={getyourguideUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1.5 bg-[#FF5533] text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[#e04020] transition-colors"
            >
              GetYourGuide
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      )}

      <p className="text-xs text-brun-muted/60 italic">
        Cet article contient des liens affiliés. Si tu réserves via nos liens,
        on touche une petite commission, sans aucun surcoût pour toi.
        On ne recommande que ce qu&apos;on a testé ou soigneusement sélectionné.
      </p>
    </div>
  )
}

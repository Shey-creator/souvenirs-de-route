interface AffiliateBoxProps {
  ville: string
  type?: 'hotel' | 'activites' | 'both'
}

export default function AffiliateBox({ ville, type = 'both' }: AffiliateBoxProps) {
  const bookingUrl = `https://www.booking.com/search.html?ss=${encodeURIComponent(ville)}&aid=your_affiliate_id`
  const viatorUrl = `https://www.viator.com/search?q=${encodeURIComponent(ville)}`
  const getyourguideUrl = `https://www.getyourguide.com/s/?q=${encodeURIComponent(ville)}&partner_id=3YHYTDY&utm_medium=online_publisher`

  return (
    <div className="my-12 space-y-5">
      {(type === 'hotel' || type === 'both') && (
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🏨</span>
            <div className="flex-1">
              <h3 className="font-display font-bold text-brun text-lg mb-1">
                Où dormir à {ville}
              </h3>
              <p className="text-brun-muted text-sm mb-4 leading-relaxed">
                On a sélectionné les meilleures options famille, du budget au confort.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
              >
                Voir les hébergements sur Booking
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {(type === 'activites' || type === 'both') && (
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🎡</span>
            <div className="flex-1">
              <h3 className="font-display font-bold text-brun text-lg mb-1">
                Nos activités recommandées à {ville}
              </h3>
              <p className="text-brun-muted text-sm mb-4 leading-relaxed">
                Visites guidées, entrées coupe-file et expériences famille testées.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={viatorUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
                >
                  Activités sur Viator
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={getyourguideUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  GetYourGuide
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-brun-muted/60 italic px-1">
        Cet article contient des liens affiliés. Si tu réserves via nos liens,
        on touche une petite commission, sans aucun surcoût pour toi.
        On ne recommande que ce qu&apos;on a testé ou soigneusement sélectionné.
      </p>
    </div>
  )
}

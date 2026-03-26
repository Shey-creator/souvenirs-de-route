import { CityData } from '@/lib/destinations-data'

interface Props {
  data: CityData
  ville: string
}

const BASE_CHECKLIST = [
  'Carte d\'identité ou passeport pour tous',
  'Carte européenne d\'assurance maladie (CEAM)',
  'Téléphone chargé + chargeur',
  'Médicaments essentiels : doliprane, immodium, pansements',
  'Petite trousse de secours',
  'Snacks pour les trajets',
  'Activités et coloriages pour les transports',
]

export default function DestinationSections({ data, ville }: Props) {
  const hebergCategories: Record<string, { label: string; color: string }> = {
    budget:       { label: 'Budget',       color: 'bg-success/10 text-success border-success/30' },
    milieu:       { label: 'Milieu de gamme', color: 'bg-secondary/10 text-secondary border-secondary/30' },
    coupdecoeur:  { label: 'Coup de cœur', color: 'bg-primary/10 text-primary border-primary/30' },
  }

  return (
    <div className="space-y-14">

      {/* 1. INFOS PRATIQUES */}
      <section>
        <h2 className="font-display text-2xl font-bold text-brun mb-6">
          Infos pratiques pour partir en famille
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🌸', label: 'Meilleure saison', value: data.meilleuresSaisons },
            { icon: '📅', label: 'Durée conseillée', value: data.duree },
            { icon: '💶', label: 'Budget / jour',    value: data.budget },
            { icon: '🚆', label: 'Transports',       value: data.transports },
          ].map((item) => (
            <div key={item.label} className="bg-fond-alt rounded-xl p-4">
              <span className="text-2xl block mb-2" aria-hidden>{item.icon}</span>
              <p className="text-xs font-semibold text-brun-muted uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-sm font-medium text-brun">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ACTIVITÉS GRATUITES */}
      {data.activitesGratuites.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-display text-2xl font-bold text-brun">
              Activités gratuites à {ville}
            </h2>
            <span className="bg-success text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
              GRATUIT
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.activitesGratuites.map((act) => (
              <div key={act.nom} className="flex gap-3 p-4 bg-white rounded-xl border border-success/20 hover:border-success/50 transition-colors">
                <span className="text-success text-xl shrink-0" aria-hidden>✓</span>
                <div>
                  <p className="font-semibold text-brun text-sm">{act.nom}</p>
                  <p className="text-brun-muted text-sm leading-snug mt-0.5">{act.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. ACTIVITÉS PAYANTES */}
      {data.activitesPayantes.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold text-brun mb-6">
            Activités payantes avec prix indicatifs
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-display">Activité</th>
                  <th className="text-center px-4 py-3 font-display">Adulte</th>
                  <th className="text-center px-4 py-3 font-display">Enfant</th>
                  <th className="hidden sm:table-cell text-left px-4 py-3 font-display">Info</th>
                </tr>
              </thead>
              <tbody>
                {data.activitesPayantes.map((act, i) => (
                  <tr key={act.nom} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-brun">{act.nom}</td>
                    <td className="px-4 py-3 text-center font-bold text-brun">{act.adulte}</td>
                    <td className="px-4 py-3 text-center font-bold text-success">{act.enfant}</td>
                    <td className="hidden sm:table-cell px-4 py-3 text-brun-muted text-xs">{act.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 4. BONNES ADRESSES */}
      {(data.restaurants.length > 0 || data.hebergements.length > 0) && (
        <section>
          <h2 className="font-display text-2xl font-bold text-brun mb-6">
            Nos bonnes adresses à {ville}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Restaurants */}
            {data.restaurants.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-bold text-brun mb-4 flex items-center gap-2">
                  <span aria-hidden>🍽️</span> Restaurants family-friendly
                </h3>
                <div className="space-y-3">
                  {data.restaurants.map((r) => (
                    <div key={r.nom} className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-card transition-shadow">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-brun text-sm">{r.nom}</p>
                        <span className="text-xs font-bold text-primary whitespace-nowrap">{r.budget}</span>
                      </div>
                      <p className="text-brun-muted text-xs mt-1">{r.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hébergements */}
            {data.hebergements.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-bold text-brun mb-4 flex items-center gap-2">
                  <span aria-hidden>🏨</span> Où dormir en famille
                </h3>
                <div className="space-y-3">
                  {data.hebergements.map((h) => {
                    const cat = hebergCategories[h.categorie]
                    return (
                      <div key={h.nom} className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-card transition-shadow">
                        <div className="flex items-start gap-2 mb-1">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${cat.color}`}>
                            {cat.label}
                          </span>
                        </div>
                        <p className="font-semibold text-brun text-sm">{h.nom}</p>
                        <p className="text-brun-muted text-xs mt-0.5">{h.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Incontournables */}
          {data.incontournables.length > 0 && (
            <div className="mt-6 p-5 bg-accent/20 rounded-2xl border-l-4 border-accent">
              <h3 className="font-display font-bold text-brun mb-3 flex items-center gap-2">
                <span aria-hidden>⭐</span> Les incontournables selon Sophie
              </h3>
              <ul className="space-y-2">
                {data.incontournables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brun">
                    <span className="text-primary mt-0.5 shrink-0" aria-hidden>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* 5. PACK YOUR BAG */}
      {data.checklistExtra.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold text-brun mb-2">
            Pack your bag : spécial {ville}
          </h2>
          <p className="text-brun-muted text-sm mb-6">
            Les essentiels famille + ce qu&apos;on ajoute spécifiquement pour {ville}.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brun text-sm uppercase tracking-wide mb-3">
                🧳 Spécifique à {ville}
              </h3>
              <ul className="space-y-2">
                {data.checklistExtra.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brun py-2 border-b border-gray-100 last:border-0">
                    <span className="w-4 h-4 rounded border-2 border-primary shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brun text-sm uppercase tracking-wide mb-3">
                👨‍👩‍👧‍👦 Toujours dans nos valises
              </h3>
              <ul className="space-y-2">
                {BASE_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brun py-2 border-b border-gray-100 last:border-0">
                    <span className="w-4 h-4 rounded border-2 border-secondary shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ */}
      {data.faq.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold text-brun mb-6">
            Questions fréquentes sur {ville} en famille
          </h2>
          <div className="space-y-4">
            {data.faq.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-brun text-sm select-none">
                  <span>{item.q}</span>
                  <span className="text-primary text-xl transition-transform group-open:rotate-45 shrink-0" aria-hidden>+</span>
                </summary>
                <div className="px-5 pb-5 text-brun-muted text-sm leading-relaxed border-t border-gray-50">
                  <p className="pt-3">{item.r}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}

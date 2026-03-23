interface BudgetFamilleProps {
  hebergement: number
  repas: number
  activites: number
  transport: number
  note?: string
}

interface BudgetLine {
  label: string
  emoji: string
  value: number
  color: string
}

export default function BudgetFamille({
  hebergement,
  repas,
  activites,
  transport,
  note,
}: BudgetFamilleProps) {
  const total = hebergement + repas + activites + transport

  const lines: BudgetLine[] = [
    { label: 'Hébergement', emoji: '🏨', value: hebergement, color: 'bg-terracotta' },
    { label: 'Repas', emoji: '🍽️', value: repas, color: 'bg-sage' },
    { label: 'Activités', emoji: '🎡', value: activites, color: 'bg-amber-400' },
    { label: 'Transport', emoji: '🚗', value: transport, color: 'bg-blue-400' },
  ]

  return (
    <div className="bg-white border border-sable-dark rounded-2xl overflow-hidden my-8 shadow-sm">
      {/* Header */}
      <div className="bg-terracotta px-5 py-4">
        <h3 className="font-display font-bold text-white text-lg">
          💶 Budget estimé par jour
        </h3>
        {note && <p className="text-white/80 text-xs mt-1">{note}</p>}
      </div>

      <div className="p-5">
        {/* Lignes budget */}
        <div className="space-y-4 mb-5">
          {lines.map((line) => {
            const pct = Math.round((line.value / total) * 100)
            return (
              <div key={line.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-brun flex items-center gap-2">
                    <span aria-hidden>{line.emoji}</span>
                    {line.label}
                  </span>
                  <span className="font-bold text-brun text-sm">{line.value} €</span>
                </div>
                <div className="h-2 bg-sable rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${line.color} transition-all duration-700`}
                    style={{ width: `${pct}%` }}
                    role="meter"
                    aria-label={`${line.label}: ${pct}%`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Total */}
        <div className="bg-sable rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="font-display font-bold text-brun">Total / jour</span>
          <div className="text-right">
            <span className="font-display font-bold text-terracotta text-2xl">{total} €</span>
            <p className="text-xs text-brun-muted">pour toute la famille</p>
          </div>
        </div>
      </div>
    </div>
  )
}

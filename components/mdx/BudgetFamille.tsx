interface BudgetFamilleProps {
  hebergement: number | string
  repas: number | string
  activites: number | string
  transport?: number | string
  transports?: number | string
  total?: string
  note?: string
}

interface BudgetLine {
  label: string
  emoji: string
  value: number | string
  color: string
}

export default function BudgetFamille({
  hebergement,
  repas,
  activites,
  transport,
  transports,
  total,
  note,
}: BudgetFamilleProps) {
  const transportValue = transport ?? transports

  const lines: BudgetLine[] = [
    { label: 'Hébergement', emoji: '🏨', value: hebergement, color: 'bg-terracotta' },
    { label: 'Repas', emoji: '🍽️', value: repas, color: 'bg-sage' },
    { label: 'Activités', emoji: '🎡', value: activites, color: 'bg-amber-400' },
    { label: 'Transport', emoji: '🚗', value: transportValue ?? '', color: 'bg-blue-400' },
  ]

  const allNumeric =
    typeof hebergement === 'number' &&
    typeof repas === 'number' &&
    typeof activites === 'number' &&
    typeof transportValue === 'number'

  const numericTotal = allNumeric
    ? (hebergement as number) + (repas as number) + (activites as number) + (transportValue as number)
    : null

  const displayTotal = total ?? (numericTotal !== null ? `${numericTotal} €` : null)

  return (
    <div className="bg-white border border-sable-dark rounded-2xl overflow-hidden my-8 shadow-sm">
      {/* Header */}
      <div className="bg-terracotta px-5 py-4">
        <h3 className="font-display font-bold text-white text-lg">
          💶 Budget estimé
        </h3>
        {note && <p className="text-white/80 text-xs mt-1">{note}</p>}
      </div>

      <div className="p-5">
        <div className="space-y-4 mb-5">
          {lines.map((line) => (
            <div key={line.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-brun flex items-center gap-2">
                  <span aria-hidden>{line.emoji}</span>
                  {line.label}
                </span>
                <span className="font-bold text-brun text-sm">
                  {typeof line.value === 'number' ? `${line.value} €` : line.value}
                </span>
              </div>
              {allNumeric && numericTotal !== null && (
                <div className="h-2 bg-sable rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${line.color} transition-all duration-700`}
                    style={{ width: `${Math.round(((line.value as number) / numericTotal) * 100)}%` }}
                    role="meter"
                    aria-label={`${line.label}: ${Math.round(((line.value as number) / numericTotal) * 100)}%`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {displayTotal && (
          <div className="bg-sable rounded-xl px-4 py-3 flex items-center justify-between">
            <span className="font-display font-bold text-brun">Total</span>
            <div className="text-right">
              <span className="font-display font-bold text-terracotta text-xl">{displayTotal}</span>
              <p className="text-xs text-brun-muted">pour toute la famille</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

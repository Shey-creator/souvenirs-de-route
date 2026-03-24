interface BudgetFamilleProps {
  hebergement?: number | string
  repas?: number | string
  activites?: number | string
  transport?: number | string
  transports?: number | string
  total?: string
  note?: string
}

export default function BudgetFamille(props: BudgetFamilleProps) {
  const hebergement = props.hebergement ?? 0
  const repas = props.repas ?? 0
  const activites = props.activites ?? 0
  const transportValue = props.transport ?? props.transports ?? 0

  const lines = [
    { label: 'Hébergement', icon: '🏨', value: hebergement },
    { label: 'Repas',       icon: '🍽️', value: repas },
    { label: 'Activités',   icon: '🎡', value: activites },
    { label: 'Transport',   icon: '🚗', value: transportValue },
  ]

  const allNumeric =
    typeof hebergement === 'number' &&
    typeof repas === 'number' &&
    typeof activites === 'number' &&
    typeof transportValue === 'number'

  const numericTotal = allNumeric
    ? (hebergement as number) + (repas as number) + (activites as number) + (transportValue as number)
    : null

  const displayTotal = props.total ?? (numericTotal !== null && numericTotal > 0 ? `${numericTotal} €` : null)

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-gray-100 shadow-card">
      {/* Header */}
      <div className="bg-primary px-6 py-4">
        <h3 className="font-display font-bold text-white text-lg">
          💶 Budget estimé — famille
        </h3>
        {props.note && <p className="text-white/80 text-xs mt-1">{props.note}</p>}
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <tbody>
          {lines.map((line, i) => {
            const hasValue =
              (typeof line.value === 'number' && line.value > 0) ||
              (typeof line.value === 'string' && line.value)
            if (!hasValue) return null

            return (
              <tr key={line.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-5 py-3 font-medium text-brun">
                  <span className="mr-2" aria-hidden>{line.icon}</span>
                  {line.label}
                </td>
                <td className="px-5 py-3 text-right font-bold text-brun">
                  {typeof line.value === 'number' ? `${line.value} €` : line.value}
                </td>
              </tr>
            )
          })}
        </tbody>
        {displayTotal && (
          <tfoot>
            <tr className="border-t-2 border-primary/20">
              <td className="px-5 py-4 font-display font-bold text-brun">
                Total famille
              </td>
              <td className="px-5 py-4 text-right">
                <span className="font-display font-bold text-primary text-xl">{displayTotal}</span>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}

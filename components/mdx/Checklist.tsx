'use client'

import { useState } from 'react'

interface ChecklistProps {
  categorie?: string
  items?: string[]
  emoji?: string
}

export default function Checklist(props: ChecklistProps) {
  const items = Array.isArray(props.items) ? props.items : []
  const categorie = props.categorie ?? 'Liste'
  const emoji = props.emoji ?? '✅'

  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const toggle = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const checkedCount = Object.values(checked).filter(Boolean).length
  const total = items.length

  return (
    <div className="bg-white border border-sable-dark rounded-2xl overflow-hidden my-6 shadow-sm">
      <div className="bg-sable px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden>{emoji}</span>
          <h3 className="font-display font-bold text-brun">{categorie}</h3>
        </div>
        <span className="text-sm text-brun-muted font-medium">
          {checkedCount}/{total}
        </span>
      </div>

      <div className="h-1 bg-sable-dark">
        <div
          className="h-1 bg-terracotta transition-all duration-300"
          style={{ width: total > 0 ? `${(checkedCount / total) * 100}%` : '0%' }}
          role="progressbar"
          aria-valuenow={checkedCount}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>

      <ul className="divide-y divide-sable">
        {items.map((item, index) => (
          <li key={index}>
            <label className="flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-sable/30 transition-colors group">
              <input
                type="checkbox"
                checked={checked[index] || false}
                onChange={() => toggle(index)}
                className="w-5 h-5 rounded border-2 border-sable-dark text-terracotta focus:ring-terracotta"
              />
              <span
                className={`text-sm transition-all ${
                  checked[index]
                    ? 'line-through text-brun-muted'
                    : 'text-brun group-hover:text-terracotta'
                }`}
              >
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {checkedCount === total && total > 0 && (
        <div className="bg-sage/10 border-t border-sage/30 px-5 py-3 text-center">
          <span className="text-sage font-medium text-sm">🎉 Tout est prêt, bonne route !</span>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'

interface ChecklistProps {
  categorie: string
  items: string[]
  emoji?: string
}

export default function Checklist({ categorie, items, emoji = '✅' }: ChecklistProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const toggle = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const checkedCount = Object.values(checked).filter(Boolean).length

  return (
    <div className="bg-white border border-sable-dark rounded-2xl overflow-hidden my-6 shadow-sm">
      {/* Header */}
      <div className="bg-sable px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden>{emoji}</span>
          <h3 className="font-display font-bold text-brun">{categorie}</h3>
        </div>
        <span className="text-sm text-brun-muted font-medium">
          {checkedCount}/{items.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-sable-dark">
        <div
          className="h-1 bg-terracotta transition-all duration-300"
          style={{ width: `${(checkedCount / items.length) * 100}%` }}
          role="progressbar"
          aria-valuenow={checkedCount}
          aria-valuemin={0}
          aria-valuemax={items.length}
        />
      </div>

      {/* Items */}
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

      {checkedCount === items.length && items.length > 0 && (
        <div className="bg-sage/10 border-t border-sage/30 px-5 py-3 text-center">
          <span className="text-sage font-medium text-sm">🎉 Tout est prêt, bonne route !</span>
        </div>
      )}
    </div>
  )
}

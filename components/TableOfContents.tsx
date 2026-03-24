'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Sommaire" className="text-sm">
      <p className="font-display font-bold text-brun text-[11px] uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="block w-4 h-0.5 bg-primary rounded-full" aria-hidden />
        Sommaire
      </p>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '10px' : '0' }}>
            <a
              href={`#${h.id}`}
              className={[
                'block py-1 pl-3 border-l-2 text-[13px] leading-snug transition-all duration-150',
                activeId === h.id
                  ? 'border-primary text-primary font-semibold'
                  : 'border-transparent text-brun-muted hover:text-brun hover:border-gray-300',
              ].join(' ')}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

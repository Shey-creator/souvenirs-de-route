'use client'

import { useState } from 'react'
import { FAQItem } from '@/types'

interface LegacyFAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items?: FAQItem[]
  questions?: LegacyFAQItem[]
  title?: string
}

export default function FAQ({ items, questions, title = 'Questions fréquentes' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] =
    items ??
    (questions?.map((q) => ({ question: q.question, reponse: q.answer })) ?? [])

  return (
    <div className="my-8" itemScope itemType="https://schema.org/FAQPage">
      <h2 className="font-display text-2xl font-bold text-brun mb-5">{title}</h2>
      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className="bg-white border border-sable-dark rounded-xl overflow-hidden shadow-sm"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:bg-sable/30 transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span
                  className="font-display font-semibold text-brun text-sm md:text-base"
                  itemProp="name"
                >
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-sable text-terracotta transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div
                  className="px-5 pb-5 text-sm text-brun-muted leading-relaxed border-t border-sable"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="pt-4" itemProp="text">
                    {item.reponse}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

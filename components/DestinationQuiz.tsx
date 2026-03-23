'use client'

import { useState } from 'react'
import Link from 'next/link'

type Step = 'duree' | 'budget' | 'type' | 'age' | 'results'

interface Filters {
  duree: string
  budget: string
  type: string
  age: string
}

interface Destination {
  ville: string
  description: string
  slug: string
  duree: string[]
  budget: string[]
  type: string[]
  age: string[]
}

const DESTINATIONS: Destination[] = [
  { ville: 'Montpellier', description: 'La Comédie, les plages à 15 min, idéale avec tout âge.', slug: '/destinations/france/montpellier', duree: ['weekend', 'court'], budget: ['serre', 'moyen'], type: ['mer', 'ville'], age: ['bebe', 'petit', 'enfant', 'ado'] },
  { ville: 'Annecy', description: 'Le lac le plus pur d\'Europe, vieille ville colorée, vélo.', slug: '/destinations/france/annecy', duree: ['weekend', 'court'], budget: ['moyen'], type: ['montagne', 'ville'], age: ['petit', 'enfant', 'ado'] },
  { ville: 'Nice', description: 'Promenade des Anglais, Vieux-Nice, galets et soleil.', slug: '/destinations/france/nice', duree: ['weekend', 'court'], budget: ['moyen', 'plaisir'], type: ['mer', 'ville'], age: ['bebe', 'petit', 'enfant'] },
  { ville: 'Barcelone', description: 'Sagrada Familia, plages, Parc Güell : une grande aventure.', slug: '/destinations/europe/barcelone', duree: ['court', 'semaine'], budget: ['moyen', 'plaisir'], type: ['mer', 'ville'], age: ['petit', 'enfant', 'ado'] },
  { ville: 'Rome', description: 'Colisée, fontaine de Trevi, pizzas : l\'histoire vivante.', slug: '/destinations/europe/rome', duree: ['court', 'semaine'], budget: ['moyen', 'plaisir'], type: ['ville'], age: ['enfant', 'ado'] },
  { ville: 'Chamonix', description: 'Mont-Blanc, téléphériques, randonnées pour les 5+.', slug: '/destinations/france/chamonix', duree: ['semaine'], budget: ['moyen', 'plaisir'], type: ['montagne'], age: ['petit', 'enfant', 'ado'] },
  { ville: 'Saint-Malo', description: 'Remparts, plages immenses, fort National et crêpes.', slug: '/destinations/france/saint-malo', duree: ['weekend', 'court'], budget: ['serre', 'moyen'], type: ['mer', 'ville'], age: ['petit', 'enfant', 'ado'] },
  { ville: 'Amsterdam', description: 'Canaux, vélos, Rijksmuseum, zoo : ville idéale famille.', slug: '/destinations/europe/amsterdam', duree: ['court', 'semaine'], budget: ['moyen', 'plaisir'], type: ['ville'], age: ['enfant', 'ado'] },
  { ville: 'Biarritz', description: 'Grandes plages Atlantique, surf, ambiance décontractée.', slug: '/destinations/france/biarritz', duree: ['semaine'], budget: ['moyen', 'plaisir'], type: ['mer', 'campagne'], age: ['petit', 'enfant', 'ado'] },
  { ville: 'Carcassonne', description: 'Cité médiévale, chevaliers, visites costumées : magie !', slug: '/destinations/france/carcassonne', duree: ['weekend'], budget: ['serre', 'moyen'], type: ['ville', 'campagne'], age: ['petit', 'enfant'] },
  { ville: 'Paris', description: 'Tour Eiffel, Louvre, bateaux-mouches : incontournable.', slug: '/destinations/france/paris', duree: ['court', 'semaine'], budget: ['plaisir'], type: ['ville'], age: ['enfant', 'ado'] },
  { ville: 'Avignon', description: 'Palais des Papes, Pont d\'Avignon, Provence à portée.', slug: '/destinations/france/avignon', duree: ['weekend', 'court'], budget: ['serre', 'moyen'], type: ['ville', 'campagne'], age: ['petit', 'enfant'] },
]

const QUESTIONS = {
  duree: {
    question: 'Combien de temps vous partez ?',
    options: [
      { value: 'weekend', label: 'Week-end (2-3 jours)', emoji: '⚡' },
      { value: 'court', label: '4-5 jours', emoji: '🗓️' },
      { value: 'semaine', label: '1 semaine et plus', emoji: '✈️' },
    ],
  },
  budget: {
    question: 'Quel est votre budget ?',
    options: [
      { value: 'serre', label: 'Serré (on optimise)', emoji: '💚' },
      { value: 'moyen', label: 'Moyen (on gère)', emoji: '💛' },
      { value: 'plaisir', label: 'On se fait plaisir', emoji: '💎' },
    ],
  },
  type: {
    question: 'Quel type de voyage ?',
    options: [
      { value: 'mer', label: 'Bord de mer', emoji: '🏖️' },
      { value: 'montagne', label: 'Montagne', emoji: '⛰️' },
      { value: 'ville', label: 'Ville à explorer', emoji: '🏛️' },
      { value: 'campagne', label: 'Campagne / nature', emoji: '🌿' },
    ],
  },
  age: {
    question: 'Quel âge ont vos enfants ?',
    options: [
      { value: 'bebe', label: '0 à 3 ans', emoji: '🍼' },
      { value: 'petit', label: '4 à 7 ans', emoji: '🧸' },
      { value: 'enfant', label: '8 à 12 ans', emoji: '🎒' },
      { value: 'ado', label: 'Ados (13+)', emoji: '🎧' },
    ],
  },
}

const STEPS: Step[] = ['duree', 'budget', 'type', 'age']

export default function DestinationQuiz() {
  const [step, setStep] = useState<Step>('duree')
  const [filters, setFilters] = useState<Filters>({ duree: '', budget: '', type: '', age: '' })
  const [results, setResults] = useState<Destination[]>([])

  const currentIndex = STEPS.indexOf(step)

  const handleSelect = (value: string) => {
    const newFilters = { ...filters, [step]: value }
    setFilters(newFilters)

    const nextStep = STEPS[currentIndex + 1]
    if (nextStep) {
      setStep(nextStep)
    } else {
      // Calcul des résultats
      const scored = DESTINATIONS.map((dest) => {
        let score = 0
        if (dest.duree.includes(newFilters.duree)) score += 3
        if (dest.budget.includes(newFilters.budget)) score += 3
        if (dest.type.includes(newFilters.type)) score += 2
        if (dest.age.includes(newFilters.age)) score += 2
        return { ...dest, score }
      })
      const top3 = scored.sort((a, b) => b.score - a.score).slice(0, 3)
      setResults(top3)
      setStep('results')
    }
  }

  const reset = () => {
    setStep('duree')
    setFilters({ duree: '', budget: '', type: '', age: '' })
    setResults([])
  }

  if (step === 'results') {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
        <p className="text-center text-brun-muted text-sm mb-2">Vos destinations idéales</p>
        <h3 className="font-display text-2xl font-bold text-brun text-center mb-6">
          On a 3 idées pour vous !
        </h3>
        <div className="space-y-4">
          {results.map((dest, i) => (
            <Link
              key={dest.slug}
              href={dest.slug}
              className="flex items-start gap-4 p-4 rounded-xl border border-sable-dark hover:border-terracotta hover:bg-terracotta/5 transition-colors group"
            >
              <span className="font-display text-2xl font-bold text-terracotta/30 group-hover:text-terracotta transition-colors">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-brun group-hover:text-terracotta transition-colors">
                  {dest.ville}
                </p>
                <p className="text-sm text-brun-muted">{dest.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <button onClick={reset} className="w-full mt-6 text-sm text-brun-muted hover:text-terracotta transition-colors underline">
          Recommencer le quiz
        </button>
      </div>
    )
  }

  const q = QUESTIONS[step]

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
      {/* Progression */}
      <div className="flex gap-1.5 mb-6">
        {STEPS.map((s, i) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= currentIndex ? 'bg-terracotta' : 'bg-sable-dark'
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-brun-muted mb-2">Question {currentIndex + 1} sur {STEPS.length}</p>
      <h3 className="font-display text-xl font-bold text-brun mb-5">{q.question}</h3>

      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-sable-dark hover:border-terracotta hover:bg-terracotta/5 transition-all text-center group"
          >
            <span className="text-2xl">{opt.emoji}</span>
            <span className="text-sm font-medium text-brun group-hover:text-terracotta transition-colors">
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

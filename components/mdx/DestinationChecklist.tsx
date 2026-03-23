'use client'

import { useState } from 'react'

interface ChecklistSection {
  categorie: string
  emoji: string
  items: string[]
}

// Items communs à toutes les destinations
const BASE_SECTIONS: ChecklistSection[] = [
  {
    categorie: 'Vêtements',
    emoji: '👕',
    items: [
      '5 hauts polyvalents dont 1 habillé',
      '3 bas (pantalons / shorts)',
      '1 veste légère ou polaire',
      '1 imperméable compact',
      '7 sous-vêtements + 7 chaussettes',
      '2 maillots de bain',
      'Chaussures de marche confortables',
      'Sandales ou tongs',
      'Pyjamas (2 suffisent)',
    ],
  },
  {
    categorie: 'Pharmacie',
    emoji: '🏥',
    items: [
      'Paracétamol adultes + enfants (sirop + comprimés)',
      'Ibuprofène enfants',
      'Antihistaminique (allergies, piqûres)',
      'Sérum physiologique',
      'Pansements + antiseptique',
      'Crème solaire SPF 50+',
      'Thermomètre frontal',
      'Carte Vitale + Carte Européenne Assurance Maladie',
    ],
  },
  {
    categorie: 'Documents',
    emoji: '📄',
    items: [
      'Passeports / CNI (vérifier la date d\'expiration)',
      'Billets imprimés + sur téléphone',
      'Confirmation d\'hébergement',
      'Assurance voyage',
      'Cartes bancaires (2 cartes différentes)',
      'Espèces locales (petite somme)',
    ],
  },
  {
    categorie: 'Enfants',
    emoji: '🧸',
    items: [
      '1 doudou ou jouet favori',
      '1 livre ou carnet de voyage',
      'Casque audio + tablette chargée',
      'Contenus téléchargés offline',
      'Snacks pour le trajet',
      'Gourde',
    ],
  },
]

// Items spécifiques par destination
const DESTINATION_EXTRAS: Record<
  string,
  { label: string; emoji: string; items: string[] }
> = {
  paris: {
    label: 'Paris',
    emoji: '🗼',
    items: [
      'Pass Navigo semaine (transports illimités)',
      'Chaussures de marche très confortables (15 000 pas/jour minimum)',
      'Coupe-vent (le métro et les rues de Paris sont venteux)',
      'Parapluie compact',
      'Réservations musées à l\'avance (Louvre, Versailles : files interminables)',
      'Sac à dos léger pour les journées',
    ],
  },
  nice: {
    label: 'Nice',
    emoji: '🌊',
    items: [
      'Crème solaire SPF 50+ (soleil intense sur la Côte)',
      'Chaussures aquatiques (la plage est en galets)',
      'Serviette microfibre (légère, sèche vite)',
      'Lunettes de soleil pour les enfants',
      'Chapeau anti-UV',
      'Tongs ou sandales légères',
    ],
  },
  cannes: {
    label: 'Cannes',
    emoji: '🎬',
    items: [
      'Crème solaire SPF 50+',
      'Chaussures aquatiques (plage de galets)',
      'Serviette microfibre',
      'Chapeau ou casquette',
      'Tenue légère habillée pour la promenade du soir',
      'Appareil photo (La Croisette est photogénique)',
    ],
  },
  lyon: {
    label: 'Lyon',
    emoji: '🍽️',
    items: [
      'Chaussures confortables pour les pentes (Fourvière, Croix-Rousse)',
      'Veste légère même en été (les traboules sont fraîches)',
      'Réservation bouchon lyonnais à l\'avance',
      'Agenda des événements (Biennale, Fête des Lumières selon période)',
    ],
  },
  bordeaux: {
    label: 'Bordeaux',
    emoji: '🍇',
    items: [
      'Veste légère (vent de l\'Atlantique même en été)',
      'Chaussures confortables pour les vignobles',
      'Glacière compacte si excursion en Saint-Émilion',
      'Vélos ou trottinettes électriques (ville très cyclable)',
    ],
  },
  montpellier: {
    label: 'Montpellier',
    emoji: '🌞',
    items: [
      'Crème solaire SPF 50+ (été très chaud)',
      'Maillot de bain (plage à 25 min en tramway)',
      'Serviette de plage',
      'Titre de transport tram (ligne 3 pour Palavas)',
    ],
  },
  avignon: {
    label: 'Avignon',
    emoji: '🏰',
    items: [
      'Crème solaire (Provence très ensoleillée)',
      'Chapeau (remparts et places très exposés)',
      'Bouteille d\'eau réutilisable (fontaines partout en ville)',
      'Réservation Palais des Papes conseillée en saison',
    ],
  },
  marseille: {
    label: 'Marseille',
    emoji: '⚓',
    items: [
      'Crème solaire SPF 50+',
      'Bonnes chaussures de marche (côtes et escaliers)',
      'Maillot de bain (calanques)',
      'Chaussures aquatiques pour les calanques rocheuses',
      'Réservation bateau pour les calanques en été',
    ],
  },
  londres: {
    label: 'Londres',
    emoji: '🎡',
    items: [
      'Adaptateur prise type G (indispensable au Royaume-Uni)',
      'Imperméable ou poncho, la pluie est fréquente, même en été',
      'Oyster Card enfants pour les transports (économique)',
      'Livres sterling en espèces (marchés, petits commerces)',
      'Vêtements chauds même en été (les soirées sont fraîches)',
      'Application Citymapper pour le métro londonien',
    ],
  },
  berlin: {
    label: 'Berlin',
    emoji: '🎨',
    items: [
      'Carte BVG famille pour les transports en commun',
      'Euros en espèces (marchés, nombreux restos n\'acceptent pas la carte)',
      'Vêtements chauds le soir, même en juillet les nuits fraîchissent',
      'Chaussures imperméables (pluie fréquente)',
      'Berlin Welcome Card si plusieurs musées prévus',
    ],
  },
  barcelone: {
    label: 'Barcelone',
    emoji: '🌴',
    items: [
      'Crème solaire SPF 50+',
      'Chaussures de marche confortables (Park Güell, Barri Gòtic)',
      'Anti-moustiques le soir (végétation dense)',
      'Billets Sagrada Familia réservés longtemps à l\'avance',
      'T10 (carnet de tickets de métro)',
    ],
  },
}

const ALL_DESTINATIONS = [
  { key: 'general', label: '🌍 Général', emoji: '🌍' },
  { key: 'paris', label: '🗼 Paris', emoji: '🗼' },
  { key: 'nice', label: '🌊 Nice', emoji: '🌊' },
  { key: 'cannes', label: '🎬 Cannes', emoji: '🎬' },
  { key: 'lyon', label: '🍽️ Lyon', emoji: '🍽️' },
  { key: 'bordeaux', label: '🍇 Bordeaux', emoji: '🍇' },
  { key: 'montpellier', label: '🌞 Montpellier', emoji: '🌞' },
  { key: 'avignon', label: '🏰 Avignon', emoji: '🏰' },
  { key: 'marseille', label: '⚓ Marseille', emoji: '⚓' },
  { key: 'londres', label: '🎡 Londres', emoji: '🎡' },
  { key: 'berlin', label: '🎨 Berlin', emoji: '🎨' },
  { key: 'barcelone', label: '🌴 Barcelone', emoji: '🌴' },
]

function CheckItem({
  item,
  id,
  highlight,
}: {
  item: string
  id: string
  highlight: boolean
}) {
  const [checked, setChecked] = useState(false)

  return (
    <li>
      <label
        className={`flex items-start gap-3 px-4 py-2.5 cursor-pointer transition-colors group rounded-lg ${
          highlight
            ? 'bg-terracotta/5 hover:bg-terracotta/10'
            : 'hover:bg-sable/40'
        }`}
      >
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mt-0.5 w-5 h-5 rounded border-2 border-sable-dark text-terracotta focus:ring-terracotta flex-shrink-0"
        />
        <span
          className={`text-sm leading-snug transition-all ${
            checked
              ? 'line-through text-brun-muted'
              : highlight
              ? 'text-terracotta font-medium'
              : 'text-brun group-hover:text-terracotta'
          }`}
        >
          {highlight && !checked && (
            <span className="inline-block w-2 h-2 rounded-full bg-terracotta mr-2 align-middle" />
          )}
          {item}
        </span>
      </label>
    </li>
  )
}

function Section({
  section,
  extraItems,
  destKey,
}: {
  section: ChecklistSection
  extraItems: string[]
  destKey: string
}) {
  const [collapsed, setCollapsed] = useState(false)
  const allItems = section.items
  const allExtra = extraItems

  const baseCount = allItems.length
  const extraCount = allExtra.length
  const total = baseCount + extraCount

  return (
    <div className="border border-sable-dark rounded-2xl overflow-hidden mb-4">
      <button
        className="w-full bg-sable px-5 py-4 flex items-center justify-between hover:bg-sable-dark transition-colors"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="flex items-center gap-2 font-display font-bold text-brun">
          <span>{section.emoji}</span>
          {section.categorie}
          {extraCount > 0 && (
            <span className="text-xs bg-terracotta text-white px-2 py-0.5 rounded-full">
              +{extraCount} {destKey !== 'general' ? 'spécifique' : ''}
            </span>
          )}
        </span>
        <svg
          className={`w-4 h-4 text-brun-muted transition-transform ${collapsed ? '-rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {!collapsed && (
        <ul className="divide-y divide-sable/50 bg-white">
          {allItems.map((item, i) => (
            <CheckItem
              key={i}
              item={item}
              id={`${destKey}-${section.categorie}-base-${i}`}
              highlight={false}
            />
          ))}
          {allExtra.map((item, i) => (
            <CheckItem
              key={`extra-${i}`}
              item={item}
              id={`${destKey}-${section.categorie}-extra-${i}`}
              highlight={true}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default function DestinationChecklist() {
  const [selectedDest, setSelectedDest] = useState('general')

  const destExtras = DESTINATION_EXTRAS[selectedDest]

  return (
    <div className="my-8">
      {/* Sélecteur destination */}
      <div className="bg-brun rounded-2xl p-5 mb-6">
        <p className="text-white font-display font-bold text-lg mb-1">
          🎒 Check-liste par destination
        </p>
        <p className="text-sable-dark text-sm mb-4">
          Sélectionnez votre destination pour voir les items spécifiques en plus de la liste de base.
        </p>
        <select
          value={selectedDest}
          onChange={(e) => setSelectedDest(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white text-brun font-medium focus:outline-none focus:ring-2 focus:ring-terracotta"
        >
          {ALL_DESTINATIONS.map((d) => (
            <option key={d.key} value={d.key}>
              {d.label}
            </option>
          ))}
        </select>

        {destExtras && (
          <div className="mt-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
            <p className="text-white/80 text-xs">
              Les items en{' '}
              <span className="text-terracotta font-semibold">orange</span> sont
              spécifiques à {destExtras.label}
            </p>
          </div>
        )}
      </div>

      {/* Sections de la check-liste */}
      {BASE_SECTIONS.map((section) => {
        // Items spécifiques à la destination pour cette section, pour l'instant
        // on les met tous dans la section Vêtements (logique de catégorisation future)
        const extraForSection =
          section.categorie === 'Vêtements' && destExtras ? destExtras.items : []

        return (
          <Section
            key={section.categorie}
            section={section}
            extraItems={extraForSection}
            destKey={selectedDest}
          />
        )
      })}

      {/* Section destination complète */}
      {destExtras && selectedDest !== 'general' && (
        <div className="border-2 border-terracotta rounded-2xl overflow-hidden">
          <div className="bg-terracotta px-5 py-4">
            <p className="font-display font-bold text-white text-lg">
              {destExtras.emoji} Spécial {destExtras.label}
            </p>
            <p className="text-white/80 text-xs mt-0.5">
              Ces items s&apos;ajoutent à votre liste de base
            </p>
          </div>
          <ul className="divide-y divide-sable/50 bg-white">
            {destExtras.items.map((item, i) => (
              <CheckItem
                key={i}
                item={item}
                id={`dest-special-${i}`}
                highlight={true}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

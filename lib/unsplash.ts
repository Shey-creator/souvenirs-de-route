import { UnsplashImage } from '@/types'

const UNSPLASH_API = 'https://api.unsplash.com'

interface UnsplashApiResponse {
  urls: { regular: string }
  alt_description: string
  user: { name: string; links: { html: string } }
}

interface UnsplashSearchResponse {
  results: UnsplashApiResponse[]
  total: number
}

// Noms anglais pour l'API Unsplash
const CITY_EN: Record<string, string> = {
  montpellier: 'Montpellier', avignon: 'Avignon', marseille: 'Marseille',
  lyon: 'Lyon', bordeaux: 'Bordeaux', paris: 'Paris', nice: 'Nice',
  cannes: 'Cannes', nantes: 'Nantes', strasbourg: 'Strasbourg',
  toulouse: 'Toulouse', antibes: 'Antibes', menton: 'Menton',
  'aix-en-provence': 'Aix-en-Provence', sete: 'Sete', nimes: 'Nimes',
  'les-baux-de-provence': 'Les Baux', gordes: 'Gordes', arles: 'Arles',
  annecy: 'Annecy', chamonix: 'Chamonix', colmar: 'Colmar',
  'saint-malo': 'Saint-Malo', 'mont-saint-michel': 'Mont Saint-Michel',
  biarritz: 'Biarritz', carcassonne: 'Carcassonne', dijon: 'Dijon',
  barcelone: 'Barcelona', rome: 'Rome', lisbonne: 'Lisbon',
  amsterdam: 'Amsterdam', londres: 'London', berlin: 'Berlin',
  prague: 'Prague', vienne: 'Vienna', budapest: 'Budapest',
  bruges: 'Bruges', edimbourg: 'Edinburgh', copenhague: 'Copenhagen',
  porto: 'Porto', seville: 'Seville', valence: 'Valencia',
  ljubljana: 'Ljubljana', tallinn: 'Tallinn', dubrovnik: 'Dubrovnik',
  malte: 'Malta', reykjavik: 'Reykjavik',
}

// Requetes photos de LIEUX specifiques par ville (monuments / quartiers iconiques)
const CITY_PLACE_QUERY: Record<string, string> = {
  paris: 'Paris France Eiffel Tower',
  barcelone: 'Sagrada Familia Barcelona',
  rome: 'Colosseum Rome',
  londres: 'Tower Bridge London',
  amsterdam: 'Amsterdam canals',
  berlin: 'Brandenburg Gate Berlin',
  prague: 'Prague castle',
  nice: 'Nice France promenade cote azur',
  cannes: 'Cannes France promenade',
  marseille: 'Marseille France vieux port',
  lyon: 'Lyon France Vieux-Lyon',
  bordeaux: 'Bordeaux France place bourse',
  montpellier: 'Montpellier France place comedie',
  avignon: 'Avignon France palais des papes',
  strasbourg: 'Strasbourg France cathedrale',
  annecy: 'Annecy France lac',
  chamonix: 'Chamonix Alpes France',
  'saint-malo': 'Saint-Malo France remparts mer',
  'mont-saint-michel': 'Mont Saint Michel France',
  carcassonne: 'Carcassonne France chateau medieval',
  colmar: 'Colmar Alsace maisons colorees',
  biarritz: 'Biarritz France plage',
  antibes: 'Antibes France',
  menton: 'Menton France',
  nimes: 'Nimes France arenes',
  arles: 'Arles France',
  gordes: 'Gordes Provence village',
  'les-baux-de-provence': 'Les Baux de Provence',
  dijon: 'Dijon France',
  sete: 'Sete France canal',
  lisbonne: 'Lisbon tram',
  budapest: 'Budapest parliament',
  vienne: 'Vienna opera house',
  valence: 'Valencia Spain cathedral',
  dubrovnik: 'Dubrovnik old town walls',
  reykjavik: 'Reykjavik Iceland colorful',
  copenhague: 'Copenhagen Nyhavn canals',
  edimbourg: 'Edinburgh castle Scotland',
  seville: 'Seville Alcazar Spain',
  bruges: 'Bruges canals Belgium',
  porto: 'Porto Dom Luis bridge',
}

// Requetes specifiques pour les articles conseils/equipement (ville: "Général")
const CONSEIL_ARTICLE_QUERIES: Record<string, string> = {
  'meilleure-poussette-voyage': 'baby stroller travel airport',
  'meilleures-valises-enfant-voyage': 'kids luggage travel suitcase',
  'meilleur-casque-audio-enfant-avion': 'child headphones airplane',
  'meilleur-sac-a-dos-enfant-voyage': 'kids backpack travel',
  'meilleurs-jeux-voyage-famille': 'family road trip games kids car',
  'organiser-vacances-famille-methode': 'family travel planning map',
  'alimentation-bebe-voyage-conseils': 'baby food travel family',
  'premier-voyage-bebe-conseils': 'baby travel family vacation',
  'activites-enfant-avion-voiture': 'kids airplane window travel',
  'avion-enfants-moins-5-ans': 'children airplane travel family',
  'road-trip-famille-conseils': 'family road trip car driving',
  'astuces-sncf-famille': 'family train travel kids',
  'budget-voyage-famille-conseils': 'family travel budget planning',
  'assurance-voyage-famille-choisir': 'family travel documents passport',
  'meilleures-cartes-bancaires-voyage-famille': 'travel credit card wallet',
  'pack-your-bag-voyage-famille': 'travel packing luggage family',
  'siege-auto-voyage-avion-location': 'child car seat travel',
  'trousse-medicale-voyage-famille': 'travel first aid kit medical',
  'vetements-voyage-enfant-liste': 'kids travel clothes packing',
  'meilleures-applis-voyage-famille': 'smartphone navigation travel map',
}

/**
 * Requete hero pour un article. Utilise le mapping slug en priorite
 * pour les articles conseils/equipement, puis delègue à buildHeroQuery.
 */
export function buildArticleHeroQuery(slug: string, ville: string, pays: string): string {
  if (CONSEIL_ARTICLE_QUERIES[slug]) return CONSEIL_ARTICLE_QUERIES[slug]
  return buildHeroQuery(ville, pays)
}

/**
 * Requete LIEU pour les heroes d'articles et destinations.
 * Utilise le monument/quartier iconique de la ville si connu,
 * sinon "[city] city france" ou "[city] city".
 */
export function buildHeroQuery(ville: string, pays: string = 'France'): string {
  const key = ville.toLowerCase().replace(/\s+/g, '-')
  if (CITY_PLACE_QUERY[key]) return CITY_PLACE_QUERY[key]

  const cityEn = CITY_EN[key] || ville
  return pays.toLowerCase() === 'france'
    ? `${cityEn} city france`
    : `${cityEn} city`
}

/**
 * Fonction centralisee : appelle /search/photos (retourne toujours un 200).
 * Retourne l'URL de la photo a l'index donne, ou null.
 * Ne plante jamais (try/catch).
 */
export async function getUnsplashPhoto(
  query: string,
  fallbackQuery?: string,
  index: number = 0
): Promise<string | null> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) {
    console.warn('[Unsplash] UNSPLASH_ACCESS_KEY manquante — photos desactivees')
    return null
  }
  console.log(`[Unsplash] Requete: "${query}" (index ${index})`)

  try {
    const perPage = Math.max(3, index + 1)
    const params = new URLSearchParams({
      query,
      orientation: 'landscape',
      per_page: String(perPage),
      order_by: 'relevant',
      client_id: accessKey,
    })
    const res = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) {
      console.warn(`[Unsplash] Erreur HTTP ${res.status} pour: "${query}"`)
      if (fallbackQuery) return getUnsplashPhoto(fallbackQuery)
      return null
    }
    const data: UnsplashSearchResponse = await res.json()
    const url = data.results?.[index]?.urls?.regular ?? data.results?.[0]?.urls?.regular ?? null
    if (!url) {
      console.warn(`[Unsplash] Aucun resultat pour: "${query}"`)
      if (fallbackQuery) return getUnsplashPhoto(fallbackQuery)
    } else {
      console.log(`[Unsplash] Photo OK pour: "${query}"`)
    }
    return url
  } catch (err) {
    console.error(`[Unsplash] Exception pour: "${query}"`, err)
    if (fallbackQuery) {
      try {
        return await getUnsplashPhoto(fallbackQuery)
      } catch {
        return null
      }
    }
    return null
  }
}

/**
 * Requete FAMILLE : utilisee UNIQUEMENT sur homepage et page a-propos.
 */
export const FAMILY_PHOTO_QUERY = 'family four people travel europe happy'

// Requetes paysage France/Provence pour le hero de la homepage
const HERO_LANDSCAPE_QUERIES = [
  'provence lavender field france sunny',
  'south france mediterranean village',
  'french riviera coast sunny',
  'provence village france summer',
]

/**
 * Fetch une photo paysage France/Provence pour le hero de la homepage.
 */
export async function fetchHeroLandscapePhoto(): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return { url: null, alt: 'Paysage du Sud de la France' }

  for (const query of HERO_LANDSCAPE_QUERIES) {
    const url = await getUnsplashPhoto(query)
    if (url) return { url, alt: 'Paysage du Sud de la France' }
  }

  return { url: null, alt: 'Paysage du Sud de la France' }
}

// Requetes pour la photo de famille (homepage)
const FAMILY_PHOTO_QUERIES = [
  'couple children travel europe sunny',
  'family vacation mediterranean beach',
  'parents kids travel holiday europe',
  'family walking city europe summer',
]

/**
 * Fetch la photo de famille unique (homepage + a-propos).
 */
export async function fetchFamilyPhoto(): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return { url: null, alt: 'Famille en voyage' }

  for (const query of FAMILY_PHOTO_QUERIES) {
    const url = await getUnsplashPhoto(query)
    if (url) return { url, alt: 'Famille en voyage' }
  }

  return { url: null, alt: 'Famille en voyage' }
}

// Requetes pour la photo de Sophie (de dos ou profil, pas le visage)
const SOPHIE_PHOTO_QUERIES = [
  'woman back travel europe street',
  'young woman solo travel city',
  'woman exploring city europe',
]

/**
 * Fetch la photo de Sophie. Utilisee uniquement sur la page a-propos.
 */
export async function fetchSophiePhoto(): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return { url: null, alt: 'Sophie en voyage' }

  for (const query of SOPHIE_PHOTO_QUERIES) {
    const url = await getUnsplashPhoto(query)
    if (url) return { url, alt: 'Sophie en voyage' }
  }

  return { url: null, alt: 'Sophie en voyage' }
}

/**
 * Fetch une image Unsplash avec fallback.
 * Utilise getUnsplashPhoto en interne (search/photos, jamais random).
 */
export async function fetchUnsplashImage(
  query: string,
  _orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape',
  fallbackQuery?: string
): Promise<UnsplashImage> {
  const url = await getUnsplashPhoto(query, fallbackQuery)
  return { url, alt: query }
}

export async function fetchMultipleImages(
  queries: { query: string; orientation?: 'landscape' | 'portrait' | 'squarish'; fallback?: string }[]
): Promise<UnsplashImage[]> {
  return Promise.all(
    queries.map(({ query, fallback }) =>
      fetchUnsplashImage(query, 'landscape', fallback)
    )
  )
}

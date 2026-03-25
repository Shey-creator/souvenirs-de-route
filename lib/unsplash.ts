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
 * Retourne l'URL de la premiere photo trouvee, ou null.
 * Ne plante jamais (try/catch).
 */
export async function getUnsplashPhoto(
  query: string,
  fallbackQuery?: string
): Promise<string | null> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return null

  try {
    const params = new URLSearchParams({
      query,
      orientation: 'landscape',
      per_page: '3',
      order_by: 'relevant',
      client_id: accessKey,
    })
    const res = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) {
      if (fallbackQuery) return getUnsplashPhoto(fallbackQuery)
      return null
    }
    const data: UnsplashSearchResponse = await res.json()
    const url = data.results?.[0]?.urls?.regular ?? null
    if (!url && fallbackQuery) return getUnsplashPhoto(fallbackQuery)
    return url
  } catch {
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

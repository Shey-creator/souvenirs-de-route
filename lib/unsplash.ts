import { UnsplashImage } from '@/types'

const UNSPLASH_API = 'https://api.unsplash.com'

interface UnsplashApiResponse {
  urls: { regular: string }
  alt_description: string
  user: { name: string; links: { html: string } }
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
  paris: 'Eiffel Tower Paris',
  barcelone: 'Sagrada Familia Barcelona',
  rome: 'Colosseum Rome',
  londres: 'Tower Bridge London',
  amsterdam: 'Amsterdam canals',
  berlin: 'Brandenburg Gate Berlin',
  prague: 'Prague castle',
  nice: 'Nice promenade des anglais',
  cannes: 'Cannes France coast',
  marseille: 'Marseille vieux port',
  lyon: 'Lyon old town France',
  bordeaux: 'Bordeaux waterfront France',
  montpellier: 'Montpellier France city',
  avignon: 'Avignon France palace',
  strasbourg: 'Strasbourg petite france',
  annecy: 'Annecy lake France',
  chamonix: 'Chamonix Mont Blanc',
  'saint-malo': 'Saint-Malo ramparts France',
  'mont-saint-michel': 'Mont Saint-Michel France',
  carcassonne: 'Carcassonne medieval city',
  colmar: 'Colmar alsace France',
  biarritz: 'Biarritz France beach',
  antibes: 'Antibes France',
  menton: 'Menton France',
  nimes: 'Nimes France',
  arles: 'Arles France',
  gordes: 'Gordes Provence',
  'les-baux-de-provence': 'Les Baux de Provence',
  dijon: 'Dijon France',
  sete: 'Sete France',
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
 * Requete FAMILLE : utilisee UNIQUEMENT sur homepage et page a-propos.
 * Une seule vraie photo famille sur tout le site.
 */
export const FAMILY_PHOTO_QUERY = 'family four people travel europe happy'

// Requetes prioritaires pour la photo de famille unique (homepage + a-propos)
const FAMILY_PHOTO_QUERIES = [
  'couple children travel europe sunny',
  'family vacation mediterranean beach',
  'parents kids travel holiday europe',
  'family walking city europe summer',
]

/**
 * Fetch la photo de famille unique.
 * Essaie les requetes dans l'ordre, retourne la premiere qui fonctionne.
 * Utilisee UNIQUEMENT sur la homepage (hero) et la page a-propos.
 */
export async function fetchFamilyPhoto(): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return { url: null, alt: 'Famille en voyage' }

  for (const query of FAMILY_PHOTO_QUERIES) {
    const data = await tryFetch(query, 'landscape', accessKey)
    if (data) {
      return {
        url: data.urls.regular,
        alt: data.alt_description || query,
        credit: {
          name: data.user.name,
          link: `${data.user.links.html}?utm_source=souvenirs_de_route&utm_medium=referral`,
        },
      }
    }
  }

  return { url: null, alt: 'Famille en voyage' }
}

// Requetes paysage France/Provence pour le hero de la homepage
const HERO_LANDSCAPE_QUERIES = [
  'provence lavender field france sunny',
  'south france mediterranean village',
  'french riviera coast sunny',
  'provence village france summer',
]

/**
 * Fetch une photo paysage France/Provence pour le hero de la homepage.
 * Aucun visage. Format paysage immersif.
 */
export async function fetchHeroLandscapePhoto(): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return { url: null, alt: 'Paysage du Sud de la France' }

  for (const query of HERO_LANDSCAPE_QUERIES) {
    const data = await tryFetch(query, 'landscape', accessKey)
    if (data) {
      return {
        url: data.urls.regular,
        alt: data.alt_description || query,
        credit: {
          name: data.user.name,
          link: `${data.user.links.html}?utm_source=souvenirs_de_route&utm_medium=referral`,
        },
      }
    }
  }

  return { url: null, alt: 'Paysage du Sud de la France' }
}

// Requetes pour la photo de Sophie (de dos ou profil, pas le visage)
const SOPHIE_PHOTO_QUERIES = [
  'woman back travel europe street',
  'young woman solo travel city',
  'woman exploring city europe',
]

/**
 * Fetch la photo de Sophie. Photo de dos ou profil preferee.
 * Utilisee uniquement sur la page a-propos.
 */
export async function fetchSophiePhoto(): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return { url: null, alt: 'Sophie en voyage' }

  for (const query of SOPHIE_PHOTO_QUERIES) {
    const data = await tryFetch(query, 'portrait', accessKey)
    if (data) {
      return {
        url: data.urls.regular,
        alt: data.alt_description || query,
        credit: {
          name: data.user.name,
          link: `${data.user.links.html}?utm_source=souvenirs_de_route&utm_medium=referral`,
        },
      }
    }
  }

  return { url: null, alt: 'Sophie en voyage' }
}

async function tryFetch(
  query: string,
  orientation: string,
  accessKey: string
): Promise<UnsplashApiResponse | null> {
  try {
    const params = new URLSearchParams({ query, orientation, client_id: accessKey })
    const res = await fetch(`${UNSPLASH_API}/photos/random?${params}`, {
      next: { revalidate: 86400 },
    })
    if (res.ok) return res.json()
    return null
  } catch {
    return null
  }
}

/**
 * Fetch une image Unsplash.
 * Retourne url: null si aucune photo, les composants afficheront le gradient.
 * On ne fait UNE SEULE tentative par requete : jamais de photo incorrecte.
 */
export async function fetchUnsplashImage(
  query: string,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape',
  fallbackQuery?: string
): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) return { url: null, alt: query }

  let data = await tryFetch(query, orientation, accessKey)

  if (!data && fallbackQuery) {
    data = await tryFetch(fallbackQuery, orientation, accessKey)
  }

  if (!data) return { url: null, alt: query }

  return {
    url: data.urls.regular,
    alt: data.alt_description || query,
    credit: {
      name: data.user.name,
      link: `${data.user.links.html}?utm_source=souvenirs_de_route&utm_medium=referral`,
    },
  }
}

export async function fetchMultipleImages(
  queries: { query: string; orientation?: 'landscape' | 'portrait' | 'squarish'; fallback?: string }[]
): Promise<UnsplashImage[]> {
  return Promise.all(
    queries.map(({ query, orientation, fallback }) =>
      fetchUnsplashImage(query, orientation, fallback)
    )
  )
}

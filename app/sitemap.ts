import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://souvenirsderoute.com'

const FRANCE_CITIES = [
  'nice', 'cannes', 'antibes', 'menton', 'marseille', 'aix-en-provence',
  'montpellier', 'sete', 'nimes', 'avignon', 'les-baux-de-provence', 'gordes',
  'arles', 'annecy', 'chamonix', 'paris', 'lyon', 'bordeaux', 'strasbourg',
  'colmar', 'saint-malo', 'mont-saint-michel', 'biarritz', 'carcassonne',
  'dijon', 'nantes',
]

const EUROPE_CITIES = [
  'barcelone', 'rome', 'londres', 'amsterdam', 'berlin', 'prague', 'lisbonne',
  'vienne', 'budapest', 'bruges', 'seville', 'valence', 'porto', 'edimbourg',
  'copenhague', 'ljubljana', 'tallinn', 'dubrovnik', 'malte', 'reykjavik',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const franceCityUrls: MetadataRoute.Sitemap = FRANCE_CITIES.map((ville) => ({
    url: `${SITE_URL}/destinations/france/${ville}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const europeCityUrls: MetadataRoute.Sitemap = EUROPE_CITIES.map((ville) => ({
    url: `${SITE_URL}/destinations/europe/${ville}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/destinations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/carte`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/categories/itineraires`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/categories/week-end`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/categories/voyager-malin`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/categories/vacances-scolaires`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/categories/budget`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/categories/pack-your-bag`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/travailler-avec-nous`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/politique-de-confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  return [...staticUrls, ...franceCityUrls, ...europeCityUrls, ...articleUrls]
}

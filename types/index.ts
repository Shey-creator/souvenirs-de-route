export interface ArticleFrontmatter {
  title: string
  description: string
  slug: string
  ville: string
  region: string
  pays: string
  date: string
  updatedAt: string
  categories: string[]
  tags: string[]
  agesEnfants: string
  duree: string
  budget: 'petit' | 'moyen' | 'grand'
  saisonIdéale: string[]
  tempsLecture: number
  heroImage?: string
  heroImageAlt: string
  author: {
    name: string
    avatar: string
  }
  schema: string[]
}

export interface Article extends ArticleFrontmatter {
  content: string
}

export interface UnsplashImage {
  url: string | null  // null = aucune photo disponible, afficher le gradient
  alt: string
  credit?: {
    name: string
    link: string
  }
}

export interface FAQItem {
  question: string
  reponse: string
}

export interface ChecklistItem {
  label: string
  checked?: boolean
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface MapMarker {
  nom: string
  lat: number
  lng: number
}

export type InfoBoxType = 'conseil' | 'budget' | 'attention' | 'famille' | 'transports'

export interface DestinationCardProps {
  ville: string
  image: string | null
  duree: string
  budget: string
  highlight: string
  slug?: string
}

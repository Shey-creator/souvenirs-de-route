import { Article, FAQItem } from '@/types'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://souvenirsderoute.com'

export function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: `${SITE_URL}/a-propos`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Souvenirs de Route',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    image: article.heroImage,
    url: `${SITE_URL}/articles/${article.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/articles/${article.slug}`,
    },
    inLanguage: 'fr-FR',
    keywords: article.tags.join(', '),
  }
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.reponse,
      },
    })),
  }
}

export function generateTouristDestinationSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: article.ville,
    description: article.description,
    url: `${SITE_URL}/articles/${article.slug}`,
    image: article.heroImage,
    touristType: {
      '@type': 'Audience',
      audienceType: 'Famille avec enfants',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressRegion: article.region,
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

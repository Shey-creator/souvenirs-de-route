import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllArticleSlugs, getArticleBySlug, getRelatedArticles } from '@/lib/articles'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { fetchUnsplashImage, buildHeroQuery } from '@/lib/unsplash'
import HeroGradient from '@/components/HeroGradient'
import ArticleCard from '@/components/ArticleCard'
import ReadingProgress from '@/components/ReadingProgress'
import ShareButtons from '@/components/ShareButtons'
import SaveButton from '@/components/SaveButton'
import AffiliateBox from '@/components/AffiliateBox'
import DestinationChecklist from '@/components/mdx/DestinationChecklist'
import InfoBox from '@/components/mdx/InfoBox'
import Gallery from '@/components/mdx/Gallery'
import Checklist from '@/components/mdx/Checklist'
import MapEmbed from '@/components/mdx/MapEmbed'
import BudgetFamille from '@/components/mdx/BudgetFamille'
import FAQ from '@/components/mdx/FAQ'
import DestinationCard from '@/components/DestinationCard'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const mdxComponents = {
  InfoBox,
  Gallery,
  Checklist,
  MapEmbed,
  BudgetFamille,
  FAQ,
  DestinationCard,
  DestinationChecklist,
}

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://souvenirsderoute.com'

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: article.heroImage
        ? [{ url: article.heroImage, width: 1200, height: 630, alt: article.heroImageAlt }]
        : [],
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
    alternates: {
      canonical: `${SITE_URL}/articles/${article.slug}`,
    },
  }
}

const budgetLabel: Record<string, string> = { petit: 'E', moyen: 'EE', grand: 'EEE' }

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(params.slug, 3)
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://souvenirsderoute.com'
  const articleUrl = `${SITE_URL}/articles/${article.slug}`

  const heroImage = await fetchUnsplashImage(
    buildHeroQuery(article.ville, article.pays),
    'landscape',
    article.pays.toLowerCase() === 'france' ? 'france family travel' : 'europe family travel'
  )
  const heroSrc = heroImage.url

  const articleSchema = generateArticleSchema(article)
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Articles', url: '/destinations' },
    { name: article.ville, url: `/destinations/france/${article.ville.toLowerCase()}` },
    { name: article.title, url: `/articles/${article.slug}` },
  ])

  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* HERO IMAGE ou GRADIENT */}
      <div className="relative">
        {heroSrc ? (
          <div className="relative h-72 md:h-[480px] w-full">
            <Image
              src={heroSrc}
              alt={article.heroImageAlt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brun/70 via-brun/20 to-transparent" />
            <nav className="absolute top-6 left-0 right-0 px-4 sm:px-6 max-w-4xl mx-auto">
              <ol className="flex items-center gap-2 text-xs text-white/80">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li>/</li>
                <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
                <li>/</li>
                <li className="text-white truncate">{article.ville}</li>
              </ol>
            </nav>
            <div className="absolute bottom-8 left-4 sm:left-8 right-4">
              <div className="flex flex-wrap gap-2 mb-3 max-w-3xl">
                {article.categories.slice(0, 3).map((cat) => (
                  <span key={cat} className="tag-terracotta text-xs">{cat}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <HeroGradient
            ville={article.ville}
            region={article.region}
            height="h-72 md:h-[480px]"
          />
        )}
      </div>

      {/* ARTICLE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 relative">
        <div className="bg-creme rounded-3xl shadow-lg p-6 md:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-brun-muted mb-6 pb-6 border-b border-sable">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sable flex items-center justify-center text-xs font-bold text-brun">
                S
              </div>
              <span className="font-medium text-brun">{article.author.name}</span>
            </div>
            <span>
              Publié le {format(new Date(article.date), 'd MMMM yyyy', { locale: fr })}
            </span>
            {article.updatedAt !== article.date && (
              <span className="text-xs bg-sable px-2 py-1 rounded-full">
                Mis à jour le {format(new Date(article.updatedAt), 'd MMM yyyy', { locale: fr })}
              </span>
            )}
            <span>{article.tempsLecture} min de lecture</span>
            <div className="ml-auto">
              <SaveButton slug={article.slug} titre={article.title} ville={article.ville} />
            </div>
          </div>

          {/* Titre */}
          <h1 className="font-display text-3xl md:text-4xl text-brun font-bold leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-brun-muted text-lg mb-8">{article.description}</p>

          {/* Infos rapides */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 p-4 bg-sable rounded-2xl">
            {[
              { label: 'Destination', value: article.ville, emoji: '📍' },
              { label: 'Durée', value: article.duree, emoji: '📅' },
              { label: 'Budget', value: budgetLabel[article.budget], emoji: '💶' },
              { label: 'Ages', value: article.agesEnfants, emoji: '👶' },
            ].map((info) => (
              <div key={info.label} className="text-center">
                <span className="text-xl block mb-1" aria-hidden>{info.emoji}</span>
                <p className="font-bold text-brun text-sm">{info.value}</p>
                <p className="text-xs text-brun-muted">{info.label}</p>
              </div>
            ))}
          </div>

          {/* Contenu MDX */}
          <div className="prose-sophie">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>

          {/* Affilies */}
          <AffiliateBox ville={article.ville} type="both" />

          {/* Tags + Partage */}
          <div className="mt-10 pt-6 border-t border-sable space-y-4">
            <div>
              <p className="text-xs text-brun-muted uppercase tracking-wide mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </div>
            <ShareButtons url={articleUrl} title={article.title} />
          </div>
        </div>
      </div>

      {/* ARTICLES SIMILAIRES */}
      {related.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-display text-2xl font-bold text-brun mb-6">
            Ça pourrait aussi vous plaire
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} featured />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

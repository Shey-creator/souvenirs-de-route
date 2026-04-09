import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/types'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { fetchUnsplashImage, buildArticleHeroQuery } from '@/lib/unsplash'

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

const budgetLabel: Record<string, string> = {
  petit: '€',
  moyen: '€€',
  grand: '€€€',
}

export default async function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const image = await fetchUnsplashImage(
    buildArticleHeroQuery(article.slug, article.ville, article.pays),
    featured ? 'landscape' : 'squarish',
    article.pays.toLowerCase() === 'france' ? 'france family travel' : 'europe family travel'
  )

  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <article className="card overflow-hidden transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
          <div className="relative aspect-[16/9]">
            {image.url ? (
              <Image
                src={image.url}
                alt={article.heroImageAlt || image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ background: 'linear-gradient(135deg, #C9674A 0%, #F5E6D3 100%)' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display text-white text-2xl font-bold opacity-80">
                    {article.ville}
                  </span>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brun/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {article.categories.slice(0, 2).map((cat) => (
                  <span key={cat} className="tag-terracotta text-xs">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-5">
            <h2 className="font-display text-xl text-brun font-bold mb-2 group-hover:text-terracotta transition-colors line-clamp-2">
              {article.title}
            </h2>
            <p className="text-brun-muted text-sm line-clamp-2 mb-4">{article.description}</p>
            <div className="flex items-center justify-between text-xs text-brun-muted">
              <span>{format(new Date(article.date), 'd MMMM yyyy', { locale: fr })}</span>
              <div className="flex items-center gap-3">
                <span>{article.duree}</span>
                <span className="font-semibold text-sage">{budgetLabel[article.budget]}</span>
                <span>{article.tempsLecture} min</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="card flex gap-4 p-4">
        <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
          {image.url ? (
            <Image
              src={image.url}
              alt={article.heroImageAlt || image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="96px"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #C9674A 0%, #F5E6D3 100%)' }}
            >
              <span className="font-display text-white text-xs font-bold">{article.ville}</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1 mb-1">
            {article.categories.slice(0, 1).map((cat) => (
              <span key={cat} className="tag text-xs">
                {cat}
              </span>
            ))}
          </div>
          <h3 className="font-display text-sm font-bold text-brun group-hover:text-terracotta transition-colors line-clamp-2 mb-1">
            {article.title}
          </h3>
          <p className="text-xs text-brun-muted">
            {format(new Date(article.date), 'd MMM yyyy', { locale: fr })} · {article.tempsLecture} min
          </p>
        </div>
      </article>
    </Link>
  )
}

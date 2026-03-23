import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { Article, ArticleFrontmatter } from '@/types'

const CONTENT_DIR = path.join(process.cwd(), 'content/articles')

export function getAllArticleSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllArticles(): Article[] {
  const slugs = getAllArticleSlugs()
  const articles = slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[]

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    ...(data as ArticleFrontmatter),
    slug,
    content,
    tempsLecture: Math.ceil(stats.minutes),
  }
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) =>
    a.categories.some((c) => c.toLowerCase() === category.toLowerCase())
  )
}

export function getArticlesByVille(ville: string): Article[] {
  return getAllArticles().filter(
    (a) => a.ville.toLowerCase() === ville.toLowerCase()
  )
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const current = getArticleBySlug(currentSlug)
  if (!current) return []

  return getAllArticles()
    .filter((a) => a.slug !== currentSlug)
    .filter((a) =>
      a.categories.some((c) => current.categories.includes(c)) ||
      a.pays === current.pays
    )
    .slice(0, limit)
}

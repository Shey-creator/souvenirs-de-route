'use client'

import { useEffect, useRef } from 'react'

interface GiscusCommentsProps {
  slug: string
}

/**
 * Commentaires via Giscus (GitHub Discussions).
 * Configuration : https://giscus.app/fr
 * Variables à remplacer : GISCUS_REPO, GISCUS_REPO_ID, GISCUS_CATEGORY_ID
 *
 * Ajoutez dans .env.local :
 *   NEXT_PUBLIC_GISCUS_REPO=username/repo-name
 *   NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDO...
 *   NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO...
 */
export default function GiscusComments({ slug }: GiscusCommentsProps) {
  const ref = useRef<HTMLDivElement>(null)

  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO || ''
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ''

  useEffect(() => {
    if (!ref.current || !repo || !repoId || !categoryId) return

    // Nettoyer un éventuel ancien script
    const existing = ref.current.querySelector('iframe')
    if (existing) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', repo)
    script.setAttribute('data-repo-id', repoId)
    script.setAttribute('data-category', 'Commentaires')
    script.setAttribute('data-category-id', categoryId)
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', slug)
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'light')
    script.setAttribute('data-lang', 'fr')
    script.setAttribute('data-loading', 'lazy')
    script.crossOrigin = 'anonymous'
    script.async = true

    ref.current.appendChild(script)
  }, [slug, repo, repoId, categoryId])

  // Si les variables Giscus ne sont pas configurées, ne rien afficher
  if (!repo || !repoId || !categoryId) {
    return (
      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-center text-brun-muted text-sm">
          Les commentaires seront disponibles après configuration de Giscus.{' '}
          <a
            href="https://giscus.app/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            En savoir plus
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <h2 className="font-display text-xl font-bold text-brun mb-6">
        Commentaires
      </h2>
      <div ref={ref} />
    </div>
  )
}

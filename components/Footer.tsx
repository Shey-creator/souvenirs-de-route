import Link from 'next/link'

const franceDests = [
  { label: 'Nice', href: '/destinations/france/nice' },
  { label: 'Montpellier', href: '/destinations/france/montpellier' },
  { label: 'Marseille', href: '/destinations/france/marseille' },
  { label: 'Annecy', href: '/destinations/france/annecy' },
  { label: 'Saint-Malo', href: '/destinations/france/saint-malo' },
  { label: 'Paris', href: '/destinations/france/paris' },
  { label: 'Avignon', href: '/destinations/france/avignon' },
  { label: 'Carcassonne', href: '/destinations/france/carcassonne' },
]

const europeDests = [
  { label: 'Barcelone', href: '/destinations/europe/barcelone' },
  { label: 'Rome', href: '/destinations/europe/rome' },
  { label: 'Amsterdam', href: '/destinations/europe/amsterdam' },
  { label: 'Lisbonne', href: '/destinations/europe/lisbonne' },
  { label: 'Prague', href: '/destinations/europe/prague' },
  { label: 'Copenhague', href: '/destinations/europe/copenhague' },
]

const categories = [
  { label: 'Itinéraires famille', href: '/categories/itineraires' },
  { label: 'Week-ends', href: '/categories/week-end' },
  { label: 'Vacances scolaires', href: '/categories/vacances-scolaires' },
  { label: 'Budget malin', href: '/categories/budget' },
  { label: 'Pack your bag', href: '/categories/pack-your-bag' },
  { label: 'Articles à venir', href: '/a-venir' },
]

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/politique-de-confidentialite' },
  { label: 'Travailler avec nous', href: '/travailler-avec-nous' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brun text-sable mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl text-white font-bold block mb-3">
              Souvenirs de Route
            </Link>
            <p className="text-sable-dark text-sm leading-relaxed mb-4">
              Sophie, Lucas, Léa (8 ans) et Tom (5 ans). On part, on se perd parfois,
              on rigole souvent, et on rentre avec des étoiles plein les yeux.
            </p>
            <p className="text-sable-dark text-xs">
              Blog voyage famille depuis le Sud de la France
            </p>
          </div>

          {/* France */}
          <div>
            <h3 className="font-display text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              France
            </h3>
            <ul className="space-y-1.5">
              {franceDests.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="text-sable-dark text-sm hover:text-terracotta transition-colors"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Europe */}
          <div>
            <h3 className="font-display text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Europe
            </h3>
            <ul className="space-y-1.5">
              {europeDests.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="text-sable-dark text-sm hover:text-terracotta transition-colors"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories + Legal */}
          <div>
            <h3 className="font-display text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Catégories
            </h3>
            <ul className="space-y-1.5 mb-6">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sable-dark text-sm hover:text-terracotta transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sable-dark text-xs hover:text-terracotta transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-brun-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sable-dark text-xs">
            &copy; {new Date().getFullYear()} Souvenirs de Route. Fait avec amour depuis la France.
          </p>
          <div className="flex gap-4">
            <Link href="/destinations-sauvegardees" className="text-sable-dark text-xs hover:text-terracotta transition-colors">
              Mes destinations
            </Link>
            <Link href="/sitemap.xml" className="text-sable-dark text-xs hover:text-terracotta transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

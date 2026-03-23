import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { fetchFamilyPhoto, fetchSophiePhoto } from '@/lib/unsplash'

export const metadata: Metadata = {
  title: 'À propos : Sophie, Lucas, Léa et Tom',
  description:
    'Qui sommes-nous ? Sophie (38 ans), Lucas, Léa (8 ans) et Tom (5 ans) : une famille du Sud de la France qui voyage avec des enfants depuis 2019. Notre histoire, nos valeurs, pourquoi ce blog.',
}

function SophieAvatar() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="40" cy="40" r="40" fill="#FF6B35" />
      {/* Cheveux longs */}
      <ellipse cx="40" cy="29" rx="14" ry="17" fill="#5C3A1E" />
      {/* Tête */}
      <circle cx="40" cy="28" r="11" fill="#FDDDD0" />
      {/* Mèche sur le front */}
      <path d="M30 22 Q30 14 40 13 Q50 14 50 22" fill="#5C3A1E" />
      {/* Cou */}
      <rect x="37" y="37" width="6" height="5" rx="2" fill="#FDDDD0" />
      {/* Corps */}
      <path d="M22 80 Q22 55 40 52 Q58 55 58 80Z" fill="#FFE8D6" />
    </svg>
  )
}

function LucasAvatar() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="40" cy="40" r="40" fill="#4ECDC4" />
      {/* Tête */}
      <circle cx="40" cy="28" r="11" fill="#FDDDD0" />
      {/* Cheveux courts */}
      <path d="M29 24 Q29 14 40 13 Q51 14 51 24 Q51 19 49 18 Q40 16 31 18 Q29 19 29 24Z" fill="#4A3728" />
      {/* Cou */}
      <rect x="37" y="37" width="6" height="5" rx="2" fill="#FDDDD0" />
      {/* Corps */}
      <path d="M20 80 Q20 55 40 52 Q60 55 60 80Z" fill="#E8F9F8" />
    </svg>
  )
}

export default async function AProposPage() {
  const [heroFamilleImage, sophieImage] = await Promise.all([
    fetchFamilyPhoto(),
    fetchSophiePhoto(),
  ])

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'À propos', url: '/a-propos' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-sable py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="tag-terracotta mb-4 inline-block">Qui sommes-nous ?</span>
          <h1 className="font-display text-4xl md:text-5xl text-brun font-bold mb-4">
            2 adultes, 2 enfants,<br />
            <span className="text-terracotta">1 envie d&apos;ailleurs</span>
          </h1>
          <p className="text-brun-muted text-lg leading-relaxed max-w-2xl mx-auto">
            On n&apos;est pas des globe-trotters professionnels. On est juste une famille ordinaire
            qui a décidé que les voyages avec enfants, c&apos;est possible, et même formidable.
          </p>
        </div>
      </section>

      {/* Photo famille */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              {heroFamilleImage.url ? (
                <Image
                  src={heroFamilleImage.url}
                  alt={heroFamilleImage.alt || 'Sophie, Lucas et leurs enfants en voyage'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              ) : (
                <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #C9674A 0%, #F5E6D3 100%)' }} />
              )}
            </div>
            <p className="text-center text-sm italic text-gray-400 mt-3">
              Sophie, Lucas et leurs deux petits aventuriers
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-brun mb-5">
              Bonjour, moi c&apos;est Sophie !
            </h2>
            <div className="space-y-4 text-brun-muted leading-relaxed">
              <p>
                J&apos;ai 38 ans et je vis dans le Sud de la France avec mon mari Lucas
                et nos deux enfants Léa et Tom.
              </p>
              <p>
                Avant d&apos;être maman, j&apos;ai voyagé dans plus de 40 pays.
                L&apos;Asie du Sud-Est en sac à dos, les États-Unis en road trip,
                l&apos;Amérique du Sud en solo. J&apos;ai dormi dans des auberges de jeunesse,
                raté des bus, mangé des choses non identifiées et adoré chaque minute.
              </p>
              <p>
                Puis Léa est arrivée. Puis Tom. Et on a réinventé notre façon de voyager.
                Plus de sac à dos de 15 kg. Plus de vols de nuit au dernier moment.
                Mais toujours la même envie d&apos;ailleurs, la même curiosité,
                le même bonheur quand on découvre quelque chose ensemble.
              </p>
              <p>
                Ce blog c&apos;est ça : des voyages vrais, testés avec deux enfants,
                racontés honnêtement. Le bon, le compliqué et l&apos;inoubliable.
              </p>
              <p className="text-sm text-brun-muted">
                Pour me contacter :{' '}
                <a href="mailto:hello@souvenirsderoute.com" className="text-terracotta hover:underline">
                  hello@souvenirsderoute.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Sophie seule */}
      <section className="bg-sable py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-3xl font-bold text-brun mb-5">
                Pourquoi ce blog ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    emoji: '🙅‍♀️',
                    title: 'Pas de perfection',
                    text: "Les itinéraires impossibles à rater qui oublient que les enfants ont besoin de sieste, les hôtels parfaits aux avis douteux... J'en avais assez. Ici, je raconte ce que j'ai vraiment vécu.",
                  },
                  {
                    emoji: '📍',
                    title: 'Des vraies adresses',
                    text: "Chaque adresse sur ce blog a été testée avec nos enfants. Je précise ce qui est adapté aux moins de 6 ans, ce qui convient mieux aux 8-12 ans, et ce qui a fait briller les yeux des deux.",
                  },
                  {
                    emoji: '💶',
                    title: 'Le vrai budget',
                    text: "On voyage avec un budget familial réaliste. Je détaille les coûts réels (hébergement, repas, activités) pour que vous puissiez planifier sans mauvaise surprise.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <div>
                      <h3 className="font-display font-bold text-brun text-base mb-1">{item.title}</h3>
                      <p className="text-brun-muted text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                {sophieImage.url ? (
                  <Image
                    src={sophieImage.url}
                    alt={sophieImage.alt || 'Sophie en voyage, explorant une ville européenne'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FFE66D 100%)' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe : Sophie et Lucas uniquement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-display text-3xl font-bold text-brun text-center mb-10">
          L&apos;équipe
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Sophie */}
          <div className="card p-5 flex gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <SophieAvatar />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display font-bold text-brun">Sophie</span>
                <span className="text-brun-muted text-xs">• 38 ans</span>
              </div>
              <p className="text-terracotta text-xs font-medium mb-2">L&apos;organisatrice</p>
              <p className="text-brun-muted text-sm leading-relaxed">
                Chef de projet le jour, chef de voyage le week-end. Je passe des heures à chercher
                l&apos;hébergement parfait, et je suis toujours la première à proposer une nouvelle destination.
                C&apos;est moi qui écris le blog.
              </p>
            </div>
          </div>

          {/* Lucas */}
          <div className="card p-5 flex gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <LucasAvatar />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display font-bold text-brun">Lucas</span>
                <span className="text-brun-muted text-xs">• 40 ans</span>
              </div>
              <p className="text-terracotta text-xs font-medium mb-2">Le logisticien</p>
              <p className="text-brun-muted text-sm leading-relaxed">
                Il trouve toujours le chemin, même sans réseau. Il porte tous les sacs, commande en espagnol
                avec un accent marseillais et est capable d&apos;improviser un pique-nique 5 étoiles
                depuis un supermarché de bord de route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-sable py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
            <span className="text-3xl mb-4 block">✉️</span>
            <h2 className="font-display text-2xl font-bold text-brun mb-3">
              On se retrouve par ici ?
            </h2>
            <p className="text-brun-muted leading-relaxed mb-6">
              Une question, une collaboration, un bonjour ?<br />
              Écris-nous sur{' '}
              <a
                href="mailto:hello@souvenirsderoute.com"
                className="text-terracotta font-medium hover:underline"
              >
                hello@souvenirsderoute.com
              </a>
              <br />
              On répond toujours, souvent avec une recommandation de destination en bonus.
            </p>
            <a
              href="mailto:hello@souvenirsderoute.com"
              className="btn-primary inline-block"
            >
              Écrire à Sophie et Lucas
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

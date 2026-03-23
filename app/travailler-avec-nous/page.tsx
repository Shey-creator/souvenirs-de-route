import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travailler avec nous | Souvenirs de Route',
  description: 'Partenariats et collaborations avec le blog voyage famille Souvenirs de Route. Offices du tourisme, marques voyage, hébergements.',
}

export default function TravaillerAvecNousPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">

      <div className="text-center mb-14">
        <span className="tag-terracotta mb-4 inline-block">Partenariats</span>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-brun mb-4">
          Travailler avec nous
        </h1>
        <p className="text-brun-muted text-lg max-w-2xl mx-auto">
          Souvenirs de Route est un blog voyage famille lu par des parents qui planifient
          activement leurs voyages. Si tu veux toucher une audience qualifiée et engagée,
          on en parle.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { value: '12+', label: 'destinations couvertes' },
          { value: '40+', label: 'articles publiés' },
          { value: '100%', label: 'contenu famille' },
          { value: '3-12', label: 'ans, âge des enfants ciblés' },
        ].map((stat) => (
          <div key={stat.label} className="bg-sable rounded-2xl p-5 text-center">
            <p className="font-display text-2xl font-bold text-terracotta">{stat.value}</p>
            <p className="text-xs text-brun-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Audience */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-bold text-brun mb-6">Notre audience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-sable-dark rounded-2xl p-6">
            <h3 className="font-bold text-brun mb-3">Profil des lectrices</h3>
            <ul className="space-y-2 text-brun-muted text-sm">
              <li>Mamans de 28 à 45 ans, principalement</li>
              <li>Enfants entre 3 et 12 ans</li>
              <li>Basées principalement en France</li>
              <li>Planifient 2 à 4 voyages par an</li>
              <li>Budget voyage familial de 1 000 à 4 000 euros</li>
            </ul>
          </div>
          <div className="bg-white border border-sable-dark rounded-2xl p-6">
            <h3 className="font-bold text-brun mb-3">Thématiques du blog</h3>
            <ul className="space-y-2 text-brun-muted text-sm">
              <li>Itinéraires testés en famille</li>
              <li>Week-ends en France</li>
              <li>Capitales européennes avec enfants</li>
              <li>Conseils pratiques et listes de valises</li>
              <li>Bonnes adresses restaurants et hébergements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Types de partenariats */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-bold text-brun mb-6">
          Types de partenariats
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              emoji: '✍️',
              titre: 'Article sponsorisé',
              desc: 'Un article dédié à ta destination, ton hébergement ou ton service, rédigé dans le style authentique du blog, avec liens suivis.',
            },
            {
              emoji: '🧳',
              titre: 'Test de produit',
              desc: 'Valise, poussette, accessoire voyage, appli... On teste avec les enfants et on rend compte honnêtement.',
            },
            {
              emoji: '🗺️',
              titre: 'Office du tourisme',
              desc: 'Visite presse en famille, guide de destination, mise en avant dans notre section destinations France ou Europe.',
            },
          ].map((item) => (
            <div key={item.titre} className="bg-sable rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-display font-bold text-brun mb-2">{item.titre}</h3>
              <p className="text-brun-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagements éditoriaux */}
      <section className="bg-brun rounded-3xl p-8 mb-14 text-white">
        <h2 className="font-display text-2xl font-bold mb-4">Nos engagements éditoriaux</h2>
        <ul className="space-y-2 text-sable">
          <li>Tout contenu sponsorisé est clairement identifié</li>
          <li>On ne recommande que ce qu&apos;on a testé ou soigneusement sélectionné</li>
          <li>Notre ton reste authentique, comme les autres articles</li>
          <li>On refuse les partenariats incompatibles avec nos valeurs famille</li>
        </ul>
      </section>

      {/* Formulaire de contact */}
      <section>
        <h2 className="font-display text-2xl font-bold text-brun mb-6">
          Nous contacter
        </h2>
        <p className="text-brun-muted mb-6">
          Pour toute demande de partenariat, écris-nous directement par e-mail.
          Nous répondons dans les 48 heures ouvrées.
        </p>
        <a
          href="mailto:partenariats@souvenirsderoute.com"
          className="btn-primary inline-flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          partenariats@souvenirsderoute.com
        </a>
      </section>
    </div>
  )
}

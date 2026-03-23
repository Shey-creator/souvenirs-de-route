import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales | Souvenirs de Route',
  description: 'Mentions légales du blog Souvenirs de Route, blog voyage famille.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-3xl md:text-4xl text-brun font-bold mb-8">
        Mentions légales
      </h1>

      <div className="prose prose-lg max-w-none space-y-8 text-brun-muted">

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Éditeur du site
          </h2>
          <p>
            Le site <strong>Souvenirs de Route</strong> (souvenirsderoute.com) est un blog
            personnel édité à titre non professionnel par Sophie Moreau, résidant dans le
            département de l&apos;Hérault (34), France.
          </p>
          <p className="mt-2">
            Contact : <a href="mailto:contact@souvenirsderoute.com" className="text-terracotta hover:underline">contact@souvenirsderoute.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701,
            San Francisco, California 94104, États-Unis.
          </p>
          <p className="mt-2">Site : vercel.com</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, photographies, illustrations, logos)
            est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est
            interdite sans autorisation préalable de l&apos;éditrice.
          </p>
          <p className="mt-2">
            Les photographies provenant d&apos;Unsplash sont soumises à la licence Unsplash.
            Chaque photo est créditée à son auteur.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Liens affiliés
          </h2>
          <p>
            Certains liens présents sur ce blog sont des liens affiliés (Booking.com, Viator,
            GetYourGuide). Si vous réservez via ces liens, nous percevons une petite commission,
            sans aucun surcoût pour vous. Nous ne recommandons que des services que nous avons
            testés ou soigneusement sélectionnés.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Limitation de responsabilité
          </h2>
          <p>
            Les informations publiées sur ce blog sont données à titre indicatif. Les prix,
            horaires et disponibilités peuvent évoluer. L&apos;éditrice décline toute
            responsabilité quant à l&apos;exactitude des informations au moment de votre lecture.
          </p>
          <p className="mt-2">
            Nous vous encourageons à vérifier les informations directement auprès des prestataires
            avant toute réservation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Droit applicable
          </h2>
          <p>
            Ce site est soumis au droit français. Tout litige relatif à son utilisation sera
            soumis aux tribunaux compétents français.
          </p>
        </section>

        <p className="text-sm text-brun-muted/70 mt-12">
          Mentions légales mises à jour en mars 2025.
        </p>
      </div>
    </div>
  )
}

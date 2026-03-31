import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Souvenirs de Route',
  description: 'Politique de confidentialité et gestion des données personnelles du blog Souvenirs de Route.',
  robots: { index: false, follow: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-3xl md:text-4xl text-brun font-bold mb-8">
        Politique de confidentialité
      </h1>

      <div className="prose prose-lg max-w-none space-y-8 text-brun-muted">

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Responsable du traitement
          </h2>
          <p>
            Sophie Moreau, éditrice du blog Souvenirs de Route (souvenirsderoute.com).
            Contact : <a href="mailto:contact@souvenirsderoute.com" className="text-terracotta hover:underline">contact@souvenirsderoute.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Données collectées
          </h2>

          <h3 className="font-bold text-brun mb-2">Newsletter</h3>
          <p>
            Si vous vous inscrivez à notre newsletter, nous collectons votre adresse e-mail.
            Ces données sont transmises à Brevo (anciennement Sendinblue), notre prestataire
            d&apos;envoi de newsletters, basé en France.
          </p>
          <p className="mt-2">
            Vous pouvez vous désabonner à tout moment via le lien présent dans chaque e-mail.
          </p>

          <h3 className="font-bold text-brun mb-2 mt-4">Statistiques de visite</h3>
          <p>
            Nous utilisons Plausible Analytics, un outil de mesure d&apos;audience respectueux
            de la vie privée, sans cookies et sans collecte de données personnelles identifiables.
            Plausible est conforme au RGPD par conception.
          </p>

          <h3 className="font-bold text-brun mb-2 mt-4">Favoris</h3>
          <p>
            La fonctionnalité &laquo;Mes destinations sauvegardées&raquo; utilise uniquement le
            localStorage de votre navigateur. Aucune donnée n&apos;est transmise à nos serveurs.
          </p>

          <h3 className="font-bold text-brun mb-2 mt-4">Commentaires</h3>
          <p>
            Les commentaires sont gérés via Giscus, basé sur GitHub Discussions. Les données
            sont soumises à la politique de confidentialité de GitHub (Microsoft).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Cookies
          </h2>
          <p>
            Ce site utilise un nombre minimal de cookies :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Cookies de préférences (thème, consentement cookies) : nécessaires au fonctionnement</li>
            <li>Aucun cookie publicitaire ni de traçage</li>
            <li>Plausible Analytics fonctionne sans cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Vos droits (RGPD)
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (&laquo;droit à l&apos;oubli&raquo;)</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité de vos données</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous par e-mail :
            <a href="mailto:contact@souvenirsderoute.com" className="text-terracotta hover:underline ml-1">contact@souvenirsderoute.com</a>
          </p>
          <p className="mt-2">
            Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL :
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline ml-1">www.cnil.fr</a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Liens externes
          </h2>
          <p>
            Ce blog contient des liens vers des sites tiers (Booking.com, Viator, GetYourGuide,
            etc.). Nous ne sommes pas responsables de leurs pratiques en matière de
            confidentialité. Consultez leurs politiques respectives.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brun mb-3">
            Modifications
          </h2>
          <p>
            Cette politique de confidentialité peut être mise à jour. La date de dernière
            modification est indiquée ci-dessous.
          </p>
        </section>

        <p className="text-sm text-brun-muted/70 mt-12">
          Politique de confidentialité mise à jour en mars 2025.
        </p>
      </div>
    </div>
  )
}

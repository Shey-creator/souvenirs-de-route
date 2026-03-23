import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact : écrire à Sophie',
  description:
    'Une question, un partenariat, une destination à nous suggérer ? Écrivez-nous, on répond à tous les messages.',
}

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10">
        <span className="text-4xl mb-4 block">💌</span>
        <h1 className="font-display text-4xl font-bold text-brun mb-3">
          Écrire à Sophie
        </h1>
        <p className="text-brun-muted">
          Une question sur un voyage ? Une destination à nous recommander ?
          Un partenariat ? Je lis et réponds à tous les messages.
        </p>
      </div>

      <form className="bg-white rounded-2xl shadow-sm p-8 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-brun mb-1.5" htmlFor="nom">
              Votre prénom *
            </label>
            <input
              id="nom"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-sable-dark bg-creme text-brun placeholder-brun-muted focus:outline-none focus:ring-2 focus:ring-terracotta"
              placeholder="Marie"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brun mb-1.5" htmlFor="email">
              Votre email *
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-sable-dark bg-creme text-brun placeholder-brun-muted focus:outline-none focus:ring-2 focus:ring-terracotta"
              placeholder="marie@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brun mb-1.5" htmlFor="sujet">
            Sujet
          </label>
          <select
            id="sujet"
            className="w-full px-4 py-3 rounded-xl border border-sable-dark bg-creme text-brun focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <option value="">Choisir un sujet</option>
            <option value="conseil">Demande de conseil voyage</option>
            <option value="destination">Suggestion de destination</option>
            <option value="partenariat">Partenariat / collaboration</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-brun mb-1.5" htmlFor="message">
            Votre message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-sable-dark bg-creme text-brun placeholder-brun-muted focus:outline-none focus:ring-2 focus:ring-terracotta resize-none"
            placeholder="Bonjour Sophie, je voyage avec mes enfants de 4 et 7 ans..."
          />
        </div>

        <button type="submit" className="btn-primary w-full justify-center">
          Envoyer le message
        </button>

        <p className="text-xs text-center text-brun-muted">
          En soumettant ce formulaire, vous acceptez que vos données soient utilisées
          pour vous répondre. Aucune utilisation commerciale.
        </p>
      </form>
    </section>
  )
}

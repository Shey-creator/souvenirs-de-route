import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import NewsletterPopup from '@/components/NewsletterPopup'
import Script from 'next/script'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://souvenirsderoute.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Souvenirs de Route, blog voyage en famille',
    template: '%s | Souvenirs de Route',
  },
  description:
    "Des itin\u00e9raires test\u00e9s, des adresses honn\u00eates, des conseils qui marchent vraiment. Le blog voyage en famille.",
  keywords: ['voyage en famille', 'blog voyage famille', 'vacances enfants', 'france famille', 'itinéraire famille'],
  authors: [{ name: 'Sophie', url: `${SITE_URL}/a-propos` }],
  creator: 'Sophie, Souvenirs de Route',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Souvenirs de Route',
    title: 'Souvenirs de Route, blog voyage en famille',
    description: "Des itin\u00e9raires test\u00e9s, des adresses honn\u00eates, des conseils qui marchent vraiment.",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630, alt: 'Souvenirs de Route' }],
  },
  twitter: { card: 'summary_large_image', title: 'Souvenirs de Route', description: "Des itin\u00e9raires test\u00e9s, des adresses honn\u00eates, des conseils qui marchent vraiment." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: SITE_URL },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {plausibleDomain && (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        )}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-white text-texte font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <NewsletterPopup />
      </body>
    </html>
  )
}

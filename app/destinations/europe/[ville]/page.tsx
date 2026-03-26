import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import HeroGradient from '@/components/HeroGradient'
import { getUnsplashPhoto, buildHeroQuery } from '@/lib/unsplash'
import { CITIES_DATA } from '@/lib/destinations-data'
import DestinationSections from '@/components/DestinationSections'
import Image from 'next/image'
import type { Metadata } from 'next'

interface PageProps {
  params: { ville: string }
}

const europeVilles: Record<string, { nom: string; pays: string; description: string; teaser: string }> = {
  barcelone: { nom: 'Barcelone', pays: 'Espagne', description: 'Sagrada Familia, Parc Güell, plage.', teaser: 'La Sagrada Familia, le Parc Güell, la Barceloneta, les tapas : notre première grande aventure hors de France, et la préférée de Léa.' },
  rome: { nom: 'Rome', pays: 'Italie', description: 'Colisée, fontaine de Trevi, pizzas.', teaser: 'Le Colisée, la fontaine de Trevi, la Villa Borghese, les gelati et les pizzas : Rome avec des enfants est une magie particulière, à condition de bien préparer.' },
  londres: { nom: 'Londres', pays: 'Royaume-Uni', description: 'Natural History Museum, Tower Bridge.', teaser: 'Le Natural History Museum (entrée gratuite !), la Tour de Londres, Tower Bridge, Big Ben et les parcs magnifiques : 4 jours inoubliables avec Léa et Tom.' },
  amsterdam: { nom: 'Amsterdam', pays: 'Pays-Bas', description: 'Canaux, vélos et Rijksmuseum.', teaser: 'Les canaux en bateau, le Rijksmuseum, le Zoo Artis, les vélos : Amsterdam est une destination famille d\'exception, compacte et facile à visiter.' },
  berlin: { nom: 'Berlin', pays: 'Allemagne', description: 'Zoo, histoire et street art.', teaser: 'Le Zoo de Berlin (le plus grand d\'Europe !), l\'Île aux Musées, le DDR Museum, les currywurst de rue : Berlin est une destination surprenante et accessible.' },
  prague: { nom: 'Prague', pays: 'République Tchèque', description: 'Château, marionnettes et tramways.', teaser: 'Le château de Prague, le Quartier Juif, les marionnettes au théâtre, les tramways rétro : Prague est un conte de fées pour les enfants.' },
  lisbonne: { nom: 'Lisbonne', pays: 'Portugal', description: 'Trams iconiques, pasteis et Tage.', teaser: 'Les trams 28 dans les ruelles, les pasteis de nata, le belvédère de l\'Alfama, le Tage : Lisbonne en famille est une ville qui se laisse apprivoiser facilement.' },
  vienne: { nom: 'Vienne', pays: 'Autriche', description: 'Schönbrunn, musées et cafés.', teaser: 'Le château de Schönbrunn et son zoo, le Prater avec la grande roue, les Wiener Schnitzel : Vienne est une capitale élégante qui surprend les familles.' },
  budapest: { nom: 'Budapest', pays: 'Hongrie', description: 'Thermes, château et Danube.', teaser: 'Le château de Buda, le Parlement illuminé, les thermes Szechenyi (les enfants adorent !), les ruin bars : Budapest est une ville fascinante et abordable.' },
  bruges: { nom: 'Bruges', pays: 'Belgique', description: 'Canaux, chocolat et beffroi.', teaser: 'Les canaux en barque, le beffroi, les chocolatiers à chaque coin de rue, les gaufres : Bruges est une destination familiale parfaite pour un week-end prolongé.' },
  seville: { nom: 'Séville', pays: 'Espagne', description: 'Alcázar, flamenco et tapas.', teaser: 'L\'Alcázar de Séville (Game of Thrones !), la cathédrale, le quartier de Triana, le flamenco : Séville est une ville solaire et vivante, adorable en famille.' },
  valence: { nom: 'Valence', pays: 'Espagne', description: 'Cité des Arts, plages et paella.', teaser: 'La Cité des Arts et des Sciences (spectaculaire !), les plages de la Malvarrosa, la vraie paella valencienne : Valence est la destination espagnole la moins touristique.' },
  porto: { nom: 'Porto', pays: 'Portugal', description: 'Azulejos, pont Dom-Luís et vins.', teaser: 'Les azulejos bleus partout, le pont Dom-Luís, les librairies Livraria Lello, la ribeira sur le Douro : Porto est une ville attachante et moins touristique que Lisbonne.' },
  edimbourg: { nom: 'Édimbourg', pays: 'Écosse', description: 'Château, Highlands et Harry Potter.', teaser: 'Le château d\'Édimbourg, le quartier de Diagon Alley (pour les fans de Harry Potter !), les Highlands à portée : Édimbourg enchante les familles à tout coup.' },
  copenhague: { nom: 'Copenhague', pays: 'Danemark', description: 'Tivoli, sirène et design.', teaser: 'Tivoli (le plus vieux parc d\'attractions du monde !), la Petite Sirène, les canaux de Nyhavn, le design danois partout : Copenhague est une ville famille de rêve.' },
  ljubljana: { nom: 'Ljubljana', pays: 'Slovénie', description: 'Château, rivière Ljubljanica et ambiance zen.', teaser: 'La capitale la plus verte d\'Europe : le château sur sa colline, le centre piéton, les marchés au bord de la Ljubljanica et une atmosphère détendue idéale pour les enfants.' },
  tallinn: { nom: 'Tallinn', pays: 'Estonie', description: 'Vieille ville médiévale, remparts et tours.', teaser: 'La vieille ville médiévale la mieux préservée de la Baltique, ses remparts à parcourir, ses tours rondes, ses marchands d\'ambre : Tallinn est un voyage dans le temps fascinant.' },
  dubrovnik: { nom: 'Dubrovnik', pays: 'Croatie', description: 'Remparts, Adriatique et Game of Thrones.', teaser: 'Les remparts sur la mer Adriatique (les plus beaux du monde ?), les calanques croates en bateau, les décors de Game of Thrones : Dubrovnik est à couper le souffle.' },
  malte: { nom: 'Malte', pays: 'Malte', description: 'Plages, temples préhistoriques et baies turquoise.', teaser: 'Les eaux turquoise de la Baie Bleue, les temples mégalithiques (les plus anciens du monde !), les barques colorées de Marsaxlokk : Malte est une découverte totale pour les familles.' },
  reykjavik: { nom: 'Reykjavik', pays: 'Islande', description: 'Aurores boréales, geysers et pingouins.', teaser: 'Les aurores boréales en hiver, le Geyser Strokkur, les baleines en bateau, les pingouins macareux : Reykjavik est la destination la plus spectaculaire qu\'on ait jamais visitée avec les enfants.' },
}

export async function generateStaticParams() {
  return Object.keys(europeVilles).map((ville) => ({ ville }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const v = europeVilles[params.ville]
  const nom = v?.nom || params.ville
  return {
    title: `${nom} en famille : notre guide complet`,
    description: v?.teaser?.slice(0, 160) || `Nos conseils pour visiter ${nom} avec des enfants.`,
  }
}

export default async function EuropeVillePage({ params }: PageProps) {
  const villeData = europeVilles[params.ville]
  const nom = villeData?.nom || params.ville.charAt(0).toUpperCase() + params.ville.slice(1)
  const pays = villeData?.pays || 'Europe'

  const articles = getAllArticles().filter(
    (a) => a.ville.toLowerCase() === nom.toLowerCase()
  )

  const photoUrl = await getUnsplashPhoto(
    buildHeroQuery(params.ville, pays),
    'europe city travel'
  )

  return (
    <>
      {photoUrl ? (
        <div className="relative h-64 md:h-80 w-full">
          <Image src={photoUrl} alt={`${nom}, ${pays}`} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-texte/60 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 px-4 sm:px-6 max-w-6xl mx-auto">
            <p className="text-white/70 text-sm mb-1">
              <a href="/" className="hover:text-white">Accueil</a> / <a href="/destinations" className="hover:text-white">Destinations</a> / Europe
            </p>
            <h1 className="font-display text-4xl font-bold text-white">{nom} en famille</h1>
            <p className="text-white/80 text-sm mt-1">{pays}</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <HeroGradient ville={nom} region={pays} pays={pays} height="h-64 md:h-80" />
          <div className="absolute top-6 left-0 right-0 px-4 sm:px-6 max-w-6xl mx-auto">
            <p className="text-white/70 text-sm">
              <a href="/">Accueil</a> / <a href="/destinations">Destinations</a> / Europe
            </p>
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {villeData?.teaser && (
          <p className="text-brun-muted text-lg mb-10 max-w-2xl">{villeData.teaser}</p>
        )}

        {CITIES_DATA[params.ville] && (
          <div className="mb-14">
            <DestinationSections data={CITIES_DATA[params.ville]} ville={nom} />
          </div>
        )}

        {articles.length > 0 && (
          <h2 className="font-display text-2xl font-bold text-brun mb-6">
            Nos articles sur {nom}
          </h2>
        )}

        {articles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => <ArticleCard key={article.slug} article={article} featured />)}
          </div>
        ) : (
          <div className="text-center py-16 bg-fond-alt rounded-2xl">
            <p className="text-4xl mb-4">✍️</p>
            <p className="font-display text-xl text-texte">Article sur {nom} bientôt disponible !</p>
          </div>
        )}
      </section>
    </>
  )
}

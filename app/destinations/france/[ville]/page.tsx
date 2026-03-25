import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import HeroGradient from '@/components/HeroGradient'
import { getUnsplashPhoto } from '@/lib/unsplash'
import Image from 'next/image'
import type { Metadata } from 'next'

interface PageProps {
  params: { ville: string }
}

// Requetes Unsplash geo-specifiques par ville
const CITY_PHOTO_QUERIES: Record<string, string> = {
  nice:                  'Nice France promenade cote azur',
  paris:                 'Paris France Eiffel Tower',
  lyon:                  'Lyon France Vieux-Lyon',
  marseille:             'Marseille France vieux port',
  bordeaux:              'Bordeaux France place bourse',
  strasbourg:            'Strasbourg France cathedrale',
  avignon:               'Avignon France palais des papes',
  montpellier:           'Montpellier France place comedie',
  carcassonne:           'Carcassonne France chateau medieval',
  annecy:                'Annecy France lac',
  biarritz:              'Biarritz France plage',
  cannes:                'Cannes France promenade',
  antibes:               'Antibes France',
  menton:                'Menton France',
  nimes:                 'Nimes France arenes',
  arles:                 'Arles France',
  gordes:                'Gordes Provence village',
  colmar:                'Colmar Alsace maisons colorees',
  'saint-malo':          'Saint-Malo France remparts mer',
  'mont-saint-michel':   'Mont Saint Michel France',
  chamonix:              'Chamonix Alpes France',
  dijon:                 'Dijon France',
  sete:                  'Sete France canal',
  'les-baux-de-provence': 'Les Baux de Provence',
  'aix-en-provence':     'Aix-en-Provence France',
  nantes:                'Nantes France machines ile',
}

const villes: Record<string, { nom: string; region: string; pays: string; description: string; teaser: string }> = {
  // Sud et Méditerranée
  nice: { nom: 'Nice', region: "Côte d'Azur", pays: 'France', description: 'Promenade des Anglais, Vieux-Nice, colline du Château.', teaser: 'La Promenade des Anglais, le marché du Cours Saleya, la plage (de galets !), la colline du Château avec les enfants : Nice est une destination famille irrésistible.' },
  cannes: { nom: 'Cannes', region: "Côte d'Azur", pays: 'France', description: 'Îles de Lérins, plages, Marché Forville.', teaser: 'Au-delà du tapis rouge, Cannes réserve de belles surprises : les îles de Lérins en bateau, le Marché Forville, les plages plus calmes hors saison.' },
  antibes: { nom: 'Antibes', region: "Côte d'Azur", pays: 'France', description: 'Fort Carré, vieille ville et Marineland.', teaser: 'Le Fort Carré, les remparts, Marineland avec les enfants, et des plages magnifiques : Antibes est souvent plus accessible que Cannes en été.' },
  menton: { nom: 'Menton', region: "Côte d'Azur", pays: 'France', description: 'Jardins, citrons et frontière italienne.', teaser: "La ville aux jardins extraordinaires, au citron légendaire, à deux pas de Monaco et de l'Italie : Menton est une pépite calme pour les familles." },
  marseille: { nom: 'Marseille', region: 'Provence-Alpes-Côte d\'Azur', pays: 'France', description: 'Calanques, MuCEM et Vieux-Port.', teaser: 'La Bonne Mère, les calanques, le MuCEM, le Vieux-Port et des bouillabaisse mémorables : Marseille surprend toujours les familles qui la découvrent.' },
  'aix-en-provence': { nom: 'Aix-en-Provence', region: 'Provence-Alpes-Côte d\'Azur', pays: 'France', description: 'Marchés, Cézanne et fontaines.', teaser: 'Les marchés colorés, le quartier Mazarin, le circuit Cézanne et les fontaines partout dans la ville : Aix-en-Provence est une ville de plaisir en famille.' },
  montpellier: { nom: 'Montpellier', region: 'Occitanie', pays: 'France', description: 'Place de la Comédie, plages à 25 min.', teaser: 'La place de la Comédie, le Jardin des Plantes, Palavas-les-Flots en tramway, le Musée Fabre : Montpellier en famille est une vraie réussite.' },
  sete: { nom: 'Sète', region: 'Occitanie', pays: 'France', description: 'Canal Royal, plages, fruits de mer.', teaser: "La Venise du Languedoc : le Canal Royal, les joutes nautiques, les plages de sable et les fruits de mer au bord de l'eau. Sète est une destination famille attachante." },
  nimes: { nom: 'Nîmes', region: 'Occitanie', pays: 'France', description: 'Arènes romaines, Maison Carrée, Pont du Gard.', teaser: "Les Arènes (les mieux conservées du monde romain !), la Maison Carrée, et à 25 km le Pont du Gard : Nîmes pour les enfants, c'est de l'histoire vivante." },
  avignon: { nom: 'Avignon', region: 'Provence-Alpes-Côte d\'Azur', pays: 'France', description: 'Palais des Papes et Pont d\'Avignon.', teaser: "Le Palais des Papes, le Pont Saint-Bénézet, les remparts et les Alpilles à portée : Avignon en famille, c'est de l'histoire accessible à tous les âges." },
  'les-baux-de-provence': { nom: 'Les Baux-de-Provence', region: 'Provence', pays: 'France', description: 'Village perché et Carrières de Lumières.', teaser: "L'un des plus beaux villages de France perché sur son éperon rocheux, et les Carrières de Lumières juste en bas : une journée magique en famille." },
  gordes: { nom: 'Gordes', region: 'Provence', pays: 'France', description: "L'un des plus beaux villages de France.", teaser: "Gordes, son château, ses ruelles en pierres, l'abbaye de Sénanque à côté avec ses champs de lavande : la Provence de carte postale, avec les enfants." },
  arles: { nom: 'Arles', region: 'Provence-Alpes-Côte d\'Azur', pays: 'France', description: 'Arènes romaines, Van Gogh, Camargue.', teaser: 'Les Arènes romaines, les traces de Van Gogh partout dans la ville, la Camargue à 20 minutes : Arles est une base familiale idéale pour explorer la Provence.' },

  // Provence et Alpes
  annecy: { nom: 'Annecy', region: 'Auvergne-Rhône-Alpes', pays: 'France', description: 'Lac, vieille ville et vélo.', teaser: "Le lac le plus pur d'Europe, la vieille ville colorée sur l'eau, le tour du lac en vélo : Annecy est peut-être la ville de France la plus belle en famille." },
  chamonix: { nom: 'Chamonix', region: 'Auvergne-Rhône-Alpes', pays: 'France', description: 'Mont-Blanc, téléphériques et randonnées.', teaser: "Le toit de l'Europe, la mer de glace, l'Aiguille du Midi en téléphérique, les randonnées accessibles dès 5 ans : Chamonix est une destination montagne exceptionnelle." },

  // Reste de la France
  paris: { nom: 'Paris', region: 'Île-de-France', pays: 'France', description: 'Tour Eiffel, Louvre, Montmartre.', teaser: "La Tour Eiffel, le Musée en Herbe, Montmartre, les bateaux-mouches, le Musée de l'Air : Paris avec des enfants demande de l'organisation, mais reste magique." },
  lyon: { nom: 'Lyon', region: 'Auvergne-Rhône-Alpes', pays: 'France', description: 'Gastronomie, traboules et Fourvière.', teaser: "Le Vieux-Lyon, les traboules, Guignol au théâtre, le Musée des Confluences, les bouchons lyonnais : Lyon en famille, c'est une aventure culinaire et culturelle." },
  bordeaux: { nom: 'Bordeaux', region: 'Nouvelle-Aquitaine', pays: 'France', description: 'Cité du Vin, miroir d\'eau, Saint-Émilion.', teaser: "La Cité du Vin (espace enfants inclus !), le Miroir d'eau pour patauger, les Chartrons, Saint-Émilion à 40 km : Bordeaux en famille est une vraie surprise." },
  strasbourg: { nom: 'Strasbourg', region: 'Grand Est', pays: 'France', description: 'Petite France, cathédrale et marché de Noël.', teaser: 'La Petite France avec ses canaux, la cathédrale rose, les pédalos sur l\'Ill, et en décembre le plus beau marché de Noël d\'Europe : Strasbourg enchante les familles.' },
  colmar: { nom: 'Colmar', region: 'Grand Est', pays: 'France', description: 'Village alsacien, canal, vélo.', teaser: 'La Petite Venise d\'Alsace, les maisons à colombages, les balades à vélo dans les vignes, les winstubs : Colmar est un village de conte de fées pour les enfants.' },
  'saint-malo': { nom: 'Saint-Malo', region: 'Bretagne', pays: 'France', description: 'Remparts, plages et grands forts.', teaser: 'Les remparts à parcourir en long et en large, les plages de sable immenses, le Fort National, le Grand Aquarium : Saint-Malo est une destination bretonne parfaite.' },
  'mont-saint-michel': { nom: 'Mont-Saint-Michel', region: 'Normandie', pays: 'France', description: 'Merveille médiévale et marées spectaculaires.', teaser: "La merveille de l'Occident, les marées montantes à couper le souffle, les ruelles médiévales : le Mont-Saint-Michel reste un incontournable, même en haute saison." },
  biarritz: { nom: 'Biarritz', region: 'Nouvelle-Aquitaine', pays: 'France', description: 'Surf, plages et Rocher de la Vierge.', teaser: "Les grandes plages de l'Atlantique, l'ambiance surf, le Rocher de la Vierge, les Halles pour le marché : Biarritz en famille, c'est l'Atlantique dans toute sa splendeur." },
  carcassonne: { nom: 'Carcassonne', region: 'Occitanie', pays: 'France', description: 'Cité médiévale et chevaliers.', teaser: "La cité médiévale la mieux conservée d'Europe, ses chevaliers (enfants adorent !), les visites guidées costumées : Carcassonne fait toujours son effet sur les petits." },
  dijon: { nom: 'Dijon', region: 'Bourgogne-Franche-Comté', pays: 'France', description: 'Moutarde, Palais des Ducs, route des vins.', teaser: "La moutarde (les enfants adorent la dégustation !), le Palais des Ducs, la route des vins de Bourgogne : Dijon en famille, c'est la France profonde et délicieuse." },
  nantes: { nom: 'Nantes', region: 'Pays de la Loire', pays: 'France', description: "Les Machines de l'île et château.", teaser: "L'éléphant mécanique des Machines de l'île, le château des Ducs, le Voyage à Nantes en été, le Jardin des Plantes : Nantes est une ville qui parle aux enfants." },
}

export async function generateStaticParams() {
  return Object.keys(villes).map((ville) => ({ ville }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const v = villes[params.ville]
  const nom = v?.nom || params.ville
  return {
    title: `${nom} en famille : notre guide complet`,
    description: v?.teaser?.slice(0, 160) || `Nos conseils pour visiter ${nom} avec des enfants.`,
  }
}

export default async function VillePage({ params }: PageProps) {
  const villeData = villes[params.ville]
  const nom = villeData?.nom || params.ville.charAt(0).toUpperCase() + params.ville.slice(1)
  const region = villeData?.region
  const pays = villeData?.pays || 'France'

  const articles = getAllArticles().filter(
    (a) => a.ville.toLowerCase() === nom.toLowerCase()
  )

  // Photo geo-specifique via search/photos (fiable)
  const specificQuery = CITY_PHOTO_QUERIES[params.ville]
  const photoUrl = await getUnsplashPhoto(
    specificQuery ?? `${nom} France`,
    'france city travel'
  )

  return (
    <>
      {photoUrl ? (
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src={photoUrl}
            alt={`${nom}, ${region ?? pays}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 px-4 sm:px-6 max-w-6xl mx-auto">
            <p className="text-white/70 text-sm mb-1">
              <a href="/" className="hover:text-white">Accueil</a>
              {' / '}
              <a href="/destinations" className="hover:text-white">Destinations</a>
              {' / '}
              France
            </p>
            <h1 className="font-display text-4xl font-bold text-white">{nom} en famille</h1>
            {region && <p className="text-white/80 text-sm mt-1">{region}</p>}
          </div>
        </div>
      ) : (
        <HeroGradient ville={nom} region={region} pays={pays} height="h-64 md:h-80" />
      )}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {villeData?.teaser && (
          <p className="text-texte-muted text-lg mb-8 max-w-2xl">{villeData.teaser}</p>
        )}

        {articles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-fond-alt rounded-2xl">
            <p className="text-4xl mb-4">✍️</p>
            <p className="font-display text-xl text-texte">Article sur {nom} en cours de rédaction !</p>
            <p className="text-texte-muted text-sm mt-2">On y travaille avec amour, revenez bientôt.</p>
          </div>
        )}
      </section>
    </>
  )
}

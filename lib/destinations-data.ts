export interface CityData {
  meilleuresSaisons: string
  duree: string
  budget: string
  transports: string
  activitesGratuites: { nom: string; detail: string }[]
  activitesPayantes: { nom: string; adulte: string; enfant: string; info?: string }[]
  restaurants: { nom: string; type: string; budget: string }[]
  hebergements: { nom: string; categorie: 'budget' | 'milieu' | 'coupdecoeur'; desc: string }[]
  incontournables: string[]
  checklistExtra: string[]
  faq: { q: string; r: string }[]
}

export const CITIES_DATA: Record<string, CityData> = {
  nice: {
    meilleuresSaisons: 'Avril-juin, septembre-octobre',
    duree: '3 jours',
    budget: '70-90 €/jour pour 4 personnes',
    transports: 'TGV Paris-Nice : 5h30. Depuis Marseille : 2h30. Autoroute A8.',
    activitesGratuites: [
      { nom: 'Promenade des Anglais', detail: '7 km en bord de mer, parfaite à vélo ou trottinette' },
      { nom: 'Colline du Château', detail: 'Panorama exceptionnel, fontaine et jeux pour enfants, ascenseur 1€' },
      { nom: 'Marché du Cours Saleya', detail: 'Mar-dim matin, fleurs, fruits et socca, ambiance provençale' },
      { nom: 'Vieux-Nice', detail: 'Ruelles baroques colorées, architecture italianisante, entièrement gratuit' },
      { nom: 'Promenade du Paillon', detail: 'Parc urbain avec jeux d\'eau gratuits, idéal pour les petits en été' },
    ],
    activitesPayantes: [
      { nom: 'Musée Matisse', adulte: '10€', enfant: 'Gratuit -18 ans' },
      { nom: 'MAMAC', adulte: '10€', enfant: 'Gratuit -18 ans', info: 'Art moderne et contemporain' },
      { nom: 'Croisière Monaco depuis Nice', adulte: '25€', enfant: '15€', info: 'Départ Promenade des Anglais' },
      { nom: 'Location vélos électriques', adulte: '15€/h', enfant: '10€/h', info: 'Velobleu disponibles partout' },
      { nom: 'Musée National Marc Chagall', adulte: '10€', enfant: 'Gratuit -18 ans' },
    ],
    restaurants: [
      { nom: 'Chez René Socca', type: 'Socca et spécialités niçoises', budget: '5-12€/pers' },
      { nom: 'La Merenda', type: 'Cuisine niçoise traditionnelle (sans réservation)', budget: '25-35€/pers' },
      { nom: 'Le Comptoir de l\'Olive', type: 'Snacks méditerranéens, idéal enfants', budget: '10-15€/pers' },
    ],
    hebergements: [
      { nom: 'Ibis Nice Centre', categorie: 'budget', desc: 'Centre-ville, 10 min à pied de la plage' },
      { nom: 'Hotel Windsor Nice', categorie: 'milieu', desc: 'Piscine, jardin tropical, chambres familiales' },
      { nom: 'Hôtel La Pérouse', categorie: 'coupdecoeur', desc: 'Terrasse vue mer, accès direct plage privée' },
    ],
    incontournables: [
      'Déguster la socca au Vieux-Nice',
      'Coucher de soleil depuis la Colline du Château',
      'Baignade à Villefranche-sur-Mer (eau plus calme qu\'à Nice)',
    ],
    checklistExtra: [
      'Sandales aquatiques (plage de galets !)',
      'Tapis de plage léger',
      'Crème solaire indice 50+',
      'Monnaie pour le marché Cours Saleya',
    ],
    faq: [
      { q: 'Quel quartier pour dormir à Nice en famille ?', r: 'Le Vieux-Nice pour l\'ambiance. Cimiez pour le calme avec enfants (proche du Musée Matisse et d\'un beau parc).' },
      { q: 'Nice est-elle praticable en poussette ?', r: 'La Promenade et le Vieux-Nice sont accessibles. Colline du Château : ascenseur à 1€ ou sentier (poussette tout-terrain).' },
      { q: 'Quand éviter Nice avec des enfants ?', r: 'Juillet-août : 35°C+ et plages bondées. Préférez mai-juin ou septembre pour un climat parfait.' },
      { q: 'Les plages de Nice sont-elles en galets ou en sable ?', r: 'Entièrement en galets. Pour du sable, prenez le train jusqu\'à Antibes ou Villeneuve-Loubet (20-30 min).' },
    ],
  },

  paris: {
    meilleuresSaisons: 'Avril-juin, septembre',
    duree: '4-5 jours',
    budget: '120-160 €/jour pour 4 personnes',
    transports: 'TGV depuis Lyon : 2h. Depuis Marseille : 3h20. Nombreux vols low-cost.',
    activitesGratuites: [
      { nom: 'Tour Eiffel (extérieur)', detail: 'Gratuit de l\'admirer de Trocadéro ou du Champ-de-Mars' },
      { nom: 'Musée du Louvre (moins de 18 ans)', detail: 'Entrée gratuite pour les moins de 18 ans toute l\'année' },
      { nom: 'Musée d\'Orsay (moins de 18 ans)', detail: 'Gratuit pour les enfants, collections impressionnistes' },
      { nom: 'Centre Pompidou (moins de 18 ans)', detail: 'Art moderne accessible, vue sur Paris depuis le toit' },
      { nom: 'Jardins du Palais-Royal', detail: 'Les colonnes de Buren, jeux, espace pique-nique' },
    ],
    activitesPayantes: [
      { nom: 'Tour Eiffel (sommet)', adulte: '29,40€', enfant: '14,70€', info: 'Réservation obligatoire à l\'avance' },
      { nom: 'Disneyland Paris', adulte: 'à partir de 60€', enfant: 'à partir de 50€', info: '45 min de Paris en RER A' },
      { nom: 'Cité des Sciences', adulte: '13€', enfant: '10€', info: 'Géode et expositions interactives adorées des enfants' },
      { nom: 'Bateaux Mouches', adulte: '15€', enfant: '7€', info: '1h de croisière, vue sur Notre-Dame en reconstruction' },
      { nom: 'Musée en Herbe', adulte: '9€', enfant: '9€', info: 'Musée d\'art pensé pour les 1-10 ans' },
    ],
    restaurants: [
      { nom: 'Breizh Café (Marais)', type: 'Crêpes bretonnes haut de gamme', budget: '15-25€/pers' },
      { nom: 'L\'As du Fallafel (Marais)', type: 'Fallafel incontournable, queue mais ça vaut le coup', budget: '7-12€/pers' },
      { nom: 'Bouillon Chartier', type: 'Brasserie parisienne historique, portions généreuses', budget: '15-20€/pers' },
    ],
    hebergements: [
      { nom: 'Generator Paris (Nation)', categorie: 'budget', desc: 'Chambres familiales, très bien situé' },
      { nom: 'Novotel Paris Centre Tour Eiffel', categorie: 'milieu', desc: 'Piscine, vue Tour Eiffel, enfants dorment gratuit' },
      { nom: 'Hôtel du Petit Moulin (Marais)', categorie: 'coupdecoeur', desc: 'Boutique hôtel Christian Lacroix, très parisien' },
    ],
    incontournables: [
      'Pique-niquer au Champ-de-Mars face à la Tour Eiffel',
      'La Cité des Sciences : demi-journée minimum pour les enfants',
      'Se balader dans le Marais jusqu\'à la Place des Vosges',
    ],
    checklistExtra: [
      'Carnet Navigo ou tickets de métro (t+)',
      'Parapluie léger (Paris pluvieux)',
      'Réservations à l\'avance (Tour Eiffel, Disneyland)',
      'Chaussures de marche confortables',
    ],
    faq: [
      { q: 'Quel arrondissement pour se loger à Paris en famille ?', r: 'Le 4e (Marais) et le 7e (Tour Eiffel) sont idéaux : centraux, piétons et bien desservis. Évitez les arrondissements périphériques avec des enfants.' },
      { q: 'Comment se déplacer à Paris avec des enfants ?', r: 'Le métro est pratique mais sans ascenseurs partout. Le bus est plus simple avec poussette. Le vélo (Vélib) est possible avec enfants de plus de 7 ans.' },
      { q: 'Combien coûte Paris en famille ?', r: 'Comptez 120-160€/jour tout compris : hébergement, repas et activités. Les musées nationaux sont gratuits pour les moins de 18 ans, ce qui aide beaucoup.' },
      { q: 'Paris est-elle adaptée aux très jeunes enfants ?', r: 'Oui à condition de bien planifier. Les parcs sont nombreux, le métro accepte les poussettes, et les brasseries parisiennes sont family-friendly.' },
    ],
  },

  marseille: {
    meilleuresSaisons: 'Mai-juin, septembre',
    duree: '3 jours',
    budget: '65-85 €/jour pour 4 personnes',
    transports: 'TGV Paris-Marseille : 3h20. Depuis Nice : 2h30. Depuis Lyon : 1h45.',
    activitesGratuites: [
      { nom: 'Vieux-Port', detail: 'Promenade gratuite, marché au poisson le matin, vue sur le fort' },
      { nom: 'Notre-Dame de la Garde', detail: 'La Bonne Mère, accessible en bus 60, panorama exceptionnel' },
      { nom: 'Le Panier', detail: 'Quartier historique, ruelles colorées, street art, gratuit à explorer' },
      { nom: 'Plages du Prado', detail: 'Plages de sable gratuites accessibles en bus, moins fréquentées que le centre' },
      { nom: 'Parc Borély', detail: 'Grand parc avec lac, guinguette et mini-golf, accès libre' },
    ],
    activitesPayantes: [
      { nom: 'MuCEM', adulte: '13€', enfant: 'Gratuit -18 ans', info: 'Architecture spectaculaire, collections méditerranéennes' },
      { nom: 'Calanques en bateau', adulte: '35€', enfant: '20€', info: 'Départ du Vieux-Port, réserver à l\'avance en été' },
      { nom: 'Château d\'If', adulte: '11,50€', enfant: '9€', info: 'Prison du Comte de Monte-Cristo, 20 min de bateau' },
      { nom: 'Musée des Civilisations de l\'Europe (MUCEM)', adulte: '13€', enfant: 'Gratuit -18 ans' },
      { nom: 'Randonnée calanques (guidée)', adulte: '20€', enfant: '15€', info: 'Calanque de Sormiou, prévoir eau et chaussures' },
    ],
    restaurants: [
      { nom: 'Chez Fonfon (Vallon des Auffes)', type: 'Bouillabaisse authentique, incontournable', budget: '35-50€/pers' },
      { nom: 'Le Grain de Sel', type: 'Cuisine inventive, vue sur le Vieux-Port', budget: '20-30€/pers' },
      { nom: 'La Caravelle', type: 'Bar à tapas du Vieux-Port, ambiance locale', budget: '10-15€/pers' },
    ],
    hebergements: [
      { nom: 'Ibis Marseille Centre Vieux-Port', categorie: 'budget', desc: 'Vue directe sur le Vieux-Port, très bien situé' },
      { nom: 'Hôtel Escale Oceania', categorie: 'milieu', desc: 'À deux pas du Vieux-Port, chambres familiales' },
      { nom: 'InterContinental Marseille Dieu', categorie: 'coupdecoeur', desc: 'Hôtel de charme dans un couvent du XVIIIe siècle' },
    ],
    incontournables: [
      'La navette gratuite entre le Vieux-Port et les îles (vue unique)',
      'Déguster une vraie bouillabaisse au Vallon des Auffes',
      'Balade dans le Panier jusqu\'à la Vieille Charité',
    ],
    checklistExtra: [
      'Chaussures de randonnée (calanques)',
      'Lunettes de natation pour les enfants',
      'Eau en grande quantité (soleil intense)',
      'Anti-moustiques pour les calanques en soirée',
    ],
    faq: [
      { q: 'Les calanques sont-elles accessibles avec des enfants en bas âge ?', r: 'Les sentiers sont souvent escarpés. Calanque de Sormiou et Morgiou sont accessibles en voiture hors été. En bateau depuis le Vieux-Port, toutes les calanques sont accessibles dès le plus jeune âge.' },
      { q: 'Marseille est-elle une ville sûre pour les familles ?', r: 'Le centre touristique (Vieux-Port, MuCEM, Panier) est très fréquenté et sûr. Comme dans toute grande ville, évitez les zones excentrées le soir.' },
      { q: 'Quand visiter Marseille en famille ?', r: 'Mai-juin ou septembre sont parfaits : 25-28°C, mer baignable, sans les foules d\'août.' },
      { q: 'Comment aller aux calanques sans voiture ?', r: 'En été, les routes des calanques sont fermées aux voitures. Prenez le bus 21 jusqu\'à La Cayolle, puis marchez 30 min. Ou optez pour le bateau depuis le Vieux-Port.' },
    ],
  },

  annecy: {
    meilleuresSaisons: 'Juin-août (lac), décembre (marché de Noël)',
    duree: '2-3 jours',
    budget: '75-95 €/jour pour 4 personnes',
    transports: 'Depuis Lyon : 1h45 en train. Depuis Paris : 3h40 en TGV + TER. Depuis Genève : 40 min.',
    activitesGratuites: [
      { nom: 'Vieille ville d\'Annecy', detail: 'Canaux, fleurs aux fenêtres, marché, entièrement piéton et gratuit' },
      { nom: 'Bord du lac (Jardins de l\'Europe)', detail: 'Promenade le long du lac, vue sur les montagnes, gratuit' },
      { nom: 'Plage d\'Albigny', detail: 'Pelouse et accès lac gratuit, zone baignade surveillée en juillet-août' },
      { nom: 'Tour du lac à vélo', detail: 'Piste cyclable de 42 km autour du lac, location possible sur place' },
      { nom: 'Village de Talloires', detail: 'Le plus beau village du lac, à 13 km en vélo ou bus' },
    ],
    activitesPayantes: [
      { nom: 'Palais de l\'Île (musée)', adulte: '4€', enfant: '2€', info: 'Château sur l\'eau, emblème d\'Annecy' },
      { nom: 'Musée-Château d\'Annecy', adulte: '6€', enfant: '3€' },
      { nom: 'Parapente biplace (à partir de 7 ans)', adulte: '110€', enfant: '90€', info: 'Vue lac exceptional, départ montagne' },
      { nom: 'Croisière sur le lac', adulte: '16€', enfant: '8€', info: '1h de tour complet' },
      { nom: 'Location de vélos électriques', adulte: '30€/jour', enfant: '20€/jour' },
    ],
    restaurants: [
      { nom: 'Le Freti', type: 'Fondues et spécialités savoiardes', budget: '20-30€/pers' },
      { nom: 'Chez Barnabet', type: 'Cuisine du lac (féra, lavaret), vue canal', budget: '25-35€/pers' },
      { nom: 'Les Terrasses', type: 'Brasserie vue lac, parfaite pour familles', budget: '15-25€/pers' },
    ],
    hebergements: [
      { nom: 'Ibis Annecy Centre Vieille Ville', categorie: 'budget', desc: 'À 5 min à pied du lac et de la vieille ville' },
      { nom: 'Hôtel de Savoie', categorie: 'milieu', desc: 'En plein cœur de la vieille ville, chambres familiales' },
      { nom: 'Les Trésoms Lake & Spa', categorie: 'coupdecoeur', desc: 'Vue panoramique sur le lac, spa, cadre exceptionnel' },
    ],
    incontournables: [
      'Baignade dans le lac (eau la plus pure d\'Europe)',
      'Marché d\'Annecy le mardi et vendredi matin',
      'Tour du lac à vélo avec les enfants',
    ],
    checklistExtra: [
      'Maillots de bain (le lac est baignable !)',
      'Vélos enfants ou siège vélo',
      'Chaussures de randonnée (Semnoz accessible)',
      'Polaire pour les soirées en montagne',
    ],
    faq: [
      { q: 'Peut-on se baigner dans le lac d\'Annecy ?', r: 'Oui, c\'est même l\'un des lacs les plus purs d\'Europe. Plusieurs plages gratuites (Albigny, Marquisats) avec zones surveillées en juillet-août.' },
      { q: 'Annecy est-elle accessible en train ?', r: 'Oui depuis Paris en 3h40 (TGV jusqu\'à Lyon puis TER). Depuis Lyon directement en 1h45. Depuis Genève en 40 min.' },
      { q: 'Le tour du lac à vélo est-il faisable avec des enfants ?', r: 'Le tour complet (42 km) est faisable avec enfants de 8 ans+. Pour les plus petits, faites un demi-tour jusqu\'à Talloires (20 km aller-retour) sur piste cyclable.' },
      { q: 'Faut-il réserver à l\'avance pour Annecy en été ?', r: 'Absolument. Juillet-août : réservez hébergement et location de vélos 2-3 mois à l\'avance. Les plages gratuites peuvent être très fréquentées le week-end.' },
    ],
  },

  carcassonne: {
    meilleuresSaisons: 'Avril-juin, septembre-octobre',
    duree: '1-2 jours',
    budget: '60-75 €/jour pour 4 personnes',
    transports: 'TGV Marseille-Carcassonne : 1h50. Depuis Montpellier : 1h30. Toulouse : 45 min.',
    activitesGratuites: [
      { nom: 'Promenade sur les remparts extérieurs', detail: 'Tour des lices (espace entre les deux enceintes), accès libre' },
      { nom: 'Bastide Saint-Louis (ville basse)', detail: 'Centre-ville moderne, marché le mardi et jeudi, Place Carnot animée' },
      { nom: 'Canal du Midi (écluses)', detail: 'À 2 km, écluses à regarder fonctionner, balade ombragée' },
      { nom: 'Spectacle du son et lumière (été)', detail: 'Projection gratuite sur les remparts certains soirs en juillet-août' },
      { nom: 'Musée de la Chevalerie (extérieur)', detail: 'Explications des fortifications, accessible depuis l\'extérieur' },
    ],
    activitesPayantes: [
      { nom: 'Château Comtal + Remparts (intérieur)', adulte: '9€', enfant: 'Gratuit -18 ans', info: 'Incontournable, visite guidée possible' },
      { nom: 'Spectacle médiéval en été', adulte: '12€', enfant: '8€', info: 'Joutes et combats de chevaliers, juillet-août' },
      { nom: 'Croisière sur le Canal du Midi', adulte: '12€', enfant: '7€', info: '1h depuis le port fluvial' },
      { nom: 'Escape game médiéval', adulte: '15€', enfant: '12€', info: 'Plusieurs salles thématiques dans la cité' },
      { nom: 'Location de vélos canal', adulte: '15€/jour', enfant: '10€/jour' },
    ],
    restaurants: [
      { nom: 'Le Parc Franck Putelat', type: 'Gastronomique étoilé, vue cité (occasion spéciale)', budget: '60-80€/pers' },
      { nom: 'L\'Oustal', type: 'Cassoulet traditionnel, terrasse vue remparts', budget: '20-30€/pers' },
      { nom: 'Le Bistrot du Boucher', type: 'Grillades et cassoulet, rapport qualité-prix', budget: '15-25€/pers' },
    ],
    hebergements: [
      { nom: 'Ibis Carcassonne La Cité', categorie: 'budget', desc: 'À 10 min à pied de la cité médiévale' },
      { nom: 'Hôtel du Château', categorie: 'milieu', desc: 'Vue directe sur les remparts depuis certaines chambres' },
      { nom: 'Hôtel de la Cité (MGallery)', categorie: 'coupdecoeur', desc: 'Dans les remparts, piscine, vue exceptionnelle' },
    ],
    incontournables: [
      'Visiter le Château Comtal au lever du jour (avant les cars de touristes)',
      'Manger un cassoulet traditionnel dans la cité',
      'Balade le long du Canal du Midi à vélo',
    ],
    checklistExtra: [
      'Chaussures confortables (pavés et escaliers dans la cité)',
      'Chapeau et eau (peu d\'ombre dans la cité)',
      'Livres sur les chevaliers pour les enfants (ils adorent)',
    ],
    faq: [
      { q: 'Quel est le meilleur moment pour visiter Carcassonne sans foule ?', r: 'Tôt le matin (avant 9h) ou en fin de journée (après 17h). En dehors de juillet-août, avril-juin et septembre sont parfaits.' },
      { q: 'Faut-il payer pour entrer dans la cité médiévale ?', r: 'L\'accès aux rues de la cité est gratuit. Seul le Château Comtal et les remparts intérieurs sont payants (9€ adulte, gratuit -18 ans).' },
      { q: 'Carcassonne en une journée, c\'est faisable ?', r: 'Tout à fait. Arrivez le matin, visitez le château, déjeunez dans la cité, promenez-vous l\'après-midi. Ajoutez une soirée pour le son et lumière en été.' },
      { q: 'Y a-t-il des activités spécifiques pour les enfants ?', r: 'Oui : spectacles de chevaliers, escape games médiévaux, visite contée du château. Les enfants sont enthousiastes devant les remparts et les catapultes.' },
    ],
  },

  avignon: {
    meilleuresSaisons: 'Avril-juin, septembre',
    duree: '2 jours',
    budget: '65-80 €/jour pour 4 personnes',
    transports: 'TGV Paris-Avignon : 2h40. Depuis Marseille : 35 min. Depuis Lyon : 1h.',
    activitesGratuites: [
      { nom: 'Remparts d\'Avignon', detail: 'Promenade sur les 4,3 km de remparts médiévaux, accès libre' },
      { nom: 'Place de l\'Horloge', detail: 'Cœur animé de la ville, manèges pour enfants en été' },
      { nom: 'Jardin des Doms', detail: 'Vues sur le Rhône et le Pont, jardin avec canards, entrée libre' },
      { nom: 'Île de la Barthelasse', detail: 'Île naturelle dans le Rhône accessible par navette, pique-nique idéal' },
      { nom: 'Festival Off d\'Avignon (juillet)', detail: 'Nombreuses représentations gratuites ou à petits prix dans les rues' },
    ],
    activitesPayantes: [
      { nom: 'Palais des Papes', adulte: '14€', enfant: 'Gratuit -8 ans, 5€ 8-17 ans', info: 'Le plus grand palais gothique du monde, audio-guide inclus' },
      { nom: 'Pont Saint-Bénézet', adulte: '5€', enfant: 'Gratuit -8 ans', info: '"Sur le pont d\'Avignon", vue depuis le pont partiel' },
      { nom: 'Canot sur le Rhône', adulte: '18€', enfant: '12€', info: 'Départ île de la Barthelasse' },
      { nom: 'Collection Lambert (art contemporain)', adulte: '12€', enfant: 'Gratuit -12 ans' },
      { nom: 'Visite guidée contée (pour enfants)', adulte: '10€', enfant: '7€', info: 'Réservation à l\'office de tourisme' },
    ],
    restaurants: [
      { nom: 'Christian Etienne', type: 'Cuisine provençale étoilée face au Palais', budget: '45-65€/pers' },
      { nom: 'Le Numéro 75', type: 'Cuisine du marché, terrasse, familial', budget: '20-28€/pers' },
      { nom: 'Les Halles d\'Avignon', type: 'Marché couvert, snacks et restauration rapide', budget: '8-15€/pers' },
    ],
    hebergements: [
      { nom: 'Ibis Avignon Centre', categorie: 'budget', desc: 'Dans les remparts, très bien placé' },
      { nom: 'Hôtel d\'Europe', categorie: 'milieu', desc: 'Hôtel historique, intérieur des remparts' },
      { nom: 'La Mirande', categorie: 'coupdecoeur', desc: 'Hôtel 5* dans un palais cardinal, face au Palais des Papes' },
    ],
    incontournables: [
      'Dîner sur l\'Île de la Barthelasse face aux remparts illuminés',
      'Montée au Rocher des Doms pour la vue sur le Rhône',
      'Le marché des Halles un samedi matin',
    ],
    checklistExtra: [
      'Lunettes de soleil (mistral + soleil intense)',
      'Veste légère (le mistral peut être frais)',
      'Chaussures confortables (pavés)',
    ],
    faq: [
      { q: 'Avignon pendant le Festival (juillet) avec des enfants ?', r: 'Possible mais la ville est très bondée. Le Festival Off propose des spectacles pour enfants à petits prix. Réservez hébergement 6 mois à l\'avance.' },
      { q: 'Peut-on visiter les Alpilles depuis Avignon ?', r: 'Oui, Les Baux-de-Provence et Saint-Rémy-de-Provence sont à 30 min en voiture. Idéal pour combiner avec 2 jours à Avignon.' },
      { q: 'Avignon est-elle praticable en poussette ?', r: 'Le centre-ville est pavé, parfois difficile. Les principales attractions sont accessibles mais prévoyez une poussette robuste ou un porte-bébé.' },
      { q: 'Combien de temps pour visiter le Palais des Papes ?', r: 'Comptez 1h30 à 2h avec les enfants. L\'audio-guide interactif enfants est disponible, ce qui rend la visite beaucoup plus ludique.' },
    ],
  },

  strasbourg: {
    meilleuresSaisons: 'Décembre (Noël), mai-juin, septembre',
    duree: '2-3 jours',
    budget: '75-95 €/jour pour 4 personnes',
    transports: 'TGV Paris-Strasbourg : 1h47. Depuis Lyon : 3h45. Depuis Genève : 2h30.',
    activitesGratuites: [
      { nom: 'La Petite France', detail: 'Quartier médiéval avec canaux et maisons à colombages, promenade libre' },
      { nom: 'Cathédrale Notre-Dame', detail: 'Chef-d\'œuvre gothique rose, horloge astronomique, entrée libre (spectacle +2€)' },
      { nom: 'Place Kléber et Gutenberg', detail: 'Cœur de Strasbourg, artistes de rue, marchés' },
      { nom: 'Bords de l\'Ill à vélo', detail: 'Piste cyclable le long de la rivière, gratuit avec vélos en location' },
      { nom: 'Marché de Noël (décembre)', detail: 'Le plus ancien de France (depuis 1570), nombreuses entrées gratuites' },
    ],
    activitesPayantes: [
      { nom: 'Sommet de la cathédrale', adulte: '6€', enfant: '3€', info: '330 marches, vue panoramique sur l\'Alsace' },
      { nom: 'Batorama (croisière)', adulte: '15€', enfant: '7,50€', info: '75 min, passage sous les ponts couverts' },
      { nom: 'Musée Alsacien', adulte: '7,50€', enfant: 'Gratuit -18 ans' },
      { nom: 'Parc de l\'Orangerie + zoo', adulte: 'Gratuit', enfant: 'Gratuit', info: 'Cigognes en liberté, mini-zoo, parfait pour les petits' },
      { nom: 'Location vélos Vélhop', adulte: '4€/h', enfant: '2€/h', info: 'Station dans toute la ville' },
    ],
    restaurants: [
      { nom: 'Chez Yvonne (S\'Burjerstuewel)', type: 'Winstub historique, choucroute traditionnelle', budget: '20-30€/pers' },
      { nom: 'Au Pont Corbeau', type: 'Cuisine alsacienne, flammekueche', budget: '15-22€/pers' },
      { nom: 'Bretzel & Beer (Broglie)', type: 'Bretzels, bière alsacienne, snack rapide', budget: '8-12€/pers' },
    ],
    hebergements: [
      { nom: 'Ibis Strasbourg Centre Historique', categorie: 'budget', desc: 'À 5 min de la cathédrale, idéal' },
      { nom: 'Hôtel Régent Petite France', categorie: 'milieu', desc: 'Dans un ancien moulin, vue sur les ponts couverts' },
      { nom: 'Cour du Corbeau (MGallery)', categorie: 'coupdecoeur', desc: 'Hôtel dans un bâtiment Renaissance du XVIe siècle' },
    ],
    incontournables: [
      'Se perdre dans La Petite France tôt le matin',
      'La flammekueche dans un winstub authentique',
      'Le marché de Noël fin novembre-décembre',
    ],
    checklistExtra: [
      'Manteau chaud (Noël) ou veste légère (printemps)',
      'Antifuite chaussures (rues pavées)',
      'Ticket pour croisière Batorama à réserver en ligne',
    ],
    faq: [
      { q: 'Vaut-il mieux visiter Strasbourg en été ou au marché de Noël ?', r: 'Les deux ! L\'été est parfait pour les canaux et la Petite France sans foule. Décembre est magique avec le marché de Noël, mais très fréquenté le week-end.' },
      { q: 'Peut-on visiter Colmar depuis Strasbourg ?', r: 'Oui, Colmar est à 30 min en TER. Idéal pour une excursion d\'une journée depuis Strasbourg.' },
      { q: 'Strasbourg est-elle adaptée au vélo avec des enfants ?', r: 'C\'est même la ville idéale ! Réseau cyclable de 600 km, terrain plat, vélos en location partout. Les enfants de 5 ans+ adorent.' },
      { q: 'Que faire à Strasbourg un dimanche ?', r: 'Balade dans La Petite France le matin, croisière sur l\'Ill l\'après-midi, et visite de la cathédrale. Attention : beaucoup de commerces fermés le dimanche.' },
    ],
  },

  montpellier: {
    meilleuresSaisons: 'Avril-juin, septembre',
    duree: '2-3 jours',
    budget: '60-80 €/jour pour 4 personnes',
    transports: 'TGV Paris-Montpellier : 3h15. Depuis Marseille : 1h30. Depuis Nice : 2h30.',
    activitesGratuites: [
      { nom: 'Place de la Comédie', detail: '"L\'Œuf", la plus grande place piétonne d\'Europe, fontaines, artistes de rue' },
      { nom: 'Promenade du Peyrou', detail: 'Arc de triomphe, château d\'eau, vue sur les Cévennes et la mer' },
      { nom: 'Jardin des Plantes', detail: 'Plus ancien jardin botanique de France (1593), entrée gratuite, calme' },
      { nom: 'Quartier de l\'Écusson', detail: 'Centre historique médiéval, ruelles, hôtels particuliers, entièrement piéton' },
      { nom: 'Plages de Palavas en tramway', detail: '30 min depuis le centre en tram (ligne 3), plages de sable gratuit' },
    ],
    activitesPayantes: [
      { nom: 'Aquarium Mare Nostrum', adulte: '20€', enfant: '14€', info: 'Grand aquarium méditerranéen, très apprécié des enfants' },
      { nom: 'Musée Fabre (beaux-arts)', adulte: '10€', enfant: 'Gratuit -26 ans', info: 'Collection exceptionnelle de peinture' },
      { nom: 'Zoo de Lunaret', adulte: '5€', enfant: '2€', info: 'Grand zoo naturel, animaux en semi-liberté' },
      { nom: 'Planétarium de Montpellier', adulte: '8€', enfant: '5€', info: 'Séances adaptées dès 4 ans' },
      { nom: 'Location de trottinettes électriques', adulte: '15€/h', enfant: 'Dès 8 ans, même tarif' },
    ],
    restaurants: [
      { nom: 'Maison de la Lozère', type: 'Cuisine du terroir languedocien', budget: '20-30€/pers' },
      { nom: 'Les Bains de Montpellier', type: 'Brasserie dans un hammam XIX siècle, decor incroyable', budget: '20-28€/pers' },
      { nom: 'Halles Laissac', type: 'Marché couvert avec restauration sur place', budget: '8-15€/pers' },
    ],
    hebergements: [
      { nom: 'Ibis Montpellier Centre Comédie', categorie: 'budget', desc: 'Face à la Place de la Comédie, très central' },
      { nom: 'Novotel Montpellier Centre', categorie: 'milieu', desc: 'Piscine, idéal familles, proche tramway' },
      { nom: 'Baudon de Mauny', categorie: 'coupdecoeur', desc: 'Maison de charme dans l\'Écusson, petit-déjeuner exceptionnel' },
    ],
    incontournables: [
      'Baignade à Palavas-les-Flots en tramway depuis le centre',
      'L\'Aquarium Mare Nostrum (demi-journée pour les enfants)',
      'Glace à la Maison Nocciolina (la meilleure de la ville)',
    ],
    checklistExtra: [
      'Maillots de bain (plages à 30 min)',
      'Tickets de tramway (réseau étendu)',
      'Chapeaux (soleil intense en été)',
    ],
    faq: [
      { q: 'Comment aller à la plage depuis Montpellier en famille ?', r: 'Tramway ligne 3 jusqu\'à Palavas-les-Flots en 30 min. Plages de sable, idéales pour les enfants. Carnon-Plage et La Grande-Motte sont aussi accessibles.' },
      { q: 'Montpellier est-elle adaptée aux enfants en bas âge ?', r: 'Oui : tramway accessible avec poussette, Place de la Comédie piétonne et plate, Promenade du Peyrou avec espace vert. L\'Aquarium est parfait dès 3 ans.' },
      { q: 'Montpellier en été, chaleur supportable ?', r: 'Juillet-août : 35°C+. Privilégiez les activités le matin et en soirée. La mer est à 30 min par tramway pour se rafraîchir.' },
      { q: 'Quel est le meilleur marché de Montpellier ?', r: 'Le marché du Plan Cabanes le mardi matin et le marché des Arceaux le samedi matin (sous les aqueducs romains) sont les plus beaux et authentiques.' },
    ],
  },

  // EUROPE
  barcelone: {
    meilleuresSaisons: 'Avril-juin, septembre-octobre',
    duree: '4-5 jours',
    budget: '100-130 €/jour pour 4 personnes',
    transports: 'Vol Paris-Barcelone : 1h50. TGV Paris-Barcelone : 6h30. Depuis Montpellier : 3h en voiture.',
    activitesGratuites: [
      { nom: 'Las Ramblas', detail: 'La promenade emblématique, animée en permanence, artistes de rue' },
      { nom: 'Plage de Barceloneta', detail: 'Plage urbaine gratuite, accès en métro, idéale pour les enfants' },
      { nom: 'Barri Gòtic', detail: 'Quartier gothique, ruelles médiévales, Place de la Seu, explorer gratuitement' },
      { nom: 'Bunkers del Carmel', detail: 'Anciens bunkers avec panorama 360° sur Barcelone, coucher de soleil inoubliable' },
      { nom: 'Parc de la Ciutadella', detail: 'Grand parc avec lac, zoo (payant), fontaine Cascada, idéal pique-nique' },
    ],
    activitesPayantes: [
      { nom: 'Sagrada Família', adulte: '26€', enfant: 'Gratuit -11 ans', info: 'Réservation OBLIGATOIRE 2-3 semaines à l\'avance' },
      { nom: 'Parc Güell', adulte: '10€', enfant: 'Gratuit -7 ans', info: 'Zone monumentale payante, parterres de Gaudí' },
      { nom: 'L\'Aquàrium de Barcelona', adulte: '22€', enfant: '16€', info: 'Tunnel sous-marin avec requins, 45 min conseillés' },
      { nom: 'CosmoCaixa (musée des sciences)', adulte: '6€', enfant: '6€', info: 'Forêt amazonienne reconstituée, parfait pour enfants' },
      { nom: 'Bus Turístic (1 jour)', adulte: '30€', enfant: '16€', info: 'Pratique pour couvrir toute la ville' },
    ],
    restaurants: [
      { nom: 'La Boqueria (Mercat de Sant Josep)', type: 'Marché iconique, tapas et snacks', budget: '10-18€/pers' },
      { nom: 'Bar del Pla (El Born)', type: 'Tapas catalanes, atmosphère locale', budget: '15-25€/pers' },
      { nom: 'Flash Flash (Gracia)', type: 'Tortillas et omelettes, idéal enfants, design 70s', budget: '12-20€/pers' },
    ],
    hebergements: [
      { nom: 'Generator Barcelona', categorie: 'budget', desc: 'Chambres familiales, centre-ville, piscine sur le toit' },
      { nom: 'Hotel Arts Barcelona', categorie: 'milieu', desc: 'Vue mer et plage, piscine, accès direct plage Barceloneta' },
      { nom: 'Mandarin Oriental Barcelona', categorie: 'coupdecoeur', desc: 'Passeig de Gràcia, service exceptionnel, piscine sur le toit' },
    ],
    incontournables: [
      'La Sagrada Família au coucher du soleil (lumière magnifique)',
      'Glaces Rocambolesc de Jordi Roca (Las Ramblas)',
      'Balade en vélo le long de la mer jusqu\'au Forum',
    ],
    checklistExtra: [
      'Réservations Sagrada Família et Parc Güell bien à l\'avance',
      'Carte T-Casual (10 voyages métro)',
      'Crème solaire (soleil intense même en avril)',
      'Adaptateur prise espagnol (même que France, pas besoin)',
    ],
    faq: [
      { q: 'Barcelone en famille avec de jeunes enfants (moins de 5 ans) ?', r: 'Absolument. La plage, les parcs, l\'Aquarium et CosmoCaixa sont parfaits. La ville est plate et bien desservie en métro accessible.' },
      { q: 'Quand réserver la Sagrada Família ?', r: 'Au moins 3 semaines à l\'avance en haute saison (juillet-août). Choisissez l\'entrée avec accès aux tours pour une vue exceptionnelle.' },
      { q: 'Barcelone est-elle dangereuse pour les familles ?', r: 'Soyez vigilants sur Las Ramblas et dans le métro (pickpockets fréquents). Le reste de la ville est très sûr. Gardez sacs devant vous et documents à l\'hôtel.' },
      { q: 'Quel quartier pour se loger en famille à Barcelone ?', r: 'L\'Eixample (central, calme, transport) ou Gràcia (village dans la ville, ambiance locale) sont idéaux. Évitez le Raval avec de jeunes enfants.' },
    ],
  },

  rome: {
    meilleuresSaisons: 'Avril-juin, septembre-octobre',
    duree: '4-5 jours',
    budget: '95-125 €/jour pour 4 personnes',
    transports: 'Vol Paris-Rome : 2h10. Vol Lyon-Rome : 1h50. Ryanair depuis beaucoup d\'aéroports régionaux.',
    activitesGratuites: [
      { nom: 'Colisée (extérieur)', detail: 'Gratuit de l\'admirer depuis l\'extérieur, photos spectaculaires la nuit' },
      { nom: 'Fontaine de Trevi', detail: 'Incontournable gratuit, aller tôt le matin pour éviter la foule' },
      { nom: 'Panthéon', detail: 'Entrée désormais payante (5€) mais extérieur et piazza gratuits' },
      { nom: 'Villa Borghèse', detail: 'Grand parc ombragé, pédalo sur le lac, jeux pour enfants' },
      { nom: 'Basilique Saint-Pierre (sans la coupole)', detail: 'Entrée gratuite pour la basilique, file d\'attente mais ça vaut le coup' },
    ],
    activitesPayantes: [
      { nom: 'Colisée + Forum + Palatin', adulte: '16€', enfant: 'Gratuit -18 ans UE', info: 'Réservation obligatoire, évite 2h de queue' },
      { nom: 'Coupole Saint-Pierre', adulte: '8€', enfant: '6€', info: 'Vue panoramique sur Rome, 320 marches ou ascenseur' },
      { nom: 'Musée du Vatican + Chapelle Sixtine', adulte: '20€', enfant: '8€', info: 'Réservation obligatoire plusieurs semaines à l\'avance' },
      { nom: 'Musée Borghèse', adulte: '15€', enfant: '2€', info: 'Entrée toutes les 2h, réservation indispensable' },
      { nom: 'Excursion à Ostia Antica (en RER)', adulte: '12€', enfant: 'Gratuit -18 ans UE', info: 'Pompéi de Rome, moins touristique' },
    ],
    restaurants: [
      { nom: 'Da Remo (Testaccio)', type: 'Pizza romaine ultra-fine, la meilleure de Rome', budget: '10-15€/pers' },
      { nom: 'Suppli Roma (Campo de\' Fiori)', type: 'Suppli (croquettes de riz frites), street food romain', budget: '5-8€/pers' },
      { nom: 'Tonnarello (Trastevere)', type: 'Pâtes romaines traditionnelles, terrasse en soirée', budget: '15-22€/pers' },
    ],
    hebergements: [
      { nom: 'The Beehive (Termini)', categorie: 'budget', desc: 'Chambres familiales, accueil chaleureux, proche transport' },
      { nom: 'Hotel Raphael (Navona)', categorie: 'milieu', desc: 'Couvert de lierres, à 2 pas de la Piazza Navona' },
      { nom: 'Il Palazzetto (Espagne)', categorie: 'coupdecoeur', desc: 'Terrasse-bar sur la Place d\'Espagne, intimité et luxe discret' },
    ],
    incontournables: [
      'La fontaine de Trevi à 7h du matin (quasi-vide !)',
      'Pizza al taglio debout sur le Campo de\' Fiori',
      'Soirée au Trastevere pour voir la vraie vie romaine',
    ],
    checklistExtra: [
      'Réservations Colisée et Vatican bien à l\'avance',
      'Chaussures confortables (pavés romains !)',
      'Éventail et eau (chaleur intense en juillet-août)',
      'Écharpe légère pour les basiliques (bras couverts obligatoire)',
    ],
    faq: [
      { q: 'Rome avec des enfants en bas âge, c\'est raisonnable ?', r: 'Oui, mais préparez-vous aux pavés et escaliers partout. Un porte-bébé est plus pratique qu\'une poussette pour le Colisée et le Vatican. Les fontaines et gelati font l\'unanimité.' },
      { q: 'Combien coûte Rome en famille ?', r: 'Moins cher que Paris grâce aux musées gratuits pour les -18 ans UE. Comptez 95-125€/jour tout compris. La pizza et les pâtes sont abordables.' },
      { q: 'Comment éviter les queues à Rome ?', r: 'Réservez tout en ligne : Colisée, Vatican, Musée Borghèse. Sans réservation, comptez 2-3h de queue en haute saison. Arrivez à l\'ouverture pour les sites populaires.' },
      { q: 'Quel quartier pour se loger à Rome en famille ?', r: 'Trastevere (authentique, animé le soir) ou Prati (près du Vatican, calme, commerces pratiques). Évitez la zone Termini avec des enfants.' },
    ],
  },

  londres: {
    meilleuresSaisons: 'Mai-juin, septembre',
    duree: '4-5 jours',
    budget: '140-180 €/jour pour 4 personnes',
    transports: 'Eurostar Paris-Londres : 2h20 (gare du Nord). Vol depuis de nombreuses villes françaises : 1h30.',
    activitesGratuites: [
      { nom: 'Natural History Museum', detail: 'Entrée gratuite, dinosaures, baleine bleue, les enfants adorent' },
      { nom: 'British Museum', detail: 'Momies égyptiennes, Rosette, Grecs : 2h minimum, tout gratuit' },
      { nom: 'Tate Modern', detail: 'Art contemporain, vue sur la Tamise, entrée libre pour les collections permanentes' },
      { nom: 'Hyde Park et Kensington Gardens', detail: 'Aire de jeux Diana, pédalo sur le Serpentine, pique-nique' },
      { nom: 'Changement de la Garde (Buckingham)', detail: 'Gratuit à observer depuis les grilles, 11h les jours pairs' },
    ],
    activitesPayantes: [
      { nom: 'London Eye', adulte: '30€', enfant: '24€', info: 'Réservation en ligne moins chère, vue panoramique' },
      { nom: 'Tour de Londres', adulte: '29€', enfant: '14€', info: 'Joyaux de la Couronne, gardes, très apprécié des enfants' },
      { nom: 'Harry Potter Studio Tour', adulte: '52€', enfant: '41€', info: 'À 30 min en train de Londres, réservation indispensable' },
      { nom: 'ZSL London Zoo', adulte: '25€', enfant: '18€', info: 'Gorilles, requins, île des Galapagos' },
      { nom: 'The Shard (panorama)', adulte: '32€', enfant: '24€', info: 'Plus haute tour d\'Angleterre, vue à 360°' },
    ],
    restaurants: [
      { nom: 'Dishoom (plusieurs adresses)', type: 'Cuisine indienne accessible, kids menu', budget: '15-22€/pers' },
      { nom: 'Borough Market', type: 'Marché gastronomique, street food du monde entier', budget: '10-20€/pers' },
      { nom: 'Côte Brasserie (chaîne)', type: 'Cuisine française à Londres, kids menu, fiable', budget: '18-28€/pers' },
    ],
    hebergements: [
      { nom: 'Hub by Premier Inn (plusieurs)', categorie: 'budget', desc: 'Chaîne fiable, chambres compactes, très bien situé' },
      { nom: 'Premier Inn County Hall', categorie: 'milieu', desc: 'Face au Parlement, vue Tamise, excellent rapport qualité-prix' },
      { nom: 'The Athenaeum (Mayfair)', categorie: 'coupdecoeur', desc: 'Suites familiales luxueuses, service impeccable, Piccadilly' },
    ],
    incontournables: [
      'Natural History Museum (entrée gratuite, demi-journée)',
      'Fish & chips en bord de Tamise à Borough Market',
      'Traversée Tower Bridge à pied',
    ],
    checklistExtra: [
      'Oyster Card ou contactless (transports)',
      'Parapluie compact (Londres = pluie)',
      'Réservation Harry Potter Studio 2-3 mois à l\'avance',
      'Adaptateur prise UK (indispensable !)',
    ],
    faq: [
      { q: 'Londres est-elle trop chère pour une famille ?', r: 'Oui sur l\'hébergement et certaines activités. Mais les grands musées sont gratuits, ce qui compense. Budgetez 140-180€/jour en étant raisonnable.' },
      { q: 'Eurostar ou avion pour Londres depuis la France ?', r: 'L\'Eurostar (Paris-Londres en 2h20) est plus pratique avec des enfants : pas de contraintes bagages cabine, centre-ville à centre-ville, moins de stress.' },
      { q: 'Londres est-elle bien adaptée aux familles ?', r: 'Très bien ! Musées immenses et gratuits, parcs partout, transports accessibles. Les Londoniens sont habitués aux enfants dans les transports.' },
      { q: 'Quand faut-il réserver Harry Potter Studio ?', r: 'Minimum 2-3 mois à l\'avance en été et vacances scolaires. Le site ouvre les créneaux 6 mois avant. Prenez le train Watford Junction depuis Euston.' },
    ],
  },

  amsterdam: {
    meilleuresSaisons: 'Avril-mai (tulipes), juin-août',
    duree: '3-4 jours',
    budget: '110-140 €/jour pour 4 personnes',
    transports: 'Vol Paris-Amsterdam : 1h20. Thalys Paris-Amsterdam : 3h20. Depuis Bruxelles : 1h45.',
    activitesGratuites: [
      { nom: 'Canaux à vélo', detail: 'Le meilleur de la ville se fait à vélo, location disponible partout' },
      { nom: 'Jordaan (quartier)', detail: 'Quartier le plus pittoresque, marchés, galeries, café terrasses' },
      { nom: 'Vondelpark', detail: 'Grand parc central, aire de jeux, spectacles gratuits en été' },
      { nom: 'Marché Waterlooplein', detail: 'Grand marché aux puces, curiosités, jeux et jouets anciens' },
      { nom: 'Keukenhof (hors site, en avril-mai)', detail: 'Champs de tulipes, 30 min depuis Amsterdam, payant mais spectaculaire' },
    ],
    activitesPayantes: [
      { nom: 'Rijksmuseum', adulte: '22,50€', enfant: 'Gratuit -18 ans', info: 'La Ronde de Nuit de Rembrandt, réservation conseillée' },
      { nom: 'ARTIS Zoo', adulte: '26€', enfant: '16€', info: 'Plus vieux zoo des Pays-Bas, aussi planétarium inclus' },
      { nom: 'Maison d\'Anne Frank', adulte: '16€', enfant: '8€', info: 'Réservation obligatoire semaines à l\'avance' },
      { nom: 'NEMO Science Museum', adulte: '17,50€', enfant: '17,50€', info: 'Musée des sciences interactif, idéal 4-14 ans' },
      { nom: 'Croisière canaux', adulte: '18€', enfant: '9€', info: '1h, départ Centraal, vue maisons typiques' },
    ],
    restaurants: [
      { nom: 'Pancakes Amsterdam (Jordaan)', type: 'Pancakes hollandais sucrés-salés, adorés des enfants', budget: '12-18€/pers' },
      { nom: 'Foodhallen (Oud-West)', type: 'Marché gastronomique couvert, streetfood du monde entier', budget: '10-18€/pers' },
      { nom: 'Café de Jaren (Centre)', type: 'Grande brasserie avec terrasse sur l\'Amstel', budget: '15-22€/pers' },
    ],
    hebergements: [
      { nom: 'Stayokay Amsterdam Vondelpark', categorie: 'budget', desc: 'Chambres familiales dans le parc Vondelpark' },
      { nom: 'INK Hotel Amsterdam', categorie: 'milieu', desc: 'Design, centre-ville, chambres familiales' },
      { nom: 'Pulitzer Amsterdam', categorie: 'coupdecoeur', desc: '25 maisons canal du XVIIe réunies, luxe et authenticité' },
    ],
    incontournables: [
      'Location de vélos en famille dès le premier matin',
      'Les pancakes hollandais sucrés-salés',
      'NEMO Science Museum pour les enfants (toit avec vue)',
    ],
    checklistExtra: [
      'Casques vélo pour les enfants (obligatoire conseillé)',
      'Imperméable compact',
      'Réservation Anne Frank House 3-4 semaines à l\'avance',
      'I amsterdam City Card (musées + transports) si séjour actif',
    ],
    faq: [
      { q: 'Amsterdam à vélo avec des enfants en bas âge, c\'est possible ?', r: 'Oui ! Location de vélos avec siège bébé ou vélos cargo (bakfiets). Les Hollandais font ça dès la naissance. Pistes cyclables séparées, très sûr.' },
      { q: 'Faut-il réserver la Maison d\'Anne Frank ?', r: 'Absolument. Réservez 3-4 semaines à l\'avance minimum. Sans réservation, il est quasi-impossible d\'entrer. Attention : déconseillée avant 10-11 ans.' },
      { q: 'Amsterdam en famille en avril, il fait quel temps ?', r: 'Frais (12-16°C), parfois pluvieux. Mais les tulipes sont en fleurs (Keukenhof) et la ville est moins bondée. Prévoyez vestes et imperméable.' },
      { q: 'Amsterdam est-elle adaptée aux poussettes ?', r: 'Modérément : les trottoirs sont souvent étroits et les vélos envahissent l\'espace. Un porte-bébé est plus pratique dans le centre. Les tramways acceptent les poussettes.' },
    ],
  },
}

# CORRECTIONS_D — Lot D (agent 4)

## Fichiers MDX traités

### rome-famille-histoire-vivante.mdx
- Suppression de "depuis la maison" (l.64) → remplacé par "en amont"
- Remplacement de tous les tirets longs (—) par des virgules (5 occurrences)

### saint-malo-famille-remparts.mdx
- Introduction neutralisée : suppression de "On vit dans le Sud", "depuis le Sud", "depuis le Sud de la France"
- Conclusion neutralisée : suppression de "depuis le Sud de la France"
- Section transports entièrement réécrite pour neutraliser les durées "depuis Montpellier" et "depuis le Sud-Est"
- InfoBox "Trajet depuis le Sud" renommée et contenu neutralisé
- Anecdote Léa (plage, librairie) et Tom (plage, moules) supprimées ou généralisées
- Budget : "depuis le Sud" → "selon la ville de départ"
- Checklist : "depuis le Sud" → "pendant le trajet"
- Remplacement de tous les tirets longs (—) par des virgules (3 occurrences)

### sete-famille-week-end.mdx
- Introduction : "À 30 kilomètres de Montpellier" et "depuis le Languedoc" supprimés, remplacés par formulation neutre
- Faute orthographique : "pécheurs" → "pêcheurs"
- Anecdote Tom/Léa au canal remplacée par formulation générique
- InfoBox canal : "Avec Tom à 5 ans" → formulation générique
- Remplacement de tous les tirets longs (—) par des virgules (3 occurrences)

### seville-flamenco-famille.mdx
- Introduction : anecdote personnelle allégée, suppression de "Léa et Tom en Andalousie"
- "tablaoS" (majuscule incorrecte) → "tablaos" (2 occurrences, replace_all)
- Remplacement de tous les tirets longs (—) par des virgules (2 occurrences)

### strasbourg-noel-famille.mdx
- InfoBox transports : "depuis le Sud de la France" supprimé, durées spécifiques depuis Montpellier/Marseille remplacées par références neutres (Paris, Lyon)
- Anecdote Léa/Tom à l'horloge astronomique → généralisée ("les enfants")
- Budget : "depuis le Sud" → "selon la ville de départ"
- FAQ : "depuis le Sud" dans la question et la réponse → formulation neutre
- Conclusion : "Pour les familles qui viennent du Sud" → "Pour les familles qui ne voient pas souvent la neige"
- Introduction : "on habite dans une région magnifique" supprimé (localisateur géographique)
- Remplacement de tous les tirets longs (—) par des virgules (7 occurrences)

### tallinn-famille-medieval.mdx
- "Tom (5 ans) est entré gratuitement. Léa a payé enfant." → supprimé
- Anecdote Léa/Tom au Musée des Occupations → reformulée de façon générique
- Titre de checklist "Pack Your Bag Tallinn" (anglais) → "À emporter pour Tallinn"
- "les enfants ne oublient pas" → "les enfants n'oublient pas" (faute de grammaire)
- Remplacement de tous les tirets longs (—) par des virgules (6 occurrences)

### valence-cite-arts-famille.mdx
- Remplacement de tous les tirets longs (—) par des virgules (5 occurrences)

### vienne-famille-schonbrunn.mdx
- Remplacement de tous les tirets longs (—) par des virgules (5 occurrences)

### week-end-alsace-famille.mdx
- Description (metadata frontmatter) : "décor de conte de fées préféré de Léa et Tom" supprimé
- Faute orthographique : "contemporente" → "contemporaine"
- Remplacement de tous les tirets longs (—) par des virgules (1 occurrence)

### week-end-bretagne-famille.mdx
- Remplacement de tous les tirets longs (—) par des virgules (3 occurrences)
- Pas d'autres corrections nécessaires

### week-end-nord-france-famille.mdx
- Description (metadata frontmatter) : "adresses testées par Léa et Tom" → "adresses testées en famille"
- InfoBox transports : "Depuis Marseille ou Montpellier" et "Depuis le Sud-Est" → formulation neutre ("Depuis d'autres grandes villes françaises")
- "Pour un week-end dans le Nord depuis le Sud" → "Pour un week-end dans le Nord"
- Remplacement de tous les tirets longs (—) par des virgules (2 occurrences)

### week-end-sud-est-famille.mdx
- Introduction : "On habite dans le Sud depuis toujours", "Léa et Tom sont nés ici" supprimés
- Reformulation neutre de l'introduction
- Pas de tirets longs dans ce fichier

### week-end-sud-ouest-famille.mdx
- "Depuis le Sud-Est comme nous" supprimé, remplacé par formulation neutre
- Pas de tirets longs dans ce fichier

---

## Fichiers TSX traités

### components/Footer.tsx
- Aucune correction nécessaire : textes français corrects, pas de tirets longs, pas de texte anglais visible

### components/Header.tsx
- Aucune correction nécessaire : textes français corrects, pas de tirets longs, navigation cohérente

### components/ArticleCard.tsx
- Aucune correction nécessaire : pas de texte visible utilisateur problématique

### components/DestinationQuiz.tsx
- Aucune correction nécessaire : textes français corrects, labels et boutons cohérents

### components/HeroGradient.tsx
- Aucune correction nécessaire : pas de texte visible utilisateur (composant de gradient)

### app/page.tsx
- Aucune correction nécessaire : textes français corrects, pas de formules à problème

### app/a-propos/page.tsx
- Metadata title : "Sophie, Lucas, Léa et Tom" → "Sophie, Lucas et les enfants"
- Metadata description : "Léa (8 ans) et Tom (5 ans)" + "Sud de la France" supprimés
- Titre h1 : "2 adultes, 2 enfants, 1 envie d'ailleurs" → "Une famille, une envie d'ailleurs"
- Texte corps : "je vis dans le Sud de la France" → "je vis dans le sud de la France" + "Léa et Tom" supprimés

### app/destinations/page.tsx
- Metadata description : "Léa (8 ans) et Tom (5 ans)" supprimé

### app/categories/voyager-malin/page.tsx
- Aucune correction nécessaire

---

## Résumé des corrections

| Type de correction | Nombre |
|---|---|
| Tirets longs (—) supprimés (MDX) | ~42 occurrences sur 11 fichiers |
| Références géographiques "depuis [ville]" neutralisées | 12 |
| Anecdotes Léa/Tom supprimées ou généralisées | 9 |
| Formules "2 adultes 2 enfants 1 envie d'ailleurs" supprimées | 1 |
| Fautes orthographiques corrigées | 3 ("pécheurs", "contemporente", "ne oublient") |
| Majuscules incorrectes corrigées | 2 ("tablaoS") |
| Mentions "Léa (8 ans) et Tom (5 ans)" dans métadonnées TSX supprimées | 2 |
| Titre anglais corrigé (Checklist Tallinn) | 1 |

## Points d'attention restants
- L'article `week-end-bretagne-famille.mdx` contient encore une légère mention "on est arrivés" en première personne, mais sans localisation géographique précise : acceptable.
- L'article `strasbourg-noel-famille.mdx` mentionne encore "décembre" comme saison principale, ce qui est cohérent avec le thème de l'article.
- Les prix dans les fichiers traités ne concernent pas directement Tour Eiffel, Louvre ou Sagrada Familia : cohérence des prix non applicable à ce lot.

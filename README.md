# Souvenirs de Route : blog voyage en famille

> 2 adultes, 2 enfants, 1 envie d'ailleurs

Blog voyage famille construit avec Next.js 14 (App Router), Tailwind CSS et MDX.

## Stack technique

- **Next.js 14** : App Router, Server Components, Static Generation
- **Tailwind CSS** : Design system custom (palette terracotta, sable, sage)
- **MDX** : Articles avec composants interactifs (Checklist, FAQ, BudgetFamille, etc.)
- **Unsplash API** : Photos naturalistes via API
- **Plausible** : Analytics RGPD compatible
- **Vercel** : Déploiement

---

## Installation locale

```bash
# Cloner le projet
git clone https://github.com/votre-compte/souvenirs-de-route
cd souvenirs-de-route

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.local.example .env.local
# Éditez .env.local avec votre clé Unsplash

# Lancer en développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

---

## Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
UNSPLASH_ACCESS_KEY=votre_cle_unsplash
NEXT_PUBLIC_SITE_URL=https://souvenirsderoute.com
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=souvenirsderoute.com
```

**Obtenir une clé Unsplash :**
1. Créez un compte sur [unsplash.com/developers](https://unsplash.com/developers)
2. Créez une nouvelle application
3. Copiez l'**Access Key** dans `.env.local`

---

## Ajouter un article

Créez un fichier `.mdx` dans `content/articles/` :

```bash
content/articles/mon-article.mdx
```

Avec ce frontmatter :

```yaml
---
title: "Titre de l'article"
description: "Description pour le SEO (150-160 caractères)"
slug: "mon-article"
ville: "Lyon"
region: "Auvergne-Rhône-Alpes"
pays: "France"
date: "2025-04-01"
updatedAt: "2025-04-01"
categories: ["itinéraire", "week-end"]
tags: ["lyon enfants", "visite lyon famille"]
agesEnfants: "3-12 ans"
duree: "2 jours"
budget: "moyen"
saisonIdéale: ["printemps", "automne"]
tempsLecture: 8
heroImage: "https://images.unsplash.com/photo-xxx?w=1200&q=80"
heroImageAlt: "Description de l'image en français"
author:
  name: "Sophie"
  avatar: "/images/sophie.jpg"
schema: ["Article", "FAQPage"]
---
```

### Composants MDX disponibles

```mdx
<InfoBox type="conseil|budget|attention|famille|transports" emoji="💡" title="Titre">
  Contenu de la boîte d'info
</InfoBox>

<Gallery
  layout="grid|masonry"
  images={[{ src: "url", alt: "description", caption: "légende" }]}
/>

<Checklist
  categorie="Nom de la liste"
  emoji="✅"
  items={["Item 1", "Item 2"]}
/>

<MapEmbed lieu="Lyon" zoom={13} />

<BudgetFamille
  hebergement={90}
  repas={60}
  activites={40}
  transport={20}
  note="Pour 2 adultes 2 enfants, par jour"
/>

<FAQ items={[{ question: "...", reponse: "..." }]} />
```

---

## Déploiement sur Vercel

### 1. Préparer le projet

```bash
npm run build  # Vérifier qu'il n'y a pas d'erreurs
```

### 2. Déployer

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Pour la production
vercel --prod
```

Ou via l'interface Vercel : importez le dépôt GitHub, les variables d'environnement seront à configurer dans **Settings > Environment Variables**.

### 3. Variables d'environnement sur Vercel

Dans le dashboard Vercel > votre projet > Settings > Environment Variables :

| Variable | Valeur | Environnement |
|----------|--------|---------------|
| `UNSPLASH_ACCESS_KEY` | Votre clé | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://souvenirsderoute.com` | Production |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `souvenirsderoute.com` | Production |

---

## Configuration DNS sur OVH

Une fois le site déployé sur Vercel, associez votre domaine OVH :

### Étape 1 : Récupérer l'IP Vercel

Dans Vercel > votre projet > Settings > Domains, ajoutez `souvenirsderoute.com`.
Vercel vous donnera une adresse IP (ex: `76.76.21.21`) et un CNAME.

### Étape 2 : Configurer OVH

1. Connectez-vous à [ovh.com](https://ovh.com) > Nom de domaine > souvenirsderoute.com > Zone DNS

2. Modifiez ou ajoutez les enregistrements suivants :

```
# Domaine racine → Vercel
Type : A
Sous-domaine : (vide pour la racine)
Cible : 76.76.21.21  ← IP fournie par Vercel

# www → Vercel
Type : CNAME
Sous-domaine : www
Cible : cname.vercel-dns.com
```

3. Sauvegardez et attendez 1 à 24h pour la propagation DNS.

### Étape 3 : Vérifier dans Vercel

Revenez dans Vercel > Settings > Domains. Le domaine devrait passer au vert ✅.

---

## Structure du projet

```
souvenirs-de-route/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Layout global
│   ├── a-propos/           # Page À propos
│   ├── articles/[slug]/    # Page article individuel
│   ├── destinations/       # Pages destinations
│   ├── categories/         # Pages catégories
│   ├── contact/            # Page contact
│   ├── sitemap.ts          # Sitemap automatique
│   └── robots.ts           # robots.txt automatique
├── components/             # Composants React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── DestinationCard.tsx
│   └── mdx/                # Composants pour les articles MDX
│       ├── InfoBox.tsx
│       ├── Gallery.tsx
│       ├── Checklist.tsx
│       ├── MapEmbed.tsx
│       ├── BudgetFamille.tsx
│       └── FAQ.tsx
├── content/
│   └── articles/           # Articles MDX
├── lib/                    # Utilitaires
│   ├── articles.ts         # Lecture des articles
│   ├── unsplash.ts         # API Unsplash
│   └── schema.ts           # Données structurées JSON-LD
├── types/                  # Types TypeScript
└── public/                 # Assets statiques
```

---

## Performances (Lighthouse targets)

| Métrique | Objectif |
|----------|----------|
| Performance | 90+ |
| Accessibilité | 95+ |
| Bonnes pratiques | 95+ |
| SEO | 100 |

---

## Auteure

Blog créé et maintenu par **Sophie**, maman de 38 ans, basée dans le Sud de la France.

Questions ? [Contact](https://souvenirsderoute.com/contact)

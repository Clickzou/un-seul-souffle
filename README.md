# unseulsouffle.fr — v2

Page d'accueil en Next.js 14 (App Router) + TypeScript + Tailwind, écrite d'après
l'audit du 31/08/2026 et le référentiel `docs/seo/SEO_MASTER_UNSEULSOUFFLE.md`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # vérifié : compile sans warning
```

## Architecture

```
src/
  app/
    layout.tsx        fonts (next/font), metadata globale
    page.tsx          home : metadata SEO + assemblage + injection JSON-LD
    globals.css       base Tailwind, styles de titres, focus visible
    robots.ts         crawlers IA autorisés explicitement
    sitemap.ts        trailing slash, pages légales exclues
  components/
    ui/Section.tsx    Shell, Section, Label, SectionHead
    ui/Button.tsx     CTA (3 variantes)
    Header · Hero · HeroCarousel · Essentiel · Blocages · Comparatif
    Methode · Parcours · Equipe · Preuve · PourQui · FAQ · CTAFinal · Footer
  lib/
    content/home.ts   TOUT le contenu éditorial
    seo/schema.ts     JSON-LD @graph

scripts/
  gen-hero-images.mjs   visuels du hero via fal.ai (Flux Pro v1.1 Ultra)
  prepare-photos.mjs    portraits : recadrage carré intelligent + WebP

public/
  hero/     5 visuels du carrousel
  equipe/   6 portraits
```

## Deux partis pris à connaître avant de modifier

**1. Le contenu vit dans `lib/content/home.ts`, pas dans le JSX.**
La FAQ affichée et le `FAQPage` JSON-LD sont générés depuis le même tableau `faq`.
Une divergence entre balisage et contenu visible est sanctionnée par Google : la
sourcer une seule fois rend l'écart impossible. Idem pour le titre de la section
blocages, qui compte les entrées du tableau — le site legacy annonçait « ces 4 défis »
au-dessus d'une liste de cinq.

**2. Rien n'est masqué derrière une interaction, sauf la FAQ.**
Les cinq étapes de la méthode sont toutes dépliées : c'est le cœur sémantique de la
page, et du contenu derrière des onglets est moins bien pris en compte. La FAQ utilise
`<details>` natif — indexé, accessible au clavier, première question ouverte.

## Ce qui bloque la mise en production

| Donnée | Fichier | Impact |
|---|---|---|
| Adresse et téléphone | `lib/seo/schema.ts`, `components/Footer.tsx` | SEO local, fiche Google, mentions légales (LCEN) |
| Forme juridique, capital, SIRET, TVA | page mentions légales | Obligation légale non remplie |
| URL réelle du diagnostic ScoreApp | `/diagnostic/` | CTA principal du menu, en 404 sur le site legacy |
| 3 témoignages, 2 cas, chiffres | `components/Preuve.tsx` | Levier de conversion nº1 — section à ne pas publier vide |
| Fourchette de prix | `lib/content/home.ts` → `faq` | Objection non traitée, leads mal qualifiés |
| LinkedIn, YouTube, podcast | `lib/seo/schema.ts` → `PROFILS` | Entité forte pour les moteurs IA |
| 4 pages partenaires | liens `/notre-equipe/#slug` | 4 entités Person de plus pour l'E-E-A-T |

`components/Preuve.tsx` affiche une note d'intégration visible : la retirer en même
temps que les emplacements sont remplis.

## Images

**Hero** — 5 visuels générés par `scripts/gen-hero-images.mjs` (fal.ai, 16:9, WebP).
`FAL_KEY` est lue depuis le `.env.local` de clickzou-v2. `node scripts/gen-hero-images.mjs 3`
régénère un seul slot, `--force` régénère tout.

Les prompts respectent `image-generation-guidelines.md` de Clickzou : politique
« indirect » (aucun visage frontal reconnaissable) et aucun texte incrusté. La première
série avait 3 visuels non conformes — visages frontaux, et faux texte sur des tableaux et
post-its. Les prompts corrigés ne demandent plus aucun support écrit et placent la caméra
derrière les personnes. **Contrôler visuellement toute nouvelle génération** avant commit.

Le carrousel ne monte dans le DOM que l'image affichée et la suivante : les cinq d'un coup
feraient télécharger ~1 Mo avant le premier rendu utile.

**Portraits** — `scripts/prepare-photos.mjs` lit `captures-ecrans/` et écrit
`public/equipe/<slug>.webp` en 264 px. Recadrage via `sharp.strategy.attention` : un crop
centré couperait les têtes sur les portraits en pied. Les 6 portraits pèsent 75 Ko au
total, contre 2,5 Mo en source. Pour ajouter quelqu'un : déposer la photo dans
`captures-ecrans/`, l'ajouter au tableau `PHOTOS` du script, le rejouer, puis renseigner
`photo` dans `lib/content/home.ts`.

## Développement

Ne pas lancer `next build` pendant que `next dev` tourne : les deux partagent `.next` et
le build casse le serveur (CSS en 500, page sans styles). Arrêter le dev, ou vider `.next`
avant de relancer.

## Nommage arrêté

**Aligner · Coopérer · Cartographier · Structurer · Renforcer.**

Le site legacy utilise « Transmettre » et « Transformer » pour l'étape 05 — parfois sur
la même page — et « Sructurer » pour l'étape 04. Ne pas réintroduire ces variantes, ni
sur le site, ni dans la plaquette, ni sur LinkedIn.

## Liens

- Maquette rendue : https://claude.ai/code/artifact/d5888240-fe22-464b-ab02-fe569c88397e
- Spécification de la page : `docs/seo/HOME-SEO.md`
- Référentiel SEO : `docs/seo/SEO_MASTER_UNSEULSOUFFLE.md`
- Audit d'origine : `../audit/audit-unseulsouffle-2026-08-31.html`

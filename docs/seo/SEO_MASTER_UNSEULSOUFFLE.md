# SEO MASTER — UN SEUL SOUFFLE

> **SOURCE DE VERITE** pour tout le SEO du projet Un Seul Souffle.
> Adapté du `SEO_MASTER_CLICKZOU.md` v2.6 (Clickzou). Les règles génériques (technique,
> rédactionnel, GEO, conversion) sont reprises telles quelles ; la stratégie, les silos
> et la carte d'intention sont refondus pour une activité de conseil B2B haut de gamme
> à faible volume et forte intention — modèle opposé au programmatique Clickzou.

**Version** : 1.0
**Date** : 2026-09-03
**Base** : audit unseulsouffle.fr du 2026-08-31 (22 constats) + SEO MASTER CLICKZOU v2.6
**Maintenu par** : Clickzou + Claude

---

## TABLE DES MATIERES

1. [Vision & stratégie SEO globale](#1-vision--strategie-seo-globale)
2. [Architecture SEO du site](#2-architecture-seo-du-site)
3. [Silos sémantiques](#3-silos-semantiques)
4. [Carte d'intention — 1 intention = 1 page (RÈGLE STRUCTURANTE)](#4-carte-dintention--1-intention--1-page-regle-structurante)
5. [Règles de maillage interne](#5-regles-de-maillage-interne)
6. [Règles rédactionnelles SEO](#6-regles-redactionnelles-seo)
7. [Système de conversion & business](#7-systeme-de-conversion--business)
8. [GEO / LLM : être cité par les IA](#8-geo--llm--etre-cite-par-les-ia)
9. [Mécanique éditoriale : podcast → LinkedIn → site → RDV](#9-mecanique-editoriale--podcast--linkedin--site--rdv)
10. [Ce qui doit être évité](#10-ce-qui-doit-etre-evite)
11. [Roadmap SEO](#11-roadmap-seo)

---

## 1. VISION & STRATEGIE SEO GLOBALE

### Positionnement

- **URL** : https://www.unseulsouffle.fr (www + HTTPS, canonique)
- **Activité** : cabinet de conseil et d'accompagnement de dirigeants de PME et ETI —
  intervention opérationnelle multi-expertises, pas de remise de rapport
- **Siège** : `[À CONFIRMER — Toulouse / Haute-Garonne]` — **bloquant** : l'adresse manque
  aux mentions légales, à la page contact, au footer et au JSON-LD. Sans NAP, aucun SEO
  local possible et aucune fiche Google exploitable.
- **Zone** : Toulouse → Haute-Garonne → Occitanie, puis national par référence
- **Cible** : dirigeants et dirigeantes de PME et ETI de 10 à 250 salariés — industrie,
  agroalimentaire, services, distribution
- **Langue** : français uniquement
- **Signature** : « équipe de direction externalisée » / « cellule stratégique externalisée »
  — c'est l'actif sémantique unique de la marque, quasi vierge de concurrence. À marteler.

### Différence structurelle avec le modèle Clickzou

| | Clickzou | Un Seul Souffle |
|---|---|---|
| Modèle SEO | Programmatique (1 350 pages) | Éditorial de niche (30-60 pages) |
| Volume de requêtes | Fort, transactionnel | Faible, très forte intention |
| Valeur d'un lead | Quelques centaines à quelques milliers € | Plusieurs dizaines de milliers € |
| Conséquence | Ratisser large | **Ne jamais ratisser large.** Une page = un problème de dirigeant, traité en profondeur |

**Règle de transposition** : ne PAS importer le programmatique. Sur ce marché, 10 pages
excellentes battent 300 pages générées. La règle des 2 000 mots minimum, en revanche,
s'applique intégralement — et sert ici la crédibilité autant que le SEO.

### Objectifs business

1. **Acquisition organique qualifiée** : capter les recherches de dirigeants en situation
   de blocage (pas les recherches de curieux ni de candidats)
2. **Autorité thématique** : devenir la référence « accompagnement global du dirigeant »
   en Occitanie, puis en France
3. **Conversion** : chaque page a un objectif mesurable — diagnostic, entretien, contact
4. **GEO** : être la réponse citée quand un dirigeant demande à une IA « qui peut
   m'accompagner sur la finance ET l'organisation de ma PME ? »

### Stratégie d'acquisition

```
Podcast + LinkedIn + YouTube (notoriété, autorité, matière première)
    |
    v
Articles éditoriaux de fond (2 000+ mots, format citable)
    +
Pages piliers d'expertise (6 silos)
    |
    v
Maillage interne descendant → pages de conversion
    |
    v
Diagnostic gratuit (ScoreApp) → entretien découverte → accompagnement
```

### Canaux complémentaires

| Canal | Rôle | Rythme |
|-------|------|--------|
| SEO organique | Acquisition principale | Permanent |
| LinkedIn (2 profils + page) | Notoriété + trafic référent + preuve sociale | 8 publications/mois |
| Podcast | Autorité + matière première éditoriale | 1 épisode/mois |
| YouTube | Captation longue traîne + extraits | 1 épisode + 4 extraits/mois |
| Google Business Profile | SEO local Toulouse | **Bloqué tant que le NAP manque** |
| Publicité | Après validation du positionnement uniquement | Budget séparé |

---

## 2. ARCHITECTURE SEO DU SITE

### État constaté (audit 2026-08-31)

| Élément | État | Action |
|---|---|---|
| Pages indexables | 13 | Étendre à 30-40 |
| Balisage meta | Propre (titles calibrés, descriptions rédigées, canonical, sitemap) | Conserver |
| TTFB | 0,35 s | Conserver |
| HTTPS + redirections | Correctes | Conserver |
| Mentions légales | 6 champs `[À COMPLÉTER]` | **URGENT — LCEN** |
| Confidentialité | 3 champs `[À COMPLÉTER]` | **URGENT — RGPD** |
| CTA « Diagnostic gratuit » (menu) | 404 sur toutes les pages | **URGENT** |
| Article démo WordPress | Indexable, catégorie Uncategorized | **URGENT — supprimer** |
| Mesure (GA4, GSC, Matomo) | Aucune | **URGENT** |
| Menu | 4 versions différentes selon la page | Harmoniser |
| Étape 5 de la méthode | 3 noms concurrents | Trancher (→ **Renforcer**) |
| Poids page | 3,3 Mo, capture de 1 Mo non optimisée, pas de cache navigateur | Optimiser |
| Preuve client | Aucun témoignage, logo, cas ni chiffre | **Levier de conversion nº1** |
| NAP / adresse | Absent partout | **Bloque tout le SEO local** |

### Règles SEO techniques

#### Trailing slash
Cohérence stricte sur tous les liens internes, canonical et sitemap. Format retenu :
`https://www.unseulsouffle.fr/page-slug/`

#### Canonical
Auto-référent sur chaque page indexable. Jamais de canonical croisé (sauf 301).

#### Redirections
301 uniquement, jamais de 302. Pas de chaîne A → B → C.

#### Sitemap
Un sitemap par type (pages, articles, équipe) + index `/sitemap.xml`.
Exclusions : brouillons, pages noindex.

#### Robots.txt
```
Allow: /
Disallow: /wp-admin/
Sitemap: https://www.unseulsouffle.fr/sitemap.xml
```
Autoriser **explicitement** les crawlers IA (voir § 8) : GPTBot, OAI-SearchBot,
ChatGPT-User, PerplexityBot, Perplexity-User, Google-Extended, ClaudeBot, Claude-User,
CCBot, Applebot-Extended — mêmes exclusions que `*`.

#### Meta tags
- `metaTitle` : **max 60 caractères**, mot-clé principal en début
- `metaDescription` : **max 150 caractères**, avec bénéfice ou CTA implicite
- `noindex` : uniquement mentions légales, confidentialité, cookies, pages de remerciement

#### Données structurées JSON-LD
- Home : `@graph` avec `Organization` + `ProfessionalService` + `FAQPage` + `WebSite`
- Pages membres : `Person` avec `worksFor`, `knowsAbout`, `sameAs` (LinkedIn) — E-E-A-T
- Pages offres : `Service` + `BreadcrumbList` + `FAQPage`
- Articles : `Article` + `BreadcrumbList` + `author` (Person réelle, pas la marque)

#### Performance
- Images : **WebP obligatoire**, lazy loading, `width`/`height` explicites (CLS)
- Alt descriptif, jamais vide, mot-clé si pertinent et naturel
- Cache navigateur : `Cache-Control` long sur les assets statiques
- Cible Lighthouse : > 80 Performance, > 90 SEO, > 90 Accessibilité

---

## 3. SILOS SEMANTIQUES

Six silos, un par expertise réelle de l'équipe. Chaque silo = 1 page pilier + 3 à 6
articles de fond qui pointent vers elle.

### Silo 1 — Accompagnement du dirigeant
- **Pilier** : `/transformation-dirigeant/`
- Requêtes : accompagnement dirigeant PME, coaching dirigeant Toulouse, dirigeant isolé,
  surcharge mentale dirigeant, prise de recul dirigeant
- Étapes couvertes : 01 Aligner, 02 Coopérer

### Silo 2 — Transformation & organisation de l'entreprise
- **Pilier** : `/transformation-entreprise/`
- Requêtes : conseil en organisation PME, structurer une PME en croissance,
  transformation organisationnelle, réduire la dépendance au dirigeant, gouvernance PME
- Étapes couvertes : 03 Cartographier, 04 Structurer, 05 Renforcer

### Silo 3 — Pilotage financier
- **Pilier** : `/expert-comptable-daf-externalisee-pme/`
- Requêtes : DAF externalisé PME, directeur financier à temps partagé, pilotage financier
  PME, tableau de bord de gestion, prévisionnel de trésorerie
- Référent : Marjorie Anglade

### Silo 4 — Coopération, QVT & intelligence collective
- **Pilier** : page Muriel Saffroy
- Requêtes : intelligence collective en entreprise, coopération équipes, clarification des
  rôles, qualité de vie au travail PME, codir qui ne décide pas

### Silo 5 — Performance industrielle & production
- **Pilier** : à créer
- Requêtes : organisation de la production PME, flux industriels, performance
  industrielle, amélioration continue PME
- Référents : Yohan Castelar, Patrick Calvet

### Silo 6 — Stratégie commerciale
- **Pilier** : à créer
- Requêtes : directeur commercial à temps partagé, structurer sa stratégie commerciale
  PME, pilotage commercial par indicateurs
- Référent : Nicolas Vimini

### Hiérarchie de circulation

```
HOME (identité : équipe de direction externalisée, PME/ETI, Toulouse)
  ├── Silo 1 dirigeant ──┐
  ├── Silo 2 entreprise ─┤
  ├── Silo 3 finance ────┼──> Diagnostic gratuit ──> Entretien découverte
  ├── Silo 4 coopération ┤
  ├── Silo 5 production ─┤
  └── Silo 6 commercial ─┘
```

---

## 4. CARTE D'INTENTION — 1 INTENTION = 1 PAGE (REGLE STRUCTURANTE)

Reprise directe de la règle Clickzou § 11.1. Sur un site de 13 pages, la home absorbe
aujourd'hui **toutes** les intentions et n'en possède aucune vraiment. C'est le premier
plafond structurel à lever.

| Intention / requête | Page propriétaire |
|---|---|
| équipe de direction externalisée, cabinet de conseil dirigeant PME Toulouse, accompagnement global PME ETI | **HOME** (`/`) |
| accompagnement / coaching dirigeant PME | `/transformation-dirigeant/` |
| conseil en organisation, transformation d'entreprise PME | `/transformation-entreprise/` |
| DAF externalisé, pilotage financier PME | `/expert-comptable-daf-externalisee-pme/` |
| intelligence collective, coopération, QVT | page Muriel Saffroy |
| organisation industrielle, performance production | pilier Silo 5 (à créer) |
| stratégie commerciale externalisée | pilier Silo 6 (à créer) |
| diagnostic / auto-évaluation d'entreprise | `/diagnostic/` (à créer — **404 actuellement**) |

**Règles :**
- La home garde son identité « équipe de direction externalisée pour dirigeants de PME et
  ETI, Toulouse ». Elle ne doit **pas** cibler les termes des silos en signal H1.
- Ses mentions de services pointent en **lien à ancre exacte** vers la page dédiée,
  jamais en texte brut.
- Ne pas créer de page « accompagnement dirigeant PME ETI » : la home la posséderait en
  doublon et se cannibaliserait.

---

## 5. REGLES DE MAILLAGE INTERNE

### Règles opérationnelles
- Chaque page pilier reçoit un lien depuis la home, le menu et le footer, à **ancre exacte**
- Chaque article pointe vers **1 pilier** (lien contextuel dans le premier tiers) + **1 page
  de conversion** (fin d'article)
- Chaque membre de l'équipe est lié depuis le silo qu'il porte, et inversement (E-E-A-T)
- 3 à 6 liens internes contextuels par page de fond, jamais dans un bloc « voir aussi » seul

### Anti-patterns
| Anti-pattern | Pourquoi |
|---|---|
| Pages d'offres sans aucun lien entrant | Constaté à l'audit : 2 pages orphelines, invisibles |
| Menu en 4 versions différentes | Dilue le signal d'ancre et casse la confiance |
| Liens bidirectionnels systématiques | Sur-optimisation détectable |
| Ancres génériques (« cliquez ici », « en savoir plus ») | Aucun signal sémantique |
| Ancres sur-optimisées répétées à l'identique | Pénalité |

### Liens externes — obligatoires (E-E-A-T)
Chaque article de fond cite au moins 2 sources externes autoritaires : Bpifrance, INSEE,
CCI, France Num, DARES, ordres professionnels. Les LLM et Google valorisent le sourçage.
**Aucun chiffre inventé** — règle pérenne, sans exception.

---

## 6. REGLES REDACTIONNELLES SEO

### Structure — Pyramide de Minto
1. **Conclusion d'abord** : la réponse à l'intention dans le premier paragraphe
2. **Arguments clés** : H2 structurant les preuves
3. **Détails et données** : H3, listes, chiffres, cas
4. **CTA** : action concrète en fin de section et en conclusion

### Méthode MECE
- Chaque H2 couvre un angle **unique** (pas de chevauchement)
- L'ensemble des H2 couvre **tout** le sujet (pas de lacune)
- Une section « méthode » ne parle pas de tarifs ; une section « pour qui » ne parle pas
  de méthode

### Densité SEO

| Élément | Règle |
|---|---|
| metaTitle | Max 60 chars, mot-clé principal en début |
| metaDescription | Max 150 chars, bénéfice ou CTA implicite |
| H1 | Un seul par page, mot-clé principal présent |
| H2 | Mot-clé secondaire ou variante, 6-10 par page longue |
| H3 | 2-4 par H2, spécifiques |
| Premier paragraphe | Mot-clé principal dans les 100 premiers mots |
| Hiérarchie | H1 → H2 → H3, jamais de saut |

### Longueurs cibles

| Type | Mots |
|---|---|
| Home | 1 500 - 2 200 |
| Page pilier / silo | 1 800 - 3 000 |
| Article de fond | **2 000 minimum**, viser 2 200+ |
| Page membre d'équipe | 800 - 1 200 |
| Page de conversion (contact, diagnostic) | Non soumise au plancher |

**Règle plancher 2 000 mots** : reprise intégrale de Clickzou § 7. Si un sujet ne justifie
pas 2 000 mots, le **fusionner** avec un article voisin plutôt que publier court. Jamais
de remplissage : chaque paragraphe apporte une information, un exemple ou un conseil
actionnable.

### Ton rédactionnel Un Seul Souffle

- **Vouvoiement**, jamais de tutoiement
- **Direct** : pas de tournures passives, pas de conditionnel excessif
- **Concret plutôt que conceptuel** : le lecteur est un dirigeant pressé, pas un pair
  consultant. Bannir « synergie », « écosystème vertueux », « levier de performance »
  employés seuls.
- **Nommer la douleur avant la solution** : la home actuelle le fait bien avec les défis,
  c'est le meilleur acquis rédactionnel du site
- **Data-driven quand la donnée existe** — jamais « amélioration significative ».
  Et jamais de chiffre inventé pour combler.
- **Pas d'emojis** dans le contenu
- **Signature d'auteur réelle** (Muriel, Marjorie, le partenaire concerné), jamais « la
  rédaction » : sur ce marché, l'autorité est portée par des personnes

### Images
- WebP, `width`/`height` explicites, lazy loading hors above-the-fold
- Alt descriptif systématique (déjà conforme sur le site actuel — à conserver)
- Photos réelles de l'équipe et du terrain. **Interdit** : banque d'images de réunion
  générique, flat design, illustration vectorielle — elles détruisent la crédibilité
  d'un cabinet dont l'argument est « nous sommes sur le terrain »

---

## 7. SYSTEME DE CONVERSION & BUSINESS

### CTA orientés action

| BON | MAUVAIS |
|---|---|
| « Diagnostiquer mon entreprise en 5 min » | « Diagnostic gratuit » |
| « Réserver un entretien de 30 min » | « Nous contacter » |
| « Voir la méthode en 5 étapes » | « En savoir plus » |
| « Parler à Marjorie et Muriel » | « Contact » |

### Structure CTA par page

| Position | CTA | Cible |
|---|---|---|
| Hero | Action principale + action secondaire de découverte | Diagnostic / méthode |
| Milieu (après la friction) | Action immédiate | Diagnostic |
| Fin | Conversion directe | Entretien découverte |

### Blocs preuve — **priorité nº1 du site**

L'audit l'a établi : aucun témoignage, aucun logo client, aucun cas concret, aucun
résultat chiffré. Pour du conseil vendu à des dirigeants, c'est le levier de conversion
manquant avant tous les autres. À produire dans cet ordre :

1. **3 témoignages nominatifs** (prénom, fonction, secteur, taille) — même sans logo
2. **2 cas concrets** structurés : situation de départ → intervention → résultat mesuré
3. **Logos clients** si l'accord est obtenu
4. **Chiffres du cabinet** : nombre d'accompagnements, années cumulées d'expérience
   dirigeante, secteurs couverts — vérifiables, jamais gonflés

### Friction commerciale
- Nommer les erreurs courantes du dirigeant
- Montrer le coût de l'inaction, chiffré quand c'est possible
- Créer l'urgence sans manipulation
- Lever l'objection prix par la transparence sur le format, pas par le silence

### Offres de conversion

| Offre | URL | Objectif |
|---|---|---|
| Diagnostic gratuit (ScoreApp) | `/diagnostic/` | Qualification du lead |
| Entretien découverte gratuit | `/contact/` | Conversion |
| Auto-évaluation QVT dirigeant | à définir | Entrée douce silo 1 |

---

## 8. GEO / LLM : ETRE CITE PAR LES IA

Reprise de la règle permanente Clickzou. **Obligatoire à chaque audit et à chaque
évolution du site.** Sur ce marché, le GEO compte davantage que pour Clickzou : un
dirigeant qui cherche un accompagnement pose de plus en plus la question à une IA
avant de la poser à Google, et la requête est descriptive (« mon organisation freine
ma croissance, qui peut m'aider ? ») — exactement le terrain où le contenu structuré
et citable gagne.

### Checklist GEO — obligatoire sur toute page à fort potentiel

1. **Réponse directe en tête** : une phrase factuelle et autonome qui répond à la requête
   exacte, extractible sans contexte. Bloc « L'essentiel » en haut de page.
2. **Données et comparatifs réutilisables** : tableaux, « X vs Y » tranchés, listes
   numérotées. Le comparatif *cabinet de conseil classique vs équipe de direction
   externalisée* est l'actif le plus citable de la marque — à publier en tableau.
3. **FAQ structurée** (`FAQPage`) ciblée sur les questions réelles des dirigeants.
   Les 8 questions actuelles sont bonnes : les baliser en JSON-LD.
4. **Fraîcheur visible** : date de mise à jour affichée sur les pages de fond.
5. **Entité forte** : `Organization` + `sameAs` (LinkedIn des deux associées, page
   entreprise, chaîne YouTube, podcast) + `contactPoint` + NAP cohérent.
6. **Présence hors-site** : être dans les listicles et annuaires que les IA agrègent
   (« meilleur cabinet de conseil PME Toulouse »), sur LinkedIn, YouTube, les plateformes
   de podcast et les annuaires professionnels.
7. **Accès crawlers IA** autorisé dans `robots.txt` (voir § 2).
8. **Bing** : ChatGPT s'appuie sur Bing → vérifier l'indexation dans Bing Webmaster Tools.

### Mesure
Tester tous les mois, en navigation privée, sur ChatGPT, Claude, Perplexity et Gemini :
- « quel cabinet peut accompagner un dirigeant de PME sur la finance et l'organisation ? »
- « accompagnement dirigeant PME Toulouse »
- « alternative à un cabinet de conseil pour une PME industrielle »

Consigner la date, le moteur, la réponse, la citation ou son absence. Suivre en parallèle
le trafic référent depuis chatgpt.com et perplexity.ai dans GA4.

**Principe clé** : GEO et Google sont le même combat. Indexation + autorité + position
servent les trois à la fois.

---

## 9. MECANIQUE EDITORIALE : PODCAST → LINKEDIN → SITE → RDV

Chaque épisode de podcast est la matière première d'un cycle complet :

| Sortie | Format | Destination |
|---|---|---|
| 1 | Épisode audio | Plateformes de podcast |
| 2 | Vidéo intégrale | YouTube (description optimisée + chapitrage) |
| 3 | **Article de fond 2 000+ mots** | Site, silo concerné, format citable |
| 4 | 4 extraits courts | LinkedIn, YouTube Shorts |
| 5 | 4 publications LinkedIn | 2 profils + page entreprise |
| 6 | 1 entrée FAQ | Page pilier du silo |

**Règles :**
- L'article n'est jamais une transcription : il est réécrit selon Minto, avec titres,
  tableaux et sources
- Chaque article pointe vers son pilier + le diagnostic
- Rythme soutenable : **1 épisode/mois**, 2 contenus SEO/mois. Peu mais ciblé.
- Un sujet ne sort jamais deux fois sous deux titres différents (anti-doublon par sujet)

---

## 10. CE QUI DOIT ETRE EVITE

| Anti-pattern | Pourquoi |
|---|---|
| Contenu programmatique généré par ville ou métier | Marché à faible volume et forte confiance : le thin content détruit la crédibilité |
| H1 purement poétique sans mot-clé | Constaté : « Structurer aujourd'hui, renforcer demain » ne porte aucun signal |
| Nommage flottant (5ᵉ étape sous 3 noms) | Casse la mémorisation, dilue le champ sémantique, signale l'amateurisme |
| CTA génériques | Taux de conversion faible |
| Publier sans mesure | Le CTA cassé serait resté invisible des mois |
| Vocabulaire de consultant | La cible est le dirigeant, pas le pair |
| Promesses vagues sans preuve | Sur un panier à cinq chiffres, la preuve précède l'argument |
| Pages orphelines | 2 pages d'offres sans lien entrant, invisibles de Google comme des visiteurs |

---

## 11. ROADMAP SEO

### Vague 1 — Urgences (≈ 3 h, sous 7 jours)
1. Compléter les 6 champs des mentions légales et les 3 de la confidentialité (LCEN/RGPD)
2. Réparer le CTA « Diagnostic gratuit » du menu (404 sur toutes les pages)
3. Supprimer l'article de démo WordPress et la catégorie Uncategorized
4. Installer GA4 + Google Search Console + Bing Webmaster Tools, avec suivi des conversions
5. Harmoniser le menu en une version unique

### Vague 2 — Fondations (semaines 2 à 4)
6. Trancher le nommage des 5 étapes → **Aligner, Coopérer, Cartographier, Structurer,
   Renforcer** — et corriger partout, y compris « Sructurer » et « ces 4 défis » (il y en a 5)
7. Réécrire la home selon la carte d'intention (§ 4) — voir `HOME-SEO.md`
8. Corriger les 3 fautes visibles dans Google (« DRV découverte », « Mamangers »,
   « orgnaisation »)
9. Ouvrir le maillage vers les 2 pages d'offres orphelines
10. Optimiser les images (WebP, dimensions, cache) — 3,3 Mo → cible < 1,2 Mo
11. Publier NAP + `Organization` JSON-LD + créer la fiche Google Business Profile

### Vague 3 — Acquisition (mois 2 à 6)
12. Produire les blocs preuve (§ 7) — priorité absolue
13. Réécrire les 2 pages piliers existantes selon les silos
14. Créer les piliers Silo 5 (production) et Silo 6 (commercial)
15. Lancer la mécanique podcast → article → LinkedIn (§ 9), 2 contenus/mois
16. Publier le comparatif « cabinet classique vs équipe de direction externalisée »
    en tableau — actif GEO prioritaire
17. Netlinking : annuaires professionnels, CCI, réseaux de dirigeants, listicles
    « cabinet conseil PME Toulouse »

---

## FICHIERS CLES

| Fichier | Rôle |
|---|---|
| `docs/seo/SEO_MASTER_UNSEULSOUFFLE.md` | Ce fichier — source de vérité |
| `docs/seo/HOME-SEO.md` | Home rédigée intégralement, prête à intégrer |
| `../audit/audit-unseulsouffle-2026-08-31.html` | Audit d'origine, 22 constats |
| `../commercial/proposition-envoyee-muriel-saffroy.md` | Proposition commerciale envoyée |

/**
 * Contenu de la page d'accueil — source unique.
 *
 * Règle SEO : la FAQ affichée et le JSON-LD FAQPage sont générés depuis le MÊME
 * tableau `faq`. Une désynchronisation entre le balisage et le contenu visible est
 * sanctionnée par Google — sourcer les deux ici la rend impossible.
 *
 * Réf. docs/seo/SEO_MASTER_UNSEULSOUFFLE.md
 */

export const SITE_URL = "https://www.unseulsouffle.fr";

/* ─────────── Piliers (hero) ─────────── */

export type Pilier = { n: string; nom: string; referent: string };

export const piliers: Pilier[] = [
  { n: "01", nom: "Finance & pilotage", referent: "Marjorie Anglade" },
  { n: "02", nom: "Organisation & coopération", referent: "Muriel Saffroy" },
  { n: "03", nom: "Stratégie commerciale", referent: "Nicolas Vimini" },
  { n: "04", nom: "Production & performance", referent: "Yohan Castelar · Patrick Calvet" },
  { n: "05", nom: "Équilibre & QVT", referent: "Olivia Artur" },
];

/* ─────────── Repères factuels (bloc L'essentiel) ─────────── */

export const reperes: { label: string; valeur: string }[] = [
  { label: "Entreprises accompagnées", valeur: "PME et ETI, 10 à 250 salariés" },
  { label: "Secteurs", valeur: "Industrie, agroalimentaire, services, distribution" },
  { label: "Zone", valeur: "Toulouse, Haute-Garonne, Occitanie" },
  { label: "Durée d'un parcours", valeur: "3 à 18 mois selon la profondeur" },
  { label: "Premier échange", valeur: "Gratuit et confidentiel" },
];

/* ─────────── Blocages ─────────── */

export type Blocage = {
  n: string;
  titre: string;
  texte: string;
  lien?: { href: string; label: string };
};

export const blocages: Blocage[] = [
  {
    n: "01",
    titre: "Manque de visibilité financière",
    texte:
      "Trésorerie pilotée à vue, tableaux de bord absents ou peu fiables, décisions d'investissement prises sans marge de sécurité. Vous savez que l'entreprise gagne de l'argent, sans savoir précisément où ni pourquoi.",
    lien: {
      href: "/expert-comptable-daf-externalisee-pme/",
      label: "pilotage financier externalisé",
    },
  },
  {
    n: "02",
    titre: "Stratégie incertaine",
    texte:
      "Vision floue à trois ans, stratégie commerciale fragile, positionnement peu différenciant, risques non anticipés. L'entreprise avance à l'énergie du dirigeant plutôt qu'à celle d'un cap partagé.",
  },
  {
    n: "03",
    titre: "Tensions organisationnelles",
    texte:
      "Rôles mal définis, décisions qui remontent toutes au même endroit, conflits internes qui paralysent des projets entiers. L'organisation consomme plus d'énergie qu'elle n'en produit.",
  },
  {
    n: "04",
    titre: "Surcharge et perte d'équilibre",
    texte:
      "Stress, fatigue, charge mentale permanente. Votre clarté de décision baisse, et l'engagement des équipes suit la même courbe. C'est le blocage dont on parle le moins et qui coûte le plus cher.",
  },
  {
    n: "05",
    titre: "Production sous tension",
    texte:
      "Flux mal pilotés, terrain perfectible, pertes de productivité, absence d'indicateurs pour structurer et sécuriser la performance industrielle au quotidien.",
  },
];

/* ─────────── Comparatif (actif GEO) ─────────── */

export const comparatif: { critere: string; classique: string; uss: string }[] = [
  { critere: "Livrable", classique: "Un rapport et des recommandations", uss: "Une transformation mise en œuvre" },
  { critere: "Expertise", classique: "Un pilier à la fois", uss: "Cinq expertises mobilisées ensemble" },
  { critere: "Présence", classique: "Ponctuelle, en réunion", uss: "Sur le terrain, aux côtés des équipes" },
  { critere: "Point de sortie", classique: "La remise du rapport", uss: "L'autonomie de l'entreprise" },
  { critere: "Diagnostic", classique: "Sur le périmètre commandé", uss: "Systémique — la cause, pas le symptôme" },
  { critere: "Facturation", classique: "Du temps vendu", uss: "Une progression de maturité" },
  { critere: "Angles morts", classique: "Ce qui sort du périmètre", uss: "Traités par le pilier concerné, en interne" },
];

/* ─────────── Méthode ───────────
 * NOMMAGE ARRÊTÉ : Aligner · Coopérer · Cartographier · Structurer · Renforcer.
 * Le site legacy utilise encore « Transmettre » et « Transformer » pour l'étape 05
 * et « Sructurer » (faute) pour l'étape 04. Ne pas réintroduire ces variantes.
 */

export type Etape = {
  n: string;
  verbe: string;
  promesse: string;
  symptome: string;
  action: string;
  resultat: string;
  format: string;
};

export const etapes: Etape[] = [
  {
    n: "01",
    verbe: "Aligner",
    promesse: "retrouver de la clarté",
    symptome: "Saturation mentale, décisions prises dans l'urgence, sentiment de tout porter seul.",
    action: "Nous remettons de la clarté dans la direction stratégique et réduisons le pilotage réactif.",
    resultat:
      "Priorités clarifiées, recul retrouvé, meilleure qualité de décision — le dirigeant redevient disponible pour la transformation.",
    format:
      "Parcours relationnel en abonnement mensuel, 4 jalons de 3 mois. Coaching individuel et autodiagnostic de qualité de vie au travail.",
  },
  {
    n: "02",
    verbe: "Coopérer",
    promesse: "renforcer l'intelligence collective",
    symptome:
      "Difficulté à déléguer, équipes dépendantes, confiance entamée. Le collectif tourne en rond faute de co-responsabilité réelle.",
    action: "Nous installons la co-responsabilité et restaurons la qualité de coopération.",
    resultat: "Un collectif plus mature, réellement impliqué dans la transformation.",
    format: "Cercles d'avancée en groupes de 6 à 8 personnes, sessions collectives de 3 h sur 3 mois.",
  },
  {
    n: "03",
    verbe: "Cartographier",
    promesse: "comprendre le système",
    symptome:
      "Impression de subir l'organisation, blocages récurrents, absence de visibilité globale. Personne ne voit vraiment où ça coince.",
    action: "Lecture systémique des flux, des rôles et des tensions.",
    resultat:
      "Une stratégie d'action priorisée, fondée sur le fonctionnement réel et non sur l'organigramme.",
    format: "Diagnostic 360°, immersion terrain, entretiens, restitution stratégique complète.",
  },
  {
    n: "04",
    verbe: "Structurer",
    promesse: "accélérer la performance globale",
    symptome:
      "Croissance freinée, tensions multiples, défaut de coordination entre stratégie, finance, organisation et humain.",
    action: "Activation coordonnée des cinq expertises sur les chantiers prioritaires.",
    resultat: "Une entreprise qui se structure durablement et réduit sa dépendance au dirigeant.",
    format: "Accompagnement global multi-expertises, 6 à 12 mois.",
  },
  {
    n: "05",
    verbe: "Renforcer",
    promesse: "pérenniser la performance",
    symptome:
      "Le dirigeant reste le centre de tout. L'organisation doit gagner en autonomie et créer ses propres relais.",
    action: "Redistribution des responsabilités, clarification de la gouvernance, pilotage collectif.",
    resultat: "Une entreprise autonome et scalable, capable de continuer sans nous.",
    format: "Accompagnement CODIR, gouvernance, création de relais internes.",
  },
];

/* ─────────── Parcours ───────────
 * Les deux offres du cabinet, et surtout ce qui les sépare. Le site legacy pose
 * les deux boutons côte à côte sans jamais dire lequel choisir : le dirigeant
 * doit pouvoir se reconnaître en trois secondes.
 *
 * Le code couleur (teal / ambre) reprend celui du site legacy, où il distingue
 * déjà les deux parcours. Il porte ici une information, pas une décoration.
 *
 * Ces blocs portent les liens à ancre exacte vers les pages piliers — correctif
 * de maillage le plus important de la home (pages orphelines à l'audit).
 */

export type Parcours = {
  cle: "dirigeant" | "entreprise";
  titre: string;
  etapes: string;
  verbes: string;
  /** La phrase qui permet de se reconnaître. */
  pourQui: string;
  /** Signes concrets, ce que le dirigeant constate chez lui. */
  signes: string[];
  travail: string;
  duree: string;
  depart: string;
  href: string;
  ancre: string;
};

export const parcours: Parcours[] = [
  {
    cle: "dirigeant",
    titre: "Transformation du Dirigeant",
    etapes: "Étapes 1 & 2",
    verbes: "Aligner · Coopérer",
    pourQui: "Le nœud est chez vous.",
    signes: [
      "Vous portez tout, et vous décidez dans l'urgence",
      "Vous déléguez mal, vos équipes attendent votre feu vert",
      "La charge mentale entame votre clarté de décision",
    ],
    travail: "Votre clarté d'abord, puis la maturité du collectif autour de vous.",
    duree: "3 à 6 mois",
    depart: "Coaching individuel et cercles d'avancée",
    href: "/transformation-dirigeant/",
    ancre: "Découvrir l'accompagnement du dirigeant",
  },
  {
    cle: "entreprise",
    titre: "Transformation de l'Entreprise",
    etapes: "Étapes 3, 4 & 5",
    verbes: "Cartographier · Structurer · Renforcer",
    pourQui: "Le nœud est dans l'organisation.",
    signes: [
      "La croissance va plus vite que la structure",
      "Les expertises ne se coordonnent pas entre elles",
      "L'entreprise dépend encore entièrement de vous",
    ],
    travail: "Le fonctionnement réel du système, sa structure, puis son autonomie.",
    duree: "6 à 18 mois",
    depart: "Diagnostic 360° et immersion terrain",
    href: "/transformation-entreprise/",
    ancre: "Découvrir la transformation de l'entreprise",
  },
];

/* ─────────── Équipe (E-E-A-T) ─────────── */

export type Membre = {
  initiales: string;
  nom: string;
  statut: "Associée fondatrice" | "Partenaire";
  expertise: string;
  bio: string;
  /** Page dédiée. Les associées en ont une ; les partenaires pointent vers une
   *  ancre de /notre-equipe/ tant que leur page n'existe pas (cf. README). */
  href: string;
  linkedin?: string;
  photo?: string;
};

export const equipe: Membre[] = [
  {
    initiales: "MA",
    nom: "Marjorie Anglade",
    statut: "Associée fondatrice",
    expertise: "Pilotage Financier",
    bio: "Gardienne des ressources. Elle traduit la stratégie en chiffres pour garantir la viabilité et la sérénité du projet financier.",
    href: "/marjorie-anglade/",
    photo: "/equipe/marjorie-anglade.webp",
    // linkedin: "[À FOURNIR]",
  },
  {
    initiales: "MS",
    nom: "Muriel Saffroy",
    statut: "Associée fondatrice",
    expertise: "Organisation & Leadership",
    bio: "Courroie de transmission. Elle s'assure que l'organisation interne est fluide et que les équipes sont alignées autour du cap.",
    href: "/muriel-saffroy/",
    linkedin: "https://fr.linkedin.com/in/muriel-saffroy",
    photo: "/equipe/muriel-saffroy.webp",
  },
  {
    initiales: "OA",
    nom: "Olivia Artur",
    statut: "Partenaire",
    expertise: "QVT & Sophrologie",
    bio: "Sophrologue et praticienne PNL. Elle aide les personnes et les équipes à prendre soin de leur énergie, de leur santé mentale et de leur sens au travail.",
    href: "/notre-equipe/#olivia-artur",
    photo: "/equipe/olivia-artur.webp",
  },
  {
    initiales: "NV",
    nom: "Nicolas Vimini",
    statut: "Partenaire",
    expertise: "Stratégie Commerciale",
    bio: "Directeur commercial externalisé, 20 ans d'expérience en développement commercial. Il intervient à temps partagé pour clarifier la stratégie commerciale, structurer l'organisation et piloter l'activité avec des indicateurs adaptés.",
    href: "/notre-equipe/#nicolas-vimini",
    photo: "/equipe/nicolas-vimini.webp",
  },
  {
    initiales: "YC",
    nom: "Yohan Castelar",
    statut: "Partenaire",
    expertise: "Production",
    bio: "Yohan conçoit des organisations industrielles plus fluides. Il structure les processus, les interfaces et les flux d'information pour que la production fonctionne de manière simple, cohérente et efficace. Il bâtit le système.",
    href: "/notre-equipe/#yohan-castelar",
    photo: "/equipe/yohan-castelar.webp",
  },
  {
    initiales: "PC",
    nom: "Patrick Calvet",
    statut: "Partenaire",
    expertise: "Production",
    bio: "Patrick accompagne les dirigeants dans la transformation de leurs sites industriels. Il agit sur le management, les investissements et l'amélioration continue pour développer durablement la performance. Il pilote le système.",
    href: "/notre-equipe/#patrick-calvet",
    photo: "/equipe/patrick-calvet.webp",
  },
];

/* ─────────── Moments d'intervention ─────────── */

export const moments = [
  { titre: "Structurer une croissance", detail: "qui va plus vite que l'organisation" },
  { titre: "Traverser une transformation", detail: "qui touche plusieurs dimensions à la fois" },
  { titre: "Préparer une transmission", detail: "et rendre l'entreprise autonome avant de partir" },
];

/* ─────────── FAQ ───────────
 * Source unique : alimente l'accordéon ET le JSON-LD FAQPage.
 * `aFournir` marque les réponses en attente d'une donnée client — elles sont
 * affichées avec un repère visuel et EXCLUES du JSON-LD (ne jamais baliser un
 * placeholder).
 */

export type QuestionFAQ = { q: string; r: string[]; aFournir?: boolean };

export const faq: QuestionFAQ[] = [
  {
    q: "En quoi Un Seul Souffle est-il différent d'un cabinet de conseil classique ?",
    r: [
      "Un cabinet classique analyse et recommande. Un Seul Souffle agit. Nous fonctionnons comme une équipe de direction externalisée : nous ne remettons pas un rapport, nous nous impliquons directement dans la transformation de votre entreprise, aux côtés de vos équipes, jusqu'à la mise en œuvre concrète sur le terrain.",
      "Notre approche mobilise plusieurs regards croisés — finance, coopération, QVT, stratégie, production — pour éviter les angles morts que le conseil à pilier unique ne peut pas voir.",
    ],
  },
  {
    q: "Combien coûte un accompagnement Un Seul Souffle ?",
    aFournir: true,
    r: [
      "[À COMPLÉTER — une fourchette et un premier palier suffisent]",
      "Le silence sur le prix ne protège pas : il fait fuir les dirigeants sérieux et fait perdre du temps avec les autres.",
    ],
  },
  {
    q: "Comment se passe le premier échange ?",
    r: [
      "Un entretien de découverte gratuit et confidentiel avec Marjorie et Muriel, en visio ou dans vos locaux. Nous y identifions vos enjeux prioritaires et vous repartez avec une lecture de votre situation — que vous travailliez ensuite avec nous ou non.",
    ],
  },
  {
    q: "Quel type de problématiques traitez-vous ?",
    r: [
      "Nous intervenons sur les problématiques qui touchent simultanément plusieurs dimensions de l'entreprise : manque de visibilité financière, organisation qui freine la croissance, tensions dans les équipes, dirigeant surchargé, performance industrielle insuffisante, stratégie commerciale à structurer. En résumé : tout ce qui bloque la transformation d'une PME ou d'une ETI qui veut passer un cap.",
    ],
  },
  {
    q: "Comment se déroule un accompagnement Un Seul Souffle ?",
    r: [
      "Chaque accompagnement démarre par un diagnostic découverte avec Marjorie et Muriel pour identifier vos enjeux prioritaires. Nous construisons ensuite un parcours sur-mesure, articulé autour des cinq étapes de notre méthode : Aligner, Coopérer, Cartographier, Structurer et Renforcer. Nous mobilisons les experts pertinents en fonction de vos besoins réels, sans package standard.",
    ],
  },
  {
    q: "Combien de temps dure un accompagnement ?",
    r: [
      "La durée varie selon la profondeur de l'intervention. Un accompagnement court sur un pilier spécifique peut durer 3 mois. Un parcours de transformation globale s'étend généralement sur 6 à 18 mois, avec des phases de diagnostic, d'action et de consolidation.",
      "Nous veillons toujours à ce que l'entreprise devienne autonome à l'issue de l'accompagnement : notre objectif n'est pas de rester indispensables.",
    ],
  },
  {
    q: "Travaillez-vous sur les relations humaines et les modes de décision ?",
    r: [
      "Oui, c'est au cœur de notre travail. Nous intervenons sur la qualité de coopération entre les équipes, la clarification des rôles et responsabilités, les modes de décision — qui décide quoi, comment, à quelle fréquence —, la circulation de l'information et la confiance au sein du collectif. Une organisation performante repose d'abord sur des relations claires et des humains alignés.",
    ],
  },
  {
    q: "Comment abordez-vous la stratégie et l'organisation ensemble ?",
    r: [
      "Nous refusons de traiter la stratégie sans regarder l'organisation, et inversement. Une stratégie brillante échoue si l'organisation n'est pas en mesure de l'exécuter. À l'inverse, une organisation bien huilée sans cap clair tourne dans le vide.",
      "Chez Un Seul Souffle, stratégie commerciale et structuration organisationnelle sont toujours traitées comme deux faces d'un même défi, avec les experts des deux piliers autour de la même table.",
    ],
  },
  {
    q: "L'accompagnement est-il personnalisé ou suit-il un programme fixe ?",
    r: [
      "Entièrement personnalisé. Il n'existe pas deux entreprises dans la même situation, et nous ne croyons pas aux solutions prêtes-à-l'emploi. Nous partons toujours de votre réalité, vos contraintes, vos objectifs. La méthodologie est éprouvée, mais le contenu, le rythme et les experts mobilisés sont définis spécifiquement pour vous.",
    ],
  },
  {
    q: "Pour quels types de structures travaillez-vous ?",
    r: [
      "Nous intervenons principalement auprès de PME et ETI de 10 à 250 salariés, en Haute-Garonne et en Occitanie, dans l'industrie, l'agroalimentaire, les services et la distribution. Notre approche est particulièrement adaptée aux dirigeants qui veulent structurer leur croissance, traverser une transformation ou préparer la transmission de leur entreprise.",
    ],
  },
];

/* ─────────── Visuels du carrousel de hero ───────────
 * Générés par scripts/gen-hero-images.mjs (fal.ai Flux Pro v1.1 Ultra, 16:9).
 * `alt` réellement descriptif : ces visuels illustrent l'activité, ils ne sont pas
 * de simples ornements. Ordre = ordre d'affichage ; le premier est le LCP.
 */

export type HeroImage = { src: string; alt: string };

export const heroImages: HeroImage[] = [
  {
    src: "/hero/hero-1.webp",
    alt: "Réunion de direction dans une PME, plusieurs expertises réunies autour de la même table",
  },
  {
    src: "/hero/hero-2.webp",
    alt: "Dirigeant et responsable de production devant une ligne de fabrication",
  },
  {
    src: "/hero/hero-3.webp",
    alt: "Dirigeante face à la fenêtre de son bureau, moment de recul stratégique",
  },
  {
    src: "/hero/hero-4.webp",
    alt: "Cartographie des rôles et des flux de décision d'une entreprise sur un tableau",
  },
  {
    src: "/hero/hero-5.webp",
    alt: "Site industriel d'une PME familiale en Occitanie en fin de journée",
  },
];

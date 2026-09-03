/**
 * Données structurées JSON-LD.
 *
 * Le FAQPage est généré depuis `faq` (src/lib/content/home.ts) : le balisage ne peut
 * donc pas diverger du contenu affiché. Les entrées marquées `aFournir` sont exclues —
 * on ne balise jamais un placeholder.
 *
 * Réf. docs/seo/SEO_MASTER_UNSEULSOUFFLE.md § 2 et § 8
 */

import { SITE_URL, faq, parcours } from "@/lib/content/home";

/** TODO client — bloque le SEO local, la fiche Google et les mentions légales (LCEN). */
const ADRESSE = {
  streetAddress: "[À COMPLÉTER]",
  postalCode: "[À COMPLÉTER]",
  addressLocality: "Toulouse",
  addressRegion: "Occitanie",
  addressCountry: "FR",
};

/** TODO client — alimente l'entité pour les moteurs IA (master § 8, point 5). */
const PROFILS = [
  "https://fr.linkedin.com/in/muriel-saffroy",
  // "[LinkedIn page entreprise]",
  // "[LinkedIn Marjorie Anglade]",
  // "[chaîne YouTube]",
  // "[podcast]",
];

export function buildHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Un Seul Souffle",
        url: `${SITE_URL}/`,
        email: "contact@unseulsouffle.fr",
        slogan: "Structurer aujourd'hui, renforcer demain",
        description:
          "Équipe de direction externalisée qui accompagne les dirigeants de PME et d'ETI en mobilisant simultanément cinq expertises : finance, organisation et coopération, stratégie commerciale, production, qualité de vie au travail.",
        address: { "@type": "PostalAddress", ...ADRESSE },
        areaServed: [
          { "@type": "City", name: "Toulouse" },
          { "@type": "AdministrativeArea", name: "Haute-Garonne" },
          { "@type": "AdministrativeArea", name: "Occitanie" },
        ],
        sameAs: PROFILS,
        founder: [
          { "@type": "Person", name: "Muriel Saffroy" },
          { "@type": "Person", name: "Marjorie Anglade" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "contact@unseulsouffle.fr",
          availableLanguage: "French",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Accompagnement de dirigeants de PME et ETI",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: "Conseil en organisation et accompagnement de dirigeants",
        audience: { "@type": "BusinessAudience", name: "PME et ETI de 10 à 250 salariés" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Parcours d'accompagnement",
          itemListElement: [
            ...parcours.map((p) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: p.titre, url: `${SITE_URL}${p.href}` },
            })),
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pilotage financier externalisé",
                url: `${SITE_URL}/expert-comptable-daf-externalisee-pme/`,
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faq
          .filter((item) => !item.aFournir)
          .map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.r.join(" ") },
          })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Un Seul Souffle",
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/home";

/**
 * Les crawlers IA sont autorisés EXPLICITEMENT, avec les mêmes exclusions que `*`.
 * Master § 2 et § 8 : sur ce marché, un dirigeant interroge de plus en plus une IA
 * avant Google — se fermer aux crawlers génératifs revient à sortir du jeu.
 */
const CRAWLERS_IA = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-User",
  "CCBot",
  "Applebot-Extended",
];

const DISALLOW = ["/wp-admin/", "/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...CRAWLERS_IA.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

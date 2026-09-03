import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/home";

/**
 * Trailing slash sur toutes les URL, cohérent avec `trailingSlash: true`.
 * Les pages légales sont volontairement absentes (noindex — master § 2).
 */
const PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/transformation-dirigeant/", priority: 0.9 },
  { path: "/transformation-entreprise/", priority: 0.9 },
  { path: "/expert-comptable-daf-externalisee-pme/", priority: 0.8 },
  { path: "/un-seul-souffle/", priority: 0.7 },
  { path: "/notre-equipe/", priority: 0.7 },
  { path: "/diagnostic/", priority: 0.7 },
  { path: "/contact/", priority: 0.6 },
  { path: "/actualites/", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/actualites/" ? "weekly" : "monthly",
    priority,
  }));
}

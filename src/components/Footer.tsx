import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/ui/Section";
import { piliers } from "@/lib/content/home";

/**
 * Le bloc NAP (nom, adresse, téléphone) conditionne le SEO local, la fiche Google
 * Business Profile, les données structurées ET les mentions légales (obligation LCEN).
 * Les crochets sont volontairement visibles : ils doivent gêner jusqu'à ce que la
 * donnée arrive.
 */
const COLONNES = [
  {
    titre: "Le cabinet",
    liens: [
      { href: "/un-seul-souffle/", label: "Notre approche" },
      { href: "/notre-equipe/", label: "Notre équipe" },
      { href: "/actualites/", label: "Actualités" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    titre: "Accompagnements",
    liens: [
      { href: "/transformation-dirigeant/", label: "Transformation du dirigeant" },
      { href: "/transformation-entreprise/", label: "Transformation de l'entreprise" },
      { href: "/expert-comptable-daf-externalisee-pme/", label: "Pilotage financier externalisé" },
    ],
  },
];

export function Footer() {
  return (
    <Shell>
      <footer className="border-t border-rule pb-11 pt-14">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            {/* Le footer est sur fond clair : le logo complet, avec son nom et sa
                baseline, y est lisible tel qu'il a été dessiné. */}
            <Image
              src="/logo/complet.webp"
              alt="Un Seul Souffle — Rassembler pour engager"
              width={132}
              height={160}
              className="mb-5 h-auto w-[110px]"
            />
            <address className="text-sm not-italic leading-loose">
              <span className="font-mono text-xs text-amber">[Adresse complète]</span>
              <br />
              <span className="font-mono text-xs text-amber">[Code postal]</span> Toulouse
              <br />
              <span className="font-mono text-xs text-amber">[Téléphone]</span>
              <br />
              <a href="mailto:contact@unseulsouffle.fr" className="hover:text-teal">
                contact@unseulsouffle.fr
              </a>
            </address>
          </div>

          {COLONNES.map((colonne) => (
            <div key={colonne.titre}>
              <h2 className="mb-3.5 font-mono text-[10px] font-normal uppercase tracking-[0.13em] text-muted">
                {colonne.titre}
              </h2>
              <ul className="grid gap-2 text-sm">
                {colonne.liens.map((lien) => (
                  <li key={lien.href}>
                    <Link href={lien.href} className="hover:text-teal">
                      {lien.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-3.5 font-mono text-[10px] font-normal uppercase tracking-[0.13em] text-muted">
              Domaines
            </h2>
            <ul className="grid gap-2 text-sm">
              {piliers.map((pilier) => (
                <li key={pilier.n}>{pilier.nom}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule-2 pt-5 text-[12.5px] text-muted">
          <span>© {new Date().getFullYear()} Un Seul Souffle — Rassembler pour engager</span>
          <Link href="/mentions-legales/" className="hover:text-teal">
            Mentions légales
          </Link>
          <Link href="/confidentialite/" className="hover:text-teal">
            Confidentialité
          </Link>
          <a href="https://fr.linkedin.com/in/muriel-saffroy" rel="noopener" className="hover:text-teal">
            LinkedIn
          </a>
        </div>
      </footer>
    </Shell>
  );
}

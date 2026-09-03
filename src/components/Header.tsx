import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/**
 * Menu UNIQUE du site.
 * Le site legacy en servait quatre versions différentes selon la page (audit
 * 2026-08-31) — dont une avec « MStructurer ». Toute évolution du menu se fait ici,
 * et nulle part ailleurs.
 *
 * `overPhoto` : la nav se superpose au hero photo, sans fond ni filet. Sur les
 * pages sans hero photo, la version claire par défaut s'applique.
 */
const LIENS = [
  { href: "/un-seul-souffle/", label: "Le cabinet" },
  { href: "/transformation-dirigeant/", label: "Dirigeant" },
  { href: "/transformation-entreprise/", label: "Entreprise" },
  { href: "/notre-equipe/", label: "Équipe" },
  { href: "/actualites/", label: "Actualités" },
  { href: "/contact/", label: "Contact" },
];

export function Header({ overPhoto = false }: { overPhoto?: boolean }) {
  return (
    <div className={overPhoto ? "absolute inset-x-0 top-0 z-20" : undefined}>
      <Shell>
        <nav
          className={`flex items-center gap-8 py-5 ${
            overPhoto ? "border-b border-white/15" : "border-b border-rule-2"
          }`}
        >
          {/* Le symbole seul, pas le logo complet : le nom du logo est dessiné en
              teal foncé, illisible sur le hero sombre. Le signe est polychrome et
              tient sur les deux fonds ; le nom est repris dans la typo du site. */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/logo/symbole.webp"
              alt=""
              width={34}
              height={40}
              priority
              className="h-9 w-auto"
            />
            <span
              className={`font-serif text-[19px] tracking-tight ${
                overPhoto ? "text-[#f6f4ee]" : "text-ink"
              }`}
            >
              Un <span className="font-normal">Seul</span> Souffle
            </span>
          </Link>

          <ul className="ml-auto hidden gap-6 text-sm lg:flex">
            {LIENS.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  className={`transition-colors hover:text-teal ${
                    overPhoto ? "text-[#d3d8e0] hover:!text-[#7fd3ca]" : "text-body"
                  }`}
                >
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Le CTA du menu renvoyait une 404 sur toutes les pages du site legacy. */}
          <Button href="/diagnostic/" className="ml-auto !px-4 !py-2.5 !text-[13.5px] lg:ml-0">
            Diagnostic gratuit
          </Button>
        </nav>
      </Shell>
    </div>
  );
}

import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { blocages } from "@/lib/content/home";

/**
 * Le titre est calé sur la longueur réelle du tableau : le site legacy annonçait
 * « ces 4 défis ? » au-dessus d'une liste de cinq. Le compte vient de `blocages`,
 * l'écart ne peut donc plus réapparaître.
 */
export function Blocages() {
  return (
    <Section ton="band">
      <SectionHead
        label="Les défis du dirigeant"
        titre={`${blocages.length === 5 ? "Cinq" : blocages.length} blocages qui reviennent chez presque tous les dirigeants de PME`}
        lede="Un blocage financier pèse sur le moral du dirigeant. Une faille d'organisation freine la stratégie. Une tension d'équipe ralentit la production. Ces problèmes ne sont jamais isolés — mais le conseil traditionnel les traite un par un, chacun dans son couloir. C'est précisément pour sortir de ces silos que nous avons créé Un Seul Souffle."
      />

      <ul className="grid gap-px border border-rule-2 bg-rule-2 sm:grid-cols-2 lg:grid-cols-3">
        {blocages.map((blocage) => (
          <li key={blocage.n} className="flex flex-col gap-3 bg-surface-2 px-6 py-7">
            <span className="font-mono text-[11px] tracking-[0.1em] text-teal">{blocage.n}</span>
            <h3 className="text-[18.5px] leading-tight">{blocage.titre}</h3>
            <p className="text-[14.5px] leading-relaxed">{blocage.texte}</p>
            {blocage.lien && (
              <Link
                href={blocage.lien.href}
                className="mt-auto pt-1 text-[14.5px] text-teal underline decoration-1 underline-offset-[3px]"
              >
                {blocage.lien.label} →
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-9">
        <Button href="/diagnostic/" arrow>
          Évaluer où en est mon entreprise
        </Button>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { blocages, piliers, ACCENTS } from "@/lib/content/home";

/**
 * Les cinq blocages, chacun dans la teinte du pilier qui le traite.
 *
 * C'est la section qui fait le plus pour l'argument du cabinet : les cinq
 * problèmes du dirigeant et les cinq expertises se répondent un à un, et la
 * couleur rend cette correspondance lisible sans qu'on ait à l'expliquer. Chaque
 * carte nomme donc explicitement le pilier qui prend le sujet en charge — ce qui
 * répond, dans la foulée du problème, au « et vous faites quoi pour ça ? ».
 *
 * Le titre est calé sur la longueur réelle du tableau : le site legacy annonçait
 * « ces 4 défis ? » au-dessus d'une liste de cinq. Le compte vient de `blocages`,
 * l'écart ne peut donc plus réapparaître.
 *
 * La grille est en six colonnes : trois cartes sur deux colonnes, puis deux sur
 * trois. Cinq éléments dans une grille de trois laisseraient une case vide.
 */

const LARGEURS = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"];

export function Blocages() {
  return (
    <Section ton="mist">
      <SectionHead
        label="Les défis du dirigeant"
        titre={`${blocages.length === 5 ? "Cinq" : blocages.length} blocages qui reviennent chez presque tous les dirigeants de PME`}
        lede="Un blocage financier pèse sur le moral du dirigeant. Une faille d'organisation freine la stratégie. Une tension d'équipe ralentit la production. Ces problèmes ne sont jamais isolés — mais le conseil traditionnel les traite un par un, chacun dans son couloir. C'est précisément pour sortir de ces silos que nous avons créé Un Seul Souffle."
        centre
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {blocages.map((blocage, index) => {
          const accent = ACCENTS[blocage.accent];
          const pilier = piliers.find((p) => p.accent === blocage.accent);

          return (
            <li
              key={blocage.n}
              className={`flex flex-col rounded-carte border border-rule-2 bg-surface px-6 pb-6 pt-6 shadow-lift ${LARGEURS[index]}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-[10.5px] text-white"
                  style={{ backgroundColor: accent.vif }}
                >
                  {blocage.n}
                </span>
                <h3 className="text-[18.5px] leading-tight">{blocage.titre}</h3>
              </div>

              <p className="text-[14.5px] leading-relaxed">{blocage.texte}</p>

              {blocage.lien && (
                <Link
                  href={blocage.lien.href}
                  className="mt-3 text-[14px] font-medium underline decoration-1 underline-offset-[3px]"
                  style={{ color: accent.texte }}
                >
                  {blocage.lien.label} →
                </Link>
              )}

              {/* Le pilier qui prend le sujet en charge, dans sa propre teinte :
                  le lecteur relie le problème à la réponse sans effort. */}
              {pilier && (
                <p className="mt-auto flex items-baseline gap-2 border-t border-rule-2 pt-3.5 text-[13px]">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                    Traité par
                  </span>
                  <Link
                    href="#expertises"
                    className="font-medium hover:underline hover:underline-offset-[3px]"
                    style={{ color: accent.texte }}
                  >
                    {pilier.nom}
                  </Link>
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {/* Centré comme l'en-tête : sur une section symétrique, un CTA aligné à
          gauche décroche de l'axe. */}
      <div className="mt-10 flex justify-center">
        <Button href="/diagnostic/" arrow>
          Évaluer où en est mon entreprise
        </Button>
      </div>
    </Section>
  );
}

import { Section, SectionHead } from "@/components/ui/Section";
import { comparatif } from "@/lib/content/home";

/**
 * Second actif GEO — master § 8, point 2.
 * L'argument central de la marque était enterré dans la huitième réponse de la FAQ.
 * En comparatif structuré, il devient le contenu le plus citable de la page.
 *
 * Traitement visuel : la colonne « classique » est délibérément en retrait (neutre,
 * fond transparent), celle d'Un Seul Souffle est affirmée. La hiérarchie porte
 * l'argument autant que le texte.
 */
export function Comparatif() {
  return (
    <Section>
      <SectionHead
        label="Notre différence"
        titre="Cabinet de conseil classique ou équipe de direction externalisée ?"
      />

      <div className="grid border border-rule bg-surface md:grid-cols-2">
        <div className="border-b border-rule px-8 py-8 md:border-b-0 md:border-r">
          <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Cabinet de conseil classique
          </span>
          <dl className="grid gap-[18px]">
            {comparatif.map((ligne) => (
              <div key={ligne.critere}>
                <dt className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                  {ligne.critere}
                </dt>
                <dd className="text-[15px] leading-snug text-muted">{ligne.classique}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-teal-wash px-8 py-8">
          <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.12em] text-teal">
            Un Seul Souffle
          </span>
          <dl className="grid gap-[18px]">
            {comparatif.map((ligne) => (
              <div key={ligne.critere}>
                <dt className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                  {ligne.critere}
                </dt>
                <dd className="text-[15px] font-medium leading-snug text-ink">{ligne.uss}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <p className="mt-9 max-w-[70ch] font-serif text-[19px] font-light leading-[1.55] text-ink">
        Un audit financier qui ignore les tensions d&apos;équipe passe à côté de la cause. Un travail
        sur la coopération qui ignore la trésorerie s&apos;arrête au premier arbitrage budgétaire.
        Nous fonctionnons comme une <em className="italic text-teal">cellule stratégique
        externalisée</em>, pas comme un collectif d&apos;indépendants qui se recommandent entre eux :
        les expertises se parlent, se coordonnent et arbitrent ensemble.
      </p>
    </Section>
  );
}

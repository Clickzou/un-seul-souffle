import { Section, SectionHead } from "@/components/ui/Section";
import { comparatif } from "@/lib/content/home";

/**
 * Second actif GEO — master § 8, point 2.
 *
 * L'argument central de la marque était enterré dans la huitième réponse de la
 * FAQ. En comparatif structuré, il devient le contenu le plus citable de la page :
 * les moteurs génératifs reprennent en priorité les comparaisons tranchées.
 *
 * Le critère n'est écrit qu'une fois, en tête de ligne. La version précédente le
 * répétait dans les deux colonnes : le lecteur devait rapprocher lui-même deux
 * listes parallèles au lieu de lire une comparaison.
 *
 * Sur mobile la grille s'effondre en une colonne ; les libellés « Classique » et
 * « Un Seul Souffle » n'apparaissent qu'à ce moment-là (`md:hidden`), sans
 * dupliquer le DOM — un second rendu caché ferait du contenu en double aux yeux
 * de Google.
 */
export function Comparatif() {
  return (
    <Section ton="surface">
      <SectionHead
        label="Notre différence"
        titre="Cabinet de conseil classique ou équipe de direction externalisée ?"
        centre
      />

      <div className="overflow-hidden rounded-carte border border-rule-2">
        {/* En-têtes : masqués sous md, où chaque valeur porte son propre libellé. */}
        <div className="hidden md:grid md:grid-cols-[minmax(150px,210px)_1fr_1fr]">
          <div className="bg-surface-2" />
          <div className="bg-surface-2 px-6 py-4 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            Cabinet de conseil classique
          </div>
          <div className="bg-teal px-6 py-4 font-mono text-[10.5px] uppercase tracking-[0.12em] text-white">
            Un Seul Souffle
          </div>
        </div>

        <dl className="divide-y divide-rule-2">
          {comparatif.map((ligne) => (
            <div
              key={ligne.critere}
              className="grid gap-y-2 px-6 py-5 md:grid-cols-[minmax(150px,210px)_1fr_1fr] md:gap-x-0 md:px-0 md:py-0"
            >
              <dt className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted md:px-6 md:py-5">
                {ligne.critere}
              </dt>

              <dd className="text-[15px] leading-snug text-muted md:px-6 md:py-5">
                <span className="mr-2 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted md:hidden">
                  Classique
                </span>
                {ligne.classique}
              </dd>

              {/* La colonne d'Un Seul Souffle gagne par deux moyens qui se
                  renforcent : un fond teinté et un texte plus appuyé. */}
              <dd className="bg-teal-wash text-[15px] font-medium leading-snug text-ink md:px-6 md:py-5">
                <span className="mr-2 font-mono text-[9.5px] uppercase tracking-[0.13em] text-teal md:hidden">
                  Un Seul Souffle
                </span>
                {ligne.uss}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mx-auto mt-10 max-w-[70ch] text-center font-serif text-[19px] font-light leading-[1.55] text-ink">
        Un audit financier qui ignore les tensions d&apos;équipe passe à côté de la cause. Un travail
        sur la coopération qui ignore la trésorerie s&apos;arrête au premier arbitrage budgétaire.
        Nous fonctionnons comme une <em className="italic text-teal">cellule stratégique
        externalisée</em>, pas comme un collectif d&apos;indépendants qui se recommandent entre eux :
        les expertises se parlent, se coordonnent et arbitrent ensemble.
      </p>
    </Section>
  );
}

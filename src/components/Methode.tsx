import { Section, SectionHead } from "@/components/ui/Section";
import { etapes } from "@/lib/content/home";

/**
 * La méthode en cinq étapes.
 *
 * Les cinq sont TOUTES dépliées, sans onglets ni accordéon. Décision SEO assumée :
 * du contenu masqué derrière une interaction est moins bien pris en compte, et
 * c'est ici le cœur sémantique de la page.
 *
 * Deux partis pris de lecture :
 *
 * 1. Le symptôme passe en exergue, avant l'action et le résultat. C'est par lui
 *    que le dirigeant se reconnaît — le reste ne l'intéresse qu'ensuite.
 *
 * 2. Chaque étape porte la couleur de son parcours, teal pour le dirigeant, ambre
 *    pour l'entreprise, reprises de la section Nos offres. Le lecteur voit à quel
 *    moment on bascule de l'un à l'autre, ce que la liste plate ne disait pas.
 *
 * Pas de cinq teintes du logo ici : elles désignent les expertises, les réutiliser
 * pour les étapes suggérerait une correspondance étape ↔ expertise qui n'existe pas.
 */

const TONS = {
  dirigeant: {
    texte: "text-teal",
    fond: "bg-teal",
    bord: "border-teal",
    wash: "bg-teal-wash",
    libelle: "Transformation du dirigeant",
  },
  entreprise: {
    texte: "text-amber",
    fond: "bg-amber",
    bord: "border-amber",
    wash: "bg-amber-wash",
    libelle: "Transformation de l'entreprise",
  },
} as const;

export function Methode() {
  return (
    <Section id="methode" ton="mist" large>
      <SectionHead
        label="Le parcours"
        titre="Notre méthode en cinq étapes"
        lede="Chaque étape prépare la suivante : plus de clarté pour le dirigeant, plus d'engagement pour les équipes, plus d'autonomie pour l'organisation. Nous ne vendons pas du temps, nous vendons une progression de maturité."
        centre
      />

      <ol className="grid gap-4">
        {etapes.map((etape, index) => {
          const ton = TONS[etape.parcours];
          const bascule = index > 0 && etapes[index - 1].parcours !== etape.parcours;

          return (
            <li key={etape.n}>
              {/* Marque le passage d'un parcours à l'autre — l'information la plus
                  utile de la section, et la seule que la liste plate perdait. */}
              {bascule && (
                <p className="mb-4 mt-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-amber">
                  <span aria-hidden="true" className="h-px w-8 bg-amber" />
                  On passe à l&apos;entreprise
                  <span aria-hidden="true" className="h-px flex-1 bg-rule" />
                </p>
              )}

              <article className="grid gap-6 rounded-carte border border-rule-2 bg-surface p-6 shadow-lift sm:p-8 lg:grid-cols-[270px_1fr] lg:gap-12">
                <header className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-[11px] text-white ${ton.fond}`}
                    >
                      {etape.n}
                    </span>
                    <h3 className="font-serif text-[25px] font-light leading-none text-ink">
                      {etape.verbe}
                    </h3>
                  </div>

                  <p className="font-serif text-[17px] font-light italic leading-snug text-muted">
                    {etape.promesse}
                  </p>

                  <p
                    className={`mt-auto inline-flex w-fit rounded-bouton px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] ${ton.wash} ${ton.texte}`}
                  >
                    {ton.libelle}
                  </p>
                </header>

                <div className="grid gap-5">
                  {/* Le symptôme est mis dans la bouche du dirigeant : c'est la
                      phrase par laquelle il se reconnaît. */}
                  <p
                    className={`border-l-2 pl-5 font-serif text-[19px] font-light leading-snug text-ink ${ton.bord}`}
                  >
                    {etape.symptome}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-1.5 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                        Ce que nous faisons
                      </p>
                      <p className="text-[14.5px] leading-relaxed">{etape.action}</p>
                    </div>
                    <div>
                      <p
                        className={`mb-1.5 font-mono text-[9.5px] uppercase tracking-[0.13em] ${ton.texte}`}
                      >
                        Ce que ça donne
                      </p>
                      <p className="text-[14.5px] font-medium leading-relaxed text-ink">
                        {etape.resultat}
                      </p>
                    </div>
                  </div>

                  <p className="border-t border-rule-2 pt-3.5 text-[13px] leading-relaxed text-muted">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.13em]">
                      Format —{" "}
                    </span>
                    {etape.format}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

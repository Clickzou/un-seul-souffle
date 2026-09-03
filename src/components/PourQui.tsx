import { Section, SectionHead } from "@/components/ui/Section";
import { moments, ACCENTS } from "@/lib/content/home";

/**
 * Le périmètre d'intervention, en deux temps.
 *
 * D'abord les trois moments où un dirigeant appelle — chacun dans une teinte du
 * logo, pour qu'il reconnaisse le sien avant d'avoir lu le détail.
 *
 * Ensuite, et c'est le passage qui compte : ce pour quoi le cabinet n'est PAS
 * fait. Sur un marché où tout le monde promet tout, dire non est le signal de
 * confiance le plus efficace — et cela qualifie les demandes en amont, ce qui
 * fait gagner du temps commercial. La version précédente le traitait en note de
 * marge ; il a ici son propre bloc, à parité avec le reste. Ne pas le retirer
 * pour « ne pas perdre de leads » : c'est justement son intérêt.
 */
export function PourQui() {
  return (
    <Section ton="surface">
      <SectionHead
        label="Périmètre"
        titre="Pour quelles entreprises nous intervenons"
        lede="Nous accompagnons des PME et ETI de 10 à 250 salariés, principalement en Haute-Garonne et en Occitanie, dans l'industrie, l'agroalimentaire, les services et la distribution."
        centre
      />

      <ul className="grid gap-4 md:grid-cols-3">
        {moments.map((moment) => {
          const accent = ACCENTS[moment.accent];

          return (
            <li
              key={moment.n}
              className="flex flex-col gap-3 rounded-carte border border-rule-2 border-t-[3px] bg-surface px-6 pb-6 pt-5 shadow-lift"
              style={{ borderTopColor: accent.vif }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.12em]"
                style={{ color: accent.texte }}
              >
                {moment.n}
              </span>
              <h3 className="font-serif text-[21px] font-light leading-tight text-ink">
                {moment.titre}
              </h3>
              <p className="text-[14.5px] leading-relaxed">{moment.detail}</p>
            </li>
          );
        })}
      </ul>

      {/* Le refus, traité franchement plutôt qu'en bas de page en petits caractères. */}
      <div className="mx-auto mt-6 grid max-w-[74ch] gap-4 rounded-carte border border-rule-2 bg-mist px-7 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-amber">
          Et quand ce n&apos;est pas nous
        </p>
        <p className="text-[15px] leading-relaxed">
          Notre approche est moins adaptée à une mission d&apos;expertise ponctuelle sur un seul
          sujet. Dans ce cas, un spécialiste unique vous coûtera moins cher et ira plus vite —{" "}
          <strong className="font-medium text-ink">nous le disons quand c&apos;est le cas.</strong>
        </p>
      </div>
    </Section>
  );
}

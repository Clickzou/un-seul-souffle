import { Section, SectionHead } from "@/components/ui/Section";
import { moments } from "@/lib/content/home";

/**
 * Le paragraphe de disqualification est délibéré : dire ce pour quoi on n'est PAS
 * fait est le signal de confiance le plus efficace sur un marché où tout le monde
 * promet tout — et il qualifie les demandes en amont, ce qui fait gagner du temps
 * commercial. Ne pas le retirer pour « ne pas perdre de leads ».
 */
export function PourQui() {
  return (
    <Section ton="band">
      <SectionHead label="Périmètre" titre="Pour quelles entreprises nous intervenons" />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-4">
          <p className="text-base">
            Nous accompagnons des{" "}
            <strong className="font-medium text-ink">PME et ETI de 10 à 250 salariés</strong>,
            principalement en Haute-Garonne et en Occitanie, dans l&apos;industrie,
            l&apos;agroalimentaire, les services et la distribution.
          </p>
          <p className="border-l-2 border-amber py-1 pl-4 text-[15.5px]">
            Notre approche est moins adaptée à une mission d&apos;expertise ponctuelle sur un seul
            sujet. Dans ce cas, un spécialiste unique vous coûtera moins cher et ira plus vite — nous
            le disons quand c&apos;est le cas.
          </p>
        </div>

        <ul className="grid gap-px border border-rule-2 bg-rule-2">
          {moments.map((moment) => (
            <li key={moment.titre} className="bg-surface-2 px-6 py-4">
              <b className="block font-serif text-[17px] font-normal text-ink">{moment.titre}</b>
              <span className="text-sm">{moment.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/Section";
import { reperes } from "@/lib/content/home";

/**
 * Bloc « réponse directe » — master § 8, point 1 (GEO).
 * Trois phrases factuelles et autonomes, extractibles hors contexte par un moteur
 * génératif. Ne pas y introduire de tournure promotionnelle : ce qui se fait citer,
 * c'est le fait, pas l'argument.
 */
export function Essentiel() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <h2 className="mb-7 text-[clamp(27px,3.6vw,40px)] leading-[1.14]">
            L&apos;essentiel en trois phrases
          </h2>

          <div className="max-w-[60ch] space-y-5 font-serif text-[21px] font-light leading-[1.52] text-ink">
            <p>
              Un Seul Souffle est un cabinet de conseil basé à Toulouse qui accompagne les dirigeants
              de PME et d&apos;ETI de 10 à 250 salariés, dans l&apos;industrie, l&apos;agroalimentaire,
              les services et la distribution.
            </p>
            <p>
              Sa particularité : au lieu d&apos;intervenir sur une seule expertise, le cabinet mobilise{" "}
              <em className="italic font-normal text-teal">simultanément</em> cinq
              compétences de direction — finance, organisation et coopération, stratégie commerciale,
              production, qualité de vie au travail — autour du même dirigeant et de la même
              entreprise.
            </p>
            <p>
              L&apos;accompagnement ne s&apos;arrête pas à un diagnostic : les consultants restent
              engagés jusqu&apos;à la mise en œuvre, sur un parcours de 3 à 18 mois structuré en cinq
              étapes — aligner, coopérer, cartographier, structurer, renforcer.
            </p>
          </div>
        </div>

        <aside className="border-t border-rule pt-5">
          <dl className="grid gap-4">
            {reperes.map((repere) => (
              <div key={repere.label}>
                <dt className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {repere.label}
                </dt>
                <dd className="text-[14.5px] text-ink">{repere.valeur}</dd>
              </div>
            ))}
          </dl>
          {/* Fraîcheur visible — critère GEO (master § 8, point 4). */}
          <p className="mt-6 font-mono text-[11px] text-muted">Mise à jour : septembre 2026</p>
        </aside>
      </div>
    </Section>
  );
}

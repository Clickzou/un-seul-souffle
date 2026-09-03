import { Section, SectionHead } from "@/components/ui/Section";
import { etapes } from "@/lib/content/home";

/**
 * Les cinq étapes sont TOUTES dépliées, sans onglets ni accordéon.
 * Décision SEO assumée : du contenu masqué derrière une interaction est moins bien
 * pris en compte par Google, et c'est ici le cœur sémantique de la page.
 *
 * Le fil vertical relie les étapes — la séquence est réelle, la numérotation encode
 * donc une information et non un ornement.
 */
export function Methode() {
  return (
    <Section id="methode" ton="band">
      <SectionHead
        label="Le parcours"
        titre="La méthode en cinq étapes"
        lede="Chaque étape prépare la suivante : plus de clarté pour le dirigeant, plus d'engagement pour les équipes, plus d'autonomie pour l'organisation. Nous ne vendons pas du temps, nous vendons une progression de maturité."
      />

      <ol
        className="relative sm:pl-20 sm:before:absolute sm:before:bottom-2.5 sm:before:left-[25px] sm:before:top-2.5 sm:before:w-px
                   sm:before:bg-gradient-to-b sm:before:from-rule sm:before:via-teal sm:before:to-rule"
      >
        {etapes.map((etape) => (
          <li key={etape.n} className="relative pb-11 last:pb-0">
            <span
              aria-hidden="true"
              className="mb-3 grid h-[26px] w-[26px] place-items-center rounded-full border border-teal bg-surface-2
                         font-mono text-[10px] text-teal sm:absolute sm:-left-[62px] sm:top-1.5 sm:mb-0"
            >
              {etape.n}
            </span>

            <h3 className="text-2xl leading-tight">
              {etape.verbe}{" "}
              <em className="text-[0.86em] italic text-teal">— {etape.promesse}</em>
            </h3>

            <dl className="mt-3.5 grid max-w-[74ch] gap-y-2 sm:grid-cols-[88px_1fr] sm:gap-x-5">
              <dt className="pt-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                Symptôme
              </dt>
              <dd className="mb-2 text-[15px] leading-relaxed sm:mb-0">{etape.symptome}</dd>

              <dt className="pt-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                Action
              </dt>
              <dd className="mb-2 text-[15px] leading-relaxed sm:mb-0">{etape.action}</dd>

              <dt className="pt-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                Résultat
              </dt>
              <dd className="mb-2 text-[15px] leading-relaxed text-ink sm:mb-0">{etape.resultat}</dd>

              <dt className="pt-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
                Format
              </dt>
              <dd className="text-[15px] leading-relaxed">{etape.format}</dd>
            </dl>
          </li>
        ))}
      </ol>
    </Section>
  );
}

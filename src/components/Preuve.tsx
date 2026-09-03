import { Section, SectionHead } from "@/components/ui/Section";

/**
 * ⚠ SECTION EN ATTENTE DE DONNÉES CLIENT — ne pas mettre en production en l'état.
 *
 * C'est le manque le plus lourd du site : aucun témoignage, logo, cas ni chiffre.
 * Pour du conseil vendu à des dirigeants, c'est le levier de conversion qui manque
 * AVANT le SEO et avant le design (master § 7).
 *
 * Les emplacements ne sont volontairement pas pré-remplis : un faux verbatim se
 * retourne immédiatement contre un cabinet dont l'argument est la confiance.
 *
 * Pour publier : remplir `temoignages` / `cas` / `chiffres` ci-dessous, retirer le
 * style pointillé, et retirer <NoteIntegration />.
 */

type Emplacement = { tag: string; titre?: string; citation?: string; texte: string };

const EMPLACEMENTS: Emplacement[] = [
  {
    tag: "Emplacement témoignage 1",
    citation:
      "La situation de départ en une phrase, puis ce qui a changé. Deux à trois phrases suffisent.",
    texte: "Prénom, fonction — secteur, effectif, département",
  },
  {
    tag: "Emplacement témoignage 2",
    citation:
      "Le nom de l'entreprise n'est pas indispensable : la fonction, le secteur et la taille suffisent à rendre le propos crédible.",
    texte: "Prénom, fonction — secteur, effectif, département",
  },
  {
    tag: "Emplacement cas concret",
    titre: "Situation → intervention → résultat",
    texte:
      "Secteur, effectif et blocage en une phrase. Puis les étapes et piliers mobilisés, sur quelle durée. Puis un ou deux chiffres réels.",
  },
  {
    tag: "Emplacement chiffres du cabinet",
    titre: "Accompagnements · expérience · secteurs",
    texte:
      "Nombre d'accompagnements menés, années cumulées d'expérience en direction d'entreprise, secteurs couverts. Vérifiables, jamais arrondis à la hausse.",
  },
];

export function Preuve() {
  return (
    <Section ton="mist">
      <SectionHead label="Résultats" titre="Ce que ça change, concrètement" centre />

      <ul className="grid gap-4 sm:grid-cols-2">
        {EMPLACEMENTS.map((item) => (
          <li
            key={item.tag}
            className="flex flex-col gap-2.5 rounded-carte border border-dashed border-amber bg-amber-wash px-6 py-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber">
              {item.tag}
            </span>
            {item.citation && (
              <p className="font-serif text-[17px] font-light italic leading-snug text-muted">
                « {item.citation} »
              </p>
            )}
            {item.titre && <h3 className="text-[17px] leading-tight">{item.titre}</h3>}
            <p className="text-sm leading-relaxed">{item.texte}</p>
          </li>
        ))}
      </ul>

      <NoteIntegration />
    </Section>
  );
}

function NoteIntegration() {
  return (
    <aside className="mt-7 rounded-carte border border-rule border-l-2 border-l-amber bg-ground px-7 py-6">
      <h3 className="mb-3.5 font-mono text-[10.5px] font-normal uppercase tracking-[0.13em] text-amber">
        Note d&apos;intégration — à ne pas publier en l&apos;état
      </h3>
      <ul className="grid list-disc gap-2 pl-4 text-sm marker:text-amber">
        <li>
          C&apos;est le manque le plus lourd du site : aucun témoignage, logo, cas ni chiffre. Pour du
          conseil vendu à des dirigeants, c&apos;est le levier de conversion qui manque{" "}
          <strong className="font-medium text-ink">avant</strong> le SEO et avant le design.
        </li>
        <li>
          Ces emplacements ne sont pas pré-remplis volontairement : un faux verbatim se retourne
          immédiatement contre un cabinet dont l&apos;argument est la confiance.
        </li>
        <li>
          Si aucun client n&apos;accepte d&apos;être cité aujourd&apos;hui, publier au minimum un cas
          anonymisé — « une PME agroalimentaire de 45 salariés en Haute-Garonne » — et le nombre
          d&apos;accompagnements réalisés. Zéro preuve est la seule situation pire qu&apos;une preuve
          modeste.
        </li>
      </ul>
    </aside>
  );
}

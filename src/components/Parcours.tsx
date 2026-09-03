import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { parcours, type Parcours as TypeParcours } from "@/lib/content/home";

/**
 * Section dédiée aux deux offres, centrée sur ce qui les sépare.
 *
 * Le site legacy pose les deux boutons côte à côte sans jamais dire lequel
 * choisir. Ici chaque colonne s'ouvre sur « le nœud est chez vous » / « le nœud
 * est dans l'organisation », suivi de trois signes concrets : le dirigeant se
 * reconnaît avant de lire quoi que ce soit d'autre.
 *
 * Le code couleur teal / ambre est repris du site legacy et porte une
 * information — deux parcours distincts — et non une décoration.
 *
 * Ces deux blocs portent les seuls liens à ancre exacte vers les pages piliers.
 * C'est le correctif de maillage le plus important de la home : à l'audit, les
 * deux pages d'offres ne recevaient aucun lien interne.
 */

const TONS = {
  dirigeant: {
    bord: "border-t-teal",
    texte: "text-teal",
    puce: "bg-teal",
    bouton: "bg-teal text-ground hover:bg-teal-dark",
    fond: "bg-teal-wash",
  },
  entreprise: {
    bord: "border-t-amber",
    texte: "text-amber",
    puce: "bg-amber",
    bouton: "bg-amber text-ground hover:brightness-90",
    fond: "bg-amber-wash",
  },
} as const;

export function Parcours() {
  return (
    <Section ton="surface">
      <SectionHead
        label="Nos offres"
        titre="Deux parcours, selon l'endroit où ça bloque"
        lede="La plupart des dirigeants savent que quelque chose coince, sans savoir si le nœud est chez eux ou dans l'organisation. C'est la seule question à trancher avant de commencer — et les deux parcours en découlent."
        centre
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {parcours.map((item) => (
          <Carte key={item.cle} item={item} />
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-[72ch] text-center text-[15px]">
        Vous hésitez entre les deux ? C&apos;est le cas le plus fréquent, et c&apos;est
        exactement ce que le diagnostic tranche.{" "}
        <Link href="/diagnostic/" className="font-medium text-teal underline underline-offset-[3px]">
          Faire le diagnostic en 5 minutes
        </Link>{" "}
        — ou en parler directement lors de l&apos;entretien découverte, gratuit et confidentiel.
      </p>

      <p className="mx-auto mt-4 max-w-[72ch] text-center text-[15px] text-muted">
        Lorsque le blocage est d&apos;abord financier, l&apos;entrée se fait par le{" "}
        <Link
          href="/expert-comptable-daf-externalisee-pme/"
          className="text-teal underline decoration-1 underline-offset-[3px]"
        >
          pilotage financier externalisé
        </Link>{" "}
        avant tout autre chantier.
      </p>
    </Section>
  );
}

function Carte({ item }: { item: TypeParcours }) {
  const ton = TONS[item.cle];

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-carte border border-rule border-t-2 bg-surface shadow-lift ${ton.bord}`}
    >
      <div className="flex flex-col gap-4 px-7 pb-6 pt-7">
        <div>
          <span className={`font-mono text-[10.5px] uppercase tracking-[0.12em] ${ton.texte}`}>
            {item.etapes} — {item.verbes}
          </span>
          <h3 className="mt-2 text-[25px] leading-tight">{item.titre}</h3>
        </div>

        <p className="font-serif text-[21px] font-light leading-snug text-ink">{item.pourQui}</p>

        <ul className="grid gap-2.5">
          {item.signes.map((signe) => (
            <li key={signe} className="flex gap-3 text-[14.5px] leading-snug">
              <span
                aria-hidden="true"
                className={`mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full ${ton.puce}`}
              />
              {signe}
            </li>
          ))}
        </ul>
      </div>

      {/* Les trois repères qui permettent la comparaison ligne à ligne d'une
          colonne à l'autre : même ordre, même place dans les deux cartes. */}
      <dl className={`mt-auto grid gap-3 px-7 py-5 text-[14px] ${ton.fond}`}>
        <div className="grid grid-cols-[92px_1fr] gap-3">
          <dt className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
            On travaille
          </dt>
          <dd className="text-ink">{item.travail}</dd>
        </div>
        <div className="grid grid-cols-[92px_1fr] gap-3">
          <dt className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">Durée</dt>
          <dd className="text-ink">{item.duree}</dd>
        </div>
        <div className="grid grid-cols-[92px_1fr] gap-3">
          <dt className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-muted">
            On commence
          </dt>
          <dd className="text-ink">{item.depart}</dd>
        </div>
      </dl>

      <div className="px-7 pb-7 pt-6">
        <Link
          href={item.href}
          className={`group inline-flex w-full items-center justify-center gap-2.5 rounded-bouton px-6 py-3.5 text-[14.5px] font-medium transition-colors ${ton.bouton}`}
        >
          {item.ancre}
          <span className="transition-transform group-hover:translate-x-[3px]">→</span>
        </Link>
      </div>
    </article>
  );
}

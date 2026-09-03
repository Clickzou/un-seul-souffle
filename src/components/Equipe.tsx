import Image from "next/image";
import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { equipe, type Membre } from "@/lib/content/home";

/**
 * Section E-E-A-T. Sur ce marché, l'autorité est portée par des personnes, pas par
 * la marque : chaque membre a sa photo, son lien LinkedIn quand il existe, et un
 * lien vers sa page.
 *
 * Deux groupes distincts — associées fondatrices puis consultants partenaires. La
 * distinction est une information réelle sur la structure du cabinet (« une cellule
 * stratégique, pas un collectif d'indépendants ») : elle doit se lire, pas se deviner.
 */
export function Equipe() {
  const associees = equipe.filter((m) => m.statut === "Associée fondatrice");
  const partenaires = equipe.filter((m) => m.statut === "Partenaire");

  return (
    <Section ton="band">
      <SectionHead
        label="Notre équipe"
        titre="Qui vous accompagne"
        lede="Deux associées fondatrices et quatre consultants partenaires, sélectionnés pour leur complémentarité et non pour remplir une grille de compétences. Chacun intervient sur son pilier, tous travaillent sur le même dossier."
      />

      <Groupe titre="Associées fondatrices" membres={associees} colonnes="sm:grid-cols-2" />
      <Groupe
        titre="Consultants partenaires"
        membres={partenaires}
        colonnes="sm:grid-cols-2 lg:grid-cols-4"
        className="mt-12"
      />
    </Section>
  );
}

function Groupe({
  titre,
  membres,
  colonnes,
  className,
}: {
  titre: string;
  membres: Membre[];
  colonnes: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="mb-5 flex items-center gap-4 font-mono text-[10.5px] uppercase tracking-[0.13em] text-muted">
        {titre}
        <span aria-hidden="true" className="h-px flex-1 bg-rule" />
      </h3>

      <ul className={`grid gap-px border border-rule-2 bg-rule-2 ${colonnes}`}>
        {membres.map((membre) => (
          <li key={membre.nom} className="flex flex-col gap-3 bg-surface-2 px-6 py-7">
            <Image
              src={membre.photo ?? "/equipe/placeholder.webp"}
              alt={`${membre.nom}, ${membre.expertise.toLowerCase()} chez Un Seul Souffle à Toulouse`}
              width={88}
              height={88}
              className="h-[88px] w-[88px] rounded-full object-cover"
            />

            <div>
              <h4 className="font-serif text-[19px] font-normal leading-tight text-ink">
                {membre.nom}
              </h4>
              <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.11em] text-teal">
                {membre.expertise}
              </p>
            </div>

            <p className="text-[14.5px] leading-relaxed">{membre.bio}</p>

            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-3">
              <Link
                href={membre.href}
                // Le libellé reste court à l'écran ; l'intitulé complet part dans
                // l'aria-label, qui sert à la fois le lecteur d'écran et l'ancre.
                aria-label={`Découvrir l'expertise de ${membre.nom}`}
                className="text-[14px] font-medium text-teal hover:underline hover:underline-offset-[3px]"
              >
                Découvrir son expertise →
              </Link>

              {membre.linkedin && (
                <a
                  href={membre.linkedin}
                  rel="noopener"
                  aria-label={`Profil LinkedIn de ${membre.nom}`}
                  className="text-[13px] text-muted hover:text-teal"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

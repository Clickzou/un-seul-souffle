import { clsx } from "clsx";

/**
 * Conteneur horizontal commun à toutes les sections.
 *
 * `large` : pleine largeur, avec une gouttière de 100 px à partir du grand écran
 * au lieu de la colonne centrée. Réservé aux blocs qui gagnent à s'étendre — la
 * grille des cinq piliers, où chaque carte a besoin de sa place. Sous `lg`, la
 * gouttière retombe sur celle des autres sections : 100 px sur un mobile ne
 * laisserait presque rien.
 */
export function Shell({
  children,
  className,
  large = false,
}: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <div
      className={clsx(
        "w-full px-5 sm:px-8",
        large ? "lg:px-[100px]" : "mx-auto max-w-shell",
        className,
      )}
    >
      {children}
    </div>
  );
}

type Ton = "ground" | "surface" | "mist" | "band" | "ink";

const TONS: Record<Ton, string> = {
  ground: "bg-ground",
  surface: "bg-surface",
  mist: "bg-mist",
  band: "bg-surface-2",
  ink: "bg-ink text-[#c3c9d4]",
};

export function Section({
  id,
  ton = "ground",
  large = false,
  children,
}: {
  id?: string;
  ton?: Ton;
  /** Pleine largeur, gouttière de 100 px sur grand écran (voir `Shell`). */
  large?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={clsx("py-20 sm:py-24", TONS[ton])}>
      <Shell large={large}>{children}</Shell>
    </section>
  );
}

/** Sur-titre monospace — sert d'ancrage de rubrique, jamais de décoration. */
export function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "block font-mono text-[11px] uppercase tracking-label text-teal",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * En-tête de section : label + H2 + chapô.
 *
 * `centre` aligne le bloc au milieu. À réserver aux sections dont le contenu est
 * lui-même symétrique — une grille de cartes, par exemple : un en-tête centré
 * au-dessus d'un contenu aligné à gauche crée un décrochement.
 */
export function SectionHead({
  label,
  titre,
  lede,
  onInk = false,
  centre = false,
}: {
  label: string;
  titre: React.ReactNode;
  lede?: React.ReactNode;
  onInk?: boolean;
  centre?: boolean;
}) {
  return (
    <div className={clsx("mb-11 max-w-[64ch]", centre && "mx-auto text-center")}>
      <Label className={onInk ? "!text-[#6fc9c0]" : undefined}>{label}</Label>
      <h2
        className={clsx(
          "mt-4 text-[clamp(27px,3.6vw,40px)] leading-[1.14]",
          onInk && "!text-[#f4f2ec]",
        )}
      >
        {titre}
      </h2>
      {lede && (
        <p
          className={clsx(
            "mt-4 max-w-prose text-lg leading-relaxed",
            centre && "mx-auto",
            onInk ? "text-[#aeb6c3]" : "text-body",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

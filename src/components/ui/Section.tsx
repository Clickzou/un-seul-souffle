import { clsx } from "clsx";

/** Conteneur horizontal commun à toutes les sections. */
export function Shell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-full max-w-shell px-5 sm:px-8", className)}>{children}</div>;
}

type Ton = "ground" | "band" | "ink";

const TONS: Record<Ton, string> = {
  ground: "bg-ground",
  band: "bg-surface-2",
  ink: "bg-ink text-[#c3c9d4]",
};

export function Section({
  id,
  ton = "ground",
  children,
}: {
  id?: string;
  ton?: Ton;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={clsx("py-20 sm:py-24", TONS[ton])}>
      <Shell>{children}</Shell>
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

/** En-tête de section : label + H2 + chapô. */
export function SectionHead({
  label,
  titre,
  lede,
  onInk = false,
}: {
  label: string;
  titre: React.ReactNode;
  lede?: React.ReactNode;
  onInk?: boolean;
}) {
  return (
    <div className="mb-11 max-w-[64ch]">
      <Label className={onInk ? "!text-[#6fc9c0]" : undefined}>{label}</Label>
      <h2 className={clsx("mt-4 text-[clamp(27px,3.6vw,40px)] leading-[1.14]", onInk && "!text-[#f4f2ec]")}>
        {titre}
      </h2>
      {lede && (
        <p className={clsx("mt-4 max-w-prose text-lg leading-relaxed", onInk ? "text-[#aeb6c3]" : "text-body")}>
          {lede}
        </p>
      )}
    </div>
  );
}

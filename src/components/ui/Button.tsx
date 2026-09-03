import Link from "next/link";
import { clsx } from "clsx";

/**
 * CTA orientés action — master § 7.
 * Les libellés génériques (« Contact », « En savoir plus ») sont proscrits :
 * chaque bouton dit ce qui se passe quand on clique.
 */
export function Button({
  href,
  variant = "solid",
  arrow = false,
  className,
  children,
}: {
  href: string;
  variant?: "solid" | "line" | "lineOnInk";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const styles = {
    solid: "bg-teal text-ground border-teal hover:bg-teal-dark hover:border-teal-dark",
    line: "border-rule text-ink hover:border-teal hover:text-teal",
    lineOnInk: "border-[#3a4557] text-[#e8e6e0] hover:border-teal hover:text-teal",
  }[variant];

  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2 border px-5 py-3 text-[14.5px] font-medium transition-colors",
        styles,
        className,
      )}
    >
      {children}
      {arrow && <span className="transition-transform group-hover:translate-x-[3px]">→</span>}
    </Link>
  );
}

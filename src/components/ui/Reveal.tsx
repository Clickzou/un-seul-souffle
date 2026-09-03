"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

/**
 * Révélation au défilement.
 *
 * Trois garde-fous, dans cet ordre d'importance :
 *
 * 1. Le rendu serveur est VISIBLE. L'état initial n'est jamais `opacity: 0` :
 *    sans JavaScript, ou si l'hydratation échoue, la page reste entièrement
 *    lisible. Un contenu parqué à l'invisible en attendant un observer est une
 *    prise de risque inutile pour le référencement et pour l'accessibilité.
 *
 * 2. Ce qui est déjà à l'écran au moment de l'hydratation n'est jamais masqué —
 *    on mesure avant de cacher. Sans cela, le haut de page clignoterait.
 *
 * 3. `prefers-reduced-motion` révèle tout immédiatement, sans transition.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [etat, setEtat] = useState<"initial" | "cache" | "visible">("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEtat("visible");
      return;
    }

    // Déjà dans la fenêtre : on le laisse en place plutôt que de le faire
    // disparaître pour le ramener aussitôt.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setEtat("visible");
      return;
    }

    setEtat("cache");

    const observer = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          setEtat("visible");
          observer.disconnect();
        }
      },
      // Déclenche un peu avant que le bloc n'atteigne le bas de l'écran, pour que
      // l'entrée se termine pendant que le lecteur arrive dessus.
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={etat === "cache" ? undefined : { transitionDelay: `${delay}ms` }}
      className={clsx(
        "transition-[opacity,transform] duration-[850ms] ease-[cubic-bezier(.16,1,.3,1)]",
        "motion-reduce:transition-none",
        etat === "cache" ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}

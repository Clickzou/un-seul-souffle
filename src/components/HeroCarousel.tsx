"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/content/home";

const DUREE_MS = 6500;

/**
 * Fond du hero : fondu enchaîné entre les visuels de `heroImages`.
 *
 * Trois garde-fous, dans l'ordre d'importance :
 *  1. La première image est `priority` — c'est le LCP de la page, elle ne doit
 *     jamais être différée. Les suivantes sont chargées normalement.
 *  2. `prefers-reduced-motion` coupe la rotation : le visuel 1 reste affiché.
 *     Rien ne bouge, rien ne clignote, le contenu reste identique.
 *  3. Le voile navy est posé PAR-DESSUS les images, jamais sur le texte : la
 *     lisibilité ne dépend donc pas du visuel affiché à l'instant t.
 */
export function HeroCarousel() {
  const [actif, setActif] = useState(0);
  const [anime, setAnime] = useState(false);
  // Seule l'image affichée et la suivante entrent dans le DOM. Monter les cinq
  // d'emblée ferait télécharger ~1 Mo avant le premier rendu utile — exactement
  // le travers relevé à l'audit (3,3 Mo par page).
  const [montees, setMontees] = useState<number[]>([0]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnime(!media.matches);

    const onChange = (e: MediaQueryListEvent) => setAnime(!e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!anime) return;
    const id = setInterval(() => {
      setActif((courant) => {
        const suivant = (courant + 1) % heroImages.length;
        // Précharge le cran d'après, pour que le fondu ait toujours une image prête.
        setMontees((deja) => {
          const aVenir = (suivant + 1) % heroImages.length;
          return deja.includes(aVenir) ? deja : [...deja, aVenir];
        });
        return suivant;
      });
    }, DUREE_MS);
    return () => clearInterval(id);
  }, [anime]);

  // Une puce cliquée peut viser une image pas encore montée.
  const afficher = (index: number) => {
    setMontees((deja) => (deja.includes(index) ? deja : [...deja, index]));
    setActif(index);
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      {heroImages.map((image, index) =>
        montees.includes(index) ? (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={82}
            // L'image est assombrie et désaturée à la source plutôt que masquée par
            // un voile empilé : le rendu garde la matière de la photo au lieu de la
            // laiter, et le contraste du texte ne dépend plus du visuel affiché.
            className={`object-cover brightness-[0.42] saturate-[0.75] transition-opacity duration-[1600ms] ease-in-out ${
              index === actif ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null,
      )}

      {/* Second niveau, uniforme et sans dégradé directionnel : il teinte la photo
          vers le navy de la marque et sécurise le contraste sur le visuel 5, le plus
          clair du lot. Les opacités sont prises dans l'échelle Tailwind (multiples
          de 5) — une valeur hors échelle n'est pas compilée et le voile disparaît
          silencieusement. Pas de fondu vers le fond crème en bas : coupure franche. */}
      <div className="absolute inset-0 bg-ink/40" />

      {anime && (
        <div className="absolute bottom-7 right-6 z-10 flex gap-2 sm:right-10">
          {heroImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => afficher(index)}
              aria-label={`Afficher le visuel ${index + 1} sur ${heroImages.length}`}
              aria-current={index === actif}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === actif ? "w-7 bg-[#e8e6e0]" : "w-3 bg-[#e8e6e0]/35 hover:bg-[#e8e6e0]/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

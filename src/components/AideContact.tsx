"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { DEGRADE_LOGO } from "@/lib/content/home";

const CLE_STOCKAGE = "uss-aide-fermee";
const SEUIL_DEFILEMENT = 0.35;
const DELAI_MS = 30_000;

/**
 * Panneau d'aide au contact, en bas de page.
 *
 * DÉLIBÉRÉMENT PAS UNE MODALE PLEIN ÉCRAN. Google sanctionne les interstitiels
 * intrusifs sur mobile depuis 2017 : une fenêtre qui recouvre le contenu à
 * l'arrivée coûterait en classement exactement ce que le reste de la page essaie
 * de gagner. Ici le panneau occupe un coin, ne masque rien d'essentiel et se
 * ferme d'un clic.
 *
 * Il n'apparaît pas non plus au chargement : soit après 35 % de défilement — le
 * lecteur est alors engagé, la proposition tombe juste — soit après 30 secondes.
 * Une fois fermé, il ne revient pas : le refus est mémorisé dans le navigateur.
 *
 * Rien de tout cela n'est indexé ni nécessaire à la compréhension de la page ;
 * le composant ne rend rien tant qu'il n'est pas déclenché.
 */
export function AideContact() {
  const [visible, setVisible] = useState(false);

  const fermer = useCallback(() => {
    setVisible(false);
    try {
      window.localStorage.setItem(CLE_STOCKAGE, "1");
    } catch {
      // Navigation privée ou stockage refusé : le panneau reviendra à la
      // prochaine visite, ce qui est préférable à une erreur.
    }
  }, []);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(CLE_STOCKAGE)) return;
    } catch {
      /* stockage indisponible : on continue */
    }

    let fait = false;
    const montrer = () => {
      if (fait) return;
      fait = true;
      setVisible(true);
      window.removeEventListener("scroll", auDefilement);
    };

    const auDefilement = () => {
      const hauteur = document.documentElement.scrollHeight - window.innerHeight;
      if (hauteur > 0 && window.scrollY / hauteur > SEUIL_DEFILEMENT) montrer();
    };

    window.addEventListener("scroll", auDefilement, { passive: true });
    const minuteur = window.setTimeout(montrer, DELAI_MS);

    return () => {
      window.removeEventListener("scroll", auDefilement);
      window.clearTimeout(minuteur);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const auClavier = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
    };
    window.addEventListener("keydown", auClavier);
    return () => window.removeEventListener("keydown", auClavier);
  }, [visible, fermer]);

  if (!visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Prendre contact avec Un Seul Souffle"
      className="fixed inset-x-4 bottom-4 z-50 overflow-hidden rounded-carte border border-rule-2
                 bg-surface shadow-[0_8px_40px_-12px_rgba(16,26,44,.28)]
                 motion-safe:animate-[montee_.5s_cubic-bezier(.16,1,.3,1)_both]
                 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[336px]"
    >
      <div
        aria-hidden="true"
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(to right, ${DEGRADE_LOGO})` }}
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="font-serif text-[19px] font-light leading-tight text-ink">
            Besoin d&apos;un conseil ?
          </p>
          <button
            type="button"
            onClick={fermer}
            aria-label="Fermer"
            className="-mr-1 -mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full
                       text-[17px] leading-none text-muted transition-colors hover:bg-mist hover:text-ink"
          >
            ×
          </button>
        </div>

        <p className="mt-2 text-[14px] leading-relaxed text-body">
          Le premier échange avec Marjorie et Muriel est gratuit et confidentiel. Vous en repartez
          avec une lecture de votre situation, que vous travailliez ensuite avec nous ou non.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/contact/"
            onClick={fermer}
            className="rounded-bouton bg-teal px-4 py-2.5 text-[13.5px] font-medium text-ground
                       transition-colors hover:bg-teal-dark"
          >
            Prendre contact
          </Link>
          <Link
            href="/diagnostic/"
            onClick={fermer}
            className="rounded-bouton border border-rule px-4 py-2.5 text-[13.5px] font-medium text-ink
                       transition-colors hover:border-teal hover:text-teal"
          >
            Faire le diagnostic
          </Link>
        </div>
      </div>
    </div>
  );
}

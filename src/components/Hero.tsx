import { Shell, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Header } from "@/components/Header";

/**
 * Hero pleine largeur, carrousel photo en fond.
 *
 * Le H1 legacy — « Structurer aujourd'hui, renforcer demain » — ne contenait aucun
 * mot-clé. Il porte désormais le mot-clé principal ; la signature de marque et la
 * baseline sont fusionnées dans le sous-titre, juste en dessous.
 *
 * Le texte est calé sur la moitié gauche : c'est le côté que le voile charge le
 * plus, et cela laisse respirer la photo à droite. Les couleurs sur photo sont
 * écrites en littéral plutôt qu'en token — le hero est la seule surface sombre
 * du site, lui donner ses propres tokens créerait un jeu inutilisé ailleurs.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroCarousel />
      {/* La nav vit dans le hero pour se superposer à la photo. */}
      <Header overPhoto />

      <Shell>
        <header className="max-w-[46rem] pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
          {/* Toulouse quitte le kicker : il est désormais dans le H1, l'y laisser
              ferait doublon à deux lignes d'écart. */}
          <Label className="anim-montee !text-[#7fd3ca]">PME · ETI de 10 à 250 salariés</Label>

          {/* Le H1 porte le mot-clé principal en toutes lettres — accompagnement,
              dirigeants, PME, ETI, Toulouse. La signature de marque (« équipe de
              direction externalisée »), qui est l'actif GEO, passe juste en
              dessous : elle reste au-dessus de la ligne de flottaison et garde son
              poids sémantique sans disputer au H1 son rôle de signal. */}
          <h1 style={{ animationDelay: "90ms" }} className="anim-montee mt-6 max-w-[16ch] text-[clamp(38px,5.6vw,64px)] leading-[1.06] !text-[#f6f4ee]">
            Accompagnement de dirigeants de PME et ETI à{" "}
            <em className="italic text-[#7fd3ca]">Toulouse</em>
          </h1>

          <p style={{ animationDelay: "180ms" }} className="anim-montee mt-5 font-serif text-[clamp(21px,2.6vw,27px)] font-light italic text-[#c9cfd8]">
            Une équipe de direction externalisée — structurer aujourd&apos;hui, renforcer demain.
          </p>

          <p style={{ animationDelay: "270ms" }} className="anim-montee mt-6 max-w-[58ch] text-lg leading-relaxed text-[#d3d8e0]">
            Vous ne manquez pas d&apos;experts autour de vous. Vous manquez d&apos;une lecture
            d&apos;ensemble. Un Seul Souffle accompagne les dirigeants de PME et d&apos;ETI à
            Toulouse et en Occitanie en mobilisant cinq expertises de direction — finance,
            organisation, stratégie commerciale, production, qualité de vie au travail — autour de
            la même table, sur la même entreprise, jusqu&apos;à la mise en œuvre sur le terrain.
          </p>

          <div style={{ animationDelay: "360ms" }} className="anim-montee mt-8 flex flex-wrap gap-3">
            <Button href="/diagnostic/" arrow>
              Diagnostiquer mon entreprise en 5 min
            </Button>
            <Button href="#methode" variant="lineOnInk">
              Voir la méthode en 5 étapes
            </Button>
          </div>
        </header>
      </Shell>
    </section>
  );
}

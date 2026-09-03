import { Shell, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Header } from "@/components/Header";
import { piliers } from "@/lib/content/home";

/**
 * Hero pleine largeur, carrousel photo en fond.
 *
 * H1 : porte l'identité ET la requête. Le H1 legacy — « Structurer aujourd'hui,
 * renforcer demain » — ne contenait aucun mot-clé. La baseline est conservée,
 * en sous-titre.
 *
 * Le texte est calé sur la moitié gauche : c'est le côté que le voile charge le
 * plus, et cela laisse respirer la photo à droite. Les couleurs sur photo sont
 * écrites en littéral plutôt qu'en token — le hero est la seule surface sombre
 * du site, lui donner ses propres tokens créerait un jeu inutilisé ailleurs.
 */
export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <HeroCarousel />
        {/* La nav vit dans le hero pour se superposer à la photo. */}
        <Header overPhoto />

        <Shell>
          <header className="max-w-[46rem] pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
            {/* Toulouse quitte le kicker : il est désormais dans le H1, l'y laisser
                ferait doublon à deux lignes d'écart. */}
            <Label className="!text-[#7fd3ca]">PME · ETI de 10 à 250 salariés</Label>

            {/* Le H1 porte le mot-clé principal en toutes lettres — accompagnement,
                dirigeants, PME, ETI, Toulouse. La signature de marque (« équipe de
                direction externalisée »), qui est l'actif GEO, passe juste en
                dessous : elle reste au-dessus de la ligne de flottaison et garde son
                poids sémantique sans disputer au H1 son rôle de signal. */}
            <h1 className="mt-6 max-w-[16ch] text-[clamp(38px,5.6vw,64px)] leading-[1.06] !text-[#f6f4ee]">
              Accompagnement de dirigeants de PME et ETI à{" "}
              <em className="italic text-[#7fd3ca]">Toulouse</em>
            </h1>

            <p className="mt-5 font-serif text-[clamp(21px,2.6vw,27px)] font-light italic text-[#c9cfd8]">
              Une équipe de direction externalisée — structurer aujourd&apos;hui, renforcer demain.
            </p>

            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[#d3d8e0]">
              Vous ne manquez pas d&apos;experts autour de vous. Vous manquez d&apos;une lecture
              d&apos;ensemble. Un Seul Souffle accompagne les dirigeants de PME et d&apos;ETI à
              Toulouse et en Occitanie en mobilisant cinq expertises de direction — finance,
              organisation, stratégie commerciale, production, qualité de vie au travail — autour de
              la même table, sur la même entreprise, jusqu&apos;à la mise en œuvre sur le terrain.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/diagnostic/" arrow>
                Diagnostiquer mon entreprise en 5 min
              </Button>
              <Button href="#methode" variant="lineOnInk">
                Voir la méthode en 5 étapes
              </Button>
            </div>

            <p className="mt-3.5 text-[13px] text-[#9aa3b0]">
              Résultat immédiat et gratuit. Aucun engagement.
            </p>
          </header>
        </Shell>
      </section>

      {/* Rail des cinq piliers — sorti du hero photo, sur fond crème : les cinq
          expertises sont une information de lecture, pas un élément d'ambiance.
          Les référents sont nommés (E-E-A-T) ; le site legacy affichait
          « Consultant expert » sur trois des cinq. */}
      <Shell>
        <ul className="grid border-b border-rule sm:grid-cols-2 lg:grid-cols-5">
          {piliers.map((pilier) => (
            <li
              key={pilier.n}
              className="border-b border-rule-2 py-5 last:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0 lg:border-b-0"
            >
              <span className="font-mono text-[10.5px] tracking-[0.1em] text-teal">{pilier.n}</span>
              <p className="mt-2 font-serif text-[17px] leading-tight text-ink">{pilier.nom}</p>
              <p className="mt-1 text-[12.5px] leading-snug text-muted">{pilier.referent}</p>
            </li>
          ))}
        </ul>
      </Shell>
    </>
  );
}

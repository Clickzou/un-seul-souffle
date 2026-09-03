import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { Piliers } from "@/components/Piliers";
import { Essentiel } from "@/components/Essentiel";
import { Blocages } from "@/components/Blocages";
import { Comparatif } from "@/components/Comparatif";
import { Methode } from "@/components/Methode";
import { Parcours } from "@/components/Parcours";
import { Preuve } from "@/components/Preuve";
import { PourQui } from "@/components/PourQui";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { Reveal } from "@/components/ui/Reveal";
import { buildHomeSchema } from "@/lib/seo/schema";

/**
 * Page d'accueil — intention propriétaire : « équipe de direction externalisée,
 * cabinet de conseil dirigeant PME Toulouse ».
 *
 * Règle structurante (master § 4) : la home NE cible PAS les termes des silos en
 * signal H1. Ses mentions de services pointent en lien à ancre exacte vers la page
 * dédiée, jamais en texte brut — sinon elle cannibalise ses propres pages piliers.
 */
export const metadata: Metadata = {
  // 59 / 60 caractères
  title: "Accompagnement dirigeant PME ETI Toulouse | Un Seul Souffle",
  // 146 / 150 caractères
  description:
    "Équipe de direction externalisée pour dirigeants de PME et ETI à Toulouse : finance, organisation, stratégie, production, QVT. Diagnostic gratuit.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Un Seul Souffle",
    title: "Accompagnement de dirigeants de PME et ETI à Toulouse",
    description:
      "Cinq expertises de direction mobilisées ensemble autour de votre entreprise. Pas un rapport : un accompagnement jusqu'à la mise en œuvre.",
    images: [{ url: "/og-equipe.webp", width: 1200, height: 630, alt: "L'équipe Un Seul Souffle" }],
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Reveal>
          <Piliers />
        </Reveal>
        <Reveal>
          <Essentiel />
        </Reveal>
        <Reveal>
          <Blocages />
        </Reveal>
        <Reveal>
          <Comparatif />
        </Reveal>
        <Reveal>
          <Methode />
        </Reveal>
        <Reveal>
          <Parcours />
        </Reveal>
        <Reveal>
          <Preuve />
        </Reveal>
        <Reveal>
          <PourQui />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <CTAFinal />
        </Reveal>
      </main>
      <Footer />
      <AideContact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomeSchema()) }}
      />
    </>
  );
}

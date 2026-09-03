import { Section, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTAFinal() {
  return (
    <Section ton="ink">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Label className="!text-[#6fc9c0]">Première étape</Label>
          <h2 className="my-4 max-w-[20ch] text-[clamp(27px,3.6vw,40px)] leading-[1.14] !text-[#f4f2ec]">
            Commencer par savoir où vous en êtes
          </h2>
          <p className="max-w-prose text-lg leading-relaxed text-[#aeb6c3]">
            Le diagnostic prend 5 minutes et vous donne un résultat immédiat sur les cinq piliers. Il
            ne vous engage à rien et sert de base à l&apos;entretien découverte, gratuit et
            confidentiel.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/diagnostic/" arrow>
            Diagnostiquer mon entreprise
          </Button>
          <Button href="/contact/" variant="lineOnInk">
            Parler à Marjorie et Muriel
          </Button>
        </div>
      </div>
    </Section>
  );
}

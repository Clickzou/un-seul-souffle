import { Section, SectionHead } from "@/components/ui/Section";
import { faq } from "@/lib/content/home";

/**
 * Accordéon natif <details> — indexé par Google, accessible au clavier sans JS.
 * La première question est ouverte au repos : la page ne doit jamais se présenter
 * entièrement replliée.
 *
 * Le JSON-LD FAQPage est construit depuis le MÊME tableau `faq`
 * (src/lib/seo/schema.ts) : balisage et contenu affiché ne peuvent pas diverger.
 */
export function FAQ() {
  return (
    <Section>
      <SectionHead
        label="Questions fréquentes"
        titre="Les questions que les dirigeants nous posent"
      />

      <div className="max-w-[78ch] border-t border-rule">
        {faq.map((item, index) => (
          <details key={item.q} open={index === 0} className="group border-b border-rule-2">
            <summary
              className="relative cursor-pointer py-5 pr-10 font-serif text-[19px] font-normal
                         text-ink transition-colors hover:text-teal"
            >
              {item.q}
              <span
                aria-hidden="true"
                className="absolute right-1.5 top-[19px] font-mono text-[17px] text-teal"
              >
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">–</span>
              </span>
            </summary>

            <div className="max-w-[70ch] space-y-3 pb-6 pr-10 text-[15.5px] leading-relaxed">
              {item.r.map((paragraphe, i) => (
                <p
                  key={i}
                  className={
                    // Un placeholder est signalé visuellement et exclu du JSON-LD.
                    item.aFournir && i === 0 ? "font-mono text-[13px] text-amber" : undefined
                  }
                >
                  {paragraphe}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

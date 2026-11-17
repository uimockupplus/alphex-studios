import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "./data";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="py-28 md:py-40">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="display-lg mt-5">
            Frequently
            <br />
            asked questions.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a href="#contact" className="font-medium text-foreground underline underline-offset-4">
              Ask us directly
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible defaultValue="item-0" className="border-t">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="py-6 font-display text-lg font-medium tracking-tight hover:no-underline md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

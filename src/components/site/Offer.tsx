import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const PERKS = [
  "Priority delivery",
  "Direct communication with the founder",
  "Founding-client pricing",
  "Free basic SEO setup",
  "Optional AI chatbot at a launch discount",
];

export function Offer() {
  return (
    <section className="px-3">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-signal py-24 text-signal-foreground md:py-32">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
        <div className="container-site relative grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <span className="inline-flex rounded-full bg-ink px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink-foreground">
              Founding-client offer
            </span>
            <h2 className="display-lg mt-6">
              Launch offer for
              <br />
              our first clients.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed opacity-80">
              We're accepting a limited number of founding-client projects. Get a professionally designed,
              conversion-focused website at special launch pricing.
            </p>
            <Button asChild variant="ink" size="xl" className="mt-10">
              <a href="#contact">
                Apply for a founding-client spot <ArrowUpRight />
              </a>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <ul className="rounded-3xl bg-card/60 p-3 backdrop-blur">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-4 rounded-2xl px-5 py-4 text-foreground transition-colors hover:bg-card">
                  <span className="grid size-7 place-items-center rounded-full bg-ink text-signal">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 pl-2 font-mono text-[11px] uppercase tracking-widest opacity-70">Limited availability during launch</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

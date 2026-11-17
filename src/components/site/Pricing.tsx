import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PLANS } from "./data";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-40">
      <div className="container-site">
        <SectionHead
          eyebrow="Pricing"
          title={
            <>
              Simple packages.
              <br />
              <span className="text-muted-foreground">Clear scope.</span>
            </>
          }
          lead="Choose a starting point. We'll recommend the right scope after understanding your project."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1",
                  p.popular ? "border-ink bg-ink text-ink-foreground shadow-float" : "bg-card hover:shadow-lift",
                )}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-signal px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal-foreground">
                    Most popular
                  </span>
                )}
                <p className="font-display text-lg font-semibold tracking-tight">{p.name}</p>
                <p className={cn("mt-1 text-sm", p.popular ? "text-ink-muted" : "text-muted-foreground")}>{p.blurb}</p>
                <div className="mt-8">
                  <span className={cn("text-xs", p.popular ? "text-ink-muted" : "text-muted-foreground")}>Starting from</span>
                  <p className="font-display text-5xl font-semibold tracking-tighter">{p.price}</p>
                </div>
                <ul className={cn("mt-8 flex-1 space-y-3 border-t pt-6 text-sm", p.popular && "border-ink-border")}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={cn("mt-0.5 size-4 shrink-0", p.popular ? "text-signal" : "text-foreground")} />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className={cn("mt-6 font-mono text-[11px] uppercase tracking-widest", p.popular ? "text-ink-muted" : "text-muted-foreground")}>
                  Delivery · {p.delivery}
                </p>
                <Button asChild variant={p.popular ? "signal" : "pill"} size="md" className="mt-5 w-full">
                  <a href="#contact">Get a custom quote</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <a
            href="#contact"
            className="group flex flex-col justify-between gap-4 rounded-3xl border border-dashed bg-card p-7 transition-colors hover:border-foreground/30 md:flex-row md:items-center"
          >
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">Custom web app — custom quote.</p>
              <p className="mt-1 text-sm text-muted-foreground">Portals, dashboards, booking systems, APIs, role-based access and integrations.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium">
              Talk to us <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Final pricing depends on pages, features, content, integrations and platform. GST, domain, hosting and third-party tool costs may be additional.
        </p>
      </div>
    </section>
  );
}

import { ArrowUpRight, Code2, LayoutTemplate, Gauge, MousePointerClick, PenTool, ShoppingBag } from "lucide-react";
import { SERVICES } from "./data";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

const ICONS = [LayoutTemplate, MousePointerClick, ShoppingBag, PenTool, Code2, Gauge];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="container-site">
        <SectionHead
          eyebrow="Services"
          title={
            <>
              Web services
              <br />
              built for growth.
            </>
          }
          lead="From your first landing page to a complete online store or custom web app — digital experiences that support real business goals."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i % ICONS.length]!;
            return (
              <Reveal key={s.title} delay={i * 60} className="h-full">
                <a
                  href="#contact"
                  className="group relative flex h-full flex-col bg-card p-8 transition-colors duration-500 hover:bg-paper md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border bg-background transition-all duration-500 group-hover:-rotate-6 group-hover:border-transparent group-hover:bg-signal group-hover:text-signal-foreground">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                    Start a project
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

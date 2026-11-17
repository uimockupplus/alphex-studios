import { PROCESS } from "./data";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { CheckCircle2 } from "lucide-react";

export function Process() {
  return (
    <section id="process" className="border-y bg-paper py-28 md:py-40">
      <div className="container-site">
        <SectionHead
          eyebrow="Process"
          title={
            <>
              A simple, transparent
              <br />
              process.
            </>
          }
          aside={
            <p className="flex max-w-xs items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-foreground" />
              You approve the structure, design direction and content before development begins.
            </p>
          }
        />

        <div className="relative grid gap-4 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-border md:block" />
          {PROCESS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="relative">
              <div className="relative z-10 mb-8 grid size-[76px] place-items-center rounded-full border bg-card font-display text-2xl font-semibold tracking-tight shadow-soft">
                0{i + 1}
                {i === 0 && <span className="absolute -right-0.5 top-1 size-3 rounded-full bg-signal ring-4 ring-paper" />}
              </div>
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 max-w-[260px] leading-relaxed text-muted-foreground">{p.body}</p>
              <p className="mt-6 inline-flex rounded-full border bg-card px-3 py-1 font-mono text-[11px] text-muted-foreground">
                Deliverable · {p.deliverable}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

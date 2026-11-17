import type { ReactNode } from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const FEATURES = [
  "AI chat assistant for visitor questions and lead qualification",
  "Smart forms that route leads to WhatsApp, email or CRM",
  "Automated follow-ups for new enquiries",
  "Analytics to see what is working",
  "Content assistance for blogs, FAQs and service pages",
];

export function AiAddons() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Alphex AI add-ons</span>
          <h2 className="display-lg mt-5">
            Make your website
            <br />
            work <span className="marker">smarter.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Turn your website into a lead-generation system with AI-powered assistance from Alphex AI.
          </p>
          <ul className="mt-10 space-y-4">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink text-ink-foreground">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="ink" size="xl" className="mt-10">
            <a href="#contact">
              Add AI to my website <ArrowUpRight />
            </a>
          </Button>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-signal" />
          <div className="overflow-hidden rounded-[2rem] border bg-card shadow-float">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-ink text-signal">
                  <Sparkles className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Alphex assistant</p>
                  <p className="flex items-center gap-1.5 text-[11px] text-success">
                    <span className="size-1.5 rounded-full bg-success pulse-dot" /> Online
                  </p>
                </div>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Powered by Alphex AI</span>
            </div>
            <div className="space-y-4 bg-paper p-6">
              <Bubble me>Do you build online stores?</Bubble>
              <Bubble>Yes! Stores with payments, shipping and order management. Want a quick quote?</Bubble>
              <Bubble me>Yes please</Bubble>
              <Bubble>Great — what's your budget range?</Bubble>
              <div className="flex flex-wrap gap-2 pl-1">
                {["Under ₹25k", "₹25k–₹50k", "₹50k+"].map((b) => (
                  <span key={b} className="rounded-full border bg-card px-3 py-1.5 text-xs">{b}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 border-t px-5 py-4">
              <div className="h-10 flex-1 rounded-full bg-secondary px-4 text-sm leading-10 text-muted-foreground">Type a message…</div>
              <span className="grid size-10 place-items-center rounded-full bg-ink text-ink-foreground">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Bubble({ children, me = false }: { children: ReactNode; me?: boolean }) {
  return (
    <div className={me ? "flex justify-end" : "flex"}>
      <p
        className={
          me
            ? "max-w-[78%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-sm text-ink-foreground"
            : "max-w-[78%] rounded-2xl rounded-bl-md border bg-card px-4 py-2.5 text-sm"
        }
      >
        {children}
      </p>
    </div>
  );
}

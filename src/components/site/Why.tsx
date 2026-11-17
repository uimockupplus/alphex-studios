import { Bot, Target, Timer } from "lucide-react";
import { Reveal } from "./Reveal";

const POINTS = [
  { k: "01 / Delivery", title: "Faster delivery", body: "Structured concepts, wireframes and first drafts in days — not weeks.", Icon: Timer },
  { k: "02 / Outcomes", title: "Conversion-first design", body: "Every page is designed around one clear action: enquiry, booking, purchase or sign-up.", Icon: Target },
  { k: "03 / Automation", title: "AI-ready website", body: "Add a chatbot, smart lead routing and automated follow-ups when you're ready.", Icon: Bot },
];

export function Why() {
  return (
    <section className="px-3">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink py-28 text-ink-foreground md:py-36">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-signal/20 blur-[120px]" />
        <div className="container-site relative">
          <Reveal className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <span className="eyebrow text-ink-muted">Why Alphex Studio</span>
              <h2 className="display-lg mt-5">
                AI-accelerated.
                <br />
                <span className="text-ink-muted">Human-refined.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-ink-muted">
              We use AI to move faster through research, wireframes, copy and development — but every
              website is refined by hand for your brand, audience and business goals.
            </p>
          </Reveal>

          <Reveal className="mt-16 flex items-center gap-4 md:mt-20" delay={100}>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">AI speed</span>
            <div className="relative h-px flex-1 bg-ink-border">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent to-signal" />
              <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_0_6px_color-mix(in_oklab,var(--signal)_20%,transparent)]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">Human craft</span>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {POINTS.map(({ k, title, body, Icon }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-ink-border bg-ink-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-signal/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">{k}</span>
                    <Icon className="size-5 text-signal" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-14 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

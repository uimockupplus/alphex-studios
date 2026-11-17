import { ArrowRight, ArrowUpRight, MessageCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "./BrowserFrame";
import dental from "@/assets/concept-dental.jpg";
import skincare from "@/assets/concept-skincare.jpg";
import salon from "@/assets/concept-salon.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="container-site relative">
        <div className="rise flex justify-center md:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card py-1.5 pl-1.5 pr-4 text-xs font-medium shadow-soft">
            <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-foreground">
              New
            </span>
            Now booking founding clients
            <span className="size-1.5 rounded-full bg-success pulse-dot" />
          </span>
        </div>

        <h1 className="display-xl rise mt-8 text-center md:text-left" style={{ animationDelay: "80ms" }}>
          Turn clicks
          <br />
          into <span className="marker">clients.</span>
        </h1>

        <div
          className="rise mt-10 grid items-end gap-8 md:grid-cols-[1.2fr_1fr]"
          style={{ animationDelay: "180ms" }}
        >
          <p className="mx-auto max-w-md text-center text-lg leading-relaxed text-muted-foreground md:mx-0 md:text-left">
            A design &amp; development studio building fast, modern, conversion-focused websites — with
            AI that captures your leads while you sleep.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <Button asChild variant="ink" size="xl">
              <a href="#contact">
                Get a free website quote <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="pill" size="xl">
              <a href="#work">
                See what we build <ArrowRight />
              </a>
            </Button>
          </div>
        </div>

        {/* Studio canvas */}
        <div className="rise relative mt-20 md:mt-24" style={{ animationDelay: "320ms" }}>
          <div className="relative mx-auto aspect-[16/10] max-w-5xl md:aspect-[16/8]">
            <BrowserFrame
              url="kinarabotanics.in"
              className="absolute left-0 top-[14%] hidden w-[38%] -rotate-[5deg] md:block"
            >
              <img src={skincare} alt="Skincare store concept" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
            </BrowserFrame>
            <BrowserFrame
              url="aurasalon.in"
              className="absolute right-0 top-[14%] hidden w-[38%] rotate-[5deg] md:block"
            >
              <img src={salon} alt="Salon booking concept" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
            </BrowserFrame>

            <BrowserFrame url="brightleafdental.in" className="relative z-10 mx-auto w-full md:w-[62%]">
              <div className="relative">
                <img src={dental} alt="Dental clinic website concept" width={1280} height={896} className="aspect-[16/10] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/80">
                    Brightleaf Dental
                  </p>
                  <p className="mt-2 max-w-xs font-display text-2xl font-semibold leading-tight tracking-tight text-ink-foreground md:text-3xl">
                    Healthy smiles, gentler visits.
                  </p>
                  <span className="mt-4 inline-flex rounded-full bg-signal px-4 py-2 text-xs font-semibold text-signal-foreground">
                    Book a free consultation
                  </span>
                </div>
              </div>
            </BrowserFrame>

            {/* Floating chips */}
            <div className="float-slow absolute -left-2 bottom-[6%] z-20 hidden items-center gap-3 rounded-2xl border bg-card p-3 pr-5 shadow-lift sm:flex md:left-[8%]">
              <span className="grid size-9 place-items-center rounded-xl bg-success/15 text-success">
                <MessageCircle className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold">New enquiry</p>
                <p className="text-[11px] text-muted-foreground">via WhatsApp · just now</p>
              </div>
            </div>
            <div
              className="float-slow absolute -right-2 top-[2%] z-20 hidden items-center gap-3 rounded-2xl border bg-card p-3 pr-5 shadow-lift sm:flex md:right-[10%]"
              style={{ animationDelay: "-3s" }}
            >
              <span className="grid size-9 place-items-center rounded-xl bg-signal text-signal-foreground">
                <Zap className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold">Loads in under a second</p>
                <p className="text-[11px] text-muted-foreground">Built for Core Web Vitals</p>
              </div>
            </div>
            <div
              className="float-slow absolute bottom-[-4%] right-[14%] z-20 hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-ink-foreground shadow-lift md:flex"
              style={{ animationDelay: "-1.5s" }}
            >
              <Sparkles className="size-3.5 text-signal" /> AI assistant qualified a lead
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = ["Websites", "Landing pages", "E-commerce", "Web apps", "SEO", "AI add-ons", "UI / UX", "Make it matter"];
  return (
    <div className="relative mt-8 overflow-hidden border-y bg-card py-5 md:mt-16">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={k === 1}>
            {items.map((t) => (
              <span key={t} className="flex items-center gap-10 font-display text-2xl font-medium tracking-tight text-foreground/80 md:text-3xl">
                {t}
                <span className="size-2 rounded-full bg-signal" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState, type ReactNode } from "react";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./BrowserFrame";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import dental from "@/assets/concept-dental.jpg";
import skincare from "@/assets/concept-skincare.jpg";
import salon from "@/assets/concept-salon.jpg";

const CONCEPTS = [
  { key: "dental", type: "Local business website", name: "Brightleaf Dental", url: "brightleafdental.in", body: "Build trust and generate enquiries with clear services, pricing and a WhatsApp-first contact flow." },
  { key: "store", type: "D2C e-commerce store", name: "Kinara Botanics", url: "kinarabotanics.in", body: "A clean catalogue, rich product pages, cart and checkout that make buying feel effortless." },
  { key: "saas", type: "SaaS landing page", name: "Flowdesk", url: "flowdesk.app", body: "Turn visitors into demo requests with a focused, conversion-driven product story." },
  { key: "salon", type: "Booking website", name: "Aura Salon & Spa", url: "aurasalon.in", body: "Help customers understand services and book an appointment in thirty seconds." },
] as const;

type Key = (typeof CONCEPTS)[number]["key"];

export function Work() {
  const [active, setActive] = useState<Key>("dental");
  const current = CONCEPTS.find((c) => c.key === active)!;

  return (
    <section id="work" className="py-28 md:py-40">
      <div className="container-site">
        <SectionHead
          eyebrow="Concepts / demos"
          title={
            <>
              What we can build
              <br />
              for your business.
            </>
          }
          lead="Example concepts that show the kind of digital experiences we design and develop. Pick one to preview."
        />

        <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-12">
          <Reveal className="flex flex-col gap-2">
            {CONCEPTS.map((c, i) => {
              const on = c.key === active;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={cn(
                    "group cursor-pointer rounded-2xl border p-5 text-left transition-all duration-300",
                    on ? "border-foreground/15 bg-card shadow-lift" : "border-transparent hover:bg-card/60",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      0{i + 1} · {c.type}
                    </span>
                    <span
                      className={cn(
                        "size-2 rounded-full transition-colors",
                        on ? "bg-signal ring-4 ring-signal/30" : "bg-border",
                      )}
                    />
                  </div>
                  <p className="mt-2 font-display text-xl font-semibold tracking-tight">{c.name}</p>
                  <div
                    className={cn(
                      "grid transition-all duration-500",
                      on ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </button>
              );
            })}
            <Button asChild variant="ink" size="xl" className="mt-4 self-start">
              <a href="#contact">
                Request a custom concept <ArrowUpRight />
              </a>
            </Button>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] dot-grid opacity-70 md:-inset-8" />
            <BrowserFrame url={current.url} className="relative">
              <div key={active} className="rise">
                {active === "dental" && <DentalPreview />}
                {active === "store" && <StorePreview />}
                {active === "saas" && <SaasPreview />}
                {active === "salon" && <SalonPreview />}
              </div>
            </BrowserFrame>
            <p className="relative mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Concept / demo — not a client project
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MiniNav({ brand, links, cta }: { brand: string; links: string[]; cta: string }) {
  return (
    <div className="flex items-center justify-between border-b px-6 py-4">
      <span className="font-display text-lg font-bold tracking-tight">{brand}</span>
      <div className="hidden gap-5 text-xs text-muted-foreground sm:flex">
        {links.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <span className="rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-medium text-ink-foreground">{cta}</span>
    </div>
  );
}

function DentalPreview() {
  const items = [
    ["Teeth whitening", "₹2,999"],
    ["Braces & aligners", "₹24,999"],
    ["Root canal", "₹3,999"],
    ["Kids dentistry", "₹799"],
  ];
  return (
    <div>
      <MiniNav brand="Brightleaf" links={["Treatments", "Doctors", "Pricing", "Reviews"]} cta="Book appointment" />
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center p-8 md:p-10">
          <span className="text-[11px] font-medium text-success">● Open today until 8:00 PM</span>
          <p className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight">
            Healthy smiles, gentler visits.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Modern dentistry for the whole family — painless treatments and transparent pricing.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-ink-foreground">Free consultation</span>
            <span className="rounded-full border px-4 py-2 text-xs font-medium">Meet the team</span>
          </div>
        </div>
        <img src={dental} alt="" width={1280} height={896} loading="lazy" className="h-full min-h-64 w-full object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-px border-t bg-border md:grid-cols-4">
        {items.map(([t, p]) => (
          <div key={t} className="bg-card p-5">
            <p className="text-sm font-medium">{t}</p>
            <p className="mt-1 text-xs text-muted-foreground">From {p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StorePreview() {
  const products = [
    ["Vitamin C Glow Serum", "₹649"],
    ["Rosewater Face Mist", "₹399"],
    ["Aloe Gel Moisturiser", "₹549"],
    ["Turmeric Night Cream", "₹799"],
  ];
  return (
    <div>
      <div className="bg-ink py-1.5 text-center font-mono text-[10px] tracking-widest text-ink-foreground">
        FREE SHIPPING OVER ₹499 · COD AVAILABLE
      </div>
      <MiniNav brand="kinara" links={["Shop", "Skin", "Hair", "Journal"]} cta="Bag (2)" />
      <div className="relative">
        <img src={skincare} alt="" width={1280} height={896} loading="lazy" className="h-72 w-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex max-w-xs flex-col justify-center p-8">
          <span className="font-mono text-[10px] tracking-widest">NEW · VITAMIN C RANGE</span>
          <p className="mt-3 font-display text-4xl font-semibold leading-[1.02] tracking-tight">Skin that feels like morning.</p>
          <span className="mt-5 self-start rounded-full bg-ink px-4 py-2 text-xs font-medium text-ink-foreground">Shop bestsellers</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
        {products.map(([n, p], i) => (
          <div key={n}>
            <div className="aspect-square rounded-xl bg-paper" style={{ backgroundImage: `url(${skincare})`, backgroundSize: "300%", backgroundPosition: `${30 + i * 15}% 55%` }} />
            <p className="mt-3 text-xs font-medium">{n}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{p}</span>
              <span className="flex text-foreground">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-2.5 fill-current" />
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasPreview() {
  const stats = [
    ["Tickets resolved", "1,284", "▲ 12%"],
    ["Avg. first reply", "2m 14s", "▼ 38%"],
    ["CSAT", "96%", "▲ 4%"],
  ];
  const rows = [
    ["Refund request", "AI drafted"],
    ["Login issue", "Resolved"],
    ["Plan upgrade", "AI drafted"],
    ["Invoice copy", "Resolved"],
  ];
  return (
    <div className="bg-paper">
      <MiniNav brand="flowdesk" links={["Product", "Pricing", "Docs", "Customers"]} cta="Start free" />
      <div className="px-8 pb-2 pt-10 text-center">
        <span className="rounded-full border bg-card px-3 py-1 text-[11px]">✦ New: AI replies drafted in seconds</span>
        <p className="mx-auto mt-5 max-w-md font-display text-4xl font-semibold leading-[1.02] tracking-tight">Support that runs itself.</p>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">One inbox for every channel. Flowdesk triages, drafts and routes.</p>
      </div>
      <div className="mx-6 mb-6 mt-8 overflow-hidden rounded-xl border bg-card md:mx-10">
        <div className="grid md:grid-cols-[150px_1fr]">
          <div className="hidden flex-col gap-1 border-r p-4 text-xs text-muted-foreground md:flex">
            {["Overview", "Inbox", "Automations", "Reports", "Team"].map((l, i) => (
              <span key={l} className={cn("rounded-md px-2 py-1.5", i === 0 && "bg-secondary font-medium text-foreground")}>{l}</span>
            ))}
          </div>
          <div className="p-5">
            <div className="grid grid-cols-3 gap-3">
              {stats.map(([l, v, d]) => (
                <div key={l} className="rounded-lg border p-3">
                  <p className="text-[10px] text-muted-foreground">{l}</p>
                  <p className="mt-1 font-display text-xl font-semibold tracking-tight">{v}</p>
                  <p className="text-[10px] text-success">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 divide-y rounded-lg border">
              {rows.map(([t, s]) => (
                <div key={t} className="flex items-center justify-between px-3 py-2.5 text-xs">
                  <span>{t}</span>
                  <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", s === "AI drafted" ? "bg-signal text-signal-foreground" : "bg-secondary text-muted-foreground")}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SalonPreview() {
  const [svc, setSvc] = useState("Haircut");
  const [day, setDay] = useState(11);
  const [time, setTime] = useState("12:30");
  return (
    <div>
      <MiniNav brand="AURA" links={["Hair", "Skin", "Bridal", "Spa"]} cta="Book now" />
      <div className="grid md:grid-cols-[1fr_1.05fr]">
        <div className="relative min-h-72">
          <img src={salon} alt="" width={1280} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute bottom-0 p-7">
            <span className="font-mono text-[10px] tracking-widest text-ink-foreground/80">SALON · SPA · BRIDAL</span>
            <p className="mt-2 font-display text-3xl font-semibold leading-[1.02] tracking-tight text-ink-foreground">Your best self, by appointment.</p>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between">
            <p className="font-display text-lg font-semibold tracking-tight">Book your visit</p>
            <span className="text-[11px] text-muted-foreground">Step 1 of 3</span>
          </div>
          <Label>Service</Label>
          <div className="flex flex-wrap gap-2">
            {["Haircut", "Facial", "Bridal", "Spa"].map((s) => (
              <Chip key={s} on={svc === s} onClick={() => setSvc(s)}>{s}</Chip>
            ))}
          </div>
          <Label>Date</Label>
          <div className="grid grid-cols-7 gap-1.5">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
              <button
                key={d}
                onClick={() => setDay(9 + i)}
                className={cn(
                  "cursor-pointer rounded-lg border py-2 text-center transition-colors",
                  day === 9 + i ? "border-ink bg-ink text-ink-foreground" : "hover:border-foreground/30",
                )}
              >
                <span className="block text-[9px] opacity-70">{d}</span>
                <span className="text-sm font-semibold">{9 + i}</span>
              </button>
            ))}
          </div>
          <Label>Time</Label>
          <div className="grid grid-cols-3 gap-1.5">
            {["10:00", "11:00", "12:30", "2:00", "4:30", "6:00"].map((t) => (
              <Chip key={t} on={time === t} onClick={() => setTime(t)}>{t}</Chip>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between rounded-xl bg-paper p-3 pl-4">
            <span className="text-xs">
              <span className="font-medium">{svc}</span> · {day} Nov · {time}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-signal px-3 py-1.5 text-[11px] font-semibold text-signal-foreground">
              <Check className="size-3" /> Confirm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="mb-2 mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{children}</p>;
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-full border px-3.5 py-1.5 text-xs transition-colors",
        on ? "border-ink bg-ink text-ink-foreground" : "hover:border-foreground/30",
      )}
    >
      {children}
    </button>
  );
}

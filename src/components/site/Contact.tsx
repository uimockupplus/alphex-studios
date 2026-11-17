import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { BUDGET_OPTIONS, CONTACT, SERVICE_OPTIONS, buildQuoteMessage, buildWhatsAppLink, type QuoteRequest } from "./data";
import { Reveal } from "./Reveal";

const fieldCls =
  "h-12 w-full rounded-xl border border-ink-border bg-ink-card px-4 text-sm text-ink-foreground placeholder:text-ink-muted/70 outline-none transition-colors focus:border-signal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as unknown as QuoteRequest;
    const url = buildWhatsAppLink(buildQuoteMessage(data));
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    toast.success("Opening WhatsApp with your request", {
      description: "Hit send in WhatsApp and we'll reply with a recommendation.",
    });
  }

  return (
    <section id="contact" className="px-3 pb-3">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink py-24 text-ink-foreground md:py-32">
        <div className="pointer-events-none absolute -bottom-48 -left-40 size-[560px] rounded-full bg-signal/15 blur-[140px]" />
        <div className="container-site relative grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <span className="eyebrow text-ink-muted">Contact</span>
            <h2 className="display-lg mt-5">
              Ready to build a website that <span className="text-signal">works?</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              Tell us a little about your project. We'll reply with a clear recommendation, timeline and estimate.
            </p>

            <div className="mt-12 space-y-3">
              <ContactRow href={buildWhatsAppLink("Hi Alphex Studio! I'd like to discuss a website.")} icon={<MessageCircle className="size-4" />} label="WhatsApp" value={CONTACT.whatsappDisplay} />
              <ContactRow href={`mailto:${CONTACT.email}`} icon={<Mail className="size-4" />} label="Email" value={CONTACT.email} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-ink-border bg-ink/60 p-6 backdrop-blur [color-scheme:dark] md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required><input name="name" required className={fieldCls} placeholder="Your name" /></Field>
                <Field label="Email" required><input name="email" type="email" required className={fieldCls} placeholder="you@company.com" /></Field>
                <Field label="Phone / WhatsApp" required><input name="phone" type="tel" required className={fieldCls} placeholder="+91" /></Field>
                <Field label="Business name" required><input name="business" required className={fieldCls} placeholder="Company" /></Field>
                <Field label="Website URL" className="sm:col-span-2"><input name="website" className={fieldCls} placeholder="Optional" /></Field>
                <Field label="Service needed" required>
                  <select name="service" required defaultValue="" className={fieldCls}>
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Budget range" required>
                  <select name="budget" required defaultValue="" className={fieldCls}>
                    <option value="" disabled>Select a range</option>
                    {BUDGET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Project details" required className="sm:col-span-2">
                  <textarea name="details" required rows={4} className={`${fieldCls} h-auto resize-none py-3`} placeholder="What are you looking to build?" />
                </Field>
              </div>
              <Button type="submit" variant="signal" size="xl" className="mt-6 w-full">
                {sent ? "Send again" : "Send my quote request"} <ArrowUpRight />
              </Button>
              <p className="mt-4 text-center text-xs text-ink-muted">
                Your details will only be used to respond to your enquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: ReactNode }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block text-xs font-medium text-ink-muted">
        {label} {required && <span className="text-signal">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({ href, icon, label, value }: { href: string; icon: ReactNode; label: string; value: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-ink-border p-4 transition-colors hover:border-signal/50 hover:bg-ink-card"
    >
      <span className="flex items-center gap-4">
        <span className="grid size-10 place-items-center rounded-xl bg-ink-card text-signal">{icon}</span>
        <span>
          <span className="block text-xs text-ink-muted">{label}</span>
          <span className="font-medium">{value}</span>
        </span>
      </span>
      <ArrowUpRight className="size-4 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
    </a>
  );
}

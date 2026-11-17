import { CONTACT, NAV, buildWhatsAppLink } from "./data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Fast, modern, conversion-focused websites for startups, local businesses and growing brands.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">A division of Alphex AI</p>
          </div>
          <FooterCol title="Services" items={["Website design", "Landing pages", "E-commerce", "Web apps & portals", "SEO & maintenance"].map((l) => ({ label: l, href: "#services" }))} />
          <FooterCol title="Studio" items={[...NAV, { label: "Contact", href: "#contact" }]} />
          <FooterCol
            title="Get in touch"
            items={[
              { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { label: `WhatsApp · ${CONTACT.whatsappDisplay}`, href: buildWhatsAppLink() },
              { label: CONTACT.site, href: `https://${CONTACT.site}` },
            ]}
          />
        </div>

        <p
          aria-hidden
          className="mt-20 select-none font-display text-[clamp(4rem,17vw,15rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-foreground/[0.06]"
        >
          Alphex Studio
        </p>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Alphex Studio. All rights reserved.</span>
          <span className="flex gap-6">
            <a href="#top" className="hover:text-foreground">Privacy Policy</a>
            <a href="#top" className="hover:text-foreground">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="transition-colors hover:text-muted-foreground">{i.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

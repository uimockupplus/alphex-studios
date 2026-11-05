 "use client";

import { useState } from "react";

const services = [
  { n: "01", icon: "◫", title: "Website Design & Development", desc: "A distinctive, responsive website built around your brand and business goals.", href: "/services/website-design-development" },
  { n: "02", icon: "↗", title: "Landing Pages & Funnels", desc: "Focused experiences that turn campaign traffic into meaningful enquiries.", href: "/services/landing-pages" },
  { n: "03", icon: "▦", title: "E-commerce Development", desc: "Thoughtful online stores that make discovering and buying feel effortless.", href: "/services/ecommerce" },
  { n: "04", icon: "⌘", title: "UI/UX Design", desc: "Clear, intuitive interfaces for websites, products, and digital experiences.", href: "/services/ui-ux-design" },
  { n: "05", icon: "▤", title: "Web Apps & Portals", desc: "Custom dashboards, client portals, and tools shaped around your workflow.", href: "/services/web-apps" },
  { n: "06", icon: "⌁", title: "SEO, Performance & Maintenance", desc: "A faster, healthier website with ongoing care and room to improve.", href: "/services/seo-performance" },
];

const steps = [
  ["01", "Discover", "We learn about your business, audience, goals, and the problem your website needs to solve."],
  ["02", "Strategy & Wireframes", "We map the content, structure, and user journey before moving into visual design."],
  ["03", "Design & Build", "We bring the experience to life, then test it across devices and real-world use cases."],
  ["04", "Launch & Grow", "We prepare your launch and help you plan what comes next."],
];

const projects = [
  { no: "01", name: "[PROJECT NAME]", category: "[INDUSTRY / CATEGORY]", note: "[Add a concise project overview or verified result.]", visual: "visual-one", tag: "Website experience" },
  { no: "02", name: "[PROJECT NAME]", category: "[INDUSTRY / CATEGORY]", note: "[Add a concise project overview or verified result.]", visual: "visual-two", tag: "Digital product" },
  { no: "03", name: "[PROJECT NAME]", category: "[INDUSTRY / CATEGORY]", note: "[Add a concise project overview or verified result.]", visual: "visual-three", tag: "E-commerce" },
];

const packages = [
  { name: "Launch", description: "A considered starting point for a new business website.", price: "[PRICE]", features: ["Business-focused website", "Responsive design", "Core pages and contact flow", "On-page SEO foundations"], featured: false },
  { name: "Growth", description: "A more tailored experience for a business ready to grow.", price: "[PRICE]", features: ["Everything in Launch", "Custom page layouts", "Conversion-focused sections", "Analytics-ready setup"], featured: true },
  { name: "Commerce", description: "A storefront built around your products and customers.", price: "[PRICE]", features: ["E-commerce experience", "Product and collection layouts", "Store configuration", "Checkout journey review"], featured: false },
  { name: "Care Plan", description: "Ongoing attention for a website that needs to stay healthy.", price: "[PRICE]", features: ["Website updates", "Routine checks", "Technical support", "Improvement recommendations"], featured: false },
];

const faqs = [
  ["How long does a website project take?", "Timelines depend on the scope, content readiness, integrations, and feedback cycles. Once we understand your requirements, we'll outline a realistic project schedule."],
  ["How much does a website cost?", "Every project is different. Share your goals and requirements through the quote form and we'll discuss an appropriate scope and estimate. Package prices are intentionally shown as placeholders until confirmed."],
  ["How many revisions are included?", "The revision process and approval checkpoints are agreed in the project scope before work begins. This keeps feedback clear and expectations aligned."],
  ["Which platforms and technologies do you use?", "We choose technology based on the needs of the project. Options may include modern Next.js websites, content-managed websites, and suitable e-commerce platforms."],
  ["Can you add AI features to my website?", "Yes. Optional integrations can include chatbots, smart lead forms, WhatsApp routing, CRM connections, and automated follow-ups. Feasibility depends on your tools and workflow."],
  ["Do you provide ongoing maintenance?", "Yes. Website care can be discussed as a separate engagement, covering agreed updates, checks, support, and improvements."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a className={secondary ? "button button-secondary" : "button button-primary"} href={href}>{children}</a>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const nav = [["Services", "#services"], ["Work", "#work"], ["Process", "#process"], ["Pricing", "#pricing"], ["About", "#about"]];

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#top" aria-label="Alphex Studios home">ALPHEX <span>STUDIOS.</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="nav-cta" href="/get-a-quote">Get a Free Website Quote <Arrow diagonal /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              <span></span><span></span>
            </button>
          </div>
        </div>
        <div className={`mobile-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href], i) => <a key={label} href={href} onClick={() => setMenuOpen(false)}><small>0{i + 1}</small>{label}<Arrow diagonal /></a>)}
            <a className="mobile-quote" href="/get-a-quote" onClick={() => setMenuOpen(false)}>Get a Free Website Quote <Arrow diagonal /></a>
          </nav>
          <p>Digital experiences, built for growth.</p>
        </div>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i></i> AI-ASSISTED WEB DESIGN & DEVELOPMENT</div>
          <h1>We build websites that turn <span>visitors into customers.</span></h1>
          <p className="hero-sub">Alphex Studios designs fast, modern, conversion-focused websites for startups, local businesses, and growing brands.</p>
          <div className="hero-actions">
            <ButtonLink href="/get-a-quote">Get a Free Website Quote <Arrow diagonal /></ButtonLink>
            <ButtonLink href="#work" secondary>View Our Work <Arrow /></ButtonLink>
          </div>
          <div className="hero-note"><span className="note-dot"></span> Strategy · Design · Development · AI add-ons</div>
        </div>
        <div className="hero-art" aria-label="Abstract preview of a modern website interface">
          <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
          <div className="mockup-glow"></div>
          <div className="browser-card">
            <div className="browser-top"><div className="browser-dots"><i></i><i></i><i></i></div><div className="browser-address">yourbrand.com</div><span className="browser-menu">•••</span></div>
            <div className="mockup-content">
              <div className="mockup-nav"><b>YOUR BRAND<span>.</span></b><div><i></i><i></i><i></i></div><em></em></div>
              <div className="mockup-hero">
                <div className="mockup-kicker">A BETTER WAY FORWARD</div>
                <div className="mockup-title">Make your<br/><span>next move.</span></div>
                <div className="mockup-line"></div><div className="mockup-button"></div>
              </div>
              <div className="mockup-bottom"><div><b></b><i></i></div><div><b></b><i></i></div><div><b></b><i></i></div></div>
            </div>
          </div>
          <div className="float-chip chip-top"><span className="chip-icon">✳</span><div><b>Thoughtful design</b><small>Every detail has a purpose</small></div></div>
          <div className="float-chip chip-bottom"><span className="chip-check">↗</span><div><b>Built to convert</b><small>Designed around action</small></div></div>
          <div className="art-index">FIG. 01 <span>— DIGITAL EXPERIENCE</span></div>
        </div>
        <div className="hero-bottom"><span>INDEPENDENT DIGITAL STUDIO</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="trust-strip" aria-label="Our capabilities">
        <div className="trust-inner"><span>WHAT WE BUILD</span><p>Websites <b>·</b> Landing Pages <b>·</b> E-commerce <b>·</b> UI/UX <b>·</b> Web Apps <b>·</b> AI Add-ons</p></div>
      </section>

      <section className="section section-wrap services-section" id="services">
        <div className="section-heading">
          <div><div className="eyebrow">01 / WHAT WE DO</div><h2>Digital, designed<br/>to <span>move business forward.</span></h2></div>
          <p>From your first website to a more connected digital experience, we bring the right thinking and technology together.</p>
        </div>
        <div className="services-grid">
          {services.map(s => <a className="service-card" href={s.href} key={s.n}><div className="card-top"><span className="service-icon">{s.icon}</span><span className="card-number">{s.n}</span></div><h3>{s.title}</h3><p>{s.desc}</p><span className="text-link">Learn more <Arrow diagonal /></span></a>)}
        </div>
      </section>

      <section className="why-section" id="about">
        <div className="section-wrap why-layout">
          <div className="why-copy"><div className="eyebrow">02 / THE ALPHEX APPROACH</div><h2>AI-accelerated.<br/><span>Human-refined.</span></h2><p>We combine modern tools with human judgement to create digital experiences that are considered, useful, and built around real business needs.</p><a className="text-link" href="/about">Get to know the studio <Arrow diagonal /></a></div>
          <div className="benefit-list">
            <article className="benefit"><span>01</span><div><h3>Move with more momentum.</h3><p>An AI-assisted workflow helps us explore, iterate, and execute efficiently. Every important decision still gets human attention.</p></div><b>↗</b></article>
            <article className="benefit"><span>02</span><div><h3>Design with a clear purpose.</h3><p>Good-looking pages are a start. We focus on messaging, usability, and journeys that make the next step clear.</p></div><b>↗</b></article>
            <article className="benefit"><span>03</span><div><h3>Ready for what's next.</h3><p>Build a strong website foundation, with the option to add chatbots, lead automation, and connected workflows.</p></div><b>↗</b></article>
          </div>
        </div>
      </section>

      <section className="section section-wrap process-section" id="process">
        <div className="section-heading"><div><div className="eyebrow">03 / HOW WE WORK</div><h2>Clarity at every<br/><span>step of the process.</span></h2></div><p>Good work comes from good collaboration. Here's how we take a project from first conversation to launch.</p></div>
        <div className="process-grid">{steps.map(([n, title, desc]) => <article className="process-card" key={n}><span>{n}</span><div className="process-line"></div><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-wrap">
          <div className="section-heading"><div><div className="eyebrow">04 / SELECTED WORK</div><h2>Made with intent.<br/><span>Built for what's next.</span></h2></div><p>A selection of digital work will live here. We only publish real projects and clearly label concept explorations.</p></div>
          <div className="work-grid">{projects.map(p => <article className="work-card" key={p.no}><a href="/work" className={`project-visual ${p.visual}`} aria-label={`View ${p.name} portfolio placeholder`}><div className="project-browser"><div className="project-browser-top"><i></i><i></i><i></i><span>{p.tag}</span></div><div className="project-screen"><div className="project-screen-label">[PROJECT PREVIEW]</div><div className="project-screen-title">{p.no === "01" ? "A clearer digital presence." : p.no === "02" ? "Designed around people." : "A better way to shop."}</div><div className="project-screen-cta"></div><div className="project-screen-blocks"><i></i><i></i><i></i></div></div></div><span className="project-open">↗</span></a><div className="project-meta"><div><small>{p.category}</small><h3>{p.name}</h3></div><span>{p.no}</span></div><p className="placeholder-note">{p.note}</p><span className="draft-label">PORTFOLIO PLACEHOLDER</span></article>)}</div>
          <div className="center-action"><ButtonLink href="/work" secondary>View All Work <Arrow diagonal /></ButtonLink></div>
        </div>
      </section>

      <section className="ai-section">
        <div className="section-wrap ai-layout">
          <div className="ai-copy"><div className="eyebrow">05 / OPTIONAL AI ADD-ONS</div><h2>Your website can do <span>more than exist.</span></h2><p>Connect your website to the tools and workflows that help your team respond, organize, and follow up. Add only what makes sense for your business.</p><a className="text-link" href="https://alphexai.com" target="_blank" rel="noreferrer">Explore Alphex AI <Arrow diagonal /></a></div>
          <div className="ai-feature-grid">
            <div className="ai-feature"><span>✳</span><h3>Website chatbots</h3><p>Help visitors find answers and take the next step.</p></div>
            <div className="ai-feature"><span>⌁</span><h3>Smart lead forms</h3><p>Collect useful context before a conversation starts.</p></div>
            <div className="ai-feature"><span>↗</span><h3>WhatsApp routing</h3><p>Connect website enquiries with the right conversation.</p></div>
            <div className="ai-feature"><span>▤</span><h3>CRM integration</h3><p>Send lead information into your existing workflow.</p></div>
            <div className="ai-feature ai-feature-wide"><span>⟳</span><div><h3>Automated follow-ups</h3><p>Plan timely follow-ups using the tools and rules your business approves.</p></div></div>
          </div>
          <div className="ai-bottom"><span>BUILT AROUND YOUR WORKFLOW</span><ButtonLink href="/get-a-quote" secondary>Add AI to My Website <Arrow diagonal /></ButtonLink></div>
        </div>
      </section>

      <section className="section section-wrap pricing-section" id="pricing">
        <div className="section-heading"><div><div className="eyebrow">06 / WAYS TO WORK TOGETHER</div><h2>The right scope.<br/><span>The right starting point.</span></h2></div><p>These are engagement starting points, not fixed promises. Final scope and pricing are confirmed after understanding your requirements.</p></div>
        <div className="pricing-grid">{packages.map(pkg => <article className={`price-card ${pkg.featured ? "price-featured" : ""}`} key={pkg.name}>{pkg.featured && <div className="popular-label">FLEXIBLE BUILD</div>}<div className="price-head"><h3>{pkg.name}</h3><p>{pkg.description}</p></div><div className="price-value"><small>STARTING FROM</small><strong>{pkg.price}</strong></div><div className="price-divider"></div><ul>{pkg.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul><a className={pkg.featured ? "button button-primary price-button" : "button button-secondary price-button"} href="/get-a-quote">Get a Custom Quote <Arrow diagonal /></a></article>)}</div>
        <p className="pricing-footnote">[PRICE] is a placeholder and must be replaced with approved pricing before publication.</p>
      </section>

      <section className="faq-section">
        <div className="section-wrap faq-layout"><div><div className="eyebrow">07 / GOOD TO KNOW</div><h2>Questions, <span>answered.</span></h2><p>Still figuring out what your project needs? Start with a conversation.</p><a className="text-link" href="/contact">Ask us something <Arrow diagonal /></a></div><div className="faq-list">{faqs.map(([q, a], i) => <article className={`faq-item ${openFaq === i ? "faq-open" : ""}`} key={q}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <p>{a}</p>}</article>)}</div></div>
      </section>

      <section className="final-cta section-wrap"><div className="cta-orb"></div><div className="eyebrow">HAVE A PROJECT IN MIND?</div><h2>Ready to build a website that <span>works for your business?</span></h2><p>Tell us what you're building, where you want to go, and what you need your website to do. Let's find the right way forward.</p><div className="hero-actions"><ButtonLink href="/get-a-quote">Get a Free Website Quote <Arrow diagonal /></ButtonLink><a className="button button-secondary" href="https://wa.me/[WHATSAPP_NUMBER]" target="_blank" rel="noreferrer">Chat on WhatsApp <Arrow diagonal /></a></div><small>Replace [WHATSAPP_NUMBER] with the approved business number before launch.</small></section>

      <footer className="footer">
        <div className="section-wrap">
          <div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#top">ALPHEX <span>STUDIOS.</span></a><p>We design and develop modern websites and digital experiences that help businesses move forward.</p><span className="parent-brand">A DIVISION OF <b>ALPHEX AI</b></span></div>
            <div className="footer-column"><h4>EXPLORE</h4><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#pricing">Pricing</a><a href="/about">About</a></div>
            <div className="footer-column"><h4>SERVICES</h4><a href="/services/website-design-development">Website development</a><a href="/services/landing-pages">Landing pages</a><a href="/services/ecommerce">E-commerce</a><a href="/services/ui-ux-design">UI/UX design</a><a href="/services/web-apps">Web apps</a></div>
            <div className="footer-column"><h4>GET IN TOUCH</h4><a href="/get-a-quote">Get a free quote ↗</a><a href="/contact">Contact the studio</a><a href="mailto:[EMAIL_ADDRESS]">[EMAIL_ADDRESS]</a><a href="https://wa.me/[WHATSAPP_NUMBER]">WhatsApp ↗</a><h4 className="social-heading">FOLLOW</h4><a href="[LINKEDIN_URL]">LinkedIn ↗</a><a href="[INSTAGRAM_URL]">Instagram ↗</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Alphex Studios. All rights reserved.</span><div><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a></div><span>DESIGNED WITH INTENT. BUILT TO MOVE.</span></div>
        </div>
      </footer>
      <a className="whatsapp-float" href="https://wa.me/[WHATSAPP_NUMBER]" target="_blank" rel="noreferrer" aria-label="Chat with Alphex Studios on WhatsApp">◔</a>
    </main>
  );
}

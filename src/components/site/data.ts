export const CONTACT = {
  email: "team@alphexai.com",
  whatsappDisplay: "+91 91824 19070",
  whatsappNumber: "919182419070",
  site: "alphexai.com",
};

export function buildWhatsAppLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const SERVICES = [
  { title: "Website Design & Development", body: "Modern, mobile-friendly websites that build trust and generate enquiries.", tag: "Web" },
  { title: "Landing Pages & Funnels", body: "High-converting pages for ads, offers, product launches and lead campaigns.", tag: "Growth" },
  { title: "E-commerce Development", body: "Online stores with smooth browsing, checkout, payments and order management.", tag: "Commerce" },
  { title: "UI / UX Design", body: "Clear, intuitive interfaces for websites, SaaS products, dashboards and mobile.", tag: "Design" },
  { title: "Web Apps & Portals", body: "Custom booking systems, customer portals, dashboards and internal tools.", tag: "Product" },
  { title: "SEO, Speed & Maintenance", body: "Faster-loading, search-ready websites with ongoing care and support.", tag: "Care" },
];

export const PROCESS = [
  { title: "Discover", body: "We understand your business, customers, goals and competitors.", deliverable: "Project brief" },
  { title: "Plan & Wireframe", body: "Site structure, page flow and a conversion-focused layout.", deliverable: "Sitemap" },
  { title: "Design & Build", body: "We design, develop and refine across desktop and mobile.", deliverable: "Live preview" },
  { title: "Launch & Grow", body: "Test, deploy and support — with optional SEO and AI automation.", deliverable: "Go-live" },
];

export type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  delivery: string;
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Landing Page",
    price: "₹6,999",
    blurb: "One focused page for ads, offers or launches.",
    features: ["1 conversion-focused page", "Mobile responsive design", "Lead form", "WhatsApp button", "Basic on-page SEO", "Analytics setup"],
    delivery: "3–5 days",
  },
  {
    name: "Business Website",
    price: "₹14,999",
    blurb: "Everything a growing local business needs.",
    features: ["Up to 6 pages", "Custom responsive design", "Contact / quote form", "WhatsApp button", "Basic on-page SEO", "Google Analytics", "1 revision round"],
    delivery: "7–12 days",
    popular: true,
  },
  {
    name: "Growth Website",
    price: "₹29,999",
    blurb: "Content, SEO and lead capture that compounds.",
    features: ["Up to 12 pages", "Blog / CMS setup", "Advanced lead capture", "SEO setup", "Speed optimisation", "2 revision rounds"],
    delivery: "2–3 weeks",
  },
  {
    name: "E-commerce Launch",
    price: "₹39,999",
    blurb: "A complete store, ready to take orders.",
    features: ["Store setup", "Up to 30 products", "Payment gateway setup", "Shipping / tax configuration", "Product page design", "Basic training"],
    delivery: "3–4 weeks",
  },
];

export const FAQS = [
  { q: "How long does a website take?", a: "A landing page usually takes 3–5 days. A business website typically takes 7–12 days. E-commerce and custom projects depend on scope." },
  { q: "How much does a website cost?", a: "Landing pages start at ₹6,999, business websites at ₹14,999, and e-commerce stores at ₹39,999. We share a fixed quote after understanding your requirements." },
  { q: "Do you use AI to build websites?", a: "Yes. We use AI to speed up research, wireframes, content drafts and development. Our team reviews, refines, tests and finalises every website." },
  { q: "Do you have client projects yet?", a: "Alphex Studio is newly launched and accepting a limited number of founding-client projects. Our website, process and concept designs demonstrate our approach; client projects will be added with permission after launch." },
  { q: "Can you redesign my existing website?", a: "Yes. We can improve the design, speed, mobile experience, SEO and conversion flow without losing your existing content or search rankings." },
  { q: "Do you provide maintenance?", a: "Yes. Our care plans include updates, backups, security checks, uptime monitoring and content edits." },
];

export const SERVICE_OPTIONS = [
  "Website Design & Development",
  "Landing Page",
  "E-commerce Website",
  "Website Redesign",
  "UI/UX Design",
  "Web App / Portal",
  "SEO & Performance",
  "Maintenance",
  "AI Add-ons",
];

export const BUDGET_OPTIONS = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

export type QuoteRequest = {
  name: string;
  email: string;
  phone: string;
  business: string;
  website?: string;
  service: string;
  budget: string;
  details: string;
};

export function buildQuoteMessage(q: QuoteRequest) {
  return [
    "Hi Alphex Studio, I'd like a website quote.",
    "",
    `Name: ${q.name}`,
    `Business: ${q.business}`,
    `Email: ${q.email}`,
    `Phone: ${q.phone}`,
    q.website ? `Current site: ${q.website}` : null,
    `Service: ${q.service}`,
    `Budget: ${q.budget}`,
    "",
    q.details,
  ]
    .filter((l) => l !== null)
    .join("\n");
}

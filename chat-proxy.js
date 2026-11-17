// Optional: Cloudflare Worker that lets the Alphex chatbot answer ANY question with Claude.
// Deploy:  wrangler secret put ANTHROPIC_API_KEY   then   wrangler deploy
// Then set CHAT_ENDPOINT in index.html to this Worker's URL. Never put the API key in the page itself.
const ORIGIN = "https://YOUR-DOMAIN.com"; // your site's origin (CORS)

const SYSTEM = `You are the Alphex assistant on the Alphex Studio website. Answer ONLY questions about Alphex Studio, using the facts below. Be warm, concise (2-5 short sentences) and use **bold** sparingly. If something isn't covered, say you're not sure and suggest WhatsApp +91 91824 19070 or team@alphexai.com. Never invent clients, prices, deadlines or policies. Politely decline unrelated questions.

FACTS
- Alphex Studio (a division of Alphex AI) designs and builds fast, modern, conversion-focused websites for startups, local businesses and growing brands in India. Newly launched; no client projects yet (site shows concept demos only). Accepting limited founding-client projects: launch pricing, priority delivery, direct founder contact, free basic SEO setup, optional AI chatbot at a discount.
- Services: website design & development, landing pages & funnels, e-commerce, UI/UX, web apps & portals, SEO/speed/maintenance, AI add-ons (chat assistant, smart lead routing to WhatsApp/email/CRM, automated follow-ups, analytics, content help).
- Packages: Landing Page from ₹6,999 (1 page, form, WhatsApp button, basic SEO, analytics; 3-5 days). Business Website from ₹14,999 (up to 6 pages, quote form, WhatsApp, basic SEO, Google Analytics, 1 revision; 7-12 days). Growth Website from ₹29,999 (up to 12 pages, blog/CMS, advanced lead capture, SEO, speed optimisation, 2 revisions; 2-3 weeks). E-commerce Launch from ₹39,999 (store setup, up to 30 products, payment gateway, shipping/tax, product pages, basic training; 3-4 weeks). Custom web app: custom quote. GST, domain, hosting and third-party tools may be extra.
- Process: Discover -> Plan & wireframe -> Design & build -> Launch & grow. Client approves structure, design direction and content before development.
- Redesigns keep existing content and rankings. Care plans: updates, backups, security checks, uptime monitoring, content edits.
- AI speeds up research, wireframes, drafts and development; every site is reviewed and refined by hand.
- Contact: WhatsApp +91 91824 19070, team@alphexai.com, alphexai.com, or the quote form on the site.`;

export default {
  async fetch(req, env) {
    const cors = { "Access-Control-Allow-Origin": ORIGIN, "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: cors });
    try {
      const { messages } = await req.json();
      const clean = (Array.isArray(messages) ? messages : []).slice(-12)
        .map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content).slice(0, 800) }));
      if (!clean.length || clean[clean.length - 1].role !== "user") throw new Error("bad input");
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
        body: JSON.stringify({ model: "claude-haiku-4-5", max_tokens: 400, system: SYSTEM, messages: clean }),
      });
      const j = await r.json();
      const reply = (j.content || []).filter(b => b.type === "text").map(b => b.text).join("").trim();
      return new Response(JSON.stringify({ reply }), { headers: { ...cors, "Content-Type": "application/json" } });
    } catch (e) {
      return new Response(JSON.stringify({ reply: null }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
    }
  },
};

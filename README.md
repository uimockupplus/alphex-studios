# Alphex Studios homepage

A responsive Next.js App Router homepage built with TypeScript and Tailwind CSS. The visual layer uses custom CSS and inline text glyphs for icons; no additional UI, icon, animation, or form libraries are required.

## Files
- `src/app/page.tsx` — homepage sections and interactions
- `src/app/globals.css` — responsive visual system and layout
- `src/app/layout.tsx` — metadata and root layout

## Integrate
Copy the `src/app` files into your existing Next.js App Router project. Keep your existing `package.json`, Tailwind configuration, and TypeScript configuration.

The project assumes Tailwind CSS is already configured. The homepage styles are primarily custom CSS.

## Replace before launch
Search for these placeholders:
- `[WHATSAPP_NUMBER]` — international number, digits only, no plus sign
- `[EMAIL_ADDRESS]`
- `[LINKEDIN_URL]`
- `[INSTAGRAM_URL]`
- `[PROJECT NAME]`, `[INDUSTRY / CATEGORY]`, project notes and portfolio preview content
- `[PRICE]` in package cards

The quote CTA links to `/get-a-quote`, which must be implemented before launch. Do not advertise form submission until a real lead-delivery endpoint is configured.

## Notes
- Google Fonts are loaded from Google Fonts CSS in `globals.css`. For self-hosting, download and serve the font files locally.
- WhatsApp URLs are placeholders until configured.
- The FAQ accordion and mobile overlay use React state.
- Replace placeholder portfolio cards with real projects or clearly identified concept work.
- Verify legal pages, contact details, analytics IDs, and consent language before publishing.

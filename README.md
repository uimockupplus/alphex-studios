# Alphex Studio — Vercel Hybrid Chatbot

This is a Vercel-native integration for the existing static HTML Alphex Studio website.

## Included
- `assets/alphex-chatbot.js`: floating liquid-glass chat widget.
- `api/chat.js`: Vercel serverless function that calls Groq securely.
- `lib/knowledge.js`: website-grounded Alphex Studio knowledge.
- `index-integration-snippet.html`: the one script tag to add before `</body>`.

## 1. Add files to your existing GitHub repository

Copy these folders into the root of `uimockupplus/alphex-studios`:

```text
api/chat.js
assets/alphex-chatbot.js
lib/knowledge.js
```

Do not replace your existing `index.html`, CSS, animation code, `vercel.json`, or other site files.

## 2. Add one script tag to index.html

Add this immediately before the closing `</body>` tag:

```html
<script src="/assets/alphex-chatbot.js" defer></script>
```

## 3. Configure Vercel

In Vercel → Project → Settings → Environment Variables, add:

- `GROQ_API_KEY` = your private Groq API key
- `GROQ_MODEL` = a model currently enabled for your Groq account, e.g. `llama-3.3-70b-versatile`
- `ALLOWED_ORIGINS` = `https://studio.alphexai.com`

If you also use a Vercel preview domain, add its exact origin to `ALLOWED_ORIGINS`, comma-separated. You can omit `ALLOWED_ORIGINS` for same-origin-only validation based on the request host.

Never put the Groq key in HTML, JavaScript, or GitHub.

## 4. Deploy

Commit and push the files to the connected GitHub repository. Vercel should deploy the new `/api/chat` function and static widget automatically.

After deployment:
- Open `https://studio.alphexai.com/api/chat` in a browser. A 405 response is expected because the endpoint accepts POST only.
- Test the chatbot on the website.
- Check Vercel → Deployments → Functions / Logs if requests fail.

## 5. How the hybrid behavior works

- Predefined quick prompts: services, pricing, and starting a project.
- AI free-text chat: Groq answers from the website knowledge file.
- Lead handoff: quote form (`#contact`) and WhatsApp.
- No Supabase, Neon, SQLite, or database required for this first version. The chatbot does not persist conversations or visitor details.

## Security and operational notes

- The API key is read only by the serverless function.
- The API validates same-origin requests or exact origins listed in `ALLOWED_ORIGINS`.
- Message length and conversation history are capped.
- This MVP does not include a durable rate limiter. Before a public marketing push, add rate limiting / bot protection (for example Vercel Firewall or an edge rate-limit service).
- The model name is configurable because Groq's available model list can change. Set `GROQ_MODEL` to a model available in your Groq project.
- The knowledge base is manually maintained. Update `lib/knowledge.js` when public website facts change.

# Alphex Studios

Full Next.js App Router project for the Alphex Studios website.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push the entire `alphex-studios` folder to the connected GitHub repository.
2. In Vercel, set **Root Directory** to the folder containing this `package.json` (usually `./`).
3. Set Framework Preset to **Next.js**.
4. Leave Build Command and Output Directory at their defaults.
5. Deploy.

Do not upload only `src/app`. The repository root must contain `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, and the `src` directory.

## Environment variables

Copy `.env.example` to `.env.local` for local development and configure the matching variables in Vercel Project Settings → Environment Variables. Keep private credentials out of GitHub.

## Before launch

- Replace contact, WhatsApp, social, and project placeholders with verified details.
- Configure the quote form delivery endpoint and test it end-to-end.
- Add real portfolio images and project details; do not present concept work as client work.
- Add privacy and terms pages before collecting personal information.
- Verify metadata, domain settings, and mobile layouts.

## Notes

The package lock is a minimal npm lockfile seed. Run `npm install` once from the project root to resolve and write the complete dependency tree for your environment; commit the resulting updated `package-lock.json`.

# Kefas Etiku Francis — Portfolio

Next.js 16 portfolio built with TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Theme**: next-themes (dark/light mode)
- **Icons**: Lucide React + custom SVG

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (Recommended — Free)

1. Push this repo to GitHub
2. Go to vercel.com → New Project
3. Import your repo — Vercel auto-detects Next.js
4. Click Deploy — live in ~2 minutes

## Customise Your Content

All content lives in **`data/index.ts`**:
- `siteConfig` — name, email, phone, social links
- `projects` — all 13 repos with PSI descriptions
- `skills` — grouped skill categories
- `certifications` — certs with verify links
- `timeline` — experience & education

## Contact Form

Posts to your AWS API Gateway endpoint in `components/sections/contact.tsx`.
Update the URL there if the endpoint ever changes.

## Resume

Place your PDF at `public/resume.pdf` — the Download Resume button links to it.

## Headshot

Replace `public/images/headshot.png` with a higher quality photo.
Renders at 288x288px in a circular frame.

# Projoy Web Solutions — Website

Production-ready Next.js 15 + TypeScript + Tailwind CSS v4 agency website.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Before Deploying to Production

1. Replace placeholder values in `lib/constants.ts`:
   - Phone number
   - Calendly URL
   - Social media links
2. Replace GA4 and Microsoft Clarity IDs in `app/layout.tsx` (currently `G-XXXXXXXXXX` / `XXXXXXXXXX`)
3. Add real OG image at `public/og-image.jpg` (1200×630px) and favicons
4. Wire `components/forms/AuditForm.tsx` and `ContactForm.tsx` to a real backend
   (Resend, Formspree, or a Next.js API route) — currently simulated with `setTimeout`
5. Replace placeholder case study / project / testimonial content in `lib/data/*.ts`
6. Update `metadataBase` URL in `lib/constants.ts` if the domain changes

## Project Structure

- `app/` — Next.js App Router pages (29 routes)
- `components/` — Reusable UI components (home, layout, services, shared, forms, blog, case-studies)
- `lib/` — Constants, utilities, schema helpers, and content data
- `styles/` — Global CSS and design tokens
- `types/` — Shared TypeScript types

## Tech Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React

## Build

```bash
npm run build
npm start
```

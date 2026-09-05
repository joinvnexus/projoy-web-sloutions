# Projoy Web Solutions — Premium Agency Website

A high-performance, production-ready agency website built with the latest web technologies to showcase services, case studies, and industry expertise.

## 🚀 Features

- **Modern Architecture**: Built with Next.js 15 (App Router) and React 19 for optimal performance and SEO.
- **Cutting-edge Styling**: Leveraging Tailwind CSS v4 for rapid, utility-first styling and a modern design system.
- **Fluid Animations**: Interactive and smooth user experiences powered by Framer Motion.
- **Accessible UI**: High-quality, accessible components using Radix UI primitives.
- **Comprehensive Page Set**:
  - **Landing Page**: High-conversion home page with service summaries and testimonials.
  - **Services & Pricing**: Detailed service offerings and transparent pricing structures.
  - **Portfolio**: Case studies and project showcases to demonstrate proven results.
  - **Content Hub**: A fully functional blog for industry insights and news.
  - **Lead Generation**: Optimized contact and audit forms to capture leads.
  - **Legal**: Professional Privacy Policy and Terms of Service pages.
- **SEO & Performance**: Built-in support for sitemaps, robots.txt, and dynamic metadata management.
- **Responsive Design**: Fully fluid layout that works seamlessly across mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)

## 🏁 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## 🛠️ Development

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with Turbopack. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run type-check` | Runs TypeScript type checking to ensure type safety. |
| `npm run format` | Formats the entire codebase using Prettier. |

## 🚀 Deployment

The most recommended way to deploy this project is via [Vercel](https://vercel.com/).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import the project into the Vercel Dashboard.
3. Configure any necessary environment variables.
4. Deploy.

## ⚠️ Pre-Deployment Checklist

Before going live, ensure the following configurations are updated:

- [ ] **Constants**: Replace placeholder values in `lib/constants.ts` (Phone number, Calendly URL, Social media links).
- [ ] **Analytics**: Replace GA4 and Microsoft Clarity IDs in `app/layout.tsx` (currently `G-XXXXXXXXXX` / `XXXXXXXXXX`).
- [ ] **Assets**: Add a real OG image at `public/og-image.jpg` (1200×630px) and update favicons.
- [ ] **Backend Integration**: Wire `components/forms/AuditForm.tsx` and `ContactForm.tsx` to a real backend (e.g., Resend, Formspree, or a custom Next.js API route).
- [ ] **Content**: Replace placeholder case study, project, and testimonial content in `lib/data/*.ts`.
- [ ] **Metadata**: Update the `metadataBase` URL in `lib/constants.ts` to match your production domain.

## 📂 Project Structure

```text
├── app/                # Next.js App Router pages, layouts, and metadata
├── components/         # Reusable UI components
│   ├── blog/           # Blog-specific components
│   ├── case-studies/   # Portfolio and case study components
│   ├── forms/          # Lead generation and contact forms
│   ├── home/           # Landing page sections
│   ├── layout/         # Header, Footer, and Navigation
│   ├── services/       # Service-specific UI
│   └── shared/         # Generic UI primitives (Buttons, Inputs, etc.)
├── lib/                # Shared utilities, constants, and content data
│   ├── data/           # Mock data for projects, services, and testimonials
│   └── schemas/        # Validation schemas for forms
├── styles/             # Global CSS and design tokens
├── types/              # Global TypeScript type definitions
└── public/             # Static assets, images, and logos
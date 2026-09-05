// lib/constants.ts

export const SITE_CONFIG = {
  name: "Projoy Web Solutions",
  tagline: "Built to Rank. Designed to Convert.",
  description:
    "Projoy Web Solutions builds high-performance Next.js websites and dominates local Google rankings. Get more traffic, leads, and revenue. Free growth audit available.",
  // Reads from env so the same code works on preview deployments (*.vercel.app)
  // and the production custom domain without any hard-coded URLs.
  // Set NEXT_PUBLIC_SITE_URL in .env.local / hosting env vars.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://projoywebsolutions.com",
  email: "hello.projoyweb@gmail.com",
  phone: "+880-170-9437619", // TODO: replace
  location: "Sylhet, Bangladesh",
  // Organization-owned profiles ONLY — accounts that represent the brand,
  // not the founder personally. Keep Person-owned profiles in FOUNDER_CONFIG
  // below so Organization and Person sameAs never mix entities.
  social: {
    twitter: "https://x.com/projoywebsol",
    facebook: "https://www.facebook.com/projoywebsolution/",
    // TODO: replace with a real LinkedIn COMPANY PAGE (linkedin.com/company/...)
    // once created — see the Entity SEO plan. The URL below is a personal-
    // profile-style URL and should not represent the organization long-term.
    linkedin: "https://www.linkedin.com/in/projoywebsolutions/",
  },
  openGraph: {
    image: "/og-image.png",
    imageAlt: "Projoy Web Solutions — Built to Rank. Designed to Convert.",
    width: 1200,
    height: 630,
  },
} as const;

/* ─── Founder / Person entity ───────────────────────────────
   Kept separate from SITE_CONFIG so Person schema never accidentally
   inherits organization-only data (or vice versa). Only real, currently-
   controlled profiles belong in `sameAs` — see remaining manual actions
   in the Entity SEO plan for the canonical-LinkedIn decision still pending. */
export const FOUNDER_CONFIG = {
  name: "Projoy Naidu",
  jobTitle: "Founder & Full-Stack Developer",
  slug: "projoy-naidu",
  description:
    "Projoy Naidu is the founder of Projoy Web Solutions and a full-stack developer working across the modern JavaScript ecosystem — React, Next.js, Vue.js, and Node.js — as well as WordPress, WooCommerce, and Shopify for content- and commerce-driven sites.",
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "WordPress",
    "WooCommerce",
    "Shopify",
  ],
  // Personal profiles only. TODO: this LinkedIn URL is one of two personal
  // profiles currently in use — pick a single canonical one (see plan) and
  // update this value before relying on it in production.
  sameAs: {
    linkedin: "https://bd.linkedin.com/in/projoynaidu",
    github: "https://github.com/joinvnexus",
    portfolio: "https://projoynaidu.vercel.app/",
  },
} as const;

export const IMAGE_ASSETS = {
  services: {
    webDevelopment: "/images/services-hero/web-dev-hero-bg.jpg",
    localSeo: "/images/services-hero/local-seo-hero.png",
    aiSolutions: "/images/services-hero/ai-solutions-hero.png",
  },
} as const;

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Web Development",
        href: "/services/web-development",
        description: "Next.js, React, SaaS & AI-powered builds",
        icon: "code",
      },
      {
        label: "Local SEO",
        href: "/services/local-seo",
        description: "Google Maps ranking & GBP optimization",
        icon: "map-pin",
      },
      {
        label: "AI Solutions",
        href: "/services/ai-solutions",
        description: "Chatbots, automation & AI integrations",
        icon: "cpu",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: null,
  },
  {
    label: "Projects",
    href: "/projects",
    children: null,
  },
  {
    label: "About",
    href: "/about",
    children: null,
  },
  {
    label: "Pricing",
    href: "/pricing",
    children: null,
  },
  {
    label: "Blog",
    href: "/blog",
    children: null,
  },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Next.js Development", href: "/services/web-development/nextjs-development" },
    { label: "SaaS Development", href: "/services/web-development/saas-development" },
    { label: "Landing Pages", href: "/services/web-development/landing-pages" },
    { label: "Custom Dashboards", href: "/services/web-development/custom-dashboards" },
    { label: "AI Integrations", href: "/services/web-development/ai-integrations" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Google Business Profile", href: "/services/local-seo/google-business-profile" },
    { label: "Google Maps Ranking", href: "/services/local-seo/google-maps-ranking" },
    { label: "Citation Building", href: "/services/local-seo/citation-building" },
    { label: "Reputation Management", href: "/services/local-seo/reputation-management" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;

export const TRUST_STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "95+", label: "PageSpeed Average" },
  { value: "90 days", label: "Avg. SEO Results" },
] as const;

export const SERVICES_OVERVIEW = [
  {
    id: "web-development",
    title: "Web Development & AI",
    description:
      "High-performance websites, SaaS apps, and AI-powered tools built with Next.js 15 and React. Designed to convert, built to scale.",
    href: "/services/web-development",
    features: ["Next.js 15", "React", "TypeScript", "AI Integrations", "SaaS Builds"],
    icon: "code-2",
    accent: "brand",
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Business",
    description:
      "Get your business to the top of Google Maps and local search. More visibility means more calls, more foot traffic, and more revenue.",
    href: "/services/local-seo",
    features: ["GBP Optimization", "Google Maps Ranking", "Citations", "Reputation Mgmt."],
    icon: "map-pin",
    accent: "accent",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Integrate AI into your business — chatbots, automation, smart lead capture — so your business scales without adding headcount.",
    href: "/services/ai-solutions",
    features: ["AI Chatbots", "Workflow Automation", "AI SaaS Builds", "Smart Lead Capture"],
    icon: "cpu",
    accent: "brand",
  },
] as const;

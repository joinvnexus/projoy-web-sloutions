// lib/constants.ts

export const SITE_CONFIG = {
  name: "LocalLeads",
  tagline: "Built to Rank. Designed to Convert.",
  description:
    "LocalLeads builds high-performance Next.js websites and dominates local Google rankings. Get more traffic, leads, and revenue. Free growth audit available.",
  // Reads from env so the same code works on preview deployments (*.vercel.app)
  // and the production custom domain without any hard-coded URLs.
  // Set NEXT_PUBLIC_SITE_URL in .env.local / hosting env vars.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://localleads.com",
  email: "hello@localleads.com",
  phone: "+880-170-9437619", // TODO: replace
  location: "Sylhet, Bangladesh",
  // Organization-owned profiles ONLY — accounts that represent the brand,
  // not the founder personally. Keep Person-owned profiles in FOUNDER_CONFIG
  // below so Organization and Person sameAs never mix entities.
  social: {
    // TODO: replace with LocalLeads Twitter/X handle once available
    twitter: "// TODO: add LocalLeads Twitter/X handle",
    // TODO: replace with LocalLeads Facebook page URL once available
    facebook: "// TODO: add LocalLeads Facebook page URL",
    // TODO: replace with a real LinkedIn COMPANY PAGE (linkedin.com/company/...)
    // once created — see the Entity SEO plan.
    linkedin: "// TODO: add LocalLeads LinkedIn company page URL",
  },
  openGraph: {
    image: "/og-image.png",
    imageAlt: "LocalLeads — Built to Rank. Designed to Convert.",
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
    "Projoy Naidu is the founder of LocalLeads and a full-stack developer working across the modern JavaScript ecosystem — React, Next.js, Vue.js, and Node.js — as well as WordPress, WooCommerce, and Shopify for content- and commerce-driven sites.",
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",

  ],
  // Personal profiles only. TODO: this LinkedIn URL is one of two personal
  // profiles currently in use — pick a single canonical one (see plan) and
  // update this value before relying on it in production.
  sameAs: {
    // TODO: add LocalLeads founder personal LinkedIn URL once confirmed
    linkedin: "// TODO: add LocalLeads founder LinkedIn URL",
    // TODO: add LocalLeads GitHub organization URL once available
    github: "// TODO: add LocalLeads GitHub organization URL",
    // TODO: add LocalLeads portfolio URL or remove if not needed
    portfolio: "// TODO: add LocalLeads portfolio URL or remove",
  },
} as const;
export const IMAGE_ASSETS = {
  services: {
    webDevelopment: "/images/services-hero/web-dev-hero-bg.jpg",
    localSeo: "/images/services-hero/local-seo-hero.png",
    technicalSeo: "/images/services-hero/web-dev-hero-bg.jpg",
    aiSolutions: "/images/services-hero/ai-solutions-hero.png",
  },
} as const;

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Web Development",
        href: "/services/web-development",
        description: "Fast, scalable websites and web applications",
        icon: "code",
        group: "core",
      },
      {
        label: "Local SEO",
        href: "/services/local-seo",
        description: "Google Maps ranking & GBP optimization",
        icon: "map-pin",
        group: "core",
      },
      {
        label: "Technical SEO",
        href: "/services/technical-seo",
        description: "Crawlability, performance & search readiness",
        icon: "search",
        group: "core",
      },
      {
        label: "AI Solutions & Automation",
        href: "/services/ai-solutions",
        description: "Additional capability: chatbots and integrations",
        icon: "cpu",
        group: "additional",
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
    { label: "Geo-Tagged Images", href: "/services/local-seo/geo-tagged-images" },
    { label: "Technical SEO", href: "/services/technical-seo" },
    { label: "AI Solutions & Automation", href: "/services/ai-solutions" },
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
  { value: "Custom", label: "Web Development" },
  { value: "Local", label: "SEO Focus" },
  { value: "Technical", label: "SEO Foundation" },
  { value: "Global", label: "Client Delivery" },
] as const;

export const SERVICES_OVERVIEW = [
  {
    id: "web-development",
    title: "Custom Web Development",
    description:
      "Fast, scalable, modern web experiences built around your business goals.",
    href: "/services/web-development",
    features: ["Next.js", "React", "TypeScript", "SaaS Builds", "Custom Functionality"],
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
    id: "technical-seo",
    title: "Technical SEO",
    description:
      "Audit, report, implement, and validate the technical improvements that make your website easier to crawl, index, and find.",
    href: "/services/technical-seo",
    features: ["Technical Audits", "Crawlability", "Structured Data", "Core Web Vitals", "Code-Level Fixes"],
    icon: "search",
    accent: "brand",
  },
] as const;

// lib/constants.ts

export const SITE_CONFIG = {
  name: "LocalLeads",
  tagline: "Get Found. Get Ranked. Get More Leads.",
  description:
    "LocalLeads helps businesses improve local search visibility, fix technical SEO issues, and build high-performing websites designed to generate more leads.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://localleads.com",
  email: "hello@localleads.com",
  phone: "+1-XXX-XXX-XXXX",
  location: "Remote — Serving clients worldwide",
  social: {
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  openGraph: {
    image: "/og-image.png",
    imageAlt: "LocalLeads — Get Found. Get Ranked. Get More Leads.",
    width: 1200,
    height: 630,
  },
} as const;

/* ─── Founder / Person entity ─────────────────────────────── */
export const FOUNDER_CONFIG = {
  name: "Projoy Naidu",
  jobTitle: "Founder & Full-Stack Developer",
  slug: "projoy-naidu",
  description:
    "Projoy Naidu is the founder of LocalLeads and a full-stack developer specializing in modern JavaScript, Next.js, React, Node.js, and TypeScript.",
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
  ],
  sameAs: {
    linkedin: "",
    github: "",
    portfolio: "",
  },
} as const;

export const IMAGE_ASSETS = {
  services: {
    webDevelopment: "/images/services-hero/web-dev-hero-bg.jpg",
    localSeo: "/images/services-hero/local-seo-hero.png",
    technicalSeo: "/images/services-hero/web-dev-hero-bg.jpg",
  },
} as const;



export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
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
        label: "Web Development",
        href: "/services/web-development",
        description: "Fast, scalable websites and web applications",
        icon: "code",
        group: "core",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: null,
  },
  {
    label: "Case Studies",
    href: "/case-studies",
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
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Technical SEO", href: "/services/technical-seo" },
    { label: "Web Development", href: "/services/web-development" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Free SEO Audit", href: "/free-seo-audit" },
    { label: "SEO Guides", href: "/blog" },
    { label: "Local SEO Resources", href: "/services/local-seo" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const TRUST_STATS = [
  { value: "Local", label: "SEO Focus" },
  { value: "Technical", label: "SEO Foundation" },
  { value: "Web", label: "Development" },
  { value: "Global", label: "Client Delivery" },
] as const;

export const SERVICES_OVERVIEW = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Fast, scalable, modern web experiences built around your business goals.",
    href: "/services/web-development",
    features: ["Performance-First", "SEO-Ready", "Custom Build", "Responsive"],
    icon: "code-2",
    accent: "brand",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    description:
      "Improve local visibility and Google Maps presence for qualified local customers.",
    href: "/services/local-seo",
    features: ["GBP Optimization", "Maps Ranking", "Citations", "Reputation"],
    icon: "map-pin",
    accent: "accent",
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    description:
      "Identify and fix technical barriers affecting crawling, indexing, and search visibility.",
    href: "/services/technical-seo",
    features: ["Technical Audits", "Crawlability", "Performance", "Structured Data"],
    icon: "search",
    accent: "brand",
  },
] as const;

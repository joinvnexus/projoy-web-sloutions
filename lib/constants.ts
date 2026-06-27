// lib/constants.ts

export const SITE_CONFIG = {
  name: "Projoy Web Solutions",
  tagline: "Built to Rank. Designed to Convert.",
  description:
    "Projoy Web Solutions builds high-performance Next.js websites and dominates local Google rankings. Get more traffic, leads, and revenue. Free growth audit available.",
  url: "https://projoywebsolutions.com",
  email: "hello@projoywebsolutions.com",
  phone: "+880-XXX-XXXXXX", // TODO: replace
  location: "Sylhet, Bangladesh",
  social: {
    twitter: "https://twitter.com/projoywebsol",
    linkedin: "https://linkedin.com/company/projoywebsolutions",
    facebook: "https://facebook.com/projoywebsolutions",
    github: "https://github.com/projoywebsolutions",
  },
  openGraph: {
    image: "/og-image.jpg",
    imageAlt: "Projoy Web Solutions — Built to Rank. Designed to Convert.",
    width: 1200,
    height: 630,
  },
} as const;

export const IMAGE_ASSETS = {
  services: {
    webDevelopment: "/images/services/web-dev-hero-bg.jpg",
    localSeo: "/images/services/local-seo-hero.png",
    aiSolutions: "/images/services/ai-solutions-hero.png",
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

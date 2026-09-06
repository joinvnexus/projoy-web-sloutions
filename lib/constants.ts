// lib/constants.ts

export const SITE_CONFIG = {
  name: "Projoy Web Solutions",
  tagline: "Built to Rank. Designed to Convert.",
  description:
    "Projoy Web Solutions builds high-performance custom websites and helps businesses grow through Local SEO, Technical SEO, and AI automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://projoywebsolutions.com",
  email: "hello.projoyweb@gmail.com",
  phone: "+880-170-9437619", // TODO: replace
  location: "Sylhet, Bangladesh",
  social: {
    twitter: "https://x.com/projoywebsol",
    facebook: "https://www.facebook.com/projoywebsolution/",
    linkedin: "https://www.linkedin.com/in/projoywebsolutions/",
  },
  openGraph: {
    image: "/og-image.png",
    imageAlt: "Projoy Web Solutions — Built to Rank. Designed to Convert.",
    width: 1200,
    height: 630,
  },
} as const;

export const FOUNDER_CONFIG = {
  name: "Projoy Naidu",
  jobTitle: "Founder & Full-Stack Developer",
  slug: "projoy-naidu",
  description:
    "Projoy Naidu is the founder of Projoy Web Solutions and a full-stack developer focused on custom web development, Local SEO, Technical SEO, and AI automation.",
  knowsAbout: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
    "Tailwind CSS", "PostgreSQL", "MongoDB", "Local SEO", "Technical SEO", "AI Automation",
  ],
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
    technicalSeo: "/images/services-hero/local-seo-hero.png",
    aiSolutions: "/images/services-hero/ai-solutions-hero.png",
  },
} as const;

export const NAV_LINKS = [
  {
    label: "Services", href: "/services",
    children: [
      { label: "Custom Web Development", href: "/services/web-development", description: "Custom websites, SaaS & web applications", icon: "code" },
      { label: "Local SEO", href: "/services/local-seo", description: "Google Maps ranking & local search visibility", icon: "map-pin" },
      { label: "Technical SEO", href: "/services/technical-seo", description: "Technical audits, fixes & search-ready architecture", icon: "search" },
      { label: "AI Solutions & Automation", href: "/services/ai-solutions", description: "Additional AI capability for smarter workflows", icon: "cpu" },
    ],
  },
  { label: "Case Studies", href: "/case-studies", children: null },
  { label: "Projects", href: "/projects", children: null },
  { label: "About", href: "/about", children: null },
  { label: "Pricing", href: "/pricing", children: null },
  { label: "Blog", href: "/blog", children: null },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Custom Web Development", href: "/services/web-development" },
    { label: "Next.js Development", href: "/services/web-development/nextjs-development" },
    { label: "SaaS Development", href: "/services/web-development/saas-development" },
    { label: "Landing Pages", href: "/services/web-development/landing-pages" },
    { label: "Custom Dashboards", href: "/services/web-development/custom-dashboards" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Google Business Profile", href: "/services/local-seo/google-business-profile" },
    { label: "Google Maps Ranking", href: "/services/local-seo/google-maps-ranking" },
    { label: "Citation Building", href: "/services/local-seo/citation-building" },
    { label: "Technical SEO", href: "/services/technical-seo" },
    { label: "AI Solutions & Automation", href: "/services/ai-solutions" },
  ],
  company: [
    { label: "About Us", href: "/about" }, { label: "Case Studies", href: "/case-studies" },
    { label: "Projects", href: "/projects" }, { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;

export const TRUST_STATS = [
  { value: "Custom", label: "Web Development" },
  { value: "Local", label: "SEO Focus" },
  { value: "Technical", label: "SEO Expertise" },
  { value: "AI", label: "Automation Capability" },
] as const;

export const SERVICES_OVERVIEW = [
  {
    id: "web-development", title: "Custom Web Development",
    description: "High-performance websites, SaaS applications, dashboards, and web apps engineered around your business goals, user experience, SEO, and conversion.",
    href: "/services/web-development", features: ["Next.js", "React", "TypeScript", "SaaS Builds", "Web Applications"], icon: "code-2", accent: "brand",
  },
  {
    id: "local-seo", title: "Local SEO",
    description: "Improve your local search visibility through Google Business Profile optimization, Google Maps strategy, citations, reputation, and local authority building.",
    href: "/services/local-seo", features: ["GBP Optimization", "Google Maps", "Citations", "Reputation", "Local Links"], icon: "map-pin", accent: "accent",
  },
  {
    id: "technical-seo", title: "Technical SEO",
    description: "Find and fix the technical issues that affect crawling, indexing, performance, structured data, internal linking, and search readiness.",
    href: "/services/technical-seo", features: ["Technical Audits", "Indexability", "Core Web Vitals", "Schema", "JavaScript SEO"], icon: "search", accent: "brand",
  },
] as const;

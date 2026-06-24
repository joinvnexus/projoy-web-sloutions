// lib/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: "web-app" | "landing-page" | "saas" | "dashboard" | "ecommerce";
  categoryLabel: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  year: number;
}

export const projects: Project[] = [
  {
    slug: "launchhq-landing",
    title: "LaunchHQ — SaaS Landing Page",
    description:
      "High-converting Next.js 15 landing page for a B2B project management SaaS. Optimized for cold ad traffic with 8.4% conversion rate.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "landing-page",
    categoryLabel: "Landing Page",
    liveUrl: "https://launchhq.io",
    featured: true,
    metrics: [
      { label: "Conversion Rate", value: "8.4%" },
      { label: "PageSpeed", value: "98" },
    ],
    year: 2024,
  },
  {
    slug: "eduplatform-bd",
    title: "EduPlatform BD — E-learning Platform",
    description:
      "Full Next.js 15 rebuild of a WordPress e-learning site with 400+ courses. Static generation for course pages, ISR for blog, SSR for dashboard.",
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "web-app",
    categoryLabel: "Web Application",
    featured: true,
    metrics: [
      { label: "PageSpeed", value: "97" },
      { label: "Load Time", value: "1.1s" },
    ],
    year: 2024,
  },
  {
    slug: "bd-legal-site",
    title: "BD Legal Associates — Law Firm Website",
    description:
      "Premium Next.js website for a Dhaka-based law firm. Practice area pages with targeted local SEO, integrated contact forms, and client portal.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    category: "web-app",
    categoryLabel: "Web Application",
    featured: true,
    metrics: [
      { label: "PageSpeed", value: "96" },
      { label: "Google Ranking", value: "Top 3" },
    ],
    year: 2024,
  },
  {
    slug: "flowcommerce-ai-chatbot",
    title: "FlowCommerce — AI Sales Chatbot",
    description:
      "Custom GPT-4o powered chatbot trained on product catalog and FAQs. Qualifies leads, handles objections, and books demos automatically.",
    tech: ["Next.js 15", "OpenAI API", "Vercel AI SDK", "TypeScript"],
    category: "web-app",
    categoryLabel: "AI Integration",
    featured: false,
    metrics: [
      { label: "Lead Qualification", value: "3×" },
      { label: "Response Time", value: "<1s" },
    ],
    year: 2024,
  },
  {
    slug: "km-auto-local-seo",
    title: "KM Auto Repair — Local SEO Campaign",
    description:
      "Complete local SEO and GBP optimization campaign for an auto repair shop. Took from position 14 to top 3 on Google Maps for all target keywords.",
    tech: ["GBP Optimization", "Citation Building", "Geo-Tagged Images"],
    category: "web-app",
    categoryLabel: "Local SEO",
    featured: false,
    metrics: [
      { label: "Google Maps Position", value: "#2" },
      { label: "Review Growth", value: "+35" },
    ],
    year: 2024,
  },
  {
    slug: "saas-analytics-dashboard",
    title: "Analytics Dashboard — SaaS Internal Tool",
    description:
      "Real-time analytics dashboard for a SaaS company. Interactive charts, custom date ranges, CSV export, and role-based access control.",
    tech: ["Next.js 15", "Recharts", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "dashboard",
    categoryLabel: "Dashboard",
    featured: false,
    metrics: [
      { label: "Data Points", value: "1M+" },
      { label: "Load Time", value: "0.8s" },
    ],
    year: 2024,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

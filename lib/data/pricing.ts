// lib/data/pricing.ts

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  startingAt: string;
  period: string;
  description: string;
  idealFor: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

export const localSeoPricing: PricingTier[] = [
  {
    id: "local-seo-starter",
    name: "Starter",
    startingAt: "$300",
    period: "/month",
    description:
      "For local businesses that need to improve their Google Maps presence and start generating more local visibility.",
    idealFor: "Single-location businesses starting with local SEO",
    features: [
      "Google Business Profile optimization",
      "Citation building (20+ directories)",
      "Geo-tagged image uploads",
      "Monthly ranking report",
      "Email support",
    ],
    cta: "Get Started",
    ctaHref: "/contact#audit",
  },
  {
    id: "local-seo-growth",
    name: "Growth",
    badge: "Most Popular",
    startingAt: "$600",
    period: "/month",
    description:
      "For businesses ready to grow their local presence with a full SEO campaign and ongoing management.",
    idealFor: "Growing businesses competing in their local market",
    features: [
      "Full GBP optimization and management",
      "Citation building and cleanup",
      "Review acquisition strategy",
      "Local keyword targeting",
      "Competitor tracking",
      "Weekly rank reports",
      "Monthly strategy call",
    ],
    cta: "Get Started",
    ctaHref: "/contact#audit",
    highlighted: true,
  },
  {
    id: "local-seo-advanced",
    name: "Advanced",
    startingAt: "$1,000",
    period: "/month",
    description:
      "For multi-location businesses and competitive markets that need a comprehensive, ongoing local SEO strategy.",
    idealFor: "Multi-location businesses and competitive markets",
    features: [
      "Multi-location GBP management",
      "Full citation strategy",
      "Review and reputation management",
      "Local landing pages",
      "Advanced competitor analysis",
      "Dedicated account manager",
      "Bi-weekly strategy calls",
    ],
    cta: "Get Started",
    ctaHref: "/contact#audit",
  },
];

export const technicalSeoPricing: PricingTier[] = [
  {
    id: "technical-seo-audit",
    name: "Audit",
    startingAt: "$300",
    period: "one-time",
    description:
      "A detailed technical SEO review with prioritized findings and clear recommendations — no implementation included.",
    idealFor: "Businesses that want a clear technical roadmap",
    features: [
      "Crawlability and indexability review",
      "Metadata and canonical audit",
      "Structured data review",
      "Core Web Vitals assessment",
      "Prioritized findings report",
    ],
    cta: "Request Audit",
    ctaHref: "/contact#audit",
  },
  {
    id: "technical-seo-audit-fix",
    name: "Audit + Fix",
    badge: "Most Popular",
    startingAt: "$700",
    period: "project",
    description:
      "A full technical SEO audit plus implementation of the approved fixes — one engagement, one clear outcome.",
    idealFor: "Businesses ready to fix technical SEO issues",
    features: [
      "Full technical SEO audit",
      "Approved implementation",
      "Metadata and schema fixes",
      "Redirect and canonicals",
      "Validation report",
    ],
    cta: "Request Quote",
    ctaHref: "/contact#audit",
    highlighted: true,
  },
  {
    id: "technical-seo-ongoing",
    name: "Ongoing",
    startingAt: "$1,000",
    period: "/month",
    description:
      "Continuous technical SEO monitoring, improvements, and validation for websites that need ongoing attention.",
    idealFor: "Websites needing continuous technical SEO support",
    features: [
      "Monthly technical audits",
      "Performance monitoring",
      "Core Web Vitals tracking",
      "Schema maintenance",
      "Search Console monitoring",
      "Priority support",
    ],
    cta: "Get Started",
    ctaHref: "/contact#audit",
  },
];

export const webDevelopmentPricing: PricingTier[] = [
  {
    id: "web-dev-business",
    name: "Business Website",
    startingAt: "$750",
    period: "project",
    description:
      "A fast, SEO-ready business website that establishes your online presence and starts generating leads.",
    idealFor: "Small businesses and local services",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "SEO foundation setup",
      "Contact form integration",
      "Performance optimization",
      "30-day post-launch support",
    ],
    cta: "Start Project",
    ctaHref: "/contact#audit",
  },
  {
    id: "web-dev-growth",
    name: "Growth Website",
    badge: "Most Popular",
    startingAt: "$1,500",
    period: "project",
    description:
      "A multi-page, conversion-focused website with advanced features and stronger SEO architecture.",
    idealFor: "Growing businesses with more complex needs",
    features: [
      "Up to 10 pages",
      "Advanced SEO setup",
      "CMS integration",
      "Analytics and tracking",
      "Performance optimization",
      "60-day post-launch support",
    ],
    cta: "Start Project",
    ctaHref: "/contact#audit",
    highlighted: true,
  },
  {
    id: "web-dev-custom",
    name: "Custom Application",
    startingAt: "$2,500",
    period: "project",
    description:
      "A fully custom web application built for your specific business requirements and growth plans.",
    idealFor: "Custom web applications and complex platforms",
    features: [
      "Custom feature development",
      "Database and API integration",
      "Authentication and user accounts",
      "Admin dashboard",
      "Performance optimization",
      "90-day post-launch support",
    ],
    cta: "Start Project",
    ctaHref: "/contact#audit",
  },
];

export const pricingFaqs = [
  {
    q: "Are these prices fixed or starting-from estimates?",
    a: "These are starting-from prices. Your exact quote depends on scope — number of pages, competition level for SEO, and feature complexity. You'll always get an itemized quote before committing.",
  },
  {
    q: "Can I start with one service and add the other later?",
    a: "Yes. Most clients start with either Local SEO or a website and add the other within 3–6 months once they see results. We design every engagement to expand cleanly.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Project work is paid per milestone. Monthly retainers require 30 days' notice to cancel — no long-term lock-in.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer, major credit cards, and PayPal for international clients.",
  },
];

export type PricingCategory = "local-seo" | "technical-seo" | "web-development";

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

export const pricingTiers: PricingTier[] = [
  {
    id: "launch",
    name: "Launch",
    startingAt: "$490",
    period: "one-time or /mo",
    description:
      "For local businesses that need to get found on Google before anything else.",
    idealFor: "Local businesses needing GBP + basic web presence",
    features: [
      "Google Business Profile full optimization",
      "Citation building (20 directories)",
      "Geo-tagged image uploads",
      "Monthly ranking report",
      "1-page conversion-focused website",
      "Email support",
    ],
    cta: "Start With Launch",
    ctaHref: "/contact#audit",
  },
  {
    id: "scale",
    name: "Scale",
    badge: "Most Popular",
    startingAt: "$1,200",
    period: "one-time or /mo",
    description:
      "For startups and growing businesses that need a real website and to start ranking locally.",
    idealFor: "Startups needing a custom site + local SEO together",
    features: [
      "Everything in Launch, plus:",
      "Custom multi-page Next.js website",
      "Full local SEO campaign (citations, reviews, GBP)",
      "Weekly rank tracking",
      "GA4 + Search Console setup",
      "Monthly strategy call",
      "Priority email + WhatsApp support",
    ],
    cta: "Start With Scale",
    ctaHref: "/contact#audit",
    highlighted: true,
  },
  {
    id: "dominate",
    name: "Dominate",
    startingAt: "Custom",
    period: "quote",
    description:
      "For multi-location businesses, SaaS founders, and agencies needing a full build-out.",
    idealFor: "Multi-location businesses or SaaS / AI product builds",
    features: [
      "Everything in Scale, plus:",
      "SaaS application or multi-location site architecture",
      "AI integrations (chatbot, automation)",
      "Multi-location local SEO campaigns",
      "Custom dashboard / reporting",
      "Dedicated account manager",
      "Weekly strategy calls",
    ],
    cta: "Get a Custom Quote",
    ctaHref: "/contact#audit",
  },
];

export const pricingFaqs = [
  {
    q: "Are these prices fixed or starting-from estimates?",
    a: "These are starting-from prices. Your exact quote depends on scope — number of pages, competition level for SEO, and feature complexity for SaaS builds. You'll always get an itemized quote before committing.",
  },
  {
    q: "Can I start with one service and add the other later?",
    a: "Yes — most clients start with either Local SEO or a website and add the other within 3–6 months once they see results. We design every engagement to expand cleanly.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Project work is paid per milestone. Monthly retainers (Local SEO, maintenance) require 30 days' notice to cancel — no long-term lock-in.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer, major credit cards, and PayPal for international clients. Local Bangladesh clients can also pay via bKash or Nagad.",
  },
];

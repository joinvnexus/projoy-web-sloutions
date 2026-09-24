// lib/data/case-studies.ts

export interface CaseStudyMetric {
  value: string;
  label: string;
  positive?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  service: "local-seo" | "web-development";
  serviceLabel: string;
  headline: string;
  description: string;
  challenge: string;
  strategy: string;
  result: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  publishedAt: string;
  featured: boolean;
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  beforeAfter?: {
    metric: string;
    before: string;
    after: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "local-restaurant-seo",
    title: "Local SEO Demo — Google Business Profile Optimization",
    client: "Demo Local Business",
    location: "Example Project",
    service: "local-seo",
    serviceLabel: "Local SEO",
    headline: "Local Search Visibility — Strategy & Execution",
    description:
      "A demo case study showing how a local SEO engagement can be structured around Google Business Profile optimization, local relevance, technical foundations, and measurable business outcomes.",
    challenge:
      "This is placeholder project content used to finalize the case study layout. The production version will describe a real client's starting position, documented search visibility issues, and the business context behind the engagement.",
    strategy:
      "The example workflow combines Google Business Profile optimization, local landing-page improvements, citation consistency, review strategy, technical SEO, and ongoing measurement. Replace these details with the verified work completed for the real client.",
    result:
      "This section is reserved for verified outcomes. Once real campaign data is available, the page can show the relevant ranking, visibility, engagement, call, direction-request, or lead metrics with dates and supporting evidence.",
    metrics: [
      { value: "Visibility", label: "Primary Focus" },
      { value: "Engagement", label: "Trackable Signal" },
      { value: "Lead Flow", label: "Business Outcome" },
      { value: "Reporting", label: "Evidence Layer" },
    ],
    tags: ["GBP Optimization", "Local SEO", "Technical SEO", "Reporting"],
    publishedAt: "2026-01-01",
    featured: true,
    timeline: "Example engagement",
    testimonial: {
      quote:
        "Demo testimonial placeholder. Replace with an approved client quote once a real project and supporting evidence are available.",
      author: "Demo Client",
      role: "Business Owner, Illustrative Local Business",
    },
    beforeAfter: {
      metric: "Proof Placeholder",
      before: "Starting data",
      after: "Verified outcome",
    },
  },
  {
    slug: "saas-landing-page",
    title: "Web Development Demo — High-Performance Landing Page",
    client: "Demo SaaS Project",
    location: "Example Project",
    service: "web-development",
    serviceLabel: "Next.js Development",
    headline: "High-Performance Landing Page — Strategy & Build",
    description:
      "A demo case study showing how a conversion-focused web development engagement can combine information architecture, performance engineering, UX, and iterative optimization.",
    challenge:
      "This is placeholder project content used to finalize the case study layout. The production version will document the real product, audience, conversion problem, and technical constraints.",
    strategy:
      "The example workflow covers conversion-focused page structure, responsive implementation, performance optimization, analytics instrumentation, and iterative testing. Replace these details with the verified project process when available.",
    result:
      "This section is reserved for verified outcomes. The production version can include conversion, performance, engagement, or revenue-related measurements only after the underlying data has been confirmed.",
    metrics: [
      { value: "Conversion", label: "Primary Focus" },
      { value: "Performance", label: "Technical Focus" },
      { value: "UX", label: "Experience Focus" },
      { value: "Iteration", label: "Optimization Loop" },
    ],
    tags: ["Next.js", "CRO", "Landing Page", "Performance"],
    publishedAt: "2026-01-01",
    featured: true,
    timeline: "Example engagement",
    testimonial: {
      quote:
        "Demo testimonial placeholder. Replace with an approved client quote once a real project and supporting evidence are available.",
      author: "Demo Client",
      role: "Founder, Illustrative SaaS Project",
    },
    beforeAfter: {
      metric: "Proof Placeholder",
      before: "Current experience",
      after: "Verified improvement",
    },
  },
  {
    slug: "legal-firm-local-seo",
    title: "Local SEO + Web Development Demo — Professional Services",
    client: "Demo Professional Services Firm",
    location: "Example Project",
    service: "local-seo",
    serviceLabel: "Local SEO + Web Development",
    headline: "Professional Services Growth System — Demo",
    description:
      "A demo case study showing how local SEO and web development can be combined for a professional-services business.",
    challenge:
      "Placeholder content for the case study layout. The production version will describe the verified client situation, market, website issues, and local search opportunity.",
    strategy:
      "Example strategy: improve site architecture, build service-specific landing pages, strengthen local relevance, optimize the business profile, and establish measurement before scaling the campaign.",
    result:
      "Verified outcomes will be added here when real project data is available.",
    metrics: [
      { value: "Local", label: "Search Focus" },
      { value: "Technical", label: "Site Foundation" },
      { value: "Service", label: "Page Strategy" },
      { value: "Leads", label: "Business Goal" },
    ],
    tags: ["Local SEO", "Next.js", "GBP", "Professional Services"],
    publishedAt: "2026-01-01",
    featured: false,
    timeline: "Example engagement",
  },
  {
    slug: "eduplatform-nextjs-rebuild",
    title: "Next.js Migration Demo — Performance & UX",
    client: "Demo Technology Business",
    location: "Example Project",
    service: "web-development",
    serviceLabel: "Next.js Development",
    headline: "Next.js Migration — Performance & UX Demo",
    description:
      "A demo case study showing how a migration project can be presented without publishing unverified performance or revenue claims.",
    challenge:
      "Placeholder content for the case study layout. The production version will document the real legacy stack, performance bottlenecks, content migration scope, and technical constraints.",
    strategy:
      "Example strategy: plan the migration, preserve search signals, rebuild critical templates, optimize rendering and assets, validate redirects, and monitor performance after launch.",
    result:
      "Verified performance and business outcomes will be added here once the project data is available and approved for publication.",
    metrics: [
      { value: "Migration", label: "Project Scope" },
      { value: "Performance", label: "Technical Goal" },
      { value: "SEO", label: "Signal Preservation" },
      { value: "UX", label: "Experience Goal" },
    ],
    tags: ["Next.js", "Migration", "Performance", "Technical SEO"],
    publishedAt: "2026-01-01",
    featured: false,
    timeline: "Example engagement",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}

export function getCaseStudiesByService(
  service: CaseStudy["service"]
): CaseStudy[] {
  return caseStudies.filter((cs) => cs.service === service);
}

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
  service: "local-seo" | "web-development" | "ai-solutions";
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
    title: "From Page 3 to the Google 3-Pack in 67 Days",
    client: "RC Restaurant",
    location: "Sylhet, Bangladesh",
    service: "local-seo",
    serviceLabel: "Local SEO",
    headline: "From Page 3 to the Google 3-Pack in 67 Days",
    description:
      "A well-regarded local restaurant was invisible on Google Maps despite great food and reviews. We implemented our full GBP optimization stack — and the results speak for themselves.",
    challenge:
      "RC Restaurant had been operating for 4 years with a strong offline reputation but virtually zero online visibility. Their Google Business Profile was unclaimed, they had only 8 reviews, and they weren't appearing in any local search results for 'restaurant Sylhet' or related terms.",
    strategy:
      "We claimed and fully optimized their GBP with proper categories, 400+ word description, complete service menu, and attribute selection. Then we executed a geo-tagged image upload campaign (60+ images), built 40 new citations, launched a review acquisition system via WhatsApp, and published 3 GBP posts per week.",
    result:
      "Within 67 days, RC Restaurant entered the Google 3-pack for their primary keywords. Profile views increased by 340%, direction requests by 210%, and calls from Google by 89% — directly attributable to Google Maps rankings.",
    metrics: [
      { value: "+340%", label: "Profile Views", positive: true },
      { value: "+210%", label: "Direction Requests", positive: true },
      { value: "+89%", label: "Calls from Google", positive: true },
      { value: "67 days", label: "Time to 3-Pack", positive: true },
    ],
    tags: ["GBP Optimization", "Google Maps Ranking", "Citation Building", "Reputation"],
    publishedAt: "2024-10-15",
    featured: true,
    timeline: "3 months",
    testimonial: {
      quote:
        "Within 60 days we went from invisible on Google Maps to showing up in the top 3 for our main keywords. The phone hasn't stopped ringing since.",
      author: "Rahim Chowdhury",
      role: "Owner, RC Restaurant",
    },
    beforeAfter: {
      metric: "Google Maps Position",
      before: "Page 3 — Not Ranking",
      after: "#2 in Local 3-Pack",
    },
  },
  {
    slug: "saas-landing-page",
    title: "SaaS Landing Page That Converted at 8.4%",
    client: "LaunchHQ",
    location: "Remote",
    service: "web-development",
    serviceLabel: "Next.js Development",
    headline: "SaaS Landing Page That Converted at 8.4%",
    description:
      "A B2B SaaS company needed a launch page that would convert cold ad traffic. We designed and built a Next.js landing page optimized from the ground up for conversion.",
    challenge:
      "LaunchHQ was preparing to launch their project management SaaS and needed a landing page that could convert cold Facebook and Google ad traffic. Their previous attempt (a Webflow template) was converting at 1.2% and the team had already spent $8,000 on ads with minimal signups.",
    strategy:
      "We conducted a CRO audit of their previous page and identified the top 5 conversion killers. Then built a custom Next.js page from scratch: hero with a specific outcome headline, social proof above the fold, feature-benefit structure, objection-handling FAQ, and a frictionless 2-field signup. We also improved page load from 4.1s to under 1.2s.",
    result:
      "The new page launched at 6.8% conversion rate and improved to 8.4% after two A/B tests. Combined with a 98 PageSpeed score, the lower bounce rate dramatically improved their ad quality scores and reduced CPC by 34%.",
    metrics: [
      { value: "8.4%", label: "Conversion Rate", positive: true },
      { value: "98", label: "PageSpeed Score", positive: true },
      { value: "4 mo", label: "to $8k MRR", positive: true },
      { value: "-34%", label: "Ad CPC Reduction", positive: true },
    ],
    tags: ["Next.js", "CRO", "Landing Page", "Performance"],
    publishedAt: "2024-09-01",
    featured: true,
    timeline: "3 weeks",
    testimonial: {
      quote:
        "They built our landing page in under 3 weeks. The design is clean, it loads instantly, and we're converting at over 8%. These guys understand both design and growth.",
      author: "Sarah Ahmed",
      role: "Co-Founder, LaunchHQ",
    },
    beforeAfter: {
      metric: "Conversion Rate",
      before: "1.2% (Old Webflow Page)",
      after: "8.4% (New Next.js Page)",
    },
  },
  {
    slug: "legal-firm-local-seo",
    title: "Legal Firm Reaches Top 3 for All Primary Keywords",
    client: "BD Legal Associates",
    location: "Dhaka, Bangladesh",
    service: "local-seo",
    serviceLabel: "Local SEO + Web Development",
    headline: "Legal Firm Reaches Top 3 for All Primary Keywords",
    description:
      "A mid-sized legal firm needed both a new website and local SEO to compete in the highly competitive Dhaka legal market. We delivered both in a single engagement.",
    challenge:
      "BD Legal Associates was losing potential clients to competitors who ranked higher on Google. Their website was a 6-year-old WordPress site scoring 34 on PageSpeed, and their GBP was unoptimized with only 12 reviews.",
    strategy:
      "We ran a combined Web + SEO engagement: built a new Next.js website with practice area landing pages (each targeting specific legal keywords), then launched a full local SEO campaign with citation building, GBP optimization, and a review strategy tailored to the legal industry's ethics constraints.",
    result:
      "The new site launched with a 96 PageSpeed score and began ranking on page 1 within 6 weeks. All 8 primary keyword targets reached the top 3 positions in Google Maps within 4 months.",
    metrics: [
      { value: "Top 3", label: "Maps Ranking", positive: true },
      { value: "96", label: "PageSpeed Score", positive: true },
      { value: "+180%", label: "Organic Calls", positive: true },
      { value: "4 mo", label: "to Full Results", positive: true },
    ],
    tags: ["Local SEO", "Next.js", "GBP", "Legal Industry"],
    publishedAt: "2024-08-12",
    featured: false,
    timeline: "5 months",
    testimonial: {
      quote:
        "We hired Projoy for GBP optimization and ended up retaining them for our new website too. Best decision we made. Two vendors' worth of expertise from one team.",
      author: "Nasrin Begum",
      role: "Director, BD Legal Associates",
    },
  },
  {
    slug: "eduplatform-nextjs-rebuild",
    title: "WordPress to Next.js Migration Cuts Bounce Rate by 34%",
    client: "EduPlatform BD",
    location: "Dhaka, Bangladesh",
    service: "web-development",
    serviceLabel: "Next.js Development",
    headline: "WordPress to Next.js: Bounce Rate Down 34%, Leads Up 61%",
    description:
      "An e-learning company's slow WordPress site was costing them students. We rebuilt the platform on Next.js and transformed their business metrics.",
    challenge:
      "EduPlatform BD's WordPress site scored 42 on PageSpeed and was losing students to faster competitors. Their average page load was 6.2 seconds on mobile — well above the 3-second threshold where bounce rates spike dramatically.",
    strategy:
      "We migrated the entire site from WordPress to Next.js 15 with static generation for course pages, ISR for blog content, and server-side rendering for the student dashboard. All 400+ blog posts were migrated with full SEO signal preservation (301 redirects, meta, schema).",
    result:
      "PageSpeed jumped from 42 to 97. Average load time dropped to 1.1 seconds on mobile. Bounce rate fell 34% and the improved UX led to a 61% increase in course enrollment inquiries.",
    metrics: [
      { value: "42→97", label: "PageSpeed Score", positive: true },
      { value: "-34%", label: "Bounce Rate", positive: true },
      { value: "+61%", label: "Enrollment Leads", positive: true },
      { value: "1.1s", label: "Mobile Load Time", positive: true },
    ],
    tags: ["Next.js", "WordPress Migration", "Performance", "Education"],
    publishedAt: "2024-07-20",
    featured: false,
    timeline: "6 weeks",
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

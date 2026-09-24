// lib/data/industries.ts

export const industries = [
  {
    slug: "roofers",
    name: "Roofers",
    shortDescription: "Turn local searches into estimate requests and booked roofing jobs.",
    problem: "Roofing buyers often search on mobile, compare several local companies, and expect a fast site with clear service and location signals.",
    fixes: ["Service-area and city landing pages", "Google Business Profile alignment", "Core Web Vitals and mobile performance", "Conversion-focused quote and call paths"],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    shortDescription: "Capture urgent local searches with a fast site built for calls.",
    problem: "Plumbing searches are high-intent and time-sensitive. Slow pages, unclear service areas, or weak local signals can create friction before the first call.",
    fixes: ["Service + location architecture", "Local intent and GBP optimization", "Mobile-first performance", "Prominent call and booking CTAs"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    shortDescription: "Build local visibility around repairs, installation, and maintenance.",
    problem: "HVAC companies compete across multiple services and locations, making site structure and local relevance critical.",
    fixes: ["Service-specific landing pages", "Location relevance and internal linking", "Technical crawl and indexability fixes", "Lead-focused landing page UX"],
  },
  {
    slug: "medical-dental",
    name: "Medical & Dental",
    shortDescription: "Make it easier for nearby patients to find, trust, and contact you.",
    problem: "Patients need clear services, locations, trust signals, and a frictionless path to appointments on every device.",
    fixes: ["Service and provider content structure", "Local search signals", "Performance and accessibility improvements", "Appointment-focused conversion paths"],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    shortDescription: "Create search-ready practice-area pages that support qualified enquiries.",
    problem: "Legal search journeys are research-heavy. Strong information architecture and local relevance help users reach the right practice area faster.",
    fixes: ["Practice-area content architecture", "Local authority and entity signals", "Technical SEO and structured data", "Clear consultation CTAs"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortDescription: "Connect local property searches with a faster, clearer web experience.",
    problem: "Real-estate websites can become heavy and fragmented. Performance, location relevance, and clear next steps matter for local discovery.",
    fixes: ["Location and service architecture", "Technical performance optimization", "Local SEO foundations", "Lead capture and consultation flows"],
  },
] as const;

export type Industry = (typeof industries)[number];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

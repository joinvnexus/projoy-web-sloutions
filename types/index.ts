// types/index.ts

export interface NavLink {
  label: string;
  href: string;
  children: NavChild[] | null;
}

export interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  href: string;
  features: readonly string[];
  icon: string;
  accent: "brand" | "accent";
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  service: "local-seo" | "web-development" | "ai-solutions";
  headline: string;
  description: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  publishedAt: string;
  featured?: boolean;
  coverImage?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  positive?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  resultStat?: string;
  service?: "local-seo" | "web-development" | "ai-solutions";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  category: string;
  coverImage?: string;
  author: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: "web-app" | "landing-page" | "saas" | "dashboard" | "ecommerce";
  liveUrl?: string;
  coverImage?: string;
  featured?: boolean;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  timeline: string;
  deliverable?: string;
}

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

export type ServiceType = "web-development" | "local-seo" | "ai-solutions";
export type AccentColor = "brand" | "accent";

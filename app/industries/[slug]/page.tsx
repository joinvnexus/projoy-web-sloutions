// app/industries/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader, Eyebrow } from "@/components/shared/Typography";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";

const industries: Record<string, {
  name: string;
  description: string;
  challenges: string[];
  services: { title: string; description: string }[];
}> = {
  dentists: {
    name: "Dentists",
    description: "Local SEO and web development for dental practices looking to attract more patients through Google search and Maps.",
    challenges: [
      "High competition for dental keywords in your area",
      "Patients comparing practices based on online presence",
      "Need for trust signals before booking an appointment",
      "Google Business Profile optimization for call volume",
    ],
    services: [
      { title: "Local SEO", description: "Rank for 'dentist near me' and dental keywords in your service area." },
      { title: "Web Development", description: "Build a professional, conversion-focused website that builds trust." },
      { title: "Technical SEO", description: "Ensure your site is fast, accessible, and easy for Google to understand." },
    ],
  },
  "law-firms": {
    name: "Law Firms",
    description: "SEO and web development for legal practices that need to rank for high-intent keywords and build authority online.",
    challenges: [
      "High-value keywords with intense competition",
      "Need for authority and trust signals",
      "Ethical constraints on marketing claims",
      "Long client decision cycles requiring education",
    ],
    services: [
      { title: "Local SEO", description: "Rank for legal practice area keywords in your geographic market." },
      { title: "Web Development", description: "Build a professional site with practice area pages that convert." },
      { title: "Technical SEO", description: "Ensure your site meets the technical standards expected by Google." },
    ],
  },
  clinics: {
    name: "Clinics",
    description: "Local SEO and web development for medical and wellness clinics that need to be found by patients searching nearby.",
    challenges: [
      "Patients searching for specific services and specialties",
      "Google Maps visibility for walk-in and appointment-based clinics",
      "Trust and credibility signals on your website",
      "Managing reviews and online reputation",
    ],
    services: [
      { title: "Local SEO", description: "Improve Maps visibility and local search rankings for your clinic." },
      { title: "Web Development", description: "Build a clean, professional website with clear service information." },
      { title: "Technical SEO", description: "Ensure fast load times and proper schema for healthcare-related queries." },
    ],
  },
  restaurants: {
    name: "Restaurants",
    description: "Local SEO for restaurants that want to rank on Google Maps, get more calls, and fill more tables.",
    challenges: [
      "High competition in restaurant local search",
      "Google Business Profile driving calls and directions",
      "Review volume and rating impact on rankings",
      "Menu and photo optimization on GBP",
    ],
    services: [
      { title: "Local SEO", description: "Dominate the Google 3-pack for restaurant searches in your area." },
      { title: "Web Development", description: "Build a fast, mobile-first site with menu, location, and booking info." },
      { title: "Technical SEO", description: "Ensure your site loads fast and is easy for search engines to crawl." },
    ],
  },
  salons: {
    name: "Salons",
    description: "Local SEO and web development for hair salons, barbershops, and beauty businesses that depend on local customers.",
    challenges: [
      "Ranking for beauty and grooming keywords locally",
      "Google Maps visibility driving foot traffic",
      "Showcasing work through photos and reviews",
      "Competing with established local salons",
    ],
    services: [
      { title: "Local SEO", description: "Improve Maps rankings and local search visibility for your salon." },
      { title: "Web Development", description: "Build a visually appealing site that showcases your work and booking options." },
      { title: "Technical SEO", description: "Optimize site performance and structured data for local search." },
    ],
  },
  "real-estate": {
    name: "Real Estate",
    description: "SEO and web development for real estate agents and agencies that need to rank for property searches in their market.",
    challenges: [
      "Competitive property and real estate keywords",
      "Need for area-specific landing pages",
      "Showcasing listings and neighborhood information",
      "Building trust with potential buyers and sellers",
    ],
    services: [
      { title: "Local SEO", description: "Rank for real estate keywords in your target cities and neighborhoods." },
      { title: "Web Development", description: "Build a property-focused site with search, listings, and lead capture." },
      { title: "Technical SEO", description: "Ensure fast performance and proper schema for property-related content." },
    ],
  },
  "home-services": {
    name: "Home Services",
    description: "Local SEO for plumbers, electricians, cleaners, and other home service businesses that need more calls and jobs.",
    challenges: [
      "Ranking for service + location keywords",
      "Google Maps visibility driving emergency calls",
      "Building trust through reviews and credentials",
      "Service area optimization for multiple locations",
    ],
    services: [
      { title: "Local SEO", description: "Rank for 'plumber near me' and other service-area searches." },
      { title: "Web Development", description: "Build a fast, mobile-first site that converts emergency searches into calls." },
      { title: "Technical SEO", description: "Optimize for local search with proper schema and fast load times." },
    ],
  },
};

interface IndustryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = industries[params.slug as string];
  if (!industry) return {};

  return {
    title: `${industry.name} — Local SEO & Web Development | LocalLeads`,
    description: industry.description,
    alternates: { canonical: `/industries/${params.slug}` },
    openGraph: {
      title: `${industry.name} — LocalLeads`,
      description: industry.description,
      url: `${SITE_CONFIG.url}/industries/${params.slug}`,
    },
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = industries[params.slug as string];

  if (!industry) {
    notFound();
  }

  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: industry.name, href: `/industries/${params.slug}` },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[
        { name: "Industries", href: "/industries" },
        { name: industry.name, href: `/industries/${params.slug}` },
      ]} />

      <section className="relative bg-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #1973e0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <Eyebrow>Industries</Eyebrow>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            {industry.name}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {industry.description}
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50" aria-labelledby="challenges-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow="Common Challenges"
                heading="What {industry.name} Businesses Face"
                subheading="The most common barriers preventing local businesses in this industry from getting found and generating more leads."
                id="challenges-heading"
              />
              <ul className="space-y-3 mt-8" role="list">
                {industry.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader
                eyebrow="How We Help"
                heading="Services for {industry.name}"
                subheading="The LocalLeads services that make the biggest difference for businesses in this industry."
                id="services-heading"
              />
              <div className="space-y-4 mt-8">
                {industry.services.map((service) => (
                  <div key={service.title} className="card p-6">
                    <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-[1200px] text-center">
          <h2 className="font-display font-bold text-slate-900 text-3xl mb-4">
            Ready to Grow Your {industry.name} Business?
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto mb-8">
            Start with a free SEO audit. We&apos;ll analyze your online presence and show you exactly what&apos;s holding back your growth.
          </p>
          <Link
            href="/contact#audit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200"
          >
            Get Your Free SEO Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

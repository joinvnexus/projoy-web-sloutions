// app/industries/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  Building2,
  Heart,
  UtensilsCrossed,
  Scissors,
  Home,
  Truck,
  ArrowRight,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Eyebrow } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries — Local SEO & Web Development for Local Businesses",
  description:
    "LocalLeads serves local businesses across dentists, law firms, clinics, restaurants, salons, real estate, home services, and more.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — LocalLeads",
    description:
      "Local SEO and web development for local service businesses.",
    url: `${SITE_CONFIG.url}/industries`,
  },
};

const industries = [
  { name: "Dentists", href: "/industries/dentists", Icon: Stethoscope, description: "Attract more patients through local search and a conversion-focused website." },
  { name: "Law Firms", href: "/industries/law-firms", Icon: Building2, description: "Build authority and rank for high-intent legal keywords in your area." },
  { name: "Clinics", href: "/industries/clinics", Icon: Heart, description: "Improve visibility for patients searching for healthcare services nearby." },
  { name: "Restaurants", href: "/industries/restaurants", Icon: UtensilsCrossed, description: "Get found on Google Maps and turn searches into reservations and visits." },
  { name: "Salons", href: "/industries/salons", Icon: Scissors, description: "Rank for local beauty and grooming searches with a strategy that fits your business." },
  { name: "Real Estate", href: "/industries/real-estate", Icon: Home, description: "Show up when buyers and renters search for properties in your area." },
  { name: "Home Services", href: "/industries/home-services", Icon: Truck, description: "Dominate local search for plumbing, electrical, cleaning, and other home services." },
];

export default function IndustriesPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

      <section className="relative bg-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #1973e0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <Eyebrow>Industries</Eyebrow>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Local SEO &amp; Web Development{" "}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">for Local Businesses</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            We work with businesses that depend on being found locally. Every strategy is built around the unique needs of your industry and market.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container mx-auto max-w-[1200px]">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.Icon;
              return (
                <StaggerItem key={industry.name}>
                  <Link
                    href={industry.href}
                    className="card card-hover p-8 flex flex-col gap-4 group h-full block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <Icon className="w-6 h-6 text-brand-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-slate-900 text-xl mb-2 group-hover:text-brand-700 transition-colors">
                        {industry.name}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

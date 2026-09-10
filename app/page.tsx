// app/page.tsx
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { createBreadcrumbSchema } from "@/lib/schemas";

// Homepage sections
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyLocalLeads } from "@/components/home/WhyLocalLeads";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { PricingSection } from "@/components/home/PricingSection";
import { FinalCTA } from "@/components/home/FinalCTA";

/* ─── Page Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Get Found. Get Ranked. Get More Leads.`,
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_CONFIG.name} — Get Found. Get Ranked. Get More Leads.`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    type: "website",
  },
};

/* ─── Page Component ─────────────────────────────────────── */
export default function HomePage() {
  const breadcrumb = createBreadcrumbSchema([{ name: "Home", href: "/" }]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <HeroSection />
      <ProblemSection />
      <ServicesOverview />
      <WhyLocalLeads />
      <ProcessSection />
      <IndustriesSection />
      <FeaturedCaseStudies />
      <PricingSection />
      <FinalCTA />
    </>
  );
}

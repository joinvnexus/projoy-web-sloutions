// app/page.tsx
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { createBreadcrumbSchema } from "@/lib/schemas";

// Homepage sections
import { HeroSection }          from "@/components/home/HeroSection";
import { SocialProofBar }       from "@/components/home/SocialProofBar";
import { ServicesOverview }     from "@/components/home/ServicesOverview";
import { WhyProjoy }            from "@/components/home/WhyProjoy";
import { FeaturedCaseStudies }  from "@/components/home/FeaturedCaseStudies";
import { ProcessSection }       from "@/components/home/ProcessSection";
import { PricingSection }       from "@/components/home/PricingSection";
import { TestimonialsSection }  from "@/components/home/TestimonialsSection";
import { FinalCTA }             from "@/components/home/FinalCTA";

/* ─── Page Metadata ─────────────────────────────────────── */
export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Web Development & Local SEO Agency`,
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_CONFIG.name} — Web Development & Local SEO Agency`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    type: "website",
  },
};

/* ─── Page Component ────────────────────────────────────── */
export default function HomePage() {
  const breadcrumb = createBreadcrumbSchema([{ name: "Home", href: "/" }]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <HeroSection />
      <SocialProofBar />
      <ServicesOverview />
      <WhyProjoy />
      <FeaturedCaseStudies />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}

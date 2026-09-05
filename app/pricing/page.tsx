// app/pricing/page.tsx
import type { Metadata } from "next";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/services/FAQSection";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { Eyebrow, GradientText } from "@/components/shared/Typography";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import { pricingFaqs } from "@/lib/data/pricing";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing — Web Development & Local SEO Packages | Projoy Web Solutions",
  description:
    "Transparent pricing for Next.js web development, local SEO campaigns, and AI integrations. Project-based and monthly retainer options available.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Projoy Web Solutions",
    description: "Transparent, starting-from pricing for web development and local SEO services.",
    url: `${SITE_CONFIG.url}/pricing`,
  },
};

export default function PricingPage() {
  const breadcrumb = createBreadcrumbSchema([{ name: "Pricing", href: "/pricing" }]);
  const faqSchema = createFaqSchema(pricingFaqs);

  return (
    <>
      <SchemaMarkup schema={[breadcrumb, faqSchema]} />
      <Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />

      {/* Hero */}
      <section className="bg-white pt-10 pb-12 text-center">
        <div className="container mx-auto max-w-[700px] px-6">
          <Eyebrow>Investment</Eyebrow>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Pricing That Makes Sense for{" "}
            <GradientText>Growing Businesses</GradientText>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            No hidden fees, no inflated retainers. Choose a package below or talk to
            us for a custom quote tailored to your goals.
          </p>
        </div>
      </section>

      <PricingSection showFullFeatures />

      <FAQSection
        eyebrow="Pricing FAQ"
        heading="Questions About Pricing"
        faqs={pricingFaqs}
        accentColor="brand"
        background="slate"
        columns={1}
      />

      <FinalServiceCTA
        heading="Still Not Sure Which Package Fits?"
        subheading="Book a free 30-minute call and we'll recommend the right starting point based on your goals and budget — no pressure, no upsell."
        accentColor="brand"
      />
    </>
  );
}

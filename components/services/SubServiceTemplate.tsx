// components/services/SubServiceTemplate.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQSection } from "@/components/services/FAQSection";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import { SITE_CONFIG, IMAGE_ASSETS } from "@/lib/constants";
import type { SubServiceData } from "@/lib/data/sub-services";
import { cn } from "@/lib/utils";

export function SubServiceTemplate({ data }: { data: SubServiceData }) {
  const gradient =
    data.accentColor === "brand"
      ? "from-brand-600 to-accent-500"
      : "from-accent-500 to-brand-600";

  // Choose a fallback hero image per parent service when a specific one isn't provided
  const parentHeroMap: Record<SubServiceData['parentSlug'], string> = {
    "web-development": IMAGE_ASSETS.services.webDevelopment,
    "local-seo": IMAGE_ASSETS.services.localSeo,
    "ai-solutions": IMAGE_ASSETS.services.aiSolutions,
  };

  const heroSrc = data.heroImage ?? parentHeroMap[data.parentSlug];
  const heroAlt = data.heroImageAlt ?? `${data.title} hero image`;

  const breadcrumb = createBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: data.parentLabel, href: data.parentHref },
    { name: data.title, href: `${data.parentHref}/${data.slug}` },
  ]);

  const faqSchema = createFaqSchema(data.faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    provider: { "@type": "Organization", name: SITE_CONFIG.name },
    description: data.metaDescription,
    url: `${SITE_CONFIG.url}${data.parentHref}/${data.slug}/`,
    areaServed: "Worldwide",
  };

  return (
    <>
      <SchemaMarkup schema={[breadcrumb, faqSchema, serviceSchema]} />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: data.parentLabel, href: data.parentHref },
          { name: data.title, href: `${data.parentHref}/${data.slug}` },
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative bg-white pt-10 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div className="max-w-3xl">
              <span className="eyebrow">{data.parentLabel} · {data.title}</span>
              <h1
                className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                {data.heading}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                {data.subheading}
              </p>
              <Link
                href="/contact#audit"
                className={cn(
                  "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm",
                  "shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200",
                  `bg-gradient-to-r ${gradient}`
                )}
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl bg-slate-50">
              {heroSrc ? (
                <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[420px] ">
                  <Image
                    src={heroSrc}
                    alt={heroAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              ) : (
                <div className="min-h-[320px] flex items-center justify-center text-slate-500 text-sm font-semibold tracking-wide">
                  Sub-service hero placeholder
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6 max-w-xl">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className={cn(
                    "text-2xl lg:text-3xl font-black font-display tracking-tight leading-none mb-1",
                    "bg-gradient-to-r bg-clip-text text-transparent",
                    gradient
                  )}
                >
                  {stat.value}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="sub-benefits-heading">
        <div className="container mx-auto max-w-[1200px]">
          <h2
            id="sub-benefits-heading"
            className="font-display font-bold text-slate-900 text-2xl lg:text-3xl mb-10 leading-tight max-w-xl"
          >
            What's Included
          </h2>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card p-6 h-full">
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-white" aria-labelledby="sub-process-heading">
        <div className="container mx-auto max-w-[1200px]">
          <h2
            id="sub-process-heading"
            className="font-display font-bold text-slate-900 text-2xl lg:text-3xl mb-10 leading-tight max-w-xl"
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.process.map((step, i) => (
              <RevealWrapper key={step.title} delay={i * 0.08}>
                <div className="relative">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs mb-4",
                      `bg-gradient-to-br ${gradient}`
                    )}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={cn(
                      "inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-2",
                      data.accentColor === "brand"
                        ? "bg-brand-50 text-brand-700"
                        : "bg-accent-50 text-accent-700"
                    )}
                  >
                    {step.timeline}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="sub-deliverables-heading">
        <div className="container mx-auto max-w-[800px]">
          <h2
            id="sub-deliverables-heading"
            className="font-display font-bold text-slate-900 text-2xl lg:text-3xl mb-8 leading-tight text-center"
          >
            What You Receive
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 card p-4">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection
        eyebrow="FAQ"
        heading={`${data.title} — Common Questions`}
        faqs={data.faqs}
        accentColor={data.accentColor}
        background="white"
        columns={1}
      />

      {/* ── Cross-link back to parent ── */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-[1200px] text-center">
          <p className="text-sm text-slate-500">
            Want the complete picture?{" "}
            <Link
              href={data.parentHref}
              className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Explore all {data.parentLabel} services →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FinalServiceCTA
        heading={data.ctaHeading}
        subheading={data.ctaSubheading}
        accentColor={data.accentColor}
      />
    </>
  );
}

// app/case-studies/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader, GradientText, Eyebrow, Tag } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { CaseStudyFilterBar } from "@/components/case-studies/CaseStudyFilterBar";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { caseStudies } from "@/lib/data/case-studies";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Real Businesses | Projoy Web Solutions",
  description:
    "See how Projoy Web Solutions has helped local businesses, startups, and agencies rank higher, convert more visitors, and grow faster. Real metrics, real clients.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Projoy Web Solutions",
    description: "Real results from real businesses. Local SEO rankings, Next.js builds, AI integrations.",
    url: `${SITE_CONFIG.url}/case-studies`,
  },
};

const serviceGradient: Record<string, string> = {
  "local-seo": "from-accent-500 to-brand-600",
  "web-development": "from-brand-600 to-accent-500",
  "ai-solutions": "from-brand-700 to-accent-500",
};

const tagVariantMap: Record<string, "brand" | "accent" | "slate"> = {
  "local-seo": "accent",
  "web-development": "brand",
  "ai-solutions": "brand",
};

const aggregateStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "340%", label: "Best Profile View Increase" },
  { value: "8.4%", label: "Best Conversion Rate" },
  { value: "98", label: "Best PageSpeed Score" },
];

const VALID_FILTERS = ["all", "local-seo", "web-development", "ai-solutions"];

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  const initialFilter = VALID_FILTERS.includes(filter ?? "") ? filter! : "all";

  const breadcrumb = createBreadcrumbSchema([{ name: "Case Studies", href: "/case-studies" }]);

  const featured = caseStudies.filter((cs) => cs.featured);
  const rest = caseStudies.filter((cs) => !cs.featured);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[{ name: "Case Studies", href: "/case-studies" }]} />

      {/* ── Hero ── */}
      <section className="relative bg-white px-8 pt-8 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="max-w-2xl">
            <Eyebrow>Proven Results</Eyebrow>
            <h1
              className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Real Businesses.{" "}
              <GradientText>Measurable Growth.</GradientText>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every case study below comes with real numbers, real clients, and real
              strategies. No inflated claims — just documented outcomes.
            </p>
          </div>

          {/* Aggregate stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl">
            {aggregateStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black font-display tracking-tight gradient-text leading-none mb-1">
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

      {/* ── Featured Case Studies ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="featured-cs-heading">
        <div className="container mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Featured"
            heading="Our Best Results"
            subheading="Hand-picked case studies showing the depth of strategy and measurable outcomes we deliver."
            id="featured-cs-heading"
            align="left"
            maxWidth="xl"
          />
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {featured.map((cs) => {
              const gradient = serviceGradient[cs.service];
              return (
                <StaggerItem key={cs.slug}>
                  <article className="card card-hover overflow-hidden group flex flex-col h-full">
                    <div className={cn("h-1.5 bg-gradient-to-r flex-shrink-0", gradient)} />
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-5 flex-wrap">
                        <Tag variant={tagVariantMap[cs.service]}>{cs.serviceLabel}</Tag>
                        <span className="text-xs text-slate-400">{cs.location}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-400">{cs.timeline}</span>
                      </div>
                      <h2 className="font-display font-bold text-slate-900 text-xl lg:text-2xl leading-snug mb-3">
                        {cs.headline}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                        {cs.description}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-slate-100 mb-6">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <div className={cn(
                              "text-xl lg:text-2xl font-black font-display tracking-tight leading-none mb-1",
                              "bg-gradient-to-r bg-clip-text text-transparent",
                              gradient
                            )}>
                              {m.value}
                            </div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/case-studies/${cs.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-all duration-200 group-hover:gap-2.5"
                      >
                        Read the full case study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Filterable "More Results" — client island, supports ?filter= query param */}
          {rest.length > 0 && (
            <>
              <h2 className="font-display font-bold text-slate-900 text-xl mb-5">
                More Results
              </h2>
              <CaseStudyFilterBar caseStudies={rest} initialFilter={initialFilter} />
            </>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <FinalServiceCTA
        heading="Could Your Business Get These Results?"
        subheading="Every case study started with a free audit. Let's identify what's holding your growth back and build a plan to fix it."
        primaryCTA={{ label: "Get Your Free Growth Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
        accentColor="brand"
        testimonialQuote="The results they showed us in the audit were conservative — we ended up doing even better. Totally recommend."
        testimonialAuthor="Karim Miah · Owner, KM Auto Repair, Sylhet"
      />
    </>
  );
}

// app/case-studies/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Code2, Cpu, Quote } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BeforeAfterPanel } from "@/components/shared/BeforeAfterPanel";
import { Tag, Eyebrow } from "@/components/shared/Typography";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { createBreadcrumbSchema, createArticleSchema } from "@/lib/schemas";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies";
import { SITE_CONFIG } from "@/lib/constants";
import { cn, formatDate } from "@/lib/utils";

/* ─── Tag variant map ────────────────────────────────────── */
const tagVariantMap: Record<string, "brand" | "accent" | "slate"> = {
  "local-seo": "accent",
  "web-development": "brand",
  "ai-solutions": "brand",
};

/* ─── Service config ─────────────────────────────────────── */
const serviceConfig = {
  "local-seo": {
    icon: MapPin,
    gradient: "from-accent-500 to-brand-600",
    tagVariant: "accent" as const,
    accentColor: "accent" as const,
  },
  "web-development": {
    icon: Code2,
    gradient: "from-brand-600 to-accent-500",
    tagVariant: "brand" as const,
    accentColor: "brand" as const,
  },
  "ai-solutions": {
    icon: Cpu,
    gradient: "from-brand-700 to-accent-500",
    tagVariant: "brand" as const,
    accentColor: "brand" as const,
  },
};

/* ─── Static Params ──────────────────────────────────────── */
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

/* ─── Metadata ───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.headline} | Case Study — Projoy Web Solutions`,
    description: cs.description,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: cs.headline,
      description: cs.description,
      url: `${SITE_CONFIG.url}/case-studies/${slug}`,
      type: "article",
      publishedTime: cs.publishedAt,
    },
  };
}

/* ─── Page ───────────────────────────────────────────────── */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const config = serviceConfig[cs.service];

  const otherStudies = caseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 2);

  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: cs.client, href: `/case-studies/${slug}` },
  ]);

  const articleSchema = createArticleSchema({
    title: cs.headline,
    description: cs.description,
    publishedAt: cs.publishedAt,
    slug: `case-studies/${slug}`,
  });

  return (
    <>
      <SchemaMarkup schema={[breadcrumb, articleSchema]} />

      <Breadcrumbs
        items={[
          { name: "Case Studies", href: "/case-studies" },
          { name: cs.client, href: `/case-studies/${slug}` },
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative bg-white pt-10 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" aria-hidden="true" />
        <div className="container mx-auto max-w-[900px] relative z-10">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <Tag variant={config.tagVariant}>{cs.serviceLabel}</Tag>
            <span className="text-xs text-slate-400">{cs.location}</span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">{cs.timeline} engagement</span>
            <span className="text-slate-300">·</span>
            <time className="text-xs text-slate-400" dateTime={cs.publishedAt}>
              {formatDate(cs.publishedAt)}
            </time>
          </div>

          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {cs.headline}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {cs.description}
          </p>
        </div>
      </section>

      {/* ── Metrics Hero Bar ── */}
      <section className="bg-slate-900 py-10" aria-label="Key results">
        <div className="container mx-auto max-w-[900px]">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center mb-8">
            Key Results
          </p>
          <StaggerContainer
            className={cn(
              "grid gap-6",
              cs.metrics.length === 4
                ? "grid-cols-2 sm:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3"
            )}
          >
            {cs.metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="text-center">
                  <div
                    className={cn(
                      "text-3xl sm:text-4xl font-black font-display tracking-tight leading-none mb-2",
                      "bg-gradient-to-r bg-clip-text text-transparent",
                      config.gradient
                    )}
                  >
                    {m.value}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Body Content ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-[900px]">
          <div className="space-y-14">

            {/* The Challenge */}
            <RevealWrapper>
              <div>
                <Eyebrow>The Challenge</Eyebrow>
                <h2 className="font-display font-bold text-slate-900 text-2xl mb-4 leading-tight">
                  Where {cs.client} Was Before We Started
                </h2>
                <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
              </div>
            </RevealWrapper>

            {/* Strategy */}
            <RevealWrapper>
              <div>
                <Eyebrow>The Strategy</Eyebrow>
                <h2 className="font-display font-bold text-slate-900 text-2xl mb-4 leading-tight">
                  Our Approach
                </h2>
                <p className="text-slate-600 leading-relaxed">{cs.strategy}</p>
              </div>
            </RevealWrapper>

            {/* Results */}
            <RevealWrapper>
              <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 lg:p-10">
                <Eyebrow>The Results</Eyebrow>
                <h2 className="font-display font-bold text-slate-900 text-2xl mb-4 leading-tight">
                  What We Achieved
                </h2>
                <p className="text-slate-600 leading-relaxed mb-7">{cs.result}</p>

                <div
                  className={cn(
                    "grid gap-5",
                    cs.metrics.length === 4
                      ? "grid-cols-2 sm:grid-cols-4"
                      : "grid-cols-2 sm:grid-cols-3"
                  )}
                >
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="card p-5 text-center">
                      <div
                        className={cn(
                          "text-2xl sm:text-3xl font-black font-display tracking-tight leading-none mb-1",
                          "bg-gradient-to-r bg-clip-text text-transparent",
                          config.gradient
                        )}
                      >
                        {m.value}
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Before/After visual proof */}
                {cs.beforeAfter && (
                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                      {cs.beforeAfter.metric}
                    </p>
                    <BeforeAfterPanel
                      beforeContent={
                        <div className="text-center">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                            Before
                          </p>
                          <p className="text-xl font-bold text-slate-500">
                            {cs.beforeAfter.before}
                          </p>
                        </div>
                      }
                      afterContent={
                        <div className="text-center">
                          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-2">
                            After
                          </p>
                          <p
                            className={cn(
                              "text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                              config.gradient
                            )}
                          >
                            {cs.beforeAfter.after}
                          </p>
                        </div>
                      }
                    />
                  </div>
                )}
              </div>
            </RevealWrapper>

            {/* Tags */}
            <RevealWrapper>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Services Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            {/* Testimonial */}
            {cs.testimonial && (
              <RevealWrapper>
                <div className="relative bg-slate-900 rounded-3xl p-8 lg:p-10">
                  <Quote className="w-10 h-10 text-slate-700 mb-5" />
                  <blockquote className="text-lg text-white leading-relaxed mb-6 font-medium">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {cs.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {cs.testimonial.author}
                      </p>
                      <p className="text-slate-400 text-xs">{cs.testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            )}
          </div>
        </div>
      </section>

      {/* ── Related Case Studies ── */}
      {otherStudies.length > 0 && (
        <section
          className="section-padding bg-slate-50"
          aria-labelledby="related-cs-heading"
        >
          <div className="container mx-auto max-w-[900px]">
            <h2
              id="related-cs-heading"
              className="font-display font-bold text-slate-900 text-2xl mb-8"
            >
              More Case Studies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="card card-hover p-6 group flex flex-col"
                >
                  <Tag
                    variant={tagVariantMap[study.service] ?? "slate"}
                    className="mb-3 w-fit"
                  >
                    {study.serviceLabel}
                  </Tag>
                  <h3 className="font-display font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-brand-700 transition-colors">
                    {study.headline}
                  </h3>
                  <p className="text-slate-500 text-xs mb-4 flex-1 line-clamp-2">
                    {study.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <FinalServiceCTA
        heading="Could Your Business Get Similar Results?"
        subheading="Every engagement starts with a free audit. Let's find out exactly what's possible for your business."
        primaryCTA={{ label: "Get Your Free Growth Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "View All Case Studies", href: "/case-studies" }}
        accentColor={config.accentColor}
      />
    </>
  );
}

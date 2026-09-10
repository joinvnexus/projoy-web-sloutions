// app/free-seo-audit/page.tsx
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Eyebrow } from "@/components/shared/Typography";
import { AuditForm } from "@/components/forms/AuditForm";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free SEO Audit — Find Out What's Holding Your Website Back",
  description:
    "Get a free SEO audit covering technical SEO, indexability, performance, on-page SEO, local SEO, Google Business Profile, and competitor opportunities.",
  alternates: { canonical: "/free-seo-audit" },
  openGraph: {
    title: "Free SEO Audit — LocalLeads",
    description:
      "Get a free SEO audit. We'll analyze your website and Google presence and deliver actionable recommendations.",
    url: `${SITE_CONFIG.url}/free-seo-audit`,
  },
};

const auditAreas = [
  { title: "Technical SEO", description: "Crawlability, indexability, site architecture, and rendering issues affecting search visibility." },
  { title: "Indexability", description: "Canonicalization, noindex tags, XML sitemap, and robots.txt review." },
  { title: "Website Performance", description: "Core Web Vitals, page load times, and mobile performance assessment." },
  { title: "On-Page SEO", description: "Title tags, meta descriptions, headings, content structure, and internal linking." },
  { title: "Local SEO", description: "Google Business Profile completeness, citations, NAP consistency, and local signals." },
  { title: "Google Business Profile", description: "Profile optimization, categories, attributes, posts, and review strategy." },
  { title: "Competitor Opportunities", description: "Competitive gaps in rankings, content, and backlinks you can exploit." },
];

export default function FreeSeoAuditPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Free SEO Audit", href: "/free-seo-audit" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[{ name: "Free SEO Audit", href: "/free-seo-audit" }]} />

      <section className="relative bg-white pt-8 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #1973e0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <Eyebrow>Free SEO Audit</Eyebrow>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Find Out What&apos;s{" "}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Holding Your Website Back</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Get a clear, actionable analysis of your website and Google presence. No fluff, no pressure — just the insights you need to start growing.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50" id="audit">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-3">
              <RevealWrapper>
                <div className="card p-8 lg:p-10">
                  <div className="mb-7">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold text-brand-700 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                      Free — No Commitment Required
                    </span>
                    <h2 className="font-display font-bold text-slate-900 text-2xl mb-2 leading-tight">
                      Request Your Free SEO Audit
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We&apos;ll analyze your website and Google presence and deliver a personalised audit with specific, actionable recommendations.
                    </p>
                  </div>
                  <AuditForm variant="default" />
                </div>
              </RevealWrapper>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <RevealWrapper delay={0.1}>
                <div className="card p-6">
                  <h3 className="font-display font-semibold text-slate-900 text-base mb-4">
                    Your Free Audit Includes:
                  </h3>
                  <ul className="space-y-2.5" role="list">
                    {auditAreas.map((item) => (
                      <li key={item.title} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-slate-700">{item.title}</span>
                          <span className="text-xs text-slate-500 block">{item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>

              <RevealWrapper delay={0.15}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <p className="text-xs text-slate-400 leading-snug">
                    <span className="font-semibold text-slate-300">No obligation. No sales pressure.</span>{" "}
                    Just actionable insights you can use whether you work with us or not.
                  </p>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

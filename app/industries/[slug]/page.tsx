// app/industries/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { createIndustrySchema, createBreadcrumbSchema } from "@/lib/schemas";
import { getIndustry, industries } from "@/lib/data/industries";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Local SEO & Web Development | ${SITE_CONFIG.name}`,
    description: industry.shortDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <main>
      <section className="px-6 py-20 lg:py-28 bg-slate-950 text-white">
        <div className="container mx-auto max-w-[1000px]">
          <p className="eyebrow text-brand-300">LOCAL BUSINESS • {industry.name.toUpperCase()}</p>
          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl tracking-tight max-w-4xl">
            {industry.shortDescription}
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            {industry.problem}
          </p>
          <Link
            href="/contact#audit"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-bold text-white hover:bg-brand-700 transition-colors"
          >
            Get a free visibility audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-[1000px]">
          <p className="eyebrow">TECHNICAL PRIORITIES</p>
          <h2 className="mt-3 text-3xl font-display font-bold text-slate-900">What we fix first</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {industry.fixes.map((fix) => (
              <div key={fix} className="rounded-2xl border border-slate-200 p-5 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-slate-700">{fix}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container mx-auto max-w-[1000px] grid md:grid-cols-2 gap-8">
          <div>
            <p className="eyebrow">HOW IT CONNECTS</p>
            <h2 className="mt-3 text-3xl font-display font-bold text-slate-900">One system, not disconnected tactics.</h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p><strong className="text-slate-900">Web development:</strong> build fast pages with clear conversion paths.</p>
            <p><strong className="text-slate-900">Technical SEO:</strong> improve crawlability, indexability, structured data, and performance.</p>
            <p><strong className="text-slate-900">Local SEO:</strong> strengthen location relevance and Google Business signals.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-[1000px] text-center">
          <p className="text-sm font-semibold text-brand-600">START WITH THE DATA</p>
          <h2 className="mt-3 text-3xl font-display font-bold text-slate-900">See what is holding your site back.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Get a free audit and use the findings to prioritize the technical and local search improvements that matter most.</p>
          <Link href="/contact#audit" className="mt-7 inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700">
            Get the free audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

// app/industries/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: `Industries | Local SEO & Web Development | ${SITE_CONFIG.name}`,
  description: "Local SEO, technical SEO, and high-performance web development tailored to local service businesses.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="px-6 py-20 lg:py-28 bg-slate-950 text-white">
        <div className="container mx-auto max-w-[1000px]">
          <p className="eyebrow text-brand-300">INDUSTRIES</p>
          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl tracking-tight max-w-4xl">
            Technical SEO and web development for businesses that win locally.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Explore the problems, technical priorities, and conversion paths we focus on for local businesses.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-2xl border border-slate-200 p-7 hover:border-brand-200 hover:shadow-card transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Local growth</p>
              <h2 className="mt-3 text-xl font-display font-bold text-slate-900">{industry.name}</h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{industry.shortDescription}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                View industry strategy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

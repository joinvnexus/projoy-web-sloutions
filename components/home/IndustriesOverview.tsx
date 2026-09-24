// components/home/IndustriesOverview.tsx
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { industries } from "@/lib/data/industries";

export function IndustriesOverview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="industries-heading">
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Who We Help"
          heading={<>Built around the way local businesses actually compete.</>}
          subheading="Our industry pages connect the same technical SEO and web-development foundation to the search behavior, services, and conversion paths of specific local businesses."
          id="industries-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                <Building2 className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-bold text-slate-900 text-lg">{industry.name}</h3>
                <ArrowRight className="w-4 h-4 text-slate-400 mt-1 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">{industry.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

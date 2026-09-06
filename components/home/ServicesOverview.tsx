// components/home/ServicesOverview.tsx
import { Code2, MapPin, Search } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { ServiceCard } from "@/components/shared/Card";
import { SERVICES_OVERVIEW } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  "map-pin": MapPin,
  search: Search,
};

export function ServicesOverview() {
  return (
    <section
      className="section-padding bg-slate-50"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="What We Do"
          heading={
            <>
              Build. Optimize. Get Found.
              <br className="hidden sm:block" /> One Growth Partner.
            </>
          }
          subheading="We build technically strong websites, optimize them for search, and improve the foundations that turn visibility into qualified leads."
          id="services-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_OVERVIEW.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <ServiceCard
                key={service.id}
                icon={<Icon strokeWidth={1.75} />}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
                accent={service.accent as "brand" | "accent"}
              />
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-1">Additional Capability</p>
            <h3 className="font-display font-bold text-slate-900 text-lg">AI Solutions &amp; Automation</h3>
            <p className="text-sm text-slate-600 mt-1">Add intelligent automation, AI assistants, and custom integrations when they support your growth goals.</p>
          </div>
          <a href="/services/ai-solutions" className="text-sm font-semibold text-brand-600 hover:text-brand-700 whitespace-nowrap">Explore AI Solutions &rarr;</a>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-slate-500 mt-10">
          Not sure which service you need?{" "}
          <a
            href="/contact"
            className="text-brand-600 hover:text-brand-700 font-semibold transition-colors"
          >
            Book a free 30-min call
          </a>{" "}
          and we&apos;ll map out the right strategy for your business.
        </p>
      </div>
    </section>
  );
}

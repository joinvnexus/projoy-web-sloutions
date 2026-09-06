// components/home/ServicesOverview.tsx
import { Code2, MapPin, Cpu, Search } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { ServiceCard } from "@/components/shared/Card";
import { SERVICES_OVERVIEW } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  "map-pin": MapPin,
  search: Search,
  cpu: Cpu,
};

export function ServicesOverview() {
  return (
    <section className="section-padding bg-slate-50" id="services" aria-labelledby="services-heading">
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Core Services"
          heading={<><Custom Web Development, Local SEO &amp; Technical SEO.<br className="hidden sm:block" /> <span>One Growth Partner.</span></>}
          subheading="Build a stronger digital foundation, improve local visibility, and make your website search-ready with one technical growth partner."
          id="services-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_OVERVIEW.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return <ServiceCard key={service.id} icon={<Icon strokeWidth={1.75} />} title={service.title} description={service.description} features={service.features} href={service.href} accent={service.accent as "brand" | "accent"} />;
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 mb-3">Need smarter workflows after your foundation is in place?</p>
          <a href="/services/ai-solutions" className="text-brand-600 hover:text-brand-700 font-semibold transition-colors">
            Explore AI Solutions &amp; Automation →
          </a>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Not sure which service you need?{" "}
          <a href="/contact" className="text-brand-600 hover:text-brand-700 font-semibold transition-colors">Book a free 30-min call</a>{" "}
          and we&apos;ll map out the right strategy for your business.
        </p>
      </div>
    </section>
  );
}

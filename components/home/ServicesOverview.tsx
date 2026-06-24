// components/home/ServicesOverview.tsx
import { Code2, MapPin, Cpu } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { ServiceCard } from "@/components/shared/Card";
import { SERVICES_OVERVIEW } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  "map-pin": MapPin,
  cpu: Cpu,
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
              Two Powerful Services.
              <br className="hidden sm:block" /> One Growth Partner.
            </>
          }
          subheading="Whether you need a stunning, blazing-fast website or a Google Maps presence that dominates your city — we deliver measurable outcomes, not just deliverables."
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

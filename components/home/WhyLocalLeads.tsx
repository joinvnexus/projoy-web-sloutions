// components/home/WhyLocalLeads.tsx
import { MapPin, Search, Code2, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: MapPin,
    color: "accent",
    title: "Local SEO is our focus",
    body: "We work on Google Business Profile optimization, Maps visibility, citations, reputation, and local search strategy — the signals that drive local growth.",
    stat: "Local",
    statLabel: "Search focus",
  },
  {
    icon: Search,
    color: "brand",
    title: "Technical SEO foundation",
    body: "We audit crawlability, indexability, performance, metadata, and structured data — then implement the approved fixes so your site is search-ready.",
    stat: "Technical",
    statLabel: "SEO foundation",
  },
  {
    icon: Code2,
    color: "brand",
    title: "Websites built for growth",
    body: "We build fast, conversion-focused websites on modern stacks. Every pixel and every millisecond is engineered for performance and SEO from day one.",
    stat: "Web",
    statLabel: "Development",
  },
  {
    icon: BarChart3,
    color: "accent",
    title: "Strategy first, data-driven",
    body: "Every engagement starts with a clear plan — audit, priorities, timeline, and measurable outcomes. You always know what we're doing and why.",
    stat: "Clear",
    statLabel: "Process and reporting",
  },
] as const;

const colorMap = {
  brand: {
    iconWrapper: "bg-brand-50",
    icon: "text-brand-600",
    stat: "text-brand-600",
    border: "border-brand-100",
    hover: "hover:border-brand-200 hover:bg-brand-50/30",
  },
  accent: {
    iconWrapper: "bg-accent-50",
    icon: "text-accent-600",
    stat: "text-accent-600",
    border: "border-accent-100",
    hover: "hover:border-accent-200 hover:bg-accent-50/30",
  },
};

export function WhyLocalLeads() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="why-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Why Choose Us"
          heading={
            <>
              We don&apos;t just optimize websites.
              <br className="hidden sm:block" /> We optimize for business growth.
            </>
          }
          subheading="A great website with no traffic is a brochure. SEO with a slow site kills conversions. LocalLeads connects website, technical foundation, and local search into one growth system."
          id="why-heading"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {differentiators.map((item) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            return (
              <StaggerItem key={item.title}>
                <div
                  className={cn(
                    "relative p-7 rounded-2xl border bg-white transition-all duration-300 group cursor-default",
                    colors.border,
                    colors.hover
                  )}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                        colors.iconWrapper
                      )}
                    >
                      <Icon
                        className={cn("w-5 h-5", colors.icon)}
                        strokeWidth={1.75}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-5 right-5">
                    <div className="text-right">
                      <div
                        className={cn(
                          "text-2xl font-black font-display tracking-tight leading-none",
                          colors.stat
                        )}
                      >
                        {item.stat}
                      </div>
                      <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

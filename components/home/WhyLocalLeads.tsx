// components/home/WhyLocalLeads.tsx
import { Search, MapPin, TrendingUp, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: Search,
    color: "brand",
    title: "Strategy before execution",
    body: "We start with audit data, competitor analysis, and a clear roadmap. No guesswork, no wasted spend on tactics that don't move the needle.",
    stat: "Audit",
    statLabel: "First step always",
  },
  {
    icon: MapPin,
    color: "accent",
    title: "Technical and local expertise combined",
    body: "Most agencies specialize in either development or SEO. We deliver both under one roof, so your website is built right and optimized from day one.",
    stat: "Dual",
    statLabel: "Web + Local focus",
  },
  {
    icon: TrendingUp,
    color: "brand",
    title: "Built for business growth",
    body: "Every decision is tied to a business outcome — more calls, more traffic, more conversions. We report in plain numbers, not vanity metrics.",
    stat: "Growth",
    statLabel: "Business outcomes",
  },
  {
    icon: ShieldCheck,
    color: "accent",
    title: "Transparent and accountable",
    body: "Clear scopes, itemized quotes, and documented progress. You always know what we're doing, why, and what impact it's having.",
    stat: "Clear",
    statLabel: "No black boxes",
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
              Most Agencies Do One Thing.
              <br className="hidden sm:block" /> We Connect All Three.
            </>
          }
          subheading="A great website with no traffic is a brochure. SEO with a slow, weak site wastes budget. LocalLeads connects web development, technical SEO, and local search into one accountable system."
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
                    {/* Icon */}
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

                  {/* Stat badge */}
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

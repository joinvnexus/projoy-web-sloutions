// components/home/WhyProjoy.tsx
import { Zap, MapPin, Cpu, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: Zap,
    color: "brand",
    title: "Speed is non-negotiable",
    body: "We build with Next.js for 95+ Core Web Vitals scores. Fast sites rank higher and convert better — Google's own data proves it.",
    stat: "95+",
    statLabel: "Avg. PageSpeed",
  },
  {
    icon: MapPin,
    color: "accent",
    title: "Local SEO is our superpower",
    body: "We've helped local businesses rank in the Google 3-pack within 90 days using proven GBP optimization strategies others overlook.",
    stat: "90",
    statLabel: "Days to Results",
  },
  {
    icon: Cpu,
    color: "brand",
    title: "AI-powered where it matters",
    body: "We integrate AI into your website — chatbots, automation, smart lead capture — so your business scales without adding headcount.",
    stat: "24/7",
    statLabel: "AI Lead Capture",
  },
  {
    icon: BarChart3,
    color: "accent",
    title: "Dashboards, not PDF reports",
    body: "Real-time visibility into rankings, traffic, and leads. You'll always know exactly what your investment is doing — in plain English.",
    stat: "100%",
    statLabel: "Transparent ROI",
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

export function WhyProjoy() {
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
              <br className="hidden sm:block" /> We Do Both — And Connect Them.
            </>
          }
          subheading="A great website with no traffic is a brochure. SEO with a slow, ugly site kills conversions. Projoy gives you both sides of the equation."
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

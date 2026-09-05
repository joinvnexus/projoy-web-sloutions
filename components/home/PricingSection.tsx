// components/home/PricingSection.tsx
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { pricingTiers } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  showFullFeatures?: boolean;
}

export function PricingSection({ showFullFeatures = false }: PricingSectionProps) {
  return (
    <section className="section-padding bg-white" aria-labelledby="pricing-heading" id="pricing">
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Investment"
          heading="Transparent Pricing. No Surprises."
          subheading="We offer project-based and monthly retainer options. Most clients start with one service and expand to both within 6 months."
          id="pricing-heading"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.id}>
              <div
                className={cn(
                  "relative rounded-3xl border p-8 h-full flex flex-col",
                  tier.highlighted
                    ? "border-brand-300 bg-gradient-to-b from-brand-50/60 to-white shadow-card-hover scale-[1.02]"
                    : "border-slate-200 bg-white shadow-card"
                )}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}

                <h3 className="font-display font-bold text-slate-900 text-xl mb-1 mt-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-500 mb-5">{tier.idealFor}</p>

                <div className="mb-5">
                  <span className="text-3xl font-black font-display text-slate-900 tracking-tight">
                    {tier.startingAt}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">{tier.period}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1" role="list">
                  {(showFullFeatures ? tier.features : tier.features.slice(0, 5)).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className={f.endsWith(":") ? "font-semibold text-slate-500" : ""}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200",
                    tier.highlighted
                      ? "bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow-md"
                      : "border-2 border-slate-200 text-slate-700 hover:border-brand-200 hover:text-brand-700"
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="text-center text-sm text-slate-500 mt-10">
          Need something more specific?{" "}
          <Link href="/contact#audit" className="text-brand-600 hover:text-brand-700 font-semibold transition-colors">
            Get a custom quote
          </Link>{" "}
          — free, 30-minute call.
        </p>
      </div>
    </section>
  );
}

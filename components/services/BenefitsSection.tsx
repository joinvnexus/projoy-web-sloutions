// components/services/BenefitsSection.tsx
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string; // optional metric or callout
}

interface BenefitsSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: string;
  benefits: Benefit[];
  columns?: 2 | 3;
  variant?: "cards" | "clean"; // cards = boxed, clean = open grid
  accentColor?: "brand" | "accent";
  background?: "white" | "slate";
}

export function BenefitsSection({
  eyebrow = "What You Get",
  heading,
  subheading,
  benefits,
  columns = 3,
  variant = "cards",
  accentColor = "brand",
  background = "white",
}: BenefitsSectionProps) {
  const iconBg = accentColor === "brand"
    ? "bg-brand-50 text-brand-600"
    : "bg-accent-50 text-accent-600";

  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <section
      className={cn(
        "section-padding",
        background === "slate" ? "bg-slate-50" : "bg-white"
      )}
      aria-labelledby="benefits-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          subheading={subheading}
          id="benefits-heading"
        />

        <StaggerContainer className={cn("grid grid-cols-1 gap-5", gridCols)}>
          {benefits.map((benefit, i) => (
            <StaggerItem key={i}>
              {variant === "cards" ? (
                /* Card style */
                <div className="card card-hover p-7 group h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110 flex-shrink-0",
                      iconBg
                    )}
                  >
                    <span className="w-5 h-5">{benefit.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-snug">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {benefit.description}
                  </p>

                  {/* Optional highlight badge */}
                  {benefit.highlight && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 text-xs font-bold",
                          accentColor === "brand" ? "text-brand-600" : "text-accent-600"
                        )}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {benefit.highlight}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                /* Clean style (no card border) */
                <div className="group flex gap-4 h-full">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5",
                      iconBg
                    )}
                  >
                    <span className="w-5 h-5">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base mb-1.5 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    {benefit.highlight && (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 text-xs font-bold mt-2",
                          accentColor === "brand" ? "text-brand-600" : "text-accent-600"
                        )}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {benefit.highlight}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// components/home/FeaturedCaseStudies.tsx
import Link from "next/link";
import { ArrowRight, MapPin, Code2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { cn } from "@/lib/utils";
import { getFeaturedCaseStudies } from "@/lib/data/case-studies";

const tagConfig: Record<string, { icon: React.ElementType; color: "brand" | "accent" }> = {
  "local-seo": { icon: MapPin, color: "accent" },
  "web-development": { icon: Code2, color: "brand" },
};

export function FeaturedCaseStudies() {
  const caseStudies = getFeaturedCaseStudies();

  return (
    <section
      className="section-padding bg-slate-900 relative overflow-hidden"
      aria-labelledby="case-studies-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-600/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/[0.04] blur-3xl" />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <SectionHeader
          eyebrow="Case Studies"
          heading="Our Case Study Library Is Growing"
          subheading="Detailed project breakdowns will be published as projects are completed and verified."
          light
        />

        {caseStudies.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study) => {
              const config = tagConfig[study.service] ?? { icon: Code2, color: "brand" };
              const TagIcon = config.icon;
              return (
                <StaggerItem key={study.slug}>
                  <article className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors duration-300 group">
                    <div className={cn("h-1.5 bg-gradient-to-r", config.color === "accent" ? "from-accent-600 to-brand-600" : "from-brand-600 to-accent-500")} />

                    <div className="p-7 lg:p-8">
                      <div className="flex items-center gap-2 mb-5">
                        <div
                          className={cn(
                            "w-6 h-6 rounded-md flex items-center justify-center",
                            config.color === "accent" ? "bg-accent-500/20" : "bg-brand-500/20"
                          )}
                        >
                          <TagIcon
                            className={cn(
                              "w-3.5 h-3.5",
                              config.color === "accent" ? "text-accent-400" : "text-brand-400"
                            )}
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {study.serviceLabel}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-white text-xl lg:text-2xl leading-snug mb-3">
                        {study.headline}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-7">
                        {study.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-7 py-5 border-y border-slate-700">
                        {study.metrics.slice(0, 3).map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className={cn(
                              "text-2xl lg:text-3xl font-black font-display tracking-tight leading-none mb-1",
                              "bg-gradient-to-r bg-clip-text text-transparent",
                              config.color === "accent" ? "from-accent-600 to-brand-600" : "from-brand-600 to-accent-500"
                            )}>
                              {metric.value}
                            </div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 group-hover:gap-2.5"
                      >
                        Read the full case study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        ) : (
          <RevealWrapper>
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg mb-2">Our case study library is growing.</p>
              <p className="text-slate-500 text-sm">Detailed project breakdowns will be published as projects are completed and verified.</p>
            </div>
          </RevealWrapper>
        )}

        <RevealWrapper className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200 group"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}

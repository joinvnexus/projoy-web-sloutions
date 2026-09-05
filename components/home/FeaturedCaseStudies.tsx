// components/home/FeaturedCaseStudies.tsx
import Link from "next/link";
import { ArrowRight, TrendingUp, Code2, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    tag: "Local SEO",
    tagIcon: MapPin,
    tagColor: "accent",
    client: "Local Restaurant",
    location: "Sylhet, Bangladesh",
    headline: "From Page 3 to the Google 3-Pack in 67 Days",
    description:
      "A well-regarded local restaurant was invisible on Google Maps despite great food and reviews. We implemented our full GBP optimization stack — and the results speak for themselves.",
    metrics: [
      { value: "+340%", label: "Profile Views" },
      { value: "+210%", label: "Direction Requests" },
      { value: "+89%", label: "Calls from Google" },
    ],
    href: "/case-studies/local-restaurant-seo",
    accentFrom: "from-accent-600",
    accentTo: "to-brand-600",
  },
  {
    tag: "Next.js Development",
    tagIcon: Code2,
    tagColor: "brand",
    client: "SaaS Startup",
    location: "Remote",
    headline: "SaaS Landing Page That Converted at 8.4%",
    description:
      "A B2B SaaS company needed a launch page that would convert cold ad traffic. We designed and built a Next.js landing page optimized from the ground up for conversion.",
    metrics: [
      { value: "8.4%", label: "Conversion Rate" },
      { value: "98", label: "PageSpeed Score" },
      { value: "4 mo", label: "to $8k MRR" },
    ],
    href: "/case-studies/saas-landing-page",
    accentFrom: "from-brand-600",
    accentTo: "to-accent-500",
  },
] as const;

export function FeaturedCaseStudies() {
  return (
    <section
      className="section-padding bg-slate-900 relative overflow-hidden"
      aria-labelledby="case-studies-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-600/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/[0.04] blur-3xl" />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <SectionHeader
          eyebrow="Proven Results"
          heading="Real Businesses. Measurable Growth."
          subheading="Don't take our word for it — here's what happens when great websites meet local SEO expertise."
          light
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => {
            const TagIcon = study.tagIcon;
            return (
              <StaggerItem key={study.href}>
                <article className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors duration-300 group">
                  {/* Card header gradient */}
                  <div className={cn("h-1.5 bg-gradient-to-r", study.accentFrom, study.accentTo)} />

                  <div className="p-7 lg:p-8">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-5">
                      <div
                        className={cn(
                          "w-6 h-6 rounded-md flex items-center justify-center",
                          study.tagColor === "accent"
                            ? "bg-accent-500/20"
                            : "bg-brand-500/20"
                        )}
                      >
                        <TagIcon
                          className={cn(
                            "w-3.5 h-3.5",
                            study.tagColor === "accent"
                              ? "text-accent-400"
                              : "text-brand-400"
                          )}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {study.tag}
                      </span>
                      <span className="text-slate-700">·</span>
                      <span className="text-xs text-slate-500">{study.location}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display font-bold text-white text-xl lg:text-2xl leading-snug mb-3">
                      {study.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-7">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-7 py-5 border-y border-slate-700">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className={cn(
                            "text-2xl lg:text-3xl font-black font-display tracking-tight leading-none mb-1",
                            "bg-gradient-to-r bg-clip-text text-transparent",
                            study.accentFrom,
                            study.accentTo
                          )}>
                            {metric.value}
                          </div>
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={study.href}
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

        {/* View all link */}
        <RevealWrapper className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200 group"
          >
            <TrendingUp className="w-4 h-4" />
            View all case studies
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}

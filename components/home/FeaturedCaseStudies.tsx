// components/home/FeaturedCaseStudies.tsx
import Link from "next/link";
import { ArrowRight, TrendingUp, Code2, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    tag: "Local SEO Demo",
    tagIcon: MapPin,
    tagColor: "accent",
    client: "Demo Local Business",
    location: "Example Project",
    headline: "Local Search Visibility — Strategy & Execution",
    description:
      "A layout example showing how LocalLeads can present a local SEO engagement: the starting problem, the optimization strategy, and the business outcomes to track once real campaign data is available.",
    metrics: [
      { value: "Visibility", label: "Primary Focus" },
      { value: "Engagement", label: "Trackable Signal" },
      { value: "Lead Flow", label: "Business Outcome" },
    ],
    href: "/case-studies/local-restaurant-seo",
    accentFrom: "from-accent-600",
    accentTo: "to-brand-600",
  },
  {
    tag: "Web Development Demo",
    tagIcon: Code2,
    tagColor: "brand",
    client: "Demo SaaS Project",
    location: "Example Project",
    headline: "High-Performance Landing Page — Strategy & Build",
    description:
      "A layout example showing how LocalLeads can present a web development engagement: conversion structure, performance work, and the measurements that can be added when verified project data is available.",
    metrics: [
      { value: "Conversion", label: "Primary Focus" },
      { value: "Performance", label: "Technical Focus" },
      { value: "Iteration", label: "Optimization Loop" },
    ],
    href: "/case-studies/saas-landing-page",
    accentFrom: "from-brand-600",
    accentTo: "to-accent-500",
  },
] as const;

export function FeaturedCaseStudies() {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden" aria-labelledby="case-studies-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-600/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/[0.04] blur-3xl" />
      </div>
      <div className="container mx-auto max-w-[1200px] relative z-10">
        <SectionHeader
          eyebrow="Case Study Layout"
          heading="Show the Work. Add the Proof Later."
          subheading="These are demo case studies for the current website layout. Verified client metrics, screenshots, and testimonials can replace the placeholders when the real proof is ready."
          light
        />
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => {
            const TagIcon = study.tagIcon;
            return (
              <StaggerItem key={study.href}>
                <article className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors duration-300 group">
                  <div className={cn("h-1.5 bg-gradient-to-r", study.accentFrom, study.accentTo)} />
                  <div className="p-7 lg:p-8">
                    <div className="flex items-center gap-2 mb-5">
                      <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", study.tagColor === "accent" ? "bg-accent-500/20" : "bg-brand-500/20")}>
                        <TagIcon className={cn("w-3.5 h-3.5", study.tagColor === "accent" ? "text-accent-400" : "text-brand-400")} />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{study.tag}</span>
                      <span className="text-slate-700">·</span>
                      <span className="text-xs text-slate-500">{study.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl lg:text-2xl leading-snug mb-3">{study.headline}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-7">{study.description}</p>
                    <div className="grid grid-cols-3 gap-4 mb-7 py-5 border-y border-slate-700">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className={cn("text-lg lg:text-xl font-black font-display tracking-tight leading-tight mb-1", "bg-gradient-to-r bg-clip-text text-transparent", study.accentFrom, study.accentTo)}>{metric.value}</div>
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link href={study.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 group-hover:gap-2.5">
                      View demo case study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <RevealWrapper className="text-center mt-10">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200 group">
            <TrendingUp className="w-4 h-4" />
            View all case study layouts
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}

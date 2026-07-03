// components/home/ProcessSection.tsx
import { Search, Map, Rocket, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

const steps = [
  {
    number: "01",
    icon: Search,
    phase: "Discovery & Audit",
    timeline: "Week 1",
    description:
      "Free growth audit of your website, Google presence, and competitor landscape. We map your opportunities before we quote — no guesswork.",
    deliverable: "Growth Opportunity Report",
  },
  {
    number: "02",
    icon: Map,
    phase: "Strategy & Roadmap",
    timeline: "Week 1–2",
    description:
      "A clear plan: what we'll build, what we'll optimize, what we'll track, and in what order — with realistic timelines you can hold us to.",
    deliverable: "Strategic Roadmap Document",
  },
  {
    number: "03",
    icon: Rocket,
    phase: "Build & Launch",
    timeline: "Week 2–6",
    description:
      "Development, SEO implementation, and GBP optimization executed in parallel so you go live faster and start ranking sooner.",
    deliverable: "Live Website + SEO Setup",
  },
  {
    number: "04",
    icon: BarChart3,
    phase: "Grow & Report",
    timeline: "Ongoing",
    description:
      "Monthly ranking reports, conversion tracking, A/B testing, and continuous optimization. Your results compound over time.",
    deliverable: "Monthly Growth Report",
  },
] as const;

export function ProcessSection() {
  return (
    <section
      className="section-padding bg-gradient-subtle"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="How It Works"
          heading="From Discovery to Domination in 4 Stages"
          subheading="A transparent, proven process so you always know what's happening, what's coming next, and why."
          id="process-heading"
        />

        {/* Single responsive grid */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div
            className="hidden lg:block absolute top-[2.125rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px"
            style={{
              background: "linear-gradient(to right, #2563EB, #0EA5E9, #2563EB)",
            }}
            aria-hidden="true"
          />

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 bg-red font-display">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <StaggerItem key={step.number}>
                  <div className="relative">
                    {/* Mobile: vertical connector */}
                    {!isLast && (
                      <div
                        className="lg:hidden absolute left-[1.375rem] top-[3.5rem] bottom-[-1rem] w-px bg-gradient-to-b from-brand-300 to-transparent"
                        aria-hidden="true"
                      />
                    )}

                    {/* Mobile layout: flex with icon on left */}
                    <div className="lg:hidden flex gap-4">
                      <div className="w-11 h-11 rounded-full bg-brand-600 p-0.5 flex items-center justify-center flex-shrink-0 shadow-sm z-10">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                      </div>
                      <div className="card p-5 flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Step {step.number}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-semibold text-brand-700">
                            {step.timeline}
                            
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                          {step.phase}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <div className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-success" />
                          <span className="text-xs font-medium text-slate-500">
                            {step.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout: center-aligned vertical */}
                    <div className="hidden lg:flex lg:flex-col lg:items-center lg:text-center pt-2 ">
                      <div className="relative z-10 w-11 h-11 rounded-full bg-brand-500 flex items-center justify-center mb-5 shadow-glow-accent flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                      </div>
                      <span className="text-2xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                        Step {step.number}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-semibold text-brand-700 mb-3">
                        {step.timeline}
                      </span>
                      <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-snug">
                        {step.phase}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                        <span className="text-xs font-medium text-slate-600">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* CTA below process */}
        <div className="text-center mt-12">
          <a
            href="/contact#audit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200"
          >
            Start With a Free Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

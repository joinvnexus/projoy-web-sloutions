// components/home/ProcessSection.tsx
import { Search, FileText, Target, Code2, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

const steps = [
  {
    number: "01",
    icon: Search,
    phase: "Discover",
    timeline: "Step 1",
    description:
      "We learn about your business, goals, competitors, and current online presence. This shapes everything that follows.",
    deliverable: "Business & Market Understanding",
  },
  {
    number: "02",
    icon: FileText,
    phase: "Audit",
    timeline: "Step 2",
    description:
      "We audit your website for technical SEO issues, review your local search presence, and identify the highest-impact opportunities.",
    deliverable: "Technical + Local SEO Audit",
  },
  {
    number: "03",
    icon: Target,
    phase: "Strategize",
    timeline: "Step 3",
    description:
      "You receive a clear, prioritized plan — what we'll fix, what we'll build, what it will cost, and what results to expect.",
    deliverable: "Prioritized Growth Plan",
  },
  {
    number: "04",
    icon: Code2,
    phase: "Implement",
    timeline: "Step 4",
    description:
      "We execute the approved plan — building or improving your website, fixing technical SEO, and optimizing your local presence.",
    deliverable: "Website + SEO Implementation",
  },
  {
    number: "05",
    icon: TrendingUp,
    phase: "Grow",
    timeline: "Step 5",
    description:
      "We monitor rankings, traffic, and leads. Monthly reporting and continuous optimization keep your results compounding.",
    deliverable: "Ongoing Growth & Reporting",
  },
] as const;

export function ProcessSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Our Process"
          heading="Discover. Audit. Strategize. Implement. Grow."
          subheading="A clear, repeatable process that connects your website, technical foundation, and local search into one growth system."
          id="process-heading"
        />

        <div className="relative">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.number}>
                  <div className="card p-6 flex flex-col items-center text-center h-full">
                    <div className="relative z-10 w-11 h-11 rounded-full bg-brand-600 flex items-center justify-center mb-4 shadow-sm flex-shrink-0">
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
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                      <span className="text-xs font-medium text-slate-600">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

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

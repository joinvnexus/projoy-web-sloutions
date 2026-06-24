// components/services/ProcessTimeline.tsx
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

export interface ProcessPhase {
  phase: string;       // e.g. "Phase 1"
  title: string;
  timeline: string;    // e.g. "Week 1"
  description: string;
  deliverables?: string[];
  icon?: React.ReactNode;
}

interface ProcessTimelineProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: string;
  phases: ProcessPhase[];
  accentColor?: "brand" | "accent";
  background?: "white" | "slate";
  ctaLabel?: string;
  ctaHref?: string;
}

export function ProcessTimeline({
  eyebrow = "Our Process",
  heading,
  subheading,
  phases,
  accentColor = "brand",
  background = "slate",
  ctaLabel = "Start Your Project",
  ctaHref = "/contact#audit",
}: ProcessTimelineProps) {
  const accentGradient =
    accentColor === "brand"
      ? "from-brand-600 to-accent-500"
      : "from-accent-500 to-brand-600";

  const accentText =
    accentColor === "brand" ? "text-brand-600" : "text-accent-600";

  const accentBg =
    accentColor === "brand" ? "bg-brand-600" : "bg-accent-600";

  return (
    <section
      className={cn(
        "section-padding",
        background === "slate" ? "bg-slate-50" : "bg-white"
      )}
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          subheading={subheading}
          id="process-heading"
          align="left"
          maxWidth="xl"
        />

        <div className="relative">
          {/* Vertical spine — desktop */}
          <div
            className="hidden lg:block absolute left-[1.875rem] top-4 bottom-4 w-px"
            style={{
              background: `linear-gradient(to bottom, transparent, #2563EB 10%, #0EA5E9 90%, transparent)`,
            }}
            aria-hidden="true"
          />

          <StaggerContainer className="space-y-6 lg:space-y-0">
            {phases.map((phase, idx) => {
              const isLast = idx === phases.length - 1;
              return (
                <StaggerItem key={phase.phase}>
                  <div
                    className={cn(
                      "lg:flex lg:gap-8 lg:items-start",
                      !isLast && "lg:pb-8"
                    )}
                  >
                    {/* Left: Step indicator */}
                    <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                      <div
                        className={cn(
                          "w-[3.75rem] h-[3.75rem] rounded-full flex items-center justify-center z-10 relative",
                          `bg-gradient-to-br ${accentGradient}`,
                          "shadow-glow"
                        )}
                      >
                        {phase.icon ? (
                          <span className="w-6 h-6 text-white">{phase.icon}</span>
                        ) : (
                          <span className="text-white font-display font-black text-sm">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Content card */}
                    <div className="flex-1">
                      {/* Mobile step indicator */}
                      <div className="flex items-center gap-3 mb-3 lg:hidden">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                            `bg-gradient-to-br ${accentGradient}`
                          )}
                        >
                          <span className="text-white font-bold text-xs">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <span className={cn("text-xs font-bold uppercase tracking-widest", accentText)}>
                          {phase.phase}
                        </span>
                      </div>

                      <div className="card p-7 hover:shadow-card-hover transition-shadow duration-300">
                        {/* Header row */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                          <div>
                            {/* Desktop phase label */}
                            <span
                              className={cn(
                                "hidden lg:inline-block text-xs font-bold uppercase tracking-widest mb-1.5 block",
                                accentText
                              )}
                            >
                              {phase.phase}
                            </span>
                            <h3 className="font-display font-bold text-slate-900 text-xl leading-snug">
                              {phase.title}
                            </h3>
                          </div>
                          {/* Timeline badge */}
                          <span
                            className={cn(
                              "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border flex-shrink-0",
                              accentColor === "brand"
                                ? "bg-brand-50 text-brand-700 border-brand-100"
                                : "bg-accent-50 text-accent-700 border-accent-100"
                            )}
                          >
                            {phase.timeline}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-5">
                          {phase.description}
                        </p>

                        {/* Deliverables */}
                        {phase.deliverables && phase.deliverables.length > 0 && (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2.5">
                              Deliverables
                            </p>
                            <ul className="flex flex-wrap gap-2" role="list">
                              {phase.deliverables.map((d) => (
                                <li
                                  key={d}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                                >
                                  <span
                                    className={cn(
                                      "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                      accentColor === "brand" ? "bg-brand-500" : "bg-accent-500"
                                    )}
                                  />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={ctaHref}
            className={cn(
              "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm",
              "shadow-sm hover:shadow-lg hover:-translate-y-px transition-all duration-200",
              `bg-gradient-to-r ${accentGradient}`
            )}
          >
            {ctaLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

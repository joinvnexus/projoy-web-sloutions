// components/case-studies/CaseStudyFilterBar.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Code2, Cpu } from "lucide-react";
import type { CaseStudy } from "@/lib/data/case-studies";
import { Tag } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { cn } from "@/lib/utils";

const filterOptions = [
  { label: "All Results", value: "all" },
  { label: "Local SEO", value: "local-seo" },
  { label: "Web Development", value: "web-development" },
  { label: "AI Solutions", value: "ai-solutions" },
] as const;

const serviceIcon: Record<string, React.ElementType> = {
  "local-seo": MapPin,
  "web-development": Code2,
  "ai-solutions": Cpu,
};

const serviceGradient: Record<string, string> = {
  "local-seo": "from-accent-500 to-brand-600",
  "web-development": "from-brand-600 to-accent-500",
  "ai-solutions": "from-brand-700 to-accent-500",
};

const tagVariantMap: Record<string, "brand" | "accent" | "slate"> = {
  "local-seo": "accent",
  "web-development": "brand",
  "ai-solutions": "brand",
};

interface CaseStudyFilterBarProps {
  caseStudies: CaseStudy[];
  initialFilter?: string;
}

/**
 * Client island that filters the "More Results" case study grid by service type.
 * Reads an optional initial filter from a server-passed query param so links like
 * /case-studies?filter=local-seo land pre-filtered.
 */
export function CaseStudyFilterBar({
  caseStudies,
  initialFilter = "all",
}: CaseStudyFilterBarProps) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return caseStudies;
    return caseStudies.filter((cs) => cs.service === activeFilter);
  }, [caseStudies, activeFilter]);

  return (
    <div>
      {/* Filter pills */}
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="group"
        aria-label="Filter case studies by service"
      >
        {filterOptions.map((opt) => {
          const isActive = activeFilter === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setActiveFilter(opt.value)}
              aria-pressed={isActive}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                isActive
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-200 hover:text-brand-700"
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-500 text-sm py-10 text-center">
          No case studies in this category yet — check back soon.
        </p>
      ) : (
        <StaggerContainer key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((cs) => {
            const gradient = serviceGradient[cs.service];
            return (
              <StaggerItem key={cs.slug}>
                <article className="card card-hover p-6 flex flex-col h-full group">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <Tag variant={tagVariantMap[cs.service]}>{cs.serviceLabel}</Tag>
                    <span className="text-xs text-slate-400">{cs.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg leading-snug mb-3">
                    {cs.headline}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {cs.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="text-center">
                        <div
                          className={cn(
                            "text-lg font-black font-display tracking-tight bg-gradient-to-r bg-clip-text text-transparent",
                            gradient
                          )}
                        >
                          {m.value}
                        </div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:gap-2.5 transition-all duration-200"
                  >
                    Read case study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      )}
    </div>
  );
}

// components/shared/BeforeAfterPanel.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterPanelProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  className?: string;
}

/**
 * Hover-reveal (desktop) / tap-to-toggle (mobile) before/after comparison panel.
 * Used in case study layouts to visually contrast a metric or state pre/post engagement,
 * per the blueprint's Case Study Framework screenshot-placement spec.
 */
export function BeforeAfterPanel({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeContent,
  afterContent,
  className,
}: BeforeAfterPanelProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-slate-200 overflow-hidden group cursor-pointer select-none",
        className
      )}
      onClick={() => setShowAfter((v) => !v)}
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      role="button"
      tabIndex={0}
      aria-pressed={showAfter}
      aria-label={`Toggle between ${beforeLabel} and ${afterLabel} view`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setShowAfter((v) => !v);
        }
      }}
    >
      {/* Base layer: Before */}
      <div className="p-8 min-h-[220px] flex items-center justify-center bg-slate-50">
        {beforeContent}
      </div>

      {/* Overlay layer: After — revealed on hover/tap */}
      <div
        className={cn(
          "absolute inset-0 p-8 flex items-center justify-center transition-opacity duration-300",
          "bg-gradient-to-br from-brand-50 to-accent-50",
          showAfter ? "opacity-100" : "opacity-0"
        )}
        aria-hidden={!showAfter}
      >
        {afterContent}
      </div>

      {/* Label badge */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className={cn(
            "px-3 py-1 rounded-full text-xs font-bold transition-colors duration-300",
            showAfter
              ? "bg-success text-white"
              : "bg-slate-700 text-white"
          )}
        >
          {showAfter ? afterLabel : beforeLabel}
        </span>
      </div>

      {/* Hint badge — desktop only */}
      <div className="absolute bottom-3 right-3 z-10 hidden sm:block">
        <span className="px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-semibold text-slate-500 backdrop-blur-sm">
          Hover to compare
        </span>
      </div>

      {/* Mobile tap hint */}
      <div className="absolute bottom-3 right-3 z-10 sm:hidden">
        <span className="px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-semibold text-slate-500 backdrop-blur-sm">
          Tap to compare
        </span>
      </div>
    </div>
  );
}

// components/services/ServiceHero.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
interface ServiceHeroStat {
  value: string;
  label: string;
}

interface ServiceHeroProps {
  eyebrow: string;
  heading: React.ReactNode;
  subheading: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  trustPoints?: readonly string[];
  stats?: readonly ServiceHeroStat[];
  accentColor?: "brand" | "accent";
  badge?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  imagePriority?: boolean;
}

export function ServiceHero({
  eyebrow,
  heading,
  subheading,
  primaryCTA = { label: "Get Free Audit", href: "/contact#audit" },
  secondaryCTA,
  trustPoints,
  stats,
  accentColor = "brand",
  badge,
  backgroundImage,
  backgroundImageAlt,
  imagePriority = false,
}: ServiceHeroProps) {
  const gradientClasses = {
    brand: "from-brand-600 to-accent-500",
    accent: "from-accent-500 to-brand-600",
  }[accentColor];

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-20 px-8",
        "bg-white"
      )}
      aria-label="Service overview"
    >
      {/* Background Decoration (KEEP SAME) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={cn(
            "absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06]",
            accentColor === "brand" ? "bg-brand-500" : "bg-accent-500"
          )}
        />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-[0.04] bg-brand-400" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1b74e9 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="eyebrow mb-0">{eyebrow}</span>

              {badge && (
                <span
                  className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white",
                    `bg-gradient-to-r ${gradientClasses}`
                  )}
                >
                  {badge}
                </span>
              )}
            </div>

            <h1
              className="font-display font-extrabold text-slate-900 leading-[1.07] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              {heading}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href={primaryCTA.href}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl",
                  "text-white font-bold text-base",
                  "shadow-sm hover:shadow-lg hover:-translate-y-px",
                  "transition-all duration-200",
                  `bg-gradient-to-r ${gradientClasses}`
                )}
              >
                {primaryCTA.label}
                <ArrowRight className="w-4 h-4" />
              </Link>

              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-brand-200 hover:text-brand-700 hover:bg-brand-50 font-semibold text-sm transition-all duration-200"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>

            {trustPoints && trustPoints.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT IMAGE (VISIBLE NOW) */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[560px]">

              <div
                className={cn(
                  "absolute -inset-4 rounded-[32px] blur-3xl opacity-20",
                  accentColor === "brand"
                    ? "bg-brand-500"
                    : "bg-accent-500"
                )}
              />

                  <div className="relative bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden">
                {backgroundImage ? (
                  <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[420px]">
                    <Image
                      src={backgroundImage}
                      alt={backgroundImageAlt ?? "Service preview image"}
                      fill
                      className="object-contain"
                      priority={imagePriority}
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                ) : (
                  <div className="min-h-[320px] flex items-center justify-center bg-slate-100 text-slate-500 text-sm font-semibold tracking-wide">
                    Service image placeholder
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* STATS */}
        {stats && stats.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className={cn(
                      "text-3xl lg:text-4xl font-black font-display tracking-tight leading-none mb-1",
                      "bg-gradient-to-r bg-clip-text text-transparent",
                      gradientClasses
                    )}
                  >
                    {stat.value}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
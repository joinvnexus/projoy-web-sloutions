// components/services/FinalServiceCTA.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface FinalServiceCTAProps {
  heading: string;
  subheading: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  trustPoints?: readonly string[];
  accentColor?: "brand" | "accent";
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

export function FinalServiceCTA({
  heading,
  subheading,
  primaryCTA = {
    label: "Get Your Free Growth Audit",
    href: "/contact#audit",
  },
  secondaryCTA = {
    label: "Book a 30-Min Strategy Call",
    href: "/contact",
  },
  trustPoints = [
    "No credit card required",
    "Free, no-obligation audit",
    "Reply within 24 hours",
  ],
  accentColor = "brand",
  testimonialQuote,
  testimonialAuthor,
}: FinalServiceCTAProps) {
  const gradient =
    accentColor === "brand"
      ? "from-brand-600 to-accent-500"
      : "from-accent-500 to-brand-600";

  return (
    <section
      className="relative overflow-hidden bg-slate-900 section-padding"
      aria-labelledby="service-cta-heading"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              accentColor === "brand"
                ? "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(37,99,235,0.2) 0%, transparent 70%)"
                : "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(14,165,233,0.2) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-slate-600" aria-hidden="true" />
            <span
              className={cn(
                "text-xs font-bold uppercase tracking-widest bg-gradient-to-r bg-clip-text text-transparent",
                gradient
              )}
            >
              Ready to get started?
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-slate-600" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="service-cta-heading"
            className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            {heading}
          </h2>

          {/* Subheading */}
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href={primaryCTA.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl",
                "text-white font-bold text-base",
                "shadow-md hover:shadow-xl hover:-translate-y-0.5",
                "transition-all duration-200",
                `bg-gradient-to-r ${gradient}`
              )}
            >
              {primaryCTA.label}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors duration-200"
            >
              <Calendar className="w-4 h-4" />
              {secondaryCTA.label}
            </Link>
          </div>

          {/* Trust points */}
          {trustPoints.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                  <span className="text-sm text-slate-500">{point}</span>
                </div>
              ))}
            </div>
          )}

          {/* Optional testimonial */}
          {testimonialQuote && (
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 p-5">
              <div className="flex justify-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed mb-3">
                &ldquo;{testimonialQuote}&rdquo;
              </p>
              {testimonialAuthor && (
                <p className="text-xs font-semibold text-slate-500">
                  {testimonialAuthor}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

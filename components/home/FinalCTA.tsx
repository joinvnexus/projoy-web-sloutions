// components/home/FinalCTA.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { RevealWrapper } from "@/components/shared/RevealWrapper";

const microCopy = [
  "No credit card required",
  "No commitment",
  "Reply within 24 hours",
] as const;

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-slate-900 section-padding"
      aria-labelledby="final-cta-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <RevealWrapper>
          <div className="max-w-2xl mx-auto text-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-brand-400 to-transparent" />
              Free Growth Audit
              <span className="w-8 h-px bg-gradient-to-l from-brand-400 to-transparent" />
            </span>

            {/* Heading */}
            <h2
              id="final-cta-heading"
              className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Ready to Get More Traffic, More Leads,{" "}
              <span
                className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent"
              >
                More Revenue?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Start with a free, no-obligation Growth Audit. We&apos;ll analyze
              your website and Google presence and show you exactly what&apos;s
              holding back your growth.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link
                href="/contact#audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-base shadow-glow-accent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 animate-pulse-ring"
              >
                Book Your Free Growth Audit
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold text-base transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Us Directly
              </a>
            </div>

            {/* Trust micro-copy */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {microCopy.map((point) => (
                <div key={point} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                  <span className="text-sm text-slate-500">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Testimonial snippet — last-moment social proof */}
        <RevealWrapper delay={0.2} className="mt-12">
          <div className="max-w-lg mx-auto">
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 p-5 text-center">
              <div className="flex justify-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed mb-3">
                &ldquo;The audit alone was worth the call. They found 3 quick wins we hadn&apos;t considered. We signed within a week.&rdquo;
              </p>
              <p className="text-xs font-semibold text-slate-500">
                Tanvir Islam · Marketing Manager, EduPlatform BD
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

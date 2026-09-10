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
              Free SEO Audit
              <span className="w-8 h-px bg-gradient-to-l from-brand-400 to-transparent" />
            </span>

            {/* Heading */}
            <h2
              id="final-cta-heading"
              className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Ready to turn your online presence{" "}
              <span
                className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent"
              >
                into a growth engine?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Start with a free, no-obligation SEO Audit. We&apos;ll analyze
              your website and Google presence and show you exactly what&apos;s
              holding back your growth.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link
                href="/contact#audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-base shadow-glow-accent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Your Free SEO Audit
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold text-base transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Talk to LocalLeads
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
      </div>
    </section>
  );
}

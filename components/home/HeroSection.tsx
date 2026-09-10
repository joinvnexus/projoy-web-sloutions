// components/home/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { GradientText } from "@/components/shared/Typography";

const trustPoints = [
  "Local SEO & Google Maps visibility",
  "Technical SEO foundation",
  "Websites built to convert",
] as const;

/* ─── Animated gradient orbs (CSS-only, no canvas) ──────── */
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary orb */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/[0.06] blur-3xl" />
      {/* Secondary orb */}
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-accent-500/[0.05] blur-3xl" />
      {/* Bottom orb */}
      <div className="absolute -bottom-20 right-1/3 w-[350px] h-[350px] rounded-full bg-brand-400/[0.04] blur-3xl" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #0a6ee7 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

/* ─── Hero visual: split screen preview ─────────────────── */
function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-10 blur-2xl scale-105" />

      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-card-hover overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1 text-[10px] text-slate-400 border border-slate-200 text-center">
               localleads.com
            </div>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <div className="w-20 h-3 bg-brand-600 rounded-full" />
            <div className="flex gap-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-2 bg-slate-200 rounded-full" />
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-xl p-4 space-y-2">
            <div className="w-3/4 h-4 bg-brand-200 rounded-full" />
            <div className="w-1/2 h-3 bg-brand-100 rounded-full" />
            <div className="mt-3 w-24 h-7 bg-brand-600 rounded-lg" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Ranked", "Fast", "Leads"].map(stat => (
              <div key={stat} className="bg-slate-50 rounded-lg p-2 text-center">
                <div className="text-[9px] font-bold text-brand-600">{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] px-8 flex items-center overflow-hidden bg-white "
      aria-label="Hero"
    >
      <BackgroundOrbs />

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">

          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="eyebrow">LOCAL SEO · TECHNICAL SEO · WEB DEVELOPMENT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              Get Found. <br />
              Get Ranked. <br />
              <GradientText>Get More Leads.</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              Your website and Google presence should work together — not against each other. LocalLeads helps businesses improve local visibility, fix technical SEO issues, and build high-performing websites designed to turn visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <ButtonLink
                href="/contact#audit"
                size="xl"
                pulse
                className="font-bold"
              >
                Get a Free SEO Audit
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>

              <ButtonLink
                href="/services"
                variant="secondary"
                size="xl"
              >
                Explore Our Services
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm text-slate-600">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="order-2 lg:order-2"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

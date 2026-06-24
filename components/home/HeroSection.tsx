// components/home/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { GradientText } from "@/components/shared/Typography";

const trustPoints = [
  "50+ projects delivered",
  "Avg. 3.2× lead increase",
  "Local SEO results in 60–90 days",
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
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
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
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-10 blur-2xl scale-105" />

      {/* Main card */}
      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-card-hover overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1 text-[10px] text-slate-400 border border-slate-200 text-center">
              projoywebsolutions.com
            </div>
          </div>
        </div>

        {/* Mock site content */}
        <div className="p-5 space-y-3">
          {/* Mock nav */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-20 h-3 bg-brand-600 rounded-full" />
            <div className="flex gap-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-2 bg-slate-200 rounded-full" />
              ))}
            </div>
          </div>
          {/* Mock hero */}
          <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-xl p-4 space-y-2">
            <div className="w-3/4 h-4 bg-brand-200 rounded-full" />
            <div className="w-1/2 h-3 bg-brand-100 rounded-full" />
            <div className="mt-3 w-24 h-7 bg-brand-600 rounded-lg" />
          </div>
          {/* Mock stats row */}
          <div className="grid grid-cols-3 gap-2">
            {["#1 Maps", "95 Speed", "8.4% CVR"].map(stat => (
              <div key={stat} className="bg-slate-50 rounded-lg p-2 text-center">
                <div className="text-[9px] font-bold text-brand-600">{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Google Maps badge — floating */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -right-6 top-1/3 bg-white rounded-2xl border border-slate-200 shadow-card-hover p-3 w-44"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-slate-800">#1 on Google Maps</span>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({length: 5}).map((_, i) => (
            <svg key={i} className="w-2.5 h-2.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[9px] text-slate-500 ml-1">30+ reviews</span>
        </div>
      </motion.div>

      {/* PageSpeed badge — floating */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -left-6 bottom-8 bg-white rounded-2xl border border-slate-200 shadow-card-hover p-3"
      >
        <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
          PageSpeed
        </div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-xl font-black text-emerald-500 font-display">98</span>
          <span className="text-[10px] font-semibold text-slate-400">/100</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      <BackgroundOrbs />

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">

          {/* ── Left: Copy ── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="eyebrow">Web Development & Local SEO Agency</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              We Build Websites That{" "}
              <GradientText>Rank on Google</GradientText> &amp; Grow Your Business
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              Projoy Web Solutions combines expert Next.js development with local
              SEO mastery — so your website doesn&apos;t just look great, it
              generates real leads from day one.
            </motion.p>

            {/* CTAs */}
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
                Get Your Free Growth Audit
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>

              <ButtonLink
                href="/case-studies"
                variant="secondary"
                size="xl"
              >
                See Our Work
              </ButtonLink>
            </motion.div>

            {/* Trust points */}
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

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="order-1 lg:order-2"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-slate-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}

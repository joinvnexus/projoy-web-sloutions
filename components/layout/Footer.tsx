// components/layout/Footer.tsx
import Link from "next/link";
import {
  Zap,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  ArrowUpRight,
  Shield,
} from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";

const currentYear = new Date().getFullYear();

/* ─── Social icon map ────────────────────────────────────── */
const socialLinks = [
  {
    label: "LinkedIn",
    href: SITE_CONFIG.social.linkedin,
    Icon: Linkedin,
  },
  {
    label: "Twitter / X",
    href: SITE_CONFIG.social.twitter,
    Icon: Twitter,
  },
  {
    label: "Facebook",
    href: SITE_CONFIG.social.facebook,
    Icon: Facebook,
  },
  {
    label: "GitHub",
    href: SITE_CONFIG.social.github,
    Icon: Github,
  },
];

/* ─── Component ──────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      className="bg-slate-900 text-slate-400"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ── Pre-footer CTA band ── */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto max-w-[1200px] py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-2">
                Free Growth Audit
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight font-display mb-3">
                Ready to rank higher and convert more?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Get a free analysis of your website and Google presence. We'll
                show you exactly what's holding back your growth — no
                commitment, no pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact#audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors duration-200"
              >
                Get Free Audit
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium text-sm transition-colors duration-200"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer content ── */}
      <div className="container mx-auto max-w-[1200px] py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label={`${SITE_CONFIG.name} — Home`}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                {/* <Zap className="w-4 h-4 text-white" strokeWidth={2.5} /> */}
                <img className="w-8 h-8 strokeWidth={2.5}" src="Logo-projoywebsloutions.png" alt="" />
              </div>
              <span className="font-display font-bold text-white text-[0.9375rem]">
                Projoy{" "}
                <span className="text-brand-400">Web</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              {SITE_CONFIG.tagline}. We build websites that rank on Google and
              grow local businesses.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <Shield className="w-3.5 h-3.5 text-success" />
              <span className="text-xs text-slate-400">
                100% White-Hat Practices
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-150 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-600 group-hover:text-brand-400 transition-colors" />
                  <span className="break-all">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-150 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-600 group-hover:text-brand-400 transition-colors" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-600" />
                  <span>{SITE_CONFIG.location}</span>
                </div>
              </li>
            </ul>

            {/* Response time badge */}
            <div className="mt-6 p-3 rounded-xl bg-slate-800 border border-slate-700">
              <p className="text-xs font-semibold text-slate-300 mb-0.5">
                ⚡ Fast Response
              </p>
              <p className="text-xs text-slate-500">
                We reply to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto max-w-[1200px] py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600 text-center sm:text-left">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <span className="text-xs text-slate-700">
                Built with{" "}
                <span className="text-slate-600">Next.js 15</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

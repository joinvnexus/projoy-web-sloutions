// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Heart,
  Shield,
  TrendingUp,
  CheckCircle,
  MapPin,
  Mail,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader, GradientText, Eyebrow } from "@/components/shared/Typography";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import { StatCard } from "@/components/shared/Card";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { SITE_CONFIG, TRUST_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Projoy Web Solutions — Our Story & Mission",
  description:
    "Learn about Projoy Web Solutions — the agency that bridges expert Next.js development with local SEO mastery to help small businesses rank, convert, and grow.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Projoy Web Solutions",
    description: "Our story, mission, and why we do what we do.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

const values = [
  {
    icon: TrendingUp,
    title: "Results First",
    description:
      "Every decision we make is tied to a measurable outcome. We don't ship features or strategies that can't be tied back to traffic, leads, or revenue.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "No vague promises, no hidden work. You always know what we're doing, why we're doing it, and what it's producing — with data to back it up.",
  },
  {
    icon: Heart,
    title: "Genuine Partnership",
    description:
      "We treat every client's business as if it were our own. Your wins are our wins. We celebrate your results and take your challenges personally.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description:
      "We refuse to cut corners on code quality, performance, or SEO implementation. 'Good enough' is never the standard — 95+ PageSpeed scores are our floor, not our ceiling.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Started as a freelancer",
    description:
      "Built the first few websites as a solo developer — Next.js sites for local businesses in Sylhet. Realized that ranking on Google was just as important as looking good.",
  },
  {
    year: "2022",
    title: "Added Local SEO to the offering",
    description:
      "Clients kept asking 'can you help us rank on Google Maps too?' Started studying local SEO deeply and got our first GBP results — a restaurant from page 5 to the 3-pack in 90 days.",
  },
  {
    year: "2023",
    title: "Formed Projoy Web Solutions",
    description:
      "Officially launched as a named agency with the clear positioning: web development + local SEO under one roof. The combined offering started winning larger clients.",
  },
  {
    year: "2024",
    title: "Expanded to AI integrations",
    description:
      "With the explosion of AI, clients started asking for chatbots, automation, and AI-powered features. Added AI solutions as a third pillar. 50+ projects delivered total.",
  },
];

const differentiators = [
  "We're the only local agency offering Next.js development AND local SEO under one roof",
  "We guarantee 95+ PageSpeed scores — not as a target, as a contract requirement",
  "Every engagement includes full Google Analytics 4 + Search Console setup",
  "We use 100% white-hat methods — no shortcuts that risk your rankings",
  "You own everything: code, GBP, content, data. No lock-in ever",
  "We communicate in plain English, not agency jargon",
];

export default function AboutPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      {/* ── Hero ── */}
      <section className="relative bg-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-500/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="max-w-3xl">
            <Eyebrow>Our Story</Eyebrow>
            <h1
              className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              We Started as a Freelancer.
              <br />
              <GradientText>We Grew Into an Agency</GradientText> With a Clear Mission.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Projoy Web Solutions exists because most small businesses deserve a better digital
              partner — one who combines technical excellence with real marketing results, and
              treats every project as if it were their own business on the line.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-[1200px]">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard value={stat.value} label={stat.label} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <RevealWrapper>
              <Eyebrow>Who We Are</Eyebrow>
              <h2
                id="story-heading"
                className="font-display font-bold text-slate-900 text-3xl lg:text-4xl leading-tight mb-5"
              >
                Built on the Belief That Small Businesses Deserve Big Results
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Projoy Web Solutions was founded with a simple frustration: small businesses were
                  being let down by one of two options — expensive agencies who treated them as small
                  accounts, or cheap freelancers who delivered websites with no strategy behind them.
                </p>
                <p>
                  We believed there was a better way. A boutique agency that could deliver
                  agency-quality work — technically excellent websites, real SEO results, and AI
                  integrations that actually work — but with the care and communication of a true
                  business partner.
                </p>
                <p>
                  What makes us genuinely different is the combination: most web agencies can&apos;t
                  rank you on Google, and most SEO agencies can&apos;t build sophisticated web
                  products. We do both — and the overlap is where the real magic happens. A
                  fast, SEO-ready site and a dominant Google Maps presence don&apos;t just add —
                  they multiply.
                </p>
              </div>
            </RevealWrapper>

            {/* Timeline */}
            <RevealWrapper delay={0.15}>
              <Eyebrow>Our Journey</Eyebrow>
              <h2 className="font-display font-bold text-slate-900 text-2xl mb-7 leading-tight">
                How We Got Here
              </h2>
              <div className="relative space-y-0">
                <div className="absolute left-[0.6875rem] top-2 bottom-2 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent" aria-hidden="true" />
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative flex gap-5 pb-7 last:pb-0">
                    <div className="w-[1.375rem] h-[1.375rem] rounded-full bg-brand-600 border-4 border-white shadow-sm flex-shrink-0 z-10 mt-1" />
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-brand-50 text-brand-700 text-xs font-bold mb-1.5">
                        {item.year}
                      </span>
                      <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="values-heading">
        <div className="container mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Our Values"
            heading="What We Stand For"
            subheading="These aren't corporate talking points — they're the principles that govern every client decision we make."
            id="values-heading"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="card p-7 flex gap-4 h-full">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{value.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why We're Different ── */}
      <section className="section-padding bg-white" aria-labelledby="different-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealWrapper>
              <Eyebrow>Why Choose Projoy</Eyebrow>
              <h2
                id="different-heading"
                className="font-display font-bold text-slate-900 text-3xl lg:text-4xl leading-tight mb-5"
              >
                What Makes Us Genuinely Different
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                These aren&apos;t marketing claims. They&apos;re the specific, concrete ways we operate
                differently from every other agency you&apos;ve probably spoken to.
              </p>
              <ul className="space-y-3" role="list">
                {differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>

            {/* Contact card */}
            <RevealWrapper delay={0.15}>
              <div className="bg-slate-900 rounded-3xl p-8 lg:p-10">
                <Eyebrow light>Work With Us</Eyebrow>
                <h3 className="font-display font-bold text-white text-2xl mb-4 leading-tight">
                  Ready to work with an agency that actually delivers?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                  We take on a limited number of new clients each month to maintain quality.
                  Book a free strategy call and let&apos;s see if we&apos;re the right fit.
                </p>

                <div className="space-y-3 mb-8">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-600" />
                    {SITE_CONFIG.email}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-600" />
                    {SITE_CONFIG.location} · Serving clients worldwide
                  </div>
                </div>

                <Link
                  href="/contact#audit"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition-colors duration-200"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}

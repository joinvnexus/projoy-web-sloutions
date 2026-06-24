// app/thank-you/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, BookOpen, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You — We've Received Your Request | Projoy Web Solutions",
  description:
    "Thank you for contacting Projoy Web Solutions. We'll review your details and respond within 24 hours.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    step: "01",
    title: "We review your submission",
    description:
      "Within 24 hours, our team will review your business details and audit request. If anything's unclear, we'll drop you a quick message.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "We prepare your audit",
    description:
      "We analyse your website, Google Business Profile, current rankings, and top competitors. This takes 1–2 business days.",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "We send your results",
    description:
      "You receive a personalised audit with specific findings and recommendations. We then schedule a call to walk you through it.",
    icon: Calendar,
  },
];

const recommendedLinks = [
  { label: "View Case Studies", href: "/case-studies", description: "See results we've achieved for real businesses" },
  { label: "Explore Services", href: "/services", description: "Learn more about what we offer" },
  { label: "Read the Blog", href: "/blog", description: "Free guides on local SEO and web development" },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] bg-gradient-subtle">
      {/* ── Hero confirmation ── */}
      <section className="pt-16 pb-12 text-center">
        <div className="container mx-auto max-w-[700px] px-6">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mb-4 leading-tight">
            You&apos;re in! We&apos;ve got your request.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-3">
            Thank you for reaching out to{" "}
            <span className="font-semibold text-brand-600">{SITE_CONFIG.name}</span>.
            We&apos;ll review your details and respond within{" "}
            <strong>24 hours</strong>.
          </p>
          <p className="text-slate-500 text-sm">
            Check your inbox (and spam folder, just in case) for a confirmation email.
          </p>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="pb-16">
        <div className="container mx-auto max-w-[900px] px-6">
          <h2 className="text-center font-display font-bold text-slate-900 text-2xl mb-10">
            What Happens Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="card p-6 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-600" strokeWidth={1.75} />
                  </div>
                  <span className="text-2xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Step {step.step}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── While you wait ── */}
      <section className="pb-20">
        <div className="container mx-auto max-w-[700px] px-6">
          <h2 className="text-center font-display font-bold text-slate-900 text-xl mb-7">
            While You Wait
          </h2>
          <div className="space-y-3">
            {recommendedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-5 card card-hover group"
              >
                <div>
                  <p className="font-semibold text-slate-900 text-sm group-hover:text-brand-700 transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{link.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Direct Calendly */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 mb-3">
              Can&apos;t wait? Book a call right now:
            </p>
            <a
              href="https://calendly.com/projoywebsolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-200 text-brand-700 hover:bg-brand-50 font-semibold text-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book a Free 30-Min Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

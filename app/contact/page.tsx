// app/contact/page.tsx
import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Phone,
  Shield,
  CheckCircle,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AuditForm } from "@/components/forms/AuditForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { Eyebrow, GradientText } from "@/components/shared/Typography";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { createBreadcrumbSchema } from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Projoy Web Solutions — Free Growth Audit",
  description:
    "Get a free growth audit for your website and Google Business Profile. Book a strategy call or send us a message. Reply within 24 hours guaranteed.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Projoy Web Solutions",
    description: "Free growth audit. Book a call or send a message. Reply within 24 hours.",
    url: `${SITE_CONFIG.url}/contact`,
  },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email Us",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    detail: "We reply within 24 hours",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/880XXXXXXXXXX",
    detail: "Fastest response channel",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: SITE_CONFIG.location,
    href: null,
    detail: "Serving clients worldwide",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri, 9am – 6pm",
    href: null,
    detail: "BST (UTC+6)",
  },
];

const auditIncludes = [
  "Current Google Maps ranking for your top 5 keywords",
  "GBP completeness score and quick-win opportunities",
  "Website PageSpeed score and Core Web Vitals assessment",
  "Top 3 competitor analysis and gap identification",
  "Specific recommendations with estimated impact",
  "A clear next-step action plan — no fluff",
];

export default function ContactPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      {/* ── Page Header ── */}
      <section className="relative bg-white pt-8 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1
            className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let&apos;s Grow Your Business <GradientText>Together</GradientText>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Start with a free audit, send a general message, or book a call directly.
            We respond to every inquiry within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-padding bg-slate-50" id="audit">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* ── Left: Audit Form (primary) ── */}
            <div className="lg:col-span-3">
              <RevealWrapper>
                <div className="card p-8 lg:p-10">
                  <div className="mb-7">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold text-brand-700 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                      Free — No Commitment Required
                    </span>
                    <h2 className="font-display font-bold text-slate-900 text-2xl mb-2 leading-tight">
                      Request Your Free Growth Audit
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We&apos;ll analyze your website and Google presence and deliver a
                      personalised audit with specific, actionable recommendations.
                    </p>
                  </div>
                  <AuditForm variant="default" />
                </div>
              </RevealWrapper>
            </div>

            {/* ── Right: Info sidebar ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* What the audit includes */}
              <RevealWrapper delay={0.1}>
                <div className="card p-6">
                  <h3 className="font-display font-semibold text-slate-900 text-base mb-4">
                    Your Free Audit Includes:
                  </h3>
                  <ul className="space-y-2.5" role="list">
                    {auditIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>

              {/* Contact methods */}
              <RevealWrapper delay={0.15}>
                <div className="card p-6 space-y-4">
                  <h3 className="font-display font-semibold text-slate-900 text-base mb-1">
                    Other Ways to Reach Us
                  </h3>
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-brand-600" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                            {method.label}
                          </p>
                          <p className="text-sm font-medium text-slate-900">{method.value}</p>
                          <p className="text-xs text-slate-500">{method.detail}</p>
                        </div>
                      </div>
                    );
                    return method.href ? (
                      <a
                        key={method.label}
                        href={method.href}
                        className="block hover:bg-slate-50 rounded-xl -mx-2 px-2 py-1 transition-colors"
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={method.label}>{content}</div>
                    );
                  })}
                </div>
              </RevealWrapper>

              {/* Trust badge */}
              <RevealWrapper delay={0.2}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <Shield className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <p className="text-xs text-slate-400 leading-snug">
                    <span className="font-semibold text-slate-300">Your data stays private.</span>{" "}
                    We never sell or share contact information. Unsubscribe from any email with one click.
                  </p>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calendly / Book a Call Section ── */}
      <section className="section-padding bg-white" aria-labelledby="book-call-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealWrapper>
              <Eyebrow>Book a Call</Eyebrow>
              <h2
                id="book-call-heading"
                className="font-display font-bold text-slate-900 text-3xl leading-tight mb-4"
              >
                Prefer to Talk First?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Book a free 30-minute strategy call. No pitch, no pressure — just a
                genuine conversation about your business and whether we&apos;re the right fit.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Discuss your goals and current challenges",
                  "Get our initial read on what will move the needle",
                  "Understand our process and timeline",
                  "Ask us anything — no question is too basic",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/projoywebsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Book a Free 30-Min Call
              </a>
            </RevealWrapper>

            {/* General Contact Form */}
            <RevealWrapper delay={0.15}>
              <div className="card p-8">
                <h3 className="font-display font-bold text-slate-900 text-xl mb-2">
                  Send a Message
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Prefer email? Fill in this form and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}

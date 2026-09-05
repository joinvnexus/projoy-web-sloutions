// app/terms-of-service/page.tsx
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Projoy Web Solutions",
  description: "Terms of service for Projoy Web Solutions — the terms governing use of our website and services.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using the website at ${SITE_CONFIG.url} or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "Services",
    content: `Projoy Web Solutions provides web development, local SEO, and AI integration services. The specific scope, deliverables, timeline, and pricing for each engagement are defined in a separate project proposal or service agreement provided to you before work commences.

We reserve the right to decline any project at our sole discretion, including after initial contact or consultation.`,
  },
  {
    title: "Intellectual Property",
    content: `Upon full payment of all invoices for a completed project, you receive full ownership of all custom code, designs, and content created specifically for you under that engagement.

Third-party assets (fonts, stock images, open-source libraries) remain subject to their original licences. We will clearly identify any third-party components and their licensing requirements during the project.

Our general processes, frameworks, and methodologies remain our intellectual property and may be used in other client projects.`,
  },
  {
    title: "Payment",
    content: `Payment terms are specified in each project proposal. Typically, projects require a deposit before work commences, with the balance due upon completion or at agreed milestones. Monthly retainers are invoiced at the beginning of each billing period.

Late payments may incur interest at 2% per month. We reserve the right to pause work on projects with outstanding invoices over 14 days past due.`,
  },
  {
    title: "Confidentiality",
    content: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement. We will not disclose your business strategies, data, or unpublished materials to third parties without your explicit consent.

Upon your request, we are happy to sign a mutual NDA before beginning any project.`,
  },
  {
    title: "Warranties and Limitation of Liability",
    content: `We warrant that our services will be performed with reasonable skill and care. We guarantee a minimum PageSpeed score of 90/100 on Google PageSpeed Insights (desktop) for all web development projects, unless technical constraints outside our control prevent this.

We do not guarantee specific search engine rankings, advertising results, or revenue outcomes, as these depend on factors outside our direct control. Our total liability for any claim arising from our services is limited to the total fees paid for the specific service giving rise to the claim.`,
  },
  {
    title: "Termination",
    content: `Either party may terminate a monthly retainer with 30 days written notice. Project agreements may only be terminated per the terms specified in the individual project agreement.

Upon termination, you will receive all completed work and assets paid for to date. Any outstanding invoices for completed work remain payable.`,
  },
  {
    title: "Governing Law",
    content: `These terms are governed by the laws of Bangladesh. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Sylhet, Bangladesh.`,
  },
  {
    title: "Changes to Terms",
    content: `We may update these terms from time to time. The current version will always be available at this URL. Continued use of our services after changes constitutes acceptance of the updated terms. Material changes will be communicated via email where we hold your contact details.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <section className="pt-10 pb-8 border-b border-slate-100">
        <div className="container mx-auto max-w-[800px]">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Legal</p>
          <h1 className="font-display font-bold text-slate-900 text-3xl lg:text-4xl mb-3">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm">
            Last updated: 1 January 2025 · {SITE_CONFIG.name}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-[800px]">
          <p className="text-slate-600 leading-relaxed mb-10">
            Please read these Terms of Service carefully before using our website or
            engaging our services. These terms constitute a legally binding agreement
            between you and {SITE_CONFIG.name}.
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-display font-bold text-slate-900 text-xl mb-3">
                  {i + 1}. {section.title}
                </h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-slate-600 leading-relaxed mb-3 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-sm text-slate-600">
              Questions about these terms? Contact us at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-brand-600 font-semibold hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

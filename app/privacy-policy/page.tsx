// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Projoy Web Solutions",
  description: "Privacy policy for Projoy Web Solutions — how we collect, use and protect your data.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: "Information We Collect",
    content: `When you submit our contact or audit form, we collect the information you provide: your name, email address, business name, website URL, and a description of your challenge. We do not collect sensitive personal data such as financial information or government identifiers.

We also collect standard web analytics data through Google Analytics 4 — including pages visited, time on site, device type, and referral source. This data is anonymised and aggregated.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your contact information solely to respond to your enquiry, deliver your requested audit, and communicate about our services. We will never sell, rent, or share your personal information with third parties for marketing purposes.

Analytics data is used to understand how visitors interact with our website so we can improve user experience and content quality.`,
  },
  {
    title: "Data Storage and Security",
    content: `Your data is stored securely using industry-standard encryption. Form submissions are processed via secure HTTPS connections. We retain contact data for a maximum of 24 months, after which it is securely deleted.

We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.`,
  },
  {
    title: "Cookies",
    content: `We use essential cookies to ensure our website functions correctly. We also use analytics cookies (Google Analytics 4) to understand site usage. These analytics cookies use anonymised data and you can opt out at any time via your browser settings or by using Google's opt-out browser add-on.

We do not use advertising cookies or third-party tracking for marketing purposes.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access the personal data we hold about you, request its correction, request its deletion, and object to its processing. To exercise any of these rights, contact us at ${SITE_CONFIG.email}. We will respond to all requests within 30 days.`,
  },
  {
    title: "Third-Party Services",
    content: `Our website may embed content from or link to third-party services including Google Analytics, Calendly, and social media platforms. These services have their own privacy policies, which we encourage you to review. We are not responsible for the privacy practices of third-party sites.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this privacy policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this page periodically. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    content: `If you have any questions about this privacy policy or how we handle your data, please contact us at ${SITE_CONFIG.email}. We take privacy seriously and will respond to all enquiries promptly.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="pt-10 pb-8 border-b border-slate-100">
        <div className="container mx-auto max-w-[800px]">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Legal</p>
          <h1 className="font-display font-bold text-slate-900 text-3xl lg:text-4xl mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last updated: 1 January 2025 · {SITE_CONFIG.name}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-[800px]">
          <p className="text-slate-600 leading-relaxed mb-10">
            {SITE_CONFIG.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is
            committed to protecting your privacy. This policy explains what data we collect,
            why we collect it, and how we use it.
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
        </div>
      </section>
    </div>
  );
}

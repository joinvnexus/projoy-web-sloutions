// app/about/projoy-naidu/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Globe, Mail } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Eyebrow, GradientText } from "@/components/shared/Typography";
import { RevealWrapper, StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";
import {
  createBreadcrumbSchema,
  createProfilePageSchema,
  personSchema,
} from "@/lib/schemas";
import { SITE_CONFIG, FOUNDER_CONFIG } from "@/lib/constants";

const PAGE_PATH = `/about/${FOUNDER_CONFIG.slug}`;

export const metadata: Metadata = {
  title: `${FOUNDER_CONFIG.name} — Founder & Full-Stack Developer`,
  description: `${FOUNDER_CONFIG.name} is the founder of ${SITE_CONFIG.name} and a full-stack developer specializing in modern JavaScript, AI-powered automation, and scalable web applications.`,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: `${FOUNDER_CONFIG.name} — Founder, ${SITE_CONFIG.name}`,
    description: FOUNDER_CONFIG.description,
    url: `${SITE_CONFIG.url}${PAGE_PATH}`,
    type: "profile",
  },
};

const profileLinks = [
  {
    label: "LinkedIn",
    href: FOUNDER_CONFIG.sameAs.linkedin,
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: FOUNDER_CONFIG.sameAs.github,
    Icon: Github,
  },
  {
    label: "Portfolio",
    href: FOUNDER_CONFIG.sameAs.portfolio,
    Icon: Globe,
  },
];

export default function FounderPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "About", href: "/about" },
    { name: FOUNDER_CONFIG.name, href: PAGE_PATH },
  ]);
  const profilePage = createProfilePageSchema(PAGE_PATH);

  return (
    <>
      <SchemaMarkup schema={[breadcrumb, profilePage, personSchema]} />
      <Breadcrumbs
        items={[
          { name: "About", href: "/about" },
          { name: FOUNDER_CONFIG.name, href: PAGE_PATH },
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative bg-white pt-8 pb-16 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #3a83c7 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-500/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto max-w-[1200px] relative z-10 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-extrabold text-4xl">P</span>
            </div>
            <div className="max-w-3xl">
              <Eyebrow>Founder</Eyebrow>
              <h1
                className="font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                {FOUNDER_CONFIG.name} — <GradientText>Founder &amp; Full-Stack Developer</GradientText>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {FOUNDER_CONFIG.description}
              </p>

              {/* Profile links */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                {profileLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-700 hover:border-brand-200 text-sm font-medium transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Role & relationship to the agency ── */}
      <section className="section-padding bg-slate-50" aria-labelledby="role-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <RevealWrapper>
              <Eyebrow>Role</Eyebrow>
              <h2
                id="role-heading"
                className="font-display font-bold text-slate-900 text-3xl leading-tight mb-5"
              >
                Founder of {SITE_CONFIG.name}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {FOUNDER_CONFIG.name} founded{" "}
                  <Link href="/about" className="text-brand-700 font-semibold hover:underline">
                    {SITE_CONFIG.name}
                  </Link>{" "}
                  to combine hands-on full-stack development with the local SEO and Google
                  Business Profile work that small businesses actually need to get found.
                </p>
                <p>
                  Before {SITE_CONFIG.name} was formed as an agency, this work was published
                  under an earlier brand. That earlier brand is not a current, separate
                  company.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.15}>
              <Eyebrow>Expertise</Eyebrow>
              <h2 className="font-display font-bold text-slate-900 text-2xl mb-6 leading-tight">
                Technology &amp; Tools
              </h2>
              <StaggerContainer className="flex flex-wrap gap-2">
                {FOUNDER_CONFIG.knowsAbout.map((tech) => (
                  <StaggerItem key={tech}>
                    <span className="inline-flex px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium">
                      {tech}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── Explore more ── */}
      <section className="section-padding bg-white" aria-labelledby="explore-heading">
        <div className="container mx-auto max-w-[1200px]">
          <h2 id="explore-heading" className="sr-only">
            Explore more
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link href="/services" className="card card-hover p-7 group">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition-colors">
                Services
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Web development, AI automation, and local SEO offered through{" "}
                {SITE_CONFIG.name}.
              </p>
              <span className="inline-flex items-center gap-1.5 text-brand-700 text-sm font-semibold">
                View services <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/projects" className="card card-hover p-7 group">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition-colors">
                Projects
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                A look at the applications and sites built to date.
              </p>
              <span className="inline-flex items-center gap-1.5 text-brand-700 text-sm font-semibold">
                View projects <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/blog" className="card card-hover p-7 group">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition-colors">
                Articles
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Writing on web development, AI automation, and local SEO.
              </p>
              <span className="inline-flex items-center gap-1.5 text-brand-700 text-sm font-semibold">
                Read the blog <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="pb-20">
        <div className="container mx-auto max-w-[1200px]">
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-2">
                Get in touch
              </h3>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition-colors duration-200 flex-shrink-0"
            >
              Contact {SITE_CONFIG.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

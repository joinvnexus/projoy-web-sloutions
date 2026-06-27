// app/services/local-seo/page.tsx
import type { Metadata } from "next";
import NextLink from "next/link";
import {
  MapPin,
  Star,
  Globe,
  Image as ImageIcon,
  Link2,
  TrendingUp,
  Phone,
  Search,
  FileCheck,
  BarChart3,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FAQSection } from "@/components/services/FAQSection";
import { FinalServiceCTA } from "@/components/services/FinalServiceCTA";
import { SectionHeader, GradientText } from "@/components/shared/Typography";
import {
  RevealWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/RevealWrapper";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/constants";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Local SEO & Google Business Profile Optimization | Projoy Web Solutions",
  description:
    "Rank #1 on Google Maps with Projoy's local SEO services. GBP optimization, citation building, reputation management and geo-tagged images. Results in 60–90 days.",
  alternates: { canonical: "/services/local-seo" },
  openGraph: {
    title: "Local SEO & Google Business Profile Optimization | Projoy Web Solutions",
    description:
      "We specialize in getting local businesses to the top of Google Maps. More visibility = more calls, visits, and revenue.",
    url: `${SITE_CONFIG.url}/services/local-seo`,
  },
};

/* ─── Page Data ──────────────────────────────────────────── */
const localSeoStats = [
  { value: "46%", label: "Of Google searches are local" },
  { value: "76%", label: "Local searchers visit within 24 hrs" },
  { value: "700%", label: "More clicks for 3-pack vs organic" },
  { value: "90 days", label: "Our avg. time to 3-pack" },
];

const benefits = [
  {
    icon: <MapPin strokeWidth={1.75} />,
    title: "Dominate the Google 3-Pack",
    description:
      "The local 3-pack gets 700% more clicks than organic results. We optimize every ranking signal — proximity, relevance, and prominence — to get you there and keep you there.",
    highlight: "Avg. results in 60–90 days",
  },
  {
    icon: <Star strokeWidth={1.75} />,
    title: "Reputation Management",
    description:
      "We implement a review acquisition system that grows your Google rating ethically. More high-quality reviews means higher rankings and more trust from potential customers.",
    highlight: "4.5+ star average strategy",
  },
  {
    icon: <Globe strokeWidth={1.75} />,
    title: "Complete Citation Building",
    description:
      "Consistent NAP (Name, Address, Phone) across 50+ directories including Yelp, Bing Places, Apple Maps, TripAdvisor, and industry-specific listings your competitors overlook.",
    highlight: "50+ directory submissions",
  },
  {
    icon: <ImageIcon strokeWidth={1.75} />,
    title: "Geo-Tagged Image Strategy",
    description:
      "We embed GPS coordinates and location metadata into images uploaded to your GBP. This underused tactic sends powerful local relevance signals directly to Google's algorithm.",
    highlight: "Underused but highly effective",
  },
  {
    icon: <Link2 strokeWidth={1.75} />,
    title: "Local Link Building",
    description:
      "We secure backlinks from local news sites, chambers of commerce, business associations, and niche directories — building authoritative local presence signals that compound over time.",
    highlight: "Authority-building links",
  },
  {
    icon: <BarChart3 strokeWidth={1.75} />,
    title: "Transparent Monthly Reporting",
    description:
      "You receive keyword ranking reports tracked within Google Maps, GBP insight summaries, citation audit results, and a clear breakdown of what moved and why.",
    highlight: "Weekly rank tracking",
  },
];

const subServices = [
  {
    icon: <MapPin strokeWidth={1.75} />,
    title: "Google Business Profile Optimization",
    description:
      "Complete GBP audit and optimization: category selection, service areas, business description, attributes, products/services setup, Q&A management, and posting schedule.",
    result: "Most clients see ranking movement within 30 days.",
    href: "/services/local-seo/google-business-profile",
  },
  {
    icon: <TrendingUp strokeWidth={1.75} />,
    title: "Google Maps Ranking",
    description:
      "Systematic improvement of your Maps position using proximity signals, relevance optimization, and prominence building. We track keyword rankings in the 3-pack weekly.",
    result: "Average 3-pack entry within 60–90 days.",
    href: "/services/local-seo/google-maps-ranking",
  },
  {
    icon: <Globe strokeWidth={1.75} />,
    title: "Citation Building & Cleanup",
    description:
      "Consistent NAP across 50+ directories. We audit existing citations for errors (the most common ranking killer), fix them, and build new high-authority listings.",
    result: "Removes ranking suppression from NAP inconsistency.",
    href: "/services/local-seo/citation-building",
  },
  {
    icon: <ImageIcon strokeWidth={1.75} />,
    title: "Geo-Tagged Image Uploads",
    description:
      "We create, EXIF-tag, and upload 4–8 location-specific images to your GBP each month with embedded GPS coordinates and keyword-rich filenames and alt text.",
    result: "Strong relevance signal most competitors miss.",
    href: "/services/local-seo/geo-tagged-images",
  },
  {
    icon: <Star strokeWidth={1.75} />,
    title: "Review & Reputation Management",
    description:
      "Review request automation via SMS/email, response templates for all reviews (positive and negative), and reputation monitoring across Google, Yelp, and Facebook.",
    result: "Average +25 reviews in first 3 months.",
    href: "/services/local-seo/reputation-management",
  },
  {
    icon: <Link2 strokeWidth={1.75} />,
    title: "Local Link Building",
    description:
      "Outreach to local news outlets, chambers of commerce, and industry associations for authoritative local backlinks that strengthen your overall domain authority.",
    result: "High-quality backlinks from local authority sites.",
    href: "/services/local-seo",
  },
];

const processPhases = [
  {
    phase: "Month 1",
    title: "Foundation & Full Optimization",
    timeline: "Week 1–4",
    description:
      "We perform a deep audit of your GBP, competitors, and current keyword rankings. Then we execute a complete optimization: categories, services, description, attributes, photos, Q&A, and posting schedule.",
    deliverables: [
      "Full GBP Audit Report",
      "Competitor Analysis",
      "GBP Optimization Live",
      "Citation Cleanup Start",
      "Geo-Tagged Image Upload #1",
    ],
    icon: <Search strokeWidth={1.75} />,
  },
  {
    phase: "Month 2",
    title: "Building Signals & Authority",
    timeline: "Week 5–8",
    description:
      "We build 20+ new directory citations, launch the review acquisition strategy, continue geo-tagged image uploads, and begin local link outreach. Your ranking starts moving.",
    deliverables: [
      "20+ Citation Submissions",
      "Review Strategy Live",
      "4–8 Geo-Tagged Images",
      "GBP Post Schedule Active",
      "First Ranking Movement",
    ],
    icon: <TrendingUp strokeWidth={1.75} />,
  },
  {
    phase: "Month 3",
    title: "Ranking & Reporting",
    timeline: "Week 9–12",
    description:
      "Advanced GBP tactics, continued link building, in-depth rank tracking, and your first full monthly report with real data. Most clients see 3-pack entry or significant upward movement at this stage.",
    deliverables: [
      "Monthly Ranking Report",
      "Competitor Gap Analysis",
      "Link Building Report",
      "Strategy Call (30 min)",
      "3-Pack Entry Target",
    ],
    icon: <BarChart3 strokeWidth={1.75} />,
  },
  {
    phase: "Month 4+",
    title: "Maintain & Dominate",
    timeline: "Ongoing",
    description:
      "Continuous optimization based on ranking data, new keyword expansion, reputation growth, content updates, and rank defense. Your results compound — this is where the real ROI accumulates.",
    deliverables: [
      "Ongoing Rank Monitoring",
      "New Keyword Targets",
      "Monthly Review Growth",
      "Quarterly Strategy Review",
    ],
    icon: <Megaphone strokeWidth={1.75} />,
  },
];

const monthlyDeliverables = [
  "Full GBP management (posts, Q&A responses, photo updates)",
  "Monthly keyword ranking report (tracked in Google Maps)",
  "Citation audit results and new submission log",
  "Review monitoring + response support (all platforms)",
  "Competitor position tracking and gap analysis",
  "Geo-tagged image uploads (4–8 per month)",
  "GBP posting schedule (2–4 posts per week)",
  "Monthly 30-minute strategy call",
];

const faqs = [
  {
    q: "How long until I see Local SEO results?",
    a: "Most clients see measurable ranking movement within 30–60 days of GBP optimization going live. Full Google 3-pack entry typically takes 60–90 days, with some competitive markets taking 3–6 months. We track weekly and report monthly so you always have visibility.",
  },
  {
    q: "Do I need a website to do Local SEO?",
    a: "You need a verified Google Business Profile, which is free. However, having a website significantly strengthens your local rankings — Google wants to see a legitimate web presence. If you don't have one, we can build a fast, SEO-ready Next.js site alongside your Local SEO campaign.",
  },
  {
    q: "Can you target multiple cities or locations?",
    a: "Yes. We can target multiple service areas from a single GBP or manage separate GBPs for different locations. Multi-location strategy requires a different scope, so book a call and we'll design the right approach for your footprint.",
  },
  {
    q: "What cities and countries do you work with?",
    a: "We work with local businesses worldwide. Local SEO tactics are universal — what varies is the competitive landscape. We've worked with businesses across Bangladesh, the UK, the US, and several other markets.",
  },
  {
    q: "Are your methods safe — is this 'white-hat'?",
    a: "100% white-hat. We use only Google-approved methods. No fake reviews, no keyword stuffing, no black-hat citation spam. Our strategies are built to deliver lasting rankings that survive algorithm updates.",
  },
  {
    q: "Do I keep ownership of my Google Business Profile?",
    a: "Always. You own your GBP — we work as authorized managers. We'll never request primary ownership. If we ever part ways, your profile, reviews, and history remain 100% yours.",
  },
  {
    q: "How is Local SEO different from regular (national) SEO?",
    a: "Local SEO targets searches with geographic intent — 'restaurant near me', 'plumber in Sylhet' — and optimizes your presence in Google Maps and the local 3-pack. It's governed by different ranking factors (proximity, GBP signals, local citations) than traditional website SEO.",
  },
  {
    q: "What's the monthly investment for Local SEO?",
    a: "Our local SEO retainers are priced based on competition level and number of target locations. Most clients start with a single-location package. Book a free audit call and we'll provide a transparent, itemized quote within 24 hours.",
  },
];

/* ─── The Problem Section ────────────────────────────────── */
function ProblemSection() {
  const stats = [
    { value: "46%", label: "of all Google searches have local intent", icon: <Search className="w-5 h-5" strokeWidth={1.75} /> },
    { value: "76%", label: "of local searchers visit a business within 24 hours", icon: <Phone className="w-5 h-5" strokeWidth={1.75} /> },
    { value: "700%", label: "more clicks for 3-pack results vs organic #1", icon: <TrendingUp className="w-5 h-5" strokeWidth={1.75} /> },
  ];

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(14,165,233,0.08) 0%, transparent 70%)" }} />
      </div>
      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealWrapper>
            <span className="eyebrow text-accent-400 before:from-accent-400">The Problem</span>
            <h2 className="font-display font-bold text-white text-3xl lg:text-4xl leading-tight mb-5">
              Your Customers Are Searching for You.
              <span className="text-slate-400"> Are They Finding You — or Your Competitor?</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Right now, someone in your city is searching for exactly what you offer. If you're not
              in the Google 3-pack, they're calling your competitor. Local SEO is how you fix that —
              permanently and without paying for ads.
            </p>
            <div className="p-5 rounded-2xl bg-slate-800 border border-slate-700">
              <p className="text-sm font-semibold text-slate-300 mb-1">
                The cost of inaction
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                A business ranking #4 on Google Maps instead of #1 loses an estimated 60–80% of local
                organic clicks to competitors. Every month you wait is revenue left on the table.
              </p>
            </div>
          </RevealWrapper>

          <StaggerContainer className="space-y-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-800 border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0 text-accent-400">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black font-display text-white tracking-tight leading-none mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-slate-400 leading-snug">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ─── Page Component ─────────────────────────────────────── */
export default function LocalSEOPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Local SEO", href: "/services/local-seo" },
  ]);

  const faqSchema = createFaqSchema(faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO & Google Business Profile Optimization",
    provider: { "@type": "Organization", name: SITE_CONFIG.name },
    serviceType: "Search Engine Optimization",
    description:
      "Local SEO and Google Business Profile optimization services to help businesses rank in the Google 3-pack and dominate local search results.",
    url: `${SITE_CONFIG.url}/services/local-seo/`,
    areaServed: "Worldwide",
  };

  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, faqSchema, serviceSchema]} />
      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "Local SEO", href: "/services/local-seo" },
        ]}
      />

      {/* 1. Hero */}
      <ServiceHero
        eyebrow="Local SEO Services"
        heading={
          <>
            Rank #1 on Google Maps —{" "}
            <GradientText>Local SEO That Drives Calls,</GradientText> Visits &amp; Revenue
          </>
        }
        backgroundImage="/images/services/local-seo-hero.png"
        
        subheading="We specialize in getting local businesses to the top of Google Maps and local search results. More visibility means more calls, more foot traffic, and more revenue — without paying for ads."
        primaryCTA={{ label: "Get Your Free Local SEO Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "See Local SEO Case Studies", href: "/case-studies?filter=local-seo" }}
        trustPoints={[
          "Results in 60–90 days",
          "100% white-hat methods",
          "You own your GBP",
          "Weekly rank tracking",
        ]}
        stats={[
          { value: "90 days", label: "Avg. Time to Results" },
          { value: "3-Pack", label: "Target Ranking" },
          { value: "50+", label: "Directory Submissions" },
          { value: "100%", label: "White-Hat Methods" },
        ]}
        accentColor="accent"
      />

      {/* 2. The Problem */}
      <ProblemSection />

      {/* 3. Benefits */}
      <BenefitsSection
        eyebrow="How We Rank You"
        heading={
          <>
            Every Ranking Signal,{" "}
            <GradientText>Fully Optimized</GradientText>
          </>
        }
        subheading="Local SEO has over a dozen ranking signals. We don't cherry-pick — we optimize all of them systematically."
        benefits={benefits}
        columns={3}
        variant="cards"
        accentColor="accent"
        background="white"
      />

      {/* 4. Sub-services detail */}
      <section className="section-padding bg-slate-50" aria-labelledby="seo-services-heading">
        <div className="container mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Our Local SEO Services"
            heading="What's Included in Your Campaign"
            subheading="A complete local SEO campaign covers all of these areas. Here's exactly what we do and why each one matters."
            id="seo-services-heading"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subServices.map((service) => (
              <StaggerItem key={service.title}>
                <NextLink
                  href={service.href}
                  className="card card-hover p-7 group h-full flex flex-col block"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 transition-colors">
                      <span className="text-accent-600 w-5 h-5">{service.icon}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-lg leading-snug pt-1 group-hover:text-accent-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                      <span className="text-xs font-semibold text-success">{service.result}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-accent-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                </NextLink>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Process */}
      <ProcessTimeline
        eyebrow="Campaign Timeline"
        heading="Your First 90 Days — And Beyond"
        subheading="Local SEO is a compounding investment. Here's what happens in each phase and what you can expect to see."
        phases={processPhases}
        accentColor="accent"
        background="white"
        ctaLabel="Start Your SEO Campaign"
        ctaHref="/contact#audit"
      />

      {/* 6. Monthly Deliverables */}
      <section className="section-padding bg-slate-50" aria-labelledby="seo-deliverables-heading">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Monthly Retainer</span>
            <h2
              id="seo-deliverables-heading"
              className="font-display font-bold text-slate-900 text-3xl lg:text-4xl mb-4 leading-tight"
            >
              What You Get Every Month
            </h2>
            <p className="text-slate-600 leading-relaxed">
              No vague promises. Here's exactly what's included in your monthly Local SEO retainer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {monthlyDeliverables.map((item, i) => (
              <RevealWrapper key={i} delay={i * 0.04}>
                <div className="card p-5 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-accent-50 border border-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="w-3.5 h-3.5 text-accent-600" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection
        eyebrow="FAQ"
        heading="Local SEO — Common Questions"
        subheading="Clear answers to the questions we hear most often from local businesses."
        faqs={faqs}
        accentColor="accent"
        background="white"
        columns={2}
      />

      {/* 8. Final CTA */}
      <FinalServiceCTA
        heading="Want to See Where You Currently Rank and What It'll Take to Reach #1?"
        subheading="Get a free Local SEO audit. We'll analyze your Google Business Profile, check your current Maps rankings, and show you exactly what's blocking your visibility."
        primaryCTA={{ label: "Get Your Free Local SEO Audit", href: "/contact#audit" }}
        secondaryCTA={{ label: "See Results We've Achieved", href: "/case-studies" }}
        trustPoints={[
          "Free audit — no commitment",
          "Results within 60–90 days",
          "You own your GBP forever",
        ]}
        accentColor="accent"
        testimonialQuote="Within 60 days we went from invisible on Google Maps to showing up in the top 3 for our main keywords. The phone hasn't stopped ringing since."
        testimonialAuthor="Rahim Chowdhury · Owner, RC Restaurant, Sylhet"
      />
    </>
  );
}

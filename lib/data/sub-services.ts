// lib/data/sub-services.ts

export interface SubServiceFAQ {
  q: string;
  a: string;
}

export interface SubServiceData {
  slug: string;
  parentSlug: "web-development" | "local-seo" | "ai-solutions";
  parentLabel: string;
  parentHref: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  subheading: string;
  accentColor: "brand" | "accent";
  stats: { value: string; label: string }[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string; timeline: string }[];
  deliverables: string[];
  faqs: SubServiceFAQ[];
  ctaHeading: string;
  ctaSubheading: string;
  heroImage?: string;
  heroImageAlt?: string;
}

export const subServices: SubServiceData[] = [
  /* ───────────────── WEB DEVELOPMENT SUB-SERVICES ───────────────── */
  {
    slug: "nextjs-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Next.js Development",
    metaTitle: "Next.js Development Services | Projoy Web Solutions",
    metaDescription:
      "Custom Next.js 15 website development with 95+ PageSpeed guarantee. Server Components, SEO-ready architecture, and production-grade code.",
    heading: "Next.js Websites Built for Speed and Search Rankings",
    subheading:
      "We build custom websites on Next.js 15 — the same framework powering some of the world's fastest sites — engineered from the first line of code for Core Web Vitals and conversions.",
    accentColor: "brand",
    stats: [
      { value: "95+", label: "PageSpeed Score" },
      { value: "<2s", label: "Load Time" },
      { value: "3 wk", label: "Avg. Delivery" },
    ],
    benefits: [
      { title: "Server-First Architecture", description: "We default to Server Components, shipping minimal JavaScript to the browser so your pages load instantly even on slow connections." },
      { title: "Built-In SEO Foundation", description: "Semantic HTML, structured data, and metadata are part of the build from day one — not retrofitted after launch." },
      { title: "Type-Safe, Maintainable Code", description: "Full TypeScript coverage means fewer bugs in production and a codebase any future developer can safely extend." },
      { title: "Static + Dynamic Where It Matters", description: "We use static generation for marketing pages and server rendering for dynamic content — the right tool for each part of your site." },
    ],
    process: [
      { title: "Discovery & Architecture", description: "We map your content structure and decide which pages are static, server-rendered, or dynamic.", timeline: "Week 1" },
      { title: "Component Build", description: "We build your design system as reusable React components before assembling pages.", timeline: "Week 1–2" },
      { title: "Integration & Testing", description: "CMS, forms, and third-party tools are connected and tested across devices.", timeline: "Week 2–3" },
      { title: "Launch & Handoff", description: "Performance testing, deployment to Vercel, and full source code handoff.", timeline: "Week 3" },
    ],
    deliverables: [
      "Full Next.js 15 source code (GitHub repo)",
      "Component documentation",
      "Vercel deployment configuration",
      "90+ PageSpeed guarantee",
      "30-day post-launch support",
    ],
    faqs: [
      { q: "Why Next.js instead of WordPress?", a: "Next.js renders pages faster, ships less JavaScript, and gives us full control over SEO implementation — all of which directly affect rankings and conversions. WordPress carries plugin bloat that's difficult to fully optimize." },
      { q: "Can you migrate my existing WordPress site?", a: "Yes. We've migrated several sites from WordPress to Next.js while preserving all SEO signals — meta data, URL structure, and 301 redirects — so rankings are protected through the transition." },
      { q: "Do I need to know how to code to update content?", a: "No. We can integrate a headless CMS (Sanity, Contentlayer, or Payload) so you can update content through a simple dashboard without touching code." },
    ],
    ctaHeading: "Ready for a Website Built the Right Way?",
    ctaSubheading: "Get a free technical audit of your current site and a clear plan for what a Next.js rebuild would deliver.",
    heroImage: "/images/sub-service/nextjs-development-hero.webp",
    heroImageAlt: "Next.js development illustration",

  },
  {
    slug: "saas-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "SaaS Development",
    metaTitle: "SaaS Application Development Services | Projoy Web Solutions",
    metaDescription:
      "End-to-end SaaS development with Next.js, authentication, Stripe billing, and database architecture. From validated idea to production-ready product.",
    heading: "From Idea to Production-Ready SaaS in Weeks, Not Months",
    subheading:
      "We build full-stack SaaS applications — authentication, subscription billing, dashboards, and APIs — using a modern, scalable stack designed to grow with you.",
    accentColor: "brand",
    stats: [
      { value: "6–10 wk", label: "MVP Timeline" },
      { value: "100%", label: "Code Ownership" },
      { value: "Stripe", label: "Billing Ready" },
    ],
    benefits: [
      { title: "Authentication Done Right", description: "Secure sign-up, login, and session management using NextAuth.js or Clerk — battle-tested, not custom-rolled." },
      { title: "Subscription Billing Built-In", description: "Stripe integration for subscriptions, usage-based billing, and webhooks — so you can start charging customers from day one." },
      { title: "Scalable Database Architecture", description: "Prisma ORM with PostgreSQL gives you a type-safe, scalable data layer that won't need rearchitecting as you grow." },
      { title: "API-First Design", description: "Clean REST or tRPC APIs mean your SaaS can integrate with other tools and support future mobile apps." },
    ],
    process: [
      { title: "Product Scoping", description: "We define your MVP feature set — what's essential for launch versus what can wait.", timeline: "Week 1" },
      { title: "Architecture & Design", description: "Database schema, API structure, and UI design are finalized before development starts.", timeline: "Week 1–2" },
      { title: "Core Build", description: "Authentication, billing, and primary features are built and connected.", timeline: "Week 2–7" },
      { title: "Testing & Launch", description: "End-to-end testing, security review, and production deployment.", timeline: "Week 7–10" },
    ],
    deliverables: [
      "Full-stack SaaS application source code",
      "Authentication and billing fully configured",
      "Database schema and migrations",
      "API documentation",
      "Deployment to production environment",
    ],
    faqs: [
      { q: "What does an MVP typically include?", a: "Authentication, your core feature set, subscription billing, and a basic dashboard. We deliberately exclude nice-to-haves at this stage so you can validate the product faster." },
      { q: "Can you build on top of an existing codebase?", a: "Yes, if it's a reasonably modern stack. We'll review your codebase during discovery and tell you honestly whether extending it or rebuilding is the better path." },
      { q: "Who owns the code and infrastructure?", a: "You do, completely. We set up your own Stripe, database, and hosting accounts — we never hold your production infrastructure hostage." },
    ],
    ctaHeading: "Have a SaaS Idea Ready to Build?",
    ctaSubheading: "Book a free scoping call. We'll help you define the leanest possible MVP and give you a realistic timeline and quote.",
    heroImage: "/images/sub-service/saas-development-hero.webp",
    heroImageAlt: "SaaS application development illustration",
  },
  {
    slug: "landing-pages",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Landing Page Development",
    metaTitle: "High-Converting Landing Page Development | Projoy Web Solutions",
    metaDescription:
      "CRO-optimized landing pages built with Next.js for ad campaigns and product launches. Fast-loading, conversion-focused, and A/B test ready.",
    heading: "Landing Pages Engineered to Convert Cold Traffic",
    subheading:
      "We design and build landing pages specifically for paid traffic and product launches — every section is structured around a single conversion goal.",
    accentColor: "accent",
    stats: [
      { value: "8.4%", label: "Best CVR Achieved" },
      { value: "<1.5s", label: "Load Time" },
      { value: "1–2 wk", label: "Delivery Time" },
    ],
    benefits: [
      { title: "Built Around One Goal", description: "No distracting navigation or competing CTAs — every element on the page drives toward a single conversion action." },
      { title: "Fast Enough to Lower Your CPC", description: "Page speed directly affects Google and Meta ad quality scores. Our pages load in under 1.5 seconds." },
      { title: "Objection-Handling Structure", description: "We sequence content to answer the questions visitors have right when they have them — social proof, then features, then FAQ, then CTA." },
      { title: "A/B Test Ready", description: "Pages are built with variant testing in mind from day one, so you can optimize headlines and CTAs without a rebuild." },
    ],
    process: [
      { title: "Conversion Audit", description: "We review your offer, audience, and traffic source to define the page strategy.", timeline: "Day 1–2" },
      { title: "Copy & Wireframe", description: "Conversion-focused copy and a wireframe are drafted and approved before design.", timeline: "Day 3–5" },
      { title: "Design & Build", description: "High-fidelity design and Next.js development happen in parallel.", timeline: "Week 1–2" },
      { title: "Launch & Track", description: "Analytics and conversion tracking are wired before go-live.", timeline: "Week 2" },
    ],
    deliverables: [
      "Fully built and deployed landing page",
      "Conversion tracking (GA4 + ad platform pixels)",
      "Mobile-optimized design",
      "A/B test variant scaffolding",
    ],
    faqs: [
      { q: "How is this different from a regular website page?", a: "A landing page has a single conversion goal and zero navigation distractions. It's built for traffic that arrives from a specific ad or campaign, not general browsing." },
      { q: "Can you write the copy too?", a: "Yes. Conversion copywriting is included — we'll interview you about your offer and audience, then draft copy built around proven direct-response structures." },
      { q: "Do you set up the ad tracking pixels?", a: "Yes — Google Ads, Meta Pixel, and GA4 conversion events are all configured as part of the build." },
    ],
    ctaHeading: "Launching a Campaign and Need a Page That Converts?",
    ctaSubheading: "Tell us about your offer and traffic source — we'll show you exactly how we'd structure the page.",
    heroImage: "/images/sub-service/landing-page-development-hero.webp",
    heroImageAlt: "Landing page development illustration",
  },
  {
    slug: "custom-dashboards",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Custom Dashboard Development",
    metaTitle: "Custom Dashboard Development Services | Projoy Web Solutions",
    metaDescription:
      "Internal tools, client portals, and admin panels built with React and Next.js. Real-time data, role-based access, and clean, usable interfaces.",
    heading: "Dashboards That Make Your Data Usable",
    subheading:
      "We build internal tools, client portals, and admin panels that turn raw data into clear, actionable interfaces your team will actually use.",
    accentColor: "brand",
    stats: [
      { value: "0.8s", label: "Avg. Load Time" },
      { value: "Real-time", label: "Data Updates" },
      { value: "RBAC", label: "Access Control" },
    ],
    benefits: [
      { title: "Real-Time Data Visualization", description: "Charts and tables update live using modern data-fetching patterns — no manual refresh required." },
      { title: "Role-Based Access Control", description: "Different user roles see different views and permissions, built directly into the application logic." },
      { title: "Exportable Reports", description: "CSV and PDF export are standard, so your team can pull data out for offline reporting and presentations." },
      { title: "Clean, Usable Interfaces", description: "We design dashboards for the people who use them daily — not just for screenshots in a sales deck." },
    ],
    process: [
      { title: "Data & Workflow Mapping", description: "We map what data needs to be shown and how different roles interact with it.", timeline: "Week 1" },
      { title: "UI Design", description: "Wireframes and high-fidelity designs for every view and role.", timeline: "Week 1–2" },
      { title: "Build & Connect", description: "Frontend build connected to your existing database or APIs.", timeline: "Week 2–5" },
      { title: "Testing & Rollout", description: "User acceptance testing with your actual team before full rollout.", timeline: "Week 5–6" },
    ],
    deliverables: [
      "Fully functional dashboard application",
      "Role-based access control system",
      "Data export functionality",
      "Documentation for your team",
    ],
    faqs: [
      { q: "Can it connect to our existing database?", a: "Yes. We can build on top of your existing PostgreSQL, MySQL, or other supported database — no need to migrate your data." },
      { q: "How many user roles can it support?", a: "As many as your business needs. We define roles and permissions during the discovery phase based on your actual team structure." },
      { q: "Can we add features after launch?", a: "Yes — dashboards are built to be extended. We offer ongoing development retainers for exactly this purpose." },
    ],
    ctaHeading: "Drowning in Spreadsheets Instead of a Real Dashboard?",
    ctaSubheading: "Tell us what data you need to see and who needs to see it — we'll scope a dashboard that fits.",
    heroImage: "/images/sub-service/custom-dashboard-development-hero.webp",
    heroImageAlt: "Custom dashboard development illustration",
  },
  {
    slug: "ai-integrations",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "AI Integrations",
    metaTitle: "AI Integration Development Services | Projoy Web Solutions",
    metaDescription:
      "OpenAI, Anthropic Claude, and Gemini API integrations for your website or web application. Chatbots, automation, and intelligent features.",
    heading: "AI Features Built Into Your Website, Not Bolted On",
    subheading:
      "We integrate OpenAI, Claude, and Gemini APIs directly into your Next.js application — chatbots, content generation, and smart automation that feel native to your product.",
    accentColor: "brand",
    stats: [
      { value: "<1s", label: "Response Time" },
      { value: "3+", label: "AI Providers Supported" },
      { value: "2–4 wk", label: "Integration Time" },
    ],
    benefits: [
      { title: "Native Integration, Not a Widget", description: "AI features are built into your actual application architecture, not embedded as a disconnected third-party script." },
      { title: "Model-Agnostic Approach", description: "We choose the right model for the task — GPT-4o for speed, Claude for nuanced writing, Gemini for multimodal needs." },
      { title: "Retrieval-Augmented Accuracy", description: "We ground AI responses in your actual business data so answers are accurate, not generic hallucinations." },
      { title: "Cost-Conscious Architecture", description: "We design prompts and caching strategies that keep your API costs predictable as usage scales." },
    ],
    process: [
      { title: "Use Case Definition", description: "We identify exactly what the AI feature needs to do and what data it needs access to.", timeline: "Week 1" },
      { title: "Prompt & Data Design", description: "Prompts are engineered and tested; your business data is structured for retrieval.", timeline: "Week 1–2" },
      { title: "Build & Integrate", description: "The AI feature is built into your application and connected to your existing systems.", timeline: "Week 2–3" },
      { title: "Test & Refine", description: "Real-world testing against edge cases before launch.", timeline: "Week 3–4" },
    ],
    deliverables: [
      "Fully integrated AI feature in your application",
      "Prompt documentation",
      "Cost monitoring dashboard",
      "30-day refinement period",
    ],
    faqs: [
      { q: "Which AI model should I use?", a: "It depends on your use case. We'll recommend the model that balances accuracy, speed, and cost for your specific feature during the scoping call." },
      { q: "Will the AI make things up?", a: "We minimize this with retrieval-augmented generation — grounding responses in your actual data — and test extensively against edge cases before launch." },
      { q: "What will this cost to run monthly?", a: "Most small business integrations cost $10–$100/month in API usage. We provide a cost estimate before you commit to the project." },
    ],
    ctaHeading: "Want AI Features That Actually Work for Your Business?",
    ctaSubheading: "Tell us what you're trying to automate or improve — we'll tell you honestly whether AI is the right tool for it.",
    heroImage: "/images/sub-service/ai-integrations-hero.webp",
    heroImageAlt: "AI integrations illustration",
  },

  /* ───────────────── LOCAL SEO SUB-SERVICES ───────────────── */
  {
    slug: "google-business-profile",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Google Business Profile Optimization",
    metaTitle: "Google Business Profile Optimization Service | Projoy Web Solutions",
    metaDescription:
      "Complete Google Business Profile optimization — categories, descriptions, attributes, posts, and Q&A management. Turn your GBP into a lead-generating asset.",
    heading: "Turn Your Google Business Profile Into a Lead Generator",
    subheading:
      "Most businesses claim their GBP and stop there. We optimize every field, attribute, and feature Google offers — because incomplete profiles rank lower and convert worse.",
    accentColor: "accent",
    stats: [
      { value: "47", label: "GBP Fields Optimized" },
      { value: "30 days", label: "To First Movement" },
      { value: "100%", label: "You Keep Ownership" },
    ],
    benefits: [
      { title: "Complete Profile Optimization", description: "Category selection, service areas, business description, attributes, products, and services — all fully filled out and keyword-optimized." },
      { title: "Consistent Posting Schedule", description: "We publish 2–4 GBP posts weekly to keep your profile active, which Google rewards with better visibility." },
      { title: "Q&A Management", description: "We seed and answer relevant questions on your profile, addressing objections before customers even need to ask." },
      { title: "Photo and Video Strategy", description: "Regular, geo-tagged visual content uploaded on a schedule — a ranking signal most competitors neglect." },
    ],
    process: [
      { title: "Full GBP Audit", description: "We review every field against best practices and identify gaps.", timeline: "Week 1" },
      { title: "Complete Optimization", description: "All fields, categories, and attributes are filled out and optimized.", timeline: "Week 1" },
      { title: "Content Calendar Launch", description: "Posting schedule begins; photos and updates go out consistently.", timeline: "Week 2+" },
      { title: "Ongoing Management", description: "Monthly review of performance with adjustments based on Insights data.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Fully optimized Google Business Profile",
      "Weekly GBP posts (2–4 per week)",
      "Q&A monitoring and responses",
      "Monthly GBP Insights report",
    ],
    faqs: [
      { q: "I already claimed my GBP — what's missing?", a: "Most businesses fill out maybe 30% of available fields. We typically find 15–20 optimization opportunities on a 'complete' profile during our audit." },
      { q: "Do you need my login to manage this?", a: "We'll ask to be added as a manager on your profile — you remain the primary owner and can revoke access anytime." },
      { q: "How often do you post?", a: "2–4 times per week, including offers, updates, and photos. Consistency matters more than volume for this signal." },
    ],
    ctaHeading: "Want to See What's Missing From Your GBP?",
    ctaSubheading: "Get a free audit of your current Google Business Profile and a prioritized list of fixes.",
    heroImage: "/images/sub-service/google-business-profile-optimization-hero.webp",
    heroImageAlt: "Google Business Profile optimization illustration",
  },
  {
    slug: "google-maps-ranking",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Google Maps Ranking",
    metaTitle: "Google Maps Ranking Service | Projoy Web Solutions",
    metaDescription:
      "Systematic Google Maps ranking improvement through proximity, relevance, and prominence optimization. Track your 3-pack position weekly.",
    heading: "Get Found First on Google Maps",
    subheading:
      "Google Maps ranking comes down to three factors: relevance, distance, and prominence. We systematically optimize all three so you show up when it matters.",
    accentColor: "accent",
    stats: [
      { value: "3-Pack", label: "Target Position" },
      { value: "Weekly", label: "Rank Tracking" },
      { value: "60–90", label: "Days to Results" },
    ],
    benefits: [
      { title: "Relevance Optimization", description: "We align your categories, keywords, and descriptions with exactly what your customers search for." },
      { title: "Prominence Building", description: "Reviews, citations, and engagement signals are systematically built to increase your overall authority." },
      { title: "Weekly Rank Tracking", description: "We track your position for target keywords every week so you always know exactly where you stand." },
      { title: "Competitor Gap Analysis", description: "We analyze what's working for businesses outranking you and close those specific gaps." },
    ],
    process: [
      { title: "Ranking Baseline", description: "We document your current position for all target keywords across your service area.", timeline: "Week 1" },
      { title: "Signal Optimization", description: "Relevance, citations, and review signals are all addressed systematically.", timeline: "Week 1–8" },
      { title: "Weekly Tracking", description: "Rankings are checked weekly with monthly summary reports.", timeline: "Ongoing" },
      { title: "Iterate & Improve", description: "Strategy adjusts based on what the ranking data shows is working.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Weekly keyword rank tracking",
      "Monthly ranking report with trend data",
      "Competitor position analysis",
      "Prioritized action plan each month",
    ],
    faqs: [
      { q: "What's the Google 3-pack?", a: "It's the box of 3 local business listings with a map that appears above organic search results for local queries — the most visible position in local search." },
      { q: "Why do rankings vary by location?", a: "Google Maps results are hyper-local — your ranking can differ block by block. We track this and target the areas that matter most for your business." },
      { q: "What if a competitor outranks me unfairly?", a: "We can flag policy violations to Google, but our focus is on building your own signals strong enough that ranking position becomes a non-issue." },
    ],
    ctaHeading: "Curious Where You Currently Rank?",
    ctaSubheading: "Get a free ranking check for your top keywords and a realistic timeline to improve them.",
    heroImage: "/images/sub-service/google-maps-ranking-hero.webp",
    heroImageAlt: "Google Maps ranking illustration",
  },
  {
    slug: "citation-building",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Citation Building",
    metaTitle: "Local Citation Building Service | Projoy Web Solutions",
    metaDescription:
      "Consistent NAP citation building across 50+ high-authority directories. Fix existing citation errors that are suppressing your local rankings.",
    heading: "Consistent Citations Across 50+ Directories",
    subheading:
      "Inconsistent business listings are one of the most common — and most overlooked — reasons local rankings stall. We fix and build citations systematically.",
    accentColor: "accent",
    stats: [
      { value: "50+", label: "Directories Covered" },
      { value: "100%", label: "NAP Consistency" },
      { value: "20+", label: "New Citations / Month" },
    ],
    benefits: [
      { title: "Citation Audit & Cleanup", description: "We find every existing listing of your business — including old addresses and duplicate listings — and correct or remove them." },
      { title: "High-Authority Directory Submissions", description: "We submit to the directories that actually move rankings: Yelp, Bing Places, Apple Maps, and industry-specific sites." },
      { title: "NAP Consistency Monitoring", description: "Your Name, Address, and Phone number stay identical across every listing — inconsistency confuses Google and suppresses rankings." },
      { title: "Industry-Specific Citations", description: "Beyond general directories, we target niche directories specific to your industry for stronger relevance signals." },
    ],
    process: [
      { title: "Citation Audit", description: "We find every existing online listing of your business, including errors and duplicates.", timeline: "Week 1" },
      { title: "Cleanup", description: "Incorrect or duplicate listings are corrected or removed.", timeline: "Week 1–2" },
      { title: "New Submissions", description: "We submit to 20+ new high-authority directories.", timeline: "Week 2–4" },
      { title: "Ongoing Monitoring", description: "Monthly checks ensure consistency is maintained as listings update.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Full citation audit report",
      "Cleanup of inconsistent/duplicate listings",
      "20+ new directory submissions",
      "Monthly consistency monitoring",
    ],
    faqs: [
      { q: "What is NAP consistency?", a: "NAP stands for Name, Address, Phone number. When these details differ across directories, Google has less confidence in your business data — which can suppress your rankings." },
      { q: "How many citations do I actually need?", a: "Quality matters more than quantity. We focus on 50+ high-authority, relevant directories rather than spamming hundreds of low-quality sites." },
      { q: "I've moved locations — can you update everything?", a: "Yes — this is one of the most common and most damaging citation issues. We'll find every old listing and get your new address updated everywhere." },
    ],
    ctaHeading: "Not Sure If Your Citations Are Hurting You?",
    ctaSubheading: "Get a free citation audit and find out exactly where your listings are inconsistent.",
    heroImage: "/images/sub-service/citation-building-hero.webp.webp",
    heroImageAlt: "Citation building illustration",
  },
  {
    slug: "reputation-management",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Reputation Management",
    metaTitle: "Online Reputation Management Service | Projoy Web Solutions",
    metaDescription:
      "Review acquisition systems and reputation monitoring across Google, Yelp, and Facebook. Build a 4.5+ star average ethically and consistently.",
    heading: "Build a Review Profile That Builds Trust and Rankings",
    subheading:
      "Reviews are both a ranking signal and the first thing customers check before calling. We build an ethical, consistent system for growing yours.",
    accentColor: "accent",
    stats: [
      { value: "4.5+", label: "Target Star Average" },
      { value: "+25", label: "Avg. Reviews in 90 Days" },
      { value: "100%", label: "Ethical Methods" },
    ],
    benefits: [
      { title: "Automated Review Requests", description: "SMS and email review requests sent at the right moment — right after a positive service interaction, when customers are most likely to respond." },
      { title: "Response Templates for Every Review", description: "We respond professionally to every review, positive or negative, protecting your reputation and showing prospects you're engaged." },
      { title: "Multi-Platform Monitoring", description: "Google, Yelp, and Facebook reviews are all tracked in one place so nothing slips through unnoticed." },
      { title: "Negative Review Recovery", description: "We have a tested process for responding to and, where appropriate, resolving negative reviews before they damage your reputation." },
    ],
    process: [
      { title: "Reputation Audit", description: "We assess your current review profile across all platforms.", timeline: "Week 1" },
      { title: "System Setup", description: "Review request automation is configured and tested.", timeline: "Week 1–2" },
      { title: "Active Monitoring", description: "All new reviews are tracked and responded to within 24 hours.", timeline: "Ongoing" },
      { title: "Monthly Reporting", description: "You receive a summary of review growth and sentiment trends.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Automated review request system",
      "Response to every review within 24 hours",
      "Monthly reputation report",
      "Negative review recovery protocol",
    ],
    faqs: [
      { q: "Can you get me fake reviews?", a: "No. We only use 100% ethical, Google-approved methods. Fake reviews violate platform policies and risk having your entire profile suspended — we never put your business at that risk." },
      { q: "What if I get a negative review?", a: "We respond professionally and, where appropriate, take the conversation offline to resolve it. Many negative reviews can be turned into a demonstration of good customer service." },
      { q: "How do you get customers to actually leave reviews?", a: "Timing and ease. We send a simple, direct request right after a positive interaction with a one-click link — this alone dramatically increases response rates." },
    ],
    ctaHeading: "Want More Reviews Without Doing the Asking Yourself?",
    ctaSubheading: "Get a free reputation audit and see exactly how your review profile compares to competitors.",
    heroImage: "/images/sub-service/reputation-management-hero.webp",
    heroImageAlt: "Reputation management illustration",
  },
  {
    slug: "geo-tagged-images",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Geo-Tagged Image Strategy",
    metaTitle: "Geo-Tagged Image SEO Service | Projoy Web Solutions",
    metaDescription:
      "Geo-tagged image uploads with embedded GPS metadata for stronger local relevance signals. An underused but highly effective Google Maps ranking tactic.",
    heading: "The Underused Ranking Signal Most Agencies Skip",
    subheading:
      "Geo-tagged images embed location data directly into photo metadata — a relevance signal Google reads but most businesses never use.",
    accentColor: "accent",
    stats: [
      { value: "4–8", label: "Images / Month" },
      { value: "GPS", label: "Embedded Metadata" },
      { value: "Underused", label: "By Competitors" },
    ],
    benefits: [
      { title: "GPS Metadata Embedding", description: "We embed precise latitude and longitude coordinates into each image's EXIF data before upload, signaling location relevance to Google." },
      { title: "Keyword-Optimized Filenames", description: "Each image filename and alt text is optimized for your target local keywords before upload." },
      { title: "Consistent Upload Schedule", description: "Regular uploads (4–8 per month) signal an active, legitimate business — another factor in Google's ranking algorithm." },
      { title: "Authentic, On-Location Content", description: "We guide you on capturing real photos at your business location for authenticity that stock photos can't replicate." },
    ],
    process: [
      { title: "Photo Audit", description: "We review your current GBP photos and identify gaps.", timeline: "Week 1" },
      { title: "Geo-Tagging Setup", description: "We establish your business's exact coordinates for metadata embedding.", timeline: "Week 1" },
      { title: "Monthly Uploads", description: "4–8 geo-tagged images are processed and uploaded monthly.", timeline: "Ongoing" },
      { title: "Performance Tracking", description: "We monitor how photo engagement correlates with ranking movement.", timeline: "Ongoing" },
    ],
    deliverables: [
      "GPS metadata embedding for all images",
      "Keyword-optimized filenames and alt text",
      "4–8 image uploads per month",
      "Photo strategy guidance for your team",
    ],
    faqs: [
      { q: "Do I need a professional photographer?", a: "No — authentic phone photos often perform just as well as professional shots for this purpose. What matters is the metadata and consistency, not production value." },
      { q: "How much does this actually affect rankings?", a: "It's one signal among many, not a silver bullet — but it's a free, easy win that most competitors aren't using, which makes it disproportionately valuable." },
      { q: "Can you geo-tag photos I already have?", a: "Yes, as long as they were taken at your business location. We can also tag images of your team, products, or storefront." },
    ],
    ctaHeading: "Want This Easy Ranking Win Added to Your Strategy?",
    ctaSubheading: "This works best combined with full GBP optimization — let's talk about your complete local SEO picture.",
    heroImage: "/images/sub-service/geo-tagged-image-strategy-hero.webp",
    heroImageAlt: "Geo-tagged image strategy illustration",
  },

  /* ───────────────── AI SOLUTIONS SUB-SERVICES ───────────────── */
  {
    slug: "ai-chatbots",
    parentSlug: "ai-solutions",
    parentLabel: "AI Solutions",
    parentHref: "/services/ai-solutions",
    title: "AI Chatbots",
    metaTitle: "AI Chatbot Development Service | Projoy Web Solutions",
    metaDescription:
      "Custom AI chatbots trained on your business data using GPT-4o and Claude. Qualify leads and answer questions 24/7 on your website.",
    heading: "An AI Chatbot That Actually Knows Your Business",
    subheading:
      "We train a custom chatbot on your services, pricing, and FAQs — deployed on your website to qualify leads and answer questions while you sleep.",
    accentColor: "brand",
    stats: [
      { value: "24/7", label: "Availability" },
      { value: "3×", label: "Lead Qualification" },
      { value: "<1s", label: "Response Time" },
    ],
    benefits: [
      { title: "Trained on Your Actual Data", description: "Not a generic chatbot — it's grounded in your services, pricing, and FAQs using retrieval-augmented generation for accuracy." },
      { title: "Lead Qualification Built-In", description: "The bot asks the right questions to qualify visitors before they ever reach your inbox, saving your team hours." },
      { title: "Seamless Handoff to Humans", description: "When a conversation needs a human touch, the bot recognizes it and routes to your team with full context." },
      { title: "Calendar Integration", description: "Qualified leads can book a call directly through the chat — no back-and-forth emails required." },
    ],
    process: [
      { title: "Data Collection", description: "We gather your services, FAQs, and pricing information to train the bot.", timeline: "Week 1" },
      { title: "Conversation Design", description: "We map out qualification questions and conversation flows.", timeline: "Week 1–2" },
      { title: "Build & Test", description: "The chatbot is built, integrated, and tested against real scenarios.", timeline: "Week 2–3" },
      { title: "Launch & Monitor", description: "We monitor early conversations and refine responses based on real usage.", timeline: "Week 3+" },
    ],
    deliverables: [
      "Fully trained AI chatbot on your website",
      "Lead qualification flow",
      "Calendar booking integration",
      "Monthly conversation analytics",
    ],
    faqs: [
      { q: "Will it give wrong answers to customers?", a: "We ground every response in your actual business data and test extensively against edge cases. If a question falls outside its knowledge, it gracefully redirects to a human." },
      { q: "Can it book appointments directly?", a: "Yes — we integrate with Calendly, Cal.com, or your existing booking system so qualified leads can schedule without leaving the chat." },
      { q: "How much does it cost to run monthly?", a: "Typically $10–$80/month in API costs for most small business volumes — we'll give you a specific estimate based on your expected traffic." },
    ],
    ctaHeading: "Tired of Answering the Same Questions Every Day?",
    ctaSubheading: "Let's see if an AI chatbot makes sense for your business — book a free 30-minute assessment.",
    heroImage: "/images/sub-service/ai-chatbots-hero.webp",
    heroImageAlt: "AI chatbot illustration",
  },
  {
    slug: "automation",
    parentSlug: "ai-solutions",
    parentLabel: "AI Solutions",
    parentHref: "/services/ai-solutions",
    title: "Business Process Automation",
    metaTitle: "Business Process Automation Service | Projoy Web Solutions",
    metaDescription:
      "AI-powered workflow automation connecting your CRM, email, and calendar. Automate lead routing, follow-ups, and reporting.",
    heading: "Automate the Repetitive Work Eating Your Team's Time",
    subheading:
      "We connect AI to your existing tools — CRM, email, calendar — to automate lead routing, follow-ups, and reporting that currently eat hours of manual work.",
    accentColor: "brand",
    stats: [
      { value: "10h+", label: "Saved Weekly" },
      { value: "Zero", label: "Manual Data Entry" },
      { value: "2–4 wk", label: "Setup Time" },
    ],
    benefits: [
      { title: "Smart Lead Routing", description: "Incoming leads are automatically scored and routed to the right team member based on criteria you define." },
      { title: "Automated Follow-Up Sequences", description: "AI-personalized follow-up emails go out automatically based on lead behavior, without feeling robotic." },
      { title: "Report Generation", description: "Weekly and monthly reports are compiled automatically from your data sources — no manual spreadsheet work." },
      { title: "Connects Your Existing Tools", description: "We work with what you already use — HubSpot, Notion, Slack, Google Workspace — rather than forcing a new platform." },
    ],
    process: [
      { title: "Workflow Audit", description: "We map your current manual processes and identify the highest-ROI automation candidates.", timeline: "Week 1" },
      { title: "Automation Design", description: "We design the exact logic and integrations needed for each workflow.", timeline: "Week 1–2" },
      { title: "Build & Connect", description: "Automations are built and connected to your existing tools.", timeline: "Week 2–3" },
      { title: "Test & Refine", description: "We run automations in parallel with manual processes before full cutover.", timeline: "Week 3–4" },
    ],
    deliverables: [
      "Fully configured automation workflows",
      "Integration with your existing tools",
      "Documentation for your team",
      "30-day monitoring and refinement",
    ],
    faqs: [
      { q: "What tools do you typically connect?", a: "HubSpot, Salesforce, Notion, Slack, Google Workspace, and most tools with a public API. We'll confirm compatibility during the audit." },
      { q: "Will this replace my team?", a: "No — it removes the repetitive work so your team can focus on the conversations and decisions that actually need a human." },
      { q: "What if something breaks?", a: "We build monitoring into every automation so you're alerted if something fails, and we offer maintenance retainers for ongoing support." },
    ],
    ctaHeading: "Spending Too Much Time on Manual, Repetitive Work?",
    ctaSubheading: "Tell us what's eating your team's time — we'll show you what's realistically automatable.",
    heroImage: "/images/sub-service/business-process-automation-hero.webp",
    heroImageAlt: "Business process automation illustration",
  },
  {
    slug: "ai-powered-saas",
    parentSlug: "ai-solutions",
    parentLabel: "AI Solutions",
    parentHref: "/services/ai-solutions",
    title: "AI-Powered SaaS Development",
    metaTitle: "AI-Powered SaaS Development Service | Projoy Web Solutions",
    metaDescription:
      "Full-stack SaaS applications with AI at the core. Next.js, authentication, billing, and AI features built from idea to deployed product.",
    heading: "SaaS Products With AI at the Core, Not Bolted On",
    subheading:
      "We build full-stack SaaS applications where AI isn't a feature added later — it's architected into the product from day one.",
    accentColor: "brand",
    stats: [
      { value: "6–10 wk", label: "MVP Timeline" },
      { value: "AI-Native", label: "Architecture" },
      { value: "100%", label: "Code Ownership" },
    ],
    benefits: [
      { title: "AI-Native Architecture", description: "Vector databases, embeddings, and model orchestration are designed into the foundation, not retrofitted." },
      { title: "Full Product Stack", description: "Authentication, billing, and your AI features are all built together as one coherent product, not stitched-together pieces." },
      { title: "Cost-Aware Model Selection", description: "We architect prompt and caching strategies so your AI costs scale predictably with usage and revenue." },
      { title: "Production-Grade From Day One", description: "Built with the same rigor as our standard SaaS development — proper error handling, rate limiting, and monitoring." },
    ],
    process: [
      { title: "Product & AI Scoping", description: "We define the core product and exactly where AI adds defensible value.", timeline: "Week 1" },
      { title: "Architecture Design", description: "Database, AI pipeline, and application architecture are finalized.", timeline: "Week 1–2" },
      { title: "Build", description: "Core product and AI features are built in parallel.", timeline: "Week 2–8" },
      { title: "Test & Launch", description: "Extensive testing of AI behavior under real-world conditions before launch.", timeline: "Week 8–10" },
    ],
    deliverables: [
      "Full-stack AI-powered SaaS application",
      "AI pipeline documentation",
      "Authentication and billing systems",
      "Cost monitoring for AI usage",
    ],
    faqs: [
      { q: "How is this different from regular SaaS development plus an AI integration?", a: "When AI is core to the product, the entire architecture — data model, caching, latency budget — needs to be designed around it from the start. Retrofitting AI into a non-AI architecture usually creates technical debt." },
      { q: "What if my AI feature idea isn't technically feasible yet?", a: "We'll tell you honestly during scoping. Part of our job is separating what's genuinely possible today from what sounds good in a pitch deck." },
      { q: "Can you help me validate the idea before building?", a: "Yes — we often recommend a scoped prototype to validate core AI assumptions before committing to full MVP development." },
    ],
    ctaHeading: "Building an AI Product and Need a Technical Partner?",
    ctaSubheading: "Book a free scoping call — we'll give you an honest assessment of feasibility, timeline, and cost.",
    heroImage: "/images/sub-service/ai-powered-saas-development-hero.webp",
    heroImageAlt: "AI-powered SaaS development illustration",
  },
];

export function getSubServiceBySlug(
  parentSlug: string,
  slug: string
): SubServiceData | undefined {
  return subServices.find(
    (s) => s.parentSlug === parentSlug && s.slug === slug
  );
}

export function getSubServicesByParent(
  parentSlug: SubServiceData["parentSlug"]
): SubServiceData[] {
  return subServices.filter((s) => s.parentSlug === parentSlug);
}

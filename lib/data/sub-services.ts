// lib/data/sub-services.ts

export interface SubServiceFAQ {
  q: string;
  a: string;
}

export interface SubServiceData {
  slug: string;
  parentSlug: "web-development" | "local-seo" | "technical-seo";
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
    slug: "business-websites",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Business Websites",
    metaTitle: "Business Websites | LocalLeads",
    metaDescription:
      "Professional business websites built for lead generation and brand authority. Fast-loading, mobile-first, and designed to convert.",
    heading: "A Professional Website That Actually Brings in Customers",
    subheading:
      "We design and build business websites for local service companies — every page, form, and word is structured to turn visitors into leads.",
    accentColor: "accent",
    stats: [
      { value: "3–5 wk", label: "Typical Delivery" },
      { value: "<2s", label: "Load Time" },
      { value: "Mobile-First", label: "Responsive Design" },
    ],
    benefits: [
      { title: "Built for Local Customers", description: "Clear service pages, location signals, and contact forms positioned for the people most likely to call." },
      { title: "Speed That Keeps Visitors", description: "Under 2-second load times with optimized assets and minimal code — because most mobile visitors leave if a page takes longer than 3 seconds." },
      { title: "Lead-Focused Layout", description: "Phone numbers, contact forms, and calls-to-action are visible above the fold so visitors don't have to hunt for how to reach you." },
      { title: "Easy to Update Later", description: "Clean, documented code and a modular structure mean we — or any developer — can add pages or features without reworking the whole site." },
    ],
    process: [
      { title: "Discovery & Content Plan", description: "We map your services, service area, and key pages before any design work begins.", timeline: "Week 1" },
      { title: "Design & Layout", description: "A clean, conversion-focused design tailored to your brand and industry.", timeline: "Week 1–2" },
      { title: "Development & Content", description: "Pages are built with your copy, images, and contact forms.", timeline: "Week 2–4" },
      { title: "Launch & Handoff", description: "Testing, deployment, and source code handoff with documentation.", timeline: "Week 4" },
    ],
    deliverables: [
      "Fully functional business website",
      "Mobile-responsive design",
      "Contact forms and phone integration",
      "Source code and deployment configuration",
      "Basic performance optimization",
    ],
    faqs: [
      { q: "How many pages are included?", a: "A standard business website includes up to 8 core pages: Home, About, Services, Service Area, Contact, and any additional service-specific pages you need." },
      { q: "Can I update the content myself?", a: "Yes. We can integrate a simple headless CMS so you can update text and images without touching code, or we can handle updates for you." },
      { q: "Will this work on mobile?", a: "Every site we build is mobile-first — designed for phones before desktops, because over 60% of your visitors will arrive on mobile." },
    ],
    ctaHeading: "Need a Website That Works as Hard as You Do?",
    ctaSubheading: "Tell us about your business and goals — we'll outline a site structure designed to bring in leads.",
    heroImage: "/images/sub-service/business-websites-hero.webp",
    heroImageAlt: "Business website development illustration",
  },
  {
    slug: "custom-websites",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Custom Websites",
    metaTitle: "Custom Websites | LocalLeads",
    metaDescription:
      "Bespoke websites built with modern frameworks for businesses that need more than a template. Fast, maintainable, and engineered for performance.",
    heading: "Websites Built From Scratch for Businesses That Need More Than a Template",
    subheading:
      "If your business has unique requirements — custom functionality, integrations, or specific user flows — a template website won't cut it. We build from the ground up.",
    accentColor: "brand",
    stats: [
      { value: "95+", label: "PageSpeed Score" },
      { value: "<2s", label: "Load Time" },
      { value: "3–5 wk", label: "Avg. Delivery" },
    ],
    benefits: [
      { title: "Built for Your Exact Workflow", description: "No shoehorning your process into a template. We design and build the exact functionality, forms, and user flows your business actually needs." },
      { title: "Performance-First Foundation", description: "Fast load times, clean code, and modern architecture are built in from the start — not retrofitted after launch." },
      { title: "Fully Maintainable Code", description: "Well-documented, modular code that any future developer can understand and extend without reworking everything." },
      { title: "Integration-Ready", description: "Clean API connections and third-party integrations designed to work with your existing tools and workflows." },
    ],
    process: [
      { title: "Discovery & Scope", description: "We map your exact requirements, integrations, and user flows before writing any code.", timeline: "Week 1" },
      { title: "Architecture & Design", description: "The technical architecture and visual design are finalized and approved.", timeline: "Week 1–2" },
      { title: "Build & Test", description: "Your site is built component by component, tested across devices and browsers.", timeline: "Week 2–4" },
      { title: "Launch & Handoff", description: "Performance testing, deployment, and full source code handoff with documentation.", timeline: "Week 4" },
    ],
    deliverables: [
      "Full source code (version-controlled repository)",
      "Component and feature documentation",
      "Deployment configuration",
      "Performance-focused Core Web Vitals review",
      "30-day post-launch support",
    ],
    faqs: [
      { q: "Why not just use a template website?", a: "Templates are fine for basic presence, but they're built for generic use cases. If you have custom workflows, specific integrations, or unique functionality, a custom build avoids the workarounds and limitations that slow you down." },
      { q: "How long does a custom site take?", a: "Most business-focused custom sites take 3–5 weeks from kickoff to launch. Complex applications with custom functionality can take 6–10 weeks." },
      { q: "Will I be able to update the content?", a: "Yes. We can integrate a headless CMS for content management, or build admin-friendly interfaces for custom data — you won't need to touch code to make updates." },
    ],
    ctaHeading: "Ready for a Website Built Around Your Business?",
    ctaSubheading: "Get a free scoping call. We'll map your requirements and show you exactly what a custom build would include.",
    heroImage: "/images/sub-service/custom-websites-hero.webp",
    heroImageAlt: "Custom website development illustration",
  },
  {
    slug: "landing-pages",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Landing Pages",
    metaTitle: "Landing Pages | LocalLeads",
    metaDescription:
      "CRO-optimized landing pages built with modern frameworks for ad campaigns and product launches. Fast-loading, conversion-focused, and A/B test ready.",
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
      { title: "Fast Enough to Lower Your CPC", description: "Page speed directly affects ad quality scores. Our pages load in under 1.5 seconds." },
      { title: "Objection-Handling Structure", description: "We sequence content to answer the questions visitors have right when they have them — social proof, then features, then FAQ, then CTA." },
      { title: "A/B Test Ready", description: "Pages are built with variant testing in mind from day one, so you can optimize headlines and CTAs without a rebuild." },
    ],
    process: [
      { title: "Conversion Audit", description: "We review your offer, audience, and traffic source to define the page strategy.", timeline: "Day 1–2" },
      { title: "Copy & Wireframe", description: "Conversion-focused copy and a wireframe are drafted and approved before design.", timeline: "Day 3–5" },
      { title: "Design & Build", description: "High-fidelity design and development happen in parallel.", timeline: "Week 1–2" },
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
    heroImage: "/images/sub-service/landing-pages-hero.webp",
    heroImageAlt: "Landing page development illustration",
  },
  {
    slug: "web-applications",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Web Applications",
    metaTitle: "Web Applications | LocalLeads",
    metaDescription:
      "Full-featured web applications built with modern frameworks. Real-time data, offline capabilities, and scalable architecture for growing businesses.",
    heading: "Web Applications That Work Like Desktop Software, Anywhere",
    subheading:
      "We build full-featured web applications with real-time data, offline capabilities, and clean interfaces that your team or customers will actually use.",
    accentColor: "brand",
    stats: [
      { value: "Real-time", label: "Data Sync" },
      { value: "Offline-Ready", label: "Capability" },
      { value: "2–6 mo", label: "Development Time" },
    ],
    benefits: [
      { title: "Real-Time Data and Collaboration", description: "Multi-user applications with live data synchronization — no refreshing required to see the latest updates." },
      { title: "Offline-First Capability", description: "Progressive web application architecture means your application works without a connection and syncs when back online." },
      { title: "Role-Based Access and Security", description: "Granular permission controls, secure authentication, and data isolation between users or organizations." },
      { title: "Scalable from Day One", description: "Architecture designed to handle growth — more users, more data, more features — without rearchitecting the foundation." },
    ],
    process: [
      { title: "Product Definition", description: "We define the core feature set, user roles, and data model for your application.", timeline: "Week 1–2" },
      { title: "Architecture and Design", description: "Technical architecture, database schema, and UI design are finalized.", timeline: "Week 2–4" },
      { title: "Core Build", description: "Primary features are built and connected — authentication, data layer, and core workflows.", timeline: "Week 4–16" },
      { title: "Testing and Launch", description: "User testing, security review, and production deployment with monitoring.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Full-stack web application source code",
      "Database schema and migrations",
      "API documentation",
      "Authentication and role management",
      "Production deployment and monitoring setup",
    ],
    faqs: [
      { q: "What makes a web application different from a website?", a: "A web application has interactive functionality, user accounts, and dynamic data — like a tool people log into and use. A website is primarily informational or marketing-focused." },
      { q: "Can you build on our existing platform?", a: "Yes. We can extend existing applications with new features, or build new modules that integrate with your current system." },
      { q: "What technologies do you use?", a: "We primarily build with React and modern JavaScript frameworks, connecting to REST or GraphQL APIs with PostgreSQL or similar databases — but we adapt to your stack if needed." },
    ],
    ctaHeading: "Have an Application Idea Worth Building?",
    ctaSubheading: "Book a scoping call. We'll map the feature set, architecture, and a realistic timeline before you commit.",
    heroImage: "/images/sub-service/web-applications-hero.webp",
    heroImageAlt: "Web application development illustration",
  },
  {
    slug: "saas-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "SaaS Development",
    metaTitle: "SaaS Development | LocalLeads",
    metaDescription:
      "End-to-end SaaS development with modern frameworks, authentication, billing, and database architecture. From validated idea to production-ready product.",
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
      { title: "Authentication Done Right", description: "Secure sign-up, login, and session management using battle-tested libraries — not custom-rolled." },
      { title: "Subscription Billing Built-In", description: "Billing integration for subscriptions, usage-based billing, and webhooks — so you can start charging customers from day one." },
      { title: "Scalable Database Architecture", description: "ORM with PostgreSQL gives you a type-safe, scalable data layer that won't need rearchitecting as you grow." },
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
      { q: "Who owns the code and infrastructure?", a: "You do, completely. We set up your own billing, database, and hosting accounts — we never hold your production infrastructure hostage." },
    ],
    ctaHeading: "Have a SaaS Idea Ready to Build?",
    ctaSubheading: "Book a free scoping call. We'll help you define the leanest possible MVP and give you a realistic timeline and quote.",
    heroImage: "/images/sub-service/saas-development-hero.webp",
    heroImageAlt: "SaaS application development illustration",
  },
  {
    slug: "custom-dashboards",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Custom Dashboards",
    metaTitle: "Custom Dashboards | LocalLeads",
    metaDescription:
      "Internal tools, client portals, and admin panels built with modern frameworks. Real-time data, role-based access, and clean, usable interfaces.",
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
    heroImage: "/images/sub-service/custom-dashboards-hero.webp",
    heroImageAlt: "Custom dashboard development illustration",
  },
  {
    slug: "website-redesign",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Website Redesign",
    metaTitle: "Website Redesign | LocalLeads",
    metaDescription:
      "Complete website redesigns that preserve your SEO rankings while modernizing design, speed, and user experience. Migration-safe rebuilds.",
    heading: "A New Website Without Losing What Already Works",
    subheading:
      "We redesign websites while protecting your existing rankings and traffic — migrating content, setting up redirects, and improving the core experience.",
    accentColor: "accent",
    stats: [
      { value: "0", label: "Ranking Drops" },
      { value: "100%", label: "URL Preservation" },
      { value: "3–6 wk", label: "Redesign Time" },
    ],
    benefits: [
      { title: "SEO-Safe Migration", description: "We map every existing URL to its new counterpart and set up 301 redirects — so rankings, backlinks, and traffic are preserved through the redesign." },
      { title: "Modern Design, Same Goals", description: "A fresh visual design that actually serves your conversion goals — not just looks good in a portfolio." },
      { title: "Performance Upgrade Built In", description: "Redesigns are the perfect time to fix slow load times, outdated code, and poor performance that have been holding you back." },
      { title: "Content Strategy Included", description: "We help you identify what content to keep, rewrite, or remove — so the new site is leaner and more effective than the old one." },
    ],
    process: [
      { title: "Content and URL Audit", description: "We document every existing page, its traffic value, and its new destination.", timeline: "Week 1" },
      { title: "Design and Content Strategy", description: "New design direction and content plan are approved before development starts.", timeline: "Week 1–2" },
      { title: "Build and Migration", description: "The new site is built and all content is migrated with proper redirects.", timeline: "Week 2–5" },
      { title: "Launch and Validation", description: "Traffic is monitored post-launch to confirm redirects and rankings are stable.", timeline: "Week 5–6" },
    ],
    deliverables: [
      "Redesigned website with preserved content",
      "Complete 301 redirect map",
      "SEO validation post-launch",
      "Performance comparison report",
      "Source code and deployment configuration",
    ],
    faqs: [
      { q: "Will my rankings drop after a redesign?", a: "Not if we do it right. We map every existing URL, set up proper redirects, and carry over all on-page signals. Most of our redesigns see rankings improve because the new site is faster and better optimized." },
      { q: "What happens to my existing content?", a: "We carry over high-performing content, rewrite what's outdated, and remove what's no longer serving your goals — all with proper redirects to maintain traffic." },
      { q: "Can you redesign just the homepage?", a: "Yes, but full-site redesigns are usually more cost-effective and consistent. We can scope a partial redesign if that's what your site needs." },
    ],
    ctaHeading: "Ready for a Redesign That Actually Improves Performance?",
    ctaSubheading: "Get a free content and SEO audit of your current site — we'll show you exactly what a redesign would preserve and improve.",
    heroImage: "/images/sub-service/website-redesign-hero.webp",
    heroImageAlt: "Website redesign illustration",
  },
  {
    slug: "performance-optimization",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "Performance Optimization",
    metaTitle: "Performance Optimization | LocalLeads",
    metaDescription:
      "Systematic performance optimization for existing websites. Core Web Vitals fixes, image optimization, caching, and measurable load time improvements.",
    heading: "Make Your Existing Site Faster Without Rebuilding It",
    subheading:
      "You don't always need a new website. We diagnose and fix performance bottlenecks — image bloat, render-blocking code, server configuration — to get measurable speed gains.",
    accentColor: "brand",
    stats: [
      { value: "50%+", label: "Typical Load Improvement" },
      { value: "<2s", label: "Target Load Time" },
      { value: "1–2 wk", label: "Optimization Time" },
    ],
    benefits: [
      { title: "Measurable Speed Gains", description: "We don't guess — every optimization is measured before and after, so you see exactly what changed and by how much." },
      { title: "Core Web Vitals Fixes", description: "LCP, INP, and CLS issues are identified and resolved with specific, targeted changes — not generic advice." },
      { title: "Image and Asset Optimization", description: "Modern formats, lazy loading, and responsive image delivery cut load times without sacrificing quality." },
      { title: "Server and Caching Improvements", description: "CDN configuration, browser caching headers, and server response time optimizations that compound with frontend fixes." },
    ],
    process: [
      { title: "Performance Audit", description: "We run a full audit using real-user and lab data to identify every bottleneck.", timeline: "Day 1–2" },
      { title: "Fixes Implementation", description: "Image optimization, code splitting, caching rules, and server fixes are applied.", timeline: "Week 1" },
      { title: "Testing and Validation", description: "We retest after every change to confirm improvements are real and stable.", timeline: "Week 1–2" },
      { title: "Monitoring Setup", description: "Performance monitoring is set up so you're alerted if regressions appear later.", timeline: "Week 2" },
    ],
    deliverables: [
      "Full performance audit report",
      "Implemented optimizations with before/after metrics",
      "Core Web Vitals improvement report",
      "Performance monitoring setup",
    ],
    faqs: [
      { q: "How do you measure improvement?", a: "We use performance tools and real-user monitoring data before and after every change. You'll see the exact numbers." },
      { q: "Will optimization break my site?", a: "No — we test every change in staging first and verify in production. Optimizations are incremental and reversible." },
      { q: "How long until I see results?", a: "Most optimizations show measurable improvement within 1–2 weeks. The full audit-to-deployment process typically takes 2 weeks." },
    ],
    ctaHeading: "How Fast Is Your Site Really?",
    ctaSubheading: "Get a free performance audit — we'll show you exactly what's slowing your site down and how much faster it could be.",
    heroImage: "/images/sub-service/performance-optimization-hero.webp",
    heroImageAlt: "Performance optimization illustration",
  },
  {
    slug: "seo-friendly-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    parentHref: "/services/web-development",
    title: "SEO-Friendly Development",
    metaTitle: "SEO-Friendly Development | LocalLeads",
    metaDescription:
      "Websites built with SEO best practices at the code level. Semantic HTML, structured data, clean URLs, and crawlability — all built in from day one.",
    heading: "A Website That Search Engines Can Read and Rank",
    subheading:
      "Most SEO issues are actually development issues. We build websites with the right HTML structure, metadata system, and crawlability — so the foundations are already solid.",
    accentColor: "accent",
    stats: [
      { value: "0", label: "Crawl Blockers" },
      { value: "100%", label: "Semantic HTML" },
      { value: "Built-In", label: "Structured Data" },
    ],
    benefits: [
      { title: "Semantic HTML by Default", description: "Every heading, list, and landmark is coded correctly from the start — not fixed with plugins after launch." },
      { title: "Metadata System Built In", description: "Dynamic title tags, meta descriptions, and social tags for every page type — consistent and controllable without code changes." },
      { title: "Clean URL Architecture", description: "Logical, keyword-rich URLs with proper redirects for any changes — no parameter mess or accidental duplicates." },
      { title: "Crawlability First", description: "Structured data, XML sitemaps, and clean internal linking make it easy for search engines to understand and index every page." },
    ],
    process: [
      { title: "SEO Architecture Planning", description: "We map your site structure, URL hierarchy, and metadata strategy before development starts.", timeline: "Week 1" },
      { title: "Build with SEO Standards", description: "Every component is built with semantic HTML and proper metadata support.", timeline: "Week 1–3" },
      { title: "Structured Data and Sitemaps", description: "Schema markup and XML sitemaps are generated and validated.", timeline: "Week 3" },
      { title: "Technical Validation", description: "We run an SEO crawl and fix any issues before launch.", timeline: "Week 3–4" },
    ],
    deliverables: [
      "Fully built, SEO-optimized website",
      "Metadata management system",
      "Schema markup implementation",
      "XML sitemap and robots.txt",
      "Technical SEO validation report",
    ],
    faqs: [
      { q: "What does 'SEO-friendly development' actually mean?", a: "It means the code structure, HTML, URLs, and metadata are built correctly from the start — not added later with plugins or hacks. It's harder to retrofit good SEO than to build it in." },
      { q: "Can you fix SEO issues on my existing site?", a: "Yes, but for existing sites we typically run a technical SEO audit first and then fix specific issues — that's a different engagement from building a new SEO-friendly site." },
      { q: "Does this guarantee rankings?", a: "No service can guarantee rankings — Google's algorithm is complex and competitive. What we guarantee is that the technical foundation is solid, which is a prerequisite for any ranking success." },
    ],
    ctaHeading: "Building a New Site? Start With the Right Foundation.",
    ctaSubheading: "Get a free technical SEO checklist for your project — we'll show you what to demand from any developer or platform.",
    heroImage: "/images/sub-service/seo-friendly-development-hero.webp",
    heroImageAlt: "SEO-friendly development illustration",
  },

  /* ───────────────── LOCAL SEO SUB-SERVICES ───────────────── */
  {
    slug: "google-business-profile",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Google Business Profile Optimization",
    metaTitle: "Google Business Profile Optimization | LocalLeads",
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
      { title: "Photo and Video Strategy", description: "Regular visual content uploaded on a schedule — a ranking signal most competitors neglect." },
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
    title: "Google Maps SEO",
    metaTitle: "Google Maps SEO | LocalLeads",
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
    heroImage: "/images/sub-service/google-maps-seo-hero.webp",
    heroImageAlt: "Google Maps SEO illustration",
  },
  {
    slug: "local-keyword-research",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Local Keyword Research",
    metaTitle: "Local Keyword Research | LocalLeads",
    metaDescription:
      "Hyper-local keyword research to find exactly what your customers are searching for. Service-area keywords, intent mapping, and priority scoring.",
    heading: "Find the Exact Phrases Your Local Customers Use",
    subheading:
      "Most businesses target keywords that are too broad or too competitive. We find the specific local terms your customers are actually typing — and tell you which ones to prioritize.",
    accentColor: "brand",
    stats: [
      { value: "200+", label: "Keywords Identified" },
      { value: "Service +", label: "Location Mapping" },
      { value: "Priority", label: "Scoring Included" },
    ],
    benefits: [
      { title: "Hyper-Local Term Discovery", description: "We find neighborhood-level, service-specific terms that competitors miss — the phrases that actually convert nearby customers." },
      { title: "Search Intent Mapping", description: "Every keyword is classified by intent — informational, navigational, or transactional — so you know which ones to target for leads." },
      { title: "Competition Gap Analysis", description: "We identify keywords competitors are ranking for that you're not, and vice versa — showing you where to compete and where to pivot." },
      { title: "Priority Scoring", description: "Keywords are scored by search volume, difficulty, and conversion potential so you can focus on the highest-impact targets first." },
    ],
    process: [
      { title: "Seed Keyword Discovery", description: "We identify your core services and service areas to build a seed keyword list.", timeline: "Day 1–2" },
      { title: "Expansion and Research", description: "Tools and manual research expand the list with local modifiers, synonyms, and question terms.", timeline: "Day 3–5" },
      { title: "Intent Classification", description: "Every keyword is mapped to search intent and funnel stage.", timeline: "Day 5–7" },
      { title: "Priority Scoring and Report", description: "Keywords are scored and delivered with recommended targeting order.", timeline: "Day 7–10" },
    ],
    deliverables: [
      "Expanded keyword list (200+ terms)",
      "Search intent classification",
      "Competition gap analysis",
      "Priority scoring and targeting roadmap",
    ],
    faqs: [
      { q: "How is local keyword research different from regular keyword research?", a: "Local research adds the location dimension — service area modifiers, neighborhood names, and 'near me' terms. It also considers ranking difficulty within a specific geographic area, which is very different from national competition." },
      { q: "What tools do you use for keyword research?", a: "We use a combination of SEO tools and manual SERP analysis — because automated tools often miss local nuance and actual search behavior." },
      { q: "How often should keyword research be updated?", a: "We recommend refreshing the keyword map every 6 months. Search behavior changes, new competitors appear, and seasonal terms shift — so the map should evolve too." },
    ],
    ctaHeading: "Not Sure What Your Customers Are Actually Searching For?",
    ctaSubheading: "Get a free sample keyword map for your business and see the local terms you might be missing.",
    heroImage: "/images/sub-service/local-keyword-research-hero.webp",
    heroImageAlt: "Local keyword research illustration",
  },
  {
    slug: "local-competitor-analysis",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Local Competitor Analysis",
    metaTitle: "Local Competitor Analysis | LocalLeads",
    metaDescription:
      "Deep competitor analysis for local SEO. Benchmark rankings, GBP performance, citations, and review profiles against your top local competitors.",
    heading: "Know Exactly What Your Competitors Are Doing in Local Search",
    subheading:
      "We analyze your top 5–10 local competitors across every local SEO signal — rankings, profile completeness, citations, reviews — and show you exactly where to compete and where to pivot.",
    accentColor: "brand",
    stats: [
      { value: "5–10", label: "Competitors Analyzed" },
      { value: "12+", label: "Signals Compared" },
      { value: "Gap", label: "Opportunity Map" },
    ],
    benefits: [
      { title: "Multi-Signal Benchmarking", description: "We compare your Google Business Profile completeness, citation count, review velocity, and ranking positions against your actual local competitors." },
      { title: "Gap Identification", description: "We show you exactly which signals competitors are winning on — and which ones they're neglecting that you can exploit." },
      { title: "Share of Voice Analysis", description: "We calculate how often you versus competitors appear in the local pack and map results for your target keywords." },
      { title: "Actionable Priority List", description: "The analysis isn't just a report — it's a prioritized list of specific actions to close each gap, ranked by impact and effort." },
    ],
    process: [
      { title: "Competitor Identification", description: "We identify your true local competitors — not just national brands, but the businesses actually competing for your customers.", timeline: "Day 1–3" },
      { title: "Signal Collection", description: "We gather data on rankings, GBP completeness, citations, reviews, and website authority for each competitor.", timeline: "Day 3–7" },
      { title: "Gap Analysis", description: "We compare every signal and identify where you're ahead, behind, or equal.", timeline: "Day 7–10" },
      { title: "Priority Roadmap", description: "You receive a ranked list of opportunities with estimated impact and effort for each.", timeline: "Day 10–14" },
    ],
    deliverables: [
      "Competitor comparison report",
      "Share of voice analysis",
      "Gap analysis by signal",
      "Prioritized opportunity roadmap",
    ],
    faqs: [
      { q: "Who are my real competitors?", a: "We identify the businesses that actually appear in your local pack and map results — not just any business in your industry. These are the ones actually competing for your customers." },
      { q: "How is this different from a regular SEO competitor analysis?", a: "Local competitor analysis focuses on the specific signals that drive local pack and Maps rankings — GBP completeness, citations, reviews, and proximity — not just backlinks and domain authority." },
      { q: "Can you track competitors over time?", a: "Yes. We recommend quarterly competitor reviews to track changes in their strategy and identify new gaps as they emerge." },
    ],
    ctaHeading: "Know Your Competition Before They Outrank You",
    ctaSubheading: "Get a free competitor snapshot — we'll show you the top 3 competitors in your area and where you stand.",
    heroImage: "/images/sub-service/local-competitor-analysis-hero.webp",
    heroImageAlt: "Local competitor analysis illustration",
  },
  {
    slug: "citation-building",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Citation & NAP Optimization",
    metaTitle: "Citation & NAP Optimization | LocalLeads",
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
      { title: "NAP Consistency Monitoring", description: "Your Name, Address, and Phone number stay identical across every listing — inconsistency confuses search engines and suppresses rankings." },
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
      { q: "What is NAP consistency?", a: "NAP stands for Name, Address, Phone number. When these details differ across directories, search engines have less confidence in your business data — which can suppress your rankings." },
      { q: "How many citations do I actually need?", a: "Quality matters more than quantity. We focus on 50+ high-authority, relevant directories rather than spamming hundreds of low-quality sites." },
      { q: "I've moved locations — can you update everything?", a: "Yes — this is one of the most common and most damaging citation issues. We'll find every old listing and get your new address updated everywhere." },
    ],
    ctaHeading: "Not Sure If Your Citations Are Hurting You?",
    ctaSubheading: "Get a free citation audit and find out exactly where your listings are inconsistent.",
    heroImage: "/images/sub-service/citation-building-hero.webp",
    heroImageAlt: "Citation and NAP optimization illustration",
  },
  {
    slug: "local-landing-pages",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Local Landing Pages",
    metaTitle: "Local Landing Pages | LocalLeads",
    metaDescription:
      "Location-specific landing pages for multi-area businesses. Service-area pages, city pages, and neighborhood pages built to rank and convert locally.",
    heading: "Rank and Convert in Every Neighborhood You Serve",
    subheading:
      "If you serve multiple cities or neighborhoods, generic pages won't cut it. We build location-specific landing pages optimized for each area you serve — with unique content, local signals, and clear conversion paths.",
    accentColor: "accent",
    stats: [
      { value: "1–2 wk", label: "Per Page" },
      { value: "Unique", label: "Content Per Area" },
      { value: "Local", label: "Signal Built In" },
    ],
    benefits: [
      { title: "Unique Content Per Location", description: "Each landing page has original, area-specific content — not duplicate templates with city names swapped in. This avoids thin content penalties and actually ranks." },
      { title: "Local Signal Integration", description: "Embedded maps, local testimonials, service-area details, and neighborhood-specific copy signal relevance to search engines." },
      { title: "Conversion Paths by Area", description: "Phone numbers, forms, and CTAs can be tailored to each location — so a visitor from City A sees a different phone number than City B." },
      { title: "Scalable Architecture", description: "We build a system that makes adding new service areas easy — whether you expand to 5 or 50 locations." },
    ],
    process: [
      { title: "Location Mapping", description: "We map all your service areas and prioritize them by search volume and business value.", timeline: "Week 1" },
      { title: "Content Planning", description: "We create a unique content brief for each location — no duplicate templates.", timeline: "Week 1–2" },
      { title: "Page Build", description: "Pages are built with local signals, testimonials, and conversion paths for each area.", timeline: "Week 2–4" },
      { title: "Launch and Track", description: "Pages are launched and tracked individually for ranking and conversion performance.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Location-specific landing pages",
      "Unique content per page",
      "Local signal integration",
      "Conversion tracking by location",
    ],
    faqs: [
      { q: "Will duplicate content hurt my rankings?", a: "Only if the pages are thin or identical. We build each page with unique, valuable content specific to that location — which is exactly what search engines want to see." },
      { q: "How many locations can we target?", a: "As many as you serve. We recommend starting with your highest-priority areas and expanding as you see results." },
      { q: "Can we update these pages later?", a: "Yes. The architecture is built to be scalable — adding a new location is straightforward, and existing pages can be updated as your service areas evolve." },
    ],
    ctaHeading: "Ready to Rank in Every Area You Serve?",
    ctaSubheading: "Get a free local landing page strategy — we'll show you which locations to prioritize and what each page needs to rank.",
    heroImage: "/images/sub-service/local-landing-pages-hero.webp",
    heroImageAlt: "Local landing pages illustration",
  },
  {
    slug: "reputation-management",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Review & Reputation Strategy",
    metaTitle: "Review & Reputation Strategy | LocalLeads",
    metaDescription:
      "Review acquisition systems and reputation monitoring across Google, Yelp, and Facebook. Build a strong review profile ethically and consistently.",
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
      { q: "Can you get me fake reviews?", a: "No. We only use 100% ethical, platform-approved methods. Fake reviews violate policies and risk having your entire profile suspended — we never put your business at that risk." },
      { q: "What if I get a negative review?", a: "We respond professionally and, where appropriate, take the conversation offline to resolve it. Many negative reviews can be turned into a demonstration of good customer service." },
      { q: "How do you get customers to actually leave reviews?", a: "Timing and ease. We send a simple, direct request right after a positive interaction with a one-click link — this alone dramatically increases response rates." },
    ],
    ctaHeading: "Want More Reviews Without Doing the Asking Yourself?",
    ctaSubheading: "Get a free reputation audit and see exactly how your review profile compares to competitors.",
    heroImage: "/images/sub-service/reputation-management-hero.webp",
    heroImageAlt: "Reputation management illustration",
  },
  {
    slug: "local-seo-audit",
    parentSlug: "local-seo",
    parentLabel: "Local SEO",
    parentHref: "/services/local-seo",
    title: "Local SEO Audit",
    metaTitle: "Local SEO Audit | LocalLeads",
    metaDescription:
      "Comprehensive local SEO audit covering GBP, citations, reviews, rankings, and on-page local signals. Get a prioritized action plan to improve local visibility.",
    heading: "A Clear Picture of Exactly What's Limiting Your Local Rankings",
    subheading:
      "We don't guess what's wrong — we audit every local SEO signal, benchmark against competitors, and deliver a prioritized action plan you can hand to any developer or implement yourself.",
    accentColor: "brand",
    stats: [
      { value: "50+", label: "Signals Checked" },
      { value: "Priority", label: "Action Plan" },
      { value: "48 hr", label: "Delivery Time" },
    ],
    benefits: [
      { title: "Complete Signal Audit", description: "GBP completeness, citations, reviews, on-page local signals, schema, and technical factors — every signal is checked." },
      { title: "Competitor Benchmarking", description: "We compare your local profile against the top 3 competitors in your area so you can see exactly what gaps exist." },
      { title: "Prioritized Action Plan", description: "Findings are ranked by impact and effort, so you know exactly what to tackle first for the fastest results." },
      { title: "Clear Explanations", description: "Every finding is explained in plain language with the 'why' and 'how' — no jargon, no guesswork." },
    ],
    process: [
      { title: "Account and Profile Access", description: "We request access to your GBP, search console, and analytics to pull real data.", timeline: "Day 1" },
      { title: "Full Audit Execution", description: "We run the complete audit across all local SEO signals and compile findings.", timeline: "Day 1–3" },
      { title: "Competitor Benchmarking", description: "We compare your profile against the top competitors in your area.", timeline: "Day 3–4" },
      { title: "Report Delivery", description: "You receive the full audit report with prioritized action plan within 48 hours.", timeline: "Day 4–5" },
    ],
    deliverables: [
      "Complete local SEO audit report",
      "Competitor benchmarking",
      "Prioritized action plan",
      "Implementation guidance for each finding",
    ],
    faqs: [
      { q: "What's included in a local SEO audit?", a: "We check your Google Business Profile completeness, citation consistency, review profile, on-page local signals, schema markup, technical factors, and competitor positioning — then deliver a prioritized action plan." },
      { q: "Do you implement the fixes or just report?", a: "We can do both. The audit report gives you a clear plan you can implement yourself or hand to any developer. We also offer implementation as a separate engagement." },
      { q: "How long does the audit take?", a: "Most audits are delivered within 48 hours of receiving access to your accounts." },
    ],
    ctaHeading: "What's Really Limiting Your Local Rankings?",
    ctaSubheading: "Get a free local SEO audit — we'll show you the top 3 fixes that would move the needle fastest for your business.",
    heroImage: "/images/sub-service/local-seo-audit-hero.webp",
    heroImageAlt: "Local SEO audit illustration",
  },

  /* ───────────────── TECHNICAL SEO SUB-SERVICES ───────────────── */
  {
    slug: "technical-seo-audit",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Technical SEO Audit",
    metaTitle: "Technical SEO Audit | LocalLeads",
    metaDescription:
      "Comprehensive technical SEO audit covering crawlability, indexation, performance, metadata, and structured data. Get a prioritized action plan.",
    heading: "A Technical SEO Audit That Actually Shows You What to Fix",
    subheading:
      "We don't just run a tool and hand you a 100-page report. We audit every technical signal, explain what matters, and give you a prioritized action plan — prioritized by impact and effort.",
    accentColor: "brand",
    stats: [
      { value: "200+", label: "Checks Performed" },
      { value: "Priority", label: "Action Plan" },
      { value: "48 hr", label: "Delivery Time" },
    ],
    benefits: [
      { title: "Crawl and Indexation Review", description: "We inspect robots.txt, XML sitemaps, canonical URLs, redirects, status codes, and rendering paths so search engines can discover and understand the right pages." },
      { title: "Performance and Core Web Vitals", description: "We identify performance and Core Web Vitals opportunities across mobile and desktop, including JavaScript weight, rendering behavior, and user experience issues." },
      { title: "Metadata and Structured Data", description: "We review titles, descriptions, Open Graph, JSON-LD, and schema markup for accuracy, consistency, and useful search presentation." },
      { title: "Clear Prioritization", description: "Every finding is grouped as critical, high, medium, or low based on impact and effort — so you know exactly what to tackle first." },
    ],
    process: [
      { title: "Crawl and Data Collection", description: "We crawl your site, pull search console data, and run lab and field performance tests.", timeline: "Day 1–2" },
      { title: "Deep Technical Analysis", description: "Every technical signal is reviewed against current best practices and algorithm requirements.", timeline: "Day 2–4" },
      { title: "Competitor and Benchmarking", description: "We compare your technical foundation against top-ranking competitors.", timeline: "Day 4–5" },
      { title: "Report Delivery", description: "You receive the full audit report with prioritized findings and recommended solutions within 48 hours.", timeline: "Day 5–7" },
    ],
    deliverables: [
      "Complete technical SEO audit report",
      "Affected page inventory",
      "Prioritized findings by impact and effort",
      "Recommended solutions and implementation approach",
    ],
    faqs: [
      { q: "What does a technical SEO audit include?", a: "We review crawlability, indexation, metadata, canonicals, XML sitemap, robots.txt, structured data, internal linking, URL structure, redirects, 404 issues, duplicate content, mobile SEO, performance, Core Web Vitals, and rendering." },
      { q: "Do you implement the fixes or only provide a report?", a: "We provide a detailed report first. We can also implement approved fixes as a separate engagement — you're never locked into implementation." },
      { q: "How long until I see results from fixing technical issues?", a: "It depends on the issue. Crawl and index fixes can show results in days. Performance and Core Web Vitals improvements typically show within 2–4 weeks after Google recrawls." },
    ],
    ctaHeading: "What Technical Issues Are Limiting Your Rankings?",
    ctaSubheading: "Get a free technical SEO audit — we'll show you the top 3 fixes that would move the needle fastest.",
    heroImage: "/images/sub-service/technical-seo-audit-hero.webp",
    heroImageAlt: "Technical SEO audit illustration",
  },
  {
    slug: "crawl-indexation",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Crawl & Indexation",
    metaTitle: "Crawl & Indexation | LocalLeads",
    metaDescription:
      "Fix crawlability and indexation issues so search engines can discover, crawl, and index your most important pages. Robots.txt, sitemaps, canonicals, and redirects.",
    heading: "Make Sure Search Engines Can Actually Find and Index Your Pages",
    subheading:
      "If search engines can't crawl or index your pages, nothing else matters. We fix the technical barriers — robots.txt, sitemaps, canonicals, redirects — so your important pages get found.",
    accentColor: "accent",
    stats: [
      { value: "0", label: "Crawl Blockers" },
      { value: "100%", label: "Indexation Target" },
      { value: "1–2 wk", label: "Fix Time" },
    ],
    benefits: [
      { title: "Robots.txt Optimization", description: "We ensure your robots.txt allows crawling of important pages and blocks admin or duplicate areas — the right pages get indexed, the wrong ones don't." },
      { title: "XML Sitemap Management", description: "A clean, submitted sitemap helps search engines discover your pages faster and understand your site structure." },
      { title: "Canonical and Redirect Cleanup", description: "Duplicate content issues, incorrect canonicals, and redirect chains are fixed so link equity flows to the right pages." },
      { title: "Indexation Monitoring", description: "We track how many pages are indexed versus how many should be, and investigate discrepancies." },
    ],
    process: [
      { title: "Crawl Analysis", description: "We run a full crawl and compare indexed pages against your actual site structure.", timeline: "Day 1–2" },
      { title: "Fix Implementation", description: "Robots.txt, sitemaps, canonicals, and redirects are corrected.", timeline: "Week 1" },
      { title: "Resubmission and Monitoring", description: "Sitemaps are resubmitted and indexation is monitored over the following weeks.", timeline: "Week 1–3" },
      { title: "Validation Report", description: "We confirm indexation improvements and document what changed.", timeline: "Week 3–4" },
    ],
    deliverables: [
      "Robots.txt configuration",
      "XML sitemap creation and optimization",
      "Canonical and redirect fixes",
      "Indexation monitoring report",
    ],
    faqs: [
      { q: "What's the difference between crawl and indexation?", a: "Crawling is when search engines discover and read your pages. Indexation is when they actually add those pages to their database to show in search results. You can be crawled but not indexed — both need to work." },
      { q: "Why would a page not be indexed?", a: "Common reasons include robots.txt blocking, noindex tags, thin or duplicate content, manual penalties, or the page being considered low-value by search engines." },
      { q: "How long does it take for fixes to show results?", a: "Crawl and index fixes can show results within days to a few weeks, depending on how often search engines recrawl your site. We monitor and report on progress." },
    ],
    ctaHeading: "Are Your Most Important Pages Actually Being Indexed?",
    ctaSubheading: "Get a free crawl and indexation analysis — we'll show you which pages are missing and why.",
    heroImage: "/images/sub-service/crawl-indexation-hero.webp",
    heroImageAlt: "Crawl and indexation illustration",
  },
  {
    slug: "core-web-vitals",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Core Web Vitals",
    metaTitle: "Core Web Vitals | LocalLeads",
    metaDescription:
      "Core Web Vitals optimization for better search rankings and user experience. Fix LCP, INP, and CLS issues with measurable improvements.",
    heading: "Core Web Vitals Optimization That Moves the Needle",
    subheading:
      "Core Web Vitals are a confirmed Google ranking signal. We identify and fix LCP, INP, and CLS issues with specific, measurable improvements — not generic advice.",
    accentColor: "brand",
    stats: [
      { value: "Good", label: "Target Rating" },
      { value: "3", label: "Vitals Optimized" },
      { value: "2–4 wk", label: "Fix Timeline" },
    ],
    benefits: [
      { title: "Largest Contentful Paint Fixes", description: "We identify what's delaying your largest content element — server response, render-blocking resources, or image loading — and fix it." },
      { title: "Interaction to Next Paint Optimization", description: "We reduce input latency by optimizing JavaScript execution, removing long tasks, and improving event handling." },
      { title: "Cumulative Layout Shift Prevention", description: "We identify and fix layout shifts — unexpected movements of page content — that frustrate users and hurt rankings." },
      { title: "Measurable Progress Tracking", description: "Before and after metrics are tracked so you can see exactly how each fix improves your Core Web Vitals scores." },
    ],
    process: [
      { title: "Performance Audit", description: "We run lab and field tests to identify every Core Web Vitals issue.", timeline: "Day 1–2" },
      { title: "Root Cause Analysis", description: "For each issue, we identify the specific code, asset, or configuration causing the problem.", timeline: "Day 2–4" },
      { title: "Fix Implementation", description: "Code-level fixes, asset optimization, and configuration changes are applied.", timeline: "Week 1–3" },
      { title: "Validation and Monitoring", description: "We retest after every change and set up ongoing monitoring.", timeline: "Week 3–4" },
    ],
    deliverables: [
      "Core Web Vitals baseline report",
      "LCP, INP, and CLS fixes",
      "Before and after performance metrics",
      "Ongoing monitoring setup",
    ],
    faqs: [
      { q: "What are Core Web Vitals?", a: "Core Web Vitals are Google's metrics for user experience: Largest Contentful Paint (loading), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability). They're confirmed ranking signals." },
      { q: "How much will fixing Core Web Vitals improve my rankings?", a: "It depends on your current scores and competition. If you're in the 'poor' range, fixing these can have a significant impact. If you're already in 'good,' the gains may be smaller but still worth it for user experience." },
      { q: "Can you fix Core Web Vitals without rebuilding my site?", a: "Yes. Most Core Web Vitals issues can be fixed with targeted code changes, image optimization, caching, and server configuration — no full rebuild required." },
    ],
    ctaHeading: "What's Your Core Web Vitals Score?",
    ctaSubheading: "Get a free performance analysis — we'll show you exactly which vitals need fixing and what the improvement would take.",
    heroImage: "/images/sub-service/core-web-vitals-hero.webp",
    heroImageAlt: "Core Web Vitals optimization illustration",
  },
  {
    slug: "website-performance",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Website Performance",
    metaTitle: "Website Performance | LocalLeads",
    metaDescription:
      "Systematic performance optimization for better user experience and search visibility. Image optimization, caching, code splitting, and measurable load time improvements.",
    heading: "Measurable Performance Gains Without Rebuilding Your Site",
    subheading:
      "You don't always need a new website. We diagnose and fix performance bottlenecks — image bloat, render-blocking code, server configuration — to get measurable speed gains.",
    accentColor: "accent",
    stats: [
      { value: "50%+", label: "Typical Load Improvement" },
      { value: "<2s", label: "Target Load Time" },
      { value: "1–2 wk", label: "Optimization Time" },
    ],
    benefits: [
      { title: "Measurable Speed Gains", description: "Every optimization is measured before and after, so you see exactly what changed and by how much." },
      { title: "Image and Asset Optimization", description: "Modern formats, lazy loading, and responsive image delivery cut load times without sacrificing quality." },
      { title: "Server and Caching Improvements", description: "CDN configuration, browser caching headers, and server response time optimizations that compound with frontend fixes." },
      { title: "Code Splitting and Optimization", description: "Unused code is removed, critical CSS is prioritized, and JavaScript is split so only what's needed is loaded initially." },
    ],
    process: [
      { title: "Performance Audit", description: "We run a full audit using real-user and lab data to identify every bottleneck.", timeline: "Day 1–2" },
      { title: "Fixes Implementation", description: "Image optimization, code splitting, caching rules, and server fixes are applied.", timeline: "Week 1" },
      { title: "Testing and Validation", description: "We retest after every change to confirm improvements are real and stable.", timeline: "Week 1–2" },
      { title: "Monitoring Setup", description: "Performance monitoring is set up so you're alerted if regressions appear later.", timeline: "Week 2" },
    ],
    deliverables: [
      "Full performance audit report",
      "Implemented optimizations with before/after metrics",
      "Performance monitoring setup",
      "Ongoing optimization recommendations",
    ],
    faqs: [
      { q: "How do you measure improvement?", a: "We use performance tools and real-user monitoring data before and after every change. You'll see the exact numbers." },
      { q: "Will optimization break my site?", a: "No — we test every change in staging first and verify in production. Optimizations are incremental and reversible." },
      { q: "How long until I see results?", a: "Most optimizations show measurable improvement within 1–2 weeks. The full audit-to-deployment process typically takes 2 weeks." },
    ],
    ctaHeading: "How Fast Is Your Site Really?",
    ctaSubheading: "Get a free performance audit — we'll show you exactly what's slowing your site down and how much faster it could be.",
    heroImage: "/images/sub-service/website-performance-hero.webp",
    heroImageAlt: "Website performance optimization illustration",
  },
  {
    slug: "technical-on-page-seo",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Technical On-Page SEO",
    metaTitle: "Technical On-Page SEO | LocalLeads",
    metaDescription:
      "On-page technical SEO fixes: title tags, meta descriptions, headers, internal linking, and content structure. Optimize every page for search visibility.",
    heading: "Technical On-Page SEO That Search Engines Can Read",
    subheading:
      "On-page SEO isn't just keywords — it's the technical structure of your content. We optimize titles, headers, internal links, and content hierarchy so every page has the best chance to rank.",
    accentColor: "brand",
    stats: [
      { value: "100%", label: "Page Coverage" },
      { value: "Title +", label: "Meta Optimization" },
      { value: "Internal", label: "Link Optimization" },
    ],
    benefits: [
      { title: "Title Tag and Meta Optimization", description: "Every page gets a unique, keyword-optimized title tag and meta description — the two most important on-page signals for click-through rate." },
      { title: "Header and Content Structure", description: "Proper H1–H6 hierarchy, semantic sections, and content organization that helps search engines understand your page's topic and importance." },
      { title: "Internal Linking Strategy", description: "Strategic internal links pass authority between related pages, help search engines discover content, and improve user navigation." },
      { title: "Content-to-Keyword Alignment", description: "We ensure each page targets a clear topic, with content depth and keyword usage that matches searcher intent." },
    ],
    process: [
      { title: "Page Inventory", description: "We catalog every page, its current on-page signals, and its target keyword.", timeline: "Week 1" },
      { title: "Optimization Implementation", description: "Titles, meta descriptions, headers, and internal links are optimized page by page.", timeline: "Week 1–3" },
      { title: "Content Review", description: "We review content depth and topical alignment, recommending additions where needed.", timeline: "Week 3–4" },
      { title: "Validation and Tracking", description: "We track ranking and click-through rate changes post-optimization.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Optimized title tags and meta descriptions for all pages",
      "Header and content structure improvements",
      "Internal linking recommendations",
      "Content gap analysis",
    ],
    faqs: [
      { q: "What's the difference between on-page and technical SEO?", a: "Technical SEO is about the infrastructure — crawlability, speed, structured data. On-page SEO is about the content on each page — titles, headers, internal links, and keyword usage. Both are necessary for rankings." },
      { q: "How many pages can you optimize?", a: "We can optimize any number of pages. For large sites, we prioritize high-value pages first — those most likely to drive traffic and conversions." },
      { q: "Will changing titles and meta descriptions hurt my rankings?", a: "No — if done correctly. We make changes based on data and best practices, and we track performance to confirm improvements." },
    ],
    ctaHeading: "Are Your Pages Optimized for the Right Keywords?",
    ctaSubheading: "Get a free on-page SEO review — we'll show you which pages have the most potential and what's missing.",
    heroImage: "/images/sub-service/technical-on-page-seo-hero.webp",
    heroImageAlt: "Technical on-page SEO illustration",
  },
  {
    slug: "schema-markup",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Schema Markup",
    metaTitle: "Schema Markup | LocalLeads",
    metaDescription:
      "Structured data implementation for better search visibility. LocalBusiness, Service, FAQ, Breadcrumb, and custom schema markup.",
    heading: "Help Search engines Understand Your Content With Structured Data",
    subheading:
      "Schema markup adds context to your pages — telling search engines exactly what your content means, not just what it says. The result: richer search results and better visibility.",
    accentColor: "accent",
    stats: [
      { value: "10+", label: "Schema Types" },
      { value: "Rich", label: "Snippet Eligible" },
      { value: "Validated", label: "Before Launch" },
    ],
    benefits: [
      { title: "Rich Result Eligibility", description: "Proper schema markup makes your pages eligible for rich results — star ratings, FAQ dropdowns, breadcrumbs, and more — that stand out in search." },
      { title: "LocalBusiness and Service Schema", description: "For local businesses, LocalBusiness and Service schema help search engines understand your offerings, hours, and service area." },
      { title: "Validation and Testing", description: "Every schema implementation is validated with Google's Rich Results Test before launch — no guesswork." },
      { title: "Ongoing Maintenance", description: "Schema is maintained as your content and offerings change, so eligibility is never lost." },
    ],
    process: [
      { title: "Schema Audit", description: "We review your existing structured data and identify gaps and errors.", timeline: "Day 1–2" },
      { title: "Schema Design", description: "We design the appropriate schema types and properties for each page type.", timeline: "Day 2–4" },
      { title: "Implementation", description: "Schema markup is added to your pages using JSON-LD — the format Google recommends.", timeline: "Week 1–2" },
      { title: "Validation and Testing", description: "Every schema is validated and tested for rich result eligibility.", timeline: "Week 2–3" },
    ],
    deliverables: [
      "Schema markup implementation across key pages",
      "JSON-LD structured data",
      "Validation and testing report",
      "Ongoing schema maintenance",
    ],
    faqs: [
      { q: "What is schema markup?", a: "Schema markup is structured data that you add to your pages to help search engines understand exactly what your content means. It's what enables rich results like star ratings, FAQ dropdowns, and breadcrumbs in search." },
      { q: "Will schema markup improve my rankings?", a: "Schema markup doesn't directly boost rankings, but it increases click-through rate from search results, which indirectly helps rankings. It also makes your listings more visible and trustworthy." },
      { q: "What schema types do you implement?", a: "We implement whatever is appropriate for your pages: LocalBusiness, Service, Organization, FAQPage, BreadcrumbList, Article, Product, and more." },
    ],
    ctaHeading: "Are Your Pages Missing Out on Rich Search Results?",
    ctaSubheading: "Get a free schema audit — we'll show you what markup is missing and what rich results you could be eligible for.",
    heroImage: "/images/sub-service/schema-markup-hero.webp",
    heroImageAlt: "Schema markup illustration",
  },
  {
    slug: "internal-linking",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Internal Linking",
    metaTitle: "Internal Linking | LocalLeads",
    metaDescription:
      "Strategic internal linking to pass authority, improve crawlability, and help users navigate. Link audits, architecture improvements, and anchor text optimization.",
    heading: "Internal Linking That Passes Authority and Helps Users Navigate",
    subheading:
      "Internal links are one of the most underused SEO tools. We audit your link structure, fix broken links, and build a strategic linking architecture that passes authority to your most important pages.",
    accentColor: "brand",
    stats: [
      { value: "Authority", label: "Flow Improved" },
      { value: "0", label: "Broken Links" },
      { value: "Strategic", label: "Anchor Text" },
    ],
    benefits: [
      { title: "Link Authority Distribution", description: "Strategic internal links pass ranking authority from high-authority pages to important pages that need a boost — like service pages or product pages." },
      { title: "Crawlability Improvement", description: "A well-linked site structure helps search engines discover and crawl all your important pages — not just the ones linked from your homepage." },
      { title: "Broken Link Cleanup", description: "We find and fix broken internal links that waste crawl budget and create a poor user experience." },
      { title: "Contextual Anchor Text", description: "We optimize anchor text to be descriptive and relevant — helping both users and search engines understand what the linked page is about." },
    ],
    process: [
      { title: "Link Audit", description: "We crawl your site to map all internal links, identify broken links, orphaned pages, and authority flow gaps.", timeline: "Day 1–3" },
      { title: "Architecture Planning", description: "We design a linking strategy that connects related pages and passes authority to priority pages.", timeline: "Day 3–5" },
      { title: "Implementation", description: "New links are added, broken links are fixed, and anchor text is optimized.", timeline: "Week 1–2" },
      { title: "Validation", description: "We re-crawl to confirm the linking structure is correct and no broken links remain.", timeline: "Week 2–3" },
    ],
    deliverables: [
      "Internal link audit report",
      "Linking architecture plan",
      "Implemented internal links",
      "Broken link cleanup",
    ],
    faqs: [
      { q: "Why does internal linking matter for SEO?", a: "Internal links help search engines discover your pages, pass ranking authority between pages, and establish topical relevance. A well-linked site ranks better than a poorly linked one with the same content." },
      { q: "How many internal links should a page have?", a: "There's no magic number, but we focus on relevance and context — linking to related pages when it helps the user, and passing authority to priority pages strategically." },
      { q: "Can too many internal links hurt?", a: "Only if they're irrelevant or excessive. We focus on quality over quantity — every link should serve a purpose for the user or the site's authority structure." },
    ],
    ctaHeading: "Is Your Link Structure Helping or Hurting Your Rankings?",
    ctaSubheading: "Get a free internal link audit — we'll show you broken links, orphaned pages, and opportunities to pass more authority.",
    heroImage: "/images/sub-service/internal-linking-hero.webp",
    heroImageAlt: "Internal linking illustration",
  },
  {
    slug: "google-search-console",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Google Search Console",
    metaTitle: "Google Search Console | LocalLeads",
    metaDescription:
      "Google Search Console setup, monitoring, and action plans. Index coverage, manual actions, performance metrics, and ongoing technical SEO insights.",
    heading: "Turn Search Console Data Into Actionable Improvements",
    subheading:
      "Google Search Console is a goldmine of technical SEO data — but most businesses don't know how to use it. We set it up, monitor it, and turn the data into a clear action plan.",
    accentColor: "accent",
    stats: [
      { value: "100%", label: "Property Setup" },
      { value: "Weekly", label: "Monitoring" },
      { value: "Actionable", label: "Insights" },
    ],
    benefits: [
      { title: "Complete Property Setup", description: "We set up and verify your Search Console property, including sitemap submission, URL inspection, and property configuration." },
      { title: "Index Coverage Monitoring", description: "We monitor which pages are indexed, which have errors, and which are being excluded — and fix issues as they arise." },
      { title: "Performance Analysis", description: "We analyze clicks, impressions, average position, and click-through rate to identify ranking opportunities and drops." },
      { title: "Manual Action and Security", description: "We monitor for manual penalties, security issues, and core web vitals alerts — catching problems before they become crises." },
    ],
    process: [
      { title: "Setup and Verification", description: "We set up Search Console, verify ownership, and configure all necessary settings.", timeline: "Day 1" },
      { title: "Baseline Analysis", description: "We pull historical data and establish a baseline of your current performance and indexation.", timeline: "Day 1–3" },
      { title: "Ongoing Monitoring", description: "We monitor your property weekly for indexation issues, performance changes, and alerts.", timeline: "Ongoing" },
      { title: "Action Plans", description: "When issues or opportunities are found, we deliver a clear action plan with priorities.", timeline: "Ongoing" },
    ],
    deliverables: [
      "Search Console setup and verification",
      "Baseline performance and indexation report",
      "Weekly monitoring and alerts",
      "Action plans for issues and opportunities",
    ],
    faqs: [
      { q: "Do I need Google Search Console?", a: "Yes — it's free and it's the most direct way to see how Google views your site. It shows indexation issues, ranking data, click-through rates, and manual penalties that no other tool can show." },
      { q: "What's the difference between Search Console and Analytics?", a: "Search Console shows how search engines see and rank your site. Analytics shows what users do after they click. Both are essential — they tell different parts of the story." },
      { q: "Can you set it up if I don't have technical access?", a: "Yes. We can set up Search Console through Google Tag Manager, DNS verification, or HTML file upload — whichever method works best for your setup." },
    ],
    ctaHeading: "Are You Using Search Console to Its Full Potential?",
    ctaSubheading: "Get a free Search Console health check — we'll show you what's happening under the hood and what to fix first.",
    heroImage: "/images/sub-service/google-search-console-hero.webp",
    heroImageAlt: "Google Search Console illustration",
  },
  {
    slug: "sitemap-robots-txt",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Sitemap & Robots.txt",
    metaTitle: "Sitemap & Robots.txt | LocalLeads",
    metaDescription:
      "XML sitemap creation and robots.txt optimization. Help search engines discover and crawl the right pages while blocking admin and duplicate content.",
    heading: "Guide Search Engines to Your Most Important Pages",
    subheading:
      "Your XML sitemap and robots.txt are the first things search engines check. We create and optimize both so your important pages are discovered fast and unimportant pages are left alone.",
    accentColor: "brand",
    stats: [
      { value: "100%", label: "Valid Sitemap" },
      { value: "Clean", label: "Robots.txt" },
      { value: "Auto", label: "Updates" },
    ],
    benefits: [
      { title: "XML Sitemap Creation", description: "We create a clean, valid XML sitemap that includes all your important pages and excludes duplicates, admin pages, and thin content." },
      { title: "Robots.txt Optimization", description: "We configure robots.txt to allow crawling of important pages and block search engines from wasting crawl budget on admin areas." },
      { title: "Sitemap Submission and Monitoring", description: "We submit your sitemap to Google and Bing, then monitor for crawl and indexation issues." },
      { title: "Ongoing Maintenance", description: "As your site changes, we update your sitemap and robots.txt to reflect new pages, removed pages, and changed rules." },
    ],
    process: [
      { title: "Site Crawl and Inventory", description: "We crawl your site to understand its structure and identify all pages.", timeline: "Day 1" },
      { title: "Sitemap and Robots.txt Creation", description: "We create the XML sitemap and robots.txt with the correct rules and priorities.", timeline: "Day 1–2" },
      { title: "Validation", description: "We validate both files for syntax errors and test that they behave as expected.", timeline: "Day 2–3" },
      { title: "Submission and Monitoring", description: "We submit to search engines and set up ongoing monitoring.", timeline: "Week 1–2" },
    ],
    deliverables: [
      "Valid XML sitemap",
      "Optimized robots.txt",
      "Sitemap submission to search engines",
      "Ongoing maintenance and updates",
    ],
    faqs: [
      { q: "What is an XML sitemap?", a: "An XML sitemap is a file that lists all the important pages on your site, helping search engines discover and understand your content faster. It's like a roadmap for search engine crawlers." },
      { q: "What does robots.txt do?", a: "Robots.txt tells search engines which pages or sections of your site they should or shouldn't crawl. It's used to block admin pages, staging sites, and duplicate content from being indexed." },
      { q: "Do I need both?", a: "Yes — they serve different purposes. The sitemap tells search engines what to crawl, and robots.txt tells them what not to crawl. Together, they ensure your crawl budget is spent on the right pages." },
    ],
    ctaHeading: "Are Search Engines Finding Your Most Important Pages?",
    ctaSubheading: "Get a free sitemap and robots.txt review — we'll show you if your most important pages are being discovered.",
    heroImage: "/images/sub-service/sitemap-robots-txt-hero.webp",
    heroImageAlt: "Sitemap and robots.txt illustration",
  },
  {
    slug: "technical-seo-fixes",
    parentSlug: "technical-seo",
    parentLabel: "Technical SEO",
    parentHref: "/services/technical-seo",
    title: "Technical SEO Fixes",
    metaTitle: "Technical SEO Fixes | LocalLeads",
    metaDescription:
      "Approved technical SEO implementation: metadata updates, redirects, schema improvements, and code-level fixes for Next.js, React, and TypeScript sites.",
    heading: "We Can Fix What We Find — No Guesswork, No Scope Creep",
    subheading:
      "After an audit, you have a list of technical issues. We implement the approved fixes directly in your codebase — metadata, redirects, schema, structured data, and performance improvements.",
    accentColor: "accent",
    stats: [
      { value: "Approved", label: "Work Only" },
      { value: "Code-Level", label: "Implementation" },
      { value: "Validated", label: "Post-Fix" },
    ],
    benefits: [
      { title: "Code-Level Implementation", description: "We implement fixes directly in your codebase — not through plugins or workarounds. For Next.js, React, and TypeScript projects, we work with your actual code." },
      { title: "Approved Work Only", description: "We only implement what you've reviewed and approved — no surprises, no scope creep, no unexpected changes to your site." },
      { title: "Structured Data and Schema", description: "Schema markup, JSON-LD, and structured data improvements are implemented and validated before deployment." },
      { title: "Redirects and URL Changes", description: "We implement 301 redirects, canonical updates, and URL structure changes with proper testing and validation." },
    ],
    process: [
      { title: "Scope Review", description: "You review the audit findings and approve the specific fixes to implement.", timeline: "Week 1" },
      { title: "Implementation", description: "Approved fixes are implemented in your codebase with proper testing.", timeline: "Week 1–3" },
      { title: "Validation", description: "Every fix is checked after implementation to confirm it works as expected.", timeline: "Week 3–4" },
      { title: "Summary and Handoff", description: "You receive a final implementation summary covering what changed and what still needs attention.", timeline: "Week 4" },
    ],
    deliverables: [
      "Approved technical SEO fixes implemented",
      "Code changes with documentation",
      "Validation report",
      "Final implementation summary",
    ],
    faqs: [
      { q: "What kinds of fixes can you implement?", a: "We can implement metadata updates, canonical URL changes, 301 redirects, schema markup improvements, structured data fixes, and performance-related code changes — essentially anything identified in a technical SEO audit." },
      { q: "Do I need to have a technical SEO audit first?", a: "Yes — we only implement approved fixes from a prior audit. If you don't have one, we recommend starting with an audit so you know exactly what needs fixing before committing to implementation." },
      { q: "What if the fixes break something?", a: "We implement changes in a controlled way with proper testing. Each fix is validated after implementation, and we monitor for issues. If something does break, we fix it." },
    ],
    ctaHeading: "Ready to Turn Your Audit Into Actual Improvements?",
    ctaSubheading: "Get a free technical SEO audit first — then we can implement the approved fixes with clear priorities and a fixed scope.",
    heroImage: "/images/sub-service/technical-seo-fixes-hero.webp",
    heroImageAlt: "Technical SEO fixes illustration",
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

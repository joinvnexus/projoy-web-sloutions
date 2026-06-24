// app/not-found.tsx
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

const quickLinks = [
  { label: "Homepage", href: "/", description: "Start from the beginning" },
  { label: "Our Services", href: "/services", description: "What we offer" },
  { label: "Case Studies", href: "/case-studies", description: "See our results" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-gradient-subtle flex items-center">
      <div className="container mx-auto max-w-[700px] px-6 py-20 text-center">
        {/* 404 display */}
        <div className="text-8xl font-black font-display gradient-text leading-none mb-4">
          404
        </div>
        <h1 className="font-display font-bold text-slate-900 text-2xl sm:text-3xl mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Here
          are some helpful links instead:
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-3 mb-10 max-w-sm mx-auto">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card card-hover p-4 text-left group"
            >
              <p className="font-semibold text-slate-900 text-sm group-hover:text-brand-700 transition-colors mb-0.5">
                {link.label}
              </p>
              <p className="text-xs text-slate-500">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

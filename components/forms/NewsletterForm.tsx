// components/forms/NewsletterForm.tsx
"use client";

import { useState } from "react";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitting(true);
    // Simulated submission — replace with real newsletter provider (Resend, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    trackEvent("newsletter_signup");
  };

  if (submitted) {
    return (
      <div className={cn("flex items-center justify-center gap-2 py-3", className)}>
        <CheckCircle className="w-5 h-5 text-success" />
        <p className="text-sm font-semibold text-slate-700">
          You&apos;re subscribed! Check your inbox to confirm.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("flex flex-col sm:flex-row gap-3 max-w-md mx-auto", className)}
      aria-label="Newsletter signup"
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="your@email.com"
          aria-invalid={!!error}
          aria-describedby={error ? "newsletter-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors",
            "focus:ring-2 focus:ring-brand-500 focus:border-transparent",
            error ? "border-red-300 bg-red-50" : "border-slate-200"
          )}
        />
        {error && (
          <p id="newsletter-error" role="alert" className="mt-1.5 text-xs text-red-600 text-left">
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-semibold text-sm transition-colors whitespace-nowrap inline-flex items-center justify-center gap-2"
      >
        {submitting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Subscribe Free
            <ArrowRight className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}

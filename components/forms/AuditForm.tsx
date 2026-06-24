// components/forms/AuditForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  business: string;
  website: string;
  challenge: string;
  service: string;
}

interface FieldError {
  name?: string;
  email?: string;
  business?: string;
  challenge?: string;
}

const serviceOptions = [
  { value: "", label: "What do you need most help with?" },
  { value: "local-seo", label: "Local SEO & Google Maps Ranking" },
  { value: "web-development", label: "New Website or Redesign" },
  { value: "saas-development", label: "SaaS / Web Application" },
  { value: "ai-integration", label: "AI Chatbot or Automation" },
  { value: "both", label: "Web Development + Local SEO (both)" },
  { value: "not-sure", label: "Not sure yet — need guidance" },
];

function validate(data: FormData): FieldError {
  const errors: FieldError = {};
  if (!data.name.trim()) errors.name = "Your name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.business.trim()) errors.business = "Business name is required.";
  if (!data.challenge.trim()) errors.challenge = "Please briefly describe your challenge.";
  return errors;
}

interface AuditFormProps {
  variant?: "default" | "compact";
  className?: string;
}

export function AuditForm({ variant = "default", className }: AuditFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    business: "",
    website: "",
    challenge: "",
    service: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    // Simulate submission — replace with actual API call / Formspree / Resend
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    trackEvent("audit_form_submit", { service: formData.service || "not_specified" });
    setTimeout(() => router.push("/thank-you"), 800);
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center justify-center py-10 text-center gap-4", className)}>
        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-success" />
        </div>
        <div>
          <p className="font-display font-bold text-slate-900 text-lg mb-1">You're in!</p>
          <p className="text-sm text-slate-500">Redirecting you now…</p>
        </div>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 text-sm transition-colors duration-150 outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent";
  const inputNormal = "border-slate-200 hover:border-slate-300";
  const inputError = "border-red-300 bg-red-50 focus:ring-red-400";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-4", className)}
      aria-label="Free growth audit request form"
    >
      {/* Name + Email */}
      <div className={cn("grid gap-4", variant === "default" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
        <div>
          <label htmlFor="audit-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="audit-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Rahim Chowdhury"
            autoComplete="name"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            className={cn(inputBase, errors.name ? inputError : inputNormal)}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="audit-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="audit-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rahim@business.com"
            autoComplete="email"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            className={cn(inputBase, errors.email ? inputError : inputNormal)}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Business + Website */}
      <div className={cn("grid gap-4", variant === "default" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
        <div>
          <label htmlFor="audit-business" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            id="audit-business"
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="RC Restaurant"
            autoComplete="organization"
            aria-describedby={errors.business ? "business-error" : undefined}
            aria-invalid={!!errors.business}
            className={cn(inputBase, errors.business ? inputError : inputNormal)}
          />
          {errors.business && (
            <p id="business-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.business}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="audit-website" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Website URL <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id="audit-website"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://yourbusiness.com"
            autoComplete="url"
            className={cn(inputBase, inputNormal)}
          />
        </div>
      </div>

      {/* Service selector */}
      <div>
        <label htmlFor="audit-service" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Primary Need
        </label>
        <select
          id="audit-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={cn(inputBase, inputNormal, "cursor-pointer")}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Challenge */}
      <div>
        <label htmlFor="audit-challenge" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Your Biggest Challenge <span className="text-red-500">*</span>
        </label>
        <textarea
          id="audit-challenge"
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          rows={variant === "compact" ? 3 : 4}
          placeholder="Tell us what's holding your business back online. The more specific you are, the more useful our audit will be."
          aria-describedby={errors.challenge ? "challenge-error" : undefined}
          aria-invalid={!!errors.challenge}
          className={cn(inputBase, errors.challenge ? inputError : inputNormal, "resize-none")}
        />
        {errors.challenge && (
          <p id="challenge-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.challenge}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl",
          "bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400",
          "text-white font-bold text-base",
          "shadow-sm hover:shadow-md",
          "transition-all duration-200",
          "focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
        )}
        aria-live="polite"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Get My Free Growth Audit
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400 leading-relaxed">
        No spam, ever. We reply within 24 hours. Your data is never sold or shared.
      </p>
    </form>
  );
}

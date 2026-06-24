// components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FieldError {
  const errors: FieldError = {};
  if (!data.name.trim()) errors.name = "Your name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Please write at least 20 characters.";
  }
  return errors;
}

const subjectOptions = [
  { value: "", label: "Select a subject" },
  { value: "web-development", label: "Web Development Project" },
  { value: "local-seo", label: "Local SEO Campaign" },
  { value: "ai-solutions", label: "AI Integration" },
  { value: "white-label", label: "White-Label Partnership" },
  { value: "general", label: "General Enquiry" },
];

export function ContactForm({ className }: { className?: string }) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
    trackEvent("contact_form_submit", { subject: formData.subject || "not_specified" });
    setTimeout(() => router.push("/thank-you"), 800);
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center justify-center py-12 text-center gap-4", className)}>
        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-success" />
        </div>
        <div>
          <p className="font-display font-bold text-slate-900 text-xl mb-1">Message sent!</p>
          <p className="text-slate-500 text-sm">Redirecting to confirmation…</p>
        </div>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 text-sm transition-colors duration-150 outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-4", className)}
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={cn(inputBase, errors.name ? "border-red-300 bg-red-50" : "border-slate-200 hover:border-slate-300")}
          />
          {errors.name && <p role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@business.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={cn(inputBase, errors.email ? "border-red-300 bg-red-50" : "border-slate-200 hover:border-slate-300")}
          />
          {errors.email && <p role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={cn(inputBase, "border-slate-200 hover:border-slate-300 cursor-pointer")}
        >
          {subjectOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project, goals, and timeline…"
          aria-invalid={!!errors.message}
          className={cn(inputBase, errors.message ? "border-red-300 bg-red-50" : "border-slate-200 hover:border-slate-300", "resize-none")}
        />
        {errors.message && <p role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold text-base shadow-sm hover:shadow-md transition-all duration-200"
      >
        {submitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" />Sending…</>
        ) : (
          <><Send className="w-4 h-4" />Send Message</>
        )}
      </button>
    </form>
  );
}

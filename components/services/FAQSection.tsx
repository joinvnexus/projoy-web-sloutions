// components/services/FAQSection.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/Typography";
import { RevealWrapper } from "@/components/shared/RevealWrapper";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  subheading?: string;
  faqs: FAQItem[];
  accentColor?: "brand" | "accent";
  background?: "white" | "slate";
  columns?: 1 | 2;
}

function FAQAccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
  accentColor,
}: {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: "brand" | "accent";
}) {
  const accentBorder = accentColor === "brand"
    ? "border-brand-200 bg-brand-50/40"
    : "border-accent-200 bg-accent-50/40";

  const accentIcon = accentColor === "brand"
    ? "text-brand-600"
    : "text-accent-600";

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-200",
        isOpen
          ? cn("border", accentBorder)
          : "border-slate-200 bg-white hover:border-slate-300"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug pr-2">
          {faq.q}
        </span>
        <span
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200",
            isOpen
              ? cn("bg-gradient-to-br", accentColor === "brand" ? "from-brand-600 to-accent-500" : "from-accent-500 to-brand-600")
              : "bg-slate-100"
          )}
        >
          {isOpen ? (
            <Minus className="w-3 h-3 text-white" strokeWidth={2.5} />
          ) : (
            <Plus className={cn("w-3 h-3", accentIcon)} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-5">
          <div className="pt-1 border-t border-slate-100 pt-4">
            <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({
  eyebrow = "FAQ",
  heading = "Frequently Asked Questions",
  subheading,
  faqs,
  accentColor = "brand",
  background = "white",
  columns = 1,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns if requested
  const leftFaqs = columns === 2 ? faqs.slice(0, Math.ceil(faqs.length / 2)) : faqs;
  const rightFaqs = columns === 2 ? faqs.slice(Math.ceil(faqs.length / 2)) : [];

  return (
    <section
      className={cn(
        "section-padding",
        background === "slate" ? "bg-slate-50" : "bg-white"
      )}
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-[1200px]">
        <RevealWrapper>
          <SectionHeader
            eyebrow={eyebrow}
            heading={heading}
            subheading={subheading}
            id="faq-heading"
            maxWidth="md"
          />
        </RevealWrapper>

        {columns === 2 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left column */}
            <div className="space-y-3">
              {leftFaqs.map((faq, i) => (
                <RevealWrapper key={i} delay={i * 0.05}>
                  <FAQAccordionItem
                    faq={faq}
                    index={i}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                    accentColor={accentColor}
                  />
                </RevealWrapper>
              ))}
            </div>
            {/* Right column */}
            <div className="space-y-3">
              {rightFaqs.map((faq, i) => {
                const globalIdx = i + leftFaqs.length;
                return (
                  <RevealWrapper key={globalIdx} delay={i * 0.05}>
                    <FAQAccordionItem
                      faq={faq}
                      index={globalIdx}
                      isOpen={openIndex === globalIdx}
                      onToggle={() => toggle(globalIdx)}
                      accentColor={accentColor}
                    />
                  </RevealWrapper>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <RevealWrapper key={i} delay={i * 0.04}>
                <FAQAccordionItem
                  faq={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                  accentColor={accentColor}
                />
              </RevealWrapper>
            ))}
          </div>
        )}

        {/* Bottom prompt */}
        <RevealWrapper className="text-center mt-10">
          <p className="text-sm text-slate-500">
            Still have questions?{" "}
            <a
              href="/contact"
              className={cn(
                "font-semibold transition-colors",
                accentColor === "brand"
                  ? "text-brand-600 hover:text-brand-700"
                  : "text-accent-600 hover:text-accent-700"
              )}
            >
              Ask us directly →
            </a>
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

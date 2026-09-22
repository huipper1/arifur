"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, X, MessageCircle, ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/content/faq";
import { useStaggerBlurReveal } from "@/hooks/useGSAP";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const accordionListRef = useStaggerBlurReveal<HTMLDivElement>(".accordion-item", {
    y: 20,
    blur: 6,
    stagger: 0.07,
  });

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section">
      <div className="section-inner">
        <div className="text-center mb-12">
          <SectionEyebrow label="FAQs" className="justify-center" />
          <SectionHeading regular="Questions?" accent="Look here." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ accordion */}
          <div ref={accordionListRef} className="lg:col-span-2 flex flex-col gap-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="accordion-item"
                  data-open={isOpen}
                >
                  <button
                    className="accordion-trigger text-left"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1 text-base">{item.question}</span>
                    <span className="accordion-icon">
                      {isOpen ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div className="accordion-content">
                    <div className="accordion-content-inner">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side CTA card */}
          <div className="card bg-[var(--bg-dark)] text-[var(--text-on-dark)] p-8 flex flex-col items-center text-center h-fit lg:sticky lg:top-32 relative overflow-hidden group">
            {/* Subtle card glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--accent)]/15 rounded-full blur-2xl pointer-events-none transition-all duration-700 group-hover:scale-150" />
            
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/20 transition-transform duration-300 group-hover:scale-105">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-tight">
              Have different questions? Ask Away!
            </h3>
            <p className="text-sm text-[var(--text-on-dark-muted)] mb-6 leading-relaxed">
              Your questions, my answers. Direct, quick, and transparent responses guaranteed.
            </p>
            <Link
              href="/contact/"
              className="btn btn-primary w-full justify-center group/btn"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

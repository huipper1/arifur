"use client";

import Accordion from "@/components/ui/Accordion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { pricingFaqs } from "@/content/pricing";

export default function PricingFAQ() {
  const accordionItems = pricingFaqs.map((faq, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: faq.question,
    content: (
      <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
        {faq.answer}
      </p>
    ),
  }));

  return (
    <section className="section py-16 sm:py-24">
      <div className="section-inner max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <SectionEyebrow label="Frequently Asked Questions" className="justify-center" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mt-2 mb-3">
            Got Questions?{" "}
            <span className="font-serif italic font-medium text-[var(--accent)]">
              We&apos;ve Got Answers
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            Everything you need to know about our packages, billing, and collaboration process.
          </p>
        </div>

        <Accordion items={accordionItems} defaultOpen={0} />
      </div>
    </section>
  );
}

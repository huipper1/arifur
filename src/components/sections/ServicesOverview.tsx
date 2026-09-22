"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { services } from "@/content/services";
import { useBlurReveal } from "@/hooks/useGSAP";

export default function ServicesOverview() {
  const headerRef = useBlurReveal<HTMLDivElement>({ y: 24, blur: 8 });
  const accordionItems = services.map((service, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: service.title,
    content: (
      <div className="space-y-4">
        {/* Capability tags */}
        <div className="flex flex-wrap gap-2">
          {service.capabilities.map((cap) => (
            <span key={cap} className="tag text-xs">
              {cap}
            </span>
          ))}
        </div>
        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          {service.summary}
        </p>
      </div>
    ),
  }));

  return (
    <section className="section">
      <div className="section-inner">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <SectionEyebrow label="My Specialization" />
            <SectionHeading regular="Services" accent="I Provide" />
          </div>
          <p className="text-[var(--text-secondary)] text-sm max-w-[380px] leading-relaxed">
            I help businesses build, improve, and scale their software products
            with focused, practical development services.
          </p>
        </div>

        {/* Accordion list */}
        <Accordion items={accordionItems} defaultOpen={1} />

        {/* View all CTA */}
        <div className="mt-10 flex justify-center">
          <Link href="/services/" className="btn btn-primary px-6 py-3">
            View All Services
            <span className="btn-circle-arrow">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

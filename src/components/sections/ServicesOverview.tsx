"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Layers,
  Smartphone,
  Globe,
  Rocket,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { useBlurReveal } from "@/hooks/useGSAP";

// Curated icon & visual identity per service pillar
const serviceMeta = [
  {
    icon: Layers,
    iconStyle: "text-indigo-600 bg-indigo-50 border-indigo-100",
    dot: "bg-indigo-500",
    stripe: "from-indigo-500 via-indigo-600 to-indigo-700",
  },
  {
    icon: Smartphone,
    iconStyle: "text-emerald-600 bg-emerald-50 border-emerald-100",
    dot: "bg-emerald-500",
    stripe: "from-emerald-500 via-emerald-600 to-emerald-700",
  },
  {
    icon: Globe,
    iconStyle: "text-blue-600 bg-blue-50 border-blue-100",
    dot: "bg-blue-500",
    stripe: "from-blue-500 via-blue-600 to-blue-700",
  },
  {
    icon: Rocket,
    iconStyle: "text-amber-600 bg-amber-50 border-amber-100",
    dot: "bg-amber-500",
    stripe: "from-amber-500 via-amber-600 to-amber-700",
  },
  {
    icon: Sparkles,
    iconStyle: "text-purple-600 bg-purple-50 border-purple-100",
    dot: "bg-purple-500",
    stripe: "from-purple-500 via-purple-600 to-purple-700",
  },
];

export default function ServicesOverview() {
  const headerRef = useBlurReveal<HTMLDivElement>({ y: 24, blur: 8 });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first service

  const toggleService = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(229, 57, 53, 0.08) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%)",
        }}
      />

      <div className="section-inner relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <SectionEyebrow label="My Specialization" />
            <SectionHeading regular="Services" accent="I Provide" />
          </div>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-[400px] leading-relaxed">
            I help businesses build, improve, and scale their software products
            with focused, practical development services.
          </p>
        </div>

        {/* ── Interactive Animated Services Accordion ───────────────── */}
        <div className="flex flex-col gap-4">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const meta = serviceMeta[index % serviceMeta.length];
            const Icon = meta.icon;
            const itemNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.id}
                onClick={() => toggleService(index)}
                className={`group relative rounded-2xl sm:rounded-[20px] transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-white border-2 border-neutral-900 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                    : "bg-white/80 backdrop-blur-sm border border-neutral-200/90 hover:border-neutral-400 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-0.5"
                }`}
              >
                {/* Active Indicator Accent Stripe */}
                {isOpen && (
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${meta.stripe} rounded-l-2xl`}
                  />
                )}

                {/* ── Trigger Bar ──────────────────────────────────────── */}
                <div className="flex items-center justify-between p-5 sm:p-6 select-none">
                  <div className="flex items-center gap-3.5 sm:gap-5 flex-1 pr-3">
                    {/* Number Monogram */}
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold px-2.5 py-1 rounded-lg transition-colors ${
                        isOpen
                          ? "bg-neutral-900 text-white shadow-xs"
                          : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white"
                      }`}
                    >
                      {itemNumber}.
                    </span>

                    {/* Dedicated Service Icon */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 shrink-0 ${
                        meta.iconStyle
                      } ${isOpen ? "scale-105 shadow-xs" : "group-hover:scale-105"}`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-950 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right side: quick stats badge + rotating trigger button */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200/80 transition-colors">
                      {service.capabilities.length} Capabilities
                    </span>

                    <button
                      type="button"
                      aria-label={isOpen ? "Collapse service details" : "Expand service details"}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#E53935] text-white border-[#E53935] shadow-md shadow-red-500/20 rotate-45"
                          : "bg-neutral-100 border-neutral-200 text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 group-hover:rotate-90"
                      }`}
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </button>
                  </div>
                </div>

                {/* ── Expandable Rich Content ─────────────────────────── */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 space-y-5 border-t border-neutral-100">
                      {/* 1. Capability Tags / Pills */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-bold text-neutral-400 tracking-wider uppercase block">
                          CORE CAPABILITIES & SPECIALIZATIONS
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.capabilities.map((cap, capIdx) => (
                            <span
                              key={cap}
                              style={{ animationDelay: `${capIdx * 40}ms` }}
                              className="group/chip inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium bg-neutral-100/80 hover:bg-neutral-900 hover:text-white border border-neutral-200/70 transition-all duration-200 hover:scale-105 shadow-2xs cursor-default"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${meta.dot} group-hover/chip:bg-white transition-colors`}
                              />
                              <span>{cap}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 2. Summary & Problem Solving Box */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
                        <div className="md:col-span-7 space-y-3">
                          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                            {service.summary}
                          </p>

                          {/* Problem Callout Box */}
                          <div className="rounded-xl bg-neutral-50/90 border border-neutral-200/80 p-3.5 sm:p-4 flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-neutral-900 block mb-0.5">
                                Problem this solves:
                              </span>
                              <span className="text-neutral-600 leading-relaxed">
                                {service.buyerProblem}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 3. Delivery Workflow Steps */}
                        <div className="md:col-span-5 bg-neutral-50/60 rounded-xl border border-neutral-200/60 p-4 flex flex-col justify-between">
                          <div>
                            <span className="text-[11px] font-bold text-neutral-400 tracking-wider uppercase block mb-2.5">
                              HOW WE DELIVER
                            </span>
                            <div className="space-y-2">
                              {service.process.slice(0, 3).map((step, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-2.5">
                                  <span className="w-4 h-4 rounded-full bg-neutral-900 text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {sIdx + 1}
                                  </span>
                                  <span className="text-xs sm:text-[13px] font-medium text-neutral-800 leading-snug">
                                    {step}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Direct Action Link */}
                          <div className="pt-4 mt-3 border-t border-neutral-200/60 flex items-center justify-between gap-3">
                            <Link
                              href="/contact"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-[#E53935] text-xs sm:text-[13px] font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                              <span>{service.ctaLabel}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>

                            <Link
                              href="/services"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors"
                            >
                              <span>Learn more</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── View All CTA ──────────────────────────────────────────── */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-neutral-900 hover:bg-[#E53935] shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(229,57,53,0.3)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            <span>View All Services & Specializations</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

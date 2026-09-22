"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";
import { useStaggerReveal } from "@/hooks/useGSAP";

export default function ProcessSection() {
  const gridRef = useStaggerReveal<HTMLDivElement>(".process-card", {
    y: 30,
    stagger: 0.12,
  });

  return (
    <section className="section">
      <div className="section-inner">
        <div className="text-center mb-12">
          <SectionEyebrow label="How I Work" className="justify-center" />
          <SectionHeading regular="My" accent="Working Process" />
        </div>

        {/* Process steps */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`process-card card p-6 md:p-8 ${
                index === processSteps.length - 1 && processSteps.length % 3 === 2
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Step number */}
              <span className="text-4xl font-bold text-[var(--accent)] opacity-30 font-serif">
                {step.number}
              </span>

              <h3 className="text-lg font-bold mt-3 mb-3">{step.title}</h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

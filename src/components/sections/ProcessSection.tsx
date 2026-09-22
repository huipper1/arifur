"use client";

import { Compass, Target, Code2, Rocket, RefreshCw } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/process";
import { useStaggerBlurReveal } from "@/hooks/useGSAP";

const stepIcons = [Compass, Target, Code2, Rocket, RefreshCw];

export default function ProcessSection() {
  const gridRef = useStaggerBlurReveal<HTMLDivElement>(".process-card", {
    y: 28,
    stagger: 0.1,
    blur: 8,
  });

  return (
    <section className="section">
      <div className="section-inner">
        <div className="text-center mb-14">
          <SectionEyebrow label="How I Work" className="justify-center" />
          <SectionHeading regular="My" accent="Working Process" />
        </div>

        {/* Process steps */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {processSteps.map((step, index) => {
            const IconComponent = stepIcons[index] || Compass;
            return (
              <div
                key={step.number}
                className={`process-card card p-7 md:p-8 flex flex-col justify-between group ${
                  index === processSteps.length - 1 && processSteps.length % 3 === 2
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div>
                  {/* Top row: Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-[var(--accent)] opacity-40 font-serif group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

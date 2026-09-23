import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { strategicBenefits } from "@/content/pricing";

export default function PricingBenefits() {
  return (
    <section className="section py-16 sm:py-24 bg-[var(--bg-surface)] dark:bg-[#07080a] border-y border-[var(--border)] dark:border-white/10 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-600/10 dark:bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <SectionEyebrow label="Strategic Partnership" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight mt-2">
              Your{" "}
              <span className="font-serif italic text-[var(--accent)] font-medium">
                All-in-One
              </span>{" "}
              Solution
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3">
              Everything you need to turn design and development into real, measurable business impact.
            </p>
          </div>

          <div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium text-sm transition-all shadow-md group"
            >
              <span>Book an appointment</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicBenefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`p-6 sm:p-8 rounded-3xl bg-[var(--bg-page)] dark:bg-[#0E1015] border border-[var(--border)] dark:border-white/10 hover:border-purple-500/30 transition-all duration-300 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] dark:text-purple-400 dark:bg-purple-500/15 border border-[var(--accent)]/20 dark:border-purple-500/20 flex items-center justify-center font-bold text-sm mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

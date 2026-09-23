import { ArrowUpRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { livePortfolioItems } from "@/content/pricing";

export default function PricingFigmaProjects() {
  return (
    <section className="section py-16 sm:py-20">
      <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SectionEyebrow label="Live Design Deliverables" className="justify-center" />
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mt-2 mb-3">
            Explore Our{" "}
            <span className="font-serif italic font-medium text-[var(--accent)]">
              Live Deliverables
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            Dive into our collection of projects that showcase creativity, precision, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {livePortfolioItems.map((item) => (
            <div
              key={item.role}
              className="p-6 rounded-3xl bg-[var(--bg-surface)] dark:bg-[#0E1015] border border-[var(--border)] dark:border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 38 57">
                      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0zM0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0zM0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5zM0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5zM19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2 tracking-tight">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {item.tagline}
                </p>
              </div>

              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent)] dark:text-purple-400 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

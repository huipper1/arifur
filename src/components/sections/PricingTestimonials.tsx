import { Quote } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { clientSuccessStories } from "@/content/pricing";

export default function PricingTestimonials() {
  return (
    <section className="section py-16 sm:py-24 bg-[var(--bg-surface)] dark:bg-[#07080a] border-t border-[var(--border)] dark:border-white/10">
      <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SectionEyebrow label="Client Reviews" className="justify-center" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mt-2 mb-3">
            Success Stories That{" "}
            <span className="font-serif italic font-medium text-[var(--accent)]">
              Inspire Us
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            Trusted by founders, product leaders, and design directors around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientSuccessStories.map((story) => (
            <div
              key={story.author}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-page)] dark:bg-[#0E1015] border border-[var(--border)] dark:border-white/10 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-[var(--accent)]/30 dark:text-purple-400/40 mb-4" />
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)] dark:border-white/10">
                <p className="font-bold text-sm text-[var(--text-primary)]">
                  {story.author}
                </p>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                  {story.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

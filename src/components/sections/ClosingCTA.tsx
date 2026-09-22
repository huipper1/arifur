"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useBlurReveal } from "@/hooks/useGSAP";

export default function ClosingCTA() {
  const containerRef = useBlurReveal<HTMLDivElement>({ y: 24, blur: 8 });

  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner">
        <div
          ref={containerRef}
          className="relative rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden shadow-xl"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Q2/Q3 Collaborations</span>
          </div>

          <h2 className="text-[length:var(--text-h1)] font-bold tracking-tight mb-4 max-w-[640px] mx-auto">
            Ready to{" "}
            <span className="text-[var(--accent)] font-serif italic">
              Start Your Project?
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg mb-8 max-w-[480px] mx-auto leading-relaxed">
            Share your idea and let&apos;s figure out the best, most practical way to
            bring it to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="btn btn-primary text-base px-8 py-4 shadow-lg shadow-[var(--accent)]/20"
            >
              Discuss Your Project
              <span className="btn-circle-arrow">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


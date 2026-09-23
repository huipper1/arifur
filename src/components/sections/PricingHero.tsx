import Link from "next/link";

export default function PricingHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
      {/* Ambient background glow matching Design Monks atmosphere */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] bg-[var(--accent)]/10 dark:bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-inner relative z-10 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        {/* Breadcrumb matching Design Monks (Home > Pricing) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--text-tertiary)] mb-5">
          <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--accent)] font-medium">Pricing</span>
        </div>

        {/* Eyebrow badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] shadow-xs">
            <span className="flex h-2 w-2 relative items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-[13px] font-medium text-[var(--text-secondary)] tracking-tight">
              Flexible &amp; Transparent Packages
            </span>
          </div>
        </div>

        {/* Main Title matching Design Monks */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] mb-5">
          Premium Quality With{" "}
          <span className="font-serif italic font-medium text-[var(--accent)]">
            Affordability &amp; Flexibility
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Personalize your plan for custom solutions according to your business needs
        </p>
      </div>
    </section>
  );
}

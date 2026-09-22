import { Sparkles } from "lucide-react";

const marqueeItems = [
  "SaaS Development",
  "Mobile Apps",
  "Web Applications",
  "MVP Planning",
  "Product Improvement",
  "Full-Stack Architecture",
  "API & Cloud Solutions",
  "Automation & Workflows",
];

export default function MarqueeStrip() {
  // Duplicate items for seamless infinite scroll
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-strip border-y border-[rgba(255,255,255,0.06)] py-3" aria-hidden="true">
      <div className="marquee-content flex items-center">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-3 text-xs sm:text-sm font-medium tracking-wider uppercase text-[var(--text-on-dark-muted)] hover:text-white transition-colors">
            <span>{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 opacity-85" />
          </span>
        ))}
      </div>
    </div>
  );
}

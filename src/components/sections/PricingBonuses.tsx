import { Layers, Code2, Kanban, MessageSquare } from "lucide-react";
import { bonusFeatures } from "@/content/pricing";

export default function PricingBonuses() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-6 h-6 text-purple-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-purple-400" />;
      case "Kanban":
        return <Kanban className="w-6 h-6 text-purple-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section className="section py-12 sm:py-16">
      <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonusFeatures.map((bonus) => (
            <div
              key={bonus.title}
              className="p-6 rounded-2xl bg-[var(--bg-surface)] dark:bg-[#0E1015] border border-[var(--border)] dark:border-white/10 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getIcon(bonus.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2">
                {bonus.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

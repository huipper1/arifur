import Link from "next/link";
import { ArrowUpRight, Clock, Users, RefreshCw, Sparkles } from "lucide-react";
import { customPricingSteps, valuePropositions } from "@/content/pricing";

interface CustomPricingCTAProps {
  embeddedInTab?: boolean;
}

export default function CustomPricingCTA({ embeddedInTab = false }: CustomPricingCTAProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-5 h-5 text-purple-400" />;
      case "Users":
        return <Users className="w-5 h-5 text-purple-400" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className={`w-full ${embeddedInTab ? "mt-4" : "mt-16"} rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0C] text-white p-6 sm:p-10 md:p-12 relative shadow-2xl`}>
      {/* Ambient decorative glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[var(--accent)]/10 blur-[90px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Tailored Enterprise Solutions</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Custom Pricing, Tailored for You
        </h2>
        <p className="text-sm sm:text-base text-neutral-400">
          Share your design vision — we’ll provide a quote that fits your exact needs.
        </p>
      </div>

      {/* 4 Step Process Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 relative z-10">
        {customPricingSteps.map((step) => (
          <div
            key={step.step}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold text-lg flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-purple-500/20 transition-all">
              {step.step}
            </div>
            <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* 3 Value Propositions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10 relative z-10">
        {valuePropositions.map((vp) => (
          <div
            key={vp.title}
            className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {getIcon(vp.icon)}
              </div>
              <h4 className="text-base font-semibold text-white">
                {vp.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {vp.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA Action Button */}
      <div className="mt-10 sm:mt-12 text-center relative z-10">
        <Link
          href="/contact/?plan=custom-enterprise"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer group"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
            boxShadow: "0 10px 30px rgba(124, 58, 237, 0.4)",
          }}
        >
          <span>Share Your Requirements</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

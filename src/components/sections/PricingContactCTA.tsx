import Link from "next/link";
import { ArrowUpRight, MessageCircle, Clock, ShieldCheck, Users } from "lucide-react";
import { profile } from "@/content/profile";
import { formatPhoneDisplay, getPrimaryWhatsAppUrl } from "@/lib/helpers";

export default function PricingContactCTA() {
  return (
    <section className="section py-16 sm:py-24">
      <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6">
        <div
          style={{
            background: "linear-gradient(135deg, #121318 0%, #08090b 100%)",
            borderColor: "rgba(255, 255, 255, 0.12)",
          }}
          className="rounded-3xl border p-8 sm:p-12 lg:p-16 relative overflow-hidden text-white shadow-2xl"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>100% Value Guarantee</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                Why risk it with the wrong partner?{" "}
                <span className="font-serif italic text-[var(--accent)]">
                  Secure your project’s future today.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-xl">
                Say goodbye to fragmented handoffs and unreliable timelines. We lead you from idea to high-converting product with speed, craft, and clarity.
              </p>

              {/* Guarantees List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                  <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Expect a response from us within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>We&apos;re happy to sign an NDA upon request</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                  <Users className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Get direct access to senior design and engineering specialists</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                    boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-white transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                >
                  <span>Book a Call Directly</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={getPrimaryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card / Contact Details Box */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    AR
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {profile.displayName}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {profile.role} &amp; {profile.companyRole}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-neutral-300">
                  <div>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">
                      Direct WhatsApp
                    </span>
                    <a
                      href={getPrimaryWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 transition-colors font-medium flex items-center gap-2"
                    >
                      <span>{formatPhoneDisplay(profile.whatsappPrimary)}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-white hover:text-purple-400 transition-colors font-medium flex items-center gap-2"
                    >
                      <span className="truncate">{profile.email}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">
                      Location &amp; Availability
                    </span>
                    <p className="text-neutral-300 text-xs leading-relaxed">
                      Based in {profile.location} • Available for global founders and remote teams worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

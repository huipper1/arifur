"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  pricingCategories,
  subscriptionBillingPeriods,
  type PricingPackage,
} from "@/content/pricing";
import CustomPricingCTA from "./CustomPricingCTA";

export default function PricingTabs() {
  const [activeCategory, setActiveCategory] = useState<string>("website");
  const [activeWebsiteSubTab, setActiveWebsiteSubTab] = useState<string>("1-4-pages");
  const [activeWebAppSubTab, setActiveWebAppSubTab] = useState<string>("1-10-screens");
  const [activeMobileSubTab, setActiveMobileSubTab] = useState<string>("1-10-screens");
  const [activeBillingPeriod, setActiveBillingPeriod] = useState<"monthly" | "quarterly" | "yearly">("monthly");

  const currentCategory = pricingCategories.find((c) => c.id === activeCategory) || pricingCategories[0];

  // Helper to render checkmark icon matching Design Monks SVG
  const CheckIcon = ({ isPopular }: { isPopular?: boolean }) => (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
        isPopular ? "bg-purple-500/20 text-purple-400" : "bg-white/10 text-emerald-400"
      }`}
    >
      <svg
        className="w-3 h-3 stroke-[2.5]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );

  // Helper to render a pricing card
  const renderCard = (pkg: PricingPackage, idx: number) => {
    const isPopular = pkg.isPopular || false;

    return (
      <div
        key={`${pkg.name}-${idx}`}
        style={
          isPopular
            ? {
                border: "1px solid rgba(127, 33, 255, 0.60)",
                background:
                  "linear-gradient(162deg, rgba(95, 0, 224, 0.20) 8.41%, rgba(95, 0, 224, 0.00) 47.02%, rgba(95, 0, 224, 0.00) 81.37%, rgba(95, 0, 224, 0.20) 100%), #0A0A0C",
                boxShadow:
                  "0px 8px 24px 0px rgba(255, 255, 255, 0.09) inset, 0px 16px 24px 0px rgba(23, 11, 38, 0.10)",
              }
            : undefined
        }
        className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
          isPopular
            ? "border-purple-500/60 z-10"
            : "bg-[#0A0A0C] border border-white/10 hover:border-white/20"
        }`}
      >
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-6 right-6">
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white tracking-wide uppercase"
            >
              <Sparkles className="w-3 h-3" />
              <span>Popular</span>
            </span>
          </div>
        )}

        <div>
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              {pkg.price}
            </span>
            {pkg.billingPeriod && (
              <span className="text-xs text-neutral-400 font-medium">
                {pkg.billingPeriod}
              </span>
            )}
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-sm font-medium text-neutral-400 mt-1">
            {pkg.tagline}
          </p>

          {/* Package Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-5 pb-5 border-b border-white/10 tracking-tight">
            {pkg.name}
          </h3>

          {/* Feature items */}
          <ul className="mt-6 space-y-3.5 mb-8">
            {pkg.features.map((feature, fIdx) => (
              <li
                key={fIdx}
                className="flex items-start gap-3 text-sm text-neutral-300 leading-snug"
              >
                <CheckIcon isPopular={isPopular} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href={pkg.ctaHref || "/contact/"}
            style={
              isPopular
                ? {
                    background:
                      "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.45)",
                  }
                : undefined
            }
            className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] group cursor-pointer ${
              isPopular
                ? "text-white hover:brightness-110"
                : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
            }`}
          >
            <span>{pkg.ctaLabel || "Book a Call"}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="section pt-0 pb-16">
      <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── 1. Top Category Tabs Capsule (Website · Web App · Mobile App · Branding · Subscription) ── */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div
            style={{
              backgroundColor: "#0d0e12",
              borderColor: "rgba(255, 255, 255, 0.12)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
            }}
            className="inline-flex p-1.5 rounded-full border max-w-full overflow-x-auto no-scrollbar"
            role="tablist"
            aria-label="Pricing Categories"
          >
            {pricingCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  style={
                    isActive
                      ? {
                          backgroundColor: "#FFFFFF",
                          color: "#0A0A0A",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                        }
                      : {
                          color: "rgba(255, 255, 255, 0.7)",
                        }
                  }
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer hover:text-white ${
                    isActive ? "!text-[#0A0A0A] font-bold" : ""
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 2. Sub-tabs / Page selectors for Website ── */}
        {activeCategory === "website" && currentCategory.subTabs && (
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1 rounded-2xl bg-black/40 border border-white/10 max-w-full">
              {currentCategory.subTabs.map((sub) => {
                const isActive = activeWebsiteSubTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveWebsiteSubTab(sub.id)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 3. Sub-tabs for Web App ── */}
        {activeCategory === "web-app" && currentCategory.subTabs && (
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1 rounded-2xl bg-black/40 border border-white/10 max-w-full">
              {currentCategory.subTabs.map((sub) => {
                const isActive = activeWebAppSubTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveWebAppSubTab(sub.id)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 4. Sub-tabs for Mobile App ── */}
        {activeCategory === "mobile-app" && currentCategory.subTabs && (
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1 rounded-2xl bg-black/40 border border-white/10 max-w-full">
              {currentCategory.subTabs.map((sub) => {
                const isActive = activeMobileSubTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveMobileSubTab(sub.id)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 5. Billing Period Switcher for Subscription ── */}
        {activeCategory === "subscription" && (
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex gap-2 p-1.5 rounded-full bg-black/50 border border-white/15">
              {(["monthly", "quarterly", "yearly"] as const).map((period) => {
                const isActive = activeBillingPeriod === period;
                const periodData = subscriptionBillingPeriods[period];
                return (
                  <button
                    key={period}
                    onClick={() => setActiveBillingPeriod(period)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-white text-black font-bold shadow-md"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <span>{periodData.label}</span>
                    {periodData.badge && (
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        {periodData.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 6. Pricing Cards Grid / Enterprise View ── */}
        {activeCategory === "website" && (
          <>
            {activeWebsiteSubTab === "enterprise" ? (
              <CustomPricingCTA embeddedInTab />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {(
                  currentCategory.subTabs?.find(
                    (s) => s.id === activeWebsiteSubTab
                  )?.packages || []
                ).map(renderCard)}
              </div>
            )}
          </>
        )}

        {activeCategory === "web-app" && (
          <>
            {activeWebAppSubTab === "enterprise" ? (
              <CustomPricingCTA embeddedInTab />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {(
                  currentCategory.subTabs?.find(
                    (s) => s.id === activeWebAppSubTab
                  )?.packages || []
                ).map(renderCard)}
              </div>
            )}
          </>
        )}

        {activeCategory === "mobile-app" && (
          <>
            {activeMobileSubTab === "enterprise" ? (
              <CustomPricingCTA embeddedInTab />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {(
                  currentCategory.subTabs?.find(
                    (s) => s.id === activeMobileSubTab
                  )?.packages || []
                ).map(renderCard)}
              </div>
            )}
          </>
        )}

        {activeCategory === "branding" && currentCategory.packages && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {currentCategory.packages.map(renderCard)}
          </div>
        )}

        {activeCategory === "subscription" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Startup Plan */}
            {renderCard(
              {
                name: "Startup",
                price:
                  subscriptionBillingPeriods[activeBillingPeriod].plans.startup
                    .price,
                billingPeriod: `/${activeBillingPeriod === "monthly" ? "mo" : activeBillingPeriod === "quarterly" ? "quarter" : "year"}`,
                tagline:
                  subscriptionBillingPeriods[activeBillingPeriod].plans.startup
                    .period,
                features:
                  subscriptionBillingPeriods[activeBillingPeriod].plans.startup
                    .features,
                ctaLabel: "Book a Call",
                ctaHref: `/contact/?plan=subscription-startup-${activeBillingPeriod}`,
              },
              0
            )}

            {/* Growth Plan (Popular) */}
            {renderCard(
              {
                name: "Growth",
                price:
                  subscriptionBillingPeriods[activeBillingPeriod].plans.growth
                    .price,
                billingPeriod: `/${activeBillingPeriod === "monthly" ? "mo" : activeBillingPeriod === "quarterly" ? "quarter" : "year"}`,
                tagline:
                  subscriptionBillingPeriods[activeBillingPeriod].plans.growth
                    .period,
                isPopular: true,
                features:
                  subscriptionBillingPeriods[activeBillingPeriod].plans.growth
                    .features,
                ctaLabel: "Book a Call",
                ctaHref: `/contact/?plan=subscription-growth-${activeBillingPeriod}`,
              },
              1
            )}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle2, Globe, ChevronDown, MessageCircle, Search } from "lucide-react";
import { profile } from "@/content/profile";
import { formatPhoneDisplay, getWhatsAppUrl } from "@/lib/helpers";

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export const COUNTRIES: CountryOption[] = [
  { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", dialCode: "+880" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dialCode: "+1" },
  { code: "AU", name: "Australia", flag: "🇦🇺", dialCode: "+61" },
  { code: "DE", name: "Germany", flag: "🇩🇪", dialCode: "+49" },
  { code: "FR", name: "France", flag: "🇫🇷", dialCode: "+33" },
  { code: "IN", name: "India", flag: "🇮🇳", dialCode: "+91" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", dialCode: "+971" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", dialCode: "+65" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", dialCode: "+31" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", dialCode: "+41" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", dialCode: "+46" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", dialCode: "+353" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", dialCode: "+64" },
  { code: "ES", name: "Spain", flag: "🇪🇸", dialCode: "+34" },
  { code: "IT", name: "Italy", flag: "🇮🇹", dialCode: "+39" },
  { code: "JP", name: "Japan", flag: "🇯🇵", dialCode: "+81" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", dialCode: "+82" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", dialCode: "+55" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", dialCode: "+27" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", dialCode: "+966" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", dialCode: "+92" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", dialCode: "+60" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", dialCode: "+62" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", dialCode: "+90" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", dialCode: "+234" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", dialCode: "+52" },
];

export interface ContactPerson {
  name: string;
  role: string;
  avatarSrc: string;
  phoneDisplay: string;
  whatsappUrl?: string;
  bookingUrl?: string;
  bookingText?: string;
}

export interface InquiryFormData {
  email: string;
  whatsapp: string;
  budget: string;
  details: string;
}

export interface TickerContent {
  avatarsSrc?: string;
  avatarsAlt?: string;
  items?: Array<{
    prefix?: string;
    serifItalic1?: string;
    middle?: string;
    serifItalic2?: string;
    suffix?: string;
  }>;
  separator?: string;
  speedSeconds?: number;
  bgColor?: string;
}

export interface BrandInquirySectionProps {
  /** Optional eyebrow pill tag at the top of the card */
  badgeText?: string;
  /** Main heading line 1 (e.g. "Enhance Your Brand") */
  titleLine1?: string;
  /** Main heading line 2 emphasis (e.g. "Potential") */
  titleLine2?: string;
  /** Main heading line 2 serif italic accent (e.g. "At No Cost!") */
  titleItalicAccent?: string;
  /** Checklist guarantees displayed below the title */
  checklist?: string[];
  /** Dedicated contact specialist / representative */
  contactPerson?: ContactPerson;
  /** Budget categories (arranged into 2 rows matching design) */
  budgetRows?: string[][];
  /** Form input labels */
  labels?: {
    email?: string;
    whatsapp?: string;
    budget?: string;
    details?: string;
    submitButton?: string;
  };
  /** Form input placeholders */
  placeholders?: {
    email?: string;
    whatsapp?: string;
    details?: string;
  };
  /** Optional submit handler */
  onSubmit?: (data: InquiryFormData) => void | Promise<void>;
  /** Toggle bottom lime guarantee ticker banner */
  showTickerBanner?: boolean;
  /** Custom ticker configurations */
  ticker?: TickerContent;
  /** Custom wrapper class */
  className?: string;
  /** HTML anchor ID */
  id?: string;
}

export default function BrandInquirySection({
  badgeText,
  titleLine1 = "Enhance Your Brand",
  titleLine2 = "Potential",
  titleItalicAccent = "At No Cost!",
  checklist = [
    "Expect a response from us within 24 hours",
    "We're happy to sign an NDA upon request.",
    "Get access to a team of dedicated product specialists.",
  ],
  contactPerson = {
    name: profile.displayName || "Arifur Rahman",
    role: "Founder & Full-Stack Engineer",
    avatarSrc: profile.portraitSrc || "/images/arifur-portrait.png",
    phoneDisplay: formatPhoneDisplay(profile.whatsappPrimary || "+8801756601431"),
    whatsappUrl: getWhatsAppUrl(profile.whatsappPrimary || "+8801756601431"),
    bookingUrl: "/contact",
    bookingText: "Book a Call Directly",
  },
  budgetRows = [
    ["Less than $5K", "$5K - $10K", "$10K - $20K"],
    ["$20K - $50K", "More than $50K"],
  ],
  labels = {
    email: "Your Email*",
    whatsapp: "Whatsapp Number",
    budget: "Project Budget",
    details: "Project Details*",
    submitButton: "Send Inquiry",
  },
  placeholders = {
    email: "yourmail@gmail.com",
    whatsapp: "123 456 7890",
    details: "I want to redesign my website..",
  },
  onSubmit,
  showTickerBanner = true,
  ticker = {
    avatarsSrc: "/images/cta-avatars.png",
    avatarsAlt: "40+ Satisfied Clients",
    items: [
      {
        prefix: "Don't Miss Out - Secure Your ",
        serifItalic1: "Brand's Future",
        middle: " Today. Why Risk It With The ",
        serifItalic2: "Wrong Partner?",
        suffix: " Get 100% Value and Guarantee.",
      },
    ],
    separator: "✦",
    speedSeconds: 24,
    bgColor: "#d7fa52",
  },
  className = "",
  id = "inquiry",
}: BrandInquirySectionProps) {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Dynamic Country Code Picker State
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(COUNTRIES[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setCountryDropdownOpen(false);
        setCountrySearchQuery("");
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setCountryDropdownOpen(false);
        setCountrySearchQuery("");
      }
    }

    if (countryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [countryDropdownOpen]);

  const filteredCountries = COUNTRIES.filter((c) => {
    const q = countrySearchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please provide your email address.");
      return;
    }
    if (!projectDetails.trim()) {
      setError("Please share a brief summary of your project.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit({
          email,
          whatsapp: whatsapp ? `${selectedCountry.dialCode} ${whatsapp}` : "",
          budget: selectedBudget,
          details: projectDetails,
        });
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setWhatsapp("");
    setSelectedBudget("");
    setProjectDetails("");
    setError("");
  };

  const directWhatsAppUrl = () => {
    const fullNumber = whatsapp ? `${selectedCountry.dialCode} ${whatsapp}` : "";
    const message = encodeURIComponent(
      `Hi ${contactPerson.name}!\n\nEmail: ${email}\nPhone: ${fullNumber}\nBudget: ${selectedBudget || "Flexible"}\nDetails: ${projectDetails}`
    );
    const cleanPhone = contactPerson.phoneDisplay.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanPhone}?text=${message}`;
  };

  const tickerItem = ticker.items?.[0] || {
    prefix: "Don't Miss Out - Secure Your ",
    serifItalic1: "Brand's Future",
    middle: " Today. Why Risk It With The ",
    serifItalic2: "Wrong Partner?",
    suffix: " Get 100% Value and Guarantee.",
  };

  return (
    <section id={id} className={`w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-[1240px] mx-auto">
        {/* ── Main Obsidian Dark Card ──────────────────────────────── */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#0c0d12] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 text-white">
          {/* Top-Right Golden Amber Glow */}
          <div
            className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(217, 119, 6, 0.35) 0%, rgba(180, 83, 9, 0.18) 35%, rgba(180, 83, 9, 0.05) 55%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Bottom-Left Warm Amber/Violet Glow */}
          <div
            className="absolute -bottom-28 -left-28 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(217, 119, 6, 0.22) 0%, rgba(147, 51, 234, 0.14) 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* 2-Column Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* ── Left Column: Value Prop & Contact Person ──────────── */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
              <div>
                {/* Optional Pill Tag */}
                {badgeText && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/35 bg-emerald-500/10 text-emerald-400 text-xs sm:text-[13px] font-medium tracking-tight mb-5">
                    <span>{badgeText}</span>
                  </div>
                )}

                {/* Main Heading with Guaranteed 2-Line Structure */}
                <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] font-bold !text-white tracking-tight leading-[1.12] mb-6">
                  <span className="block whitespace-nowrap !text-white">{titleLine1}</span>
                  <span className="block !text-white">
                    <span>{titleLine2} </span>
                    <span className="font-serif italic font-normal !text-white">
                      {titleItalicAccent}
                    </span>
                  </span>
                </h2>

                {/* Key Checklist / Guarantees */}
                <ul className="space-y-3.5 sm:space-y-4 max-w-lg">
                  {checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-white/60 flex items-center justify-center text-white">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span className="text-neutral-200 !text-neutral-200 text-sm sm:text-[15px] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Person Card — Stacked Vertically as in Reference */}
              <div className="pt-2 sm:pt-4 flex flex-col items-start gap-4">
                {/* Avatar with rounded corners */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-[24px] overflow-hidden shrink-0 border border-white/10 bg-[#9d8ff7]/25 shadow-xl">
                  <Image
                    src={contactPerson.avatarSrc}
                    alt={contactPerson.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 176px, 192px"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="!text-white font-bold text-xl sm:text-2xl tracking-tight">
                    {contactPerson.name}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-0.5">
                    {contactPerson.role}
                  </p>

                  {/* Phone / WhatsApp Line */}
                  <a
                    href={contactPerson.whatsappUrl || `https://wa.me/${contactPerson.phoneDisplay.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors text-sm mt-3 group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <span className="tracking-wide font-normal">{contactPerson.phoneDisplay}</span>
                  </a>

                  {/* Book a Call Directly Link */}
                  {contactPerson.bookingUrl && (
                    <a
                      href={contactPerson.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#8b5cf6] hover:text-[#a78bfa] transition-colors mt-1.5 inline-block"
                    >
                      {contactPerson.bookingText || "Book a Call Directly"}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* ── Right Column: Interactive Inquiry Form ─────────────── */}
            <div className="lg:col-span-6 pt-1 lg:pt-3">
              {submitted ? (
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold !text-white">Inquiry Received!</h3>
                  <p className="text-neutral-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you! We have received your project details and will review them and respond within 24 hours.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={directWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-900/30"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email & WhatsApp Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                    {/* Your Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="inquiry-email"
                        className="block text-sm font-semibold text-white/95 tracking-tight"
                      >
                        {labels.email}
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholders.email}
                        className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 text-white placeholder:text-neutral-500 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    {/* WhatsApp Number with Dynamic Country Code Selector */}
                    <div className="space-y-1.5 relative" ref={countryDropdownRef}>
                      <label
                        htmlFor="whatsapp-number"
                        className="block text-sm font-semibold text-white/95 tracking-tight"
                      >
                        {labels.whatsapp}
                      </label>
                      <div className="flex items-center border-0 border-b border-white/20 focus-within:border-white transition-colors relative">
                        {/* Interactive Country Trigger Button */}
                        <button
                          type="button"
                          onClick={() => setCountryDropdownOpen((prev) => !prev)}
                          className="flex items-center gap-1.5 py-2.5 pr-2.5 select-none shrink-0 text-neutral-300 hover:text-white transition-colors cursor-pointer group focus:outline-none"
                          aria-label="Select Country Code"
                          aria-expanded={countryDropdownOpen}
                        >
                          <span className="text-base leading-none select-none">{selectedCountry.flag}</span>
                          <span className="text-xs font-semibold text-neutral-200 tracking-tight">{selectedCountry.dialCode}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-transform duration-200 ${
                              countryDropdownOpen ? "rotate-180 text-white" : ""
                            }`}
                          />
                        </button>

                        <input
                          id="whatsapp-number"
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder={placeholders.whatsapp}
                          className="w-full bg-transparent border-0 py-2.5 pl-1.5 text-white placeholder:text-neutral-500 text-sm sm:text-base focus:outline-none"
                        />
                      </div>

                      {/* Minimal & Attractive Glassmorphic Floating Country Dropdown */}
                      {countryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 z-50 w-72 sm:w-80 rounded-2xl bg-[#11131c]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-2.5 space-y-2 animate-in fade-in zoom-in-95 duration-150">
                          {/* Search Header */}
                          <div className="relative">
                            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                            <input
                              type="text"
                              autoFocus
                              value={countrySearchQuery}
                              onChange={(e) => setCountrySearchQuery(e.target.value)}
                              placeholder="Search country or code..."
                              className="w-full pl-8 pr-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                            />
                          </div>

                          {/* Country List */}
                          <div className="max-h-56 overflow-y-auto space-y-0.5 pr-1 custom-scrollbar">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((c) => {
                                const isCurrent = c.code === selectedCountry.code;
                                return (
                                  <button
                                    key={c.code}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setCountryDropdownOpen(false);
                                      setCountrySearchQuery("");
                                    }}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-left ${
                                      isCurrent
                                        ? "bg-[#8b5cf6]/25 border border-[#8b5cf6]/40 text-white font-medium"
                                        : "hover:bg-white/[0.08] text-neutral-300 hover:text-white"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 truncate pr-2">
                                      <span className="text-base leading-none">{c.flag}</span>
                                      <span className="truncate">{c.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                      <span className="font-mono text-[11px] text-neutral-400 font-semibold">
                                        {c.dialCode}
                                      </span>
                                      {isCurrent && (
                                        <Check className="w-3.5 h-3.5 text-[#8b5cf6]" />
                                      )}
                                    </div>
                                  </button>
                                );
                              })
                            ) : (
                              <p className="text-center py-4 text-xs text-neutral-500">
                                No countries found
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Budget Selector (Arranged in 2 exact rows: 3 pills + 2 pills) */}
                  <div className="space-y-2.5 pt-1">
                    <label className="block text-sm font-semibold text-white/95 tracking-tight">
                      {labels.budget}
                    </label>
                    <div className="space-y-2.5">
                      {budgetRows.map((row, rIdx) => (
                        <div key={rIdx} className="flex flex-wrap gap-2.5 sm:gap-3">
                          {row.map((category) => {
                            const isSelected = selectedBudget === category;
                            return (
                              <button
                                key={category}
                                type="button"
                                onClick={() =>
                                  setSelectedBudget(isSelected ? "" : category)
                                }
                                className={`px-4 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? "border border-[#8b5cf6] bg-[#8b5cf6]/25 text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]"
                                    : "border border-white/10 bg-[#12131a] text-neutral-300 hover:border-white/30 hover:text-white"
                                }`}
                              >
                                {category}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5 pt-1">
                    <label
                      htmlFor="project-details"
                      className="block text-sm font-semibold text-white/95 tracking-tight"
                    >
                      {labels.details}
                    </label>
                    <textarea
                      id="project-details"
                      rows={2}
                      required
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder={placeholders.details}
                      className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 text-white placeholder:text-neutral-500 text-sm sm:text-base focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {error && (
                    <p className="text-xs text-rose-400 font-medium">{error}</p>
                  )}

                  {/* Send Inquiry Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[12px] font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#5B42F3] via-[#6a4df5] to-[#7c57fa] hover:brightness-110 active:scale-[0.98] shadow-[0_8px_24px_rgba(99,77,240,0.4)] transition-all cursor-pointer group disabled:opacity-60"
                    >
                      <span>{isSubmitting ? "Sending..." : labels.submitButton}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Optional Lime Guarantee Ticker Banner below the Card ──── */}
        {showTickerBanner && (
          <div
            className="mt-5 w-full rounded-full overflow-hidden py-3 px-4 sm:px-6 flex items-center shadow-lg border"
            style={{
              backgroundColor: ticker.bgColor || "#d7fa52",
              borderColor: "#c4e84e",
              boxShadow: "0 10px 25px -5px rgba(215, 250, 82, 0.25)",
            }}
          >
            {/* Overlapping Avatars (No divider line, exact match to screenshot) */}
            {ticker.avatarsSrc && (
              <div className="shrink-0 flex items-center pr-3 sm:pr-4 pl-1">
                <div className="relative w-[136px] sm:w-[150px] h-[34px] sm:h-[38px]">
                  <Image
                    src={ticker.avatarsSrc}
                    alt={ticker.avatarsAlt || "Client Avatars"}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            )}

            {/* Marquee Ticker Text with Smooth Edge Dissolve */}
            <div
              style={{
                maskImage: "linear-gradient(to right, black 85%, transparent 99%)",
                WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 99%)",
              }}
              className="relative flex-1 overflow-hidden select-none whitespace-nowrap pl-2 sm:pl-3"
            >
              <div
                className="inline-flex items-center gap-8 animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused]"
                style={{
                  animationDuration: `${ticker.speedSeconds || 24}s`,
                }}
              >
                {[0, 1, 2, 3].map((idx) => (
                  <div key={idx} className="inline-flex items-center gap-8 shrink-0">
                    <span className="text-xs sm:text-[14.5px] font-semibold tracking-tight text-neutral-900 whitespace-nowrap leading-none flex items-center gap-1">
                      <span>{tickerItem.prefix}</span>
                      <span className="font-serif italic font-medium text-neutral-900">
                        {tickerItem.serifItalic1}
                      </span>
                      <span>{tickerItem.middle}</span>
                      <span className="font-serif italic font-medium text-neutral-900">
                        {tickerItem.serifItalic2}
                      </span>
                      <span>{tickerItem.suffix}</span>
                    </span>
                    <span className="text-neutral-900/40 text-xs">
                      {ticker.separator || "✦"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle2, Globe, ChevronDown, MessageCircle } from "lucide-react";

export interface BrandInquirySectionProps {
  badgeText?: string;
  titleRegular?: string;
  titleEmphasis?: string;
  titleSerifItalic?: string;
  checklist?: string[];
  contactPerson?: {
    name: string;
    role: string;
    avatarSrc: string;
    phoneDisplay: string;
    whatsappUrl?: string;
    bookingUrl?: string;
    bookingText?: string;
  };
  budgetCategories?: string[];
  bannerText?: {
    intro?: string;
    highlight1?: string;
    middle?: string;
    highlight2?: string;
    suffix?: string;
  };
  className?: string;
  id?: string;
}

export default function BrandInquirySection({
  badgeText = "Claim a $799 Consultation, on Us!",
  titleRegular = "Enhance Your Brand",
  titleEmphasis = "Potential",
  titleSerifItalic = "At No Cost!",
  checklist = [
    "Expect a response from us within 24 hours",
    "We're happy to sign an NDA upon request.",
    "Get access to a team of dedicated product specialists.",
  ],
  contactPerson = {
    name: "Abdullah Al Noman",
    role: "COO & Co-founder",
    avatarSrc: "/images/contact-avatar.png",
    phoneDisplay: "+1 (716) 503-6335",
    whatsappUrl: "https://wa.me/17165036335",
    bookingUrl: "https://designmonks.co/meeting",
    bookingText: "Book a Call Directly",
  },
  budgetCategories = [
    "Less than $5K",
    "$5K - $10K",
    "$10K - $20K",
    "$20K - $50K",
    "More than $50K",
  ],
  bannerText = {
    intro: "Why risk it with the ",
    highlight1: "wrong partner",
    middle: "? Get 100% value and guarantee. Don't miss out - Secure your ",
    highlight2: "brand's future",
    suffix: " today.",
  },
  className = "",
  id = "inquiry",
}: BrandInquirySectionProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setWhatsapp("");
    setSelectedBudget("");
    setProjectDetails("");
  };

  const directWhatsAppUrl = () => {
    const message = encodeURIComponent(
      `Hi ${contactPerson.name}!\n\nName: ${fullName || "Client"}\nEmail: ${email}\nBudget: ${selectedBudget || "Flexible"}\nDetails: ${projectDetails}`
    );
    const cleanPhone = contactPerson.phoneDisplay.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanPhone}?text=${message}`;
  };

  return (
    <section id={id} className={`w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-[1240px] mx-auto">
        {/* ── Main Obsidian Dark Card ──────────────────────────────── */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#0c0d12] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 text-white">
          {/* Ambient Lighting Glows matching reference screenshot */}
          {/* Top-Right Golden Amber Glow */}
          <div
            className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(217, 119, 6, 0.32) 0%, rgba(180, 83, 9, 0.16) 35%, rgba(180, 83, 9, 0.05) 55%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Bottom-Left Warm Ambient Glow */}
          <div
            className="absolute -bottom-28 -left-28 w-[450px] h-[450px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(217, 119, 6, 0.22) 0%, rgba(147, 51, 234, 0.12) 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* 2-Column Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ── Left Column: Value Prop & Contact Person ──────────── */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/35 bg-emerald-500/10 text-emerald-400 text-xs sm:text-[13px] font-medium tracking-tight mb-5">
                  <span>{badgeText}</span>
                </div>

                {/* Main Heading with Serif Italic Accent */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.12] mb-6">
                  {titleRegular}{" "}
                  <span className="block sm:inline">{titleEmphasis} </span>
                  <span className="font-serif italic font-normal text-white">
                    {titleSerifItalic}
                  </span>
                </h2>

                {/* Key Checklist / Guarantees */}
                <ul className="space-y-3.5 sm:space-y-4">
                  {checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {/* Check inside circular stroke matching design */}
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-white/60 flex items-center justify-center text-white">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span className="text-neutral-300 text-sm sm:text-[15px] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Person Card */}
              <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start gap-5">
                {/* Avatar with rounded corners */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-white/15 bg-purple-950/30 shadow-md">
                  <Image
                    src={contactPerson.avatarSrc}
                    alt={contactPerson.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight">
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
                    <MessageCircle className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                    <span>{contactPerson.phoneDisplay}</span>
                  </a>

                  {/* Book a Call Directly Link */}
                  {contactPerson.bookingUrl && (
                    <a
                      href={contactPerson.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#9373fc] hover:text-[#b097ff] transition-colors mt-1 inline-block"
                    >
                      {contactPerson.bookingText || "Book a Call Directly"}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* ── Right Column: Interactive Inquiry Form ─────────────── */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-neutral-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you {fullName ? fullName : "for reaching out"}! We have received your project details and will review them and respond within 24 hours.
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
                      className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Full Name Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-semibold text-white/95 tracking-tight"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 text-white placeholder:text-neutral-500 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Email & WhatsApp Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    {/* Your Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="inquiry-email"
                        className="block text-sm font-semibold text-white/95 tracking-tight"
                      >
                        Your Email*
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourmail@gmail.com"
                        className="w-full bg-transparent border-0 border-b border-white/20 py-2.5 text-white placeholder:text-neutral-500 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    {/* WhatsApp Number */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="whatsapp-number"
                        className="block text-sm font-semibold text-white/95 tracking-tight"
                      >
                        Whatsapp Number
                      </label>
                      <div className="flex items-center border-0 border-b border-white/20 focus-within:border-white transition-colors">
                        <div className="flex items-center gap-1 text-neutral-400 py-2.5 pr-2 select-none shrink-0">
                          <Globe className="w-4 h-4 text-neutral-400" />
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                        <input
                          id="whatsapp-number"
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="123 456 7890"
                          className="w-full bg-transparent border-0 py-2.5 text-white placeholder:text-neutral-500 text-sm sm:text-base focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Budget Selector */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-white/95 tracking-tight">
                      Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {budgetCategories.map((category) => {
                        const isSelected = selectedBudget === category;
                        return (
                          <button
                            key={category}
                            type="button"
                            onClick={() =>
                              setSelectedBudget(isSelected ? "" : category)
                            }
                            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "border border-[#8b5cf6] bg-[#8b5cf6]/25 text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]"
                                : "border border-white/15 bg-white/[0.03] text-neutral-300 hover:border-white/35 hover:text-white"
                            }`}
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="project-details"
                      className="block text-sm font-semibold text-white/95 tracking-tight"
                    >
                      Project Details*
                    </label>
                    <textarea
                      id="project-details"
                      rows={2}
                      required
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="I want to redesign my website.."
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
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#5B42F3] via-[#634df0] to-[#7b57fa] hover:brightness-110 active:scale-[0.98] shadow-[0_8px_24px_rgba(99,77,240,0.35)] transition-all cursor-pointer group"
                    >
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Lime Guarantee Ticker Banner below the Card ──────────── */}
        <div className="mt-5 w-full rounded-full bg-[#d7f95a] text-neutral-900 overflow-hidden py-3 px-4 sm:px-6 flex items-center shadow-lg border border-[#c4e84e]">
          {/* Overlapping Avatars + 40 badge */}
          <div className="shrink-0 flex items-center pr-4 sm:pr-6 border-r border-neutral-900/15">
            <div className="relative w-28 sm:w-36 h-8 sm:h-9">
              <Image
                src="/images/cta-avatars.png"
                alt="Client Avatars"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Marquee Ticker Text */}
          <div className="relative flex-1 overflow-hidden select-none whitespace-nowrap pl-4 sm:pl-6">
            <div className="inline-flex items-center gap-12 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-neutral-900">
                <span className="font-serif italic font-bold">
                  {bannerText.intro}
                  {bannerText.highlight1}
                </span>
                {bannerText.middle}
                <span className="font-serif italic font-bold">
                  {bannerText.highlight2}
                </span>
                {bannerText.suffix}
              </span>

              <span className="text-neutral-900/40 text-xs">✦</span>

              <span className="text-xs sm:text-sm font-semibold tracking-tight text-neutral-900">
                <span className="font-serif italic font-bold">
                  {bannerText.intro}
                  {bannerText.highlight1}
                </span>
                {bannerText.middle}
                <span className="font-serif italic font-bold">
                  {bannerText.highlight2}
                </span>
                {bannerText.suffix}
              </span>

              <span className="text-neutral-900/40 text-xs">✦</span>

              <span className="text-xs sm:text-sm font-semibold tracking-tight text-neutral-900">
                <span className="font-serif italic font-bold">
                  {bannerText.intro}
                  {bannerText.highlight1}
                </span>
                {bannerText.middle}
                <span className="font-serif italic font-bold">
                  {bannerText.highlight2}
                </span>
                {bannerText.suffix}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

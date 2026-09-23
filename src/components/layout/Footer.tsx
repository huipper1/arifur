"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";
import { formatPhoneDisplay, getPrimaryWhatsAppUrl } from "@/lib/helpers";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full relative overflow-hidden bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300">
      {/* ── Top Pre-Footer CTA Section ──────────────────────────────── */}
      <div className="relative z-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 text-center px-4 sm:px-6">
        {/* Eyebrow / Pill Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] shadow-xs mb-6 sm:mb-8">
          <span className="flex h-2 w-2 relative items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[13px] font-medium text-[var(--text-secondary)] tracking-tight">
            Available for Q2/Q3 Collaborations
          </span>
        </div>

        {/* Main Heading (Editorial Serif) */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal sm:font-medium tracking-tight text-[var(--text-primary)] leading-[1.14] sm:leading-[1.1] max-w-4xl mx-auto mb-5 sm:mb-6">
          Built for brands <br className="hidden sm:inline" />
          that mean <span className="italic font-serif text-[var(--accent)]">business.</span>
        </h2>

        {/* Description Subtitle */}
        <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-[520px] mx-auto leading-relaxed mb-8 sm:mb-10">
          From early-stage MVPs to scaling products, I help founders and businesses
          turn ideas into robust, high-performance software. Let&apos;s build yours next.
        </p>

        {/* Action Button */}
        <div>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium text-sm sm:text-base shadow-[0_10px_25px_-4px_rgba(229,57,53,0.35)] dark:shadow-[0_10px_25px_-4px_rgba(255,107,107,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* ── Dark Luxury Obsidian Footer Body with Ambient Brand Glow ──── */}
      <div className="relative w-full bg-gradient-to-b from-[#181a20] via-[#101217] to-[#090a0d] text-white pt-16 sm:pt-20 md:pt-24 pb-0 overflow-hidden">
        {/* Soft Radial Ambient Mist Glows in Signature Brand Accent */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-full max-w-5xl h-60 bg-[var(--accent)]/15 blur-[95px] pointer-events-none rounded-full" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent)]/10 blur-[110px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[var(--accent)]/8 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Main Footer Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 md:pb-16">
            {/* Col 1: Brand & Socials (Span 3) */}
            <div className="lg:col-span-3 sm:col-span-2 md:col-span-3">
              <Link href="/" className="inline-flex items-center gap-3 group">
                {/* Logo Icon (3D frosted glass squircle with accent core) */}
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center p-2 group-hover:bg-white/20 transition-all">
                  <div className="w-full h-full rounded-[6px] bg-[var(--accent)] shadow-xs" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  {profile.shortName}
                  <span className="text-[var(--accent)]">.</span>
                </span>
              </Link>

              <p className="mt-3.5 text-sm text-neutral-400 leading-snug font-normal max-w-[230px]">
                {profile.role} &amp; {profile.companyRole}
                <br />
                <span className="text-neutral-500 text-xs">
                  Building practical software solutions.
                </span>
              </p>

              {/* Social Media Buttons */}
              <div className="mt-6 flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href={profile.socialLinks[0]?.url || "https://www.linkedin.com/in/arifurrahman"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={getPrimaryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Services (Span 2) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white/95 mb-4 tracking-tight">
                Services
              </h3>
              <ul className="space-y-2.5 text-[13px] text-neutral-400">
                <li>
                  <Link
                    href="/services/#saas"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    SaaS Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/#mobile"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/#web"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    Custom Web Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/#mvp"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    MVP Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/#improvement"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    Code Optimization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Navigation (Span 2) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white/95 mb-4 tracking-tight">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-[13px] text-neutral-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    About Arifur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    All Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    Selected Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing/"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    Pricing &amp; Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Direct Contact (Span 2) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white/95 mb-4 tracking-tight">
                Direct Contact
              </h3>
              <ul className="space-y-2.5 text-[13px] text-neutral-400">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-white transition-colors duration-150 inline-block truncate max-w-full"
                    title={profile.email}
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={getPrimaryWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    {formatPhoneDisplay(profile.whatsappPrimary)}
                  </a>
                </li>
                <li className="text-neutral-500 pt-1 text-xs leading-relaxed">
                  Based in {profile.location}
                  <br />
                  Working with clients globally
                </li>
              </ul>
            </div>

            {/* Col 5: Stay in touch / Updates (Span 3) */}
            <div className="lg:col-span-3 sm:col-span-2 md:col-span-3">
              <h3 className="text-sm font-semibold text-white/95 mb-2 tracking-tight">
                Stay in touch
              </h3>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Occasional engineering insights on SaaS architectures and product releases.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2.5 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-neutral-500 text-[13px] focus:outline-none focus:border-[var(--accent)] focus:bg-white/15 backdrop-blur-sm transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-medium text-[13px] transition-all shadow-md active:scale-[0.99] cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* ── Massive Brand Signature & Icon at Bottom ─────────────── */}
          <div className="pt-4 sm:pt-8 md:pt-10 pb-0 flex items-center justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 select-none overflow-hidden translate-y-3 sm:translate-y-5 md:translate-y-8">
            {/* 3D Glass Layered Squircle Icon with Accent Glow */}
            <div className="relative shrink-0 w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-[30px] sm:rounded-[44px] md:rounded-[56px] lg:rounded-[68px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-3 sm:p-4 md:p-6 lg:p-7 flex items-center justify-center">
              {/* Middle Layer */}
              <div className="w-full h-full rounded-[22px] sm:rounded-[32px] md:rounded-[42px] lg:rounded-[52px] bg-white/15 backdrop-blur-md border border-white/25 shadow-inner p-2.5 sm:p-3.5 md:p-5 lg:p-6 flex items-center justify-center">
                {/* Inner Solid White Core with subtle ambient warmth */}
                <div className="w-full h-full rounded-[14px] sm:rounded-[22px] md:rounded-[30px] lg:rounded-[38px] bg-gradient-to-br from-white via-white to-neutral-200 shadow-2xl" />
              </div>
            </div>

            {/* Giant Bold "Arifur." Typography */}
            <div className="tracking-[-0.04em] font-extrabold text-white leading-[0.8] text-[68px] sm:text-[116px] md:text-[160px] lg:text-[210px] xl:text-[260px]">
              {profile.shortName}
              <span className="text-[var(--accent)] font-serif">.</span>
            </div>
          </div>

          {/* Copyright bar with clearance for floating dock */}
          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 pb-36 md:pb-32 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 relative z-20">
            <p>© {currentYear} {profile.displayName}. All rights reserved.</p>
            <p>Full-Stack Web &amp; Mobile Development</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

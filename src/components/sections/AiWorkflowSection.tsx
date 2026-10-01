"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";

// ── Inline Vector Tool Icons for High-Res Crisp Display ─────────────
const Icons = {
  ChatGpt: () => (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.28 9.5a5.52 5.52 0 0 0-.48-3.4 5.6 5.6 0 0 0-3.32-2.73 5.7 5.7 0 0 0-4.6.48 5.64 5.64 0 0 0-2.48-1.92 5.56 5.56 0 0 0-4.54.12A5.6 5.6 0 0 0 4.1 4.54a5.67 5.67 0 0 0-1.6 3.63 5.56 5.56 0 0 0 .54 4.52 5.6 5.6 0 0 0-.48 3.4 5.6 5.6 0 0 0 3.32 2.73 5.7 5.7 0 0 0 4.6-.48 5.64 5.64 0 0 0 2.48 1.92 5.56 5.56 0 0 0 4.54-.12 5.6 5.6 0 0 0 2.76-2.59 5.67 5.67 0 0 0 1.6-3.63 5.56 5.56 0 0 0-.54-4.52ZM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    </svg>
  ),
  Claude: () => (
    <svg className="w-5 h-5 text-[#ea580c]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a1 1 0 0 1 1 1v4.06a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Zm7.07 3.93a1 1 0 0 1 0 1.41l-2.87 2.87a1 1 0 1 1-1.41-1.41l2.87-2.87a1 1 0 0 1 1.41 0ZM22 12a1 1 0 0 1-1 1h-4.06a1 1 0 0 1 0-2H21a1 1 0 0 1 1 1Zm-3.93 7.07a1 1 0 0 1-1.41 0l-2.87-2.87a1 1 0 1 1 1.41-1.41l2.87 2.87a1 1 0 0 1 0 1.41ZM12 22a1 1 0 0 1-1-1v-4.06a1 1 0 0 1 2 0V21a1 1 0 0 1-1 1Zm-7.07-3.93a1 1 0 0 1 0-1.41l2.87-2.87a1 1 0 1 1 1.41 1.41l-2.87 2.87a1 1 0 0 1-1.41 0ZM2 12a1 1 0 0 1 1-1h4.06a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm3.93-7.07a1 1 0 0 1 1.41 0l2.87 2.87a1 1 0 0 1-1.41 1.41L5.93 6.34a1 1 0 0 1 0-1.41Z" />
    </svg>
  ),
  Figma: () => (
    <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  ),
  Supabase: () => (
    <svg className="w-5 h-5 text-[#3ecf8e]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9 1.036c-.572-.715-1.734-.326-1.75.586l-.28 10.457h9.094c.86 0 1.34 1.01.78 1.664L9.843 23.125c-.563.665-1.636.326-1.724-.543l.4-10.457H.81c-.812 0-1.29-.915-.812-1.57L9.932 1.036c.55-.71 1.67-.32 1.968 0Z" />
    </svg>
  ),
  Cursor: () => (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  ),
  Miro: () => (
    <svg className="w-5 h-5 text-[#ffd02f]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h3.2l2.4 8.5L12 4h3.2l2.4 8.5L20 4h3.5l-3.8 16h-3.2L14 11.5 11.5 20H8.3L4 4Z" />
    </svg>
  ),
  Midjourney: () => (
    <svg className="w-5 h-5 text-[#60a5fa]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19c4-1 8-1 16 0M8 17c1.5-4 3.5-7 5-11 1 3 2 7 3 11M10 13c1.5-1 2.5-1 4 0" />
    </svg>
  ),
  Firefly: () => (
    <div className="w-5 h-5 rounded-[4px] bg-[#d92222] text-white font-bold text-[11px] flex items-center justify-center tracking-tighter">
      Fi
    </div>
  ),
  Bot: () => (
    <svg className="w-5 h-5 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7v1a3 3 0 0 1-3 3h-1v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1H6a3 3 0 0 1-3-3v-1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2ZM9 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  ),
  Flame: () => (
    <svg className="w-5 h-5 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-.67 2.33-2 4.33-4 6-1.5 1.25-2.5 3-2.5 5 0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.8-.73-3.43-1.92-4.6L15 6.8c-.3-.3-.8-.3-1.1 0L12 2Z" />
    </svg>
  ),
  V0: () => (
    <div className="w-5 h-5 rounded-md bg-[#8b5cf6]/30 text-[#c4b5fd] flex items-center justify-center font-bold text-xs">
      v0
    </div>
  ),
  MascotSmile: () => (
    <svg className="w-8 h-8 text-neutral-900" viewBox="0 0 32 32" fill="none">
      {/* Speech bubble silhouette with smile */}
      <path
        d="M6 14C6 9.58 9.58 6 14 6H18C22.42 6 26 9.58 26 14V17C26 21.42 22.42 25 18 25H12L7 28V23C6.35 22.1 6 21.1 6 20V14Z"
        fill="#111827"
      />
      {/* Smile curve inside */}
      <path
        d="M11.5 14C11.5 17 14 18.5 16 18.5C18 18.5 20.5 17 20.5 14"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export interface AiWorkflowSectionProps {
  badgeText?: string;
  titleRegular?: string;
  titleItalicAccent?: string;
  subtitle?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  className?: string;
  id?: string;
}

export default function AiWorkflowSection({
  badgeText = "AI-Powered Design",
  titleRegular = "Smarter Design, ",
  titleItalicAccent = "Supercharged By AI",
  subtitle = "From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-led design results.",
  avatarSrc,
  avatarAlt,
  className = "",
  id = "ai-workflow",
}: AiWorkflowSectionProps = {}) {
  const categories = [
    {
      title: "Discover & Strategy",
      tools: [
        { name: "Claude", icon: <Icons.Claude /> },
        { name: "Miro", icon: <Icons.Miro /> },
        { name: "ChatGPT", icon: <Icons.ChatGpt /> },
      ],
      produces: ["Discovery Report", "User Personas", "Content Hierarchy"],
    },
    {
      title: "Design",
      tools: [
        { name: "Figma", icon: <Icons.Figma /> },
        { name: "Midjourney", icon: <Icons.Midjourney /> },
        { name: "Firefly", icon: <Icons.Firefly /> },
        { name: "ChatGPT", icon: <Icons.ChatGpt /> },
      ],
      produces: ["Visual Direction", "UI Screens", "Design System"],
    },
    {
      title: "Build",
      tools: [
        { name: "Bot/v0", icon: <Icons.Bot /> },
        { name: "Supabase", icon: <Icons.Supabase /> },
        { name: "v0", icon: <Icons.V0 /> },
        { name: "Cursor", icon: <Icons.Cursor /> },
      ],
      produces: ["Codebase", "CMS Integration", "Component Docs"],
    },
    {
      title: "Optimise",
      tools: [
        { name: "Hotjar", icon: <Icons.Flame /> },
        { name: "Claude", icon: <Icons.Claude /> },
        { name: "ChatGPT", icon: <Icons.ChatGpt /> },
      ],
      produces: ["CRO Recommendations", "A/B Test Plan", "Launch Report"],
    },
  ];

  // Marquee background tool badges to populate the dual row backdrop behind the central hub
  const backgroundToolsRow1 = [
    <Icons.Firefly key="1" />,
    <Icons.Bot key="2" />,
    <Icons.Claude key="3" />,
    <Icons.Supabase key="4" />,
    <Icons.Miro key="5" />,
    <Icons.ChatGpt key="6" />,
    <Icons.Figma key="7" />,
    <Icons.Midjourney key="8" />,
    <Icons.Firefly key="9" />,
    <Icons.Bot key="10" />,
    <Icons.Claude key="11" />,
    <Icons.Supabase key="12" />,
  ];

  const backgroundToolsRow2 = [
    <Icons.Cursor key="2-1" />,
    <Icons.V0 key="2-2" />,
    <Icons.Midjourney key="2-3" />,
    <Icons.Flame key="2-4" />,
    <Icons.ChatGpt key="2-5" />,
    <Icons.Supabase key="2-6" />,
    <Icons.Claude key="2-7" />,
    <Icons.Cursor key="2-8" />,
    <Icons.V0 key="2-9" />,
    <Icons.Midjourney key="2-10" />,
  ];

  return (
    <section className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#06070a] text-white relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* ── Top Header ────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow Pill */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs sm:text-[13px] font-medium tracking-tight mb-5">
              <span>{badgeText}</span>
            </div>
          )}

          {/* Main Heading with Serif Italic Accent */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12]">
            <span>{titleRegular}</span>
            <span className="font-serif italic font-normal text-white">
              {titleItalicAccent}
            </span>
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* ── Tool Cloud Backdrop & Central AI Core Hub ────────────── */}
        <div className="relative w-full max-w-4xl mx-auto py-6 sm:py-8 flex flex-col items-center justify-center">
          {/* Dual Marquee / Tool Row Grid */}
          <div
            className="w-full overflow-hidden select-none space-y-3.5 opacity-30 sm:opacity-40 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            }}
          >
            {/* Row 1 */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-nowrap">
              {backgroundToolsRow1.map((icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-nowrap -translate-x-6">
              {backgroundToolsRow2.map((icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Central AI Glowing Core with User Avatar Photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
            {/* Outer Concentric Cyan Glow Ring */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-cyan-400/50 bg-cyan-950/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_55px_rgba(6,182,212,0.5)]">
              {/* Inner Pulsing Ring */}
              <div className="absolute inset-2 rounded-full border border-cyan-300/35 animate-pulse pointer-events-none" />

              {/* User Avatar Photo inside Glowing Ring */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-2xl shadow-cyan-500/30 z-10 transition-transform duration-300 hover:scale-105 bg-neutral-900 ring-2 ring-cyan-400/50">
                <Image
                  src={avatarSrc || profile.portraitSrc}
                  alt={avatarAlt || profile.displayName}
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Branching Circuit Lines Connecting Hub to 4 Cards ────── */}
        <div className="relative w-full max-w-5xl mx-auto h-14 hidden lg:block select-none pointer-events-none -mt-2 mb-2">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1000 60"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Center trunk down from hub */}
            <path
              d="M 500 0 L 500 24"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Horizontal Bus Bar with Rounded Corners connecting all 4 columns */}
            {/* Card 1 Drop (approx x=125) */}
            <path
              d="M 500 24 H 135 Q 125 24 125 34 L 125 60"
              stroke="#38bdf8"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Card 2 Drop (approx x=375) */}
            <path
              d="M 500 24 H 385 Q 375 24 375 34 L 375 60"
              stroke="#38bdf8"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Card 3 Drop (approx x=625) */}
            <path
              d="M 500 24 H 615 Q 625 24 625 34 L 625 60"
              stroke="#38bdf8"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Card 4 Drop (approx x=875) */}
            <path
              d="M 500 24 H 865 Q 875 24 875 34 L 875 60"
              stroke="#38bdf8"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ── 4 Category Cards ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-[24px] bg-[#0c0d14] border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 relative group"
            >
              <div>
                {/* Title */}
                <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight mb-5">
                  {cat.title}
                </h3>

                {/* Tool Icon Squircles with subtle blue bottom glow */}
                <div className="flex items-center gap-2.5 mb-6">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      title={tool.name}
                      className="w-11 h-11 rounded-[14px] bg-[#12141e] border border-white/10 flex items-center justify-center relative shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/30 transition-colors"
                    >
                      {/* Ambient bottom glow */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 rounded-full bg-cyan-500/20 blur-[4px] pointer-events-none" />
                      <div className="relative z-10">{tool.icon}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Produces Section */}
              <div className="pt-2">
                <p className="text-[11px] font-bold text-neutral-400 tracking-wider uppercase mb-2.5">
                  PRODUCES:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.produces.map((item, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 rounded-[8px] text-xs font-medium bg-white/[0.05] border border-white/10 text-neutral-300 tracking-tight"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Action Button ──────────────────────────────────── */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[12px] font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#634df0] via-[#7052f5] to-[#7c57fa] hover:brightness-110 active:scale-[0.98] shadow-[0_8px_24px_rgba(99,77,240,0.4)] transition-all cursor-pointer group"
          >
            <span>Explore AI Capabilities</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

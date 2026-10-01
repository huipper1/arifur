"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";

// ── Inline Vector Tool Icons for High-Res Crisp Display ─────────────
const Icons = {
  // Web & Frameworks
  ReactLogo: () => (
    <svg className="w-5 h-5 text-[#00d8ff]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  Nextjs: () => (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.572 0C5.18 0 0 5.18 0 11.572C0 17.964 5.18 23.144 11.572 23.144C17.964 23.144 23.144 17.964 23.144 11.572C23.144 5.18 17.964 0 11.572 0ZM18.232 17.828L10.372 7.74H8.76V16.26H9.988V9.324L17.132 18.528C17.516 18.312 17.884 18.08 18.232 17.828ZM15.428 7.74H16.656V13.884L15.428 12.312V7.74Z" />
    </svg>
  ),
  Typescript: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M1.5 1.5v21h21v-21H1.5zm10.74 13.98c-.34.56-.8 1-1.38 1.32-.58.32-1.25.48-2.01.48-.95 0-1.77-.23-2.46-.7-.69-.47-1.2-1.12-1.53-1.95-.33-.83-.44-1.79-.33-2.88.11-1.09.47-2 1.08-2.73.61-.73 1.4-1.26 2.37-1.59.97-.33 2.08-.38 3.33-.15v2.01c-.84-.15-1.58-.17-2.22-.06-.64.11-1.14.33-1.5.66-.36.33-.57.77-.63 1.32-.06.55.05 1.03.33 1.44.28.41.68.69 1.2.84.52.15 1.13.15 1.83.01v2.18h-.08zm3.96-6.42h-3.3v-1.8h8.82v1.8h-3.3v8.52h-2.22V9.06z"
      />
    </svg>
  ),
  Tailwind: () => (
    <svg className="w-5 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  ),
  Nodejs: () => (
    <svg className="w-5 h-5 text-[#68a063]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.8l-6.7 3.9-6.7-3.9V7.8l6.7-3.9 6.7 3.9v8z" />
    </svg>
  ),
  Vercel: () => (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  ),

  // Mobile App Development
  Flutter: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M14.314 0L2.3 12l3.694 3.694L21.708 0h-7.394z" fill="#54C5F8" />
      <path d="M14.314 11.082l-5.617 5.617 3.694 3.694 7.54-7.388-5.617-1.923z" fill="#29B6F6" />
      <path d="M8.697 16.699l5.617 5.617h7.394l-5.617-5.617-7.394 0z" fill="#01579B" />
      <path d="M14.314 22.316l-1.923-1.923 3.694-3.694 1.923 1.923-3.694 3.694z" fill="#02569B" />
    </svg>
  ),
  ReactNative: () => (
    <svg className="w-5 h-5 text-[#61dafb]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  Apple: () => (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.76 1.04-1.82.92-2.87-.9.04-2 .6-2.64 1.36-.56.65-.99 1.71-.86 2.73 1.01.08 2.02-.51 2.58-1.22" />
    </svg>
  ),
  Android: () => (
    <svg className="w-5 h-5 text-[#3ddc84]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.0834 12 8.0834c-1.8533 0-3.5902.3282-5.1368.8663L4.8409 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  ),
  Firebase: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M4.656 18.232l1.83-11.536a.67.67 0 0 1 1.258-.225l2.482 4.672-5.57 7.089z" fill="#FFA000" />
      <path d="M12.015 12.875l2.18-4.225a.67.67 0 0 1 1.23.084l3.918 9.5-7.328-5.359z" fill="#F57C00" />
      <path d="M4.656 18.232l7.359 4.137a1.34 1.34 0 0 0 1.31 0l6.018-3.385-4.47-2.625-2.858-5.484-7.359 7.357z" fill="#FFCA28" />
    </svg>
  ),

  // Database & DevOps
  Postgres: () => (
    <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  Supabase: () => (
    <svg className="w-5 h-5 text-[#3ecf8e]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9 1.036c-.572-.715-1.734-.326-1.75.586l-.28 10.457h9.094c.86 0 1.34 1.01.78 1.664L9.843 23.125c-.563.665-1.636.326-1.724-.543l.4-10.457H.81c-.812 0-1.29-.915-.812-1.57L9.932 1.036c.55-.71 1.67-.32 1.968 0Z" />
    </svg>
  ),
  Docker: () => (
    <svg className="w-5 h-5 text-[#2496ed]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m21.688 1.488a9.4 9.4 0 0 0-4.043-.996 9.4 9.4 0 0 0-.411 0c-.22 0-.435.01-.652.03-1.077.098-2.117.433-3.048.973H.128a.126.126 0 0 0-.128.125c0 .324.032.646.096.963C.72 19.34 4.542 22 9.176 22c5.967 0 10.963-4.148 11.96-9.845a.124.124 0 0 0-.083-.142.12.12 0 0 0-.063-.008" />
    </svg>
  ),
  Github: () => (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),

  // Design & Ideation
  Figma: () => (
    <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
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

  // AI & Workflow
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
  Cursor: () => (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  ),
  V0: () => (
    <div className="w-5 h-5 rounded-md bg-[#8b5cf6]/30 text-[#c4b5fd] flex items-center justify-center font-bold text-xs">
      v0
    </div>
  ),
  Flame: () => (
    <svg className="w-5 h-5 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-.67 2.33-2 4.33-4 6-1.5 1.25-2.5 3-2.5 5 0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.8-.73-3.43-1.92-4.6L15 6.8c-.3-.3-.8-.3-1.1 0L12 2Z" />
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
  badgeText = "Modern Stack & Workflow",
  titleRegular = "Full-Stack Web & Mobile, ",
  titleItalicAccent = "Supercharged By AI",
  subtitle = "From wireframes & mobile prototypes to full-stack production, we blend modern web & mobile technologies with AI tools to build fast, scalable applications.",
  avatarSrc,
  avatarAlt,
  className = "",
  id = "ai-workflow",
}: AiWorkflowSectionProps = {}) {
  const categories = [
    {
      title: "Strategy & Architecture",
      tools: [
        { name: "Claude AI", icon: <Icons.Claude /> },
        { name: "ChatGPT", icon: <Icons.ChatGpt /> },
        { name: "Miro", icon: <Icons.Miro /> },
        { name: "GitHub", icon: <Icons.Github /> },
      ],
      produces: ["Tech Architecture", "User Personas", "Scope & Roadmap"],
    },
    {
      title: "UI/UX & Mobile Design",
      tools: [
        { name: "Figma", icon: <Icons.Figma /> },
        { name: "Midjourney", icon: <Icons.Midjourney /> },
        { name: "Firefly", icon: <Icons.Firefly /> },
        { name: "ChatGPT", icon: <Icons.ChatGpt /> },
      ],
      produces: ["Design System", "Web & Mobile UI", "Prototypes"],
    },
    {
      title: "Web & Mobile Build",
      tools: [
        { name: "React", icon: <Icons.ReactLogo /> },
        { name: "Next.js", icon: <Icons.Nextjs /> },
        { name: "Flutter", icon: <Icons.Flutter /> },
        { name: "React Native", icon: <Icons.ReactNative /> },
        { name: "TypeScript", icon: <Icons.Typescript /> },
        { name: "Cursor AI", icon: <Icons.Cursor /> },
      ],
      produces: ["Web App MVP", "iOS & Android Apps", "Clean Codebase"],
    },
    {
      title: "Deploy & Scale",
      tools: [
        { name: "Vercel", icon: <Icons.Vercel /> },
        { name: "Supabase", icon: <Icons.Supabase /> },
        { name: "Firebase", icon: <Icons.Firebase /> },
        { name: "Docker", icon: <Icons.Docker /> },
        { name: "PostgreSQL", icon: <Icons.Postgres /> },
      ],
      produces: ["Live Web / App Stores", "CI/CD Pipeline", "Cloud Database"],
    },
  ];

  // Row 1: Web App Development & Design Tools (Marquee left to right)
  const backgroundToolsRow1 = [
    { name: "React", icon: <Icons.ReactLogo /> },
    { name: "Next.js", icon: <Icons.Nextjs /> },
    { name: "TypeScript", icon: <Icons.Typescript /> },
    { name: "Tailwind CSS", icon: <Icons.Tailwind /> },
    { name: "Figma", icon: <Icons.Figma /> },
    { name: "Claude AI", icon: <Icons.Claude /> },
    { name: "ChatGPT", icon: <Icons.ChatGpt /> },
    { name: "Cursor AI", icon: <Icons.Cursor /> },
    { name: "Supabase", icon: <Icons.Supabase /> },
    { name: "Node.js", icon: <Icons.Nodejs /> },
    { name: "Vercel", icon: <Icons.Vercel /> },
    { name: "Midjourney", icon: <Icons.Midjourney /> },
    { name: "Firefly", icon: <Icons.Firefly /> },
    { name: "Miro", icon: <Icons.Miro /> },
  ];

  // Row 2: Mobile App Development & Cloud/Data (Marquee left to right)
  const backgroundToolsRow2 = [
    { name: "Flutter", icon: <Icons.Flutter /> },
    { name: "React Native", icon: <Icons.ReactNative /> },
    { name: "iOS / Apple", icon: <Icons.Apple /> },
    { name: "Android", icon: <Icons.Android /> },
    { name: "Firebase", icon: <Icons.Firebase /> },
    { name: "PostgreSQL", icon: <Icons.Postgres /> },
    { name: "Docker", icon: <Icons.Docker /> },
    { name: "GitHub", icon: <Icons.Github /> },
    { name: "React", icon: <Icons.ReactLogo /> },
    { name: "Next.js", icon: <Icons.Nextjs /> },
    { name: "TypeScript", icon: <Icons.Typescript /> },
    { name: "Tailwind CSS", icon: <Icons.Tailwind /> },
    { name: "v0 AI", icon: <Icons.V0 /> },
    { name: "Cursor AI", icon: <Icons.Cursor /> },
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
        <div className="relative w-full max-w-5xl mx-auto py-6 sm:py-8 flex flex-col items-center justify-center">
          {/* Dual Marquee / Tool Row Grid */}
          <div
            className="w-full overflow-hidden select-none space-y-4 opacity-50 sm:opacity-65"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            {/* Row 1: Infinite auto-scroll Left to Right */}
            <div className="flex overflow-hidden w-full select-none">
              <div className="flex shrink-0 animate-marquee-reverse whitespace-nowrap">
                <div className="flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0">
                  {backgroundToolsRow1.map((tool, i) => (
                    <div
                      key={`r1-a-${i}`}
                      title={tool.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/50 flex items-center justify-center shrink-0 shadow-sm transition-colors"
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0" aria-hidden="true">
                  {backgroundToolsRow1.map((tool, i) => (
                    <div
                      key={`r1-b-${i}`}
                      title={tool.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/50 flex items-center justify-center shrink-0 shadow-sm transition-colors"
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Infinite auto-scroll Left to Right (slightly offset speed) */}
            <div className="flex overflow-hidden w-full select-none">
              <div className="flex shrink-0 animate-marquee-reverse-slow whitespace-nowrap">
                <div className="flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0">
                  {backgroundToolsRow2.map((tool, i) => (
                    <div
                      key={`r2-a-${i}`}
                      title={tool.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/50 flex items-center justify-center shrink-0 shadow-sm transition-colors"
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0" aria-hidden="true">
                  {backgroundToolsRow2.map((tool, i) => (
                    <div
                      key={`r2-b-${i}`}
                      title={tool.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/50 flex items-center justify-center shrink-0 shadow-sm transition-colors"
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
              </div>
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
                <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 mb-6">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      title={tool.name}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] sm:rounded-[14px] bg-[#12141e] border border-white/10 flex items-center justify-center relative shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:scale-110 transition-all duration-200"
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

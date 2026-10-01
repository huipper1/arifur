"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUp, Volume2, VolumeX, Puzzle, CircleDollarSign, Menu } from "lucide-react";
import { getPrimaryWhatsAppUrl } from "@/lib/helpers";

function useIsScrolled(threshold = 200) {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("scroll", onStoreChange, { passive: true });
      return () => window.removeEventListener("scroll", onStoreChange);
    },
    () => window.scrollY > threshold,
    () => false
  );
}

export default function FooterBar() {
  const pathname = usePathname();
  const showTop = useIsScrolled(200);
  const [moreOpen, setMoreOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const moreRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoMode, setVideoMode] = useState<"youtube" | "reel">("youtube");
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const menuItems = [
    {
      title: "Home",
      subtitle: "Return to homepage",
      href: "/",
    },
    {
      title: "About Arifur",
      subtitle: "Founder, CTO & Full-Stack Developer",
      href: "/about/",
    },
    {
      title: "All Services",
      subtitle: "SaaS, Mobile & Custom Web Apps",
      href: "/services/",
    },
    {
      title: "Selected Projects",
      subtitle: "Real products and client software",
      href: "/projects/",
    },
    {
      title: "Pricing & Packages",
      subtitle: "Sprint packages, MVP & dedicated build",
      href: "/pricing/",
    },
    {
      title: "Contact us",
      subtitle: "Start your project inquiry today",
      href: "/contact/",
    },
  ];

  // Close menus on route change without cascading renders
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMoreOpen(false);
  }

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isOutsideMore = !moreRef.current || !moreRef.current.contains(target);
      const isOutsideModal = !modalRef.current || !modalRef.current.contains(target);
      if (isOutsideMore && isOutsideModal) {
        setMoreOpen(false);
      }
    };
    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          1. FLOATING "BACK TO TOP" BUTTON (EXACT DESIGN MONKS PILL)
          Desktop: Bottom-left ("Back to Top")
          Mobile: Floats above mobile dock ("Top")
          Only appears after scrolling past hero (threshold 200px)
          ═══════════════════════════════════════════════════════════════ */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        style={{
          backgroundColor: "#060709",
          color: "#FFFFFF",
          borderColor: "rgba(255, 255, 255, 0.22)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.75)",
        }}
        className={`dm-back-to-top fixed z-50 flex items-center gap-1.5 cursor-pointer transition-all duration-300 ease-out select-none
          bottom-[74px] left-3 px-3 py-1.5 md:bottom-6 md:left-6 md:px-4 md:py-2.5
          rounded-full border hover:border-white/40 hover:scale-105 active:scale-95 ${
            showTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        {/* Crisp solid white circular badge with up-arrow (exact Design Monks look) */}
        <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white flex items-center justify-center shrink-0">
          <ArrowUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-black stroke-[3]" />
        </span>

        {/* Text: "Top" on mobile, "Back to Top" on laptop */}
        <span
          style={{ color: "#FFFFFF" }}
          className="text-xs md:text-sm font-semibold tracking-tight !text-white"
        >
          <span className="inline md:hidden">Top</span>
          <span className="hidden md:inline">Back to Top</span>
        </span>
      </button>

      {/* ═══════════════════════════════════════════════════════════════
          2. LAPTOP / DESKTOP FLOATING FOOTER DOCK (CENTERED)
          Exact match to Design Monks dock:
          Projects | Services | [Let's Talk →] | Pricing | More
          Solid #0d0e12 background, vibrant purple button, crisp white text
          ═══════════════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════════
          2. LAPTOP / DESKTOP FLOATING FOOTER DOCK (CENTERED)
          Exact match to Design Monks dock (desktop view):
          - Width: ~530px, Height: 56px, Rounded: 20px (squircle)
          - Emerald green neon outer border & glow (rgba(48, 255, 151, 0.65))
          - Clean white text links (Projects, Services, Pricing, More)
          - Center dark obsidian button with glowing neon purple border [Let's Talk →]
          ═══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
        }}
        className="hidden md:flex items-center select-none"
      >
        <div
          ref={moreRef}
          style={{
            backgroundColor: "#060709",
            borderColor: "rgba(48, 255, 151, 0.65)",
            borderWidth: "1.5px",
            borderStyle: "solid",
            boxShadow:
              "0 0 22px rgba(48, 255, 151, 0.28), inset 0 1px 2px rgba(48, 255, 151, 0.35), 0 20px 45px rgba(0, 0, 0, 0.95)",
          }}
          className="relative w-[530px] max-w-[92vw] h-[56px] rounded-[20px] px-3.5 grid grid-cols-[1fr_1fr_auto_1fr_1fr] items-center backdrop-blur-xl"
        >
          {/* 1. Projects */}
          <Link
            href="/projects/"
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14.5px] font-semibold tracking-tight transition-colors duration-150 !text-white hover:!text-[#A87FFF] ${
              pathname.startsWith("/projects") ? "font-bold !text-white" : ""
            }`}
          >
            <span>Projects</span>
          </Link>

          {/* 2. Services */}
          <Link
            href="/services/"
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14.5px] font-semibold tracking-tight transition-colors duration-150 !text-white hover:!text-[#A87FFF] ${
              pathname.startsWith("/services") ? "font-bold !text-white" : ""
            }`}
          >
            <span>Services</span>
          </Link>

          {/* 3. Center Button: "Let's Talk →" (Exact Obsidian squircle with neon purple border) */}
          <Link
            href="/contact/"
            style={{
              backgroundColor: "#0a0c12",
              backgroundImage:
                "radial-gradient(circle at 88% 12%, rgba(255, 255, 255, 0.28) 0%, transparent 45%)",
              borderColor: "rgba(139, 92, 246, 0.95)",
              borderWidth: "1.5px",
              borderStyle: "solid",
              boxShadow:
                "0 0 16px rgba(139, 92, 246, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.25)",
              color: "#FFFFFF",
            }}
            className="h-[40px] px-6 rounded-[14px] flex items-center justify-center gap-2.5 text-[14px] font-bold tracking-tight !text-white hover:border-[#a78bfa] hover:shadow-[0_0_24px_rgba(139,92,246,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 group cursor-pointer mx-2 shrink-0"
          >
            <span className="!text-white font-bold">Let&apos;s Talk</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            >
              <path d="M2.5 8h11M9.5 4L13.5 8l-4 4" />
            </svg>
          </Link>

          {/* 4. Pricing */}
          <Link
            href="/pricing/"
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14.5px] font-semibold tracking-tight transition-colors duration-150 !text-white hover:!text-[#A87FFF] ${
              pathname.startsWith("/pricing") ? "font-bold !text-white" : ""
            }`}
          >
            <span>Pricing</span>
          </Link>

          {/* 5. More Toggle */}
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            aria-expanded={moreOpen}
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14.5px] font-semibold tracking-tight transition-colors duration-150 cursor-pointer !text-white hover:!text-[#A87FFF] ${
              moreOpen ? "font-bold !text-white" : ""
            }`}
          >
            <span>More</span>
          </button>

          {/* ── More Modal (Desktop) ────────────────────────── */}
          {moreOpen && (
            <>
              {/* Click-outside backdrop */}
              <div
                onClick={() => setMoreOpen(false)}
                className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity duration-200"
                aria-hidden="true"
              />

              {/* Desktop Modal Card */}
              <div
                ref={modalRef}
                style={{
                  boxShadow:
                    "0 25px 70px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                }}
                className="absolute bottom-[68px] right-0 w-[590px] max-w-[92vw] bg-white rounded-[32px] p-5 select-text text-neutral-900 z-50 animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex gap-4 items-stretch">
                  {/* Left Column: Reel Video Card */}
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, #120924 0%, #1e0b3a 50%, #0b0416 100%)",
                    }}
                    className="w-[245px] shrink-0 h-[430px] rounded-[22px] overflow-hidden relative flex flex-col justify-between p-3.5 shadow-inner"
                  >
                    {/* Top: YouTube / Showreel Switcher */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-0.5 rounded-full border border-white/10">
                        <button
                          type="button"
                          onClick={() => setVideoMode("youtube")}
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                            videoMode === "youtube"
                              ? "bg-[#FF0000] text-white shadow-sm"
                              : "text-white/70 hover:text-white"
                          }`}
                        >
                          YouTube
                        </button>
                        <button
                          type="button"
                          onClick={() => setVideoMode("reel")}
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                            videoMode === "reel"
                              ? "bg-[#7C3AED] text-white shadow-sm"
                              : "text-white/70 hover:text-white"
                          }`}
                        >
                          Showreel
                        </button>
                      </div>
                    </div>

                    {/* Video Area */}
                    <div className="absolute inset-0 z-0">
                      {videoMode === "youtube" ? (
                        <iframe
                          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=1&modestbranding=1&rel=0&playsinline=1"
                          title="YouTube Reel Video"
                          className="w-full h-full object-cover border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <video
                            ref={videoRef}
                            src="/videos/reel.mp4"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            className="w-full h-full object-cover"
                          />

                          {/* Frosted Stat Card in center */}
                          <div className="absolute top-[48%] left-3.5 right-3.5 -translate-y-1/2 p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-xl pointer-events-none">
                            <div className="text-[11px] text-white/80 font-medium tracking-tight">
                              Clients raise
                            </div>
                            <div className="text-[24px] font-extrabold text-white tracking-tight leading-tight">
                              $ 4.8B
                            </div>
                            <div className="text-[10px] text-white/70 leading-tight mt-0.5">
                              Our work has helped our clients raise more in funding
                            </div>
                            <svg
                              className="w-full h-6 mt-1 text-purple-300 stroke-current fill-none stroke-[2]"
                              viewBox="0 0 120 24"
                            >
                              <path d="M0 18 Q 30 18, 50 12 T 90 6 T 120 2" />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Bottom elements for reel mode */}
                    <div className="relative z-10 mt-auto flex items-center justify-between pt-2">
                      <span className="text-[11px] font-semibold text-white/95 tracking-tight drop-shadow-sm bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        across over 30 industries
                      </span>

                      {videoMode === "reel" && (
                        <button
                          type="button"
                          onClick={toggleMute}
                          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                          className="w-8 h-8 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer shadow-sm ml-2 shrink-0"
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Menu */}
                  <div className="flex-1 flex flex-col justify-between py-1 pr-1">
                    {/* Top header row */}
                    <div className="flex items-center justify-between mb-1">
                      {/* Red "menu" speech bubble */}
                      <div className="relative inline-flex items-center">
                        <div className="bg-[#FF2222] text-white text-[12px] font-bold px-2.5 py-0.5 rounded-[7px] tracking-tight relative shadow-sm">
                          menu
                          <div
                            className="absolute -bottom-[5px] left-3 w-0 h-0"
                            style={{
                              borderLeft: "4px solid transparent",
                              borderRight: "4px solid transparent",
                              borderTop: "5px solid #FF2222",
                            }}
                          />
                        </div>
                      </div>

                      {/* Subtle close button */}
                      <button
                        onClick={() => setMoreOpen(false)}
                        className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                        aria-label="Close menu"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-2.5 my-auto">
                      {menuItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className="group block px-2 py-1 -mx-2 rounded-xl hover:bg-neutral-50 transition-colors"
                        >
                          <div className="text-[17px] font-semibold text-[#111827] group-hover:text-[#7C3AED] transition-colors leading-tight">
                            {item.title}
                          </div>
                          <div className="text-[13px] text-[#6B7280] font-normal leading-tight mt-0.5">
                            {item.subtitle}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Downward triangle arrow pointing directly to the center of "More" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                  className="absolute -bottom-[20px] right-[34px] pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.08)]"
                >
                  <path
                    d="M20.9984 22.6044C19.4061 24.4076 16.5939 24.4076 15.0016 22.6043L1.3532 7.14759C-0.927141 4.56511 0.906416 0.5 4.35158 0.5L31.6484 0.500003C35.0936 0.500003 36.9271 4.56511 34.6468 7.14759L20.9984 22.6044Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          3. FLOATING CHAT WIDGET (BOTTOM-RIGHT)
          Exact match to Design Monks purple floating round chat widget
          with green online status dot
          ═══════════════════════════════════════════════════════════════ */}
      <a
        href={getPrimaryWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Chat on WhatsApp"
        style={{
          background: "linear-gradient(135deg, #5338ed 0%, #7c3aed 100%)",
          boxShadow: "0 8px 24px rgba(110, 65, 248, 0.6)",
        }}
        className="fixed z-50 bottom-6 right-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full text-white hover:scale-110 active:scale-95 transition-all duration-200 group cursor-pointer"
      >
        <span className="relative flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          {/* Online green indicator badge */}
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0d0e12]" />
        </span>
      </a>

      {/* ═══════════════════════════════════════════════════════════════
          4. MOBILE DOCKED FOOTER BAR (EXACT DESIGN MONKS MOBILE DOCK)
          Exact match to Design Monks mobile dock (media_1790159107233.png):
          - Emerald green neon inner glow border along top contour
          - Seamless curved notch cutout dipping under center action button
          - Elevated glossy purple squircle button with chat-smile icon
          - 5 Items: Projects | Services | [Elevated Chat-Smile] | Pricing | More
          ═══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
        className="md:hidden select-none"
      >
        <div className="relative w-full h-[64px] flex items-stretch bg-[#060709]">
          {/* Left Wing (Projects & Services) */}
          <div
            style={{
              backgroundColor: "#060709",
              borderTop: "1.5px solid rgba(48, 255, 151, 0.75)",
              boxShadow:
                "inset 0 1.5px 2px rgba(48, 255, 151, 0.4), 0 -4px 16px rgba(48, 255, 151, 0.2)",
            }}
            className="flex-1 flex items-center justify-around px-1 pb-1"
          >
            {/* 1. Projects */}
            <Link
              href="/projects/"
              style={{
                color: pathname.startsWith("/projects")
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.85)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors hover:text-white group"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform duration-150 group-hover:scale-105"
              >
                <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
                <path d="M2.5 9.5h19" />
                <path d="M9.5 13.5h5" />
              </svg>
              <span className="text-[11px] font-medium tracking-tight">Projects</span>
            </Link>

            {/* 2. Services (Puzzle Piece) */}
            <Link
              href="/services/"
              style={{
                color: pathname.startsWith("/services")
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.85)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors hover:text-white group"
            >
              <Puzzle className="w-5 h-5 shrink-0 transition-transform duration-150 group-hover:scale-105 stroke-[1.8]" />
              <span className="text-[11px] font-medium tracking-tight">Services</span>
            </Link>
          </div>

          {/* Center Notch & Elevated Action Button */}
          <div className="relative w-[96px] shrink-0 flex flex-col items-center justify-start">
            {/* Notch Background SVG with Emerald Top Glow Line */}
            <svg
              width="96"
              height="64"
              viewBox="0 0 96 64"
              fill="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {/* Dark Base Fill */}
              <path
                d="M 0 0.5 C 10 0.5 14 5 16 12 V 22 C 16 34 26 42 38 42 H 58 C 70 42 80 34 80 22 V 12 C 82 5 86 0.5 96 0.5 V 64 H 0 Z"
                fill="#060709"
              />
              {/* Emerald Green Neon Contour Stroke */}
              <path
                d="M 0 0.5 C 10 0.5 14 5 16 12 V 22 C 16 34 26 42 38 42 H 58 C 70 42 80 34 80 22 V 12 C 82 5 86 0.5 96 0.5"
                stroke="rgba(48, 255, 151, 0.75)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            {/* Elevated Action Button: 3D Glossy Purple Squircle with Chat-Smile */}
            <Link
              href="/contact/"
              aria-label="Let's Talk"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.45) 0%, transparent 45%), linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%)",
                borderColor: "rgba(255, 255, 255, 0.28)",
                boxShadow:
                  "inset 0 1px 1.5px rgba(255, 255, 255, 0.5), 0 8px 24px rgba(110, 65, 248, 0.8)",
                color: "#FFFFFF",
              }}
              className="relative z-10 -mt-5 w-[56px] h-[56px] rounded-[18px] border flex items-center justify-center text-white active:scale-90 transition-transform duration-150 group cursor-pointer"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="transition-transform duration-200 group-hover:scale-110"
              >
                {/* Speech bubble */}
                <path
                  d="M14 3.5C8.2 3.5 3.5 7.8 3.5 13.2C3.5 16.1 4.8 18.7 6.9 20.5C6.7 21.9 5.9 23.4 4.8 24.3C4.6 24.5 4.7 24.9 5 24.9C7.3 24.9 9.4 23.8 10.7 22.8C11.8 23.1 12.9 23.2 14 23.2C19.8 23.2 24.5 18.9 24.5 13.2C24.5 7.8 19.8 3.5 14 3.5Z"
                  fill="#FFFFFF"
                />
                {/* Curved smile inside bubble */}
                <path
                  d="M10 13.5C11 16.5 17 16.5 18 13.5"
                  stroke="#6D28D9"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

          {/* Right Wing (Pricing & More) */}
          <div
            style={{
              backgroundColor: "#060709",
              borderTop: "1.5px solid rgba(48, 255, 151, 0.75)",
              boxShadow:
                "inset 0 1.5px 2px rgba(48, 255, 151, 0.4), 0 -4px 16px rgba(48, 255, 151, 0.2)",
            }}
            className="flex-1 flex items-center justify-around px-1 pb-1"
          >
            {/* 3. Pricing */}
            <Link
              href="/pricing/"
              style={{
                color:
                  pathname.startsWith("/pricing") && !moreOpen
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.85)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors hover:text-white group"
            >
              <CircleDollarSign className="w-5 h-5 shrink-0 transition-transform duration-150 group-hover:scale-105 stroke-[1.8]" />
              <span className="text-[11px] font-medium tracking-tight">Pricing</span>
            </Link>

            {/* 4. More */}
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
              style={{
                color: moreOpen ? "#FFFFFF" : "rgba(255, 255, 255, 0.85)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors cursor-pointer hover:text-white group"
            >
              <Menu className="w-5 h-5 shrink-0 transition-transform duration-150 group-hover:scale-105 stroke-[2]" />
              <span className="text-[11px] font-medium tracking-tight">More</span>
            </button>
          </div>
        </div>

        {/* ── More Menu Modal (Mobile) ────────────── */}
        {moreOpen && (
          <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-black/60 backdrop-blur-sm md:hidden">
            <div
              onClick={() => setMoreOpen(false)}
              className="flex-1 w-full"
              aria-hidden="true"
            />

            <div
              ref={modalRef}
              style={{
                boxShadow: "0 -20px 60px rgba(0, 0, 0, 0.7)",
              }}
              className="relative w-full max-h-[85vh] overflow-y-auto bg-white rounded-t-[32px] p-5 select-text text-neutral-900 z-50 pb-8"
            >
              {/* Mobile Header with Red Menu Badge & Close Button */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-100">
                <div className="relative inline-flex items-center">
                  <div className="bg-[#FF2222] text-white text-[12px] font-bold px-2.5 py-0.5 rounded-[7px] tracking-tight relative shadow-sm">
                    menu
                    <div
                      className="absolute -bottom-[5px] left-3 w-0 h-0"
                      style={{
                        borderLeft: "4px solid transparent",
                        borderRight: "4px solid transparent",
                        borderTop: "5px solid #FF2222",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => setMoreOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile YouTube Reel Video */}
              <div className="w-full aspect-[16/9] max-h-[220px] rounded-[18px] overflow-hidden bg-black mb-4 relative shadow-md">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&loop=1&controls=1&modestbranding=1&rel=0"
                  title="YouTube Reel Video"
                  className="w-full h-full object-cover border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Menu items */}
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className="block p-2.5 rounded-xl hover:bg-neutral-50 transition-colors"
                  >
                    <div className="text-[16px] font-semibold text-[#111827]">
                      {item.title}
                    </div>
                    <div className="text-[12px] text-[#6B7280] mt-0.5">
                      {item.subtitle}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUp, Volume2, VolumeX } from "lucide-react";
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
      subtitle: "Home is where the monk lives",
      href: "/",
    },
    {
      title: "About us",
      subtitle: "The journey of Design Monks",
      href: "/about/",
    },
    {
      title: "Meet the team",
      subtitle: "An overview of the Monk family",
      href: "/about/",
    },
    {
      title: "Blogs",
      subtitle: "A collection of informative blogs",
      href: "/projects/",
    },
    {
      title: "Career",
      subtitle: "Work with top global brands, grow your skills",
      href: "/contact/",
    },
    {
      title: "Contact us",
      subtitle: "Start your dream design journey from here",
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
          backgroundColor: "#0d0e12",
          color: "#FFFFFF",
          borderColor: "rgba(255, 255, 255, 0.18)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.75)",
        }}
        className={`dm-back-to-top fixed z-50 flex items-center gap-2 cursor-pointer transition-all duration-300 ease-out select-none
          bottom-[82px] left-4 px-3.5 py-1.5 md:bottom-6 md:left-6 md:px-4 md:py-2.5
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
          Exact match to Design Monks dock (media_1790158359052.png):
          - Width: ~520px, Height: 54px, Rounded: 18px (squircle)
          - Emerald inner border highlight (exact rgba(48,255,151,0.4))
          - Clean text links (Projects, Services, Pricing, More)
          - Center 3D glossy purple action button: [Let's Talk →]
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
            borderColor: "rgba(48, 255, 151, 0.22)",
            boxShadow:
              "inset 0 1.5px 2px rgba(48, 255, 151, 0.38), 0 20px 45px rgba(0, 0, 0, 0.95)",
          }}
          className="relative w-[520px] max-w-[92vw] h-[54px] border rounded-[18px] px-3 grid grid-cols-[1fr_1fr_auto_1fr_1fr] items-center backdrop-blur-xl"
        >
          {/* 1. Projects */}
          <Link
            href="/projects/"
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14px] font-medium transition-colors duration-150 !text-white hover:!text-[#A87FFF] ${
              pathname.startsWith("/projects") ? "font-semibold !text-white" : ""
            }`}
          >
            <span>Projects</span>
          </Link>

          {/* 2. Services */}
          <Link
            href="/services/"
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14px] font-medium transition-colors duration-150 !text-white hover:!text-[#A87FFF] ${
              pathname.startsWith("/services") ? "font-semibold !text-white" : ""
            }`}
          >
            <span>Services</span>
          </Link>

          {/* 3. Center Button: "Let's Talk →" (Exact 3D Glossy Purple Squircle) */}
          <Link
            href="/contact/"
            style={{
              background:
                "radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.38) 0%, transparent 45%), linear-gradient(180deg, #7C3AED 0%, #6326E6 100%)",
              borderColor: "rgba(255, 255, 255, 0.22)",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.45), 0 4px 18px rgba(110, 65, 248, 0.55)",
              color: "#FFFFFF",
            }}
            className="h-[38px] px-5 rounded-[12px] border flex items-center justify-center gap-2 text-[14px] font-semibold tracking-tight !text-white hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] transition-all duration-150 group cursor-pointer shadow-md mx-2 shrink-0"
          >
            <span>Let&apos;s Talk</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
            >
              <path d="M2 8h11M9.5 4L13.5 8l-4 4" />
            </svg>
          </Link>

          {/* 4. Pricing */}
          <Link
            href="/pricing/"
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14px] font-medium transition-colors duration-150 !text-white hover:!text-[#A87FFF] ${
              pathname.startsWith("/pricing") ? "font-semibold !text-white" : ""
            }`}
          >
            <span>Pricing</span>
          </Link>

          {/* 5. More Toggle */}
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            aria-expanded={moreOpen}
            style={{ color: "#FFFFFF" }}
            className={`dm-dock-link flex items-center justify-center text-[14px] font-medium transition-colors duration-150 cursor-pointer !text-white hover:!text-[#A87FFF] ${
              moreOpen ? "font-semibold !text-white" : ""
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
              borderTop: "1px solid rgba(48, 255, 151, 0.35)",
              boxShadow:
                "inset 0 1.5px 2px rgba(48, 255, 151, 0.4), 0 -8px 24px rgba(0,0,0,0.8)",
            }}
            className="flex-1 flex items-center justify-around px-1 pb-1"
          >
            {/* 1. Projects */}
            <Link
              href="/projects/"
              style={{
                color: pathname.startsWith("/projects")
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.8)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors hover:text-white group"
            >
              <svg
                width="22"
                height="22"
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

            {/* 2. Services */}
            <Link
              href="/services/"
              style={{
                color: pathname.startsWith("/services")
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.8)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors hover:text-white group"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0 transition-transform duration-150 group-hover:scale-105"
              >
                <path d="M20.9 14.86c-.1.07-.23.1-.35.11-.13 0-.25-.02-.37-.07-.29-.14-.6-.2-.92-.2-.31 0-.62.1-.89.27-.27.17-.49.4-.64.68-.15.28-.23.59-.23.91 0 .32.08.63.23.91.15.28.37.51.64.68.27.17.58.27.89.29.32.02.63-.04.92-.17.11-.06.24-.08.37-.08.13 0 .25.04.36.11.11.07.19.16.25.27.06.11.1.24.1.36v4c0 .4-.16.78-.44 1.06-.28.28-.66.44-1.06.44h-3.4c.01-.12.02-.25.02-.37 0-.46-.09-.92-.28-1.34-.18-.42-.45-.8-.79-1.12-.46-.44-1.04-.74-1.67-.86-.63-.12-1.28-.06-1.87.17-.59.23-1.11.63-1.49 1.14-.38.51-.61 1.12-.66 1.76-.01.21-.01.42.02.62H6.25c-.4 0-.78-.16-1.06-.44-.28-.28-.44-.66-.44-1.06v-3.02c-.12.01-.25.02-.37.02-.46 0-.92-.09-1.34-.28-.42-.18-.8-.45-1.12-.79-.32-.34-.56-.73-.72-1.17-.16-.44-.22-.9-.19-1.36.05-.81.4-1.58.98-2.16.57-.58 1.34-.93 2.15-.99.21-.01.42 0 .62.02V6.75c0-.4.16-.78.44-1.06.28-.28.66-.44 1.06-.44h3.4c-.01.12-.02.25-.02.37 0 .46.09.92.28 1.34.18.42.45.8.79 1.12.34.32.73.56 1.17.72.44.16.9.22 1.36.19.81-.05 1.58-.4 2.16-.98.58-.57.93-1.34.99-2.15.01-.21 0-.42-.02-.62h3.4c.4 0 .78.16 1.06.44.28.28.44.66.44 1.06v4c0 .13-.04.25-.1.36-.06.11-.15.2-.26.27z" />
              </svg>
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
                stroke="rgba(48, 255, 151, 0.45)"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>

            {/* Elevated Action Button: 3D Glossy Purple Squircle with Chat-Smile */}
            <Link
              href="/contact/"
              aria-label="Let's Talk"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%), linear-gradient(180deg, #7C3AED 0%, #6326E6 100%)",
                borderColor: "rgba(255, 255, 255, 0.25)",
                boxShadow:
                  "inset 0 1px 1.5px rgba(255, 255, 255, 0.5), 0 6px 22px rgba(110, 65, 248, 0.75)",
                color: "#FFFFFF",
              }}
              className="relative z-10 -mt-5 w-[56px] h-[56px] rounded-[18px] border flex items-center justify-center text-white active:scale-90 transition-transform duration-150 group cursor-pointer"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 32 32"
                fill="none"
                className="transition-transform duration-200 group-hover:scale-110"
              >
                <path
                  d="M28.051 10.5433C27.4244 9.05909 26.504 7.71234 25.347 6.57944C24.19 5.44655 22.812 4.54278 21.2962 3.92923C19.783 3.31568 18.1606 3 16.52 3H15.0016C11.8192 3 8.7668 4.23728 6.5152 6.44197C4.2636 8.64666 3 11.6329 3 14.749V27.216C3 27.5444 3.1352 27.8601 3.3718 28.0943C3.611 28.326 3.9334 28.4584 4.2688 28.4584H17.001C18.5766 28.4584 20.1366 28.1529 21.5926 27.5622C23.0486 26.9716 24.372 26.1085 25.4874 25.0164C26.6002 23.9242 27.4842 22.6309 28.0874 21.2053C28.6906 19.7796 29 18.2496 29 16.7068V15.22C29 13.6136 28.6776 12.025 28.051 10.5433ZM22.4558 18.8351C20.6046 20.4237 18.379 21.2613 16.0182 21.2613C13.6574 21.2613 11.4292 20.4237 9.5806 18.8351C9.1464 18.466 9.1048 17.8219 9.4818 17.3992C9.8614 16.9741 10.5166 16.9334 10.9508 17.3025C12.4146 18.5601 14.167 19.2246 16.0182 19.2246C17.8694 19.2246 19.6192 18.5601 21.0856 17.3025C21.5172 16.9334 21.84 17.4042 22.186 17.8219C22.563 18.2446 22.89 18.466 22.4558 18.8351Z"
                  fill="#FFFFFF"
                />
              </svg>
            </Link>
          </div>

          {/* Right Wing (Pricing & More) */}
          <div
            style={{
              backgroundColor: "#060709",
              borderTop: "1px solid rgba(48, 255, 151, 0.35)",
              boxShadow:
                "inset 0 1.5px 2px rgba(48, 255, 151, 0.4), 0 -8px 24px rgba(0,0,0,0.8)",
            }}
            className="flex-1 flex items-center justify-around px-1 pb-1"
          >
            {/* 4. Pricing */}
            <Link
              href="/pricing/"
              style={{
                color:
                  pathname.startsWith("/pricing") && !moreOpen
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.8)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors hover:text-white group"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform duration-150 group-hover:scale-105"
              >
                <circle cx="12" cy="12" r="9.5" />
                <path d="M12 6.5v11" />
                <path d="M14.5 9.5a2.5 2.5 0 0 0-5 0c0 2.5 5 1.5 5 4a2.5 2.5 0 0 1-5 0" />
              </svg>
              <span className="text-[11px] font-medium tracking-tight">Pricing</span>
            </Link>

            {/* 5. More */}
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
              style={{
                color: moreOpen ? "#FFFFFF" : "rgba(255, 255, 255, 0.8)",
              }}
              className="flex flex-col items-center justify-center gap-1 w-14 py-1 transition-colors cursor-pointer hover:text-white group"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="shrink-0 transition-transform duration-150 group-hover:scale-105"
              >
                <line x1="4" x2="20" y1="7" y2="7" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="17" y2="17" />
              </svg>
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

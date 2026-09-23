"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 sm:top-5 md:top-6 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border)",
          }}
          className={`pointer-events-auto flex items-center justify-between gap-6 md:gap-8 lg:gap-10 pl-6 sm:pl-7 pr-2 sm:pr-2.5 h-14 sm:h-15 rounded-full border transition-all duration-300 w-full max-w-sm sm:max-w-xl lg:max-w-fit ${
            scrolled
              ? "shadow-[0_16px_40px_-6px_rgba(0,0,0,0.16),0_6px_16px_-2px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_48px_-6px_rgba(0,0,0,0.7)]"
              : "shadow-[0_10px_32px_-4px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_14px_36px_-6px_rgba(0,0,0,0.55)]"
          }`}
        >
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-full select-none shrink-0"
            aria-label="Arifur Rahman Home"
          >
            <span className="flex h-2.5 w-2.5 relative items-center justify-center shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors whitespace-nowrap">
              Arifur<span className="text-[var(--accent)]">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname === link.href.slice(0, -1) ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-[13px] xl:text-[14px] font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md whitespace-nowrap ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full transition-all"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Divider + Theme toggle + Salient Inset CTA Button + Mobile Menu trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <div className="hidden lg:block h-4 w-px bg-[var(--border)] mx-0.5" aria-hidden="true" />

            <ThemeToggle />

            {/* Desktop / Tablet CTA Button: Sleek Salient Inset Pill */}
            <Link
              href="/contact/"
              className="hidden sm:inline-flex header-cta group"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] hover:bg-[var(--bg-page)] flex items-center justify-center text-[var(--text-primary)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:scale-95"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Navigation Drawer */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

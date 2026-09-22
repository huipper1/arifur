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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-page)]/90 backdrop-blur-lg border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="max-w-[var(--max-width)] mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-[var(--text-primary)] group"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="group-hover:text-[var(--accent)] transition-colors">
              Arifur<span className="text-[var(--accent)]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/60 backdrop-blur-md shadow-xs" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname === link.href.slice(0, -1) ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--accent)] text-white shadow-xs"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)]/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: Theme toggle + CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Desktop CTA */}
            <Link
              href="/contact/"
              className="hidden md:inline-flex btn btn-primary text-xs font-semibold px-5 py-2.5 shadow-sm group"
            >
              <span>Discuss Project</span>
              <span className="btn-circle-arrow w-5 h-5">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--text-tertiary)] transition-colors cursor-pointer bg-[var(--bg-surface)]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-[18px] h-[18px] text-[var(--text-primary)]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
            className="text-xl font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-[var(--accent)]">●</span>{" "}
            Arifur<span className="text-[var(--text-tertiary)]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname === link.href.slice(0, -1) ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full" />
                  )}
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
              className="hidden md:inline-flex btn btn-secondary text-sm px-5 py-2.5"
            >
              Contact Me
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--text-tertiary)] transition-colors cursor-pointer"
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

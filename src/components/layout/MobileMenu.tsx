"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { X, ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/contact/", label: "Contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Store trigger element and lock scroll
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeButtonRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-close if viewport is resized to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  // Handle Escape key & focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return (
    <div
      ref={menuRef}
      id="mobile-navigation-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile and tablet navigation menu"
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-10 w-full max-w-sm sm:max-w-md h-[100dvh] max-h-[100dvh] bg-[var(--bg-page)]/95 backdrop-blur-2xl border-l border-[var(--border)] shadow-2xl flex flex-col p-5 sm:p-6 transition-transform duration-300 ease-out overflow-y-auto overscroll-contain ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top bar with wordmark & close button */}
        <div className="flex items-center justify-between pb-5 border-b border-[var(--border)] shrink-0">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 font-bold text-lg tracking-tight text-[var(--text-primary)]"
            aria-label="Arifur Rahman Home"
          >
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              Arifur<span className="text-[var(--accent)]">.</span>
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] flex items-center justify-center hover:border-[var(--text-tertiary)] text-[var(--text-primary)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:scale-95"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation links */}
        <nav
          className="flex flex-col gap-1.5 py-6 flex-1 overflow-y-auto"
          aria-label="Mobile main navigation"
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
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base sm:text-lg font-medium transition-all active:scale-[0.99] ${
                  isActive
                    ? "bg-[var(--accent)]/10 text-[var(--accent)] font-semibold border border-[var(--accent)]/20 shadow-xs"
                    : "text-[var(--text-primary)] hover:bg-[var(--bg-surface)] hover:text-[var(--accent)]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="text-[11px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[var(--accent)] text-white shadow-xs">
                    Current
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quick Contact & Action Drawer Footer */}
        <div className="pt-4 border-t border-[var(--border)] space-y-3.5 shrink-0">
          <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for projects
            </span>
            <span className="text-[var(--text-tertiary)] font-medium">Worldwide</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Email</span>
            </a>
            <a
              href={`https://wa.me/${profile.whatsappPrimary.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-xs font-semibold text-[var(--text-primary)] hover:border-emerald-500 transition-colors active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
          </div>

          <Link
            href="/contact/"
            onClick={onClose}
            className="btn btn-primary w-full justify-center text-sm py-3.5 shadow-sm group"
          >
            <span>Discuss Your Project</span>
            <span className="btn-circle-arrow w-5 h-5">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

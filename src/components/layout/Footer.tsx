import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";
import { formatPhoneDisplay, getPrimaryWhatsAppUrl } from "@/lib/helpers";

const footerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border)]">
      {/* Pre-footer CTA */}
      <div className="section-inner px-5 md:px-8 py-16 md:py-24 text-center">
        <h2 className="text-[length:var(--text-h1)] font-bold tracking-tight mb-6">
          Let&apos;s{" "}
          <span className="text-[var(--accent)] font-serif italic">
            Connect
          </span>{" "}
          there
        </h2>
        <Link href="/contact/" className="btn btn-primary text-base px-8 py-4">
          Contact Me
          <span className="btn-circle-arrow">→</span>
        </Link>
      </div>

      {/* Footer content */}
      <div className="border-t border-[var(--border)]">
        <div className="section-inner px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand column */}
            <div>
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-[var(--text-primary)]"
              >
                <span className="text-[var(--accent)]">●</span> Arifur
                <span className="text-[var(--text-tertiary)]">.</span>
              </Link>
              <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed max-w-[280px]">
                Full-Stack Developer helping founders and businesses build
                practical software solutions.
              </p>
            </div>

            {/* Navigation column */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-3">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={getPrimaryWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    {formatPhoneDisplay(profile.whatsappPrimary)}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social column — hidden until URLs provided */}
            {profile.socialLinks.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                  Social
                </h3>
                <div className="flex gap-3">
                  {profile.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-[var(--bg-dark)] text-[var(--text-on-dark)] flex items-center justify-center hover:bg-[var(--accent)] transition-colors text-sm"
                    >
                      {social.platform.charAt(0).toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[var(--border)]">
        <div className="section-inner px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-tertiary)]">
            © {currentYear} {profile.displayName}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-tertiary)]">
            Based in {profile.location}, working globally
          </p>
        </div>
      </div>
    </footer>
  );
}

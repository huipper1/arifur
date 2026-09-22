"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { formatPhoneDisplay, getPrimaryWhatsAppUrl } from "@/lib/helpers";
import { useBlurReveal, useParallax } from "@/hooks/useGSAP";

export default function AboutPreview() {
  const contentRef = useBlurReveal<HTMLDivElement>({ y: 30, duration: 0.8 });
  const imageParallaxRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section className="section bg-[var(--bg-surface)]/60 backdrop-blur-xs border-y border-[var(--border)] relative overflow-hidden">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait with parallax depth */}
          <div ref={imageParallaxRef} className="relative flex justify-center">
            <div className="relative w-[280px] h-[350px] md:w-[360px] md:h-[450px] rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--bg-page)] group">
              <Image
                src={profile.portraitAboutSrc}
                alt={profile.portraitAlt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content with blur-to-clear reveal */}
          <div ref={contentRef}>
            <SectionEyebrow label="About Me" />
            <SectionHeading regular="Who is" accent="Arifur Rahman?" />

            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mt-6 mb-6">
              {profile.bio[0]}
            </p>

            {/* Contact shortcuts with elevated glass pills */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={getPrimaryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center gap-3 px-4 py-3 text-sm text-[var(--text-primary)] hover:border-[var(--accent)] transition-all group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <span className="font-medium">{formatPhoneDisplay(profile.whatsappPrimary)}</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="glass-card inline-flex items-center gap-3 px-4 py-3 text-sm text-[var(--text-primary)] hover:border-[var(--accent)] transition-all group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="font-medium">{profile.email}</span>
              </a>
            </div>

            <Link href="/about/" className="btn btn-outline px-7 py-3.5 group">
              <span>Learn More About Me</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[var(--accent)]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

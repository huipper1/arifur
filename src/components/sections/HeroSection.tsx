"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { profile } from "@/content/profile";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const heroTags = ["React", "Next.js", "Node.js", "TypeScript", "React Native"];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (textRef.current) {
        tl.fromTo(
          textRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }
        );
      }

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.7 },
          "-=0.4"
        );
      }

      if (tagsRef.current) {
        const tags = tagsRef.current.querySelectorAll(".hero-floating-tag");
        if (tags.length) {
          tl.fromTo(
            tags,
            { opacity: 0, y: 15, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 },
            "-=0.3"
          );
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className="section pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <SectionEyebrow
              label={`${profile.displayName} · ${profile.role}`}
            />

            <h1 className="text-[length:var(--text-display)] font-bold tracking-tight leading-[1.08] mt-4 mb-6">
              SaaS, Mobile Apps, and{" "}
              <span className="text-[var(--accent)] font-serif italic">
                Web Applications
              </span>{" "}
              Built Around Your Business
            </h1>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-[520px]">
              {profile.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="btn btn-primary text-base px-7 py-3.5"
              >
                Discuss Your Project
                <span className="btn-circle-arrow">→</span>
              </Link>
              <Link
                href="/services/"
                className="btn btn-outline text-base px-7 py-3.5"
              >
                Explore My Services
              </Link>
            </div>
          </div>

          {/* Portrait + floating tags */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative w-[280px] h-[340px] md:w-[360px] md:h-[420px]">
              {/* Portrait container with accent background */}
              <div
                ref={imageRef}
                className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent-light)] to-[var(--bg-surface)] border border-[var(--border)]"
              >
                <Image
                  src={profile.portraitSrc}
                  alt={profile.portraitAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 280px, 360px"
                />
              </div>

              {/* Floating skill tags */}
              <div ref={tagsRef}>
                <div className="absolute -right-4 top-8 flex flex-col gap-2">
                  {heroTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="hero-floating-tag tag tag-dark text-xs px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute -left-4 bottom-16 flex flex-col gap-2">
                  {heroTags.slice(3).map((tag) => (
                    <span
                      key={tag}
                      className="hero-floating-tag tag tag-dark text-xs px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

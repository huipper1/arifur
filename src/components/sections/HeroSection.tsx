"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (textRef.current) {
        tl.fromTo(
          textRef.current.children,
          { opacity: 0, y: 32, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.12 }
        );
      }

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.94, filter: "blur(8px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.5"
        );

        // Smooth subtle parallax scrub on scroll
        gsap.to(imageRef.current, {
          y: -24,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (tagsRef.current) {
        const tags = tagsRef.current.querySelectorAll(".hero-floating-tag");
        if (tags.length) {
          tl.fromTo(
            tags,
            { opacity: 0, y: 16, scale: 0.85 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.5)" },
            "-=0.4"
          );
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className="section pt-32 md:pt-40 pb-28 md:pb-36">
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
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact/"
                className="btn btn-primary text-base px-8 py-4 group"
              >
                <span>Discuss Your Project</span>
                <span className="btn-circle-arrow">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              <Link
                href="/services/"
                className="btn btn-outline text-base px-8 py-4"
              >
                Explore My Services
              </Link>
            </div>
          </div>

          {/* Portrait + floating tags */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative w-[280px] h-[340px] md:w-[360px] md:h-[420px]">
              {/* Portrait container with subtle ambient glow and shadow */}
              <div
                ref={imageRef}
                className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--accent-light)] to-[var(--bg-surface)] border border-[var(--border)] shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
              >
                <Image
                  src={profile.portraitSrc}
                  alt={profile.portraitAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 280px, 360px"
                />
              </div>

              {/* Floating skill tags */}
              <div ref={tagsRef} className="pointer-events-none">
                <div className="absolute -right-3 top-8 flex flex-col gap-2.5 pointer-events-auto">
                  {heroTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="hero-floating-tag tag tag-dark text-xs px-3.5 py-1.5 shadow-lg border border-white/10 backdrop-blur-md cursor-default transition-all duration-300 hover:scale-105 hover:border-[var(--accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute -left-3 bottom-14 flex flex-col gap-2.5 pointer-events-auto">
                  {heroTags.slice(3).map((tag) => (
                    <span
                      key={tag}
                      className="hero-floating-tag tag tag-dark text-xs px-3.5 py-1.5 shadow-lg border border-white/10 backdrop-blur-md cursor-default transition-all duration-300 hover:scale-105 hover:border-[var(--accent)]"
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

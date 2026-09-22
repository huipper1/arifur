"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to check if the user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Hook to animate an element on scroll into view (fade up)
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  y?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const y = options?.y ?? 30;
    const duration = options?.duration ?? 0.6;
    const delay = options?.delay ?? 0;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [options?.y, options?.duration, options?.delay]);

  return ref;
}

/**
 * Hook to animate multiple children in stagger on scroll
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  childSelector = "> *",
  options?: {
    y?: number;
    stagger?: number;
    duration?: number;
    delay?: number;
  }
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = container.querySelectorAll(childSelector);
    if (!elements.length) return;

    if (prefersReducedMotion) {
      gsap.set(elements, { opacity: 1, y: 0 });
      return;
    }

    const y = options?.y ?? 24;
    const stagger = options?.stagger ?? 0.12;
    const duration = options?.duration ?? 0.5;
    const delay = options?.delay ?? 0;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [childSelector, options?.y, options?.stagger, options?.duration, options?.delay]);

  return containerRef;
}

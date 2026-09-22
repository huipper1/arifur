import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import MarqueeStrip from "@/components/layout/MarqueeStrip";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer helping founders and businesses build practical software. Learn about my approach, capabilities, and working principles.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.displayName,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.whatsappPrimary,
    url: profile.siteUrl || "https://arifur.dev",
    description: profile.summary,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React Native",
      "PostgreSQL",
      "SaaS Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-16">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="relative flex justify-center">
              <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent-light)] to-[var(--bg-surface)] border border-[var(--border)]">
                <Image
                  src={profile.portraitSrc}
                  alt={profile.portraitAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionEyebrow label="About Me" />
              <SectionHeading
                regular="Who is"
                accent="Arifur Rahman?"
                as="h1"
                size="display"
              />
              <div className="mt-6 space-y-4">
                {profile.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[var(--text-secondary)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Working Principles */}
      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-12">
            <SectionEyebrow
              label="How I Work"
              className="justify-center"
            />
            <SectionHeading regular="My" accent="Working Principles" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.workingPrinciples.map((principle, index) => (
              <div key={index} className="card p-6 md:p-8">
                <span className="text-3xl font-bold text-[var(--accent)] opacity-30 font-serif">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold mt-3 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Technical Capabilities */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="section-inner">
          <div className="text-center mb-12">
            <SectionEyebrow
              label="Technical Skills"
              className="justify-center"
            />
            <SectionHeading
              regular="Technologies That"
              accent="Power My Work"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.techCapabilities.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="section-inner text-center">
          <h2 className="text-[length:var(--text-h1)] font-bold tracking-tight mb-4">
            Let&apos;s Build{" "}
            <span className="text-[var(--accent)] font-serif italic">
              Something Great
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-[480px] mx-auto">
            Ready to turn your idea into working software? Let&apos;s talk about
            your project.
          </p>
          <Link
            href="/contact/"
            className="btn btn-primary text-base px-8 py-4"
          >
            Start a Conversation
            <span className="btn-circle-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import MarqueeStrip from "@/components/layout/MarqueeStrip";
import { services, industries } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SaaS development, mobile apps, custom web applications, MVP planning, and existing product improvements. Practical development services for businesses.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-16">
        <div className="section-inner">
          <div className="max-w-[720px]">
            <SectionEyebrow label="What I Do" />
            <SectionHeading
              regular="Services"
              accent="I Provide"
              as="h1"
              size="display"
            />
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mt-6">
              I help businesses build, improve, and scale their software
              products. Every engagement starts with understanding your goals
              and ends with something your team can use and maintain.
            </p>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Services List */}
      <section className="section">
        <div className="section-inner">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                  {/* Left: Number + Title */}
                  <div className="lg:col-span-2">
                    <span className="text-5xl font-bold text-[var(--accent)] opacity-20 font-serif">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[length:var(--text-h2)] font-bold mt-2">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-3">
                    {/* Buyer Problem */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">
                        The Challenge
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {service.buyerProblem}
                      </p>
                    </div>

                    {/* Capabilities */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                        What I Deliver
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((cap) => (
                          <span key={cap} className="tag text-sm">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                        Typical Engagement
                      </h3>
                      <ol className="space-y-2">
                        {service.process.map((step, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-[var(--text-secondary)]"
                          >
                            <span className="text-[var(--accent)] font-semibold flex-shrink-0">
                              {i + 1}.
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/contact/?service=${service.id}`}
                      className="btn btn-primary px-6 py-3"
                    >
                      {service.ctaLabel}
                      <span className="btn-circle-arrow">→</span>
                    </Link>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <hr className="border-[var(--border)] mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Industries */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="section-inner">
          <div className="text-center mb-12">
            <SectionEyebrow label="Industries" className="justify-center" />
            <SectionHeading
              regular="Areas Where I Can"
              accent="Help"
            />
          </div>
          <p className="text-center text-[var(--text-secondary)] text-sm mb-10 max-w-[520px] mx-auto">
            These are illustrative application areas where my development
            services can add value. Each project is scoped around your specific
            requirements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div key={industry.name} className="card p-5">
                <h3 className="font-semibold text-sm mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="section-inner text-center">
          <h2 className="text-[length:var(--text-h1)] font-bold tracking-tight mb-4">
            Not Sure{" "}
            <span className="text-[var(--accent)] font-serif italic">
              Which Service Fits?
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-[480px] mx-auto">
            Tell me what you&apos;re working on and I&apos;ll help you figure
            out the right approach.
          </p>
          <Link
            href="/contact/"
            className="btn btn-primary text-base px-8 py-4"
          >
            Discuss Your Project
            <span className="btn-circle-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

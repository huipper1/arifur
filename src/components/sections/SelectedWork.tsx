"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/content/projects";
import { useStaggerBlurReveal, useBlurReveal } from "@/hooks/useGSAP";

export default function SelectedWork() {
  const projects = getFeaturedProjects(3);
  const headerRef = useBlurReveal<HTMLDivElement>({ y: 24, blur: 8 });
  const listRef = useStaggerBlurReveal<HTMLDivElement>(".project-card-item", {
    y: 30,
    blur: 8,
    stagger: 0.12,
  });

  // Don't render this section if no published projects exist
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <div className="section-inner">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <SectionEyebrow label="My Portfolio" />
            <SectionHeading regular="Let's Have a Look at" accent="My Work" />
          </div>
          <Link href="/projects/" className="btn btn-primary px-6 py-3">
            View All Projects
            <span className="btn-circle-arrow">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Project cards — alternating layout */}
        <div ref={listRef} className="space-y-8">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={project.id}
                className="card project-card-item overflow-hidden group"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    isReversed ? "" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] md:aspect-auto bg-[var(--bg-page)] overflow-hidden ${
                      isReversed ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.thumbnailAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {project.isConcept && (
                      <span className="absolute top-4 left-4 tag text-xs bg-[var(--accent)] text-white border-none shadow-md">
                        Concept
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${
                      isReversed ? "md:order-1" : ""
                    }`}
                  >
                    <h3 className="text-[length:var(--text-h3)] font-bold mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {project.title} –{" "}
                      <span className="text-[var(--accent)] font-serif italic">
                        {project.category}
                      </span>
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Metadata */}
                    <div className="space-y-2 text-sm mb-5">
                      <div className="flex justify-between py-1.5 border-b border-[var(--border)]">
                        <span className="text-[var(--text-tertiary)]">
                          Category
                        </span>
                        <span className="font-medium">{project.category}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-[var(--border)]">
                        <span className="text-[var(--text-tertiary)]">
                          Industry
                        </span>
                        <span className="font-medium">{project.industry}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-[var(--text-tertiary)]">
                          Role
                        </span>
                        <span className="font-medium">{project.role}</span>
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.slug}/`}
                      className="btn-ghost inline-flex items-center gap-1.5 text-sm self-start group/btn font-medium"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

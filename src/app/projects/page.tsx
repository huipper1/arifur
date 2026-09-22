"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getPublishedProjects,
  getProjectCategories,
  type ProjectCategory,
} from "@/content/projects";

export default function ProjectsPage() {
  const allProjects = getPublishedProjects();
  const categories = getProjectCategories();
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>(
    "All"
  );

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const showFilters = categories.length >= 2;
  const hasProjects = allProjects.length > 0;

  return (
    <>
      <section className="section pt-32 md:pt-40">
        <div className="section-inner">
          {/* Header */}
          <div className="text-center mb-12">
            <SectionEyebrow label="My Portfolio" className="justify-center" />
            <SectionHeading
              regular="Let's Have a Look at"
              accent="My Work"
              as="h1"
              size="display"
            />
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveFilter("All")}
                className={`tag cursor-pointer transition-colors ${
                  activeFilter === "All"
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "hover:border-[var(--text-tertiary)]"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`tag cursor-pointer transition-colors ${
                    activeFilter === cat
                      ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                      : "hover:border-[var(--text-tertiary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Projects grid */}
          {hasProjects ? (
            <>
              {filteredProjects.length > 0 ? (
                <div className="space-y-8">
                  {filteredProjects.map((project, index) => {
                    const isReversed = index % 2 !== 0;
                    return (
                      <div key={project.id} className="card overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div
                            className={`relative aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-[var(--bg-page)] ${
                              isReversed ? "md:order-2" : ""
                            }`}
                          >
                            <Image
                              src={project.thumbnail}
                              alt={project.thumbnailAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {project.isConcept && (
                              <span className="absolute top-4 left-4 tag text-xs bg-[var(--accent)] text-white border-none">
                                Concept
                              </span>
                            )}
                          </div>
                          <div
                            className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${
                              isReversed ? "md:order-1" : ""
                            }`}
                          >
                            <h3 className="text-[length:var(--text-h3)] font-bold mb-1">
                              {project.title} –{" "}
                              <span className="text-[var(--accent)] font-serif italic">
                                {project.category}
                              </span>
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                              {project.summary}
                            </p>
                            <div className="space-y-2 text-sm mb-5">
                              <div className="flex justify-between py-1.5 border-b border-[var(--border)]">
                                <span className="text-[var(--text-tertiary)]">
                                  Category
                                </span>
                                <span className="font-medium">
                                  {project.category}
                                </span>
                              </div>
                              <div className="flex justify-between py-1.5 border-b border-[var(--border)]">
                                <span className="text-[var(--text-tertiary)]">
                                  Industry
                                </span>
                                <span className="font-medium">
                                  {project.industry}
                                </span>
                              </div>
                              <div className="flex justify-between py-1.5">
                                <span className="text-[var(--text-tertiary)]">
                                  Role
                                </span>
                                <span className="font-medium">
                                  {project.role}
                                </span>
                              </div>
                            </div>
                            <Link
                              href={`/projects/${project.slug}/`}
                              className="btn-ghost inline-flex items-center gap-1 text-sm self-start"
                            >
                              View Details →
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-[var(--text-secondary)]">
                    No projects found in this category.
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Empty state — no published projects */
            <div className="text-center py-20">
              <p className="text-[var(--text-secondary)] text-lg mb-6 max-w-[480px] mx-auto">
                Selected project details are being prepared. Tell me what
                you&apos;re building and I can discuss relevant work.
              </p>
              <Link
                href="/contact/"
                className="btn btn-primary px-6 py-3"
              >
                Discuss Your Project
                <span className="btn-circle-arrow">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

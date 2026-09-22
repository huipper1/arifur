import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink, Code } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import MarqueeStrip from "@/components/layout/MarqueeStrip";
import { getPublishedProjects, getProjectBySlug } from "@/content/projects";

export function generateStaticParams() {
  const published = getPublishedProjects();
  if (published.length === 0) {
    // Required by Next.js static export when no projects are published yet
    return [{ slug: "_empty" }];
  }
  return published.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.summary,
  };
}

export default function ProjectCaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-16">
        <div className="section-inner">
          <SectionEyebrow label={project.category} />
          <h1 className="text-[length:var(--text-display)] font-bold tracking-tight leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-[640px] mb-8">
            {project.summary}
          </p>

          {project.isConcept && (
            <span className="tag bg-[var(--accent)] text-white border-none mb-8 inline-flex">
              This is a concept project
            </span>
          )}

          {/* Hero screenshot */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)]">
            <Image
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="section pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Problem */}
              <div>
                <h2 className="text-[length:var(--text-h2)] font-bold mb-4">
                  The{" "}
                  <span className="text-[var(--accent)] font-serif italic">
                    Problem
                  </span>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-[length:var(--text-h2)] font-bold mb-4">
                  My{" "}
                  <span className="text-[var(--accent)] font-serif italic">
                    Approach
                  </span>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Key Features */}
              {project.features.length > 0 && (
                <div>
                  <h2 className="text-[length:var(--text-h2)] font-bold mb-4">
                    Key{" "}
                    <span className="text-[var(--accent)] font-serif italic">
                      Features
                    </span>
                  </h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[var(--text-secondary)]"
                      >
                        <span className="text-[var(--accent)] mt-1 flex-shrink-0">
                          ●
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Screenshots */}
              {project.screenshots.length > 0 && (
                <div>
                  <h2 className="text-[length:var(--text-h2)] font-bold mb-6">
                    Screenshots
                  </h2>
                  <div className="space-y-6">
                    {project.screenshots.map((screenshot, i) => (
                      <figure key={i}>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)]">
                          <Image
                            src={screenshot.src}
                            alt={screenshot.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                          />
                        </div>
                        {screenshot.caption && (
                          <figcaption className="mt-2 text-sm text-[var(--text-tertiary)] text-center">
                            {screenshot.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcomes */}
              {project.outcomes && (
                <div>
                  <h2 className="text-[length:var(--text-h2)] font-bold mb-4">
                    Results
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {project.outcomes}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 lg:sticky lg:top-28 space-y-6">
                {/* Metadata */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                    Project Details
                  </h3>
                  <div className="space-y-3 text-sm">
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
                    <div className="flex justify-between py-1.5 border-b border-[var(--border)]">
                      <span className="text-[var(--text-tertiary)]">Role</span>
                      <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[var(--border)]">
                      <span className="text-[var(--text-tertiary)]">
                        Scope
                      </span>
                      <span className="font-medium text-right max-w-[180px]">
                        {project.scope}
                      </span>
                    </div>
                    {project.teamAttribution && (
                      <div className="flex justify-between py-1.5 border-b border-[var(--border)]">
                        <span className="text-[var(--text-tertiary)]">
                          Team
                        </span>
                        <span className="font-medium">
                          {project.teamAttribution}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.demoUrl || project.repositoryUrl) && (
                  <div className="space-y-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-full justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Demo
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline w-full justify-center gap-2"
                      >
                        <Code className="w-4 h-4" />
                        View Repository
                      </a>
                    )}
                  </div>
                )}

                {/* CTA */}
                <Link
                  href="/contact/"
                  className="btn btn-primary w-full justify-center shadow-lg shadow-[var(--accent)]/15"
                >
                  Discuss a Similar Project
                  <span className="btn-circle-arrow">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />
    </>
  );
}

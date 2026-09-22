import Link from "next/link";
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/content/projects";

export default function SelectedWork() {
  const projects = getFeaturedProjects(3);

  // Don't render this section if no published projects exist
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <div className="section-inner">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <SectionEyebrow label="My Portfolio" />
            <SectionHeading regular="Let's Have a Look at" accent="My Work" />
          </div>
          <Link href="/projects/" className="btn btn-primary px-6 py-3">
            View All Projects
            <span className="btn-circle-arrow">→</span>
          </Link>
        </div>

        {/* Project cards — alternating layout */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={project.id}
                className="card overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    isReversed ? "" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] md:aspect-auto bg-[var(--bg-page)] ${
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

                  {/* Content */}
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
      </div>
    </section>
  );
}

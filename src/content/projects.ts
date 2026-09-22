export type ProjectStatus = "draft" | "published" | "concept";
export type ProjectCategory = "SaaS" | "Mobile App" | "Web Application";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  industry: string;
  summary: string;
  status: ProjectStatus;
  isConcept: boolean;
  featured: boolean;
  thumbnail: string;
  thumbnailAlt: string;
  screenshots: ProjectScreenshot[];
  problem: string;
  scope: string;
  role: string;
  teamAttribution?: string;
  approach: string;
  features: string[];
  technologies: string[];
  outcomes?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
}

/**
 * Projects array — add your real projects here.
 *
 * Required fields for published projects:
 * - id, slug (unique), title, category, summary, status: "published"
 * - thumbnail, thumbnailAlt, problem, scope, role, approach
 * - At least one screenshot with alt text
 * - technologies array
 *
 * Set status to "draft" to keep a project hidden from production.
 * Set isConcept to true and clearly label concept/demo projects.
 *
 * Example draft project (hidden from production):
 */
export const projects: Project[] = [
  {
    id: "example-saas-platform",
    slug: "example-saas-platform",
    title: "Example SaaS Platform",
    category: "SaaS",
    industry: "E-commerce",
    summary:
      "A multi-tenant SaaS platform for e-commerce analytics with real-time dashboards and team collaboration.",
    status: "draft",
    isConcept: true,
    featured: true,
    thumbnail: "/images/projects/placeholder-project.jpg",
    thumbnailAlt: "Example SaaS Platform dashboard showing analytics overview",
    screenshots: [],
    problem:
      "E-commerce teams needed a centralized platform to track sales performance across multiple channels in real-time.",
    scope:
      "Full-stack development of a multi-tenant SaaS application with role-based access, real-time data visualization, and third-party integrations.",
    role: "Full-Stack Developer",
    approach:
      "Built with Next.js and Node.js, using PostgreSQL for data storage and WebSockets for real-time updates. Implemented multi-tenant architecture with workspace isolation.",
    features: [
      "Real-time analytics dashboard",
      "Multi-channel data aggregation",
      "Team workspaces with role-based access",
      "Automated reporting and alerts",
      "Third-party platform integrations",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],
    outcomes:
      "This is a draft example project. Replace with real outcomes when available.",
  },
];

/** Get only published projects */
export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.status === "published");
}

/** Get featured published projects (for home page) */
export function getFeaturedProjects(limit = 3): Project[] {
  return getPublishedProjects()
    .filter((p) => p.featured)
    .slice(0, limit);
}

/** Get a published project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((p) => p.slug === slug);
}

/** Get all unique categories from published projects */
export function getProjectCategories(): ProjectCategory[] {
  const categories = new Set(
    getPublishedProjects().map((p) => p.category)
  );
  return Array.from(categories);
}

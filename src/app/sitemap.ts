import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { getPublishedProjects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = profile.siteUrl || "https://arifur.dev";
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  // Include only published project case studies
  const publishedProjects = getPublishedProjects();
  for (const project of publishedProjects) {
    routes.push({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return routes;
}

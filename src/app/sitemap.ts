import type { MetadataRoute } from "next";
import { projects } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const updatedAt = new Date("2026-08-11");

  return [
    { url: baseUrl, lastModified: updatedAt, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/en`, lastModified: updatedAt, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: updatedAt, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/en/projects`, lastModified: updatedAt, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...projects.map((project) => ({ url: `${baseUrl}/en/projects/${project.slug}`, lastModified: updatedAt, changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}

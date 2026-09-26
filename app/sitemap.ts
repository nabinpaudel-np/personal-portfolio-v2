import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getAllPosts, getAllCaseStudies } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const CASES_DIR = path.join(process.cwd(), "content", "case-studies");

function mtime(filepath: string): Date {
  try {
    return fs.statSync(filepath).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    lastModified: mtime(path.join(CASES_DIR, `${cs.slug}.md`)),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: mtime(path.join(POSTS_DIR, `${post.slug}.md`)),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...postRoutes];
}

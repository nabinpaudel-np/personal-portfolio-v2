import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const CASES_DIR = path.join(process.cwd(), "content", "case-studies");

export type PostMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
};

export type CaseStudyMeta = {
  slug: string;
  title: string;
  client: string;
  role: string;
  scope: string;
  status: string;
  year: string;
  coverImage: string;
  tags: string[];
  obstacle: string;
  resolution: string;
};

function readDir(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

function toPostMeta(filename: string, data: Record<string, unknown>): PostMeta {
  return {
    slug: filename.replace(/\.md$/, ""),
    title: String(data.title ?? ""),
    category: String(data.category ?? "Uncategorized"),
    date: String(data.date ?? ""),
    readTime: String(data.readTime ?? "5 min"),
    excerpt: String(data.excerpt ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    coverImage: String(data.coverImage ?? ""),
    featured: Boolean(data.featured),
  };
}

function toCaseMeta(filename: string, data: Record<string, unknown>): CaseStudyMeta {
  return {
    slug: filename.replace(/\.md$/, ""),
    title: String(data.title ?? ""),
    client: String(data.client ?? ""),
    role: String(data.role ?? ""),
    scope: String(data.scope ?? ""),
    status: String(data.status ?? ""),
    year: String(data.year ?? ""),
    coverImage: String(data.coverImage ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    obstacle: String(data.obstacle ?? ""),
    resolution: String(data.resolution ?? ""),
  };
}

export function getAllPosts(): PostMeta[] {
  const files = readDir(POSTS_DIR);
  const posts = files.map((f) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
    const { data } = matter(raw);
    return toPostMeta(f, data);
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: toPostMeta(`${slug}.md`, data), content };
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  const files = readDir(CASES_DIR);
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(CASES_DIR, f), "utf8");
    const { data } = matter(raw);
    return toCaseMeta(f, data);
  });
}

export function getCaseStudyBySlug(slug: string): { meta: CaseStudyMeta; content: string } | null {
  const file = path.join(CASES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: toCaseMeta(`${slug}.md`, data), content };
}
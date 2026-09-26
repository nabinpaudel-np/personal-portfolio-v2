import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import BlogHero from "@/components/blog/BlogHero";
import CategoryFilter from "@/components/blog/CategoryFilter";
import ArticlesGrid from "@/components/blog/ArticlesGrid";
import DistributionChannels from "@/components/blog/DistributionChannels";
import NewsletterBox from "@/components/blog/NewsletterBox";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Unfiltered writing on technical project management, building ventures, education, and figuring things out in the age of AI.",
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const allPosts = getAllPosts();
  const posts = cat
    ? allPosts.filter((p) => slugify(p.category) === cat)
    : allPosts;

  return (
    <main className="w-full bg-surface">
      <BlogHero />
      <Container>
        <CategoryFilter posts={allPosts} active={cat ?? "all"} />
      </Container>
      <ArticlesGrid posts={posts} />
      <DistributionChannels />
      <NewsletterBox />
    </main>
  );
}

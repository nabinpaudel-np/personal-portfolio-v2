import { getAllPosts } from "@/lib/content";
import BlogHero from "@/components/blog/BlogHero";
import CategoryFilter from "@/components/blog/CategoryFilter";
import ArticlesGrid from "@/components/blog/ArticlesGrid";
import DistributionChannels from "@/components/blog/DistributionChannels";
import NewsletterBox from "@/components/blog/NewsletterBox";
import Container from "@/components/layout/Container";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full bg-surface">
      <BlogHero />
      <Container>
        <CategoryFilter />
      </Container>
      <ArticlesGrid posts={posts} />
      <DistributionChannels />
      <NewsletterBox />
    </main>
  );
}
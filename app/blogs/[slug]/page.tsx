import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";
import ArticleHero from "@/components/blog/ArticleHero";
import NextReads from "@/components/blog/NextReads";
import NewsletterBox from "@/components/blog/NewsletterBox";
import Container from "@/components/layout/Container";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const m = post.meta;
  return {
    title: m.title,
    description: m.excerpt,
    openGraph: {
      title: m.title,
      description: m.excerpt,
      type: "article",
      publishedTime: m.date,
      tags: m.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const next = allPosts.filter((p) => p.slug !== post.meta.slug).slice(0, 2);

  return (
    <main className="w-full bg-surface">
      <ArticleHero post={post.meta} />

      <article className="w-full bg-surface">
        <Container className="py-16">
          <div className="prose-mdx max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </Container>
      </article>

      <NextReads posts={next} />
      <NewsletterBox />
    </main>
  );
}

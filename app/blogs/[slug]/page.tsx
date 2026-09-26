import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";
import ArticleHero from "@/components/blog/ArticleHero";
import NextReads from "@/components/blog/NextReads";
import NewsletterBox from "@/components/blog/NewsletterBox";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
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
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-16">
          <div className="prose-mdx max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
              },
            }} />
          </div>
        </div>
      </article>

      <NextReads posts={next} />
      <NewsletterBox />
    </main>
  );
}
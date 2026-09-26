import Link from "next/link";
import type { PostMeta } from "@/lib/content";

export default function NextReads({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="w-full bg-surface border-t border-border-frame">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-frame">
          <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold">
            NEXT READS // CONTINUE THE SYSTEM
          </span>
          <Link
            href="/blogs"
            className="font-label-md text-label-md uppercase text-on-surface underline underline-offset-4 hover:bg-tertiary-fixed"
          >
            ALL NOTES →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0, 2).map((p) => (
            <Link
              key={p.slug}
              href={`/blogs/${p.slug}`}
              className="border border-border-frame bg-surface p-6 lg:p-8 hover:border-primary transition-none block group"
            >
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-3">
                {p.category}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 tracking-tight group-hover:underline decoration-2 underline-offset-4">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed mb-4">
                {p.excerpt}
              </p>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                {p.readTime}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
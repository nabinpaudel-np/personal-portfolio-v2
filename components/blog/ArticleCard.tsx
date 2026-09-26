import Link from "next/link";
import type { PostMeta } from "@/lib/content";

export default function ArticleCard({ post }: { post: PostMeta }) {
  const tagsString = post.tags.join(" · ").toUpperCase();
  const slug = post.slug;
  return (
    <article className="bg-surface hover:bg-surface-container p-8 lg:p-10 flex flex-col justify-between group transition-none">
      <div>
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-border-frame">
          <span
            className={`px-2 py-0.5 border border-primary font-label-sm text-label-sm uppercase font-semibold ${
              post.category === "AI & Modern Tech"
                ? "bg-tertiary-fixed text-primary"
                : ""
            }`}
          >
            {post.category}
          </span>
          <span className="font-label-sm text-label-sm uppercase text-secondary">
            {post.readTime}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight mb-4 group-hover:underline decoration-2 underline-offset-4">
          <Link className="block" href={`/blogs/${slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>
      <div className="pt-6 border-t border-border-frame flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 border border-border-frame bg-surface-container-low font-label-sm text-label-sm uppercase text-on-surface"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href={`/blogs/${slug}`}
          className="font-label-md text-label-md uppercase font-bold text-on-surface group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform self-end"
        >
          OPEN NOTE{" "}
          <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
        </Link>
      </div>
    </article>
  );
}
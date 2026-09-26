import Link from "next/link";
import type { PostMeta } from "@/lib/content";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function CategoryFilter({
  posts,
  active = "all",
}: {
  posts: PostMeta[];
  active?: string;
}) {
  const counts = new Map<string, number>();
  for (const p of posts) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);

  const cats = Array.from(counts.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <div className="flex flex-wrap gap-2 pt-4">
      <FilterChip href="/blogs" active={active === "all"}>
        {`[ All Notes (${posts.length}) ]`}
      </FilterChip>
      {cats.map(([label, count]) => {
        const slug = slugify(label);
        return (
          <FilterChip key={slug} href={`/blogs?cat=${slug}`} active={active === slug}>
            {`${label} (${count})`}
          </FilterChip>
        );
      })}
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      className={`px-4 py-2 font-label-md text-label-md uppercase border transition-none ${
        active
          ? "bg-primary text-on-primary border-primary"
          : "bg-surface text-on-surface border-border-frame hover:bg-surface-container-high"
      }`}
    >
      {children}
    </Link>
  );
}

import ArticleCard from "./ArticleCard";
import type { PostMeta } from "@/lib/content";
import Container from "@/components/layout/Container";

export default function ArticlesGrid({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="w-full border-b border-border-frame">
      <Container className="pt-6 pb-16 lg:pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-border-frame">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
              CATALOGUE // SYSTEMATIC RECORDS
            </span>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface uppercase tracking-tight">
              Curated Insights & Operational Blueprints
            </h2>
          </div>
          <div className="font-label-sm text-label-sm text-secondary uppercase">
            SORT: CHRONOLOGICAL // DESCENDING
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-frame border border-border-frame">
          {posts.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>

        {posts.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button className="w-full md:w-auto px-10 py-4 bg-surface border border-primary hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md uppercase transition-none">
              ARCHIVE LOGS // LOAD OLDER FIELD NOTES ({Math.max(0, 18 - posts.length)} REMAINING)
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

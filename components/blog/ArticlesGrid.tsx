"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import type { PostMeta } from "@/lib/content";

export default function ArticlesGrid({ posts }: { posts: PostMeta[] }) {
  const [category, setCategory] = useState("all");
  const visible = category === "all" ? posts : posts.slice(0, 4);

  return (
    <section className="w-full border-b border-border-frame">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12 pt-6 pb-16 lg:pb-24">
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
          {visible.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>

        {posts.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button className="w-full md:w-auto px-10 py-4 bg-surface border border-primary hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md uppercase transition-none">
              ARCHIVE LOGS // LOAD OLDER FIELD NOTES ({Math.max(0, 18 - visible.length)} REMAINING)
            </button>
          </div>
        )}

        {/* hidden category state for filter state handoff */}
        <input type="hidden" value={category} onChange={() => setCategory(category)} readOnly />
        <button onClick={() => setCategory("all")} className="hidden" data-cat-reset />
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/content";
import Container from "@/components/layout/Container";

export default function ArticleHero({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <section className="w-full border-b border-border-frame bg-surface">
      <Container className="pt-10 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border-frame">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-tertiary-fixed px-1.5 py-0.5 transition-none w-fit"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Back to all Content & Notes</span>
          </Link>
          <div className="flex items-center gap-3 font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            <span className="inline-block w-2 h-2 bg-tertiary-fixed"></span>
            <span>FIELD NOTES // ESSAY 04</span>
            <span>/</span>
            <span>PUBLISHED BI-WEEKLY</span>
            <span>/</span>
            <span>SYSTEM V2.4</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border border-primary px-2.5 py-1 font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-low text-on-surface"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="pt-8 pb-6">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tighter leading-none max-w-5xl">
            {post.title}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-4xl mt-6 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-border-frame items-center">
          <div className="md:col-span-6 flex items-center gap-4">
            <div className="relative w-12 h-12 border border-primary overflow-hidden">
              <Image
                className="object-cover"
                alt="Nabin Paudel portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH1KgBEslSxZJRN8ZdNzcjZW8DuSWXhLUHpOkMAZq3XugzOyIcq9P5awblIHPcG_y4gMT6EkpjYLPzt23mFyPjh0ijOfjeZLdFXOlMC7ODwI9YUfyp3FfxCGMDA29XTkV0dwnQ2jUnPF_mfQ64h_gCZ7HkrpZ9_FbCVW77-19au3pLHhyA43aWKtX-CFiN0z6_v35HgEl-l6n0ToW0SYFJdDR11ZF1dg5GFL11us62jAbZd9WJx_0yUA"
                fill
                sizes="48px"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label-md text-label-md uppercase text-on-surface font-bold tracking-wider">
                  Nabin Paudel
                </span>
                <span className="w-1.5 h-1.5 bg-tertiary-fixed"></span>
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  Kathmandu / Remote
                </span>
              </div>
              <p className="font-body-md text-body-md text-secondary text-sm">
                Technical Project Manager & Builder
              </p>
            </div>
          </div>
          <div className="md:col-span-6 flex flex-wrap md:justify-end items-center gap-6 font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">schedule</span>
              <span className="text-on-surface font-semibold">{post.readTime.replace(" min", "")} MIN READ</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
              <span className="text-on-surface font-semibold">{formattedDate.toUpperCase()}</span>
            </div>
            <span>·</span>
            <div className="border border-border-frame px-2 py-1 bg-surface-container">
              <span>INDEX REF: #ENG-882</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

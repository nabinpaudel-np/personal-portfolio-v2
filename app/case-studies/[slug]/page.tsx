import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";
import Container from "@/components/layout/Container";
import Kicker from "@/components/ui/Kicker";

export async function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();
  const m = study.meta;

  return (
    <main className="w-full bg-surface">
      <section className="w-full border-b border-border-frame bg-surface">
        <Container className="py-space-2xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-tertiary-fixed px-1.5 py-0.5 transition-none w-fit mb-6"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Back to all Case Studies</span>
          </Link>
          <Kicker className="block mb-space-sm">
            {m.year} · {m.status}
          </Kicker>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight leading-none mb-space-md max-w-5xl">
            {m.title}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-3xl mb-space-lg">
            <strong className="text-primary">OBSTACLE:</strong> {m.obstacle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border-frame pt-space-md font-label-md text-label-md uppercase">
            <div>
              <span className="block text-secondary text-label-sm tracking-widest">CLIENT</span>
              <span className="font-bold text-on-surface">{m.client}</span>
            </div>
            <div>
              <span className="block text-secondary text-label-sm tracking-widest">ROLE</span>
              <span className="font-bold text-on-surface">{m.role}</span>
            </div>
            <div>
              <span className="block text-secondary text-label-sm tracking-widest">SCOPE</span>
              <span className="font-bold text-on-surface">{m.scope}</span>
            </div>
            <div>
              <span className="block text-secondary text-label-sm tracking-widest">TAGS</span>
              <span className="font-bold text-on-surface">{m.tags.join(" · ")}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-surface">
        <Container className="py-space-2xl">
          <div className="prose-mdx max-w-none">
            <MDXRemote source={study.content} components={mdxComponents} />
          </div>
        </Container>
      </section>
    </main>
  );
}
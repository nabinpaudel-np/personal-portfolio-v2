import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/content";
import Container from "@/components/layout/Container";
import Kicker from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Structured case studies: the obstacle, the resolution, the receipts. Edit a .md file to update.",
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();
  return (
    <main className="w-full bg-surface">
      <section className="w-full border-b border-border-frame">
        <Container className="py-space-2xl">
          <Kicker className="block mb-space-sm">CASE STUDIES // ARCHIVE</Kicker>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight leading-none mb-space-md">
            The work, in detail.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Each entry below is a structured case study with the obstacle, the resolution, and
            the receipts. Edit the matching <code className="font-mono">.md</code> file in{" "}
            <code className="font-mono">content/case-studies/</code> to update.
          </p>
        </Container>
      </section>

      <section className="w-full">
        <Container className="py-space-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {studies.map((s) => (
              <Link
                key={s.slug}
                href={`/case-studies/${s.slug}`}
                className="border border-border-frame bg-surface p-8 lg:p-10 hover:border-primary transition-none block"
              >
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
                  {s.year} · {s.status}
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight mb-3">
                  {s.title}
                </h2>
                <div className="grid grid-cols-2 gap-4 border-t border-border-frame pt-4 font-label-sm text-label-sm uppercase mb-4">
                  <div>
                    <span className="block text-secondary">CLIENT</span>
                    <span className="font-semibold text-on-surface">{s.client}</span>
                  </div>
                  <div>
                    <span className="block text-secondary">ROLE</span>
                    <span className="font-semibold text-on-surface">{s.role}</span>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-4">
                  <strong className="text-primary">OBSTACLE:</strong> {s.obstacle}
                </p>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-6">
                  <strong className="text-primary">RESOLUTION:</strong> {s.resolution}
                </p>
                <span className="font-label-md text-label-md uppercase text-primary font-bold hover:bg-tertiary-fixed px-1 inline-block">
                  READ CASE STUDY →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

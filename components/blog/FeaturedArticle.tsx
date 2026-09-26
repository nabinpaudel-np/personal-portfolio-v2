import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/content";

export default function FeaturedArticle({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <section className="w-full border-b border-border-frame bg-surface-container-low">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-frame">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="font-label-md text-label-md tracking-wider uppercase text-primary font-bold">
              FLAGSHIP ESSAY // LEAD STORY
            </span>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            VOL. 26 · ISSUE 04
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border-frame bg-surface">
          <article className="lg:col-span-8 p-8 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-frame">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase">
                  {post.category} // DEEP DIVE
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  · {post.readTime.replace(" min", "")} MIN READ · PUBLISHED {formattedDate}
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight leading-none mb-6">
                {post.title}
              </h2>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-8">
                {post.excerpt}
              </p>
            </div>
            <div>
              <div className="border border-border-frame bg-surface-container-low p-6 mb-8">
                <div className="font-label-sm text-label-sm uppercase text-secondary tracking-widest mb-4 flex items-center justify-between">
                  <span>[ CORE ARCHITECTURE // KEY TAKEAWAYS ]</span>
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    data_object
                  </span>
                </div>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <li key={tag} className="flex items-start gap-3">
                      <span className="font-label-md text-label-md font-bold text-primary pt-0.5">
                        0{i + 1}/
                      </span>
                      <span>
                        <strong className="capitalize">{tag}</strong>: Operationally validated
                        pattern from real delivery environments.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-border-frame">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 border border-primary overflow-hidden bg-primary">
                    <Image
                      className="object-cover grayscale"
                      alt="Nabin Paudel portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSTZFhMaVvH6ho8isrYAXalmSKMKK7soYPqWO9hE5vb47pFnV-a6UKvbC5YORQhXqUjXG9VXKxYRMIV7lUDSPCiqgESora77bQSifxbr1F1W67H6PBATHNbtSqDCcIz1j0zUx5ty9b6thHySIOOTA9uDHXC_GnLkhrkrYSKBnp3ywjW30lzs0CUlM8DqoRLPP01mUJaM7C8Vr98Pe2RrTwGgiqs_dEgBAX-98Zzs19XYkuQkzkr69mBw"
                      fill
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <span className="font-label-md text-label-md uppercase text-on-surface block">
                      Nabin Paudel
                    </span>
                    <span className="font-label-sm text-label-sm uppercase text-secondary">
                      Author · Systems Lead
                    </span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase hover:bg-tertiary-fixed hover:text-primary transition-none"
                >
                  <span>READ COMPLETE ESSAY</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </article>

          <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-between bg-surface">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-frame">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  SPURIOUS VS REAL AGILITY
                </span>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  DIAGNOSTIC MATRIX
                </span>
              </div>
              <div className="mb-8">
                <div className="font-metric-display text-metric-display text-on-surface leading-none mb-1">
                  4.2<span className="text-headline-md text-secondary">×</span>
                </div>
                <p className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">
                  Velocity gain after transitioning from ticket-chasing to spec-first asynchronous
                  cycles.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Synchronous Standup Overhead", value: "-68% REDUCED", fill: "32%", color: "bg-primary" },
                  { label: "PR Velocity / First-Review Merge", value: "+94% ACCURACY", fill: "94%", color: "bg-tertiary-fixed" },
                  { label: "Scope Creep in Active Cycle", value: "< 3% VARIANCE", fill: "97%", color: "bg-primary" },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1">
                      <span className="text-on-surface">{bar.label}</span>
                      <span className="text-error font-bold">{bar.value}</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-high border border-border-frame overflow-hidden">
                      <div className={`${bar.color} h-full`} style={{ width: bar.fill }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-l-2 border-primary bg-surface-container-low font-body-md text-body-md text-secondary italic">
                "The engineer's job is not to appease Jira algorithms. Their job is to write
                resilient software against unambiguous blueprints."
              </div>
            </div>
            <div className="pt-8 border-t border-border-frame mt-8">
              <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm uppercase">
                <span>DOCUMENT ID // NP-ESSAY-084</span>
                <span>VERIFIED REAL-WORLD SYSTEM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
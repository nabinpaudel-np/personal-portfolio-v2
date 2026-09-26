import Container from "../layout/Container";

export default function BlogHero() {
  return (
    <section className="w-full border-b border-border-frame">
      <Container className="pt-12 pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-border-frame">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 bg-tertiary-fixed border border-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              FIELD NOTES, FRAMEWORKS & SIGNALS // SEC 05
            </span>
          </div>
          <div className="flex items-center gap-6 font-label-sm text-label-sm text-secondary uppercase">
            <span>INDEX: 24 DISPATCHES</span>
            <span className="hidden sm:inline">FREQ: BI-WEEKLY</span>
            <span className="text-primary font-semibold">FEED: SYNCED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface uppercase tracking-tight leading-none mb-6">
              Things I talk about on the internet.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-3">
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-6">
              Unfiltered writing, practical frameworks, and commentary on technical project
              management, building ventures, education, and figuring shit out in the age of AI.
            </p>
            <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>SYSTEM LOG: NO FLUFF / SPEC-FIRST OBSERVATIONS</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
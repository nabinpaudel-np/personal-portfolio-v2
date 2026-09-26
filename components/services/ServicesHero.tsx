import Container from "../layout/Container";
import Kicker from "../ui/Kicker";

export default function ServicesHero() {
  return (
    <section className="w-full bg-surface">
      <Container className="pt-space-xl lg:pt-space-2xl pb-space-xl lg:pb-space-2xl">
        <div className="flex items-center justify-between pb-space-md">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 bg-tertiary-fixed"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              OFFERING MATRIX · SEC 22–25
            </span>
          </div>
          <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            SYS STATUS: TAKING SELECT Q2 ENGAGEMENTS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter-lg items-end pt-space-md">
          <div className="lg:col-span-8">
            <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight leading-none uppercase">
              Need someone to make the project move?
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              I work with teams that need stronger project leadership, technical coordination, or a
              battle-tested execution partner. No corporate hand-waving—just ruthless clarity and
              institutional velocity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
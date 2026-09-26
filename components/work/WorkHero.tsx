import Container from "../layout/Container";

const INDEX = [
  { num: "01", label: "Webpoint", href: "#webpoint" },
  { num: "02", label: "Trainingpoint", href: "#trainingpoint" },
  { num: "03", label: "Sip Society", href: "#sip-society" },
  { num: "04", label: "Find Me University", href: "#findme-uni" },
];

export default function WorkHero() {
  return (
    <section className="w-full bg-surface">
      <Container className="py-space-xl lg:py-space-2xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-space-lg">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-space-sm">
              <span className="inline-block w-2.5 h-2.5 bg-tertiary-fixed"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                ARCHIVE & OPERATIONAL TIMELINE / 019
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight leading-none mb-space-sm">
              The work I've done.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              The short version is complicated. Here's the longer one.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            <span className="bg-surface-container-high px-3 py-1.5 text-on-surface">
              5+ Years Operational Delivery
            </span>
            <span className="bg-surface-container-high px-3 py-1.5 text-on-surface">
              Distributed Teams (USA · UA · BR · NP)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-6">
          {INDEX.map((i) => (
            <a
              key={i.num}
              href={i.href}
              className="p-3 bg-surface-container-low hover:bg-surface-container transition-none flex items-center justify-between group"
            >
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
                {i.num} / {i.label}
              </span>
              <span className="material-symbols-outlined text-sm text-secondary group-hover:text-primary">
                arrow_downward
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
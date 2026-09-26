import Container from "../layout/Container";

const SERVICES = [
  {
    track: "TRACK · 01",
    trackTone: "primary" as const,
    label: "SERVICE A / EMBEDDED PM",
    title: "Independent Project Lead",
    sub: '"You have the team. I\'ll help run it."',
    fit: "Ideal for startups, high-growth businesses with internal staff, companies with gifted developers but no strong PM, or overloaded founders currently playing project traffic cop.",
    responsibilities: "DIRECT RESPONSIBILITIES",
    items: [
      "Discovery & Requirements",
      "Scope & WBS Hierarchy",
      "Roadmap & Sprint Planning",
      "Stakeholder Management",
      "Agile Delivery & Strict QA",
      "Risk Radar & Retrospectives",
    ],
    accent: "Process Improvement & Knowledge Systems",
    quote: "I don't just manage tasks. I help the team understand what matters, what happens next, and who owns it.",
    cite: "— Nabin Paudel",
    quoteBg: "surface-container-highest",
    cta: "I Need Project Leadership",
    trackValue: "I need help leading my existing team",
  },
  {
    track: "TRACK · 02",
    trackTone: "tertiary" as const,
    label: "SERVICE B / FULL EXECUTION",
    title: "Build With My Team",
    sub: '"You have the problem. We can build the solution."',
    fit: "For projects that require turnkey engineering and execution rather than just coordination. I bring together vetted senior developers, designers, and growth tacticians and oversee end-to-end delivery.",
    responsibilities: "DEPLOYED CAPABILITIES",
    items: [
      "Product & System Discovery",
      "UI/UX & High-Fidelity Design",
      "Full-Stack Web & Mobile",
      "Rigorous QA & Deployment",
      "Technical SEO & Infrastructure",
      "Paid Acquisition & Channels",
    ],
    accent: "Product Launch & Iteration Loops",
    quote: "You work with Nabin. Nabin brings the right people.",
    quoteSub: "No middleman layers. No junior handoffs. You get senior architectural oversight paired with laser-focused execution specialists.",
    quoteBg: "primary",
    cta: "Tell Me What You're Building",
    trackValue: "I want a project built",
  },
];

export default function EngagementModels({ onTrackSelect }: { onTrackSelect?: (v: string) => void }) {
  return (
    <section className="w-full bg-surface py-space-2xl">
      <Container>
        <div className="flex items-center justify-between mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            01 — ENGAGEMENT MODELS
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            STRUCTURAL SPECIFICATIONS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((s) => (
            <article
              key={s.track}
              className="bg-surface-container-low p-8 lg:p-12 flex flex-col justify-between relative group hover:bg-surface-container transition-colors duration-150"
            >
              <div
                className={`absolute top-0 right-0 px-3 py-1.5 font-label-sm text-label-sm tracking-widest uppercase ${
                  s.trackTone === "primary"
                    ? "bg-primary text-on-primary"
                    : "bg-tertiary-fixed text-primary font-bold"
                }`}
              >
                {s.track}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-space-sm text-secondary">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest">
                    {s.label.split(" / ")[0]}
                  </span>
                  <span className="text-xs">/</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest">
                    {s.label.split(" / ")[1]}
                  </span>
                </div>

                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight uppercase mb-space-xs">
                  {s.title}
                </h2>
                <p className="font-label-md text-label-md uppercase tracking-wider text-secondary mb-space-md">
                  {s.sub}
                </p>

                <div className="bg-surface p-5 mb-space-lg">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">
                    TARGET FIT
                  </p>
                  <p className="font-body-md text-body-md text-on-surface leading-normal">{s.fit}</p>
                </div>

                <div className="mb-space-lg">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-4">
                    {s.responsibilities}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {s.items.map((it) => (
                      <div
                        key={it}
                        className="bg-surface-container px-3.5 py-2.5 flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 bg-on-surface"></span>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                          {it}
                        </span>
                      </div>
                    ))}
                    <div className="bg-surface-container px-3.5 py-2.5 flex items-center gap-2.5 md:col-span-2">
                      <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim"></span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                        {s.accent}
                      </span>
                    </div>
                  </div>
                </div>

                {s.quoteBg === "primary" ? (
                  <div className="bg-primary text-on-primary p-6 mb-space-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block mb-2">
                      PERSONAL PRINCIPLE
                    </span>
                    <p className="font-headline-sm text-headline-sm tracking-tight text-on-primary uppercase">
                      {s.quote}
                    </p>
                    <p className="font-body-md text-body-md text-secondary-fixed mt-2">{s.quoteSub}</p>
                  </div>
                ) : (
                  <blockquote className="bg-surface-container-highest p-6 mb-space-xl">
                    <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                      {s.quote}
                    </p>
                    <cite className="block mt-3 font-label-sm text-label-sm uppercase not-italic text-secondary tracking-widest">
                      {s.cite}
                    </cite>
                  </blockquote>
                )}
              </div>

              <div>
                <a
                  href="#inquiry-station"
                  onClick={(e) => {
                    if (onTrackSelect) {
                      e.preventDefault();
                      onTrackSelect(s.trackValue);
                    }
                  }}
                  className="inline-flex items-center justify-between w-full bg-primary text-on-primary font-label-md text-label-md uppercase px-6 py-4 hover:bg-tertiary-fixed hover:text-primary transition-none"
                >
                  <span>{s.cta}</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
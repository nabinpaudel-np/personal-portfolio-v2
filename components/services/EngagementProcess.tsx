import Container from "../layout/Container";

const STEPS = [
  {
    num: "01",
    label: "INTAKE",
    title: "Tell me what's happening",
    body: "Fill out the intake terminal below. No polished enterprise documentation needed. Just lay out where you're stuck, what you're shipping, or what's currently burning down.",
    pill: "INPUT: SHORT FORM",
  },
  {
    num: "02",
    label: "TRIAGE",
    title: "Figure out what you actually need",
    body: "Not every issue requires a six-month multi-seat development project. Sometimes it's a focused two-week technical reset; sometimes it's a dedicated project lead to enforce accountability.",
    pill: "FOCUS: HONEST DIAGNOSIS",
  },
  {
    num: "03",
    label: "BLUEPRINT",
    title: "Define the engagement",
    body: "We define clear scope, communication channels, sprint cadences, and milestones. Whether embedded project management, dedicated build team, or hybrid consulting, you know what to expect.",
    pill: "SPEC: CLEAR OWNERSHIP",
  },
  {
    num: "04",
    label: "EXECUTE",
    title: "Get moving",
    body: "Immediate kickoff. Ruthless clarity on who owns what, transparent daily/weekly reporting, and high-tempo execution that keeps leadership informed without micromanagement.",
    pill: "OUTPUT: SHIPPED WORK",
    highlight: true,
  },
];

export default function EngagementProcess() {
  return (
    <section className="w-full bg-surface py-space-2xl">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
              02 — OPERATIONAL PIPELINE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight uppercase">
              How it works
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md">
            A predictable 4-step framework engineered to remove friction, kill bureaucracy, and get
            code and features into users' hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="bg-surface-container-low p-6 lg:p-8 flex flex-col justify-between group hover:bg-surface-container transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between mb-space-lg">
                  <span className="font-metric-display text-4xl text-on-surface font-bold">
                    {s.num}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    {s.label}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight mb-space-xs">
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">{s.body}</p>
              </div>
              <div className="pt-space-lg">
                <span
                  className={`font-label-sm text-label-sm uppercase tracking-wider inline-block px-2.5 py-1 ${
                    s.highlight
                      ? "text-primary font-bold bg-tertiary-fixed"
                      : "text-on-surface bg-surface"
                  }`}
                >
                  {s.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "../layout/Container";

export default function WorkflowDiagram() {
  return (
    <section className="w-full bg-surface-container py-space-xl">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
              PROTOCOL BENCHMARK
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight mb-4">
              Zero bloat. Disciplined velocity.
            </h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Standard software agencies pad headcounts and stretch timelines. My operating rhythm
              centers on lean sprints, direct developer coordination, and clear deliverables
              verified at every step.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface p-6">
              <div className="flex items-center justify-between pb-4 mb-4 bg-surface-container px-4 py-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  SPRINT DISCIPLINE MAP
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-tertiary-fixed-variant">
                  ACTIVE OPERATING SYSTEM
                </span>
              </div>

              <svg
                className="w-full h-auto text-on-surface"
                fill="none"
                viewBox="0 0 680 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#faf9f5" height="90" stroke="#1b1c1a" strokeWidth="1.5" width="130" x="10" y="20" />
                <text
                  fill="#1b1c1a"
                  fontFamily="Space Grotesk"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  x="75"
                  y="55"
                >
                  01. DECONSTRUCT
                </text>
                <text
                  fill="#5e5e5e"
                  fontFamily="Geist"
                  fontSize="10"
                  textAnchor="middle"
                  x="75"
                  y="75"
                >
                  Scope &amp; True Bottlenecks
                </text>
                <line stroke="#1b1c1a" strokeDasharray="2 2" strokeWidth="1.5" x1="140" x2="180" y1="65" y2="65" />
                <rect fill="#faf9f5" height="90" stroke="#1b1c1a" strokeWidth="1.5" width="130" x="180" y="20" />
                <text
                  fill="#1b1c1a"
                  fontFamily="Space Grotesk"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  x="245"
                  y="55"
                >
                  02. ARCHITECT
                </text>
                <text
                  fill="#5e5e5e"
                  fontFamily="Geist"
                  fontSize="10"
                  textAnchor="middle"
                  x="245"
                  y="75"
                >
                  WBS &amp; Team Alignment
                </text>
                <line stroke="#1b1c1a" strokeDasharray="2 2" strokeWidth="1.5" x1="310" x2="350" y1="65" y2="65" />
                <rect fill="#faf9f5" height="90" stroke="#1b1c1a" strokeWidth="1.5" width="130" x="350" y="20" />
                <text
                  fill="#1b1c1a"
                  fontFamily="Space Grotesk"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  x="415"
                  y="55"
                >
                  03. SHIP CADENCE
                </text>
                <text
                  fill="#5e5e5e"
                  fontFamily="Geist"
                  fontSize="10"
                  textAnchor="middle"
                  x="415"
                  y="75"
                >
                  Daily QA &amp; Rapid Cycles
                </text>
                <line stroke="#1b1c1a" strokeDasharray="2 2" strokeWidth="1.5" x1="480" x2="520" y1="65" y2="65" />
                <rect fill="#1b1c1a" height="90" width="150" x="520" y="20" />
                <text
                  fill="#b1f735"
                  fontFamily="Space Grotesk"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  x="595"
                  y="55"
                >
                  04. VALIDATED OUTCOME
                </text>
                <text
                  fill="#ffffff"
                  fontFamily="Geist"
                  fontSize="10"
                  textAnchor="middle"
                  x="595"
                  y="75"
                >
                  Live Software in Production
                </text>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
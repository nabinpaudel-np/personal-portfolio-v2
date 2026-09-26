import Container from "../layout/Container";

const METRICS = [
  { value: "02", label: "Core Operating Tracks" },
  { value: "04", label: "Countries Distributed" },
  { value: "100%", label: "Direct Nabin Ownership" },
  { value: "<48h", label: "Triage & Mobilization", accent: true },
];

export default function MetricsRibbon() {
  return (
    <section className="w-full bg-surface-container-high py-space-lg">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {METRICS.map((m) => (
            <div key={m.label}>
              <span
                className={`font-metric-display text-metric-display block leading-none ${
                  m.accent ? "text-tertiary" : "text-on-surface"
                }`}
              >
                {m.value}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mt-2">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
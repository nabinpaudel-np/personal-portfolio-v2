import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import MetricCard from "../ui/MetricCard";

const METRICS = [
  { kicker: "METRIC_01", indicator: "primary" as const, value: "5+", description: "Years in Project & Product Management" },
  { kicker: "METRIC_02", indicator: "tertiary" as const, value: "Intern → Dept Head", description: "Progressed from PM intern into PM department leadership", variant: "headline" as const },
  { kicker: "METRIC_03", indicator: "primary" as const, value: "4", description: "Countries across distributed teams (NP, US, UA, BR)" },
  { kicker: "METRIC_04", indicator: "primary" as const, value: "4", description: "Software PM internship batches trained & placed" },
  { kicker: "METRIC_05", indicator: "primary" as const, value: "3", description: "Commercial Project Management cohorts taught" },
  { kicker: "METRIC_06", indicator: "tertiary" as const, value: "Multiple", description: "Ventures Built: Sip Society, Trainingpoint, Find Me University", variant: "headline" as const },
];

export default function Receipts() {
  return (
    <section className="receipts-section relative w-full border-b border-border-frame bg-surface-container-lowest">
      <Container className="pt-space-2xl">
        <SectionHeader
          kicker="EVIDENCE · VERIFIED METRICS"
          title="The receipts."
          lede="A career that started with a Project Management internship and turned into cross-border technical leadership, venture building, and education."
        />
      </Container>

      <div className="receipts-sticky sticky top-0 min-h-screen flex items-center">
        <Container className="py-space-2xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-frame">
            {METRICS.map((m) => (
              <div key={m.kicker} className="relative">
                <MetricCard {...m} />
                <div
                  className="receipts-trace absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

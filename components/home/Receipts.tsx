"use client";

import { useLayoutEffect, useRef } from "react";
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
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const sticky = stickyRef.current;
      if (!sticky) return;

      const stickyRect = sticky.getBoundingClientRect();
      const stickyHeight = sticky.offsetHeight;
      const viewportHeight = window.innerHeight;

      const stickyRange =
        stickyHeight - viewportHeight > 0
          ? stickyHeight - viewportHeight
          : 0;

      const progress =
        stickyRange > 0
          ? Math.max(0, Math.min(1, -stickyRect.top / stickyRange))
          : 0;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.setProperty("--trace-deg", `${progress * 360}deg`);
      });
    };

    requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full border-b border-border-frame bg-surface-container-lowest min-h-[200vh]">
      <Container className="pt-space-2xl">
        <SectionHeader
          kicker="EVIDENCE · VERIFIED METRICS"
          title="The receipts."
          lede="A career that started with a Project Management internship and turned into cross-border technical leadership, venture building, and education."
        />
      </Container>

      <div
        ref={stickyRef}
        className="sticky top-0 min-h-screen flex items-center"
      >
        <Container className="py-space-2xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-frame">
            {METRICS.map((m, i) => (
              <div
                key={m.kicker}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="relative"
                style={{ "--trace-deg": "0deg" } as React.CSSProperties}
              >
                <MetricCard {...m} />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #b1f735 0deg, #b1f735 var(--trace-deg), transparent var(--trace-deg), transparent 360deg)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
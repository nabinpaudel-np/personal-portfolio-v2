import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import MetricsRibbon from "@/components/services/MetricsRibbon";
import ServicesShell from "@/components/services/ServicesShell";
import WorkflowDiagram from "@/components/services/WorkflowDiagram";
import EngagementProcess from "@/components/services/EngagementProcess";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two engagement tracks: embedded PM leadership for teams you already have, or full execution with a vetted crew. Triage typically returns within 24 hours.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-surface">
      <ServicesHero />
      <MetricsRibbon />
      <ServicesShell />
      <WorkflowDiagram />
      <EngagementProcess />
    </main>
  );
}

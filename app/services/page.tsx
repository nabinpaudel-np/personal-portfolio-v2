import ServicesHero from "@/components/services/ServicesHero";
import MetricsRibbon from "@/components/services/MetricsRibbon";
import ServicesShell from "@/components/services/ServicesShell";
import WorkflowDiagram from "@/components/services/WorkflowDiagram";
import EngagementProcess from "@/components/services/EngagementProcess";

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
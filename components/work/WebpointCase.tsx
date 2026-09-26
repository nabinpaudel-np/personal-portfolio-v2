import Image from "next/image";
import CaseStudyEntry from "./CaseStudyEntry";

export default function WebpointCase() {
  return (
    <CaseStudyEntry
      id="webpoint"
      entry="ENTRY 01"
      category="SYSTEMS LEADERSHIP"
      scope="INTERNATIONAL SOFTWARE"
      bg="surface-low"
      client="Webpoint Solutions LLC"
      role="Project Management Intern → Project Manager → Senior PM & Department Lead"
      summary="I joined as a Project Management intern and progressively moved into project management leadership, ultimately orchestrating complex multi-zone software development, stakeholder negotiations, and the operational standards that governed the engineering org."
      mandate="Turning chaotic requirements from international clients into predictable, institutional-grade sprint shipments across distributed engineering squads."
      trajectory={[
        { phase: "Phase I", label: "PM Intern (Scrum/Jira/QA)" },
        { phase: "Phase II", label: "Project Manager (Direct Delivery)" },
        { phase: "Phase III", label: "Senior PM & Dept Leadership", highlight: true },
      ]}
      metrics={[
        { value: "04", label: "Nations Represented", sub: "USA · UA · BR · NP" },
        { value: "100%", label: "SOP Governance", sub: "Built PM Framework" },
        { value: "30+", label: "Engineers Led", sub: "Cross-functional" },
        { value: "12+", label: "SOWs Architected", sub: "Pre-sales Discovery" },
      ]}
    >
      <div className="relative w-full h-80 bg-surface overflow-hidden">
        <Image
          alt="Monochrome candid photo of a technical project manager leading a sprint planning whiteboard session with distributed engineering diagrams, system architecture wireframes, and JIRA board metrics"
          className="object-cover grayscale contrast-125"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDevfJmAOP76OescryMM-dl1dWA3FOvWCsIMfBSLx4DaquubNErvPy-t9enIpcov6kmuqlHhL7rZS1fPr0hneCo4jvEAk7THFHRtV-bgwuUr5t2MK2x_SdWAW3ge7Jm64YkTPrMl8UviNfXZtGJ9CjY7U_4wqeRHwmQNFrSxKG9OB0_TGSwuB4J3fUK3ZNNVCGUMVZiqd-ATjXWcyeV6cW4Gzvn1y-aLzjvH6Cl9xijN9im95mTe6d_mg"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute bottom-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1.5 uppercase tracking-widest z-10">
          Distributed Sprint Operations
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-surface">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            01 / Scope & Pre-Sales
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
            Discovery & SOW Architecture
          </h3>
          <p className="font-body-md text-body-md text-secondary">
            Conducted deep-dive technical discovery with US client leadership. Framed precise
            Statements of Work, calculated technical capacity buffers, and prevented scope creep
            before development commenced.
          </p>
        </div>
        <div className="p-6 bg-surface">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
            02 / People & Standards
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
            SOPs & PM Onboarding
          </h3>
          <p className="font-body-md text-body-md text-secondary">
            Designed the organizational Project Management playbook. Standardized Jira cadences,
            sprint reporting rituals, asynchronous updates across contrasting timezones, and ran PM
            intern onboarding.
          </p>
        </div>
      </div>
    </CaseStudyEntry>
  );
}
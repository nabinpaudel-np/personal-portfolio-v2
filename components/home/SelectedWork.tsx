import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const PROJECTS = [
  {
    cat: "ENTERPRISE SOFTWARE DELIVERY",
    title: "Webpoint Solutions",
    sub: "From PM Intern to Leading Software Delivery across US, Ukraine, and Nepal.",
    meta: [
      { label: "ROLE:", value: "PM Leadership" },
      { label: "FOOTPRINT:", value: "USA · UA · NP" },
      { label: "SCOPE:", value: "Distributed Eng · QA" },
    ],
    obstacle:
      "Complex, multi-time-zone technical deliverables facing communication drift and irregular delivery cadences across distributed squads.",
    resolution:
      "Built standardized Agile sprint ceremonies, streamlined pre-sales scoping SOPs, and stabilized code releases with zero client churn.",
    tag: "#ENTERPRISE #DELIVERY",
  },
  {
    cat: "EDTECH VENTURE BUILDING",
    title: "Trainingpoint",
    sub: "Co-founding, scaling, and operating an education business from zero.",
    meta: [
      { label: "ROLE:", value: "Co-founder & Operator" },
      { label: "FUNCTIONS:", value: "Mktg · Ops · Academic" },
      { label: "STUDENTS:", value: "Multi-Cohort Trained" },
    ],
    obstacle:
      "Traditional university IT education left students stranded with no practical understanding of sprint cycles, Git workflows, or PM systems.",
    resolution:
      "Co-founded and scaled an institution offering industry-grade bootcamps, training multiple cohorts, and building direct hiring pipelines into tech companies.",
    tag: "#VENTURE #EDTECH #OPERATIONS",
  },
  {
    cat: "PHYSICAL SPACES & HOSPITALITY",
    title: "Sip Society",
    sub: "Designing and launching a modern coworking café hub in Nepal.",
    meta: [
      { label: "ROLE:", value: "Founder / Builder" },
      { label: "NATURE:", value: "Brick & Mortar + Culture" },
      { label: "STATUS:", value: "Operational & Scaling" },
    ],
    obstacle:
      "Local remote workers and creators lacked high-reliability infrastructure: zero power drops, fast fiber, ergonomic seating, and high-standard coffee.",
    resolution:
      "Turned raw physical real estate into a premier community workstation hub with robust operations, inventory management, and cultural programming.",
    tag: "#ENTREPRENEURSHIP #HOSPITALITY",
  },
];

export default function SelectedWork() {
  return (
    <section className="w-full border-b border-border-frame">
      <Container className="py-space-2xl">
        <SectionHeader
          kicker="CASE FILES"
          title="I've done this before."
          cta={{ href: "/case-studies", label: "View All Case Studies" }}
        />

        <div className="space-y-8">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="border border-border-frame bg-surface p-8 lg:p-10 hover:border-primary transition-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
                    {p.cat}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary mb-6">{p.sub}</p>
                  <div className="space-y-2 border-t border-border-frame pt-4 font-label-sm text-label-sm uppercase">
                    {p.meta.map((m) => (
                      <div key={m.label} className="flex justify-between">
                        <span className="text-secondary">{m.label}</span>
                        <span className="font-semibold text-on-surface">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border-frame pt-6 lg:pt-0 lg:pl-8 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase text-secondary block mb-1">
                        THE OBSTACLE
                      </span>
                      <p className="font-body-md text-body-md text-on-surface">{p.obstacle}</p>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase text-secondary block mb-1">
                        THE RESOLUTION
                      </span>
                      <p className="font-body-md text-body-md text-on-surface">{p.resolution}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border-frame">
                    <span className="font-label-sm text-label-sm uppercase text-secondary">TAG: {p.tag}</span>
                    <a
                      href="/case-studies"
                      className="font-label-md text-label-md uppercase text-primary font-bold hover:bg-tertiary-fixed px-1 transition-none"
                    >
                      Read Case Study →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
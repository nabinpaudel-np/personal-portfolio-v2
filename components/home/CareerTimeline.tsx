import Container from "../layout/Container";
import Kicker from "../ui/Kicker";

const MILESTONES = [
  { id: "01 / GENESIS", title: "PM Intern", org: "Webpoint Solutions", body: "Learned sprint realities and client realities from the floor up.", present: false },
  { id: "02 / EXECUTION", title: "Project Manager", org: "International Client Accounts", body: "Owned deliverables for US startups and enterprise partners.", present: false },
  { id: "03 / AUTHORITY", title: "PM Leadership", org: "Department Lead", body: "Built standard SOPs, mentored PMs, and structured company delivery.", present: false },
  { id: "04 / FOUNDER", title: "Co-founder", org: "Trainingpoint", body: "Ran Marketing, Sales, Curriculum, and taught PM to aspiring tech talent.", present: false },
  { id: "05 / INDEPENDENT", title: "Builder", org: "Sip Society & EdTech", body: "Built physical infrastructure, AI workflows, and content platforms.", present: false },
  { id: "06 / PRESENT", title: "Today", org: "TPM & Builder", body: "Partnering with global founders to ship clean software and lead teams.", present: true },
];

export default function CareerTimeline() {
  return (
    <section className="w-full border-b border-border-frame bg-surface-container-low">
      <Container className="py-space-2xl">
        <div className="max-w-2xl mb-space-xl">
          <Kicker className="block mb-space-xs">TRAJECTORY</Kicker>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface uppercase tracking-tight">
            How I got here.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border border-border-frame bg-surface">
          {MILESTONES.map((m) => (
            <div
              key={m.id}
              className={`p-6 flex flex-col justify-between ${
                m.present ? "bg-surface-container-high" : ""
              } border-border-frame [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r`}
            >
              <div>
                <span
                  className={`font-label-sm text-label-sm uppercase block mb-2 ${
                    m.present ? "text-primary font-bold" : "text-secondary"
                  }`}
                >
                  {m.id}
                </span>
                <h4 className="font-label-md text-label-md uppercase text-on-surface font-bold mb-1">
                  {m.title}
                </h4>
                <p
                  className={`font-body-md text-body-md text-sm ${
                    m.present ? "text-on-surface font-semibold" : "text-secondary"
                  }`}
                >
                  {m.org}
                </p>
              </div>
              <div
                className={`pt-6 font-label-sm text-label-sm ${
                  m.present ? "text-primary font-semibold" : "text-secondary"
                }`}
              >
                {m.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="/about"
            className="font-label-md text-label-md uppercase text-primary underline underline-offset-4 hover:bg-tertiary-fixed transition-none"
          >
            Read Full Chronology in About →
          </a>
        </div>
      </Container>
    </section>
  );
}
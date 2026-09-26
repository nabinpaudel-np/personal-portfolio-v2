import Container from "../layout/Container";
import Kicker from "../ui/Kicker";

const ITEMS = [
  {
    metric: "04",
    sub: "FIELD EXECUTION",
    title: "Internship Batches Trained",
    body: "Designed real-world training tracks. Took candidates with zero commercial experience and coached them into functional software delivery professionals.",
    foot: "Outcome: Industry Placement",
  },
  {
    metric: "03",
    sub: "CURRICULUM INSTRUCTOR",
    title: "PM Cohorts at Trainingpoint",
    body: "Taught end-to-end agile methodology, scope negotiation, pre-sales SOW preparation, and stakeholder communications to aspiring product leaders.",
    foot: "Platform: Trainingpoint Ed",
  },
  {
    metric: "02",
    sub: "ACCREDITED EDUCATION",
    title: "Pearson UK-Aligned Cohorts",
    body: "Delivered rigorous project management instruction aligned with Pearson UK standards at Kingsway Academy, bridging formal academic criteria with daily software execution.",
    foot: "Institution: Kingsway Academy",
  },
  {
    metric: "∞",
    sub: "ONE-ON-ONE GUIDANCE",
    title: "Early Career Mentoring",
    body: "Ongoing tactical support for junior PMs, QA engineers, and founders navigating their first major product deployments or career pivots.",
    foot: "Mode: Asynchronous & Tactical",
    icon: "diversity_3",
  },
];

export default function TeachingMentoring() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl">
      <Container>
        <div className="flex items-center gap-3 mb-space-sm">
          <span className="inline-block w-2.5 h-2.5 bg-primary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            SECTION 20 · HUMAN CAPITAL
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight leading-none mb-space-md max-w-4xl">
          I've spent a lot of time helping other people get started.
        </h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-3xl mb-space-xl">
          Theoretical PM education is broken. I believe in taking raw talent, putting them directly
          in front of Jira backlogs, complex client expectations, and practical engineering dynamics
          so they produce impact on Day 1.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((it) => (
            <div key={it.title} className="bg-surface p-6 flex flex-col justify-between">
              <div>
                {it.icon ? (
                  <div className="h-[72px] flex items-center">
                    <span className="material-symbols-outlined text-5xl text-primary">
                      {it.icon}
                    </span>
                  </div>
                ) : (
                  <span className="font-metric-display text-metric-display font-bold text-primary block leading-none">
                    {it.metric}
                  </span>
                )}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mt-3 mb-2">
                  {it.sub}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  {it.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary">{it.body}</p>
              </div>
              <Kicker className="pt-6">{it.foot}</Kicker>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
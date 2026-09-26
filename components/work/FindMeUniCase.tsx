import Container from "../layout/Container";

const POINTS = [
  "Comprehensive University Data Architecture",
  "Curated Matching Logic & Program Verification",
  "Community-Driven Advice Engine",
];

const LAYERS = [
  {
    label: "LAYER 01",
    title: "Data Harvest",
    body: "Structured global institution records, accreditation checks, fee matrices.",
  },
  {
    label: "LAYER 02",
    title: "Matching Matrix",
    body: "Prerequisite matching algorithm filtering GPA, budget, and test criteria.",
  },
  {
    label: "LAYER 03",
    title: "Student Node",
    body: "Actionable application checklists and peer guidance channels.",
  },
];

export default function FindMeUniCase() {
  return (
    <section className="w-full bg-surface py-space-2xl" id="findme-uni">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2.5 py-1 uppercase">
              ENTRY 04
            </span>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              PRODUCT & PLATFORM
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
            GLOBAL EDTECH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary block mb-2">
                Find Me University
              </span>
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight mb-space-md">
                Co-founder / Builder
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                An EdTech product engineered to dismantle the high friction and misinformation
                students face when evaluating overseas education. Led product roadmapping, data
                schema design for international university catalogues, and student community
                onboarding.
              </p>

              <div className="space-y-3 font-label-md text-label-md uppercase mb-8">
                {POINTS.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    <span className="text-on-surface">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-surface-container">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">
                PRODUCT STATUS
              </span>
              <span className="font-body-md text-body-md text-primary font-semibold">
                Active Development & Pilot Cohort Evaluation
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-low p-8">
            <div className="flex items-center justify-between pb-6 mb-6">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                ARCHITECTURAL SCHEMATIC
              </span>
              <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2 py-0.5 uppercase">
                PRODUCT V1.2
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {LAYERS.map((l) => (
                <div key={l.label} className="bg-surface p-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">
                    {l.label}
                  </span>
                  <div className="font-label-md text-label-md uppercase text-primary font-bold">
                    {l.title}
                  </div>
                  <p className="text-xs text-secondary mt-2">{l.body}</p>
                </div>
              ))}
            </div>

            <div className="w-full h-48 bg-surface p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-tertiary-fixed"></span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase">
                    Interface Preview / Logic Map
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  DATA: ACCREDITED
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="h-8 bg-surface-container"></div>
                <div className="h-8 bg-surface-container col-span-2"></div>
                <div className="h-8 bg-tertiary-fixed/30"></div>
              </div>
              <div className="flex items-center justify-between text-xs text-secondary">
                <span>Dynamic program matching</span>
                <span>Direct student query routing</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
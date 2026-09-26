import Image from "next/image";
import Container from "../layout/Container";

const PILLARS = [
  {
    num: "Pillar 01",
    icon: "campaign",
    title: "Marketing & Paid Acquisition",
    body: "Designed end-to-end user acquisition funnels across Meta Ads, Google search campaigns, localized organic content, and conversion-focused landing pages.",
    foot: "Channels: Meta Ads · SEO · Content",
  },
  {
    num: "Pillar 02",
    icon: "payments",
    title: "Sales & Admissions",
    body: "Managed the full conversion pipeline from raw lead qualification to student intake interviews, corporate B2B sponsorship packages, and student enrollments.",
    foot: "Focus: Lead Qual · Conversion Pipeline",
  },
  {
    num: "Pillar 03",
    icon: "school",
    title: "Academic Curriculum & Teaching",
    body: "Wrote practical, zero-fluff Project Management courseware. Personally instructed 3 cohorts, transforming beginners into deployment-capable tech operators.",
    foot: "Output: 3 PM Cohorts Graduated",
  },
  {
    num: "Pillar 04",
    icon: "precision_manufacturing",
    title: "Day-to-day Operations",
    body: "Handled vendor leases, instructor scheduling, hardware procurement, cash-flow balance, and operational contingency management.",
    foot: "Engine: Unit Economics · P&L Health",
  },
];

export default function TrainingpointCase() {
  return (
    <section className="w-full bg-surface py-space-2xl" id="trainingpoint">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2.5 py-1 uppercase">
              ENTRY 02
            </span>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              BUSINESS VENTURE
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
            EDUCATION & UPSKILLING
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary block mb-2">
              Trainingpoint
            </span>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight mb-space-md">
              Co-founder & Operator
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Built and operated an education and technology training enterprise from ground zero.
              Rather than staying insulated within one functional box, the role required
              architecting the commercial engine, designing curricula, closing cohorts, and managing
              day-to-day unit economics.
            </p>
            <div className="p-6 bg-surface-container-low mb-6">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
                CO-FOUNDER PRINCIPLE
              </span>
              <p className="font-body-md text-body-md text-primary">
                "When you build a business, you don't pick one task. You build the course, write
                the ad copy, sell the seats, setup the desks, and deliver the lectures."
              </p>
            </div>
            <div className="w-full h-48 bg-surface-container overflow-hidden relative">
              <Image
                alt="Editorial close-up of dynamic classroom discussion led by instructor with notes, architectural diagram on screen"
                className="object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjDRCw6g4AuQUbUpYuCkK4K3nXnY8vw3h2HwTmHFk5h4tzSXaSo5z_oHUkZkkgv8NJyA2wlpkW8AxFrdN2_4QHDI2Bt-X67DJ5rfJOdT_WrLJyhKg1XsZ5nmssKAWJXBFVrA0HnBhf7B9ibJEgZ1xsHJ49_LU6CP75EuLPgzlIu7cw13DVK6Ser8TrvTFfiSWtfQ0Ontn7RAUGs487YE6DcJAGTMJ_MJOJf2aBd9f46kkQOm7foZGD1g"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div
                key={p.num}
                className="p-6 bg-surface-container-low flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2 py-0.5 uppercase">
                      {p.num}
                    </span>
                    <span className="material-symbols-outlined text-secondary">{p.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                    {p.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary">{p.body}</p>
                </div>
                <div className="pt-6 font-label-sm text-label-sm text-secondary uppercase">
                  {p.foot}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
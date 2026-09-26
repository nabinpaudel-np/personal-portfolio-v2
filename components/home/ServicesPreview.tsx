import Container from "../layout/Container";
import Kicker from "../ui/Kicker";

const SERVICES = [
  {
    id: "MODEL_01 — EMBEDDED",
    badge: { label: "FOR TEAMS WITH DEV", tone: "dark" as const },
    title: "Lead Your Team",
    sub: "Independent Project Management",
    body: "You already have developers, designers, or marketers. You need someone to own the product roadmap, remove friction, manage scope, and make the whole engine move.",
    items: [
      "End-to-end sprint planning, backlog grooming, and WBS mapping",
      "Stakeholder management and executive status reporting",
      "Risk isolation, QA gating, and cross-functional synchronization",
    ],
    cta: { label: "I Need Project Leadership", href: "/services" },
    primary: true,
  },
  {
    id: "MODEL_02 — FULL-STACK",
    badge: { label: "FOR FOUNDERS & VISION", tone: "tertiary" as const },
    title: "Build It With Me",
    sub: "Managed Development & Growth",
    body: "You have the idea and vision. You don't have the right execution team. I assemble and lead the specialists (designers, full-stack engineers, growth marketers) to ship your build.",
    items: [
      "Technical discovery, architecture selection, and wireframing",
      "Vetted developers and designers handpicked specifically for your stack",
      "Single point of accountability: You talk to me, I deliver the project",
    ],
    cta: { label: "I Have a Project", href: "/services" },
    primary: false,
  },
];

export default function ServicesPreview() {
  return (
    <section className="w-full border-b border-border-frame bg-surface-container-low">
      <Container className="py-space-2xl">
        <div className="mb-space-xl">
          <Kicker className="block mb-space-xs">ENGAGEMENT MODELS</Kicker>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface uppercase tracking-tight leading-none mb-space-sm">
            Got a project? Give me the problem.
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Sometimes you don't need another generic employee. You need someone experienced to
            walk into the mess, understand what's happening, and get everyone moving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="border-2 border-primary bg-surface p-8 lg:p-12 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-space-sm border-b border-border-frame mb-space-md">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                    {s.id}
                  </span>
                  <span
                    className={`inline-block px-2 py-0.5 font-label-sm text-label-sm uppercase ${
                      s.badge.tone === "tertiary"
                        ? "bg-tertiary-fixed text-primary"
                        : "bg-primary text-surface"
                    }`}
                  >
                    {s.badge.label}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="font-label-md text-label-md uppercase text-secondary mb-space-md">
                  {s.sub}
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">{s.body}</p>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface border-t border-border-frame pt-space-md mb-space-lg">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={s.cta.href}
                className={`inline-flex items-center justify-between w-full font-label-md text-label-md uppercase px-6 py-4 border border-primary transition-none ${
                  s.primary
                    ? "bg-primary text-surface hover:bg-tertiary-fixed hover:text-primary"
                    : "bg-surface text-primary hover:bg-primary hover:text-surface"
                }`}
              >
                <span>{s.cta.label}</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
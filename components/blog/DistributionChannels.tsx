import Container from "../layout/Container";

const CHANNELS = [
  {
    name: "LINKEDIN",
    icon: "work",
    iconColor: "text-cobalt-alt",
    freq: "DAILY TRANSMISSIONS",
    title: "Daily Technical Execution & Hot Takes",
    body: "Daily technical execution breakdown, PM frameworks, client management tactics, and hot takes on agency dynamics and sprint metrics.",
    audience: "AUDIENCE: 4.8K+ TECH BUILDERS & OPERATORS",
    cta: "FOLLOW ON LINKEDIN",
    href: "https://linkedin.com",
  },
  {
    name: "YOUTUBE / SHORTS",
    icon: "smart_display",
    iconColor: "text-error",
    freq: "WEEKLY DRILLS",
    title: "Practical Teardowns & Career Coaching",
    body: "Practical teardowns of project architecture, battle-tested Notion setups, system diagrams, and candid student career coaching sessions.",
    audience: "CONTENT: ARCHITECTURE SCREENCASTS & INTERVIEWS",
    cta: "WATCH ON YOUTUBE",
    href: "https://youtube.com",
  },
  {
    name: "INSTAGRAM",
    icon: "photo_camera",
    iconColor: "text-on-surface",
    freq: "RAW & DISPATCH",
    title: "Builder Notes & Valley Cycling",
    body: "Behind the scenes at Sip Society coworking space, high-altitude cycling routes around the Kathmandu valley, and day-in-the-life building drills.",
    audience: "FOCUS: SIP SOCIETY OPS + ENDURANCE SPORT",
    cta: "DISPATCHES ON INSTA",
    href: "https://instagram.com",
  },
];

export default function DistributionChannels() {
  return (
    <section className="w-full border-b border-border-frame bg-surface-container-low">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12 border-b border-border-frame">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">
              DISTRIBUTION CHANNELS
            </span>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface uppercase tracking-tight">
              Where Else You Can Find Me
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md">
            Continuous dispatches across systems architecture, weekly video tutorials, and
            behind-the-scenes operational building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-frame bg-surface">
          {CHANNELS.map((c, i) => (
            <div
              key={c.name}
              className={`p-8 lg:p-10 flex flex-col justify-between ${
                i < CHANNELS.length - 1
                  ? "border-b md:border-b-0 md:border-r border-border-frame"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-frame">
                  <span className="font-label-md text-label-md uppercase tracking-wider font-bold text-on-surface flex items-center gap-2">
                    <span className={`material-symbols-outlined text-[20px] ${c.iconColor}`}>
                      {c.icon}
                    </span>
                    {c.name}
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase">{c.freq}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{c.title}</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-8">{c.body}</p>
              </div>
              <div>
                <div className="p-4 bg-surface-container-low border border-border-frame font-label-sm text-label-sm uppercase text-secondary mb-6">
                  {c.audience}
                </div>
                <a
                  href={c.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase hover:bg-tertiary-fixed hover:text-primary transition-none"
                >
                  <span>{c.cta}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
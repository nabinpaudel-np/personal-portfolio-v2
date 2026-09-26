import Image from "next/image";
import Container from "../layout/Container";

const NOTES = [
  {
    label: "PHYSICAL OPERATIONS & DESIGN",
    body: "Oversaw architectural space planning, high-density power grids, acoustic management, and ergonomic furniture layouts engineered specifically for focused technical work.",
  },
  {
    label: "BRAND POSITIONING & CULTURE",
    body: "Refused the generic restaurant mold. Positioned Sip Society as Kathmandu's premier node for founders, tech talent, and creative freelancers who value speed, espresso, and silence.",
  },
  {
    label: "SELF-SUSTAINING BUSINESS UNIT",
    body: "Architected operating manuals (SOPs), supply chain sourcing, staff recruitment, and POS inventory frameworks allowing the space to function autonomously.",
  },
];

export default function SipSocietyCase() {
  return (
    <section className="w-full bg-surface-container py-space-2xl" id="sip-society">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2.5 py-1 uppercase">
              ENTRY 03
            </span>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              PHYSICAL VENTURE
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
            COWORKING & HOSPITALITY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary block mb-2">
              Sip Society · Kathmandu
            </span>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight mb-space-md">
              Founder / Builder / Operator
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              A physical coworking café and creative sanctuary built for builders, designers, remote
              engineers, and operators in Nepal. I built this venture from an empty shell into a
              profitable, self-sustaining physical destination.
            </p>

            <div className="space-y-4 mb-8">
              {NOTES.map((n) => (
                <div key={n.label} className="bg-surface p-5">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">
                    {n.label}
                  </span>
                  <p className="font-body-md text-body-md text-primary">{n.body}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-tertiary-fixed"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                Active & Profitable Node
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="w-full h-80 bg-surface overflow-hidden relative">
              <Image
                alt="Modern architectural photography of a bustling coworking café interior with warm concrete, natural oak tables, specialty coffee brewing gear, minimalist lighting"
                className="object-cover grayscale contrast-115"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnfDhAu3q74Xb-Ywc6xhYC2j4rgoznPTKWnUWzySFnAdJCKMbI95ldpJxcMdiWpRUnOL_Th-8wTOPigqeLsDFXxrDtT_6bkVx81iYJvl4mjiDXaxY7Q8eJx3RCspmXWfQHs3hFLVJe-AtGi8Xc3sWcMplVmdOvUkE4NG6P8wxv7fp7AnchSxa-fiQqsz_CLfOJFszQyCIerN7HH3xQBeWVuB02urjVC-8h6IZP4dObPh9yBlmakryRsg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 uppercase z-10">
                Kathmandu Space
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">
                  METRIC
                </span>
                <div className="font-headline-sm text-headline-sm font-bold text-primary">
                  Autonomous
                </div>
                <p className="text-xs text-secondary mt-1">
                  Full delegation framework & daily SOP execution
                </p>
              </div>
              <div className="p-6 bg-surface">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">
                  COMMUNITY
                </span>
                <div className="font-headline-sm text-headline-sm font-bold text-primary">
                  Founders Hub
                </div>
                <p className="text-xs text-secondary mt-1">
                  Recurring home for tech & creative operators
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
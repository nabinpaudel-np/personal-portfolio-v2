import Container from "../layout/Container";
import Kicker from "../ui/Kicker";

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary text-surface">
      <Container className="py-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <Kicker className="block mb-space-sm !text-primary-fixed-dim">DISPATCH PROTOCOL</Kicker>
            <h2 className="font-display-hero text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-surface leading-[0.95] mb-space-md">
              Let's make something happen.
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl">
              Have a project that needs leadership? Something you want built? A team that's
              stuck? Or just an interesting problem that needs someone to figure it out?
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-tertiary-fixed text-primary font-label-md text-label-md uppercase px-8 py-5 border border-tertiary-fixed hover:bg-surface hover:text-primary transition-none font-bold text-center"
            >
              Tell Me About It →
            </a>
            <a
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center bg-transparent text-surface font-label-md text-label-md uppercase px-8 py-4 border border-outline hover:bg-surface hover:text-primary transition-none text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
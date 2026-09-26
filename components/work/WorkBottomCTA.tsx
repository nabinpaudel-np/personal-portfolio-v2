import Container from "../layout/Container";

export default function WorkBottomCTA() {
  return (
    <section className="w-full bg-primary text-on-primary py-space-2xl">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2.5 h-2.5 bg-tertiary-fixed"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed">
                DIRECT ENGAGEMENT
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold tracking-tight leading-none text-on-primary mb-4">
              Have a project that needs this kind of leadership?
            </h2>
            <p className="font-body-lg text-body-lg text-inverse-primary max-w-2xl">
              You don't need another employee. You need someone experienced to walk into the mess,
              understand what's happening, align the engineers, and get everything shipped.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-tertiary-fixed text-primary font-label-md text-label-md uppercase px-8 py-4 font-bold tracking-wider hover:bg-on-primary transition-none text-center"
            >
              Let's Talk
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-surface text-primary font-label-md text-label-md uppercase px-8 py-4 font-bold tracking-wider hover:bg-surface-container transition-none text-center"
            >
              Explore Services & Models
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
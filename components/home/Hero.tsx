import Image from "next/image";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="w-full border-b border-border-frame">
      <Container className="pt-space-xl pb-space-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-space-md mb-space-md">
          <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 bg-surface-container-low">
            <span className="inline-block w-2 h-2 bg-tertiary-fixed"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
              Based in Nepal · Working Globally
            </span>
          </div>
          <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary flex items-center gap-6">
            <span>SYS_LOC: 27.7172° N, 85.3240° E</span>
            <span className="hidden sm:inline">ROLE: TECHNICAL PRODUCT MANAGER & COFOUNDER</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 items-start">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="font-display-hero text-[34px] md:text-[84px] uppercase tracking-[-0.01em] text-on-surface leading-[0.95] mb-space-md">
                <span className="block">I build things.</span>
                <span className="block">I lead people.</span>
                <span className="block">
                  I figure <span className="bg-tertiary-fixed text-primary px-2 ml-1 shadow-[0_0_22px_-2px_rgba(177,247,53,0.7)]">shit out.</span>
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-md">
                I'm Nabin — a Technical Project Manager, builder, entrepreneur and educator
                working across technology, business, and raw execution.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-space-sm">
              <a
                href="/work"
                className="inline-flex items-center justify-center bg-primary text-surface font-label-md text-label-md uppercase px-8 py-4 border border-primary hover:bg-tertiary-fixed hover:text-primary transition-none"
              >
                See What I've Built →
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-transparent text-on-surface font-label-md text-label-md uppercase px-8 py-4 border border-primary hover:bg-primary hover:text-surface transition-none"
              >
                Work With Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="group relative bg-surface-container-high border border-border-frame p-2">
              <div className="relative aspect-square w-full overflow-hidden bg-surface-container-highest">
                <Image
                  src="/NabinPaudel.jpg"
                  alt="Nabin Paudel portrait standing in conference hall"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-surface px-2 py-0.5 font-label-sm text-label-sm uppercase tracking-wider z-10">
                  FIG. 01 — NABIN PAUDEL
                </div>
                <h2 className="absolute bottom-6 left-6 right-6 z-10 font-headline-sm text-headline-sm md:text-headline-md uppercase tracking-tight leading-[1.05] text-transparent transition-colors duration-300 [text-stroke:1px_#ffffff] [-webkit-text-stroke:1px_#ffffff] group-hover:[text-stroke:1px_#b1f735] group-hover:[-webkit-text-stroke:1px_#b1f735]">
                  I build things.
                  <br />
                  I lead people.
                  <br />
                  I figure shit out.
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-border-frame font-label-sm text-label-sm uppercase text-secondary">
                <div>
                  <span className="block text-primary font-semibold">POSITION</span>
                  <span>TPM / Operator</span>
                </div>
                <div>
                  <span className="block text-primary font-semibold">DISCIPLINE</span>
                  <span>Systems &amp; Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
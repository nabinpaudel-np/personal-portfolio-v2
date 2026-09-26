import Container from "../layout/Container";

export default function Education() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <Container>
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pb-6 mb-8">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">
              SECTION 21 · CREDENTIALS
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">
              Formal Education
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            SPECIFICATION STANDARD
          </span>
        </div>

        <div className="bg-surface-container-low p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                Pearson UK
              </span>
              <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 uppercase">
                Accredited
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface">
              BTEC Level 3 Extended Diploma in Information Technology (IT)
            </p>
          </div>
          <div className="flex items-center gap-8 md:gap-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
                COMPLETED
              </span>
              <span className="font-label-md text-label-md font-bold text-primary uppercase">
                2023
              </span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
                RESULT
              </span>
              <span className="bg-tertiary-fixed text-primary px-2.5 py-1 font-label-md text-label-md font-bold uppercase inline-block">
                D*DD
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
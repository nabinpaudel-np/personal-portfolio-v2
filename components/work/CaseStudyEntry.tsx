import Container from "../layout/Container";
import { ReactNode } from "react";

export default function CaseStudyEntry({
  id,
  entry,
  category,
  scope,
  bg = "surface",
  client,
  role,
  summary,
  mandate,
  trajectory,
  metrics,
  children,
}: {
  id: string;
  entry: string;
  category: string;
  scope: string;
  bg?: "surface" | "surface-low" | "surface-container";
  client: string;
  role: string;
  summary: string;
  mandate?: string;
  trajectory?: { phase: string; label: string; highlight?: boolean }[];
  metrics?: { value: string; label: string; sub?: string }[];
  children?: ReactNode;
}) {
  const bgClass =
    bg === "surface-low"
      ? "bg-surface-container-low"
      : bg === "surface-container"
        ? "bg-surface-container"
        : "bg-surface";

  return (
    <section className={`w-full ${bgClass} py-space-2xl`} id={id}>
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2.5 py-1 uppercase">
              {entry}
            </span>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              {category}
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
            {scope}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary block mb-2">
                {client}
              </span>
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight mb-space-md">
                {role}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{summary}</p>
              {mandate && (
                <div className="p-4 bg-surface-container mb-8">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">
                    OPERATING MANDATE
                  </span>
                  <p className="font-body-md text-body-md text-primary font-medium">{mandate}</p>
                </div>
              )}
            </div>

            {trajectory && (
              <div className="bg-surface p-6">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">
                  Progression Timeline
                </span>
                <div className="space-y-4 font-label-md text-label-md uppercase">
                  {trajectory.map((t) => (
                    <div key={t.phase} className="flex items-center justify-between pb-2">
                      <span className="text-secondary">{t.phase}</span>
                      <span
                        className={
                          t.highlight
                            ? "bg-tertiary-fixed text-primary px-1.5 py-0.5"
                            : "text-on-surface"
                        }
                      >
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-surface p-6">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-headline-md text-headline-md font-bold text-primary block leading-none">
                      {m.value}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mt-2 block">
                      {m.label}
                    </span>
                    {m.sub && (
                      <span className="text-xs text-secondary mt-1 block">{m.sub}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
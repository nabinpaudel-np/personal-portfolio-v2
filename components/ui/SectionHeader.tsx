import { ReactNode } from "react";
import Kicker from "./Kicker";
import Link from "next/link";

export default function SectionHeader({
  kicker,
  title,
  lede,
  cta,
  align = "left",
  className = "",
}: {
  kicker?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  cta?: { href: string; label: string };
  align?: "left" | "center";
  className?: string;
}) {
  const layoutClass =
    align === "left"
      ? "flex flex-col md:flex-row md:items-end justify-between mb-space-xl border-b border-border-frame pb-space-lg"
      : "max-w-3xl mb-space-2xl";

  return (
    <div className={`${layoutClass} ${className}`}>
      <div>
        {kicker && (
          <Kicker className="block mb-space-xs">{kicker}</Kicker>
        )}
        <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface uppercase tracking-tight leading-none mb-space-sm">
          {title}
        </h2>
        {lede && (
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mt-space-sm">
            {lede}
          </p>
        )}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="font-label-md text-label-md uppercase text-primary underline underline-offset-8 hover:bg-tertiary-fixed transition-none mt-4 md:mt-0 w-fit"
        >
          {cta.label} →
        </Link>
      )}
    </div>
  );
}

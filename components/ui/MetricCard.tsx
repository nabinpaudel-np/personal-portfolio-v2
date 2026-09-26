import { ReactNode } from "react";
import Kicker from "./Kicker";

export default function MetricCard({
  kicker,
  indicator = "primary",
  value,
  description,
  variant = "default",
  className = "",
}: {
  kicker: ReactNode;
  indicator?: "primary" | "tertiary";
  value: ReactNode;
  description: ReactNode;
  variant?: "default" | "headline";
  className?: string;
}) {
  const indicatorClass =
    indicator === "tertiary" ? "bg-tertiary-fixed" : "bg-primary";

  return (
    <div
      className={`p-8 border-r border-b border-border-frame bg-surface hover:bg-surface-container-low transition-none flex flex-col justify-between h-64 ${className}`}
    >
      <div className="flex items-center justify-between">
        <Kicker className="tracking-widest">{kicker}</Kicker>
        <span className={`w-2 h-2 ${indicatorClass}`}></span>
      </div>
      <div>
        <div
          className={
            variant === "headline"
              ? "font-headline-md text-headline-md uppercase text-on-surface leading-tight tracking-tight"
              : "font-metric-display text-metric-display text-on-surface leading-none tracking-tighter"
          }
        >
          {value}
        </div>
        <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

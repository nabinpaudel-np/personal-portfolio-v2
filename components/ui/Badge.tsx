import { ReactNode } from "react";

type Variant = "dark" | "outline" | "surface-low" | "tertiary-fixed";

const variantClass: Record<Variant, string> = {
  dark: "bg-primary text-on-primary",
  outline: "border border-primary text-on-surface",
  "surface-low": "bg-surface-container-low border border-primary text-on-surface",
  "tertiary-fixed": "bg-tertiary-fixed text-primary",
};

export default function Badge({
  children,
  variant = "outline",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`px-2.5 py-1 font-label-sm text-label-sm uppercase tracking-wider ${variantClass[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

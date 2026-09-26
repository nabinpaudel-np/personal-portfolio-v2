import { ReactNode } from "react";

export default function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-label-sm text-label-sm uppercase tracking-widest text-secondary ${className}`}
    >
      {children}
    </span>
  );
}

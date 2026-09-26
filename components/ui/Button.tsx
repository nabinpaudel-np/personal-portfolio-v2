import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "outline";
type Size = "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary border-primary hover:bg-tertiary-fixed hover:text-primary hover:border-primary",
  secondary:
    "bg-surface text-primary border-primary hover:bg-primary hover:text-surface",
  tertiary:
    "bg-tertiary-fixed text-primary border-tertiary-fixed hover:bg-surface hover:text-primary",
  outline:
    "bg-transparent text-surface border-outline hover:bg-surface hover:text-primary",
};

const sizeClass: Record<Size, string> = {
  md: "px-5 py-2.5",
  lg: "px-8 py-4",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  type,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const cls = `inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider border transition-none ${variantClass[variant]} ${sizeClass[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

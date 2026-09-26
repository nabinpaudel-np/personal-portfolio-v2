import { ReactNode } from "react";
import Container from "./Container";

type BgVariant = "surface" | "surface-low" | "surface-container" | "surface-high" | "primary" | "transparent";

export default function SectionShell({
  children,
  bg = "transparent",
  border = true,
  py = "py-space-2xl",
  className = "",
}: {
  children: ReactNode;
  bg?: BgVariant;
  border?: boolean;
  py?: string;
  className?: string;
}) {
  const bgClass: Record<BgVariant, string> = {
    surface: "bg-surface",
    "surface-low": "bg-surface-container-low",
    "surface-container": "bg-surface-container",
    "surface-high": "bg-surface-container-high",
    primary: "bg-primary text-on-primary",
    transparent: "",
  };

  const textOnPrimaryAdjust = bg === "primary" ? "[&_h1]:text-on-primary [&_h2]:text-on-primary [&_h3]:text-on-primary [&_p]:text-primary-fixed-dim [&_span]:text-on-primary" : "";

  return (
    <section
      className={`w-full ${border ? "border-b border-border-frame" : ""} ${bgClass[bg]} ${py} ${className} ${textOnPrimaryAdjust}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

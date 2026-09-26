import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1380px] mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

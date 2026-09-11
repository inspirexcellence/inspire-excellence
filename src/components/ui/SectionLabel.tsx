import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "font-sans text-xs font-medium tracking-[0.15em] uppercase text-coral",
        "section-label",
        className
      )}
    >
      {children}
    </span>
  );
}

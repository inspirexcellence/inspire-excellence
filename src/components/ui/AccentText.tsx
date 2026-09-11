import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccentTextProps {
  children: ReactNode;
  className?: string;
}

export function AccentText({ children, className }: AccentTextProps) {
  return (
    <span className={cn("font-serif italic text-lavender accent-italic", className)}>
      {children}
    </span>
  );
}

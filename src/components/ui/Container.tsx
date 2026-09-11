import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  as?: ElementType;
}

export function Container({ children, className, narrow = false, as: Component = "div" }: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto px-6 sm:px-8 lg:px-12 w-full",
        narrow ? "max-w-4xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </Component>
  );
}

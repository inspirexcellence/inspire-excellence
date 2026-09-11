"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Icon, IconName } from "./Icon";

interface AnimatedCounterProps {
  value: string;
  label: string;
  icon?: IconName;
  className?: string;
}

export function AnimatedCounter({ value, label, icon, className }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("");
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Parse numeric part and suffix
    const match = value.match(/^([\d.,]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericStr = match[1].replace(/,/g, '');
    const target = parseFloat(numericStr);
    const suffix = match[2] || "";

    if (prefersReducedMotion || !isInView) {
      if (!isInView && !prefersReducedMotion) {
         setDisplayValue(`0${suffix}`);
      } else {
         setDisplayValue(value);
      }
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);
      
      // Format number back with commas if needed
      const formattedNum = currentVal.toLocaleString();
      setDisplayValue(`${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn("flex flex-col items-center text-center", className)}>
      {icon && (
        <div className="mb-4 text-coral">
          <Icon name={icon} size={32} />
        </div>
      )}
      <div className="font-serif text-4xl md:text-5xl text-navy">
        {displayValue || value}
      </div>
      <div className="text-xs uppercase tracking-widest text-charcoal-light mt-2 font-sans font-medium">
        {label}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function ScrollIndicator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'hidden lg:flex flex-col items-center absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 select-none pointer-events-none',
        className
      )}
    >
      {/* Top vertical indicator line */}
      <div className="w-[1px] h-16 bg-[#8B72BE]/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#8B72BE] animate-[pulse_2s_ease-in-out_infinite]" />
      </div>

      {/* Vertical Text */}
      <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-charcoal/70 -rotate-90 whitespace-nowrap my-16 origin-center">
        SCROLL TO EXPLORE
      </span>

      {/* Bottom ring indicator */}
      <div className="w-3.5 h-3.5 rounded-full border border-[#8B72BE]/70 flex items-center justify-center">
        <div className="w-1 h-1 rounded-full bg-[#8B72BE]/60" />
      </div>
    </div>
  );
}

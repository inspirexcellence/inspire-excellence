'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ThreePOrbitProps {
  activeNode?: 'people' | 'perspective' | 'process' | null
  className?: string
}

export function ThreePOrbit({ activeNode, className }: ThreePOrbitProps) {
  const isActive = (node: string) => activeNode === node

  return (
    <div className={cn("relative w-[300px] h-[300px] flex items-center justify-center", className)}>
      {/* Orbits */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" className={cn("text-muted-border transition-all duration-500", isActive('people') ? 'stroke-lavender stroke-[1.5px]' : 'stroke-[1px]')} />
        <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" className={cn("text-muted-border transition-all duration-500", isActive('perspective') ? 'stroke-coral stroke-[1.5px]' : 'stroke-[1px]')} />
        <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" className={cn("text-muted-border transition-all duration-500", isActive('process') ? 'stroke-teal stroke-[1.5px]' : 'stroke-[1px]')} />
        
        {/* Connecting Lines */}
        <line x1="150" y1="150" x2="150" y2="50" stroke="currentColor" className={cn("transition-all duration-500", isActive('people') ? 'stroke-lavender opacity-100' : 'stroke-muted-border opacity-30')} />
        <line x1="150" y1="150" x2="63.4" y2="200" stroke="currentColor" className={cn("transition-all duration-500", isActive('perspective') ? 'stroke-coral opacity-100' : 'stroke-muted-border opacity-30')} />
        <line x1="150" y1="150" x2="236.6" y2="200" stroke="currentColor" className={cn("transition-all duration-500", isActive('process') ? 'stroke-teal opacity-100' : 'stroke-muted-border opacity-30')} />
      </svg>

      {/* Center Text */}
      <div className="absolute z-10 flex items-center justify-center w-16 h-16 bg-ivory rounded-full">
        <span className="font-serif text-3xl text-navy">3P</span>
      </div>

      {/* Nodes */}
      <div className={cn("absolute top-[10px] transition-transform duration-500", isActive('people') ? 'translate-y-4' : '')}>
        <div className={cn("w-4 h-4 rounded-full", isActive('people') ? 'bg-lavender scale-150 shadow-[0_0_10px_rgba(139,114,190,0.5)]' : 'bg-muted-border')} />
      </div>
      <div className={cn("absolute bottom-[90px] left-[55px] transition-transform duration-500", isActive('perspective') ? 'translate-x-3 -translate-y-2' : '')}>
        <div className={cn("w-4 h-4 rounded-full", isActive('perspective') ? 'bg-coral scale-150 shadow-[0_0_10px_rgba(224,122,95,0.5)]' : 'bg-muted-border')} />
      </div>
      <div className={cn("absolute bottom-[90px] right-[55px] transition-transform duration-500", isActive('process') ? '-translate-x-3 -translate-y-2' : '')}>
        <div className={cn("w-4 h-4 rounded-full", isActive('process') ? 'bg-teal scale-150 shadow-[0_0_10px_rgba(91,158,158,0.5)]' : 'bg-muted-border')} />
      </div>
      
      {/* Node Labels */}
      <span className={cn("absolute top-[-15px] text-xs font-medium tracking-widest uppercase transition-colors duration-300", isActive('people') ? 'text-lavender' : 'text-charcoal/60')}>People</span>
      <span className={cn("absolute bottom-[65px] left-[10px] text-xs font-medium tracking-widest uppercase transition-colors duration-300", isActive('perspective') ? 'text-coral' : 'text-charcoal/60')}>Perspective</span>
      <span className={cn("absolute bottom-[65px] right-[25px] text-xs font-medium tracking-widest uppercase transition-colors duration-300", isActive('process') ? 'text-teal' : 'text-charcoal/60')}>Process</span>
    </div>
  )
}

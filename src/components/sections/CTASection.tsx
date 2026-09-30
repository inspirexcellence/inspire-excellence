'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;
      if (!containerRef.current) return;

      gsap.to('.cta-bg-shape', {
        rotation: 360,
        duration: 100,
        repeat: -1,
        ease: 'linear',
      });
    };
    initAnimation();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 lg:py-28 bg-[#1A1A40] text-white overflow-hidden">
      {/* Background ambient circular lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
        <div className="cta-bg-shape w-[800px] h-[800px] border border-white/20 rounded-full" />
        <div className="cta-bg-shape w-[600px] h-[600px] border border-white/20 rounded-full absolute" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] leading-[1.15] font-normal">
              What could become possible if you{' '}
              <span className="font-serif italic text-gold font-normal">changed the way</span>{' '}
              you approached the problem?
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 text-left lg:text-right">
            <p className="font-serif italic text-gold text-2xl lg:text-3xl font-normal">
              Let&apos;s explore it together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#FAF7F2] text-[#1A1A40] hover:bg-[#F5EDE4] px-8 py-3.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all duration-200 shadow-md group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

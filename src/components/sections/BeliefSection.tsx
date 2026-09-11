'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ThreePSystem } from '../three-p/ThreePSystem';

export function BeliefSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll('.belief-reveal'),
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    };
    initAnimation();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="belief"
      className="section-padding bg-[#FAF7F2] border-t border-muted-border"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Belief Two-Column Split matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pb-8">
          {/* Left Column: Heading */}
          <div className="lg:col-span-6 flex flex-col items-start belief-reveal">
            {/* Accent Line & Section Label */}
            <div className="flex flex-col items-start mb-6">
              <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
                OUR BELIEF
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] text-navy leading-[1.1] tracking-[-0.02em]">
              <span className="block mb-1">Change isn&apos;t</span>
              <span className="block mb-1">the destination.</span>
              <span className="block">
                <span className="font-serif italic font-normal text-[#8B72BE] mr-2.5">
                  It&apos;s the
                </span>
                <span className="font-serif italic font-normal text-[#E07A5F]">
                  way forward.
                </span>
              </span>
            </h2>
          </div>

          {/* Center Vertical Divider (Desktop) */}
          <div className="hidden lg:block lg:col-span-1 flex justify-center h-full">
            <div className="w-[1px] h-44 bg-muted-border/80 mx-auto" />
          </div>

          {/* Right Column: Copy & Link */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 belief-reveal lg:pl-4">
            <div className="text-charcoal/85 text-[16px] sm:text-[17px] leading-[1.75] flex flex-col gap-5">
              <p>
                True transformation happens when people, perspective and processes come together in alignment.
              </p>
              <p>
                Our 3P approach creates the clarity, capability and momentum to move from where you are to where you aspire to be.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-navy hover:text-[#8B72BE] font-sans text-xs font-semibold uppercase tracking-wider transition-colors pt-2 relative pb-1 border-b border-[#8B72BE] group mt-2"
            >
              <span>More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3P Rotating Parallax Experience Below */}
        <ThreePSystem />
      </div>
    </section>
  );
}

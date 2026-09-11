'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] xl:min-h-screen flex flex-col lg:flex-row items-center justify-between bg-[#FAF7F2] overflow-hidden pt-24 sm:pt-28 lg:pt-20"
    >
      <HeroAnimation heroRef={heroRef} />

      {/* Main Standard Grid Container */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 items-center relative z-20 pt-4 pb-8 sm:py-12 lg:py-16">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start z-20 pr-0 lg:pr-8 w-full">
          {/* Accent line and Category Label */}
          <div className="flex flex-col items-start mb-4 sm:mb-6">
            <div className="w-7 sm:w-8 h-[1.5px] bg-[#8B72BE] mb-2 sm:mb-2.5" />
            <span className="font-sans text-[10.5px] sm:text-[12px] font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-[#8B72BE] uppercase">
              TRANSFORMATION THAT CREATES IMPACT
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif text-[2.15rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.6rem] xl:text-[5.2rem] leading-[1.08] sm:leading-[1.06] tracking-[-0.025em] text-navy mb-6 sm:mb-8">
            <span className="block">Transformation</span>
            <span className="block">begins with a</span>
            <span className="block">
              <span className="font-serif italic font-normal text-[#E07A5F] mr-2.5 sm:mr-4">different</span>
              <span className="font-serif italic font-normal text-[#8B72BE]">way</span>
            </span>
            <span className="block">
              <span className="font-serif italic font-normal text-[#E07A5F]">of seeing.</span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-sans text-[14px] sm:text-[16px] text-charcoal/85 leading-[1.7] sm:leading-[1.75] max-w-[460px] mb-8 sm:mb-10">
            We partner with individuals and organisations to unlock potential, shift perspective and create meaningful, lasting change.
          </p>

          {/* Dual Action CTAs - Always side by side with natural button widths */}
          <div className="flex flex-row items-center flex-wrap gap-4 sm:gap-6 w-auto">
            <Link
              href="/approach"
              className="hero-cta inline-flex items-center justify-center gap-2.5 bg-[#1A1A40] text-white hover:bg-[#2A2A5A] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm group w-fit shrink-0"
            >
              <span>Explore Our Approach</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="hero-cta inline-flex items-center gap-2 text-[#1A1A40] font-sans text-xs font-semibold tracking-wider relative pb-1 border-b border-[#8B72BE] hover:text-[#8B72BE] transition-colors group w-fit shrink-0"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right side spacer for desktop grid layout */}
        <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
      </div>

      {/* Full-Bleed Right Visual with responsive mobile & desktop blending */}
      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-[52%] xl:w-[56%] overflow-hidden z-10">
        <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.6)_18%,black_40%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.6)_18%,black_40%)]">
          <Image
            src="/images/hero/hero.png"
            alt="Transformation architecture"
            fill
            className="hero-image object-cover object-top sm:object-center lg:object-right"
            priority
          />
        </div>

        {/* Multi-layer soft gradient blends */}
        <div className="absolute inset-y-0 left-0 hidden lg:block w-2/5 sm:w-1/3 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/70 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#FAF7F2] to-transparent pointer-events-none z-20" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}

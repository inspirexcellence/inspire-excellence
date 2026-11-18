'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

export function WelcomeIntroModal() {
  const [isOpen, setIsOpen] = useState(true);

  // Prevent background scrolling while intro modal is visible
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to cancel/close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      {/* Expanded Width Modal — displays content fully without scroll on desktop */}
      <div
        className="relative w-full max-w-5xl lg:max-w-6xl max-h-[96vh] overflow-y-auto bg-[#FAF6F0] rounded-[2px] border border-[#E8DDD0] shadow-2xl p-6 sm:p-8 lg:p-11 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Cancel Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-charcoal/10 hover:bg-[#6B1D2F] hover:text-white text-charcoal flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Cancel and enter website"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Heading verbatim from ma'am */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-[#6B1D2F] font-semibold leading-[1.2] mb-5 pr-10">
          All You Need to Achieve a Goal Is to Have One.
        </h2>

        {/* Narrative Paragraphs */}
        <div className="space-y-3.5 sm:space-y-4 font-sans text-sm sm:text-[15.5px] lg:text-[16px] text-charcoal/90 leading-[1.75]">
          <p>
            What is the dream that calls to you, the purpose that pulls you forward? Is there a vision you&apos;ve held for yourself, something you yearn to create, accomplish, or embody? Or perhaps you feel blocked by certain limitations, somethings that you wish were not there. Take a moment to ask yourself: are you here simply to get through another day, or are you striving for something greater?
          </p>

          <p>
            If your goal is simply to maintain life as it is, your natural instincts will guide you. But if you&apos;re aiming higher, something that brings fulfilment, joy, abundance, and a sense of balance—a life aligned with your highest aspirations, there&apos;s another path. This journey requires shedding old limitations, cultivating new capabilities, and embracing beliefs that propel you toward success.
          </p>

          <p>
            Yes, you could spend years testing, persevering, and learning through trial and error to achieve some of this growth. But why wait? With proven scientific techniques, you can accelerate your transformation, breaking through limitations and bringing your dreams within reach far sooner than you might imagine. Real change, real outcomes — within weeks or months, your goals and dreams can shift from mere possibility to undeniable reality.
          </p>
        </div>

        {/* Italic Call to Action statement */}
        <p className="font-serif italic text-base sm:text-lg text-charcoal/95 mt-5 mb-6 font-normal">
          Start the journey of transformation. Let&apos;s make your dreams certain.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            href="/book-consultation"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 bg-[#5B101D] hover:bg-navy text-white px-7 py-3 rounded-[2px] font-sans text-xs sm:text-sm font-semibold tracking-wider transition-colors shadow-sm"
          >
            <span>Book a Consultation Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[2px] font-sans text-xs sm:text-sm font-semibold text-charcoal/80 hover:text-navy border border-charcoal/20 hover:border-navy transition-colors cursor-pointer"
          >
            <span>Enter Website</span>
          </button>
        </div>
      </div>
    </div>
  );
}
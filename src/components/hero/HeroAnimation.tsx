'use client';

import { useEffect, RefObject } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function HeroAnimation({ heroRef }: { heroRef: RefObject<HTMLDivElement | null> }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !heroRef.current) return;

    let ctx: any;

    const initGsap = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to('.hero-image', {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }, heroRef);
    };

    initGsap();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [heroRef, prefersReducedMotion]);

  return null;
}

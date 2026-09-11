'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TransformationCard } from '../cards/TransformationCard';

const areas = [
  {
    title: 'LEADERSHIP',
    slug: 'leadership',
    badgeType: 'leadership' as const,
    description: 'Build leaders who inspire, influence and create lasting impact.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop&q=80',
  },
  {
    title: 'ORGANISATIONS',
    slug: 'organisations',
    badgeType: 'organisations' as const,
    description: 'Transform systems, cultures and capabilities for the future.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&q=80',
  },
  {
    title: 'PEOPLE',
    slug: 'people',
    badgeType: 'people' as const,
    description: 'Unlock potential, confidence and clarity within.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=450&fit=crop&q=80',
  },
  {
    title: 'PERFORMANCE',
    slug: 'performance',
    badgeType: 'performance' as const,
    description: 'Turn potential into measurable progress and excellence.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=450&fit=crop&q=80',
  },
  {
    title: 'RELATIONSHIPS',
    slug: 'relationships',
    badgeType: 'relationships' as const,
    description: 'Create deeper trust, stronger connections and collaboration.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=450&fit=crop&q=80',
  },
];

export function TransformationAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll('.area-card'),
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    };
    initAnimation();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="section-padding bg-[#FAF7F2] border-t border-muted-border"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Bar */}
        <div className="flex justify-between items-end mb-10">
          <div className="flex flex-col items-start">
            <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
              AREAS OF TRANSFORMATION
            </span>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-navy hover:text-[#8B72BE] transition-colors font-sans text-xs font-semibold tracking-wider group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {areas.map((area) => (
            <div key={area.slug} className="area-card">
              <TransformationCard {...area} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

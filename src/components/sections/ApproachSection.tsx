'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Eye, Settings } from 'lucide-react';

export function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll('.approach-card'),
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    };
    initAnimation();
  }, []);

  const approaches = [
    {
      id: '01',
      title: 'PEOPLE',
      description:
        'We understand the people at the heart of every challenge and opportunity.',
      icon: Users,
      color: '#8B72BE', // Lavender
      iconBg: 'bg-[#8B72BE]/10',
      borderColor: 'border-[#8B72BE]/30',
      href: '/transformation-areas/people',
    },
    {
      id: '02',
      title: 'PERSPECTIVE',
      description:
        'We shift perspectives to see possibilities beyond the present.',
      icon: Eye,
      color: '#E07A5F', // Coral
      iconBg: 'bg-[#E07A5F]/10',
      borderColor: 'border-[#E07A5F]/30',
      href: '/approach',
    },
    {
      id: '03',
      title: 'PROCESS',
      description:
        'We design and embed processes that turn insight into action and sustainable results.',
      icon: Settings,
      color: '#5B9E9E', // Teal
      iconBg: 'bg-[#5B9E9E]/10',
      borderColor: 'border-[#5B9E9E]/30',
      href: '/services',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="section-padding bg-[#FAF7F2] border-t border-muted-border"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Accent Label */}
        <div className="flex flex-col items-start mb-12">
          <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
          <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
            OUR 3P APPROACH
          </span>
        </div>

        {/* 3 Columns Layout with Fine Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-muted-border">
          {approaches.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`approach-card flex items-start gap-6 py-6 md:py-0 ${
                  idx === 0
                    ? 'md:pr-8 lg:pr-10'
                    : idx === 1
                    ? 'md:px-8 lg:px-10'
                    : 'md:pl-8 lg:pl-10'
                }`}
              >
                {/* Left Circular Badge Icon */}
                <div
                  className={`w-15 h-15 sm:w-16 sm:h-16 rounded-full ${item.iconBg} ${item.borderColor} border flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 hover:scale-105`}
                >
                  <IconComponent
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    style={{ color: item.color }}
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col items-start flex-1">
                  <span
                    className="font-sans text-xs font-bold tracking-wider mb-1"
                    style={{ color: item.color }}
                  >
                    {item.id}
                  </span>

                  <h3 className="font-sans font-bold text-[13px] sm:text-sm tracking-wider text-navy uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-[13px] sm:text-sm text-charcoal/80 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-navy hover:text-[#8B72BE] transition-colors group mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

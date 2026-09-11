'use client';

import React from 'react';
import { Users, Flag, Building2, Award } from 'lucide-react';

const stats = [
  {
    value: '17+',
    label: 'YEARS OF EXPERIENCE',
    icon: Users,
    color: '#8B72BE',
    bg: 'bg-[#8B72BE]/10',
    borderColor: 'border-[#8B72BE]/30',
  },
  {
    value: '2017',
    label: 'INSPIRE EXCELLENCE FOUNDED',
    icon: Flag,
    color: '#E07A5F',
    bg: 'bg-[#E07A5F]/10',
    borderColor: 'border-[#E07A5F]/30',
  },
  {
    value: '100+',
    label: 'ORGANISATIONS TRANSFORMED',
    icon: Building2,
    color: '#E07A5F',
    bg: 'bg-[#E07A5F]/10',
    borderColor: 'border-[#E07A5F]/30',
  },
  {
    value: '5000+',
    label: 'LEADERS MENTORED',
    icon: Award,
    color: '#5B9E9E',
    bg: 'bg-[#5B9E9E]/10',
    borderColor: 'border-[#5B9E9E]/30',
  },
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F2EA] border-y border-[#E5DDD3]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-[#E5DDD3]">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className={`flex items-center gap-4 py-4 md:py-0 ${
                  i === 0
                    ? 'md:pr-6'
                    : i === stats.length - 1
                    ? 'md:px-6'
                    : 'md:px-6'
                }`}
              >
                {/* Circular Badge Icon */}
                <div
                  className={`w-12 h-12 rounded-full ${stat.bg} ${stat.borderColor} border flex items-center justify-center shrink-0 shadow-xs`}
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: stat.color }}
                  />
                </div>

                {/* Stat Text */}
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider text-charcoal/75 uppercase mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 5th Column: Quote */}
          <div className="col-span-2 md:col-span-1 md:pl-6 pt-6 md:pt-0 flex flex-col items-start justify-center">
            <span className="font-serif text-4xl text-navy leading-none mb-1 text-[#1A1A40]">
              &ldquo;
            </span>
            <p className="font-serif italic text-base sm:text-[17px] text-navy leading-snug">
              Experience that creates impact.
            </p>
            <div className="w-10 h-[1.5px] bg-[#8B72BE] mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

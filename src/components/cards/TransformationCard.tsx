'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Building2, User, TrendingUp, Heart } from 'lucide-react';

interface TransformationCardProps {
  title: string;
  description?: string;
  image: string;
  slug: string;
  badgeType: 'leadership' | 'organisations' | 'people' | 'performance' | 'relationships';
}

const badgeConfig = {
  leadership: {
    icon: Award,
    color: '#8B72BE',
    bg: 'bg-white',
    borderColor: 'border-[#8B72BE]/30',
  },
  organisations: {
    icon: Building2,
    color: '#E07A5F',
    bg: 'bg-white',
    borderColor: 'border-[#E07A5F]/30',
  },
  people: {
    icon: User,
    color: '#E07A5F',
    bg: 'bg-white',
    borderColor: 'border-[#E07A5F]/30',
  },
  performance: {
    icon: TrendingUp,
    color: '#5B9E9E',
    bg: 'bg-white',
    borderColor: 'border-[#5B9E9E]/30',
  },
  relationships: {
    icon: Heart,
    color: '#8B72BE',
    bg: 'bg-white',
    borderColor: 'border-[#8B72BE]/30',
  },
};

export function TransformationCard({
  title,
  description,
  image,
  slug,
  badgeType,
}: TransformationCardProps) {
  const config = badgeConfig[badgeType] || badgeConfig.leadership;
  const BadgeIcon = config.icon;

  return (
    <Link
      href={`/transformation-areas/${slug}`}
      className="group flex flex-col border border-muted-border bg-white rounded-sm overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 h-full"
    >
      {/* Top Image Visual with Floating Badge */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />

        {/* Top-Left Floating Circle Badge Icon */}
        <div
          className="absolute top-3.5 left-3.5 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110"
          style={{ borderColor: config.color }}
        >
          <BadgeIcon className="w-4 h-4" style={{ color: config.color }} />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-sm sm:text-base font-bold text-navy uppercase tracking-wider mb-2.5 transition-colors group-hover:text-[#8B72BE]">
            {title}
          </h3>
          {description && (
            <p className="font-sans text-xs sm:text-[13px] text-charcoal/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Bottom Right Arrow */}
        <div className="pt-4 flex justify-end items-center">
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
            style={{ color: config.color }}
          />
        </div>
      </div>
    </Link>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { MAIN_NAV } from '@/lib/constants';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out',
          isVisible ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none',
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-muted-border py-2.5 sm:py-3 shadow-sm'
            : 'bg-transparent py-4 sm:py-6'
        )}
      >
        {/* Symmetrical Container with balanced left and right gutters */}
        <div className="w-full max-w-[88rem] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex items-center justify-between gap-6">
          {/* Left Brand Logo (Exact natural aspect ratio 2.67:1) */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center group shrink-0">
              <div className="relative h-11 sm:h-12 lg:h-13 w-[120px] sm:w-[136px] lg:w-[150px] transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/final logo inspire 1200 size.png"
                  alt="Inspire Excellence"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Single-Line Navigation & Brochure (Balanced right margin) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <Navigation items={MAIN_NAV} />
            <Link
              href="/brochure"
              className="whitespace-nowrap shrink-0 bg-[#1A1A40] text-white hover:bg-[#2A2A5A] px-4.5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all duration-200 shadow-sm group"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#D48B38] group-hover:scale-110 transition-transform" />
              <span>Brochure</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-navy p-1.5 cursor-pointer hover:text-[#8B72BE] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" size={28} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

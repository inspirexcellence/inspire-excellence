'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { MAIN_NAV } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
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
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Prominent Left Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center group shrink-0">
              <div className="relative h-12 sm:h-14 lg:h-16 w-48 sm:w-56 lg:w-64 transition-transform duration-200 group-hover:scale-[1.02]">
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

          {/* Desktop Single-Line Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            <Navigation items={MAIN_NAV} />
            <Link
              href="/contact"
              className="whitespace-nowrap shrink-0 bg-[#1A1A40] text-white hover:bg-[#2A2A5A] px-5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center gap-2 transition-all duration-200 shadow-sm"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-navy p-2 -mr-2 cursor-pointer hover:text-[#8B72BE] transition-colors"
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

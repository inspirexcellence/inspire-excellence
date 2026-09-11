'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { MAIN_NAV } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedSection(null);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  };

  if (!mounted) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] bg-charcoal/30 backdrop-blur-xs transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={cn(
          'absolute inset-y-0 right-0 w-full max-w-sm bg-[#FAF7F2] shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] transform',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Mobile Header with Bigger Logo */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-muted-border">
          <Link href="/" className="flex items-center" onClick={onClose}>
            <div className="relative h-11 sm:h-12 w-44 sm:w-48">
              <Image
                src="/final logo inspire 1200 size.png"
                alt="Inspire Excellence"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-navy hover:text-[#8B72BE] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <Icon name="close" size={24} />
          </button>
        </div>

        {/* Links Navigation with Collapsible Accordion Support */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-8 flex flex-col justify-start">
          <nav className="flex flex-col space-y-4">
            {MAIN_NAV.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = expandedSection === item.label;

              return (
                <div key={item.label} className="flex flex-col border-b border-muted-border/40 pb-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="font-serif text-xl sm:text-2xl text-navy hover:text-[#8B72BE] transition-colors flex-1"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="p-2 text-charcoal/60 hover:text-navy cursor-pointer transition-transform"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform duration-200',
                            isExpanded ? 'rotate-180 text-navy' : ''
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <div className="flex flex-col space-y-2.5 pl-3.5 pt-2 mt-1 border-l-2 border-[#8B72BE]/40 animate-fadeIn">
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="font-sans text-xs sm:text-[13.5px] text-charcoal/80 hover:text-navy transition-colors py-1 flex flex-col"
                          onClick={onClose}
                        >
                          <span className="font-medium text-navy">{child.label}</span>
                          {child.description && (
                            <span className="text-[11px] text-charcoal/60 mt-0.5">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* CTA Footer */}
        <div className="p-5 sm:p-6 border-t border-muted-border bg-[#F5EDE4]/40 flex flex-col gap-2.5">
          <Link
            href="/brochure"
            onClick={onClose}
            className="w-full bg-[#1A1A40] text-white hover:bg-[#2A2A5A] py-3 rounded-[2px] font-sans text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            <span>Interactive Brochure</span>
            <span className="text-gold">📖</span>
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full text-center py-2.5 text-navy font-sans text-xs font-semibold hover:text-[#8B72BE] transition-colors"
          >
            Let&apos;s Connect →
          </Link>
        </div>
      </div>
    </div>
  );
}

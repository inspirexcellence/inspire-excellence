'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export function Navigation({ items, className }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on click outside or ESC key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent, item: NavItem) => {
    if (item.children && item.children.length > 0) {
      if (openDropdown !== item.label) {
        e.preventDefault();
        setOpenDropdown(item.label);
      } else {
        setOpenDropdown(null);
      }
    }
  };

  return (
    <nav ref={navRef} className={cn('flex items-center gap-3.5 xl:gap-5.5', className)}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isOpen = openDropdown === item.label;

        return (
          <div
            key={item.label}
            className="relative group shrink-0 py-2"
            onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
            onMouseLeave={() => hasChildren && setOpenDropdown(null)}
          >
            <Link
              href={item.href}
              onClick={(e) => hasChildren && handleToggle(e, item)}
              className={cn(
                'text-[13px] xl:text-[13.5px] font-sans text-charcoal/90 hover:text-navy transition-colors duration-200 inline-flex items-center gap-1 font-medium whitespace-nowrap cursor-pointer py-1',
                isOpen && 'text-navy font-semibold'
              )}
              aria-expanded={hasChildren ? isOpen : undefined}
            >
              <span>{item.label}</span>
              {hasChildren && (
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 text-charcoal/50 group-hover:text-navy transition-transform duration-200',
                    isOpen ? 'rotate-180 text-navy' : 'group-hover:rotate-180'
                  )}
                />
              )}
            </Link>

            {hasChildren && (
              <div
                className={cn(
                  'absolute left-0 top-full pt-2 z-50 transition-all duration-200',
                  isOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 translate-y-2 pointer-events-none invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-hover:visible'
                )}
              >
                <div className="bg-[#FAF7F2] border border-muted-border shadow-card rounded-[3px] py-2 min-w-[280px] sm:min-w-[300px] flex flex-col divide-y divide-muted-border/40">
                  {item.children!.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpenDropdown(null)}
                      className="px-4 py-3 text-charcoal hover:bg-[#F5EDE4] hover:text-navy transition-colors duration-150 flex flex-col group/sub"
                    >
                      <span className="text-[13px] font-medium text-navy group-hover/sub:text-[#8B72BE] transition-colors whitespace-nowrap">
                        {child.label}
                      </span>
                      {child.description && (
                        <span className="text-[11px] text-charcoal/65 mt-0.5 whitespace-normal leading-tight">
                          {child.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

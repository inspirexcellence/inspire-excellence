import React from 'react';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { ArrowRight, BookOpen, Download, ExternalLink, Sparkles } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Interactive Executive Brochure — Inspire Excellence',
  description:
    'Explore the official Inspire Excellence transformation brochure, detailing our 2-Year Total Life Transformative and 6-Month Founder Clarity pathways.',
  path: '/brochure',
});

export default function BrochurePage() {
  const flipbookUrl = 'https://heyzine.com/flip-book/8f47b7091b.html';

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Header Section */}
      <section className="py-12 md:py-16 border-b border-muted-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
                EXECUTIVE OVERVIEW
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy leading-[1.15] mb-4">
              Official Program Brochure
            </h1>

            <p className="font-sans text-sm sm:text-base text-charcoal/80 max-w-xl leading-relaxed mb-6">
              Turn pages, explore transformation methodologies, and review detailed frameworks for our private advisory engagements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={flipbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white hover:bg-[#2A2A5A] px-5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all shadow-xs"
              >
                <span>Open in Fullscreen</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 border border-navy text-navy hover:bg-navy hover:text-white px-5 py-2.5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Flipbook Embed Section */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="w-full max-w-5xl mx-auto">
            {/* Embed Container with elegant frame */}
            <div className="bg-white p-2 sm:p-4 rounded-md border border-muted-border shadow-card overflow-hidden">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] min-h-[480px] sm:min-h-[580px] lg:min-h-[680px]">
                <iframe
                  src={flipbookUrl}
                  title="Inspire Excellence Interactive Brochure"
                  className="w-full h-full border-0 rounded-sm"
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white rounded-sm border border-muted-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-muted-border flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-[#8B72BE]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy">
                    Total Life Transformative & Founder Clarity
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70">
                    Use arrows or click & drag page corners to flip through the brochure.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/individuals"
                  className="w-full sm:w-auto text-center font-sans text-xs font-semibold text-navy hover:text-[#8B72BE] transition-colors py-2 px-4 border border-muted-border rounded-[2px]"
                >
                  Compare Programs
                </Link>
                <Link
                  href="/book-consultation"
                  className="w-full sm:w-auto text-center bg-[#D48B38] text-white hover:bg-[#B87226] py-2 px-5 rounded-[2px] font-sans text-xs font-semibold tracking-wider transition-all"
                >
                  Schedule Call
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

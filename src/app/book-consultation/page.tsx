import React from 'react';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import BookingForm from '@/components/forms/BookingForm';
import { ArrowLeft, Clock, ShieldCheck, Calendar } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Book a Consultation | Inspire Excellence',
  description:
    'Schedule a 15-minute discovery consultation with Prerona Roy: Personal Transformation, Organisational Transformation, or Book a Speaker.',
  path: '/book-consultation',
});

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] pt-28 sm:pt-36 pb-24">
      <Container narrow>
        {/* Breadcrumb / Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#8B72BE] hover:text-navy transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="flex flex-col items-center mb-3">
            <div className="w-8 h-[1.5px] bg-[#8B72BE] mb-2.5" />
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#8B72BE] uppercase">
              EXECUTIVE DISCOVERY CONVERSATION
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy leading-[1.15] mb-4">
            Schedule a Discovery Call
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
            Select your consultation focus area, share your preferred schedule, and tell us briefly about your transformation or speaking objectives.
          </p>

          {/* Quick Perks */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-charcoal/70">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8B72BE]" />
              15–30 Min Exploratory Session
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#E07A5F]" />
              Direct 1:1 Executive Discussion
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5B9E9E]" />
              Strict Confidentiality
            </span>
          </div>
        </div>

        {/* Main Booking Form Card */}
        <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-[2px] border border-[#E8DDD0] shadow-card max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </Container>
    </main>
  );
}
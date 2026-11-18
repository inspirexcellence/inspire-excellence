'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 sm:py-16">
        <div className="w-14 h-14 rounded-full bg-[#8B72BE]/10 text-[#8B72BE] flex items-center justify-center mx-auto mb-5 shadow-xs">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl text-navy mb-3">
          Consultation Request Received
        </h3>
        <p className="font-sans text-charcoal/80 max-w-md mx-auto leading-relaxed mb-6">
          Thank you for reaching out. Prerona Roy&apos;s executive office will review your request and get in touch with you shortly to confirm your consultation schedule.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-navy hover:text-[#8B72BE] transition-colors border-b border-navy/30 pb-1"
        >
          <span>Submit Another Request</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans text-left">
      {/* Consultation Type verbatim from Ma'am */}
      <div>
        <label
          htmlFor="consultationType"
          className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
        >
          Consultation Type <span className="text-[#E07A5F]">*</span>
        </label>
        <select
          required
          id="consultationType"
          name="consultationType"
          defaultValue=""
          className="w-full bg-[#FDFAF5] border border-[#E8DDD0] p-3.5 rounded-[2px] text-charcoal text-sm focus:outline-none focus:border-[#8B72BE] transition-colors"
        >
          <option value="" disabled>
            Select a consultation type...
          </option>
          <option value="Personal Transformation">Personal Transformation</option>
          <option value="Organisational Transformation">Organisational Transformation</option>
          <option value="Book a Speaker">Book a Speaker</option>
        </select>
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
          >
            Your Full Name <span className="text-[#E07A5F]">*</span>
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Ankoor Gupta"
            className="w-full bg-[#FDFAF5] border border-[#E8DDD0] p-3.5 rounded-[2px] text-charcoal text-sm focus:outline-none focus:border-[#8B72BE] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
          >
            Email Address <span className="text-[#E07A5F]">*</span>
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="e.g. ankoor@example.com"
            className="w-full bg-[#FDFAF5] border border-[#E8DDD0] p-3.5 rounded-[2px] text-charcoal text-sm focus:outline-none focus:border-[#8B72BE] transition-colors"
          />
        </div>
      </div>

      {/* Phone Number & Preferred Date/Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
          >
            Phone / WhatsApp Number <span className="text-[#E07A5F]">*</span>
          </label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 98765 43210"
            className="w-full bg-[#FDFAF5] border border-[#E8DDD0] p-3.5 rounded-[2px] text-charcoal text-sm focus:outline-none focus:border-[#8B72BE] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
          >
            Preferred Date & Time <span className="text-[#E07A5F]">*</span>
          </label>
          <input
            required
            type="datetime-local"
            id="date"
            name="date"
            className="w-full bg-[#FDFAF5] border border-[#E8DDD0] p-3.5 rounded-[2px] text-charcoal text-sm focus:outline-none focus:border-[#8B72BE] transition-colors"
          />
        </div>
      </div>

      {/* Brief Goals/Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
        >
          Brief Goals or Context (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your current challenge, goals, or speaking event requirements..."
          className="w-full bg-[#FDFAF5] border border-[#E8DDD0] p-3.5 rounded-[2px] text-charcoal text-sm focus:outline-none focus:border-[#8B72BE] transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        disabled={status === 'loading'}
        type="submit"
        className="w-full bg-[#1A1A40] hover:bg-[#2A2A5A] text-white py-4 rounded-[2px] font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-sm disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Scheduling Call...' : 'Request Consultation'}
      </button>

      {status === 'error' && (
        <p className="text-[#E07A5F] text-xs font-medium text-center">
          An error occurred while submitting your request. Please try again or reach out directly at admin@inspirexcellence.org.
        </p>
      )}
    </form>
  );
}
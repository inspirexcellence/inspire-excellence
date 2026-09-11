'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <h3 className="font-serif text-3xl text-navy mb-4">Request Received</h3>
        <p className="font-sans text-charcoal">We will contact you shortly to confirm your consultation time.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <div>
        <label htmlFor="service" className="block text-sm text-navy font-semibold mb-2 uppercase tracking-wide">Consultation Type</label>
        <select required id="service" name="service" className="w-full border-fine border-muted-border bg-cream p-3 rounded-sm focus:outline-none focus:border-navy">
          <option value="">Select a focus area...</option>
          <option value="leadership">Leadership Coaching</option>
          <option value="organisation">Organisational Transformation</option>
          <option value="life">Holistic Life Evolution</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-navy font-semibold mb-2 uppercase tracking-wide">Name</label>
          <input required type="text" id="name" name="name" className="w-full border-fine border-muted-border bg-cream p-3 rounded-sm focus:outline-none focus:border-navy" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-navy font-semibold mb-2 uppercase tracking-wide">Email</label>
          <input required type="email" id="email" name="email" className="w-full border-fine border-muted-border bg-cream p-3 rounded-sm focus:outline-none focus:border-navy" />
        </div>
      </div>
      <div>
        <label htmlFor="date" className="block text-sm text-navy font-semibold mb-2 uppercase tracking-wide">Preferred Date & Time</label>
        <input required type="datetime-local" id="date" name="date" className="w-full border-fine border-muted-border bg-cream p-3 rounded-sm focus:outline-none focus:border-navy" />
      </div>
      <button disabled={status === 'loading'} type="submit" className="w-full bg-navy text-white py-4 rounded-sm uppercase tracking-widest text-sm font-semibold hover:bg-lavender transition-colors disabled:opacity-50">
        {status === 'loading' ? 'Processing...' : 'Request Consultation'}
      </button>
      {status === 'error' && <p className="text-coral text-sm text-center">An error occurred. Please try again.</p>}
    </form>
  );
}

'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
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
        <h3 className="font-serif text-3xl text-navy mb-4">Message Sent</h3>
        <p className="font-sans text-charcoal">We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
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
        <label htmlFor="organisation" className="block text-sm text-navy font-semibold mb-2 uppercase tracking-wide">Organisation (Optional)</label>
        <input type="text" id="organisation" name="organisation" className="w-full border-fine border-muted-border bg-cream p-3 rounded-sm focus:outline-none focus:border-navy" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-navy font-semibold mb-2 uppercase tracking-wide">Message</label>
        <textarea required id="message" name="message" rows={5} className="w-full border-fine border-muted-border bg-cream p-3 rounded-sm focus:outline-none focus:border-navy"></textarea>
      </div>
      <div className="flex items-start gap-3">
        <input required type="checkbox" id="consent" name="consent" className="mt-1" />
        <label htmlFor="consent" className="text-sm text-charcoal">I consent to Inspire Excellence storing and processing my personal data according to the Privacy Policy.</label>
      </div>
      <button disabled={status === 'loading'} type="submit" className="w-full bg-navy text-white py-4 rounded-sm uppercase tracking-widest text-sm font-semibold hover:bg-lavender transition-colors disabled:opacity-50">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && <p className="text-coral text-sm text-center">An error occurred. Please try again.</p>}
    </form>
  );
}

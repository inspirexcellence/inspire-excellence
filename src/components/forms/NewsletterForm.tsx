'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/newsletter', {
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
    return <p className="font-sans text-sm text-teal">Thank you for subscribing.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input 
        required 
        type="email" 
        name="email" 
        placeholder="Email Address" 
        className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 p-3 rounded-sm focus:outline-none focus:border-lavender text-sm font-sans" 
      />
      <button 
        disabled={status === 'loading'} 
        type="submit" 
        className="bg-lavender text-white px-6 py-3 rounded-sm uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-navy transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : 'Subscribe'}
      </button>
    </form>
  );
}

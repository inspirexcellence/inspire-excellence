import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({ title: 'Refund & Cancellation Policy | Inspire Excellence' });

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-ivory py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-navy">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Refund & Cancellation Policy</h1>
        <div className="font-sans text-charcoal space-y-6 mt-8">
          <p>Due to the bespoke nature of our executive coaching and consulting frameworks, as well as the immediate delivery of digital assets, Inspire Excellence operates under a strict no-refund policy.</p>
          <p>Consultations and sessions must be cancelled or rescheduled at least 48 hours in advance.</p>
        </div>
      </div>
    </main>
  );
}

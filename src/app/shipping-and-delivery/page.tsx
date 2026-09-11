import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({ title: 'Shipping & Delivery | Inspire Excellence' });

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-ivory py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-navy">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Shipping & Delivery Policy</h1>
        <div className="font-sans text-charcoal space-y-6 mt-8">
          <p>Inspire Excellence primarily delivers digital products, virtual consultations, and in-person services.</p>
          <p>Upon booking or purchase, digital access links and resources are delivered immediately via email to the address provided during checkout.</p>
        </div>
      </div>
    </main>
  );
}

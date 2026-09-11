import { createMetadata } from '@/lib/metadata';
import BookingForm from '@/components/forms/BookingForm';

export const metadata = createMetadata({
  title: 'Book Consultation | Inspire Excellence',
});

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-cream py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">Schedule a 15-Minute Discovery Call</h1>
          <p className="font-sans text-charcoal">Select a time that works best for you and tell us a bit about your goals.</p>
        </div>
        <div className="bg-white p-8 md:p-12 border-fine border-muted-border rounded-sm shadow-sm">
          <BookingForm />
        </div>
      </div>
    </main>
  );
}

import { createMetadata } from '@/lib/metadata';
import ContactForm from '@/components/forms/ContactForm';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Contact Us | Inspire Excellence',
  description: "Let's create what's possible, together.",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <section className="pt-32 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-tight mb-8">
                Let&apos;s create what&apos;s possible, <span className="font-serif italic text-lavender">together</span>.
              </h1>
              <p className="font-sans text-charcoal text-lg max-w-lg leading-relaxed">
                Whether you are exploring leadership consulting, personal turnaround coaching, or organizational alignment workshops, we are here to guide your journey.
              </p>
              
              <div className="space-y-8 font-sans text-charcoal mt-12 border-t border-muted-border pt-12">
                <div>
                  <h4 className="font-semibold text-navy uppercase tracking-widest text-xs mb-2">Email</h4>
                  <a href="mailto:admin@inspirexcellence.org" className="text-lg hover:text-lavender transition-colors">admin@inspirexcellence.org</a>
                </div>
                <div>
                  <h4 className="font-semibold text-navy uppercase tracking-widest text-xs mb-2">Phone</h4>
                  <p className="text-lg">+91 81002 11066</p>
                  <p className="text-lg">033 3550 5753</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy uppercase tracking-widest text-xs mb-2">Office Location</h4>
                  <p className="text-base text-charcoal">3rd Floor, Star Lilly Apartment, 2 Dum Dum Park, Kolkata - 700055, West Bengal, India</p>
                  <p className="text-sm text-charcoal-light mt-1">Monday – Saturday: 11:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 border border-muted-border rounded-sm shadow-soft">
              <h3 className="font-serif text-2xl text-navy mb-6">Start a Conversation</h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      
      <div className="bg-navy text-white text-center py-12">
        <Link href="/book-consultation" className="font-serif text-2xl md:text-3xl hover:text-gold transition-colors inline-flex items-center gap-3">
          <span>Transformation begins with a single conversation.</span>
          <span className="text-lavender">→</span>
        </Link>
      </div>
    </main>
  );
}

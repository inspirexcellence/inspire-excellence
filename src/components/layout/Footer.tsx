import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Icon, type IconName } from '@/components/ui/Icon';
import { FOOTER_COLUMNS, SOCIAL, LEGAL_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialItems: { name: IconName; href: string; label: string }[] = [
    { name: 'linkedin', href: SOCIAL.linkedin || '#', label: 'LinkedIn' },
    { name: 'youtube', href: SOCIAL.youtube || '#', label: 'YouTube' },
    { name: 'facebook', href: SOCIAL.facebook || '#', label: 'Facebook' },
    { name: 'instagram', href: SOCIAL.instagram || '#', label: 'Instagram' },
    { name: 'email', href: SOCIAL.email || 'mailto:admin@inspirexcellence.org', label: 'Email' },
  ];

  return (
    <footer className="bg-ivory border-t border-muted-border pt-16 lg:pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Brand Logo */}
          <div className="lg:col-span-1 flex flex-col">
            <Link href="/" className="flex flex-col mb-4 group">
              <div className="relative h-14 sm:h-16 w-52 sm:w-60 mb-2">
                <Image
                  src="/final logo inspire 1200 size.png"
                  alt="Inspire Excellence"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[10.5px] uppercase tracking-widest text-charcoal font-medium">
                People. Perspective. <span className="text-coral">Process.</span>
              </span>
            </Link>
            <p className="text-xs text-charcoal/75 mt-auto">
              © {currentYear} Inspire Excellence.<br />
              All Rights Reserved.
            </p>
          </div>

          {/* Cols 2-4: Links */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-1">
              <h3 className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-navy mb-6">
                {column.title}
              </h3>
              <ul className="flex flex-col space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-charcoal hover:text-navy transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 5: Social / Stay Connected */}
          <div className="lg:col-span-1 flex flex-col">
            <h3 className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-navy mb-6">
              Stay Connected
            </h3>
            <div className="flex items-center space-x-3 mb-6">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-muted-border flex items-center justify-center text-charcoal hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                >
                  <Icon name={item.name} size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              Join our leadership network for perspectives on transformation, narrative identity, and sustainable scale.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Legal */}
        <div className="pt-8 border-t border-muted-border flex flex-col md:flex-row items-center justify-between text-xs text-charcoal/70 space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-navy transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <span>Designed for transformation that creates impact.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

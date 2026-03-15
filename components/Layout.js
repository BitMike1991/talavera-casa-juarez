import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Instagram, Mail, Phone, ExternalLink } from 'lucide-react';
import { contactInfo } from '@/data/products';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/talavera', label: 'Talavera' },
  { href: '/workshop', label: 'Workshop' },
  { href: '/collection', label: 'Collection' },
  { href: '/shop', label: 'Shop on Etsy', external: true },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-talavera/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col cursor-pointer">
              <span className="font-heading text-xl sm:text-2xl font-bold text-talavera tracking-wide">Talavera</span>
              <span className="font-heading text-sm sm:text-base text-talavera -mt-1">Casa Juárez</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                link.label === 'Shop on Etsy' ? (
                  <a
                    key={link.href}
                    href={contactInfo.etsy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-talavera text-white rounded-full font-body text-sm font-medium hover:bg-talavera-light transition-colors cursor-pointer"
                  >
                    Shop on Etsy
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-dark-light hover:text-talavera transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-talavera cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-ivory border-t border-talavera/10">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                link.label === 'Shop on Etsy' ? (
                  <a
                    key={link.href}
                    href={contactInfo.etsy}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 bg-talavera text-white rounded-full font-body text-sm font-medium cursor-pointer w-fit"
                  >
                    Shop on Etsy
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-body text-base text-dark-light hover:text-talavera transition-colors py-1 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp floating button */}
      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Main content */}
      <main className="pt-16 sm:pt-20 flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-talavera text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">Talavera Casa Juárez</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Una artesanía hecha con el corazón.<br />
                Handcrafted in Mexico.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Explore</h4>
              <div className="space-y-2">
                {navLinks.filter(l => l.label !== 'Shop on Etsy').map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block font-body text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                  <Phone size={16} />
                  {contactInfo.phoneDisplay}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                  <Mail size={16} />
                  {contactInfo.email}
                </a>
                <a href={`https://instagram.com/talaveracasajuarez`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                  <Instagram size={16} />
                  {contactInfo.instagram}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/50">
              &copy; {new Date().getFullYear()} Talavera Casa Juárez. Handcrafted in Mexico.
            </p>
            <a
              href="https://bluewiseai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="font-body text-xs text-white/50">Powered by</span>
              <span className="font-body text-xs font-semibold text-white/70">BlueWise AI</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

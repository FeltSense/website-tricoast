'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl lg:text-2xl font-semibold text-primary-500 hover:opacity-80 transition-opacity"
          >
            Tricoast Dental
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-500 transition-colors font-light"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="tel:+18323655135"
              className="inline-flex items-center gap-2 bg-accent-500 text-white px-6 py-2.5 rounded-lg hover:bg-accent-600 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Now: +1 832-365-5135
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 bg-white border-t border-gray-100">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all font-light"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+18323655135"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Now: +1 832-365-5135
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
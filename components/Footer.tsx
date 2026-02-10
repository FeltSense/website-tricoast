import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'General Dentistry', href: '/services/general' },
    { name: 'Cosmetic Dentistry', href: '/services/cosmetic' },
    { name: 'Dental Implants', href: '/services/implants' },
    { name: 'Emergency Care', href: '/services/emergency' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Patient Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
  ];

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Insurance & Financing', href: '/insurance' },
    { name: 'New Patient Forms', href: '/forms' },
    { name: 'FAQs', href: '/faq' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group">
              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors group-hover:text-primary-400">
                Tricoast Dental
              </h3>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Quality dental care for Houston families with a 4.9-star rating. We're committed to your comfort and modern dentistry excellence.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  123 Main Street<br />Houston, TX 77002
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+12815550123" className="text-slate-400 hover:text-primary-400 transition-colors">
                  (281) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@tricoastdental.com" className="text-slate-400 hover:text-primary-400 transition-colors">
                  info@tricoastdental.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Tricoast Dental. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-primary-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-500 hover:text-primary-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
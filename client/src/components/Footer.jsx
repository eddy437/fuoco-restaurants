import { Link } from 'react-router-dom';
import { Flame, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-7 h-7 text-fire-orange" />
              <span className="font-serif text-2xl font-bold text-brand-beige">Fuoco</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Where fire meets fine dining. Authentic Italian cuisine crafted with passion, heritage, and the finest ingredients.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-fire-orange hover:text-fire-orange transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-brand-beige font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { path: '/menu', label: 'Our Menu' },
                { path: '/about', label: 'Our Story' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/reservation', label: 'Book a Table' },
                { path: '/contact', label: 'Contact Us' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/50 text-sm hover:text-fire-orange transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-brand-beige font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { day: 'Monday — Tuesday', hours: 'Closed' },
                { day: 'Wednesday — Thursday', hours: '5:30 pm — 10:30 pm' },
                { day: 'Friday — Saturday', hours: '12:00 pm — 11:00 pm' },
                { day: 'Sunday', hours: '12:00 pm — 9:30 pm' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-white/50">{day}</span>
                  <span className={hours === 'Closed' ? 'text-fire-red' : 'text-brand-beige'}>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-brand-beige font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-fire-orange shrink-0 mt-0.5" />
                <span>42 Via Roma, Mayfair<br />London, W1K 4HN</span>
              </li>
              <li>
                <a href="tel:+442071234567" className="flex gap-3 text-white/50 hover:text-fire-orange transition-colors duration-200">
                  <Phone className="w-4 h-4 text-fire-orange shrink-0 mt-0.5" />
                  <span>+44 (0) 207 123 4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@fuoco.restaurant" className="flex gap-3 text-white/50 hover:text-fire-orange transition-colors duration-200">
                  <Mail className="w-4 h-4 text-fire-orange shrink-0 mt-0.5" />
                  <span>hello@fuoco.restaurant</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {year} Fuoco Restaurants. All rights reserved.</p>
          <p>Crafted with passion in London</p>
        </div>
      </div>
    </footer>
  );
}

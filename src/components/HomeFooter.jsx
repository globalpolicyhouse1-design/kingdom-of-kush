import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import DecorativeBorder from './DecorativeBorder';
import { Link } from 'react-router-dom';

const FooterColumn = ({ title, items, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-gold font-bold text-base uppercase tracking-wide">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx}>
            {item.href ? (
              <Link
                to={item.href}
                className="text-white/80 text-sm hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <p className="text-white/80 text-sm">{item.label}</p>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const HomeFooter = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const aboutItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  const legalItems = [
    { label: 'Terms of Use', href: '#' },
    { label: 'Privacy Notice', href: '#' },
    { label: 'Investors', href: '#' },
    { label: 'Financial Information', href: '#' },
    { label: 'Credit Ratings Reports', href: '#' },
    { label: 'IPO', href: '#' },
    { label: 'FAQs', href: '#' }
  ];

  const officeItems = [
    {
      label: 'Global Office',
      href: null
    },
    {
      label: 'One World Trade Center Floor B5',
      href: null
    },
    {
      label: 'New York, NY 10007',
      href: null
    },
    {
      label: '',
      href: null
    },
    {
      label: 'Washington D.C. Office',
      href: null
    },
    {
      label: '1717 Pennsylvania Avenue NW',
      href: null
    },
    {
      label: 'Suite 1025, 20th Floor',
      href: null
    },
    {
      label: 'Washington, DC 20006',
      href: null
    }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Top Border */}
      <DecorativeBorder position="top" />

      {/* Footer Content */}
      <div className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
            {/* Column 1: Logo & About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img
                src="/assets/images/6.png"
                alt="Kingdom of Kush Logo"
                className="w-20 h-auto"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                The Kingdom of Kush stands as a beacon of African excellence, innovation, and heritage.
              </p>
            </motion.div>

            {/* Column 2: About Links */}
            <FooterColumn title="About" items={aboutItems} delay={0.1} />

            {/* Column 3: Legal Links */}
            <FooterColumn title="Legal" items={legalItems} delay={0.2} />

            {/* Column 4: Office Locations */}
            <FooterColumn title="Contact" items={officeItems} delay={0.3} />

            {/* Column 5: Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-gold font-bold text-base uppercase tracking-wide mb-4">
                  Subscribe
                </h3>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 rounded-lg text-primary text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-gold font-bold text-base uppercase tracking-wide mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-white/80 hover:text-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-gold transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-gold transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <DecorativeBorder position="bottom" />

      {/* Copyright */}
      <div className="px-4 py-6 border-t border-white/10 bg-red-600">
        <div className="max-w-6xl mx-auto text-center text-sm text-white/60 ">
          <p>&copy; 2025 Kingdom of Kush. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;

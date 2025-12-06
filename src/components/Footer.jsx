import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const quickLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.government'), href: '/government' },
    { label: t('nav.citizenship'), href: '/citizenship' },
    { label: t('nav.join'), href: '/join' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0B3D2E] text-[#F5F5F5] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#D4AF37]">{t('footer.about_title')}</h3>
            <p className="text-sm text-gray-300">
              {t('footer.about_desc')}
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#D4AF37]">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#D4AF37]">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href="mailto:info@kingdomofkush.org" className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors">
                  {t('footer.email')}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href="tel:+12025550123" className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors">
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">{t('footer.address')}</p>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#D4AF37]">{t('footer.follow_us')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/20 pt-8">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Kingdom of Kush. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

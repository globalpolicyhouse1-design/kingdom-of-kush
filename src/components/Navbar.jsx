import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button'; // Assuming Button.jsx is in the same directory

export default function Navbar() {
  const { t, i18n, ready } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  // Desktop navigation items
  const desktopNavItems = useMemo(() => {
    if (!ready) return [];
    return [
      { label: 'About', path: '/about' },
      { label: 'Citizenship', path: '/citizenship' },
      { label: 'Events', path: '/events' },
    ];
  }, [ready, i18n.language]);

  // All navigation items for mobile dropdown
  const allNavItems = useMemo(() => {
    if (!ready) return [];
    return [
      { label: 'Home', path: '/' },
      { label: t('About'), path: '/about' },
      { label: 'Government', path: '/government' },
      { label: 'Citizenship', path: '/citizenship' },
      { label: 'Events', path: '/events' },
      { label: 'E-Gov', path: '/egov' },
      { label: 'Investors', path: '/investors' },
      { label: 'Media', path: '/media' },
      { label: 'Join', path: '/join' },
    ];
  }, [ready, i18n.language]);

  // Social media links with official brand colors
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#facebook', color: '#1877F2' },
    { icon: Instagram, label: 'Instagram', href: '#instagram', color: '#E4405F' },
    { icon: Twitter, label: 'X', href: '#twitter', color: '#000000' },
    { icon: Linkedin, label: 'LinkedIn', href: '#linkedin', color: '#0A66C2' }
  ];

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setLangMenuOpen(false);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  // Always render white navbar - no scroll-based conditional styling
  const navClassName = 'fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-colors duration-300';

  return (
    <nav className={navClassName}>
      {/* Top Decoration Bar */}
      <div className="w-full h-8 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/kush-pattern-gold.jpg)' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/assets/images/6.png"        // ← your logo path
                  alt="Kingdom of Kush logo"
                  className="w-15 h-auto" // adjust size as needed
                />
                <img
                  src="/assets/images/2.png"
                  alt="Kingdom of Kush emblem"
                  className="w-20 h-auto"
                />
              </a>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            {desktopNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-lg text-sm font-medium text-black hover:text-black/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Button for Desktop */}
            <div className="ml-4 flex items-center space-x-4">
              <Link to="/join">
                <Button variant="primary" className="border-2 border-red-600 bg-transparent text-black font-light text-sm px-5 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors duration-300 flex items-center gap-1 mx-1">Join The Kingdom</Button>
              </Link>
              <div className="hidden lg:flex space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      aria-label={social.label}
                      title={social.label}
                      style={{ color: social.color }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              <div className="relative">
                <button
                  onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                  className="p-2 rounded-lg text-black-stone/70 hover:bg-gray-100 transition-colors"
                  aria-label="Toggle main menu"
                >
                  {desktopMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                {desktopMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-1">
                      {allNavItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setDesktopMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                      {/* Language Switcher for Desktop Hamburger */}
                      <div className="border-t border-gray-200 mt-1 pt-1">
                        <button
                          onClick={() => setLangMenuOpen(!langMenuOpen)}
                          className="flex w-full items-center justify-between px-4 py-2 text-sm text-black-stone/70 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <Globe size={18} />
                            <span>Language</span>
                          </div>
                          <span className="text-sm font-bold">{i18n.language.toUpperCase()}</span>
                        </button>
                        {langMenuOpen && (
                          <div className="w-full bg-white rounded-lg shadow-lg">
                      <button onClick={() => toggleLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-50">English</button>
                      <button onClick={() => toggleLanguage('ar')} className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-50 border-t border-gray-200">العربية</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Actions for Mobile */}
          <div className="flex items-center md:hidden">
            <Link to="/join" className="mr-4">
              <Button variant="primary" className="border-2 border-red-600 bg-transparent text-black hover:bg-red-600 hover:text-white text-sm transition-colors duration-300">Join The Kingdom</Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-black-stone/70 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {allNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-black hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Language and Socials in Mobile */}
              <div className="px-3 pt-4 pb-2 border-t border-gray-200 mt-2">
                {/* Language Switcher Mobile */}
                <div className="relative mb-4">
                  <button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex w-full items-center justify-between px-3 py-2 rounded-lg text-black bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <Globe size={18} />
                      <span className="text-sm font-medium">Language</span>
                    </div>
                    <span className="text-sm font-bold">{i18n.language.toUpperCase()}</span>
                  </button>
                  {langMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg"
                    >
                      <button onClick={() => toggleLanguage('en')} className="block w-full text-left px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-t-lg">English</button>
                      <button onClick={() => toggleLanguage('ar')} className="block w-full text-left px-4 py-3 text-sm text-black hover:bg-gray-50 border-t border-gray-200 rounded-b-lg">العربية</button>
                    </motion.div>
                  )}
                </div>
                
                {/* Social Media Icons - Mobile */}
                <div className="flex items-center justify-center space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={social.label}
                        title={social.label}
                        style={{ color: social.color }}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}


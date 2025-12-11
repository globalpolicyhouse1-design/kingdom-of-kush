import React from 'react'
import HeroSlideshow from '../components/HeroSlideshow'
import SectionCardGrid from '../components/SectionCardGrid'
import WhyChooseSection from '../components/WhyChooseSection'
import CitizenshipSection from '../components/CitizenshipSection'
import HomeFooter from '../components/HomeFooter'
import Slider from '../components/Slider'
import { events, locales } from '../data/data'
import { Link } from 'react-router-dom'
import { Users, Calendar, Shield, TrendingUp } from 'lucide-react'

export default function Home({ lang }){
  // Default to 'en' if lang is not provided or locales[lang] is undefined
  const validLang = (lang && locales[lang]) ? lang : 'en'
  const t = locales[validLang] || locales.en
  
  // Ensure t has all required properties with fallbacks
  const safeT = {
    heroTitle: t?.heroTitle || 'welcome to the Kingdom of Kush',
    heroSubtitle: t?.heroSubtitle || 'Where future becomes tomorrow',
    explore: t?.explore || 'Explore Kingdom',
    plan: t?.plan || 'Plan Your Visit',
    siteTitle: t?.siteTitle || 'Kingdom of Kush',
  }
  
  return (
    <main>
      {/* ===== HERO SECTION WITH SLIDESHOW ===== */}
      <HeroSlideshow 
        pretext={safeT.pretext}
        title={safeT.heroTitle} 
        subtitle={safeT.heroSubtitle} 
        ctaText={safeT.explore}
        ctaLink="#destinations"
      />

      {/* ===== KEY SECTION CARDS ===== */}
      <SectionCardGrid />

      {/* ===== WHY CHOOSE KINGDOM OF KUSH SECTION ===== */}
      <WhyChooseSection />

      {/* ===== CITIZENSHIP AWAITS SECTION ===== */}
      <CitizenshipSection />

      {/* ===== PARTNERS SECTION ===== */}
      <section className="py-4xl md:py-5xl px-container">
        <div className="max-w-container mx-auto">
          {/* Section Header - Centered */}
          <div className="text-center mb-3xl md:mb-5xl space-y-md">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-primary">
              Strategic Partners & Collaborators
            </h2>
            <p className="text-body-md md:text-body-lg text-primary/70 max-w-2xl mx-auto">
              Working with leading organizations to build a sustainable, innovative future for the Kingdom of Kush.
            </p>
          </div>
          
          {/* Card Grid: Partners (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { 
                title: 'International Development Fund', 
                img: '/assets/images/kush5.jpg', 
                desc: 'Partnering on sustainable infrastructure and economic development across the Kingdom.' 
              },
              { 
                title: 'Digital Innovation Lab', 
                img: '/assets/images/kush6.jpg', 
                desc: 'Co-developing digital governance solutions and e-services for modern citizen engagement.' 
              },
              { 
                title: 'Cultural Heritage Consortium', 
                img: '/assets/images/kush-q.jpg', 
                desc: 'Preserving and promoting the rich cultural legacy of the Kingdom globally.' 
              }
            ].map((card, idx) => (
              <div key={card.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 animate-fade-in-up" style={{ animationDelay: `${idx * 80}ms` }}>
                <img src={card.img} alt={card.title} className="rounded-t-xl w-full h-[200px] object-cover" />
                <div className="p-4">
                  <h3 className="mt-4 text-xl font-serif text-[#0A2F24]">{card.title}</h3>
                  <p className="text-gray-600 mt-2">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-4xl md:py-5xl px-container bg-primary/10">
        <div className="max-w-container mx-auto space-y-4xl">
          {/* Section Header */}
          <div className="space-y-md">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-primary">
              Upcoming Cultural Events
            </h2>
            <p className="text-body-md md:text-body-lg text-primary/70 max-w-2xl">
              Join our cultural celebrations and immersive experiences.
            </p>
          </div>
          <Slider items={events} />
        </div>
      </section>

      {/* ===== CITIZENSHIP PREVIEW ===== */}
      <section id="citizenship" className="w-full bg-offwhite py-5xl md:py-5xl px-container">
        <div className="max-w-5xl mx-auto">
          {/* Flex Layout: 2 columns desktop, column mobile/tablet */}
          <div className="flex flex-col lg:flex-row gap-4xl lg:gap-5xl items-center">
            {/* Left Column: Text Content */}
            <div className="flex-1 animate-fade-in-up">
              {/* Section Label */}
              <div className="text-label font-semibold text-gold uppercase mb-md tracking-wide">
                Become a Kush Citizen
              </div>
              
              {/* Title */}
              <h2 className="text-display-md md:text-display-md lg:text-display-lg font-display font-bold text-primary mb-lg">
                Join the Future of Kush
              </h2>
              
              {/* Description */}
              <p className="text-body-md md:text-body-lg text-primary/80 leading-relaxed mb-3xl max-w-2xl">
                Become part of a thriving global community celebrating Nubian heritage, culture, and sustainable development. Access exclusive benefits, from cultural events to digital governance and investment opportunities.
              </p>
              
              {/* Key Benefits - Bulleted List */}
              <div className="space-y-md mb-3xl">
                {[
                  'Cultural belonging & heritage rights',
                  'Digital governance access',
                  'Exclusive events & experiences',
                  'Investment opportunities',
                  'Voting rights in future decisions'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-md animate-slide-in-left" style={{ animationDelay: `${idx * 60}ms` }}>
                    <span className="text-gold text-xl flex-shrink-0 mt-1">✓</span>
                    <p className="text-body-sm md:text-body-md text-primary/80 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link 
                to="/citizenship"
                className="rounded-lg px-6 py-3 bg-[#D4AF37] text-[#0A2F24] font-semibold shadow-md hover:shadow-lg inline-block"
              >
                Explore Citizenship →
              </Link>
            </div>
            
            {/* Right Column: Visual Block */}
            <div className="flex-1 w-full animate-scale-in">
              <div className="rounded-2xl overflow-hidden relative h-80 md:h-96 lg:h-96 flex items-center justify-center shadow-luxury" style={{ backgroundImage: 'url(/assets/images/kush-q.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-lg">
                  <svg className="w-24 h-24 mx-auto text-offwhite animate-bounce" style={{ animationDuration: '3s' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4h18v2H3V4zm2 4l2 6h12l2-6H5zm1 8h12v2H6v-2zm0 4h12v2H6v-2z" />
                  </svg>
                  <h3 className="text-display-md md:text-display-lg font-display font-bold text-offwhite leading-tight">
                    Citizenship Awaits
                  </h3>
                  <p className="text-body-md text-offwhite/90 max-w-xs mx-auto">
                    Join a legacy 3,000 years in the making
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <HomeFooter />
    </main>
  )
}

import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Slider from '../components/Slider'
import { destinations, events, locales } from '../data/data'
import { Link } from 'react-router-dom'

export default function Home({ lang }){
  const t = locales[lang]
  
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <Hero 
        title={t.heroTitle} 
        subtitle={t.heroSubtitle} 
        ctaLeft={t.explore} 
        ctaRight={t.plan} 
        mediaUrl="/assets/doc_2025-12-02_02-34-50.mp4"
        ctaLeftLink="#destinations"
        ctaRightLink="#citizenship"
      />

      {/* ===== FEATURED DESTINATIONS ===== */}
      <section id="destinations" className="py-section px-container">
        <div className="max-w-container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-3xl md:mb-5xl space-y-md">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-primary">
              Discover Ancient & Future Kush
            </h2>
            <p className="text-body-md md:text-body-lg text-primary/70 max-w-2xl mx-auto">
              Explore four iconic destinations spanning the Kingdom of Kush across Sudan and Egypt.
            </p>
          </div>
          
          {/* Grid: Meroe main card + remaining destination cards on same level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md sm:gap-lg lg:gap-2xl">
            {/* Meroe Card - same size as other destination cards */}
            <div className="animate-fade-in-up" style={{ animationDelay: `0ms` }}>
              <Card item={destinations[0]} />
            </div>

            {/* Remaining destination cards */}
            {destinations.slice(1).map((d, idx) => (
              <div key={d.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <Card item={d} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY KUSH SECTION ===== */}
      <section className="py-4xl md:py-5xl px-container bg-offwhite border-y border-gold/10">
        <div className="max-w-container mx-auto">
          {/* Section Header - Centered */}
          <div className="text-center mb-3xl md:mb-5xl">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-primary">
              Why Choose Kingdom of Kush
            </h2>
          </div>
          
          {/* Card Grid: Why Choose Kingdom of Kush (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Heritage & Legacy', img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80', desc: 'Rooted in one of the worlds oldest kingdoms with a legacy of innovation and culture.' },
              { title: 'Culture & Innovation', img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80', desc: 'A blend of ceremonial tradition and forward-looking development, from festivals to smart infrastructure.' },
              { title: 'Natural Beauty', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80', desc: 'From the Nile to the desert, dramatic landscapes form the backbone of cultural life and tourism.' }
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
              <div className="bg-gradient-to-br from-gold to-bronze rounded-2xl p-4xl overflow-hidden relative h-80 md:h-96 lg:h-96 flex items-center justify-center shadow-luxury">
                {/* Background decorative shapes */}
                <div className="absolute top--10 right--10 w-40 h-40 border-2 border-sand-gold/30 rounded-full"></div>
                <div className="absolute bottom--5 left--5 w-32 h-32 border-2 border-bronze/30 rounded-lg"></div>
                
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

      {/* ===== E-GOVERNMENT SERVICES ===== */}
      <section className="w-full bg-gold/5 py-5xl md:py-5xl px-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-4xl text-center">
            {/* Section Label */}
            <div className="text-label font-semibold text-dark-green uppercase mb-md tracking-wide">
              Government Services
            </div>
            
            {/* Title */}
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-primary mb-md">
              Digital Governance for Citizens & Visitors
            </h2>
            
            {/* Subtext */}
            <p className="text-body-md md:text-body-lg text-primary/70 max-w-2xl mx-auto">
              Seamless, modern services for permits, visas, and official documentation
            </p>
          </div>
          
          {/* Service Cards Grid: 4 desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg md:gap-2xl">
            {[
              { title: 'Visa & Entry', icon: 'passport', desc: 'Apply for cultural and tourist visas instantly' },
              { title: 'Documentation', icon: 'document', desc: 'Official document authentication across borders' },
              { title: 'Civil Services', icon: 'certificate', desc: 'Birth, marriage, and identification documents' },
              { title: 'Permits & Licenses', icon: 'scale', desc: 'Business and cultural event permits' },
              { title: 'Authentication', icon: 'shield', desc: 'Verify credentials and certifications' },
              { title: 'Support Center', icon: 'headset', desc: 'Live chat and multilingual assistance' }
            ].map((service, idx) => {
              const iconSvg = {
                passport: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                ),
                document: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z"/>
                    <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <path d="M8 14h8M8 18h8" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                ),
                certificate: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75-3.54-3.96 4.96c-.38.48-.1 1.24.38 1.24h5.96c.48 0 .76-.76.38-1.24z"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                  </svg>
                ),
                scale: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                shield: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.5V11c0 4.52-2.98 8.69-7 10-4.02-1.31-7-5.48-7-10V6.68l7-3.5z"/>
                  </svg>
                ),
                headset: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1C6.48 1 2 5.48 2 11v6c0 .55.45 1 1 1h1v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3h2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3h1c.55 0 1-.45 1-1v-6c0-5.52-4.48-10-10-10zm0 2c4.42 0 8 3.58 8 8v3H4v-3c0-4.42 3.58-8 8-8z"/>
                  </svg>
                )
              };
              
              return (
                <div
                  key={service.title}
                  className="bg-offwhite border border-bronze/20 p-2xl rounded-lg text-center cursor-pointer transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-2 animate-fade-in-up group shadow-md"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {/* Icon Container: 60x60px with gradient */}
                  <div className="w-15 h-15 mx-auto mb-md rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg text-offwhite" style={{ backgroundColor: '#0B3D2E' }}>
                    {iconSvg[service.icon]}
                  </div>
                  
                  {/* Service Title */}
                  <h4 className="text-body-lg font-display font-bold text-primary mb-sm">
                    {service.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-body-sm text-primary/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-4xl">
            <Link 
              to="/egov"
              className="inline-block px-2xl py-md rounded-sm bg-dark-green text-white-marble font-semibold text-body-md hover:bg-dark-green/90 transition-colors duration-300 shadow-card hover:shadow-luxury"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

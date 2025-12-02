import React from 'react'
import { Link } from 'react-router-dom'

export default function About({ lang }){
  
  const artGallery = [
    { title: 'Nubian Geometric Patterns', desc: 'Intricate geometric designs representing ancient Nubian pottery and textiles, remixed with holographic overlays' },
    { title: 'Kushite Crown & Regalia', desc: 'The symbolic crown of Kush royalty, blended with futuristic digital light effects' },
    { title: 'Temple Hieroglyphs', desc: 'Sacred carvings from ancient temples, rendered with translucent digital enhancements' },
    { title: 'Nile Valley Motifs', desc: 'Natural forms (lotus, papyrus, river curves) integrated with modern geometric abstraction' }
  ]
  
  const timeline = [
    { period: '2,300–1,070 BCE', title: 'Kerma & Old Kingdom', desc: 'Ancient Nubian civilization rises with monumental architecture and trade routes' },
    { period: '1,070–300 BCE', title: 'Napatan Period', desc: 'Kush reaches its zenith; pyramids built, temples erected, vast influence' },
    { period: '300 BCE–350 CE', title: 'Meroe Renaissance', desc: 'Kushite culture flourishes; artistic and economic pinnacle' },
    { period: '350–1500 CE', title: 'Medieval Era', desc: 'Kingdom evolves; transitions in governance and cultural expression' },
    { period: '2025 CE →', title: 'Kingdom of Kush Reborn', desc: 'Modern vision: cultural tourism, innovation, Sudan–Egypt unity' }
  ]
  
  const ecosystemElements = [
    { title: 'Ancient Wonders', desc: 'Temples, pyramids, archaeological sites' },
    { title: 'Modern Services', desc: 'E-government, visas, digital citizens' },
    { title: 'Cultural Experiences', desc: 'Events, festivals, immersive tours' },
    { title: 'Investment Opportunities', desc: 'Real estate, tourism ventures, innovation' },
    { title: 'Natural Heritage', desc: 'Nile Valley, desert landscapes, ecosystems' },
    { title: 'Future Infrastructure', desc: 'Smart tech, sustainable tourism, digital platforms' }
  ]

  return (
    <main>
      {/* ===== SECTION 1: KINGDOM OF KUSH STORY ===== */}
      <section className="w-full bg-offwhite py-5xl md:py-5xl px-container">
        <div className="max-w-4xl mx-auto text-center space-y-4xl">
          {/* Section Label */}
          <div className="text-label font-semibold text-gold uppercase tracking-wide">
            Our Story
          </div>
          
          {/* Title */}
          <h1 className="text-display-lg md:text-display-xl font-display font-bold text-primary leading-tight">
            The Kingdom of Kush: Where History Meets Tomorrow
          </h1>
          
          {/* Main Narrative */}
          <div className="space-y-lg text-body-md md:text-body-lg text-primary/85 leading-relaxed">
            <p>
              The ancient Kingdom of Kush was one of Africa's greatest civilizations—a center of power, trade, and cultural excellence that rivaled Egypt itself. For millennia, Nubian kingdoms ruled from the Nile's heart, building temples, pyramids, and fortresses that stand as testaments to architectural brilliance and sophisticated governance.
            </p>
            <p>
              Today, Kingdom of Kush reimagines this legacy, blending historical reverence with visionary innovation. It is a commitment to cultural preservation, tourism excellence, and a unified future where Sudan and Egypt celebrate shared heritage while building new pathways for travelers, investors, and citizens worldwide.
            </p>
          </div>
          
          {/* Decorative Divider */}
          <div className="flex justify-center pt-lg">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: VISION FOR THE FUTURE ===== */}
      <section className="w-full bg-gradient-to-b from-offwhite to-gold/5 py-5xl md:py-5xl px-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5xl lg:gap-5xl items-center">
            {/* Left Column: Vision Text */}
            <div className="animate-fade-in-up space-y-2xl">
              {/* Subsection Title */}
              <h2 className="text-display-md md:text-display-lg font-display font-bold text-primary">
                A Vision for Global Connection
              </h2>
              
              {/* Vision Statement */}
              <p className="text-body-md md:text-body-lg text-primary/85 leading-relaxed">
                Kingdom of Kush envisions a future where ancient wisdom guides modern progress. We believe cultural heritage and technological innovation can coexist, creating transformative experiences for global citizens.
              </p>
              
              {/* Vision Points */}
              <div className="space-y-md pt-lg">
                {[
                  { title: 'Cultural Renaissance', desc: 'Celebrate and preserve Nubian heritage for global audiences' },
                  { title: 'Economic Growth', desc: 'Create sustainable tourism & investment opportunities' },
                  { title: 'Digital Innovation', desc: 'Build modern infrastructure for citizens and visitors' },
                  { title: 'Regional Unity', desc: 'Strengthen Sudan–Egypt collaboration and shared prosperity' },
                  { title: 'Accessible Experiences', desc: 'Democratize travel to ancient wonders' }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-md animate-slide-in-left" style={{ animationDelay: `${idx * 60}ms` }}>
                    <span className="text-sand-gold text-xl flex-shrink-0">✓</span>
                    <div>
                      <h4 className="text-body-md font-semibold text-dark-green">
                        {point.title}
                      </h4>
                      <p className="text-body-sm text-black-stone/70">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column: Visual Block */}
            <div className="animate-scale-in h-96 md:h-full">
                <div className="bg-gradient-to-br from-primary to-black-stone rounded-2xl p-4xl h-full flex flex-col justify-between items-center relative overflow-hidden shadow-luxury">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 border-2 border-sand-gold rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-bronze rounded-lg"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-lg">
                  <div className="text-7xl animate-bounce" style={{ animationDuration: '3s' }}>
                    ☀️
                  </div>
                  <h3 className="text-display-md md:text-display-lg font-display font-bold text-offwhite">
                    Tomorrow's Kingdom
                  </h3>
                  <p className="text-body-md text-offwhite/90 max-w-xs mx-auto">
                    Built on foundations of 3,000 years of excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SUDAN–EGYPT COLLABORATION ===== */}
      <section className="w-full bg-offwhite py-5xl md:py-5xl px-container">
        <div className="max-w-5xl mx-auto space-y-4xl">
          {/* Section Header */}
          <div className="text-center space-y-md">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-primary">
              Sudan & Egypt United: A Collaborative Future
            </h2>
            <p className="text-body-md md:text-body-lg text_primary/70 max-w-2xl mx-auto">
              Kingdom of Kush celebrates the Nile Valley heritage shared by two great nations, building bridges through culture, tourism, and mutual growth.
            </p>
          </div>
          
          {/* 3-Column Collaboration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl">
            {/* Sudan Column */}
            <div className="bg-sand-gold/10 border-l-4 border-sand-gold p-2xl rounded-lg animate-fade-in-up">
              <div className="text-3xl mb-md text-sand-gold">🏛️</div>
              <h3 className="text-body-lg font-display font-bold text-dark-green mb-md">
                Sudan's Legacy
              </h3>
              <p className="text-body-md text-black-stone/80 leading-relaxed">
                Home to ancient Kushite capitals, pyramids, and the legendary Nile's curve. Sudan preserves 3,000 years of unbroken cultural continuity.
              </p>
            </div>
            
            {/* Nile River Connector */}
            <div className="bg-gradient-to-br from-sand-gold to-bronze p-2xl rounded-lg text-white-marble animate-scale-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl mb-md">🌊</div>
              <h3 className="text-body-lg font-display font-bold text-white-marble mb-md">
                The Nile: Our Bond
              </h3>
              <p className="text-body-md text-white-marble/90 leading-relaxed">
                For millennia, the Nile has connected civilizations. It remains the lifeline of Kingdom of Kush, linking Sudan and Egypt in shared history and destiny.
              </p>
            </div>
            
            {/* Egypt Column */}
            <div className="bg-dark-green/10 border-r-4 border-dark-green p-2xl rounded-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl mb-md text-dark-green">🗿</div>
              <h3 className="text-body-lg font-display font-bold text-dark-green mb-md">
                Egypt's Grandeur
              </h3>
              <p className="text-body-md text-black-stone/80 leading-relaxed">
                Egypt's monumental contributions to human civilization find natural resonance in Kush. Together, they form an unparalleled cultural corridor.
              </p>
            </div>
          </div>
          
          {/* Stylized Map */}
          <div className="bg-gradient-to-b from-dark-green via-sand-gold/20 to-dark-green rounded-2xl p-4xl mt-4xl relative overflow-hidden h-64 md:h-80 flex items-center justify-center shadow-luxury">
            <div className="absolute inset-0 opacity-5 grid grid-cols-12 gap-4"></div>
            <div className="relative z-10 text-center space-y-md">
              <div className="text-4xl">🌊</div>
              <p className="text-display-md font-display font-bold text-sand-gold/90">
                Shared Nile. Shared Future.
              </p>
              <p className="text-body-md text-white-marble/80">
                Khartoum ↔ Cairo | Ancient Wonders Connected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CULTURAL IDENTITY & NUBIAN ART ===== */}
      <section className="w-full bg-dark-green py-5xl md:py-5xl px-container">
        <div className="max-w-5xl mx-auto space-y-4xl">
          {/* Section Header */}
          <div className="text-center space-y-md">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-white-marble">
              The Art & Soul of Kush
            </h2>
            <p className="text-body-md md:text-body-lg text-sand-gold">
              Ancient Nubian aesthetics inspire a modern visual language celebrating heritage and innovation.
            </p>
          </div>
          
          {/* Art Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2xl">
            {artGallery.map((art, idx) => (
              <div
                key={idx}
                className="bg-black-stone border-2 border-bronze p-2xl rounded-lg cursor-pointer transition-all duration-400 hover:border-sand-gold hover:shadow-luxury group animate-fade-in-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Art Image Area */}
                <div className="h-56 bg-black-stone/50 rounded-minimal mb-lg flex items-center justify-center group-hover:bg-black-stone/70 transition-colors duration-300">
                  <div className="text-5xl text-sand-gold/60 group-hover:text-sand-gold transition-colors duration-300">
                    {idx === 0 ? '🔷' : idx === 1 ? '👑' : idx === 2 ? '📜' : '🌸'}
                  </div>
                </div>
                
                {/* Art Title */}
                <h3 className="text-body-lg font-display font-bold text-sand-gold mb-sm">
                  {art.title}
                </h3>
                
                {/* Art Description */}
                <p className="text-body-sm text-white-marble/80 leading-relaxed">
                  {art.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: TIMELINE — ANCIENT TO FUTURE ===== */}
      <section className="w-full bg-gradient-to-r from-white-marble via-sand-gold/8 to-white-marble py-5xl md:py-5xl px-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <h2 className="text-display-md md:text-display-lg font-display font-bold text-dark-green text-center mb-5xl">
            Kingdom of Kush Through the Ages
          </h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-sand-gold z-0"></div>
            
            {/* Timeline Nodes - Responsive Layout */}
            <div className="lg:flex items-stretch justify-between gap-lg relative z-10">
              {timeline.map((era, idx) => (
                <div
                  key={idx}
                  className="flex-1 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Desktop: Node Circle on Timeline */}
                  <div className="hidden lg:flex justify-center mb-2xl">
                    <div className="w-6 h-6 rounded-full bg-sand-gold border-4 border-white-marble shadow-lg"></div>
                  </div>
                  
                  {/* Timeline Card */}
                  <div className="bg-white-marble border border-bronze/30 p-lg rounded-lg shadow-card hover:shadow-luxury transition-all duration-300">
                    <div className="text-label font-bold text-sand-gold uppercase mb-sm">
                      {era.period}
                    </div>
                    <h3 className="text-body-lg font-display font-bold text-dark-green mb-md">
                      {era.title}
                    </h3>
                    <p className="text-body-sm text-black-stone/75 leading-relaxed">
                      {era.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: KINGDOM ECOSYSTEM ===== */}
      <section className="w-full bg-dark-green text-white-marble py-5xl md:py-5xl px-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5xl items-center">
            {/* Left Column: Text */}
            <div className="space-y-2xl animate-fade-in-up">
              <div className="text-label font-semibold text-sand-gold uppercase tracking-wide">
                The Kingdom Ecosystem
              </div>
              
              <h2 className="text-display-md md:text-display-lg font-display font-bold text-white-marble">
                A Unified Vision Across the Nile
              </h2>
              
              <p className="text-body-md text-white-marble/90 leading-relaxed">
                Kingdom of Kush integrates tourism, services, culture, and governance into a cohesive ecosystem that empowers citizens, delights visitors, and attracts global investment.
              </p>
              
              {/* Ecosystem Elements */}
              <div className="space-y-lg pt-lg">
                {ecosystemElements.map((elem, idx) => (
                  <div key={idx} className="flex gap-md animate-slide-in-left" style={{ animationDelay: `${idx * 60}ms` }}>
                    <span className="text-sand-gold text-xl flex-shrink-0">⭐</span>
                    <div>
                      <h4 className="text-body-md font-semibold text-sand-gold">
                        {elem.title}
                      </h4>
                      <p className="text-body-sm text-white-marble/85">
                        {elem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-md pt-2xl">
                <Link
                  to="/#citizenship"
                  className="px-2xl py-md bg-sand-gold text-black-stone font-semibold text-body-md rounded-sm hover:bg-sand-gold/90 transition-colors duration-300 text-center shadow-card hover:shadow-luxury"
                >
                  Explore Destinations
                </Link>
                <Link
                  to="/citizenship"
                  className="px-2xl py-md border-2 border-sand-gold text-sand-gold font-semibold text-body-md rounded-sm hover:bg-sand-gold hover:text-black-stone transition-all duration-300 text-center"
                >
                  Apply for Citizenship
                </Link>
              </div>
            </div>
            
            {/* Right Column: Visual Map */}
            <div className="animate-scale-in h-96 md:h-full">
              <div className="bg-black-stone rounded-2xl p-4xl h-full flex items-center justify-center relative overflow-hidden shadow-luxury">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 right-5 w-24 h-24 border border-sand-gold rounded-full"></div>
                  <div className="absolute bottom-5 left-5 w-20 h-20 border border-bronze rounded-lg"></div>
                </div>
                
                <div className="relative z-10 text-center space-y-md">
                  <div className="text-5xl">🗺️</div>
                  <p className="text-display-sm font-display font-bold text-sand-gold">
                    Nile to World
                  </p>
                  <p className="text-body-sm text-white-marble/80">
                    Ancient Heritage. Modern Vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: ABOUT US FOOTER CTA ===== */}
      <section className="w-full bg-gradient-to-r from-dark-green to-black-stone py-5xl md:py-5xl px-container text-center text-white-marble">
        <div className="max-w-3xl mx-auto space-y-2xl">
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Ready to Join the Kingdom of Kush?
          </h2>
          
          <p className="text-body-lg md:text-body-lg text-sand-gold">
            Whether you're a traveler, investor, or future citizen, the kingdom awaits.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-md pt-2xl flex-wrap">
            <Link
              to="/#citizenship"
              className="px-3xl py-md bg-sand-gold text-black-stone font-semibold text-body-md rounded-sm hover:bg-sand-gold/90 transition-colors duration-300 shadow-card hover:shadow-luxury"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/citizenship"
              className="px-3xl py-md border-2 border-sand-gold text-sand-gold font-semibold text-body-md rounded-sm hover:bg-sand-gold hover:text-black-stone transition-all duration-300"
            >
              Explore Citizenship
            </Link>
            <Link
              to="/egov"
              className="px-3xl py-md bg-bronze text-white-marble font-semibold text-body-md rounded-sm hover:bg-bronze/90 transition-colors duration-300 shadow-card hover:shadow-luxury"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

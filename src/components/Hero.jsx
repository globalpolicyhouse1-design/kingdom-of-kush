import React from 'react'

export default function Hero({ title, subtitle, ctaLeft, ctaRight, mediaUrl = '/assets/doc_2025-12-02_02-34-50.mp4', ctaLeftLink = '#explore', ctaRightLink = '#plan' }){
  return (
    <header className="relative w-full h-[480px] sm:h-[85vh] lg:h-screen overflow-hidden cinematic-hero">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={mediaUrl} type="video/mp4" />
      </video>
      
      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-stone/20 via-black-stone/35 to-black-stone/45" />
      
      {/* Content Container */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-md sm:px-lg lg:px-2xl">
        <div className="max-w-4xl text-center space-y-md sm:space-y-lg lg:space-y-2xl animate-fade-in-up">
          {/* Main Title - Responsive sizing: 42px (mobile), 56px (tablet), 72px (desktop) */}
          <h1 className="text-[42px] sm:text-[56px] lg:text-display-xl font-display font-bold text-white-marble drop-shadow-2xl leading-tight">
            {title}
          </h1>
          
          {/* Subtitle - Responsive: 16px (mobile), 18px (tablet), 20px (desktop) */}
          <p className="text-body-md sm:text-body-lg text-sand-gold font-light leading-relaxed drop-shadow-lg">
            {subtitle}
          </p>
          
          {/* CTA Button Group - Column on mobile, row on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-md sm:gap-lg justify-center pt-md sm:pt-lg lg:pt-2xl">
            {/* Primary CTA - Full width on mobile */}
            <a 
              href={ctaLeftLink}
              className="btn-primary inline-flex items-center justify-center whitespace-nowrap hover:shadow-luxury-hover w-full sm:w-auto"
            >
              {ctaLeft}
            </a>
            
            {/* Secondary CTA - Full width on mobile */}
            <a 
              href={ctaRightLink}
              className="btn-secondary inline-flex items-center justify-center whitespace-nowrap w-full sm:w-auto"
            >
              {ctaRight}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator (Optional) */}
      <div className="absolute bottom-lg left-1/2 transform -translate-x-1/2 text-white-marble opacity-60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  )
}

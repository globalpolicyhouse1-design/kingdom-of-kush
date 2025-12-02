import React, { useState } from 'react'
import Card from '../components/Card'
import { events } from '../data/data'

export default function Events(){
  const [filter, setFilter] = useState({ location: 'All', category: 'All' })
  
  const locations = ['All', ...Array.from(new Set(events.map(e => e.location)))]
  const categories = ['All', 'Festival', 'Art', 'Music']
  
  const filtered = events.filter(e => 
    (filter.location === 'All' || e.location === filter.location) &&
    (filter.category === 'All' || e.category === filter.category)
  )
  
  return (
    <main>
      {/* Header */}
      <section className="py-4xl md:py-5xl px-container bg-gradient-to-b from-gold/10 to-offwhite">
        <div className="max-w-container mx-auto space-y-md">
          <h1 className="text-headline text-primary">Cultural Events</h1>
          <p className="text-body-lg text-primary/70 max-w-3xl">
            Discover upcoming celebrations of Nubian heritage, art, music, and cultural experiences across the Kingdom of Kush.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-lg md:py-2xl px-container bg-offwhite border-b border-gold/10 sticky top-[72px] z-40">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col sm:flex-row gap-lg items-start sm:items-center">
            <label className="text-label font-semibold text-primary">Filter:</label>
            
            <select 
              value={filter.location} 
              onChange={e => setFilter({ ...filter, location: e.target.value })} 
              className="px-md py-sm rounded-minimal border border-gold/30 bg-offwhite text-primary text-body-sm font-medium focus:outline-none focus:border-gold/60"
            >
              <optgroup label="Location">
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </optgroup>
            </select>
            
            <select 
              value={filter.category} 
              onChange={e => setFilter({ ...filter, category: e.target.value })} 
              className="px-md py-sm rounded-minimal border border-gold/30 bg-offwhite text-primary text-body-sm font-medium focus:outline-none focus:border-gold/60"
            >
              <optgroup label="Category">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </optgroup>
            </select>
            
            {(filter.location !== 'All' || filter.category !== 'All') && (
              <button 
                onClick={() => setFilter({ location: 'All', category: 'All' })}
                className="ml-auto text-body-sm text-gold hover:text-gold/80 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-section px-container">
        <div className="max-w-container mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2xl">
              {filtered.map((ev, idx) => (
                <div key={ev.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <article className="rounded-minimal overflow-hidden card-hover bg-offwhite rounded-card border border-gold/10 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 md:h-64 overflow-hidden bg-primary/10">
                      <img 
                        src={ev.image} 
                        alt={ev.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-lg md:p-2xl space-y-md flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-body-lg font-display font-semibold text-primary">{ev.title}</h3>
                        <div className="mt-md space-y-sm text-body-sm text-primary/70">
                          <p className="flex items-center gap-md">
                            <span>📅</span>
                            <span>{ev.date}</span>
                          </p>
                          <p className="flex items-center gap-md">
                            <span>📍</span>
                            <span>{ev.location}</span>
                          </p>
                        </div>
                      </div>
                      <a href="#" className="text-gold text-label font-semibold hover:text-gold/80 transition-colors pt-md">
                        View Details →
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4xl space-y-md">
              <div className="text-6xl">🎭</div>
              <h3 className="text-body-lg font-semibold text-black-stone">No Events Found</h3>
              <p className="text-body-md text-black-stone/70">Try adjusting your filters to see more events.</p>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-section px-container bg-dark-green/5 border-y border-sand-gold/10">
        <div className="max-w-container mx-auto">
          <h2 className="text-subheading mb-3xl text-black-stone">Event Locations</h2>
          <div className="rounded-minimal overflow-hidden h-96 bg-dark-green/10 border border-sand-gold/20 flex items-center justify-center">
            <div className="text-center space-y-md">
              <div className="text-6xl">🗺️</div>
              <p className="text-body-md text-black-stone/60">Interactive map showing event locations</p>
              <p className="text-label text-black-stone/50">[Map integration coming soon]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-section px-container bg-black-stone text-white-marble">
        <div className="max-w-container mx-auto text-center space-y-lg max-w-2xl mx-auto">
          <h2 className="text-headline text-white-marble">Never Miss an Event</h2>
          <p className="text-body-lg">
            Subscribe to our newsletter and get notified about upcoming cultural events and celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-md py-md rounded-minimal border border-sand-gold/30 bg-white-marble/10 text-white-marble placeholder:text-white-marble/50 focus:outline-none focus:border-sand-gold/60"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

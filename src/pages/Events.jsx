import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HighlightCard = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <motion.div
        className="h-72 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all relative overflow-hidden"
        whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-sand-gold/0 to-sand-gold/10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.4 }}
        />
        <div className="relative z-10 space-y-4">
          <img src={icon} alt={title} className="w-16 h-16 mx-auto rounded-lg object-cover shadow-lg" />
          <h3 className="text-2xl font-display font-bold text-primary">{title}</h3>
          <p className="text-primary/70 text-sm">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const GalleryImage = ({ index, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay }}
        onClick={() => setIsExpanded(true)}
        className="cursor-pointer"
      >
        <motion.div
          className="h-64 bg-gradient-to-br from-primary to-primary/70 rounded-xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img src={['https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'][index % 8]} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full"
            >
              <img src={`https://images.unsplash.com/photo-${[1552664730, 1552664730, 1552664730, 1552664730, 1552664730, 1552664730, 1552664730, 1552664730][index % 8]}-d307ca884978?w=800&h=800&fit=crop`} alt={`Event ${index + 1}`} className="w-full h-96 object-cover rounded-xl" />
              <p className="mt-6 text-primary font-display font-bold text-xl text-center">
                Event Moment {index + 1}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const SpeakerCard = ({ name, role, image, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <motion.div
        className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-5xl shadow-lg overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </motion.div>
      <h3 className="text-xl font-display font-bold text-primary">{name}</h3>
      <p className="text-sand-gold font-semibold text-sm">{role}</p>
    </motion.div>
  )
}

export default function Events(){
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.5, triggerOnce: true })

  const highlights = [
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Expert Speakers', description: 'African leaders, innovators, and diplomats' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Global Network', description: 'Connect with partners from 50+ countries' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'B2B Opportunities', description: 'Investment and partnership deals' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Knowledge Exchange', description: 'Workshops and learning sessions' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Cultural Showcase', description: 'Kush heritage and traditions' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Innovation Track', description: 'Future-focused solutions' }
  ]

  const speakers = [
    { name: 'Dr. Amara Okonkwo', role: 'African Union Ambassador', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { name: 'Karim El-Tahir', role: 'Tech Innovation Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Fatima Hassan', role: 'Cultural Preservation', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' }
  ]

  return (
    <main className="bg-white-marble overflow-hidden">
      {/* ===== HERO BANNER ===== */}
      <section className="relative min-h-screen flex items-center justify-center py-5xl px-container overflow-hidden" style={{ backgroundImage: 'url(/assets/images/kush-c.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/50" />

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white-marble font-semibold text-lg tracking-widest uppercase"
          >
            The Premier Summit
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-sand-gold  leading-tight"
          >
            US-Africa Forum 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-display text-white-marble"
          >
            Building Partnerships, Creating Opportunities
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white-marble/90 max-w-2xl mx-auto"
          >
            Three days of groundbreaking discussions, networking, and celebration of African excellence in the Kingdom of Kush.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sand-gold text-primary font-display font-bold text-lg rounded-lg shadow-lg"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-sand-gold text-sand-gold font-display font-bold text-lg rounded-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-10"
        >
          <svg className="w-6 h-6 text-sand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ===== ABOUT EVENT ===== */}
      <section className="py-5xl px-container bg-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            About the Forum
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-primary/80 leading-relaxed">
                The US-Africa Forum 2025 brings together leaders, innovators, and changemakers to explore transformative partnerships between the United States and African nations.
              </p>
              <p className="text-lg text-primary/80 leading-relaxed">
                Set in the vibrant Kingdom of Kush, this summit showcases the continent's potential while fostering meaningful connections that drive economic growth, technological innovation, and cultural exchange.
              </p>
              <div className="space-y-3 pt-4">
                {[
                  '3 Days of Immersive Programming',
                  '500+ Industry Leaders & Innovators',
                  '50+ Countries Represented',
                  'Live Performances & Cultural Events'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-center"
                  >
                    <span className="text-sand-gold font-bold">✓</span>
                    <span className="text-primary/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-8xl shadow-lg overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Forum Event" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== KEY HIGHLIGHTS ===== */}
      <section className="py-5xl px-container bg-gradient-to-b from-primary/5 to-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Event Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <HighlightCard key={idx} {...highlight} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED SPEAKERS ===== */}
      <section className="py-5xl px-container bg-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Featured Speakers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, idx) => (
              <SpeakerCard key={idx} {...speaker} delay={idx * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENT GALLERY ===== */}
      <section className="py-5xl px-container bg-gradient-to-b from-primary/5 to-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Event Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
              <GalleryImage key={idx} index={idx} delay={idx * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-5xl px-container bg-gradient-to-br from-primary to-primary/90">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white-marble">
            Join Us in Kush
          </h2>
          <p className="text-lg text-white-marble/90">
            Be part of Africa's most transformative summit. Limited seats available for early registrants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sand-gold text-primary font-display font-bold text-lg rounded-lg shadow-lg"
            >
              Register Now →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-sand-gold text-sand-gold font-display font-bold text-lg rounded-lg"
            >
              View Schedule
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

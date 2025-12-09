import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About({ lang }){
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <main className="bg-white-marble">
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center text-center py-20 px-4 relative"
        style={{
          backgroundImage: 'url(/assets/images/kush5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white-marble"
          >
            About
            <div className="text-5xl md:text-7xl font-display font-bold text-sand-gold">The Kingdom of Kush</div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white-marble font-bold"
          >
            A Living Civilization Forged Through Time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Link to="/join">
              <button
                className="bg-red-600 text-white-marble font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300 flex items-center gap-2 mx-auto"
              >
                Join The Kingdom
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR JOURNEY SECTION ===== */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white-marble">
              OUR JOURNEY - <span className="text-2xl md:text-3xl font-display font-bold text-sand-gold">The Birth of a Nation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Our Journey - Image with Text Overlay */}
            <div
              className="relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: 'url(/assets/images/kush6.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-display font-bold text-white-marble mb-4"
                >
                  About <span className="text-2xl md:text-3xl font-display font-bold text-sand-gold">The Kingdom of Kush</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-white-marble/90 leading-relaxed"
                >The Kingdom of Kush is not just a place; it is a promise. A promise of sovereignty, dignity, and prosperity for the global African family.
                   Under international law it is known as Terra Nullius, a “no man’s land.” It is a historically significant region which formerly has been part of the legendary Kingdom of Kush. It is now home to an inspiring resurrectional plan to create the next Dubai-like city in Kingdom of Kush. As a global social development project, Kingdom of Kush plans for innovative infrastructure, sustainable housing, renewable energy, clean water, and localized food security.
                </motion.p>
              </div>
            </div>

            {/* Video Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-lg bg-primary/10"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6x8LKuDrmEI"
                title="Kingdom of Kush Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== MORE INFORMATION SECTION ===== */}
      <section className="py-24 space-y-8 overflow-hidden">
        <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Vital Information About The Kingdom of Kush
            </h2>
            <p className="text-lg text-primary/70 mt-4 max-w-2xl mx-auto">
              More informatiom about the Kingdom of Kush
            </p>
        </div>

        <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Official Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Official Name</h3>
                  <p className="text-xl font-bold text-primary">Kingdom Of Kush</p>
                </motion.div>

                {/* Short Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Short Name</h3>
                  <p className="text-xl font-bold text-primary">Kush</p>
                </motion.div>

                {/* Head of State */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Head of State</h3>
                  <p className="text-xl font-bold text-primary">Queen Mother Dr. Delois Blakely</p>
                </motion.div>

                {/* Form of Government */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Form of Government</h3>
                  <p className="text-xl font-bold text-primary">Constitutional Monarchy</p>
                </motion.div>

                {/* Area */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Area</h3>
                  <p className="text-xl font-bold text-primary">2,060 km²</p>
                </motion.div>

                {/* Time Zone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Time Zone</h3>
                  <p className="text-xl font-bold text-primary">GMT +2</p>
                </motion.div>

                {/* Founder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Founder</h3>
                  <p className="text-xl font-bold text-primary">Citizens of the world</p>
                </motion.div>

                {/* Official Language */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Official Language</h3>
                  <p className="text-lg font-bold text-primary">Nubian, Arabic, English, French, Swahili</p>
                </motion.div>

                {/* Religion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Religion</h3>
                  <p className="text-xl font-bold text-primary">Non-Denominational, welcoming all faiths</p>
                </motion.div>

                {/* Motto */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">Motto</h3>
                  <p className="text-xl font-bold text-primary">Together We Prosper. The Future is Now.</p>
                </motion.div>

                {/* National Anthem */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-2 uppercase tracking-wide">National Anthem</h3>
                  <p className="text-xl font-bold text-primary">Kush National Anthem</p>
                </motion.div>

                {/* Official Crest */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold flex flex-col items-center"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-4 uppercase tracking-wide">Official Crest</h3>
                  <img
                    src="/assets/images/kush-emblem.png"
                    alt="Official Crest"
                    className="w-32 h-32 object-contain"
                  />
                </motion.div>

                {/* Flag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="bg-white-marble rounded-xl shadow-lg p-6 border-l-4 border-sand-gold flex flex-col items-center"
                >
                  <h3 className="text-sm font-semibold text-primary/60 mb-4 uppercase tracking-wide">Flag</h3>
                  <img
                    src="/assets/images/Kush-Flag.png"
                    alt="Kush Flag"
                    className="w-full h-32 object-contain"
                  />
                </motion.div>
            </div>
        </div>
      </section>      

      {/* ===== MAIN ABOUT NARRATIVE ===== */}
      <section className="py-5xl md:py-5xl px-container bg-white-marble">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* A Living Civilization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-sand-gold"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              A Living Civilization Forged Through Time
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-primary/80">
                The Kingdom of Kush stands as one of humanity's most enduring and resilient civilizations. For three millennia, Kush has been the cradle of remarkable achievement—a crucible where African excellence, spiritual depth, and cultural innovation have flourished. From the trading posts of Meroe to the temples of Napata, our ancestors built empires that rivaled Egypt, Persia, and Rome. Their legacy is not confined to history; it flows through our present and illuminates our future.
              </p>
              <p className="text-lg leading-relaxed text-primary/80">
                Today, the Kingdom of Kush is a modern nation state, born from a vision to revive, honor, and advance this glorious heritage while building a globally competitive, sovereign state rooted in the values of dignity, unity, prosperity, and service to humanity.
              </p>
            </div>
          </motion.div>

          {/* Humanitarian Pioneer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-sand-gold"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              A Humanitarian Pioneer: Three Decades of Transforming Lives
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-primary/80">
                Since its establishment, the Kingdom of Kush has committed itself to a sacred principle: that true national wealth is measured not in gold or monuments, but in the potential unlocked within every child.
              </p>
              <p className="text-lg leading-relaxed text-primary/80">
                For the past 30 years, the Kingdom has invested deeply in orphanages, educational institutions, and youth development programs across the African continent. What began as small acts of compassion has blossomed into a transformative movement. Thousands of children—orphaned, displaced, or marginalized—have passed through our care and emerged as doctors, engineers, teachers, diplomats, business leaders, and visionary changemakers.
              </p>
              <p className="text-lg leading-relaxed text-primary/80">
                These children—now grown into influential professionals and national leaders—are the true ambassadors of Kush. They carry our values of resilience, compassion, and excellence into every corner of Africa and beyond. They are proof that investment in human capital yields the greatest return: a generation capable of building the future.
              </p>
            </div>
          </motion.div>

          {/* Modern Kingdom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-sand-gold"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              A Modern Kingdom Built on Excellence
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-primary/80">
                The Kingdom of Kush today is a thriving democratic federation governed by constitutional principles, committed to transparency, rule of law, and citizen participation. Our government balances tradition with innovation, drawing wisdom from our ancestral councils while embracing modern democratic governance, technological advancement, and international cooperation.
              </p>
              <p className="text-lg leading-relaxed text-primary/80">
                The nation boasts a diverse economy spanning agriculture, heritage tourism, renewable energy, digital infrastructure, and manufacturing. Our strategic location across Sudan and Egypt, coupled with our control of vital Nile Valley resources and heritage sites, positions Kush as a cornerstone of regional stability and economic growth.
              </p>
              <p className="text-lg leading-relaxed text-primary/80">
                We are home to UNESCO World Heritage Sites, ancient pyramids, and spiritual centers that attract scholars, pilgrims, and travelers worldwide. Yet we do not dwell in the past. Kush is rapidly urbanizing, investing in smart cities, digital governance, and a knowledge economy that rivals emerging markets globally.
              </p>
            </div>
          </motion.div>

          {/* Visionary Future */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-sand-gold"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              A Visionary Future: Toward 2050 and Beyond
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-primary/80">
                The Kingdom of Kush envisions itself as a beacon of African leadership—a model of how heritage and modernity, tradition and innovation, and local wisdom and global engagement can coexist and thrive.
              </p>
              <p className="text-lg leading-relaxed text-primary/80 font-semibold">
                By 2050, Kush will be:
              </p>
              <ul className="space-y-3 text-lg text-primary/80 ml-4">
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span>A center of African excellence in education, health, and governance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span>A sustainable, technology-driven economy with universal digital access.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span>A global partner in climate action, cultural preservation, and diplomatic leadership.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span>A nation where every citizen—regardless of background—has access to opportunity and is empowered to reach their potential.</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-primary/80 pt-4">
                Our development agenda prioritizes sustainable growth, gender equality, youth empowerment, and the preservation of our cultural and natural heritage. We are building hospitals, universities, renewable energy plants, and research institutes. We are creating pathways for diaspora engagement and attracting global talent and investment.
              </p>
              <p className="text-lg leading-relaxed text-primary/80">
                We are a nation on the rise—grounded in our past, focused on our present, and confident in our future.
              </p>
            </div>
          </motion.div>

          {/* Together We Prosper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center pt-8 pb-4"
          >
            <p className="text-4xl md:text-5xl font-display font-bold text-sand-gold">
              Together We Prosper!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== KEY FACTS: OUR HERITAGE ===== */}
      <section className="py-5xl md:py-5xl px-container bg-primary/5 border-t border-gold/10">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Our Heritage: An Unbroken Lineage
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Historical Significance Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-sand-gold"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="text-sand-gold">⚡</span>
                Historical Significance
              </h3>
              <ul className="space-y-4 text-base text-primary/80">
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0 text-xl">—</span>
                  <span className="leading-relaxed">The Kingdom of Kush was one of the world's earliest great civilizations, flourishing for over 3,000 years (c. 2500 BCE – 350 CE).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0 text-xl">—</span>
                  <span className="leading-relaxed">Kush rivaled and sometimes exceeded Egypt in power, culture, and influence; several Kushite pharaohs ruled Egypt during the 25th Dynasty.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0 text-xl">—</span>
                  <span className="leading-relaxed">The great pyramids of Meroe, the temples of Napata, and the ancient city of Dongola stand as testaments to Kushite architectural and artistic genius.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0 text-xl">—</span>
                  <span className="leading-relaxed">Kush pioneered iron-working, developed its own written script (Meroitic), and created a sophisticated trade network spanning Africa, the Mediterranean, and Asia.</span>
                </li>
              </ul>
            </motion.div>

            {/* Modern Revival Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-sand-gold"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="text-sand-gold">✨</span>
                Modern Revival
              </h3>
              <ul className="space-y-4 text-base text-primary/80">
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0 text-xl">—</span>
                  <span className="leading-relaxed">In the late 20th and early 21st centuries, descendants of the Kushite peoples, united by a shared vision of cultural and political renewal, established the modern Kingdom of Kush.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0 text-xl">—</span>
                  <span className="leading-relaxed">The nation honors its ancestral legacy while embracing contemporary governance, human rights, and global cooperation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sand-gold font-bold flex-shrink-0 text-xl">—</span>
                  <span className="leading-relaxed">Today, the Kingdom of Kush is a UNESCO-recognized guardian of world heritage, working to preserve, study, and celebrate Kushite civilization for future generations.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== KEY FACTS: CURRENT KINGDOM ===== */}
      <section className="py-5xl md:py-5xl px-container bg-white-marble">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              The Current Kingdom: Who We Are Today
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Government & Structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Government & Structure</h3>
              <p className="text-base text-primary/80 leading-relaxed">
                The Kingdom of Kush operates as a constitutional democracy with a mixed parliamentary-presidential system. Leadership is grounded in democratic elections, transparent institutions, and respect for human rights and the rule of law. A council of regional governors, a national parliament, and an executive branch work in concert to serve the nation's diverse communities.
              </p>
            </motion.div>

            {/* Population & Diversity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Population & Diversity</h3>
              <p className="text-base text-primary/80 leading-relaxed">
                The Kingdom is home to over 15 million people, speaking dozens of languages and representing multiple ethnic, religious, and cultural traditions united by common citizenship and shared values. The national motto—<em>Unity in Diversity, Strength in Purpose</em>—reflects this commitment to inclusivity and collective progress.
              </p>
            </motion.div>

            {/* Economy & Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Economy & Resources</h3>
              <div className="space-y-3 text-base text-primary/80">
                <p><strong>Natural Resources:</strong> The Kingdom controls vast agricultural lands along the Nile Valley, significant mineral deposits (gold, phosphates, iron ore), and renewable energy potential (solar, wind, hydroelectric).</p>
                <p><strong>Key Industries:</strong> Heritage tourism, agriculture and agribusiness, renewable energy, digital services, manufacturing, and education.</p>
                <p><strong>GDP Growth:</strong> The Kingdom has achieved consistent annual growth of 6–8% over the past decade, with projections of 8–10% through 2035.</p>
              </div>
            </motion.div>

            {/* Strategic Assets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Strategic Assets</h3>
              <ul className="space-y-3 text-base text-primary/80">
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>UNESCO World Heritage Sites:</strong> Multiple pyramids, temples, and archaeological zones recognized globally.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>Nile Valley Control:</strong> A critical geopolitical and economic advantage for regional trade, water security, and energy.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>Digital Infrastructure:</strong> Rapid expansion of broadband, mobile networks, and smart city initiatives in urban centers.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>Human Capital:</strong> A young, educated population with growing technical and professional expertise.</span>
                </li>
              </ul>
            </motion.div>

            {/* International Alliances */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4">International Alliances</h3>
              <p className="text-base text-primary/80 leading-relaxed">
                Member of the African Union, United Nations, and numerous regional economic and cultural organizations. Strategic partnerships with nations across Africa, the Middle East, Europe, and Asia for trade, education, technology transfer, and cultural exchange. Active participant in global climate action, sustainable development, and humanitarian initiatives.
              </p>
            </motion.div>

            {/* Development Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Development Projects (Current & Near-Term)</h3>
              <ul className="space-y-3 text-base text-primary/80">
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>The Kush Digital Hub:</strong> A Pan-African technology and innovation center attracting startups, researchers, and global tech companies.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>The Nile Valley Regeneration Initiative:</strong> Infrastructure, agriculture, and environmental sustainability projects spanning both Sudan and Egypt borders.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>Universal Education & Health Access:</strong> A commitment to provide quality education and healthcare to all citizens by 2035.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                  <span><strong>Renewable Energy Grid:</strong> Transitioning 60% of national energy to renewable sources by 2030.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== KEY FACTS: FUTURE KINGDOM ===== */}
      <section className="py-5xl md:py-5xl px-container bg-primary/5 border-t border-gold/10">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              The Future Kingdom: Our Vision for Tomorrow
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2030 Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="text-sand-gold text-2xl">✓</span>
                2030 Milestones
              </h3>
              <ul className="space-y-3 text-base text-primary/80">
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                  <span>Universal primary and secondary education with 70% tertiary education enrollment.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                  <span>500,000+ new jobs in tech, renewable energy, and services sectors.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                  <span>50% reduction in poverty; universal basic healthcare.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                  <span>Kush recognized as a top-10 African investment destination.</span>
                </li>
              </ul>
            </motion.div>

            {/* 2050 Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold"
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="text-sand-gold text-2xl">→</span>
                2050 Vision
              </h3>
              <ul className="space-y-3 text-base text-primary/80">
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                  <span>A top-5 African economy with a diversified, knowledge-based workforce.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                  <span>A global leader in cultural heritage preservation and diaspora engagement.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                  <span>Carbon-neutral operations and a model for sustainable African development.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                  <span>A nation where every child—whether born into privilege or hardship—has the opportunity to thrive.</span>
                </li>
              </ul>
            </motion.div>

            {/* Strategic Pillars - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-sand-gold md:col-span-2"
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="text-sand-gold text-2xl">🎯</span>
                Strategic Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-primary/80">
                <p className="leading-relaxed"><strong>1. Human Capital:</strong> Investment in education, health, and skills training to unleash individual potential.</p>
                <p className="leading-relaxed"><strong>2. Sustainable Growth:</strong> Balancing economic expansion with environmental stewardship and social equity.</p>
                <p className="leading-relaxed"><strong>3. Technology & Innovation:</strong> Leapfrogging traditional development stages through digital transformation.</p>
                <p className="leading-relaxed"><strong>4. Cultural Stewardship:</strong> Preserving and celebrating Kushite heritage while fostering contemporary arts and innovation.</p>
                <p className="leading-relaxed md:col-span-2"><strong>5. Regional Leadership:</strong> Serving as a diplomatic bridge and development model for the African continent.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CALL-TO-ACTION SECTION ===== */}
      <section className="py-5xl md:py-5xl px-container bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto space-y-3xl text-center">
          <h2 className="text-display-md md:text-display-lg font-display font-bold text-white-marble">
            Join the Kingdom of Kush
          </h2>
          <p className="text-body-md md:text-body-lg text-sand-gold leading-relaxed max-w-3xl mx-auto">
            The Kingdom of Kush is not merely a nation; it is a movement—a rising tide of African excellence, humanitarian purpose, and boundless possibility.
          </p>
          <p className="text-body-md text-white-marble/90 leading-relaxed max-w-3xl mx-auto">
            Whether you are a global citizen seeking to invest in a stable, growing economy; an educator or healthcare professional called to serve a transforming nation; a diaspora member reconnecting with ancestral roots; or a young innovator ready to build the future—the Kingdom of Kush welcomes you.
          </p>

          <div className="space-y-2xl pt-lg">
            <div className="space-y-md">
              <h3 className="text-body-lg font-semibold text-sand-gold">Become a Kush Citizen</h3>
              <p className="text-body-md text-white-marble/90">
                Gain access to exclusive investment and entrepreneurship opportunities, educational scholarships and professional development pathways, cultural and spiritual experiences grounded in one of Africa's greatest civilizations, and a global community united by shared values and boundless ambition.
              </p>
            </div>

            <div className="space-y-md">
              <h3 className="text-body-lg font-semibold text-sand-gold">Partner with Kush</h3>
              <p className="text-body-md text-white-marble/90">
                Engage through trade, technology transfer, diplomatic relations, or collaborative development initiatives that benefit both our nations and the world.
              </p>
            </div>

            <div className="space-y-md">
              <h3 className="text-body-lg font-semibold text-sand-gold">Visit Kush</h3>
              <p className="text-body-md text-white-marble/90">
                Witness the majesty of ancient pyramids, the warmth of modern hospitality, and the energy of a nation rising.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-lg justify-center pt-3xl">
            <Link 
              to="/citizenship"
              className="rounded-lg px-2xl py-md bg-sand-gold text-primary font-semibold shadow-md hover:shadow-lg inline-block transition-all duration-300"
            >
              Become a Citizen
            </Link>
            <a 
              href="#contact"
              className="rounded-lg px-2xl py-md bg-transparent border-2 border-sand-gold text-sand-gold font-semibold shadow-md hover:shadow-lg inline-block transition-all duration-300"
            >
              Partner with Us
            </a>
          </div>

          {/* Closing Statement */}
          <div className="pt-3xl border-t border-sand-gold/20 space-y-md">
            <p className="text-body-lg font-semibold text-sand-gold">
              The Kingdom of Kush awaits.
            </p>
            <p className="text-display-md font-display font-bold text-white-marble">
              Together We Build. Together We Prosper. Together We Rise.
            </p>
            <p className="text-body-sm text-white-marble/70">
              Learn more about citizenship, investment, partnerships, and cultural immersion at our official portal. The future of Africa is being written here. Will you be part of it?
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

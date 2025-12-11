import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const WhyChooseSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                Why Choose Kingdom of Kush?
              </h2>
              <div className="w-20 h-1 bg-red-600" />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Discover the Kingdom of Kush, where ancient heritage meets modern innovation. Our nation offers unparalleled opportunities for growth, stability, and cultural enrichment. With a strategic location spanning Sudan and Egypt, we provide the gateway to African success.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Join thousands of citizens and investors who have already embraced this transformative opportunity. Experience world-class governance, sustainable development, and a thriving community that values progress and tradition equally.
            </p>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 uppercase text-sm tracking-wide"
              >
                Find Out More
              </motion.button>
            </Link>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/images/kush-s.jpg"
                alt="Kingdom of Kush"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

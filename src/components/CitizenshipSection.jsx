import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CitizenshipSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const images = [
    '/assets/images/kush-a.jpg',
    '/assets/images/kush-b.jpg',
    '/assets/images/kush-d.jpg',
    '/assets/images/kush-e.jpg'
  ];

  return (
    <section ref={ref} className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={img}
                  alt={`Citizenship ${idx + 1}`}
                  className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Text Column - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Citizenship Awaits
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Embrace a unique opportunity to become a citizen of the Kingdom of Kush. Whether through investment, heritage, or naturalization, we offer multiple pathways to citizenship that suit your circumstances and aspirations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our comprehensive citizenship programs are designed with modern families and entrepreneurs in mind. Access world-class services, secure your family's future, and join a vibrant community of global citizens committed to building a prosperous nation.
            </p>

            <Link to="/citizenship">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 uppercase text-sm tracking-wide"
              >
                Find Out More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CitizenshipSection;

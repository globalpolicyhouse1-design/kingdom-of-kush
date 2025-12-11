import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const SectionCard = ({ title, image, delay = 0, link = '/' }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  // Determine if this is the Events card to apply black background
  const isEventsCard = title === 'Events';

  return (
    <Link to={link} className="block">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Title Bar - Black for Events, Red for others */}
        <div className={`absolute top-0 left-0 px-4 py-3 text-white font-bold text-sm uppercase tracking-wider ${isEventsCard ? 'bg-black' : 'bg-red-600'}`}>
          {title}
        </div>
      </motion.div>
    </Link>
  );
};

export default SectionCard;

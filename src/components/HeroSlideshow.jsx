import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

const slides = [
  {
    image: '/assets/images/kush-p.jpg',
    pretext: "Welcome to the:",
    title: 'The Kingdom of Kush',
    subtitle: 'We invite you into a realm where ancient history and modern innovation converge.',
  },
  {
    image: '/assets/images/kush-s.jpg',
    pretext: "Together we can:",
    title: 'Explore the Golden Deserts',
    subtitle: 'Discover breathtaking landscapes and uncover the secrets of the sands.',
  },
  {
    image: '/assets/images/kush6.jpg',
    pretext: "Welcome to:",
    title: 'The Heart of Nubian Culture',
    subtitle: 'Immerse yourself in the rich traditions and vibrant heritage of the Kushite people.',
  },
  {
    image: '/assets/images/kush5.jpg',
    pretext: "Let us share and:",
    title: 'Build the Future of Africa Together',
    subtitle: 'Join a pioneering community dedicated to sustainable development and prosperity.',
  },
];

const HeroSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black-stone">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentImageIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentImageIndex].image}
            alt={slides[currentImageIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-3 items-center text-white px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="col-span-1 md:col-span-2 md:col-start-2 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7 }}
              className="max-w-full md:max-w-4xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-sand-gold leading-tight mb-4">
                <span className="text-2xl sm:text-3xl md:text-5xl text-white-marble">{slides[currentImageIndex].pretext}</span>
                <br />
                {slides[currentImageIndex].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white-marble font-bold max-w-full md:max-w-2xl mx-auto md:mx-0">
                {slides[currentImageIndex].subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="bg-red-600 text-white-marble font-bold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-1">Explore Kingdom</button>
                <button className="border-2 border-red-600 bg-transparent text-white-marble font-bold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 hover:border-red-700 transition-colors duration-300 flex items-center justify-center gap-1">
                  Plan Your Visit
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
      >
        <ChevronLeft size={24} sm:size={32} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
      >
        <ChevronRight size={24} sm:size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? 'bg-gold' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
    <div className="w-full h-8 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/kush-pattern-gold.jpg)' }} />
  </>
  );
};

export default HeroSlideshow;

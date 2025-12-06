import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#D4AF37] transition-all group"
    >
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform"
      />
      <h3 className="text-xl font-bold text-[#0B3D2E] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
        <span>Learn More</span>
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

const StatItem = ({ number, label, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay }}
      className="text-center"
    >
      <p className="text-4xl font-bold text-[#D4AF37] mb-2">{number}</p>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default function Government() {
  const { t } = useTranslation();
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const services = [
    {
      title: t('government.service_documents'),
      description: t('government.service_documents_desc'),
      icon: 'https://images.unsplash.com/photo-1507842745649-2a0729ef5ad0?w=400&h=300&fit=crop',
    },
    {
      title: t('government.service_infrastructure'),
      description: t('government.service_infrastructure_desc'),
      icon: 'https://images.unsplash.com/photo-1531291786318-2c0e32d1b1c8?w=400&h=300&fit=crop',
    },
    {
      title: t('government.service_citizenship'),
      description: t('government.service_citizenship_desc'),
      icon: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    },
    {
      title: t('government.service_economy'),
      description: t('government.service_economy_desc'),
      icon: 'https://images.unsplash.com/photo-1562869742-ca23182c4c13?w=400&h=300&fit=crop',
    },
  ];

  const stats = [
    { number: '500K+', label: t('government.stats_citizens') },
    { number: '8.5%', label: t('government.stats_gdp') },
    { number: '150+', label: t('government.stats_projects') },
    { number: '12', label: t('government.stats_regions') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        className="relative h-96 bg-gradient-to-r from-[#0B3D2E] to-[#1a5a48] text-white flex items-center"
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1494888286106-219d7e9398be?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('government.hero_title')}</h1>
            <p className="text-2xl text-gray-200 mb-6">{t('government.hero_subtitle')}</p>
            <p className="text-lg text-gray-300 max-w-2xl">{t('government.hero_description')}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0B3D2E] mb-4">{t('government.services_title')}</h2>
          <p className="text-gray-600 text-lg">{t('government.services_subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B3D2E] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-16 text-center"
          >
            {t('government.stats_title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StatItem key={idx} number={stat.number} label={stat.label} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#0B3D2E] mb-6">Ready to Get Started?</h2>
          <button className="bg-[#D4AF37] text-[#0B3D2E] px-8 py-3 rounded-lg font-bold hover:bg-[#c49a2a] transition-colors">
            {t('government.cta_learn_more')}
          </button>
        </motion.div>
      </section>
    </div>
  );
}

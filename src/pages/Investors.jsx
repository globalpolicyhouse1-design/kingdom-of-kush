import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const OpportunityCard = ({ tier, amount, roi, benefits, image, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-white border-l-4 border-[#D4AF37] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img
        src={image}
        alt={tier}
        className="w-full h-48 object-cover"
      />
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-[#0B3D2E]">{tier}</h3>
          <div className="bg-[#D4AF37] text-[#0B3D2E] px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
            <TrendingUp size={16} />
            <span>{roi}</span>
          </div>
        </div>

        <p className="text-3xl font-bold text-[#D4AF37] mb-6">{amount}</p>

        <ul className="space-y-3 mb-8">
          {benefits.split(',').map((benefit, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-gray-700 text-sm">
              <CheckCircle size={18} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <span>{benefit.trim()}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-[#D4AF37] text-[#0B3D2E] py-3 rounded-lg font-bold hover:bg-[#c49a2a] transition-colors flex items-center justify-center space-x-2">
          <span>Learn More</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default function Investors() {
  const { t } = useTranslation();
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const opportunities = [
    {
      tier: t('investors.opportunity_tier1'),
      amount: t('investors.opportunity_tier1_amount'),
      roi: t('investors.opportunity_tier1_roi'),
      benefits: t('investors.opportunity_tier1_benefits'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    },
    {
      tier: t('investors.opportunity_tier2'),
      amount: t('investors.opportunity_tier2_amount'),
      roi: t('investors.opportunity_tier2_roi'),
      benefits: t('investors.opportunity_tier2_benefits'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
    },
    {
      tier: t('investors.opportunity_tier3'),
      amount: t('investors.opportunity_tier3_amount'),
      roi: t('investors.opportunity_tier3_roi'),
      benefits: t('investors.opportunity_tier3_benefits'),
      image: 'https://images.unsplash.com/photo-1507842745649-2a0729ef5ad0?w=600&h=400&fit=crop',
    },
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center gap-8"
          >
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">{t('investors.hero_title')}</h1>
              <p className="text-2xl text-gray-200 mb-4">{t('investors.hero_subtitle')}</p>
              <p className="text-lg text-gray-300">{t('investors.hero_description')}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Buttons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto flex gap-4 justify-center flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-[#0B3D2E] px-8 py-3 rounded-lg font-bold hover:bg-[#c49a2a] transition-colors"
          >
            {t('investors.cta_primary')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#D4AF37] text-[#0B3D2E] px-8 py-3 rounded-lg font-bold hover:bg-[#D4AF37] hover:text-[#0B3D2E] transition-colors"
          >
            {t('investors.cta_secondary')}
          </motion.button>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0B3D2E] mb-4">{t('investors.opportunity_title')}</h2>
          <p className="text-gray-600 text-lg">Choose the investment tier that matches your goals</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, idx) => (
            <OpportunityCard
              key={idx}
              tier={opp.tier}
              amount={opp.amount}
              roi={opp.roi}
              benefits={opp.benefits}
              image={opp.image}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B3D2E] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">{t('investors.cta_section_title')}</h2>
            <p className="text-gray-300 mb-8 text-lg">{t('investors.cta_section_desc')}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-[#0B3D2E] px-8 py-3 rounded-lg font-bold hover:bg-[#c49a2a] transition-colors"
            >
              {t('investors.cta_contact')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

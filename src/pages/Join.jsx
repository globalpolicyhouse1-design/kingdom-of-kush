import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

const joinSchema = z.object({
  name: z.string().min(2, 'form_required'),
  email: z.string().email('error_email'),
  country: z.string().min(2, 'error_required'),
  investment: z.string().refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0, 'error_investment'),
  message: z.string().min(20, 'error_message_length'),
  terms: z.boolean().refine(v => v === true, 'error_terms'),
});

export default function Join() {
  const { t } = useTranslation();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(joinSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Singapore'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        className="relative h-80 bg-gradient-to-r from-[#0B3D2E] to-[#1a5a48] text-white flex items-center"
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('join.hero_title')}</h1>
            <p className="text-2xl text-gray-200">{t('join.hero_subtitle')}</p>
            <p className="text-lg text-gray-300 mt-4">{t('join.hero_description')}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-[#0B3D2E] mb-2">{t('join.form_title')}</h2>
          <p className="text-gray-600 mb-8">{t('join.form_subtitle')}</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                {t('join.form_name')}
              </label>
              <input
                {...register('name')}
                type="text"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <div className="flex items-center space-x-2 text-red-500 text-sm mt-2">
                  <AlertCircle size={16} />
                  <span>{t('join.error_required')}</span>
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                {t('join.form_email')}
              </label>
              <input
                {...register('email')}
                type="email"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <div className="flex items-center space-x-2 text-red-500 text-sm mt-2">
                  <AlertCircle size={16} />
                  <span>{t('join.error_email')}</span>
                </div>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                {t('join.form_country')}
              </label>
              <select
                {...register('country')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition ${
                  errors.country ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && (
                <div className="flex items-center space-x-2 text-red-500 text-sm mt-2">
                  <AlertCircle size={16} />
                  <span>{t('join.error_required')}</span>
                </div>
              )}
            </div>

            {/* Investment Amount */}
            <div>
              <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                {t('join.form_investment')}
              </label>
              <input
                {...register('investment')}
                type="number"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition ${
                  errors.investment ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="50000"
              />
              {errors.investment && (
                <div className="flex items-center space-x-2 text-red-500 text-sm mt-2">
                  <AlertCircle size={16} />
                  <span>{t('join.error_investment')}</span>
                </div>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                {t('join.form_message')}
              </label>
              <textarea
                {...register('message')}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell us why you're interested..."
              />
              {errors.message && (
                <div className="flex items-center space-x-2 text-red-500 text-sm mt-2">
                  <AlertCircle size={16} />
                  <span>{t('join.error_message_length')}</span>
                </div>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-3">
              <input
                {...register('terms')}
                type="checkbox"
                className="mt-1 w-5 h-5 text-[#D4AF37] rounded focus:ring-2 focus:ring-[#D4AF37]"
              />
              <label className="text-sm text-gray-700">
                {t('join.form_terms')}
              </label>
              {errors.terms && (
                <div className="flex items-center space-x-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D4AF37] text-[#0B3D2E] py-3 rounded-lg font-bold hover:bg-[#c49a2a] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? t('join.form_submitting') : t('join.form_submit')}
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            >
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-2">
                {t('join.success_title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('join.success_message')}
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="bg-[#D4AF37] text-[#0B3D2E] px-6 py-2 rounded-lg font-bold hover:bg-[#c49a2a] transition-colors"
              >
                {t('join.success_button')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const NewsCard = ({ title, excerpt, image, date, author, category, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#0B3D2E] mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>

        <div className="space-y-2 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span>{author}</span>
          </div>
        </div>

        <button className="text-[#D4AF37] font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
          <span>Read More</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default function Media() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const articles = [
    {
      id: 1,
      title: 'Kingdom Launches New Digital Citizenship Portal',
      excerpt: 'Revolutionary online platform streamlines citizenship application process for international applicants.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      date: 'Dec 1, 2025',
      author: 'Sarah Johnson',
      category: 'Politics',
    },
    {
      id: 2,
      title: 'Economic Growth Reaches 8.5% Year-Over-Year',
      excerpt: 'Strong investment in infrastructure and technology sectors drives remarkable economic expansion.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      date: 'Nov 28, 2025',
      author: 'Michael Chen',
      category: 'Economy',
    },
    {
      id: 3,
      title: 'Infrastructure Megaproject Reaches Major Milestone',
      excerpt: 'Pan-African railway network expansion project exceeds completion targets ahead of schedule.',
      image: 'https://images.unsplash.com/photo-1531291786318-2c0e32d1b1c8?w=600&h=400&fit=crop',
      date: 'Nov 25, 2025',
      author: 'James Williams',
      category: 'Development',
    },
    {
      id: 4,
      title: 'Ancient Kush Heritage Sites Recognized by UNESCO',
      excerpt: 'Three major historical sites receive World Heritage status, boosting cultural tourism.',
      image: 'https://images.unsplash.com/photo-1507842745649-2a0729ef5ad0?w=600&h=400&fit=crop',
      date: 'Nov 20, 2025',
      author: 'Emma Davis',
      category: 'Culture',
    },
    {
      id: 5,
      title: 'Government Announces Green Energy Initiative',
      excerpt: 'Major investment in renewable energy aims to achieve carbon neutrality by 2035.',
      image: 'https://images.unsplash.com/photo-1491933382519-c1e9a475ccf5?w=600&h=400&fit=crop',
      date: 'Nov 18, 2025',
      author: 'David Smith',
      category: 'Development',
    },
    {
      id: 6,
      title: 'Youth Innovation Summit Attracts Global Entrepreneurs',
      excerpt: 'Kingdom hosts largest startup conference in East Africa with over 10,000 attendees.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      date: 'Nov 15, 2025',
      author: 'Lisa Anderson',
      category: 'Politics',
    },
  ];

  const categories = ['all', 'politics', 'economy', 'development', 'culture'];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             article.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
          backgroundImage: 'url(https://images.unsplash.com/photo-1553729160-e76214b14667?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('media.hero_title')}</h1>
            <p className="text-2xl text-gray-200">{t('media.hero_subtitle')}</p>
            <p className="text-lg text-gray-300 mt-4">{t('media.hero_description')}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={t('media.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] text-[#0B3D2E]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? t('media.filter_all') : t(`media.filter_${category}`)}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <p className="text-sm text-gray-600">
            {t('media.pagination_showing')} {filteredArticles.length} {t('media.pagination_of')} {articles.length} articles
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <NewsCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                date={article.date}
                author={article.author}
                category={article.category}
                delay={idx * 0.1}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-600">No articles found matching your search.</p>
          </motion.div>
        )}
      </section>

      {/* Load More */}
      {filteredArticles.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#D4AF37] text-[#0B3D2E] px-8 py-3 rounded-lg font-bold hover:bg-[#D4AF37] hover:text-[#0B3D2E] transition-colors"
          >
            {t('media.pagination_load_more')}
          </motion.button>
        </section>
      )}
    </div>
  );
}

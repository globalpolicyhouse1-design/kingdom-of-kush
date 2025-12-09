import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Briefcase, Users, ShieldCheck, Landmark, BarChart, Leaf } from 'lucide-react';

const StatCard = ({ icon, value, label, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
    >
      <div className="text-sand-gold mb-3 w-12 h-12 mx-auto flex items-center justify-center">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white-marble">{value}</div>
      <p className="text-sand-gold/80">{label}</p>
    </motion.div>
  );
};

const PathwayCard = ({ title, description, image }) => {
  return (
    <Link to="/contact" className="bg-white-marble rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-primary/70 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};



const BenefitHighlight = ({ icon, title, children, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-sand-gold/20 text-sand-gold mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-primary/70 max-w-sm mx-auto">{children}</p>
    </motion.div>
  );
};

export default function Citizenship() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const pathways = [
    {
      title: 'E-RESIDENCY (DIGITAL BUSINESS CITIZENSHIP) - $500',
      description: 'Includes: -Digital business license, Mrechant registration, Access to e-government commerce portals, API credentials for government marketplace, Basic NIN-lite verification. Not a travel document ',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
    },
    {
      title: 'E-CITIZENSHIP - $50,000',
      description: 'Includes: Digital ID, Prefabricated home (1BR) delivery process, Access to investment ecosystem, National services integration (education, business, land leasing).',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    },
    {
      title: 'FULL CITIZENSHIP - $120,000',
      description: 'Includes: Full rights under Citizenship Act, Passport eligibility, 1-bedroom assigned national prefabricated home, Entry in National Population Registry, Access to diplomatic protection, Ability to apply for government roles',
      image: 'https://images.unsplash.com/photo-1600880292203-942bb68b2434?w=400&h=300&fit=crop',
    },
    {
      title: 'CITIZENSHIP BY INVESTMENT (CBI)',
      description: 'Investment Channels: Real estate development fund, Sovereign bond purchase, National industry partnerships (gold, diamond, oil, gas, marble mines, Approved economic empowerment programs. REQUIRES: proof of funds, Enhance due diligence (EDD), Source of wealth (SOW) letter.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      title: 'CITIZENSHIP BY NATURALIZATION',
      description: 'Requirements: 5 years documented residency, NIN with verified residency activity, Language test (basic Kushite English), Community participation documentation.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
    },
    {
      title: 'CITIZENSHIP BY MARRIAGE',
      description: 'Requirements: 3-year marriage, Joint household proof, No criminal record, Verification interview.  ',
      image: 'https://images.unsplash.com/photo-1530046473562-581a8b38a7c1?w=400&h=300&fit=crop'
    },
    {
        title: 'DIASPORA CITIZENSHIP (HERITAGE LINE)',
        description: 'Requirements: Genealogical evidence, Cultural/ancestral documentation, DNA verification optional, not mandatory.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
        title: 'EXCEPTIONAL MERIT TRACK',
        description: 'Offered to: Celebrities, Athletes, Scientists, Diplomats, High-impact Investors, Notable contributions to Kush global image.',
        image: 'https://images.unsplash.com/photo-1517898717284-9330d2b36a7a?w=400&h=300&fit=crop'
    },
    {
        title: 'MINOR & DEPENDENT CITIZENSHIP',
        description: 'Parent and guardian verification required.',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop'
    },
    {
        title: 'OTHER CITIZENSHIP PATHWAYS',
        description: 'Explore other ways to attain citizenship in The Kingdom of Kush.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop'
    }
  ];
  
  const pathwaysRow1 = pathways.slice(0, 5);
  const pathwaysRow2 = pathways.slice(6, 10);

  const partnerNations = [
    'United Arab Emirates', 'Singapore', 'South Korea', 'Nigeria', 'Kenya',
    'Brazil', 'India', 'Germany', 'Turkey', 'South Africa', 'Egypt',
    'Ethiopia', 'Ghana', 'Rwanda', 'Malaysia'
  ];

  return (
    <main className="bg-primary/5">
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center text-center py-20 px-4 relative"
        style={{
          backgroundImage: 'url(/assets/images/kush4.jpg)',
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
            Become a Citizen of
            <div className="text-5xl md:text-7xl font-display font-bold text-sand-gold">The Kingdom of Kush</div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white-marble font-bold"
          >
            It's time to come home!.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/join">
              <button
                className="bg-red-600 text-white-marble font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300 flex items-center gap-2 mx-auto"
              >
                Start Application <ChevronRight size={22} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="bg-primary py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Award size={36} />}
            value="3o+"
            label="develop over 30 million hectares of land"
            delay={0.1}
          />
          <StatCard
            icon={<Briefcase size={36} />}
            value="25+"
            label="projects span over 25 countries"
            delay={0.3}
          />
          <StatCard
            icon={<Users size={36} />}
            value="7M+"
            label="Over 7 million citizenship applicants"
            delay={0.5}
          />
        </div>
      </section>

      {/* ===== CITIZENSHIP PATHWAYS SECTION ===== */}
      <section className="py-24 space-y-8 overflow-hidden">
        <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Pathways to Citizenship
            </h2>
            <p className="text-lg text-primary/70 mt-4 max-w-2xl mx-auto">
              We offer several routes to becoming a citizen, designed to attract talent, investment, and innovation.
            </p>
        </div>

        <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {pathwaysRow1.map((pathway, index) => (
                    <PathwayCard key={`row1-${index}`} {...pathway} />
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {pathwaysRow2.map((pathway, index) => (
                    <PathwayCard key={`row2-${index}`} {...pathway} />
                ))}
            </div>
        </div>
      </section>

      {/* ===== WHY BECOME A CITIZEN SECTION ===== */}
      <section className="py-24 px-4 bg-white-marble">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Why Become a Citizen of Kush?</h2>
            <p className="text-lg text-primary/70 mt-4 max-w-3xl mx-auto">
              Joining the Kingdom of Kush means more than a passport; it's an investment in a prosperous future, a rich cultural heritage, and a network of global opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            <BenefitHighlight icon={<BarChart size={32} />} title="Economic Growth" delay={0.1}>
              A rapidly growing economy with business-friendly policies and access to emerging African markets.
            </BenefitHighlight>
            <BenefitHighlight icon={<Landmark size={32} />} title="Rich Heritage" delay={0.2}>
              Connect with a deep, ancient history and a vibrant, modern culture that celebrates its roots.
            </BenefitHighlight>
            <BenefitHighlight icon={<Leaf size={32} />} title="Innovation Hub" delay={0.3}>
              A nation committed to technological advancement, sustainable development, and forward-thinking solutions.
            </BenefitHighlight>
            <BenefitHighlight icon={<ShieldCheck size={32} />} title="Security & Stability" delay={0.4}>
              A safe and stable environment for you, your family, and your investments.
            </BenefitHighlight>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Global Partner Network</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-4xl mx-auto">
              {partnerNations.map((nation, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-primary/60 font-medium text-lg"
                >
                  {nation}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <Link to="/join">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(220, 53, 69, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300"
              >
                Claim Your Citizenship
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
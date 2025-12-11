import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterColumn = ({ title, items, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-gold font-bold text-base uppercase tracking-wide">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx}>
            {item.href ? (
              <Link
                to={item.href}
                className="text-white/80 text-sm hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <p className="text-white/80 text-sm">{item.label}</p>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FooterColumn;

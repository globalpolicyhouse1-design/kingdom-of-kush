import React from 'react';
import SectionCard from './SectionCard';

const SectionCardGrid = ({ cards = [] }) => {
  const defaultCards = [
    {
      id: 1,
      title: 'Citizenship',
      image: '/assets/images/kush-q.jpg',
      link: '/citizenship'
    },
    {
      id: 2,
      title: 'Events',
      image: '/assets/images/kush-c.jpg',
      link: '/events'
    },
    {
      id: 3,
      title: 'E-Government',
      image: '/assets/images/kush-p.jpg',
      link: '/egov'
    }
  ];

  const displayCards = cards.length > 0 ? cards : defaultCards;

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCards.map((card, index) => (
            <SectionCard
              key={card.id}
              title={card.title}
              image={card.image}
              link={card.link}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCardGrid;

import React from 'react';

const DecorativeBorder = ({ position = 'top' }) => {
  return (
    <div
      className={`w-full h-8 relative overflow-hidden ${
        position === 'bottom' ? 'order-last' : ''
      }`}
      style={{
        backgroundImage: 'url(/assets/images/kush-gb.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay for opacity adjustment if needed */}
      <div className="absolute inset-0 bg-black/0" />
    </div>
  );
};

export default DecorativeBorder;

import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-vercel-gray-900 border border-vercel-gray-800 rounded-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
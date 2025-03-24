import React from 'react';

const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-vercel-gray-700 text-vercel-gray-300',
    success: 'bg-green-900 text-green-300',
    error: 'bg-red-900 text-red-300',
    warning: 'bg-yellow-900 text-yellow-300',
    info: 'bg-blue-900 text-blue-300',
  };
  
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
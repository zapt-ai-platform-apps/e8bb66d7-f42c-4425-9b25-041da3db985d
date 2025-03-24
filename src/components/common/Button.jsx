import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer';
  
  const variants = {
    primary: 'bg-vercel-blue hover:bg-blue-700 text-white',
    secondary: 'bg-vercel-gray-700 hover:bg-vercel-gray-600 text-white',
    ghost: 'bg-transparent hover:bg-vercel-gray-800 text-vercel-gray-300',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
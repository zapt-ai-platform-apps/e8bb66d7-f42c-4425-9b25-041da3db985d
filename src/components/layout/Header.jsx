import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b border-vercel-gray-800 bg-vercel-black">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-vercel-white font-bold text-xl">
            <svg height="26" viewBox="0 0 75 65" fill="white" className="h-6">
              <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
            </svg>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-vercel-gray-400 hover:text-vercel-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <div className="relative">
            <button className="w-8 h-8 rounded-full bg-vercel-gray-700 flex items-center justify-center text-sm font-medium cursor-pointer">
              U
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-vercel-gray-800 py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vercel-gray-400 hover:text-vercel-white transition-colors text-sm"
          >
            Made on ZAPT
          </a>
        </div>
        <div className="text-vercel-gray-400 text-sm">
          © {new Date().getFullYear()} Vercel Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
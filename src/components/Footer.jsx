import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 z-10">
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-panel backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:shadow-glow transition-all duration-300 cursor-pointer border border-dark-600/50 group"
      >
        <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-secondary-300 transition-all">
          Made on ZAPT
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-primary-400 transform transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </footer>
  );
}
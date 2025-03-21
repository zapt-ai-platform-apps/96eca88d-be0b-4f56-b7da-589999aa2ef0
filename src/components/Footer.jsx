import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 text-sm text-gray-400 bg-dark-600/80 px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
      <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-primary-400 transition-colors">
        Made on ZAPT
      </a>
    </footer>
  );
}
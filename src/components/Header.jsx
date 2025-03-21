import React from 'react';

export default function Header() {
  return (
    <header className="mb-8 text-center">
      <div className="relative inline-block mb-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">ToDos</h1>
        <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      </div>
      <p className="text-gray-400 mb-3 text-lg">Your tasks, beautifully organized</p>
      <div className="flex justify-center">
        <div className="glass-panel rounded-full px-4 py-1.5 inline-flex items-center text-xs text-gray-300 transform transition-all duration-300 hover:scale-102">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Now with tasks that persist and stay organized</span>
        </div>
      </div>
    </header>
  );
}
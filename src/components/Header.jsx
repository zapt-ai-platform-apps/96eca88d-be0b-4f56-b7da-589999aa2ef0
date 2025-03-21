import React from 'react';

export default function Header() {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">ToDos</h1>
      <p className="text-gray-400">Your tasks, beautifully organized</p>
      <div className="flex justify-center mt-3">
        <div className="bg-dark-700/50 rounded-full px-4 py-1 inline-flex items-center text-xs text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Now with tasks that persist and stay organized</span>
        </div>
      </div>
    </header>
  );
}
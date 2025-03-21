import React from 'react';

export default function Header() {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">ToDos</h1>
      <p className="text-gray-400">Your tasks, beautifully organized</p>
    </header>
  );
}
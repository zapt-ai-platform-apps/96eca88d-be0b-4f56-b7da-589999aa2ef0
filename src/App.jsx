import React from 'react';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-2xl mx-auto p-4 h-full">
        <h1 className="text-3xl font-bold mb-4">ToDos</h1>
        <TodoList />
      </div>
      <footer className="fixed bottom-4 right-4 text-sm text-gray-600">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}
import React from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light to-background-dark text-gray-200 font-sans">
      <div className="max-w-2xl mx-auto p-6 py-12 h-full">
        <Header />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}
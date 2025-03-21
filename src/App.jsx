import React, { useEffect } from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';
import KeyboardShortcuts from './components/KeyboardShortcuts';

export default function App() {
  // Setup keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // '?' key to show shortcuts dialog
      if (e.key === '?' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        document.querySelector('[aria-label="Show keyboard shortcuts"]')?.click();
      }
      
      // Ctrl+F to focus search
      if (e.key === 'f' && (e.ctrlKey || e.metaKey) && !e.altKey) {
        e.preventDefault();
        document.querySelector('input[placeholder="Search tasks..."]')?.focus();
      }
      
      // Escape to clear active input or search
      if (e.key === 'Escape') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT') {
          if (activeElement.value) {
            activeElement.value = '';
            // Dispatch input event to trigger React state updates
            activeElement.dispatchEvent(new Event('input', { bubbles: true }));
          } else {
            activeElement.blur();
          }
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light via-background to-background-dark text-gray-200 font-sans flex flex-col">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 py-8 sm:py-12 w-full flex-grow">
        <Header />
        <TodoList />
      </div>
      <Footer />
      <KeyboardShortcuts />
    </div>
  );
}
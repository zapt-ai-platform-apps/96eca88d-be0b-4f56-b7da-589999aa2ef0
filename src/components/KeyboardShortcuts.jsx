import React, { useState } from 'react';

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);
  
  const shortcuts = [
    { key: 'Enter', description: 'Add new task' },
    { key: 'Ctrl+F', description: 'Focus search' },
    { key: 'Esc', description: 'Clear search/selection' },
    { key: '?', description: 'Show keyboard shortcuts' }
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 w-8 h-8 rounded-full bg-dark-600/80 text-gray-400 flex items-center justify-center shadow-md backdrop-blur-sm hover:bg-dark-500 transition-colors cursor-pointer"
        aria-label="Show keyboard shortcuts"
      >
        ?
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-dark-600 rounded-xl shadow-xl p-6 w-full max-w-md animate-bounce-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-200">Keyboard Shortcuts</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex justify-between items-center p-2 rounded hover:bg-dark-500">
                  <span className="text-gray-300">{shortcut.description}</span>
                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded">{shortcut.key}</kbd>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
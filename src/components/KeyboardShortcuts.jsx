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
        className="fixed bottom-4 left-4 w-10 h-10 rounded-full glass-panel text-gray-400 flex items-center justify-center shadow-lg backdrop-blur-md hover:shadow-glow hover:text-primary-400 transition-all duration-300 cursor-pointer border border-dark-600/50 z-10"
        aria-label="Show keyboard shortcuts"
      >
        ?
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
          <div 
            className="glass-panel rounded-xl shadow-lg p-6 w-full max-w-md animate-bounce-in border border-dark-500/50"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Keyboard Shortcuts
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer p-1 hover:bg-dark-500 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex justify-between items-center p-2 rounded hover:bg-dark-500 transition-colors group">
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">{shortcut.description}</span>
                  <kbd className="px-2.5 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 rounded shadow-sm group-hover:bg-gray-100 transition-colors">{shortcut.key}</kbd>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors cursor-pointer shadow-button"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
import React from 'react';

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center glass-panel rounded-lg">
      <div className="w-20 h-20 mb-5 text-primary-500/80 animate-pulse-subtle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-gray-200 mb-2">No tasks yet</h3>
      <p className="text-gray-400 max-w-xs leading-relaxed">Add your first task above to get started on your productivity journey.</p>
      <div className="mt-4 pt-4 border-t border-dark-500/50 w-32">
        <div className="text-xs text-gray-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-primary-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Get things done</span>
        </div>
      </div>
    </div>
  );
}
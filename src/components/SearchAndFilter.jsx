import React from 'react';

export default function SearchAndFilter({ 
  filter, 
  setFilter, 
  totalCount, 
  activeCount, 
  completedCount,
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption
}) {
  return (
    <div className="mb-4 space-y-3">
      <div className="bg-dark-700 p-2 rounded-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 w-full bg-dark-600 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-400 box-border"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
        <div className="flex gap-2 text-sm">
          <button 
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded transition-colors ${filter === 'all' ? 'bg-dark-500 text-primary-400' : 'text-gray-400 hover:text-gray-300'} cursor-pointer`}
          >
            All ({totalCount})
          </button>
          <button 
            onClick={() => setFilter('active')}
            className={`px-3 py-1.5 rounded transition-colors ${filter === 'active' ? 'bg-dark-500 text-primary-400' : 'text-gray-400 hover:text-gray-300'} cursor-pointer`}
          >
            Active ({activeCount})
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={`px-3 py-1.5 rounded transition-colors ${filter === 'completed' ? 'bg-dark-500 text-primary-400' : 'text-gray-400 hover:text-gray-300'} cursor-pointer`}
          >
            Completed ({completedCount})
          </button>
        </div>
        
        <div className="text-sm">
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-dark-600 text-gray-300 border border-dark-500 rounded-lg px-3 py-1.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-400 box-border"
          >
            <option value="newest">Sort by newest</option>
            <option value="oldest">Sort by oldest</option>
            <option value="dueDate">Sort by due date</option>
            <option value="priority">Sort by priority</option>
            <option value="alphabetical">Sort alphabetically</option>
          </select>
        </div>
      </div>
    </div>
  );
}
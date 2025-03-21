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
    <div className="mb-5 space-y-3">
      <div className="glass-panel p-2 rounded-lg shadow-inner-glow">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 w-full bg-dark-600/80 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-400 focus:shadow-glow box-border backdrop-blur-xs"
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
      
      <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:items-center">
        <div className="flex gap-2 text-sm">
          <button 
            onClick={() => setFilter('all')}
            className={`filter-button ${filter === 'all' ? 'filter-button-active' : 'filter-button-inactive'}`}
          >
            All ({totalCount})
          </button>
          <button 
            onClick={() => setFilter('active')}
            className={`filter-button ${filter === 'active' ? 'filter-button-active' : 'filter-button-inactive'}`}
          >
            Active ({activeCount})
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={`filter-button ${filter === 'completed' ? 'filter-button-active' : 'filter-button-inactive'}`}
          >
            Completed ({completedCount})
          </button>
        </div>
        
        <div className="text-sm">
          <div className="relative">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none glass-panel text-gray-300 rounded-lg px-9 py-1.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-400 box-border pr-10"
            >
              <option value="newest">Sort by newest</option>
              <option value="oldest">Sort by oldest</option>
              <option value="dueDate">Sort by due date</option>
              <option value="priority">Sort by priority</option>
              <option value="alphabetical">Sort alphabetically</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
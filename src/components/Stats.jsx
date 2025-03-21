import React from 'react';

export default function Stats({ todos }) {
  // Count tasks by priority
  const priorityCounts = todos.reduce((acc, todo) => {
    const priority = todo.priority || 'none';
    acc[priority] = (acc[priority] || 0) + 1;
    return acc;
  }, {});

  // Count tasks by completion status
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Count tasks by due date status
  const overdueTasks = todos.filter(todo => {
    if (!todo.dueDate || todo.completed) return false;
    return new Date(todo.dueDate) < new Date();
  }).length;

  const dueTodayTasks = todos.filter(todo => {
    if (!todo.dueDate || todo.completed) return false;
    const dueDate = new Date(todo.dueDate);
    const today = new Date();
    return dueDate.getDate() === today.getDate() && 
           dueDate.getMonth() === today.getMonth() && 
           dueDate.getFullYear() === today.getFullYear();
  }).length;

  return (
    <div className="mt-6 pt-6 border-t border-dark-500/60">
      <h3 className="text-lg font-medium text-gray-200 mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Task Statistics
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-panel rounded-lg p-4 hover:shadow-glow transition-shadow duration-300">
          <h4 className="text-sm text-gray-400 mb-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Completion Rate
          </h4>
          <div className="flex items-end">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">{completionRate}%</span>
            <span className="text-xs text-gray-500 ml-2 mb-1">({completedTasks}/{totalTasks})</span>
          </div>
          {totalTasks > 0 && (
            <div className="mt-2 bg-dark-500 h-2.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full" 
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          )}
        </div>
        
        <div className="glass-panel rounded-lg p-4 hover:shadow-glow transition-shadow duration-300">
          <h4 className="text-sm text-gray-400 mb-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            Priority Breakdown
          </h4>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-90"></span>
              <span className="text-xs text-gray-300">High:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.high || 0}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-90"></span>
              <span className="text-xs text-gray-300">Medium:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.medium || 0}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-90"></span>
              <span className="text-xs text-gray-300">Low:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.low || 0}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-500 opacity-90"></span>
              <span className="text-xs text-gray-300">None:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.none || 0}</span>
            </div>
          </div>
        </div>
        
        <div className="glass-panel rounded-lg p-4 hover:shadow-glow transition-shadow duration-300">
          <h4 className="text-sm text-gray-400 mb-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Time Status
          </h4>
          <div className="mt-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-red-400 flex items-center">
                <span className="w-2 h-2 mr-1.5 bg-red-500 rounded-full animate-pulse-subtle"></span>
                Overdue:
              </span>
              <span className="pill bg-red-500/10 text-red-400">{overdueTasks}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-yellow-400 flex items-center">
                <span className="w-2 h-2 mr-1.5 bg-yellow-500 rounded-full animate-pulse-subtle"></span>
                Due today:
              </span>
              <span className="pill bg-yellow-500/10 text-yellow-400">{dueTodayTasks}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
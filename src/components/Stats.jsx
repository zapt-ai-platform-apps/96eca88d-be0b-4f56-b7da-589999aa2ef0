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
    <div className="mt-6 pt-6 border-t border-dark-500">
      <h3 className="text-lg font-medium text-gray-200 mb-4">Task Statistics</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-dark-700 rounded-lg p-4">
          <h4 className="text-sm text-gray-400 mb-1">Completion Rate</h4>
          <div className="flex items-end">
            <span className="text-2xl font-bold text-primary-400">{completionRate}%</span>
            <span className="text-xs text-gray-500 ml-2 mb-1">({completedTasks}/{totalTasks})</span>
          </div>
          {totalTasks > 0 && (
            <div className="mt-2 bg-dark-500 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-500 rounded-full" 
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          )}
        </div>
        
        <div className="bg-dark-700 rounded-lg p-4">
          <h4 className="text-sm text-gray-400 mb-1">Priority Breakdown</h4>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              <span className="text-xs text-gray-300">High:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.high || 0}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              <span className="text-xs text-gray-300">Medium:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.medium || 0}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-xs text-gray-300">Low:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.low || 0}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
              <span className="text-xs text-gray-300">None:</span>
              <span className="text-xs font-bold ml-1 text-gray-200">{priorityCounts.none || 0}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-dark-700 rounded-lg p-4">
          <h4 className="text-sm text-gray-400 mb-1">Time Status</h4>
          <div className="mt-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-red-400">Overdue:</span>
              <span className="text-xs font-bold text-gray-200">{overdueTasks}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-yellow-400">Due today:</span>
              <span className="text-xs font-bold text-gray-200">{dueTodayTasks}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
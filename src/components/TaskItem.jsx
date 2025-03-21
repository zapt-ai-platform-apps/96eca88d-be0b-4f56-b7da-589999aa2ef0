import React from 'react';
import { formatDistanceToNow, isPast, isToday } from 'date-fns';

const priorityColors = {
  high: 'text-red-500',
  medium: 'text-yellow-400',
  low: 'text-green-400',
  none: 'text-gray-400'
};

export default function TaskItem({ todo, onToggle, onDelete, animateIn, isLast }) {
  const getDueDateText = () => {
    if (!todo.dueDate) return null;
    
    const dueDate = new Date(todo.dueDate);
    
    if (isPast(dueDate) && !isToday(dueDate)) {
      return <span className="text-red-400">Overdue: {formatDistanceToNow(dueDate, { addSuffix: true })}</span>;
    } else if (isToday(dueDate)) {
      return <span className="text-yellow-400">Due today</span>;
    } else {
      return <span className="text-gray-400">Due {formatDistanceToNow(dueDate, { addSuffix: true })}</span>;
    }
  };

  const priorityIcon = (priority) => {
    if (!priority || priority === 'none') return null;
    
    return (
      <span className={`mr-1 ${priorityColors[priority] || priorityColors.none}`}>
        {priority === 'high' && '!!!'}
        {priority === 'medium' && '!!'}
        {priority === 'low' && '!'}
      </span>
    );
  };

  return (
    <li 
      className={`task-item group ${todo.completed ? 'bg-dark-700' : ''} ${todo.deleting ? 'animate-slide-out opacity-0' : animateIn && isLast ? 'animate-bounce-in' : ''}`}
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="checkbox-input cursor-pointer"
            />
            <span className="checkbox-mark"></span>
          </label>
          <span className={`${todo.completed ? 'task-completed' : 'task-text'}`}>
            {priorityIcon(todo.priority)}
            {todo.text}
          </span>
        </div>
        
        {todo.dueDate && (
          <div className="pl-8 text-xs mt-1">
            {getDueDateText()}
          </div>
        )}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-btn cursor-pointer"
        aria-label="Delete task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </li>
  );
}
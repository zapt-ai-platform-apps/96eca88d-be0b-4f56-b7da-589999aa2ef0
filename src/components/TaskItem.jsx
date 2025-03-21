import React from 'react';

export default function TaskItem({ todo, onToggle, onDelete, animateIn, isLast }) {
  return (
    <li 
      className={`task-item ${todo.completed ? 'bg-gray-50' : ''} ${todo.deleting ? 'animate-slide-out opacity-0' : animateIn && isLast ? 'animate-bounce-in' : ''}`}
    >
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
          {todo.text}
        </span>
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
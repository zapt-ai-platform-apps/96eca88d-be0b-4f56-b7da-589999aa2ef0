import React, { useState, useRef, useEffect } from 'react';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const inputRef = useRef(null);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAddTask = () => {
    if (!task.trim()) return;
    setIsAdding(true);
    
    setTimeout(() => {
      const newTodo = { id: Date.now(), text: task.trim(), completed: false };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setAnimateIn(true);
      console.log('Added todo:', newTodo);
      setTask('');
      setIsAdding(false);
      
      // Reset animation state after animation completes
      setTimeout(() => setAnimateIn(false), 500);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && task.trim()) {
      handleAddTask();
    }
  };

  const handleToggleTask = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    console.log('Toggled todo with id:', id);
  };

  const handleDeleteTask = (id) => {
    // First mark the todo for deletion animation
    const markedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, deleting: true } : todo
    );
    setTodos(markedTodos);
    
    // Then after animation duration, actually remove it
    setTimeout(() => {
      const filteredTodos = todos.filter(todo => todo.id !== id);
      setTodos(filteredTodos);
      console.log('Deleted todo with id:', id);
    }, 300);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  const completedTodoCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="card shadow-fancy overflow-hidden">
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-5 rounded-t-xl border-b border-gray-100">
        <div className="flex items-center gap-3 mb-1">
          <div className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              placeholder="What needs to be done?"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyDown}
              className="input-primary pr-12 w-full"
              disabled={isAdding}
            />
            {task.length > 0 && (
              <button 
                onClick={() => setTask('')}
                className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          <button
            onClick={handleAddTask}
            disabled={isAdding || !task.trim()}
            className="btn-primary whitespace-nowrap h-10 min-w-20 flex items-center justify-center cursor-pointer"
          >
            {isAdding ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Add Task'
            )}
          </button>
        </div>
        <div className="text-xs text-gray-500 pl-1">Press Enter to quickly add a task</div>
      </div>

      <div className="p-5">
        {todos.length === 0 ? (
          <EmptyState />
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
              <h2 className="text-lg font-medium text-gray-800">Your Tasks</h2>
              <div className="flex gap-2 text-sm">
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-2 py-1 rounded transition-colors ${filter === 'all' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:text-gray-700'} cursor-pointer`}
                >
                  All ({todos.length})
                </button>
                <button 
                  onClick={() => setFilter('active')}
                  className={`px-2 py-1 rounded transition-colors ${filter === 'active' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:text-gray-700'} cursor-pointer`}
                >
                  Active ({activeTodoCount})
                </button>
                <button 
                  onClick={() => setFilter('completed')}
                  className={`px-2 py-1 rounded transition-colors ${filter === 'completed' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:text-gray-700'} cursor-pointer`}
                >
                  Completed ({completedTodoCount})
                </button>
              </div>
            </div>

            {filteredTodos.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {filter === 'active' ? 'No active tasks. Well done!' : 
                 filter === 'completed' ? 'No completed tasks yet.' : 
                 'No tasks available.'}
              </div>
            ) : (
              <ul className="space-y-1 max-h-96 overflow-y-auto pr-1">
                {filteredTodos.map((todo, index) => (
                  <TaskItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                    animateIn={animateIn}
                    isLast={index === todos.length - 1}
                  />
                ))}
              </ul>
            )}
            
            {completedTodoCount > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => {
                    const activeTodos = todos.filter(todo => !todo.completed);
                    setTodos(activeTodos);
                  }}
                  className="text-sm text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                >
                  Clear completed
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
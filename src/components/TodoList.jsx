import React, { useState, useRef, useEffect } from 'react';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';
import TaskForm from './TaskForm';
import SearchAndFilter from './SearchAndFilter';
import Stats from './Stats';
import { saveTodos, loadTodos } from '../services/localStorageService';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [priority, setPriority] = useState('none');
  const [sortOption, setSortOption] = useState('newest');
  const [showStats, setShowStats] = useState(false);
  const inputRef = useRef(null);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = loadTodos();
    if (storedTodos.length > 0) {
      console.log('Loaded todos from localStorage:', storedTodos.length);
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      saveTodos(todos);
      console.log('Saved todos to localStorage:', todos.length);
    }
  }, [todos]);

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
      const newTodo = { 
        id: Date.now(), 
        text: task.trim(), 
        completed: false,
        dueDate: selectedDate ? selectedDate.toISOString() : null,
        priority: priority,
        createdAt: new Date().toISOString()
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setAnimateIn(true);
      console.log('Added todo:', newTodo);
      setTask('');
      setSelectedDate(null);
      setPriority('none');
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

  const sortTodos = (todosToSort) => {
    switch (sortOption) {
      case 'newest':
        return [...todosToSort].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      case 'oldest':
        return [...todosToSort].sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));
      case 'dueDate':
        return [...todosToSort].sort((a, b) => {
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        });
      case 'priority':
        const priorityValues = { high: 3, medium: 2, low: 1, none: 0 };
        return [...todosToSort].sort((a, b) => 
          priorityValues[b.priority || 'none'] - priorityValues[a.priority || 'none']
        );
      case 'alphabetical':
        return [...todosToSort].sort((a, b) => a.text.localeCompare(b.text));
      default:
        return todosToSort;
    }
  };

  const filteredAndSortedTodos = sortTodos(
    todos.filter(todo => {
      // First filter by status
      if (filter === 'active' && todo.completed) return false;
      if (filter === 'completed' && !todo.completed) return false;
      
      // Then filter by search term if one exists
      if (searchTerm.trim() !== '') {
        return todo.text.toLowerCase().includes(searchTerm.toLowerCase());
      }
      
      return true;
    })
  );

  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  const completedTodoCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="card shadow-card overflow-hidden border border-dark-500/50 backdrop-blur-sm">
      <TaskForm 
        task={task}
        setTask={setTask}
        isAdding={isAdding}
        handleAddTask={handleAddTask}
        handleKeyDown={handleKeyDown}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        priority={priority}
        setPriority={setPriority}
      />

      <div className="p-5">
        {todos.length === 0 ? (
          <EmptyState />
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Your Tasks
              </h2>
              <button 
                onClick={() => setShowStats(!showStats)}
                className="text-sm px-3 py-1.5 rounded-lg glass-panel text-primary-400 flex items-center gap-1 hover:shadow-glow cursor-pointer transition-all duration-200 border border-transparent hover:border-dark-500/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5z" />
                  <path d="M8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7z" />
                  <path d="M14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                {showStats ? 'Hide Stats' : 'Show Stats'}
              </button>
            </div>
            
            {showStats && <Stats todos={todos} />}

            <SearchAndFilter 
              filter={filter}
              setFilter={setFilter}
              totalCount={todos.length}
              activeCount={activeTodoCount}
              completedCount={completedTodoCount}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />

            {filteredAndSortedTodos.length === 0 ? (
              <div className="text-center py-8 text-gray-500 glass-panel rounded-lg p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {searchTerm ? 'No matching tasks found.' : 
                 filter === 'active' ? 'No active tasks. Well done!' : 
                 filter === 'completed' ? 'No completed tasks yet.' : 
                 'No tasks available.'}
              </div>
            ) : (
              <ul className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                {filteredAndSortedTodos.map((todo, index) => (
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
              <div className="mt-4 pt-4 border-t border-dark-500/50 flex justify-between items-center">
                <button 
                  onClick={() => {
                    const completedTodos = todos.filter(todo => todo.completed);
                    if (window.confirm(`Are you sure you want to delete ${completedTodos.length} completed task(s)?`)) {
                      const activeTodos = todos.filter(todo => !todo.completed);
                      setTodos(activeTodos);
                    }
                  }}
                  className="text-sm text-red-400 hover:text-red-300 transition-colors cursor-pointer hover:underline underline-offset-2"
                >
                  Clear completed ({completedTodoCount})
                </button>
                
                <div className="pill bg-dark-600 text-gray-300">
                  {activeTodoCount} active task{activeTodoCount !== 1 ? 's' : ''} remaining
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
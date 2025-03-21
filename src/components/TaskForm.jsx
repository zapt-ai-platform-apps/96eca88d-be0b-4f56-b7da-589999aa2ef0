import React, { useRef, useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

export default function TaskForm({ 
  task,
  setTask,
  isAdding,
  handleAddTask,
  handleKeyDown,
  selectedDate,
  setSelectedDate,
  priority,
  setPriority
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);
  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  
  const clearDate = (e) => {
    e.stopPropagation();
    setSelectedDate(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gradient-to-r from-surface-dark to-surface p-5 rounded-t-xl border-b border-dark-500">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What needs to be done?"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyDown}
              className="input-primary pr-12 w-full focus:shadow-glow"
              disabled={isAdding}
            />
            {task.length > 0 && (
              <button 
                onClick={() => setTask('')}
                className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
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
            className="btn-primary whitespace-nowrap h-10 min-w-20 flex items-center justify-center cursor-pointer shadow-button"
          >
            {isAdding ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Task
              </span>
            )}
          </button>
        </div>
        
        <div className="flex flex-wrap gap-3 items-center text-sm">
          <div className="flex items-center gap-2">
            <div className="text-gray-400 whitespace-nowrap">Priority:</div>
            <div className="flex bg-dark-600 rounded-lg overflow-hidden shadow-inner-glow">
              <button
                onClick={() => setPriority('none')}
                className={`px-3 py-1.5 ${priority === 'none' ? 'bg-dark-500 text-gray-200' : 'text-gray-400'} cursor-pointer transition-colors`}
              >
                None
              </button>
              <button
                onClick={() => setPriority('low')}
                className={`px-3 py-1.5 ${priority === 'low' ? 'bg-dark-500 text-green-400' : 'text-gray-400'} cursor-pointer transition-colors`}
              >
                Low
              </button>
              <button
                onClick={() => setPriority('medium')}
                className={`px-3 py-1.5 ${priority === 'medium' ? 'bg-dark-500 text-yellow-400' : 'text-gray-400'} cursor-pointer transition-colors`}
              >
                Medium
              </button>
              <button
                onClick={() => setPriority('high')}
                className={`px-3 py-1.5 ${priority === 'high' ? 'bg-dark-500 text-red-400' : 'text-gray-400'} cursor-pointer transition-colors`}
              >
                High
              </button>
            </div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer shadow-inner-glow transition-all duration-200 ${
                selectedDate 
                  ? 'bg-primary-700/80 text-primary-100 hover:bg-primary-700/90' 
                  : 'bg-dark-600 text-gray-400 hover:text-gray-300 hover:bg-dark-500'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {selectedDate ? format(selectedDate, 'MMM d, yyyy') : 'Set due date'}
              
              {selectedDate && (
                <button 
                  onClick={clearDate}
                  className="ml-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  ×
                </button>
              )}
            </button>
            
            {showDatePicker && (
              <div 
                ref={datePickerRef}
                className="absolute z-10 mt-1 glass-panel rounded-lg shadow-card p-2 animate-fade-in border border-dark-500/80"
              >
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  className="text-gray-200"
                  modifiersClassNames={{
                    selected: 'bg-primary-500 text-white rounded',
                    today: 'text-yellow-400 font-bold'
                  }}
                  styles={{
                    caption: { color: 'white' },
                    head: { color: 'white' },
                    day: { color: 'white' }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 pl-1 mt-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-primary-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>Press Enter to quickly add a task</span>
      </div>
    </div>
  );
}
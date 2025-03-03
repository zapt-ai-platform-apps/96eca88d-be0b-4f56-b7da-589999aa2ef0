import React, { useState } from 'react';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = () => {
    if (!task.trim()) return;
    setIsAdding(true);
    const newTodo = { id: Date.now(), text: task.trim(), completed: false };
    setTodos([...todos, newTodo]);
    console.log('Added todo:', newTodo);
    setTask('');
    setIsAdding(false);
  };

  const handleToggleTask = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    console.log('Toggled todo with id:', id);
  };

  const handleDeleteTask = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    console.log('Deleted todo with id:', id);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow border border-gray-300 p-2 box-border rounded focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          disabled={isAdding || !task.trim()}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks available. Add a task above.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between border-b border-gray-200 py-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTask(todo.id)}
                  className="mr-2 cursor-pointer"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => handleDeleteTask(todo.id)}
                className="text-red-500 cursor-pointer hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
const TODO_STORAGE_KEY = 'todos_app_tasks';

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    return true;
  } catch (error) {
    console.error('Failed to save todos to localStorage:', error);
    return false;
  }
};

export const loadTodos = () => {
  try {
    const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error('Failed to load todos from localStorage:', error);
    return [];
  }
};

export const clearTodos = () => {
  try {
    localStorage.removeItem(TODO_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear todos from localStorage:', error);
    return false;
  }
};
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = { id: Date.now(), text: taskText, completed: false };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const clearCompleted = () => {
    const activeTasks = tasks.filter(task => !task.completed);
    setTasks(activeTasks);
  };

  return (
    <div className='main-body'>
      <div className='todo-app'>
        <h1>Todo List</h1>
        <div className="add-task">
            <input
            className='inputtext'
            type="text"
            placeholder="Add a new task"
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                addTask();
                }
            }}
            />
            <button onClick={addTask} className='add-btn'>+</button>
        </div>
        <TodoList
            tasks={tasks}
            toggleTask={toggleTask}
            removeTask={removeTask}
        />
        
        <button onClick={clearCompleted} className='clr-btn'>Clear Completed</button>
      </div>
    </div>
  );
}

export default App;

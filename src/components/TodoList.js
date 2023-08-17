import React from 'react';
import Todo from './Todo';

function TodoList({ tasks, toggleTask, removeTask }) {
  return (
    <div>
        <div className='task-status'>
            <p>Total tasks: {tasks.length}</p>
            <p>Completed tasks: {tasks.filter(task => task.completed).length}</p>
        </div>
      <ul className='task-list'>
        {tasks.map(task => (
          <Todo
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

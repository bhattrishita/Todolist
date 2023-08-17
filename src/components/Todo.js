import React from 'react';

function Todo({ task, toggleTask, removeTask }) {
  return (
   <div className='todolist'>
     <li className='list'>
      <input
      className='checked'
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <span onClick={() => removeTask(task.id)} className='delete-btn'><i class="fa-solid fa-trash"></i></span>
    </li>
   </div>
  );
}

export default Todo;

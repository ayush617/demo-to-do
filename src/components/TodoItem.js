import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : ''}`}>
      <span 
        onClick={() => toggleComplete(todo.id)} 
        style={{ cursor: 'pointer' }}
        className={todo.completed ? 'text-decoration-line-through text-success' : 'text-danger'}
      >
        {todo.task}
      </span>
      <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

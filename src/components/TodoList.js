import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  if (todos.length === 0) {
    return <p className="text-center">No tasks to display</p>;
  }

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;

import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form className="d-flex mb-4" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="form-control me-2"
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default AddTodo;

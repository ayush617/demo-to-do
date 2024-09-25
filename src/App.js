import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]); 
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'pending') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  };

  return (
    <div className="container mt-5">
      <div className="row" style={{'width': '50%'}}>
        <div className="col-md-6 offset-md-3">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">To-Do List</h1>
              <AddTodo addTodo={addTodo} />
              <Filter setFilter={setFilter} />
              <TodoList 
                todos={filteredTodos()} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} 
              />
              <div className="text-center mt-3">
                <p>{filteredTodos().length} tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

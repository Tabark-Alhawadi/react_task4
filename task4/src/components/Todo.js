import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="todo-button" type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement the logic to check if the user exists
    console.log('Form submitted successfully');
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input
          className="Login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="Login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="Login-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
  const handleSubmit = (data) => {
      console.log(data); // Send data to backend
  };

  return (
      <div className="App">
          <h1>Login Form</h1>
          <LoginForm onSubmit={handleSubmit} />
      </div>
  );
};


export default App;

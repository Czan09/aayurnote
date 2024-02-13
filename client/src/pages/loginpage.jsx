import React, { useState } from 'react';
import '../css/loginpage.css';  

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='center'>
    <div className="login-container">
      <h2>Login Page</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button className='shrijan' onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}

export default LoginPage;

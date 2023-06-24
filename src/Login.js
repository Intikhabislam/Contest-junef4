import React, { useState } from 'react';
/*import { useDispatch } from 'react-redux';




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          // Show error message from the API in the frontend
          alert(data.error);
        } else {
          // Save user object in Redux state
          dispatch({ type: 'LOGIN_SUCCESS', payload: data });
          // Redirect to the profile page
          window.location.href = '/profile';
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };*/


  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button >Log in</button>
    </div>
  );
};

export default Login;

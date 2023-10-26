import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext.jsx';

function Login() {
  const { user, login } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(username);
  };

  return user ? (
    <div>Welcome, {user.name}!</div>
  ) : (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";

function Login() {
  const { user, login } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username);
  };

  return user ? (
    <div className="welcome-message">
      <h2>Welcome, {user.name}!</h2>
    </div>
  ) : (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="form-control mb-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { loginHandle } from "../../utils";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandle(username);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

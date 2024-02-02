import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/Login.scss";

function Inscription() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username && password) {
      try {
        await db.query(
          "INSERT INTO users (username, password) VALUES ($1, $2)",
          [username, password]
        );
        // Redirect to the login page
        navigate("/login");
      } catch (error) {
        console.error("Error inserting user:", error);
      }
    }
  };

  return (
    <div className="Login-container">
      <h2 className="Inscription">Inscription</h2>
      <form onSubmit={handleSubmit} className="inscriptionForm">
        <label className="username-label">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="UsernameInput"
          />
        </label>
        <br />
        <label className="password-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="PasswordInput"
          />
        </label>
        <br />
        <input className="inscription" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Inscription;

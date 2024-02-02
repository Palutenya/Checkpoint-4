import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.scss";

function connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      navigate("/nothing");
    }
  };

  return (
    <div className="Login-container">
      <h2 className="Connexion">Connexion</h2>
      <form onSubmit={handleSubmit} className="connexionForm">
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

export default connexion;

import React from "react";
import { Link } from "react-router-dom";

import "./styles/NavBar.scss";

function Navbar() {
  return (
    <nav className="link-css">
      <Link to="/">Accueil</Link>
      <Link to="/inscription">Inscription</Link>
      <Link to="/Login">Connexion</Link>
    </nav>
  );
}

export default Navbar;

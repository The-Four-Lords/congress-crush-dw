import React from "react";
import { Link } from "react-router-dom";

import TheFourLordsLogo from "../../assets/images/the_four_lords.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="container">
      <div className="logo">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/The-Four-Lords"
        >
          <img src={TheFourLordsLogo} alt="The Four Lords" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rules">Reglas</Link>
          </li>
          <li className="highlight">
            <Link to="/privacyPolicy">Politica de Privacidad</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

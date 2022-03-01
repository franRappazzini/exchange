import "./HeaderHome.css";

import { Link } from "react-router-dom";
import React from "react";

function HeaderHome() {
  return (
    <header className="header__home">
      <h1>Header</h1>

      <nav>
        <ul className="ul__navbar-home">
          <li>Registrarse</li>
          <li>
            <Link to="/portfolio">Ingresar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderHome;

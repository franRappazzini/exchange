import "./HeaderHome.css";

import { Link, NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import React from "react";

function HeaderHome() {
  return (
    <header className="header__home">
      <Link to="/">
        <h1>Header</h1>
      </Link>
      <nav>
        <ul className="ul__navbar-home">
          <li>
            <NavLink to="/">
              <Button variant="contained">Registrarse</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              <Button>Ingresar</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderHome;

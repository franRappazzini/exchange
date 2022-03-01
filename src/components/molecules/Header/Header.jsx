import "./Header.css";

import { Link, NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import React from "react";

function Header() {
  return (
    <header className="header__main">
      <Link to="/">
        <h1>Header</h1>
      </Link>

      <nav>
        <ul className="ul__navbar">
          <li>
            <NavLink
              to="/portfolio"
              style={(isActive) => ({
                fontWeight: isActive ? "bold" : "400",
              })}
            >
              <Button>Portfolio</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/operar">
              <Button>Operar</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/graficos">
              <Button>Graficos</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <Button>Mi cuenta</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

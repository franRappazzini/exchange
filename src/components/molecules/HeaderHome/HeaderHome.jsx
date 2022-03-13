import "./HeaderHome.css";

import { Link, NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import DrawerHome from "../Drawers/DrawerHome/DrawerHome";
import React from "react";

function HeaderHome() {
  return (
    <header className="header__home">
      <Link to="/">
        <h1>Header</h1>
      </Link>

      {window.innerWidth > 768 ? (
        <nav>
          <ul className="ul__navbar-home">
            <li>
              <NavLink to="/registrarse">
                <Button variant="contained">Registrarse</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ingresar">
                <Button>Ingresar</Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <DrawerHome />
      )}
    </header>
  );
}

export default HeaderHome;

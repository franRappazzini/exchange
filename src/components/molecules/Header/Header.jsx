import "./Header.css";

import React from "react";

function Header() {
  return (
    <header className="header__main">
      <h1>Header</h1>

      <nav>
        <ul className="ul__navbar">
          <li>Portfolio</li>
          <li>Operar</li>
          <li>Graficos</li>
          <li>Mi cuenta</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

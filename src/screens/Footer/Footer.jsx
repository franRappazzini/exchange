import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer>
      <p className="disclaimer">
        *arg.change es un exchange demo. La misma no representa ninguna entidad
        financiera real, ni nada en esta app es una recomendacion de compra.
      </p>
      <div className="i">
        <p>
          Creado por{" "}
          <a
            href="https://github.com/franRappazzini"
            target="_blank"
            rel="noopener noreferrer"
          >
            Francisco Rappazzini
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;

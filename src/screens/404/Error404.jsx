import "./Error404.css";

import { Button, Typography } from "@mui/material";

import Footer from "../Footer/Footer";
import Header from "../../components/molecules/Header/Header";
import { Link } from "react-router-dom";
import React from "react";
import error404 from "../../assets/img/404.png";

function Error404() {
  return (
    <>
      <Header />

      <main>
        <section className="error_container">
          <div>
            <Typography variant="h3">Error 404</Typography>
            <Typography sx={{ marginBottom: "1rem" }}>
              Lo sentimos, la pagina no se encuentra disponible.
            </Typography>
          </div>

          <img
            src={error404}
            alt="error 404"
            width={window.innerWidth > 840 ? 400 : 300}
          />
        </section>
        <section className="btn-error__container">
          <Link to="/">
            <Button variant="outlined" color="primary">
              Volver al inicio
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Error404;

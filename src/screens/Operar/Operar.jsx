import "./Operar.css";

import React, { useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../../components/molecules/Header/Header";
import TableCripto from "../../components/molecules/TableCripto/TableCripto";
import { useNavigate } from "react-router-dom";
import verificarUsuario from "../../utils/functions/verificarUsuario";

function Operar() {
  const navigate = useNavigate();

  useEffect(() => {
    verificarUsuario(navigate);
  }, [navigate]);

  return (
    <>
      <Header />

      <main className="main__operar">
        <TableCripto />
      </main>

      <Footer />
    </>
  );
}

export default Operar;

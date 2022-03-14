import "./Operar.css";

import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import Footer from "../Footer/Footer";
import Header from "../../components/molecules/Header/Header";
import TableAcciones from "../../components/molecules/TableAcciones/TableAcciones";
import TableCripto from "../../components/molecules/TableCripto/TableCripto";
import { useNavigate } from "react-router-dom";
import verificarUsuario from "../../utils/functions/verificarUsuario";

function Operar() {
  const [alignment, setAlignment] = useState("cripto");
  const navigate = useNavigate();

  useEffect(() => {
    verificarUsuario(navigate);
  }, [navigate]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Header />

      <main className="main__operar">
        <div className="toggleBtns__container">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="cripto">Cripto</ToggleButton>
            <ToggleButton value="acciones">Acciones</ToggleButton>
          </ToggleButtonGroup>
        </div>

        {alignment === "cripto" ? <TableCripto /> : <TableAcciones />}
      </main>

      <Footer />
    </>
  );
}

export default Operar;

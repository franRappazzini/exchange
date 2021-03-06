import React, { useEffect, useState } from "react";

import { AdvancedChart } from "react-tradingview-embed";
import Header from "../../components/molecules/Header/Header";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import verificarUsuario from "../../utils/functions/verificarUsuario";

function Graficos() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const navigate = useNavigate();

  useEffect(() => {
    verificarUsuario(navigate);
  }, [navigate]);

  return (
    <>
      <Header />

      <TextField
        id="standard-basic"
        label="Buscar activo (BTCUSDT, ETHUSDT, etc)"
        variant="standard"
        sx={{ margin: "1rem", width: "17rem" }}
        value={symbol.toUpperCase()}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <AdvancedChart
        widgetProps={{
          symbol: symbol,
          interval: "W",
          style: 1,
          locale: "es",
          range: 1000,
        }}
      />
    </>
  );
}

export default Graficos;

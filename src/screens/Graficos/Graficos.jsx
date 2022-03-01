import React, { useState } from "react";

import { AdvancedChart } from "react-tradingview-embed";
import Header from "../../components/molecules/Header/Header";
import { TextField } from "@mui/material";

function Graficos() {
  const [symbol, setSymbol] = useState("AAPL");

  return (
    <>
      <Header />

      <TextField
        id="standard-basic"
        label="Buscar activo (AAPL, BTCUSD, etc)"
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

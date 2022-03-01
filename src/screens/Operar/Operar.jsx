import "./Operar.css";

import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import Header from "../../components/molecules/Header/Header";
import { MarketOverview } from "react-tradingview-embed";
import { tabsCrypto } from "../../utils/constants/stockData";

function Operar() {
  const [alignment, setAlignment] = useState("acciones");

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
            <ToggleButton value="acciones">Acciones</ToggleButton>
            <ToggleButton value="cripto">Cripto</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <section className="tables__container">
          {alignment === "acciones" ? (
            <MarketOverview />
          ) : (
            <MarketOverview
              widgetProps={{
                tabs: tabsCrypto,
                locale: "es",
              }}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default Operar;

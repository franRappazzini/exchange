import { Card, CardContent, CardHeader, Tooltip } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import React from "react";

function SaldoActual({ dineroDisponible, inversiones }) {
  return (
    <Card sx={{ maxWidth: "60%" }} elevation={4}>
      <CardHeader title="Saldo actual" />

      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className="dinero__container">
          <p>
            Dinero disponible: $
            {new Intl.NumberFormat().format(dineroDisponible)}
          </p>
          <Tooltip
            title="Dinero disponible para comprar activos o retirar."
            arrow
          >
            <InfoIcon
              sx={{
                color: "lightgrey",
                marginLeft: "0.5rem",
                cursor: "pointer",
              }}
              fontSize="5"
            />
          </Tooltip>
        </div>
        <div className="dinero__container">
          <p>Mis inversiones: ${new Intl.NumberFormat().format(inversiones)}</p>
          <Tooltip title="Dinero invertido total (acciones + cripto)." arrow>
            <InfoIcon
              sx={{
                color: "lightgrey",
                marginLeft: "0.5rem",
                cursor: "pointer",
              }}
              fontSize="5"
            />
          </Tooltip>
        </div>
        <div className="dinero__container">
          <p>
            Total: $
            {new Intl.NumberFormat().format(dineroDisponible + inversiones)}
          </p>
          <Tooltip title="Dinero total en la plataforma." arrow>
            <InfoIcon
              sx={{
                color: "lightgrey",
                marginLeft: "0.5rem",
                cursor: "pointer",
              }}
              fontSize="5"
            />
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
}

export default SaldoActual;

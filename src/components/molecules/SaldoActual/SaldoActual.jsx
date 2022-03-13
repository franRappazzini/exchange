import { Card, CardContent, CardHeader, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

import InfoIcon from "@mui/icons-material/Info";
import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import { useSelector } from "react-redux";

function SaldoActual({ dineroDisponible, inversiones }) {
  const [totalInvertido, setTotalInvertido] = useState(0);
  // const [suma, setSuma] = useState(0);
  const usuario = useSelector((state) => state.user.usuario);

  const criptosPortfolio = usuario.portfolio
    ? Object.values(usuario.portfolio.cripto).map((cripto) => ({ ...cripto }))
    : [];

  let total = [];
  let suma = 0;

  useEffect(() => {
    criptosPortfolio.length > 0 &&
      criptosPortfolio.forEach((cripto) => {
        fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cripto.id}&vs_currencies=usd`
        )
          .then((res) => res.json())
          .then((data) => {
            total.push(data[cripto.id].usd * cripto.cantidad);
          })
          .finally(() => {
            // console.log("TOTAL", total);
            total.forEach((n) => {
              console.log(n);
              suma += n;
              // setSuma(suma + n);
            });
          });
      });
    console.log("SUM", suma);
    console.log("TOT", total);
  }, [suma, total]);

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
          <p>Mis inversiones: ${new Intl.NumberFormat().format(suma)}</p>
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

import "./MiCuenta.css";

import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import Header from "../../components/molecules/Header/Header";
import React from "react";

function MiCuenta() {
  return (
    <>
      <Header />

      <main className="main__miCuenta">
        <Card sx={{ marginTop: "1rem" }}>
          <CardHeader title="Mis datos" />
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "1.5rem",
            }}
          >
            <div>
              <Typography>12345678</Typography>
              <Typography variant="body2">DNI</Typography>
            </div>
            <div>
              <Typography>frnacisco</Typography>
              <Typography variant="body2">Nombre</Typography>
            </div>
            <div>
              <Typography>rappazzini</Typography>
              <Typography variant="body2">Apellido</Typography>
            </div>
            <div>
              <Typography>email@outlook.com</Typography>
              <Typography variant="body2">Email</Typography>
            </div>
            <div>
              <Typography>21321321312</Typography>
              <Typography variant="body2">Contraseña</Typography>
            </div>
            <div>
              <Typography>$893427</Typography>
              <Typography variant="body2">Dinero en cuenta</Typography>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

export default MiCuenta;

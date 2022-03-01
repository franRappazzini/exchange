import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Header from "../../components/molecules/Header/Header";
import React from "react";

function Portfolio() {
  return (
    <>
      <Header />

      <main>
        <ButtonGroup
          variant="outlined"
          aria-label="button group"
          sx={{
            width: "60%",
            justifyContent: "space-between",
            margin: "1rem 0",
          }}
        >
          <Button color="primary">Ingreso de dinero</Button>
          <Button color="success" variant="contained" sx={{ width: "20rem" }}>
            INVERTIR
          </Button>
          <Button color="error">Retiro de dinero</Button>
        </ButtonGroup>

        <Card
          variant="outlined"
          sx={{ maxWidth: "60%", backgroundColor: "#181a20" }}
        >
          <CardHeader title="Saldo actual" />

          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>Dinero disponible: $1.000</p>
            <p>Mis inversiones: $100.000</p>
            <p>Total: $101.000</p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </main>
    </>
  );
}

export default Portfolio;

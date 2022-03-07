import "./DialogIngresarDinero.css";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";

import React from "react";

function DialogIngresarDinero({ open, setOpen }) {
  return (
    <Dialog open={open}>
      <DialogTitle sx={{ m: "2rem 3rem 0 3rem" }}>Ingresar dinero</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", m: "0 3rem 2rem 3rem" }}
      >
        <TextField
          id="filled-basic"
          label="Cantidad a ingresar"
          variant="filled"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          sx={{ width: "20rem" }}
        />

        <section className="btns__container">
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "1rem", width: "fit-content" }}
          >
            Confirmar
          </Button>
          <Button
            color="error"
            sx={{ marginTop: "1rem", width: "fit-content" }}
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default DialogIngresarDinero;

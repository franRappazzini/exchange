import "../DialogIngresarDinero/DialogIngresarDinero.css";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";

function DialogRetiroDinero({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ m: "2rem 3rem 0 3rem" }}>Retirar dinero</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "0 3rem 2rem 3rem",
        }}
      >
        <section className="saldo__container">
          <Typography gutterBottom>Dinero disponible:</Typography>
          <Typography gutterBottom>$xxx</Typography>
        </section>
        <TextField
          id="filled-basic"
          label="Cantidad a retirar"
          variant="filled"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          sx={{ width: "20rem" }}
        />

        <section className="btns__container">
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "1rem" }}
          >
            Confirmar
          </Button>
          <Button
            color="error"
            sx={{ marginTop: "1rem" }}
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default DialogRetiroDinero;

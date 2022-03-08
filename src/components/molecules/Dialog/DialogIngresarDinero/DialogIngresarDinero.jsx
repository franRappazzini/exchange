import "./DialogIngresarDinero.css";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { ingresarDinero } from "../../../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

function DialogIngresarDinero({ open, setOpen, usuario }) {
  const [monto, setMonto] = useState("");
  const dispatch = useDispatch();

  console.log(usuario.id);
  const saldoActual = usuario.saldo ? usuario.saldo : 0;

  function handleConfirmar() {
    if (monto >= 1) {
      dispatch(ingresarDinero(usuario.id, monto, saldoActual));
      setOpen(false);
      setMonto("");
    }
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ m: "2rem 3rem 0 3rem" }}>Ingresar dinero</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "0 3rem 2rem 3rem",
        }}
      >
        <section className="saldo__container">
          <Typography gutterBottom>Dinero disponible:</Typography>
          <Typography gutterBottom>
            ${new Intl.NumberFormat().format(saldoActual)}
          </Typography>
        </section>
        <TextField
          label="Cantidad a ingresar"
          variant="filled"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          sx={{ width: "20rem" }}
          value={monto}
          onChange={(e) => setMonto(parseFloat(e.target.value))}
        />

        <section className="btns__container">
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "1rem" }}
            onClick={handleConfirmar}
            disabled={monto < 1}
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

export default DialogIngresarDinero;

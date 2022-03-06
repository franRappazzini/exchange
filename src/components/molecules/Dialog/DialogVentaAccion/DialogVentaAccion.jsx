import "./DialogVentaAccion.css";

import { Button, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import Typography from "@mui/material/Typography";

function DialogVentaAccion({ accion, open, setOpen }) {
  const [cantidad, setCantidad] = React.useState("");
  const [confirmar, setConfirmar] = React.useState(false);

  const { symbol, price } = accion;

  const acciones = 2;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth="100%">
        <DialogContent dividers>
          <section className="accion__container">
            <h1>{symbol}</h1>
            <p>${new Intl.NumberFormat().format(price)}</p>
          </section>

          <section className="compra__container">
            <div>
              <Typography gutterBottom>Cantidad disponible:</Typography>
              <Typography gutterBottom>
                {new Intl.NumberFormat().format(acciones)} {symbol}
              </Typography>
            </div>
            <TextField
              id="outlined-basic"
              label="Cantidad a vender"
              variant="outlined"
              type="number"
              size="small"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              autoComplete="off"
              error={cantidad > acciones || cantidad < 0}
              sx={{ m: "1rem 0", width: "100%" }}
              autoFocus
            />

            <div>
              <Typography gutterBottom>Recibire:</Typography>
              <Typography gutterBottom>
                ${new Intl.NumberFormat().format(cantidad * price)}
              </Typography>
            </div>

            <Button
              variant="contained"
              color="error"
              onClick={() => setConfirmar(true)}
              disabled={
                cantidad > acciones || cantidad <= 0 || cantidad * price < 1
              }
            >
              Vender
            </Button>
          </section>
        </DialogContent>
      </Dialog>

      <Dialog onClose={() => setConfirmar(false)} open={confirmar}>
        <DialogContent dividers>
          <section className="datos__accion--venta">
            <h1>VENTA</h1>
            <p>
              {symbol} ${new Intl.NumberFormat().format(price)}
            </p>
          </section>

          <section className="datos__transaccion">
            <div className="confirmar__container">
              <Typography gutterBottom>Vendere: </Typography>
              <Typography gutterBottom>
                {cantidad} {symbol}
              </Typography>
            </div>

            <div className="confirmar__container">
              <Typography gutterBottom>Recibire: </Typography>
              <Typography gutterBottom>
                ${(cantidad * price).toFixed(8)}
              </Typography>
            </div>

            <div className="btns__container">
              <Button variant="contained" color="error">
                Confirmar
              </Button>
              <Button variant="text" onClick={() => setConfirmar(false)}>
                Cancelar
              </Button>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogVentaAccion;

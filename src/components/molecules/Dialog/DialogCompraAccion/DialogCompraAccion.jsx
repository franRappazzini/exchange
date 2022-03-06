import "./DialogCompraAccion.css";

import * as React from "react";

import { Button, InputAdornment, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

export default function DialogCompraAccion({ accion, open, setOpen }) {
  const [cantidad, setCantidad] = React.useState("");
  const [confirmar, setConfirmar] = React.useState(false);
  const { symbol, price } = accion;

  const dinero = 10000;

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
              <Typography gutterBottom>Saldo disponible:</Typography>
              <Typography gutterBottom>
                ${new Intl.NumberFormat().format(dinero)}
              </Typography>
            </div>
            <TextField
              id="outlined-basic"
              label="Cantidad"
              variant="outlined"
              type="number"
              size="small"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              autoComplete="off"
              error={cantidad > dinero || cantidad < 0}
              sx={{ m: "1rem 0", width: "100%" }}
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />

            <div>
              <Typography gutterBottom>Recibire:</Typography>
              <Typography gutterBottom>
                {new Intl.NumberFormat().format(cantidad / price)} {symbol}
              </Typography>
            </div>

            <Button
              variant="contained"
              color="success"
              onClick={() => setConfirmar(true)}
              disabled={cantidad > dinero || cantidad < 1}
            >
              Comprar
            </Button>
          </section>
        </DialogContent>
      </Dialog>

      <Dialog onClose={() => setConfirmar(false)} open={confirmar}>
        <DialogContent dividers>
          <section className="datos__accion">
            <h1>COMPRA</h1>
            <p>
              {symbol} ${new Intl.NumberFormat().format(price)}
            </p>
          </section>

          <section className="datos__transaccion">
            <div className="confirmar__container">
              <Typography gutterBottom>Importe: </Typography>
              <Typography gutterBottom>${cantidad}</Typography>
            </div>

            <div className="confirmar__container">
              <Typography gutterBottom>Recibire: </Typography>
              <Typography gutterBottom>
                {(cantidad / price).toFixed(8)} {symbol}
              </Typography>
            </div>

            <div className="btns__container">
              <Button variant="contained" color="success">
                Confirmar
              </Button>
              <Button
                variant="text"
                color="error"
                onClick={() => setConfirmar(false)}
              >
                Cancelar
              </Button>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
}

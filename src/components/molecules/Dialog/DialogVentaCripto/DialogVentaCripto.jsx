import "./DialogVentaCripto.css";

import { Button, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import Typography from "@mui/material/Typography";

function DialogVentaCripto({ cripto, open, setOpen }) {
  const [cantidad, setCantidad] = React.useState("");
  const [confirmar, setConfirmar] = React.useState(false);

  const { id, image, name, symbol, current_price } = cripto;

  const criptomonedas = 2;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth="100%">
        <DialogContent dividers>
          <section className="cripto__container">
            <div>
              <img src={image} alt={id} width={60} />
              <h1>{name}</h1>
            </div>

            <p>${new Intl.NumberFormat().format(current_price)}</p>
          </section>

          <section className="compra__container">
            <div>
              <Typography gutterBottom>Cantidad disponible:</Typography>
              <Typography gutterBottom>
                {new Intl.NumberFormat().format(criptomonedas)}{" "}
                {symbol.toUpperCase()}
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
              error={cantidad > criptomonedas || cantidad < 0}
              sx={{ m: "1rem 0", width: "100%" }}
              autoFocus
            />

            <div>
              <Typography gutterBottom>Recibire:</Typography>
              <Typography gutterBottom>
                $ {new Intl.NumberFormat().format(cantidad * current_price)}
              </Typography>
            </div>

            <Button
              variant="contained"
              color="error"
              onClick={() => setConfirmar(true)}
              disabled={
                cantidad > criptomonedas ||
                cantidad <= 0 ||
                cantidad * current_price < 1
              }
            >
              Vender
            </Button>
          </section>
        </DialogContent>
      </Dialog>

      {/* dialog para confirmar compra */}
      <Dialog onClose={() => setConfirmar(false)} open={confirmar}>
        <DialogContent dividers>
          <section className="datos__cripto--venta">
            <h1>VENTA</h1>
            <p>
              {name} ${new Intl.NumberFormat().format(current_price)}
            </p>
          </section>

          <section className="datos__transaccion">
            <div className="confirmar__container">
              <Typography gutterBottom>Vendere: </Typography>
              <Typography gutterBottom>
                {cantidad} {symbol.toUpperCase()}
              </Typography>
            </div>

            <div className="confirmar__container">
              <Typography gutterBottom>Recibire: </Typography>
              <Typography gutterBottom>
                ${(cantidad * current_price).toFixed(8)}
              </Typography>
            </div>

            <div className="btns__container-cripto">
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

export default DialogVentaCripto;

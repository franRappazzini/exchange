import "./DialogCompraAccion.css";

import * as React from "react";

import { Button, InputAdornment, Link, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { comprarAccion } from "../../../../redux/actions/ActivosAction";
import { usuarioEnSesion } from "../../../../redux/actions/UserAction";

export default function DialogCompraAccion({ accion, open, setOpen }) {
  const [cantidad, setCantidad] = React.useState("");
  const [confirmar, setConfirmar] = React.useState(false);
  const { symbol, price } = accion;
  const usuario = useSelector((state) => state.user.usuario);
  const { saldo = 0 } = usuario;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(usuarioEnSesion());
  }, [dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  function handleConfirmar() {
    setConfirmar(false);
    handleClose();
    dispatch(
      comprarAccion(usuario.id, accion, cantidad / price, saldo, cantidad)
    );
  }

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth="100%">
        <DialogContent dividers>
          <section className="accion__container">
            <h1>{symbol}</h1>
            <p>${new Intl.NumberFormat().format(price)}</p>
            <p>
              <Link
                href={`https://finance.yahoo.com/quote/${symbol}?p=${symbol}&.tsrc=fin-srch`}
                title="Yahoo Finance"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "0.9rem" }}
              >
                Ver mas info.
              </Link>
            </p>
          </section>

          <section className="compra__container">
            <div>
              <Typography gutterBottom>Saldo disponible:</Typography>
              <Typography gutterBottom>
                ${new Intl.NumberFormat().format(saldo)}
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
              error={cantidad > saldo || cantidad < 0}
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
              disabled={cantidad > saldo || cantidad < 1}
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

            <div className="btns__container-accion">
              <Button
                variant="contained"
                color="success"
                onClick={handleConfirmar}
              >
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

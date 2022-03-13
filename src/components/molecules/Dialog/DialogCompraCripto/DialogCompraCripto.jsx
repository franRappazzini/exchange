import "./DialogCompraCripto.css";

import * as React from "react";

import { Button, InputAdornment, Link, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { comprarCripto } from "../../../../redux/actions/ActivosAction";
import { usuarioEnSesion } from "../../../../redux/actions/UserAction";

export default function DialogCompraCripto({ cripto, open, setOpen }) {
  const [cantidad, setCantidad] = React.useState("");
  const [confirmar, setConfirmar] = React.useState(false);
  const { id, image, name, symbol, current_price } = cripto;
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
      comprarCripto(
        usuario.id,
        cripto,
        cantidad / current_price,
        saldo,
        cantidad
      )
    );
  }

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
            <p className="p__info">
              <Link
                href={`https://www.coingecko.com/en/coins/${id}`}
                title="CoinGecko"
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
                {new Intl.NumberFormat().format(cantidad / current_price)}{" "}
                {symbol.toUpperCase()}
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

      {/* dialog para confirmar compra */}
      <Dialog onClose={() => setConfirmar(false)} open={confirmar}>
        <DialogContent dividers>
          <section className="datos__cripto">
            <h1>COMPRA</h1>
            <p>
              {name} ${new Intl.NumberFormat().format(current_price)}
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
                {(cantidad / current_price).toFixed(8)} {symbol.toUpperCase()}
              </Typography>
            </div>
            <div className="btns__container-cripto">
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

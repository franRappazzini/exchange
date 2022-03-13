import "./DialogConfirmar.css";

import { Button, Dialog, DialogContent, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

function DialogConfirmar({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  function handleCerrarSesion() {
    setOpen(false);
    localStorage.removeItem("usuario");
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography variant="h5">Desea cerrar sesion?</Typography>

        <div className="btns-dialog__container">
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              onClick={handleCerrarSesion}
            >
              Confirmar
            </Button>
          </Link>
          <Button variant="text" color="info" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogConfirmar;

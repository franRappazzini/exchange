import "./MiCuenta.css";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DialogConfirmar from "../../components/molecules/Dialog/DialogConfirmar/DialogConfirmar";
import Footer from "../Footer/Footer";
import Header from "../../components/molecules/Header/Header";
import { useNavigate } from "react-router-dom";
import { usuarioEnSesion } from "../../redux/actions/UserAction";
import verificarUsuario from "../../utils/functions/verificarUsuario";

function MiCuenta() {
  const usuario = useSelector((state) => state.user.usuario);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    nombres = "xx",
    apellidos = "xx",
    dni = "xx",
    email = "xx",
    saldo = "xx",
    password = "xx",
  } = usuario;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(usuarioEnSesion());
    verificarUsuario(navigate);
  }, [dispatch, navigate]);

  return (
    <>
      <Header />

      <main className="main__mi-cuenta">
        <Card sx={{ marginTop: "1rem" }}>
          <CardHeader title="Mis datos" />
          <CardContent className="mi-cuenta__container">
            <div>
              <Typography>{dni}</Typography>
              <Typography variant="body2" color={"gray"}>
                DNI
              </Typography>
            </div>
            <div>
              <Typography>{nombres}</Typography>
              <Typography variant="body2" color={"gray"}>
                Nombres
              </Typography>
            </div>
            <div>
              <Typography>{apellidos}</Typography>
              <Typography variant="body2" color={"gray"}>
                Apellidos
              </Typography>
            </div>
            <div>
              <Typography>{email}</Typography>
              <Typography variant="body2" color={"gray"}>
                Email
              </Typography>
            </div>
            <div>
              <Typography>{password}</Typography>
              <Typography variant="body2" color={"gray"}>
                Contraseña
              </Typography>
            </div>
            <div>
              <Typography>
                $
                {saldo !== "xx" ? new Intl.NumberFormat().format(saldo) : saldo}
              </Typography>
              <Typography variant="body2" color={"gray"}>
                Dinero en cuenta
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Button variant="text" color="error" onClick={() => setOpen(true)}>
          Cerrar sesion
        </Button>

        <DialogConfirmar open={open} setOpen={setOpen} />
      </main>

      <Footer />
    </>
  );
}

export default MiCuenta;

import "./MiCuenta.css";

import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/molecules/Header/Header";
import { usuarioEnSesion } from "../../redux/actions/UserAction";

function MiCuenta() {
  const usuario = useSelector((state) => state.user.usuario);
  const dispatch = useDispatch();
  const {
    nombres = "xx",
    apellidos = "xx",
    dni = "xx",
    email = "xx",
    saldo = "xx",
    password = "xx",
  } = usuario;

  useEffect(() => {
    dispatch(usuarioEnSesion());
  }, [dispatch]);

  return (
    <>
      <Header />

      <main className="main__miCuenta">
        <Card sx={{ marginTop: "1rem" }}>
          <CardHeader title="Mis datos" />
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "1.5rem",
            }}
          >
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
      </main>
    </>
  );
}

export default MiCuenta;

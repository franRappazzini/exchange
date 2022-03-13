import "./Ingresar.css";

import { Button, Card, CardHeader } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DialogError from "../../components/molecules/Dialog/DialogError/DialogError";
import Footer from "../Footer/Footer";
import HeaderHome from "../../components/molecules/HeaderHome/HeaderHome";
import InputForm from "../../components/atoms/InputForm/InputForm";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { obtenerUsuarios } from "../../redux/actions/UserAction";

function Ingresar() {
  const [datosUsuario, setDatosUsuario] = useState({
    email: "",
    password: "",
    verPassword: false,
  });
  const [open, setOpen] = useState(false);
  const [textError, setTextError] = useState({
    text1: "",
    text2: "",
  });
  const usuarios = useSelector((state) => state.user.usuarios);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerUsuarios());
  }, [dispatch]);

  function handleChange(e) {
    setDatosUsuario({
      ...datosUsuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleVerPassword() {
    setDatosUsuario({
      ...datosUsuario,
      verPassword: !datosUsuario.verPassword,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const usuarioFind = usuarios
      ? usuarios.find(
          (user) =>
            user.email === datosUsuario.email || user.dni === datosUsuario.email
        )
      : null;

    if (usuarioFind) {
      if (usuarioFind.password === datosUsuario.password) {
        // va al localStorage para usarlo en redux
        localStorage.setItem("usuario", JSON.stringify(usuarioFind));
        navigate("/portfolio");
      } else {
        setTextError({
          text1: "Contraseña incorrecta",
          text2: "Intente nuevamente",
        });
        setOpen(true);
      }
    } else {
      setTextError({
        text1: "DNI o email incorrecto",
        text2: "Sino esta registrado, registrese",
      });
      setOpen(true);
    }
  }

  function eyeIcon() {
    return datosUsuario.verPassword ? (
      <VisibilityOffIcon
        onClick={handleVerPassword}
        edge="end"
        className="eyeIcon"
      />
    ) : (
      <VisibilityIcon
        onClick={handleVerPassword}
        edge="end"
        className="eyeIcon"
      />
    );
  }

  return (
    <>
      <HeaderHome />

      <main className="main__ingresar">
        <Card sx={{ marginTop: "1rem", p: "2rem" }}>
          <CardHeader title="Ingresar" sx={{ p: "0 0 1rem 0" }} />

          <form className="form__ingresar" onSubmit={handleSubmit}>
            <InputForm
              label="DNI o email"
              type="text"
              name="email"
              value={datosUsuario.email}
              onChange={handleChange}
              autoCapitalize="none"
            />
            <InputForm
              label="Contraseña"
              type={datosUsuario.verPassword ? "text" : "password"}
              name="password"
              value={datosUsuario.password}
              onChange={handleChange}
              endAdornment={eyeIcon()}
            />

            <Button
              variant="contained"
              color="success"
              sx={{ width: "fit-content" }}
              type="submit"
            >
              Ingresar
            </Button>
          </form>

          <p>
            Aun no tienes una cuenta?{" "}
            <Link to="/registrarse">Registrarse.</Link>
          </p>
        </Card>
        <DialogError
          open={open}
          setOpen={setOpen}
          text1={textError.text1}
          text2={textError.text2}
        />
        ;
      </main>

      <Footer />
    </>
  );
}

export default Ingresar;

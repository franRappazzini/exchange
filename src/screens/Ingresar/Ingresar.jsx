import "./Ingresar.css";

import { Button, Card, CardHeader } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import HeaderHome from "../../components/molecules/HeaderHome/HeaderHome";
import InputForm from "../../components/atoms/InputForm/InputForm";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Ingresar() {
  const [datosUsuario, setDatosUsuario] = useState({
    email: "",
    password: "",
    verPassword: false,
  });
  const navigate = useNavigate();

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

    navigate("/portfolio");
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
      </main>
    </>
  );
}

export default Ingresar;

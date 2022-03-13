import "./Registrarse.css";

import { Button, Card, CardHeader, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderHome from "../../components/molecules/HeaderHome/HeaderHome";
import InputForm from "../../components/atoms/InputForm/InputForm";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { crearUsuario } from "../../redux/actions/UserAction";

function Registrarse() {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    email: "",
    password: "",
    password2: "",
    verPassword: false,
  });
  const usuarios = useSelector((state) => state.user.usuarios);
  const dispatch = useDispatch();

  function handleChange(e) {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleVerPassword() {
    setNuevoUsuario({
      ...nuevoUsuario,
      verPassword: !nuevoUsuario.verPassword,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const buscarUsuario = usuarios
      ? usuarios.findIndex(
          (user) =>
            user.email === nuevoUsuario.email || user.dni === nuevoUsuario.dni
        )
      : -1;

    console.log(buscarUsuario);

    if (buscarUsuario === -1) {
      if (nuevoUsuario.password === nuevoUsuario.password2) {
        dispatch(crearUsuario(nuevoUsuario));
        setNuevoUsuario({
          nombres: "",
          apellidos: "",
          dni: "",
          email: "",
          password: "",
          password2: "",
          verPassword: false,
        });
      }
    } else {
      alert("El usuario ya existe");
    }
  }

  function eyeIcon() {
    return nuevoUsuario.verPassword ? (
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

      <main className="main__registrarse">
        <Card sx={{ marginTop: "1rem", p: "2rem" }}>
          <CardHeader title="Registrarse" sx={{ p: "0 0 1rem 0" }} />
          <form className="form__registrarse" onSubmit={handleSubmit}>
            <InputForm
              label="Nombres"
              name="nombres"
              value={nuevoUsuario.nombres}
              onChange={handleChange}
              autoFocus
            />
            <InputForm
              label="Apellidos"
              name="apellidos"
              value={nuevoUsuario.apellidos}
              onChange={handleChange}
            />
            <InputForm
              label="DNI"
              name="dni"
              type="number"
              value={nuevoUsuario.dni}
              onChange={handleChange}
            />
            <InputForm
              label="Email"
              name="email"
              type="email"
              value={nuevoUsuario.email}
              onChange={handleChange}
            />
            <InputForm
              label="Contraseña (evite usar una real)"
              name="password"
              type={nuevoUsuario.verPassword ? "text" : "password"}
              value={nuevoUsuario.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">{eyeIcon()}</InputAdornment>
              }
            />
            <InputForm
              label="Confirmar contraseña"
              name="password2"
              type="password"
              value={nuevoUsuario.password2}
              onChange={handleChange}
              error={nuevoUsuario.password !== nuevoUsuario.password2}
            />

            <Button
              variant="contained"
              color="success"
              sx={{ width: "fit-content" }}
              type="submit"
            >
              Registrarse
            </Button>
          </form>

          <p>
            Ya estas registrado? <Link to="/ingresar">Ingresa.</Link>
          </p>
        </Card>
      </main>
    </>
  );
}

export default Registrarse;

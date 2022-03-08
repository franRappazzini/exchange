import getDB from "../../utils/services/db";

const CREAR_USUARIO = "CREAR_USUARIO";
const OBTENER_USUARIOS = "OBTENER_USUARIOS";
const USUARIO_EN_SESION = "USUARIO_EN_SESION";
const INGRESAR_DINERO = "INGRESAR_DINERO";

const db = getDB();

export function crearUsuario(usuario) {
  return (dispatch) => {
    db.ref("usuarios").push(usuario);

    dispatch({
      type: CREAR_USUARIO,
    });
  };
}

export function obtenerUsuarios() {
  return (dispatch) => {
    db.ref("usuarios").on("value", (snapshot) => {
      const usuarios = snapshot.val()
        ? Object.keys(snapshot.val()).map((key) => ({
            ...snapshot.val()[key],
            id: key,
          }))
        : null;

      dispatch({
        type: OBTENER_USUARIOS,
        usuarios: usuarios,
      });
    });
  };
}

export function usuarioEnSesion() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  return (dispatch) => {
    db.ref("usuarios").on("value", (snapshot) => {
      const usuarios = snapshot.val()
        ? Object.keys(snapshot.val()).map((key) => ({
            ...snapshot.val()[key],
            id: key,
          }))
        : null;

      // busco el usuario que esta en sesion
      const usuarioEnSesion = usuarios.find((u) => u.id === usuario.id);

      dispatch({
        type: USUARIO_EN_SESION,
        usuario: usuarioEnSesion,
      });
    });
  };
}

export function ingresarDinero(idUsuario, dinero, saldoActual) {
  return (dispatch) => {
    db.ref(`usuarios/${idUsuario}/saldo`).set(saldoActual + dinero);

    dispatch({
      type: INGRESAR_DINERO,
    });
  };
}

export function retirarDinero(idUsuario, dinero, saldoActual) {
  return (dispatch) => {
    db.ref(`usuarios/${idUsuario}/saldo`).set(saldoActual - dinero);

    dispatch({
      type: INGRESAR_DINERO,
    });
  };
}

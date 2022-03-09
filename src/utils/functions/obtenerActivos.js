import getDB from "../services/db";

const db = getDB();

export function obtenerAcciones(idUsuario) {
  db.ref(`usuarios/${idUsuario}/portfolio/accion`).on("value", (snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const acciones = Object.keys(snapshot.val()).map((key) => ({
        ...snapshot.val()[key],
      }));

      console.log(acciones);
      return acciones;
    } else return [];
  });
}

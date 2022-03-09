import getDB from "../../utils/services/db";

const db = getDB();

const COMPRAR_CRIPTO = "COMPRAR_CRIPTO";
const VENDER_CRIPTO = "VENDER_CRIPTO";
const COMPRAR_ACCION = "COMPRAR_ACCION";
const VENDER_ACCION = "VENDER_ACCION";
const OBTENER_CRIPTOS = "OBTENER_CRIPTOS";
const OBTENER_ACCIONES = "OBTENER_ACCIONES";

export function comprarCripto(idUsuario, cripto, cantidad, saldo, gasto) {
  const rutaCripto = db.ref(
    `usuarios/${idUsuario}/portfolio/cripto/${cripto.id}`
  );

  return (dispatch) => {
    // suma cripto
    rutaCripto
      .child("cantidad")
      .get() // get para leer una unica vez (sino renderizaba infinito)
      .then((snapshot) => {
        const total = (
          parseFloat(cantidad) + parseFloat(snapshot.val())
        ).toFixed(8);

        if (snapshot.exists()) {
          rutaCripto.child("ppc").once("value", (snap) => {
            if (snap.exists()) {
              const ppc = snap.val();
              ppc.push(cripto.current_price);

              rutaCripto.update({ cantidad: total, ppc: ppc });
            }
          });
        } else {
          rutaCripto.set({
            ...cripto,
            cantidad: parseFloat(cantidad).toFixed(8),
            ppc: [cripto.current_price],
          });
        }
      });

    // resta el saldo
    db.ref(`usuarios/${idUsuario}/saldo`).set(saldo - gasto);

    dispatch({ type: COMPRAR_CRIPTO });
  };
}

export function venderCripto(idUsuario, cripto, cantidad, saldo, ingreso) {
  const rutaCripto = db.ref(
    `usuarios/${idUsuario}/portfolio/cripto/${cripto.id}`
  );

  return (dispatch) => {
    // resta cripto
    rutaCripto
      .child("cantidad")
      .get() // get para leer una unica vez (sino renderizaba infinito)
      .then((snapshot) => {
        const total = (
          parseFloat(snapshot.val()) - parseFloat(cantidad)
        ).toFixed(8);

        if (snapshot.exists()) {
          if (parseFloat(total) === 0.0) {
            rutaCripto.remove();
          } else {
            rutaCripto.child("cantidad").set(total);
          }
        }
      });

    // suma el saldo
    db.ref(`usuarios/${idUsuario}/saldo`).set(saldo + ingreso);

    dispatch({ type: VENDER_CRIPTO });
  };
}

export function comprarAccion(idUsuario, accion, cantidad, saldo, gasto) {
  const rutaAccion = db.ref(
    `usuarios/${idUsuario}/portfolio/accion/${accion.symbol}`
  );

  return (dispatch) => {
    // suma accion
    rutaAccion
      .child("cantidad")
      .get() // get para leer una unica vez (sino renderizaba infinito)
      .then((snapshot) => {
        const total = (
          parseFloat(cantidad) + parseFloat(snapshot.val())
        ).toFixed(8);

        if (snapshot.exists()) {
          rutaAccion.child("ppc").once("value", (snap) => {
            if (snap.exists()) {
              const ppc = snap.val();
              ppc.push(accion.price);

              rutaAccion.update({ cantidad: total, ppc: ppc });
            }
          });
        } else {
          rutaAccion.set({
            ...accion,
            cantidad: parseFloat(cantidad).toFixed(8),
            ppc: [accion.price],
          });
        }
      });

    // resta el saldo
    db.ref(`usuarios/${idUsuario}/saldo`).set(saldo - gasto);

    dispatch({ type: COMPRAR_ACCION });
  };
}

export function venderAccion(idUsuario, accion, cantidad, saldo, ingreso) {
  const rutaAccion = db.ref(
    `usuarios/${idUsuario}/portfolio/accion/${accion.symbol}`
  );

  return (dispatch) => {
    // resta accion
    rutaAccion
      .child("cantidad")
      .get() // get para leer una unica vez (sino renderizaba infinito)
      .then((snapshot) => {
        const total = (
          parseFloat(snapshot.val()) - parseFloat(cantidad)
        ).toFixed(8);

        if (snapshot.exists()) {
          if (parseFloat(total) === 0.0) {
            rutaAccion.remove();
          } else {
            rutaAccion.child("cantidad").set(total);
          }
        }
      });

    // suma el saldo
    db.ref(`usuarios/${idUsuario}/saldo`).set(saldo + ingreso);

    dispatch({ type: VENDER_ACCION });
  };
}

export function obtenerCriptos(idUsuario) {
  return (dispatch) => {
    db.ref(`usuarios/${idUsuario}/portfolio/cripto`).on("value", (snapshot) => {
      if (snapshot.exists()) {
        const criptos = Object.keys(snapshot.val()).map((key) => ({
          ...snapshot.val()[key],
        }));

        dispatch({ type: OBTENER_CRIPTOS, criptos: criptos });
      } else {
        dispatch({ type: OBTENER_CRIPTOS, criptos: [] });
      }
    });
  };
}

export function obtenerAcciones(idUsuario) {
  return (dispatch) => {
    db.ref(`usuarios/${idUsuario}/portfolio/accion`).on("value", (snapshot) => {
      if (snapshot.exists()) {
        const acciones = Object.keys(snapshot.val()).map((key) => ({
          ...snapshot.val()[key],
        }));

        dispatch({ type: OBTENER_ACCIONES, acciones: acciones });
      } else {
        dispatch({ type: OBTENER_ACCIONES, acciones: [] });
      }
    });
  };
}

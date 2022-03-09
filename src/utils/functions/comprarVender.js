import getDB from "../services/db";

const db = getDB();

export function comprarCripto(idUsuario, cripto, cantidad, saldo, gasto) {
  const rutaCripto = db.ref(
    `usuarios/${idUsuario}/portfolio/cripto/${cripto.id}`
  );

  // suma cripto
  rutaCripto
    .child("cantidad")
    .get() // get para leer una unica vez (sino renderizaba infinito)
    .then((snapshot) => {
      const total = (parseFloat(cantidad) + parseFloat(snapshot.val())).toFixed(
        8
      );

      if (snapshot.exists()) {
        rutaCripto.child("cantidad").set(total);
      } else {
        rutaCripto.set({
          ...cripto,
          cantidad: parseFloat(cantidad).toFixed(8),
        });
      }
    });

  // resta el saldo
  db.ref(`usuarios/${idUsuario}/saldo`).set(saldo - gasto);
}

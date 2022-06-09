import {
  Card,
  CardHeader,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { obtenerCriptosPortfolio } from "../../../redux/actions/ActivosAction";

function TablePortfolio() {
  const usuario = useSelector((state) => state.user.usuario);
  const criptos = useSelector((state) => state.activos.criptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerCriptosPortfolio(usuario.id));
  }, [dispatch, usuario.id]);

  function obtenerPPC(ppc) {
    if (ppc) {
      let suma = 0;
      ppc.forEach((p) => {
        suma += p;
      });

      return (suma / ppc.length).toFixed(2);
    }
  }

  return (
    <Card sx={{ margin: "1rem 0" }} elevation={4}>
      <CardHeader title="Portfolio" />
      <TableContainer component={Paper} elevation={4}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Ultimo precio</TableCell>
              <TableCell align="center">Var % diaria</TableCell>
              <TableCell align="center">Var $ diaria</TableCell>
              <TableCell align="center">PPC</TableCell>
              <TableCell align="center">Gan-Per %</TableCell>
              <TableCell align="center">Gan-Per $</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {criptos &&
              criptos.map((row) => (
                <TableRow key={row.symbol}>
                  <TableCell component="th" scope="row">
                    <Link
                      href={`https://www.coingecko.com/en/coins/${row.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="CoinGecko"
                    >
                      {row.symbol.toUpperCase()}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{row.cantidad}</TableCell>
                  <TableCell align="center">${row.ultimoPrecio}</TableCell>
                  <TableCell align="center">{row.porcentajeDiario}%</TableCell>
                  <TableCell align="center">${row.variacionDiario}</TableCell>
                  <TableCell align="center">
                    ${new Intl.NumberFormat().format(obtenerPPC(row.ppc))}
                  </TableCell>
                  <TableCell align="center">{row.porcentajeGan}%</TableCell>
                  <TableCell align="center">${row.variacionGan}</TableCell>
                  <TableCell align="center">${row.total}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default TablePortfolio;

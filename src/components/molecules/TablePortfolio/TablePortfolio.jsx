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
  TableSortLabel,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  obtenerAcciones,
  obtenerCriptos,
} from "../../../redux/actions/ActivosAction";
import { useDispatch, useSelector } from "react-redux";

function TablePortfolio() {
  const usuario = useSelector((state) => state.user.usuario);
  const acciones = useSelector((state) => state.activos.acciones);
  const criptos = useSelector((state) => state.activos.criptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerAcciones(usuario.id));
    dispatch(obtenerCriptos(usuario.id));
  }, [dispatch, usuario.id]);

  console.log(criptos);

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
                    ${new Intl.NumberFormat().format(row.current_price)}
                  </TableCell>
                  <TableCell align="center">{row.porcentajeGan}%</TableCell>
                  <TableCell align="center">${row.variacionGan}</TableCell>
                  <TableCell align="center">${row.total}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableBody>
            {acciones &&
              acciones.map((row) => (
                <TableRow key={row.symbol}>
                  <TableCell component="th" scope="row">
                    <Link
                      href={`https://finance.yahoo.com/quote/${row.symbol}?p=${row.symbol}&.tsrc=fin-srch`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Yahoo Finance"
                    >
                      {row.symbol}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{row.cantidad}</TableCell>
                  <TableCell align="center">${row.ultimoPrecio}</TableCell>
                  <TableCell align="center">{row.porcentajeDiario}%</TableCell>
                  <TableCell align="center">${row.variacionDiario}</TableCell>
                  <TableCell align="center">${row.price}</TableCell>
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

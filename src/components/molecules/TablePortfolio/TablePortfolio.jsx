import {
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import React from "react";

function TablePortfolio() {
  const rows = [
    {
      producto: "AAPL",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "AAPL",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "AAPL",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "AAPL",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "AAPL",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "AAPL",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "AAPL",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "MSFT",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "MSFT",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "MSFT",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "MSFT",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "MSFT",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
    {
      producto: "MSFT",
      cantidad: 1,
      ultimoPrecio: 100,
      porcentajeDiario: 1.1,
      variacionDiario: 1.1,
      ppc: 20,
      porcentajeGan: 20,
      variacionGan: 20,
      total: 100,
    },
  ];

  return (
    <Card sx={{ margin: "1rem 0" }}>
      <CardHeader title="Portfolio" />
      <TableContainer component={Paper}>
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
            {rows.map((row) => (
              <TableRow key={row.producto}>
                <TableCell component="th" scope="row">
                  {row.producto}
                </TableCell>
                <TableCell align="center">{row.cantidad}</TableCell>
                <TableCell align="center">${row.ultimoPrecio}</TableCell>
                <TableCell align="center">{row.porcentajeDiario}%</TableCell>
                <TableCell align="center">${row.variacionDiario}</TableCell>
                <TableCell align="center">${row.ppc}</TableCell>
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

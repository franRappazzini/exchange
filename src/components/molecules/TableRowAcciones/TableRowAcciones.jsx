import { Button, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";

import DialogCompraAccion from "../Dialog/DialogCompraAccion/DialogCompraAccion";
import DialogVentaAccion from "../Dialog/DialogVentaAccion/DialogVentaAccion";

function TableRowAcciones({ accion }) {
  const [open, setOpen] = useState(false);
  const [openVenta, setOpenVenta] = useState(false);
  const { symbol, sector, marketCap, price, volume } = accion;

  return (
    <>
      <TableRow key={symbol}>
        <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
          {symbol.toUpperCase()}
        </TableCell>
        <TableCell align="left">{sector}</TableCell>
        <TableCell align="right">
          ${new Intl.NumberFormat().format(price)}
        </TableCell>
        <TableCell align="right">
          ${new Intl.NumberFormat().format(volume)}
        </TableCell>
        <TableCell align="right">
          ${new Intl.NumberFormat().format(marketCap)}
        </TableCell>
        <TableCell align="right">
          <Button color="success" size="small" onClick={() => setOpen(true)}>
            Comprar
          </Button>
          <Button color="error" size="small" onClick={() => setOpenVenta(true)}>
            Vender
          </Button>
        </TableCell>
      </TableRow>

      <DialogCompraAccion accion={accion} open={open} setOpen={setOpen} />
      <DialogVentaAccion
        accion={accion}
        open={openVenta}
        setOpen={setOpenVenta}
      />
    </>
  );
}

export default TableRowAcciones;

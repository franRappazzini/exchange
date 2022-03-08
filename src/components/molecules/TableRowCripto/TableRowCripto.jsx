import { Button, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";

import DialogCompraCripto from "../Dialog/DialogCompraCripto/DialogCompraCripto";
import DialogVentaCripto from "../Dialog/DialogVentaCripto/DialogVentaCripto";

function TableRowCripto({ cripto }) {
  const [open, setOpen] = useState(false);
  const [openVenta, setOpenVenta] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          {cripto.market_cap_rank}
        </TableCell>
        <TableCell>
          <img src={cripto.image} alt={cripto.id} width={30} />
        </TableCell>
        <TableCell sx={{ fontWeight: 600 }}>
          {cripto.name} ({cripto.symbol.toUpperCase()})
        </TableCell>
        <TableCell align="right">
          ${new Intl.NumberFormat().format(cripto.current_price)}
        </TableCell>
        <TableCell align="right">
          {cripto.price_change_percentage_1h_in_currency.toFixed(2)}%
        </TableCell>
        <TableCell align="right">
          {cripto.price_change_percentage_24h_in_currency.toFixed(2)}%
        </TableCell>
        <TableCell align="right">
          {cripto.price_change_percentage_7d_in_currency.toFixed(2)}%
        </TableCell>
        <TableCell align="right">
          ${new Intl.NumberFormat().format(cripto.total_volume)}
        </TableCell>
        <TableCell align="right">
          ${new Intl.NumberFormat().format(cripto.market_cap)}
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

      <DialogCompraCripto cripto={cripto} open={open} setOpen={setOpen} />
      <DialogVentaCripto
        cripto={cripto}
        open={openVenta}
        setOpen={setOpenVenta}
      />
    </>
  );
}

export default TableRowCripto;

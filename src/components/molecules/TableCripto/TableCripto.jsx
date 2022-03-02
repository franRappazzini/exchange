import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function TableCripto() {
  const [criptos, setCriptos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
    )
      .then((res) => res.json())
      .then((data) => setCriptos(data))
      .catch((err) => console.log("ERROR:", err))
      .finally(() => console.log(criptos));
  }, []);

  return (
    <>
      {criptos.length > 0 ? (
        <TableContainer component={Paper} elevation={4}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Cripto</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">1h</TableCell>
                <TableCell align="right">24h</TableCell>
                <TableCell align="right">7d</TableCell>
                <TableCell align="right">24h volumen</TableCell>
                <TableCell align="right">Market cap</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {criptos.length > 0 &&
                criptos.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <img src={row.image} alt={row.id} width={30} />
                    </TableCell>
                    <TableCell>
                      {row.name} ({row.symbol.toUpperCase()})
                    </TableCell>
                    <TableCell align="right">
                      ${new Intl.NumberFormat().format(row.current_price)}
                    </TableCell>
                    <TableCell align="right">
                      {row.price_change_percentage_1h_in_currency.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      {row.price_change_percentage_24h_in_currency.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      {row.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      ${new Intl.NumberFormat().format(row.total_volume)}
                    </TableCell>
                    <TableCell align="right">
                      ${new Intl.NumberFormat().format(row.market_cap)}
                    </TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="spinner__container">
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default TableCripto;

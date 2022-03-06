import "./TableCripto.css";

import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import TableRowCripto from "../TableRowCripto/TableRowCripto";

function TableCripto() {
  const [criptos, setCriptos] = useState([]);
  const [buscaCripto, setBuscaCripto] = useState("");
  const [limit, setLimit] = useState(25);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
    )
      .then((res) => res.json())
      .then((data) => setCriptos(data))
      .catch((err) => console.log("ERROR:", err));
  }, [limit]);

  // filtra criptos buscadas
  const criptosFiltradas =
    buscaCripto !== ""
      ? criptos.filter(
          (cripto) =>
            cripto.name.toLowerCase().includes(buscaCripto.toLowerCase()) ||
            cripto.symbol.toLowerCase().includes(buscaCripto.toLowerCase())
        )
      : criptos;

  return (
    <>
      <section className="input__container">
        <TextField
          id="standard-basic"
          label="Buscar criptomoneda"
          variant="standard"
          sx={{ width: "15rem" }}
          autoComplete="off"
          value={buscaCripto.toUpperCase()}
          onChange={(e) => setBuscaCripto(e.target.value)}
        />

        <FormControl
          variant="standard"
          sx={{ minWidth: 120, marginLeft: "1rem" }}
        >
          <InputLabel id="demo-simple-select-standard-label">Cant.</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            label="Cant."
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </section>

      {criptosFiltradas.length > 0 ? (
        <TableContainer component={Paper} elevation={4}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.8rem" }}>
                  Cripto
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                  align="right"
                >
                  Precio
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                  align="right"
                >
                  1h
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                  align="right"
                >
                  24h
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                  align="right"
                >
                  7d
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                  align="right"
                >
                  24h volumen
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                  align="right"
                >
                  Market cap
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {criptosFiltradas.length > 0 &&
                criptosFiltradas.map((row) => <TableRowCripto cripto={row} />)}
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

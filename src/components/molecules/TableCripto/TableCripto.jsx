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
import { useDispatch, useSelector } from "react-redux";

import TableRowCripto from "../TableRowCripto/TableRowCripto";
import { obtenerCriptos } from "../../../redux/actions/ActivosAction";

function TableCripto() {
  const [buscaCripto, setBuscaCripto] = useState("");
  const [limit, setLimit] = useState(25);
  const criptos = useSelector((state) => state.activos.criptosCG);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerCriptos(limit));
  }, [dispatch, limit]);

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
                criptosFiltradas.map((row) => (
                  <TableRowCripto key={row.id} cripto={row} />
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

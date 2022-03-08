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

import TableRowAcciones from "../TableRowAcciones/TableRowAcciones";

function TableAcciones() {
  const [acciones, setAcciones] = useState([]);
  const [buscaAcciones, setBuscaAcciones] = useState("");
  const [limit, setLimit] = useState(25);

  useEffect(() => {
    fetch(
      `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&limit=${limit}&apikey=b9fbb7bffddcbe242ca6fa8675356e8b`
    )
      .then((res) => res.json())
      .then((data) => {
        setAcciones(data);
      })
      .catch((err) => console.log("ERROR:", err));
  }, [limit]);

  // filtra acciones buscadas
  const accionesFiltradas =
    buscaAcciones !== ""
      ? acciones.filter(
          (acc) =>
            acc.symbol.toLowerCase().includes(buscaAcciones.toLowerCase()) ||
            acc.companyName.toLowerCase().includes(buscaAcciones.toLowerCase())
        )
      : acciones;

  return (
    <>
      <section className="input__container">
        <TextField
          id="standard-basic"
          label="Buscar accion"
          variant="standard"
          sx={{ width: "15rem" }}
          autoComplete="off"
          value={buscaAcciones.toUpperCase()}
          onChange={(e) => setBuscaAcciones(e.target.value)}
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
      <section style={{ display: "flex", justifyContent: "center" }}>
        {accionesFiltradas.length > 0 ? (
          <TableContainer
            component={Paper}
            elevation={4}
            sx={{
              width: "fit-content",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, fontSize: "0.8rem" }}>
                    Nombre
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                    align="left"
                  >
                    Sector
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
                    Volumen
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
                {accionesFiltradas.length > 0 &&
                  accionesFiltradas.map((row) => (
                    <TableRowAcciones accion={row} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="spinner__container">
            <CircularProgress />
          </div>
        )}
      </section>
    </>
  );
}

export default TableAcciones;

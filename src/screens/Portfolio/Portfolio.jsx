import "./Portfolio.css";

import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DialogIngresarDinero from "../../components/molecules/Dialog/DialogIngresarDinero/DialogIngresarDinero";
import DialogRetiroDinero from "../../components/molecules/Dialog/DialogRetiroDinero/DialogRetiroDinero";
import Header from "../../components/molecules/Header/Header";
import SaldoActual from "../../components/molecules/SaldoActual/SaldoActual";
import TablePortfolio from "../../components/molecules/TablePortfolio/TablePortfolio";
import pieChart from "../../assets/svg/Group 1.svg";
import { usuarioEnSesion } from "../../redux/actions/UserAction";
import verificarUsuario from "../../utils/functions/verificarUsuario";

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [openRetiro, setOpenRetiro] = useState(false);
  const usuario = useSelector((state) => state.user.usuario);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(usuarioEnSesion());
    verificarUsuario(navigate);
  }, [dispatch, navigate]);

  return (
    <>
      <Header />

      <main className="main__porfolio">
        <ButtonGroup
          variant="outlined"
          aria-label="button group"
          className="button-group__container"
        >
          <Button color="primary" onClick={() => setOpen(true)}>
            Ingreso de dinero
          </Button>
          <Link to="/operar" className="btn__invertir">
            <Button color="success" variant="contained">
              INVERTIR
            </Button>
          </Link>
          <Button color="error" onClick={() => setOpenRetiro(true)}>
            Retiro de dinero
          </Button>
        </ButtonGroup>

        <SaldoActual dineroDisponible={usuario.saldo} inversiones={100000} />

        <section className="portfolio__container">
          <TablePortfolio />
          <img src={pieChart} alt="pie" width={350} />
        </section>

        <DialogIngresarDinero open={open} setOpen={setOpen} usuario={usuario} />
        <DialogRetiroDinero
          open={openRetiro}
          setOpen={setOpenRetiro}
          usuario={usuario}
        />
      </main>
    </>
  );
}

export default Portfolio;

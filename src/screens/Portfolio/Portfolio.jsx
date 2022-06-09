import "./Portfolio.css";

import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DialogIngresarDinero from "../../components/molecules/Dialog/DialogIngresarDinero/DialogIngresarDinero";
import DialogRetiroDinero from "../../components/molecules/Dialog/DialogRetiroDinero/DialogRetiroDinero";
import Footer from "../Footer/Footer";
import Header from "../../components/molecules/Header/Header";
import SaldoActual from "../../components/molecules/SaldoActual/SaldoActual";
import TablePortfolio from "../../components/molecules/TablePortfolio/TablePortfolio";
import { obtenerTotalInvertido } from "../../redux/actions/ActivosAction";
import pieChart from "../../assets/svg/Group 1.svg";
import { usuarioEnSesion } from "../../redux/actions/UserAction";
import verificarUsuario from "../../utils/functions/verificarUsuario";

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [openRetiro, setOpenRetiro] = useState(false);
  const usuario = useSelector((state) => state.user.usuario);
  const totalInvertido = useSelector((state) => state.activos.totalInvertido);
  const criptos = useSelector((state) => state.activos.criptos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("AAAAAAAA", totalInvertido);
  console.log("BBBBBBBB", criptos);

  useEffect(() => {
    dispatch(usuarioEnSesion());
    dispatch(obtenerTotalInvertido(criptos));
    verificarUsuario(navigate);
  }, [dispatch, navigate, criptos]);

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

        <SaldoActual dineroDisponible={usuario.saldo} inversiones={0} />

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

      <Footer />
    </>
  );
}

export default Portfolio;

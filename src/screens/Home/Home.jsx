import "./Home.css";

import { AdvancedChart, MarketOverview, Ticker } from "react-tradingview-embed";
import { symbols, tabs, tabsCrypto } from "../../utils/constants/stockData";

import BtnCustom from "../../components/atoms/BtnCustom/BtnCustom";
import { Button } from "@mui/material";
import HeaderHome from "../../components/molecules/HeaderHome/HeaderHome";
import React from "react";
import creditCard from "../../assets/svg/credit_card.svg";
import discount from "../../assets/svg/discount.svg";
import statisticChart from "../../assets/svg/statistic_chart.svg";

function Home() {
  return (
    <>
      <HeaderHome />

      <main className="main__home">
        <section className="section__1">
          <h1>INVERTI EN ACCIONES Y CRIPTO DESDE UN UNICO LUGAR</h1>
          <p>
            Invertí y obtené rendimientos a largo plazo con las empresas más
            importantes del mundo y las crypto del momento.
          </p>
          <Button
            variant="contained"
            color="secondary"
            sx={{ "margin-bottom": "1rem" }}
          >
            Registrarse
          </Button>

          <Ticker
            widgetProps={{
              symbols: symbols,
              locale: "es",
            }}
          />
        </section>

        <section className="section__2">
          <div>
            <h3>Top acciones:</h3>
            <MarketOverview
              widgetProps={{
                height: 300,
                tabs: tabs,
                showChart: false,
                locale: "es",
              }}
            />
          </div>
          <div>
            <h3>Top criptomonedas:</h3>
            <MarketOverview
              widgetProps={{
                height: 300,
                tabs: tabsCrypto,
                showChart: false,
                locale: "es",
              }}
            />
          </div>
        </section>

        <section className="section__3">
          <div>
            <h1>Compra y vende en segundos</h1>
            <p>
              Compra de forma instantánea y segura, y con las mejores comisiones
              del mercado durante las 24 horas del día. Nunca habia sido tan
              facil como con StockApp.
            </p>
            <Button variant="contained" color="secondary">
              Registrarse
            </Button>
          </div>

          <img src={creditCard} alt="credit card" width={350} />
        </section>

        <section className="section__4">
          <div>
            <h1>SIN COMISIONES!</h1>
            <p>
              Si, leiste bien. El primer broker/exchange que no te cobra NADA
              por ingresar/retirar dinero o comprar/vender cualquier activo.
            </p>
            <Button variant="contained" color="secondary">
              Comprar sin comision
            </Button>
          </div>
          <img src={discount} alt="discount" width={350} />
        </section>

        <section className="section__5">
          <div>
            <h1>Graficos en vivo las 24hs</h1>
            <p>
              Consulta el grafico del activo que mas te guste, para estar al
              tanto de mercado en cualquier momento desde nuestra plataforma.
            </p>

            <Button variant="contained" color="secondary">
              Registrarse
            </Button>
          </div>

          <AdvancedChart
            widgetProps={{
              width: 550,
              height: 350,
              hide_side_toolbar: true,
              hide_top_toolbar: true,
              locale: "es",
              symbol: "NASDAQ:AAPL",
              interval: "W",
              style: "1",
            }}
          />
        </section>

        <section className="section__6">
          <div>
            <h1>Portfolio detallado</h1>
            <p>Consulta tu portolio personal con hasta el ultimo detalle.</p>
            <Button variant="contained" color="secondary">
              Registrarse
            </Button>
          </div>

          <img src={statisticChart} alt="statistic chart" width={350} />
        </section>

        <section className="section__7">
          <h1>Que estas esperando?</h1>
          <p>Comenza ya mismo a generar ganancias.</p>
          <div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ margin: "0 0.5rem" }}
            >
              Registrarse
            </Button>
            <Button
              variant="contained"
              color="inherit"
              sx={{ margin: "0 0.5rem" }}
            >
              Ingresar
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

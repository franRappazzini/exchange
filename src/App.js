import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Graficos from "./screens/Graficos/Graficos";
import Home from "./screens/Home/Home";
import Ingresar from "./screens/Ingresar/Ingresar";
import MiCuenta from "./screens/MiCuenta/MiCuenta";
import Operar from "./screens/Operar/Operar";
import Portfolio from "./screens/Portfolio/Portfolio";
import Registrarse from "./screens/Registrarse/Registrarse";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/registrarse" element={<Registrarse />} />

          <Route path="/ingresar" element={<Ingresar />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/operar" element={<Operar />} />

          <Route path="/graficos" element={<Graficos />} />

          <Route path="/mi_cuenta" element={<MiCuenta />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

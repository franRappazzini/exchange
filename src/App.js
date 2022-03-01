import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home/Home";
import Portfolio from "./screens/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

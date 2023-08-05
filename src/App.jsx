import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import Proyecto from "./Pages/Proyecto";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<Proyecto />} />
        <Route path="/contact" element={<p>contact!</p>} />
        <Route path="/*" element={<p>404 - Pagina no encontrada</p>} />
      </Routes>
    </div>
  );
}

export default App;

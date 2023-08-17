import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import Proyecto from "./Pages/Proyecto";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<Proyecto />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proyectos/:id" element={<ProjectCard />} />
        <Route path="/*" element={<p>404 - Pagina no encontrada</p>} />
      </Routes>
    </div>
  );
}

export default App;

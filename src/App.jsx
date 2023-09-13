import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./app.css";

import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import Proyecto from "./Pages/Proyecto";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Contact from "./Pages/Contact";
import SideProjects from "./Pages/SideProjects";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="app">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Proyecto />} />
        <Route path="/sideprojects" element={<SideProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectCard />} />
        <Route path="/*" element={<p>404 - Pagina no encontrada</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

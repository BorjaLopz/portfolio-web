import { NavLink } from "react-router-dom";
import "./style.css"

function NavBar() {
  return (
    <menu>
      <nav>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/proyectos">proyectos </NavLink>
        <NavLink to="/contact">Contactáme </NavLink>
      </nav>
    </menu>
  );
}

export default NavBar();

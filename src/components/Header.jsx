import NavBar from "./NavBar/NavBar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <section>
        <img src="favicon.svg" alt="favicon de mi portfolio" />
        <p>Portfolio de Borja</p>
      </section>
      <nav>
        <menu>
          <ul>
            <li className="animation">
              <NavLink to="/">Home </NavLink>
            </li>
            <li className="animation">
              <NavLink to="/proyectos">proyectos </NavLink>
            </li>
            <li className="animation">
              <NavLink to="/contact">Contáctame </NavLink>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  );
}

export default Header;

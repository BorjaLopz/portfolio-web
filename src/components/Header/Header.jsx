import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <section id="icon-section">
        <NavLink to="/">
          <img src="/icons/favicon.svg" alt="favicon de mi portfolio" />
          <p>Portfolio de Borja</p>
        </NavLink>
      </section>
      <nav>
        <menu>
          <ul>
            <li className="animation">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="animation">
              <NavLink to="/projects">proyectos</NavLink>
            </li>
            <li className="animation">
              <NavLink to="/sideprojects">proyectos laterales</NavLink>
            </li>
            <li className="animation">
              <NavLink to="/contact">Contáctame</NavLink>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  );
}

export default Header;

import NavBar from "./NavBar/NavBar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <menu>
          <ul>
            <li className="animation">
              <NavLink to="/">
                Home{" "}
              </NavLink>
            </li>
            <li className="animation">
              <NavLink to="/proyectos">
                proyectos{" "}
              </NavLink>
            </li>
            <li className="animation">
              <NavLink to="/contact">
                Contactáme{" "}
              </NavLink>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  );
}

export default Header;

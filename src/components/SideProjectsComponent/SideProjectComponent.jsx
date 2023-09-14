import { Link } from "react-router-dom";
import "./style.css";
import sideProjects from "../../sideprojects.json";

function SideProjectsComponent() {
  return (
    <>
      <div id="sideprojects-title">
        <h2>Mis otros proyectos</h2>
      </div>
      <article id="links-sideprojects">
        {sideProjects.map((s) => {
          return (
            <>
              <Link to={`/sideprojects/${s.software}`}>
                {s.software.toUpperCase()}
              </Link>
            </>
          );
        })}
      </article>
    </>
  );
}

export default SideProjectsComponent;

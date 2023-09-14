import "./style.css";
import CurrentSideProjectComponent from "../ExpandedProjectComponent/ExpandedProjectComponent";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ExpandedProjectComponent from "../ExpandedProjectComponent/ExpandedProjectComponent";

function SideCardProject({ data }) {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const handleClick = (d) => {
    setElementoSeleccionado(d);
    document.main.classList.add("no-scroll");
  };

  const handleClose = () => {
    setElementoSeleccionado(null);
    document.main.classList.remove("no-scroll");
  };

  return (
    <>
      <section id="projects-area">
        {data.map((d) => {
          return (
            // <Link to={`../${location.pathname}/${d.title}`}>
            <article
              key={`${d.id}`}
              onClick={() => handleClick(d)}
              // className={`${d.id === elementoSeleccionado ? "activado" : ""}`}
            >
              {d.file === "image" ? (
                <img src={`${d.file_name}`} className="image" />
              ) : (
                <p>No soy imagen</p>
              )}
              <div id="text">
                <h3>{d.title}</h3>
              </div>
            </article>
            // </Link>
          );
        })}
      </section>

      {elementoSeleccionado !== null && (
        <ExpandedProjectComponent
          onClose={handleClose}
          data={elementoSeleccionado}
        />
      )}
    </>
  );
}

export default SideCardProject;

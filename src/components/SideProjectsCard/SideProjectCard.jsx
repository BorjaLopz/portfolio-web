import "./style.css";
import CurrentSideProjectComponent from "../ExpandedProjectComponent/ExpandedProjectComponent";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ExpandedProjectComponent from "../ExpandedProjectComponent/ExpandedProjectComponent";

function SideCardProject({ data }) {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const handleClick = (d) => {
    setElementoSeleccionado(d);
  };

  const handleClose = () => {
    setElementoSeleccionado(null);
  };

  return (
    <>
      {/* <section
        id={`showcase-area ${elementoSeleccionado !== null ? "active" : ""} `}
      >
        <div id="escape-button">
          <button onClick={() => setElementoSeleccionado(null)}>X</button>
        </div>
        <div id="showcase">
          <article>
            {elementoSeleccionado?.file === "image" ? (
              <img
                src={`${elementoSeleccionado?.file_name}`}
                className="image"
              />
            ) : (
              <p>No soy imagen</p>
            )}
            <div id="text">
              <h3>{elementoSeleccionado?.title}</h3>
            </div>
          </article>
        </div>
      </section> */}
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

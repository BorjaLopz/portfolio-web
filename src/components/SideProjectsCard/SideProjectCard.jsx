import "./style.css";
import CurrentSideProjectComponent from "../ExpandedProjectComponent/ExpandedProjectComponent";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ExpandedProjectComponent from "../ExpandedProjectComponent/ExpandedProjectComponent";
import { TYPE_OF_FILE, getKeyByValue } from "../../helpers";

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
      <section className="projects-area">
        {data.map((d) => {
          switch (d.file.toUpperCase()) {
            case "EJECUTABLE":
              return (
                <article className="container-exe-text">
                  <a href={`${d.file_name}`} download>
                    <img src={`${d.cover}`} className="image_link" />
                  </a>
                  <div id="text">
                    <h3>{d.title}</h3>
                  </div>
                </article>
              );
            case "IMAGE":
              return (
                <article
                  key={`${d.id}`}
                  onClick={() => handleClick(d)}
                  className="container-photo-text"
                  // className={`${d.id === elementoSeleccionado ? "activado" : ""}`}
                >
                  <img src={`${d.file_name}`} className="image" />
                  <div id="text">
                    <h3>{d.title}</h3>
                  </div>
                </article>
              );
            case "VIDEO":
              return (
                <article
                  key={`${d.id}`}
                  onClick={() => handleClick(d)}
                  className="container-photo-text"
                  // className={`${d.id === elementoSeleccionado ? "activado" : ""}`}
                >
                  <video
                    src={`${d.file_name}`}
                    className="video"
                    poster={`${d.cover}`}
                  ></video>
                  <div id="text">
                    <h3>{d.title}</h3>
                  </div>
                </article>
              );
          }
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

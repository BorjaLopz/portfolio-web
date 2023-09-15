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
      <section class="projects-area">
        {data.map((d) => {
          return (
            // <Link to={`../${location.pathname}/${d.title}`}>
            <article
              key={`${d.id}`}
              onClick={() => handleClick(d)}
              class="container-photo-text"
              // className={`${d.id === elementoSeleccionado ? "activado" : ""}`}
            >
              {getKeyByValue(TYPE_OF_FILE, d.file.toUpperCase()) ===
              "IMAGE" ? (
                <img src={`${d.file_name}`} className="image" />
              ) : (
                <video src={`${d.file_name}`} className="video" poster={`${d.cover}`}></video>
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

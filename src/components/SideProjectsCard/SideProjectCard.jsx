import "./style.css";
import CurrentSideProjectComponent from "../CurrentSideProjectComponent/CurrentSideProjectComponent";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function SideCardProject({ data }) {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const handleClick = (d) => {
    console.log(d)
    setElementoSeleccionado(d);
  };


  return (
    <>
      <section id="projects-area">
        {data.map((d) => {
          return (
            // <Link to={`../${location.pathname}/${d.title}`}>
            <article
              key={`${d.id}`}
              onClick={() => handleClick(d.id)}
              className={`${d.id === elementoSeleccionado ? "activado" : ""}`}
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
    </>
  );
}

export default SideCardProject;

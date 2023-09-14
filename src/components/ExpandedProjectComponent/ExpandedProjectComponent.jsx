import { useParams } from "react-router-dom";
import "./style.css";
import sideprojects from "../../sideprojects.json";

function ExpandedProjectComponent({ onClose, data }) {
  return (
    <>
      <div className="expanded-article">
        <button onClick={onClose}>Cerrar</button>
        <article
          key={`${data.id}`}
          onClick={() => handleClick(d)}
          // className={`${d.id === elementoSeleccionado ? "activado" : ""}`}
        >
          {data.file === "image" ? (
            <img src={`${data.file_name}`} className="image" />
          ) : (
            <p>No soy imagen</p>
          )}
          <div id="text">
            <h3>{data.title}</h3>
          </div>
        </article>
      </div>
    </>
  );
}

export default ExpandedProjectComponent;

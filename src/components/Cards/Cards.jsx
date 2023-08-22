import { Link } from "react-router-dom";

import "./style.css";

function Cards({ proyect }) {
  // console.log(proyect);
  return (
    <Link to={`/proyectos/${proyect.id}`}>
      <article className="article_project">
        <h2>{proyect.title}</h2>
        <section className="container_technologies">
          {proyect.technology.map((t, key) => {
            let longitud = proyect.technology.length;
            return (
              <h3 key={key}>
                {t} {`${key !== longitud - 1 ? "·" : ""}`}
              </h3>
            );
          })}
        </section>
        <img
          src={`${proyect.image}`}
          alt={`Imagen de ${proyect.title}`}
          className="imagen_proyecto"
        />
        <section className="button_container">
          <Link
            to={`${proyect.github}`}
            target="_blank"
            className={`icon pequeño`}
          >
            <img src={`github.png`} alt={`github icono`} />
          </Link>
          {proyect.deploy && (
            <Link
              to={`${proyect.deploy}`}
              target="_blank"
              className={`icon pequeño`}
            >
              <img src={`deploy.png`} alt={`deploy icono`} />
            </Link>
          )}
        </section>
      </article>
    </Link>
  );
}

export default Cards;

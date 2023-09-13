import Cards from "../Cards/Cards";

import "./style.css";

function Proyects({ list }) {
  return (
    <>
      <ul id="listado-proyectos">
        {list.map((p) => {
          return (
            <li key={p.id}>
              <Cards proyect={p} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Proyects;

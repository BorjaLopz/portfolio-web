import { useParams } from "react-router-dom";
import "./style.css";
import sideprojects from "../../sideprojects.json";

function CurrentSideProjectComponent() {
  const { software } = useParams();
  const { title } = useParams();

  

  console.log(software, title);

  return (
    <>
      <div className="overlay">{/* Contenido del componente Overlay */}</div>
    </>
  );
}

export default CurrentSideProjectComponent;

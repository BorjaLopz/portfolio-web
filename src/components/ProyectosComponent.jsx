import proyectos from "/src/proyectos.json";
import ProyectsCards from "./Projects/Proyects";

function ProyectosComponent() {
  return <ProyectsCards list={proyectos} />;
}

export default ProyectosComponent;

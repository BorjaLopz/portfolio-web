import { useParams } from "react-router-dom";
import sideProjects from "../sideprojects.json";
import SideCardProject from "../components/SideProjectsCard/SideProjectCard";

function SideProjectsSoftware() {
  const { software } = useParams();
  return (
    <>
      <main>
        <div className="software_name">
          <h2>{software}</h2>
        </div>
        {sideProjects.map((s) => {
          if (s.software === software) {
            return <SideCardProject data={s.data} />;
          }
        })}
      </main>
    </>
  );
}

export default SideProjectsSoftware;

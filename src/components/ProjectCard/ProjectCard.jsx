import { useParams } from "react-router-dom";
import proyectos from "/src/proyectos.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard({ project }) {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState({});
  // console.log(proyectos);

  const getCurrentProject = () => {
    for (const p in proyectos) {
      if (proyectos[p].id == id) {
        setCurrentProject(proyectos[p]);
      }
    }
  };

  // console.log(currentProject.technology);

  useEffect(() => {
    getCurrentProject();
  }, []);

  return (
    <>
      <main>
        <article className="main_project">
          <h3>{currentProject.title}</h3>
          <img
            src={`../${currentProject.image}`}
            alt={`Imagen del proyecto ${currentProject.title}`}
            className="main_project_img"
          />

          <section className="description">
            <p>{currentProject.description}</p>
          </section>

          <section className="button_container">
            <Link
              to={`${currentProject.github}`}
              target="_blank"
              className={`icon pequeño`}
            >
              <img src="/icons/github.png" alt="" />
            </Link>
            {currentProject.deploy && (
              <Link
                to={`${currentProject.deploy}`}
                target="_blank"
                className={`icon pequeño`}
              >
                <img src="/icons/deploy.png" alt="" />
              </Link>
            )}
          </section>
        </article>
      </main>
    </>
  );
}

export default ProjectCard;

/*

<aside>
          <p>{currentProject.description}</p>
          { {console.log(currentProject)} }
          { {currentProject !== {} && currentProject.technology.map((t) => {
            console.log(t);
          })} }
</aside>

*/

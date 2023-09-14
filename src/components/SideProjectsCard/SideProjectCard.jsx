import "./style.css";

function SideCardProject({ data }) {
  return (
    <>
      {data.map((d) => {
        return (
          <article>
            {d.file === "image" ? (
              <img src={`${d.file_name}`} />
            ) : (
              <p>No soy imagen</p>
            )}
            <h3>{d.title}</h3>
          </article>
        );
      })}
    </>
  );
}

export default SideCardProject;

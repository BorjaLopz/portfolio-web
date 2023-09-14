import "./style.css";

function ExpandedProjectComponent({ onClose, data }) {
  return (
    <>
      <div className="expanded-article">
        <div className="data-button">
          <article id="article-data">
            {data.file === "image" ? (
              <img src={`${data.file_name}`} />
            ) : (
              <p>No soy imagen</p>
            )}
            <div id="text">
              <h3>{data.title}</h3>
            </div>
          </article>
          <div id="button-container">
            <button onClick={onClose}>
              Atras
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpandedProjectComponent;

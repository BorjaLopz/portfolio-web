import "./style.css";
import { TYPE_OF_FILE, getKeyByValue } from "../../helpers";

function ExpandedProjectComponent({ onClose, data }) {
  console.log(data);
  return (
    <>
      <div className={`expanded-article`}>
        <div className="data-button">
          {getKeyByValue(TYPE_OF_FILE, data.file.toUpperCase()) ===
          "EJECUTABLE" ? (
            <>
              <article id="article-exe">
                <img src={`${data.cover}`} />
                <div id="text-container">
                  <h3>{data.title}</h3>
                  <h4>{data?.description}</h4>
                </div>
                <div id="button-container">
                  <a href={`${data.file_name}`} download>
                    <button id="download-button">Download</button>
                  </a>
                  <button onClick={onClose} className="atras-button">
                    Atras
                  </button>
                </div>
              </article>
            </>
          ) : (
            <>
              <article id="article-data">
                {getKeyByValue(TYPE_OF_FILE, data.file.toUpperCase()) ===
                "IMAGE" ? (
                  <img src={`${data.file_name}`} />
                ) : (
                  <video
                    src={`${data.file_name}`}
                    className="video_expanded"
                    controls
                    loop
                    poster={`${data.cover}`}
                  ></video>
                )}
                <div id="text">
                  <h3>{data.title}</h3>
                </div>
              </article>
              <div id="button-container">
                <button onClick={onClose} className="atras-button">
                  Atras
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ExpandedProjectComponent;

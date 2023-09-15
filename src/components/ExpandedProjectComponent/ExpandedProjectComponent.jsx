import "./style.css";
import { TYPE_OF_FILE, getKeyByValue } from "../../helpers";

function ExpandedProjectComponent({ onClose, data }) {
  console.log(data);
  return (
    <>
      <div className={`expanded-article`}>
        <div className="data-button">
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
            <button onClick={onClose}>Atras</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpandedProjectComponent;

import "./style.css";

function HomePageComponente() {
  return (
    <main>
      <div className="container">
        <section className="photo_container">
          <img
            src="/icons/Foto_Borja.jpg"
            alt="Foto de Borja López Díaz"
            width={150}
          />
          <span id="photo_frame"></span>
        </section>
        <article>
          <section id="name">
            <h2>Borja López Díaz</h2>
            <h3>Programador Full Stack</h3>
          </section>
          <section id="resumen">
            <p>¡Hola! Soy Borja López Díaz, desarrollador full-stack.</p>
            <p>
              Mis principales TECH SKILLS son{" "}
              <span className="important">HTML5</span>,{" "}
              <span className="important">CSS3</span>,{" "}
              <span className="important">JavaScript</span>,{" "}
              <span className="important">MySQL</span>,
              <span className="important">NodeJS</span>,{" "}
              <span className="important">React</span>,{" "}
              <span className="important">Python</span> y{" "}
              <span className="important">C++</span>. También me gusta el diseño
              y suelo trabajar con adobe{" "}
              <span className="important">Illustrator</span>, {" "}
              <span className="important">Photoshop</span> y {" "}
              <span className="important">After Effects</span>.
            </p>
            <p>
              Me considero una persona empática, con mucha facilidad para
              trabajar en equipo, productiva, resolutiva y autónoma.
            </p>
            <p> En mi tiempo libre me gusta seguir formándome y dibujar.</p>
          </section>
        </article>
      </div>
    </main>
  );
}

export default HomePageComponente;

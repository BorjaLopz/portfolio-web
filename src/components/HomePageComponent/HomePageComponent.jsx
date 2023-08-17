import "./style.css";

function HomePageComponente() {
  return (
    <main>
      <div className="container">
        <section className="photo_container">
          <img
            src="Foto_Borja.jpg"
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
            <p>
              ¡Hola! Soy Borja López Díaz, desarrollador full-stack en proceso.
            </p>
            <p>
              Mis principales TECH SKILLS son HTML5, CSS3, JavaScript, MySQL,
              NodeJS, React, Python y C++. También me gusta el diseño y suelo
              trabajar con adobe Illustrator, adobe Photoshop y adobe
              AfterEffects.
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

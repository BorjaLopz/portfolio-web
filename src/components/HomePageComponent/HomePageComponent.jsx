import "./style.css";
function HomePageComponente() {
  return (
    <main>
      <div className="container">
        <section className="photo_container">
          <img
            src="../../Foto_Borja.jpg"
            alt="Foto de Borja López Díaz"
            width={150}
          />
          <span id="photo_frame"></span>
        </section>
        <div>
          <p>Borja López Díaz</p>
        </div>
      </div>
    </main>
  );
}

export default HomePageComponente;

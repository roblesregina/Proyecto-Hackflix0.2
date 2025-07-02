import Moviecontainer from "../components/movie/Moviecontainer";

function Home({ showSearch }) {
  return (
    <>
      {/* Contenedor del video y el texto superpuesto */}
      <div className="position-relative" style={{ position: "relative" }}>
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100"
          style={{ maxHeight: "480px", objectFit: "fill" }}
        >
          <source src="/vid/banner2_2_1.mp4" type="video/mp4" />
        </video>

        {/* Texto superpuesto en dos líneas */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textShadow: "2px 2px 8px black",
            textAlign: "center",
            zIndex: 10,
            width: "90%",
            lineHeight: "1.4",
          }}
        >
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
            ¡Bienvenido/a!
          </p>
          <p style={{ fontSize: "1.6rem", fontWeight: "500", margin: 0 }}>
            Explorá lo que Hackflix tiene para vos.
          </p>
        </div>
      </div>

      {/* Contenedor de resultados o buscador */}
      <div className="container mt-4">
        <Moviecontainer showSearch={showSearch} />
      </div>
    </>
  );
}

export default Home;
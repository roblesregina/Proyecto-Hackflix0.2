import React, { useState } from "react";
import Moviecontainer from "./components/Moviecontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black px-4">
        <a className="navbar-brand" href="#">
          <img
            src="/img/logo.png"
            alt="Hackflix"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </a>
        <div className="ms-auto d-flex">
          <button
            onClick={toggleSearch}
            className="btn bg-black text-white me-2"
            type="button"
          >
            Buscar
          </button>
        </div>
      </nav>
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100"
          style={{ maxHeight: "600px", objectFit: "fill" }}
        >
          <source src="/vid/banner2_2_1.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>

      <div className="container mt-4">
        <Moviecontainer showSearch={showSearch} />
      </div>
    </>
  );
}

export default App;

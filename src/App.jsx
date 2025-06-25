import React, { useState } from "react";
import Moviecontainer from "./components/Moviecontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black px-4">
        <h1
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            color: "red",
            fontSize: "2rem",
            letterSpacing: "1px",
          }}
        >
          Hackflix
        </h1>
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

      <div className="container mt-4">
        <Moviecontainer showSearch={showSearch} />
      </div>
    </>
  );
}

export default App;

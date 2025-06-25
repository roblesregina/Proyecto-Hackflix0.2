import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Moviecontainer from "./components/Moviecontainer";

function App() {
  return (
    <div className="container mt-4 min-vh-100 ">
      <h1 className=" mb-4 text-white ">Hackflix</h1>
      <p className="parrafo">
        Encuentra títulos originales que no hay en ningún otro streamming.
        Películas, series, especiales.. Y todos los elegidos, solo aquí en
        Hackflix.
      </p>
      <Moviecontainer />
    </div>
  );
}

export default App;

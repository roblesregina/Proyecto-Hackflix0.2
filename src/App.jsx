import React from "react";
import { Routes, Route } from "react-router-dom";
import Moviecontainer from "./components/Moviecontainer";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container mt-4">
      <h1>🎬 Hackflix</h1>
      <Moviecontainer />
      <Routes>
        <Route path="/" element={<Moviecontainer />} />
        <Route path="/pelicula/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

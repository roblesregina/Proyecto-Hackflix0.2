import { useState } from "react";
import Rating from "./components/Rating";
import Movies from "./components/Movies";
import moviesData from "./data/movies.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ratingSeleccionado, setRatingSeleccionado] = useState(0);

  const peliculasFiltradas = moviesData.filter(
    (pelicula) => pelicula.vote_average >= ratingSeleccionado * 2
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Hackflix</h1>
      <Rating onChange={setRatingSeleccionado} />
      <Movies peliculas={peliculasFiltradas} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Movies from "./Movies";

const Moviecontainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando películas...</p>;

  return <Movies movies={movies} />;
};

export default Moviecontainer;

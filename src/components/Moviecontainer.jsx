// src/components/MovieContainer.jsx
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular llamada AJAX al archivo JSON
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar las películas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando películas...</p>;
  }

  return <MovieList movies={movies} />;
};

export default MovieContainer;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES `
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Error cargando película:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="container mt-4 text-white">Cargando...</div>;
  }

  if (!movie || movie.status_code === 34) {
    return (
      <div className="container mt-4 text-white">Película no encontrada.</div>
    );
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="container mt-4 text-white">
      <div className="row">
        <div className="col-md-4">
          <img src={imageUrl} alt={movie.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p>
            <strong>Título original:</strong> {movie.original_title}
          </p>
          <p>
            <strong>Descripción:</strong> {movie.overview}
          </p>
          <p>
            <strong>Fecha de estreno:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}/10
          </p>
          <p>
            <strong>Duración:</strong> {movie.runtime} minutos
          </p>
          <p>
            <strong>Géneros:</strong>{" "}
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>

          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Volver a Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

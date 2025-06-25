import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/data";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Película no encontrada.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <img
        src={movie.poster_path}
        alt={movie.title}
        style={{ width: "300px", maxWidth: "100%", marginBottom: "1rem" }}
      />
      <p>
        <strong>Descripción:</strong> {movie.overview}
      </p>
      <p>
        <strong>Lenguaje:</strong> {movie.original_language}
      </p>
      <p>
        <strong>Popularidad:</strong> {movie.popularity}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>

      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
        Volver a Home
      </button>
    </div>
  );
}

export default MovieDetail;

import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No se encontraron películas para mostrar.</p>;
  }

  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-4 mb-4">
          <Link
            to={`/pelicula/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card h-100">
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text flex-grow-1">{movie.overview}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;

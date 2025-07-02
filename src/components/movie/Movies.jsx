import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie) => {
        const imageUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://via.placeholder.com/500x750?text=No+Image";

        return (
          <div key={movie.id} className="col-md-3 mb-4">
            <Link to={`/movie/${movie.id}`} className="text-decoration-none">
              <div className="card h-100 bg-dark text-white">
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text" style={{ fontSize: "0.9rem" }}>
                    {movie.overview
                      ? movie.overview.slice(0, 100) + "..."
                      : "Sin descripción disponible"}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;

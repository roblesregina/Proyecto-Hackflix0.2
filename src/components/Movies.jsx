import React from "react";

const Movies = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No se encontraron películas para mostrar.</p>;
  }

  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-4 mb-4">
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
              {/* Aquí podés integrar el componente Rating para las estrellas */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;

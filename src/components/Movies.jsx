
function Movies({ peliculas }) {
  if (peliculas.length === 0) {
    return <p>Lo sentimos, no se encontraron películas con el rating solicitado.</p>;
  }

  return (
    <div className="row">
      {peliculas.map((pelicula) => (
        <div key={pelicula.id} className="col-md-3 mb-4">
          <div className="card h-100">
            <img
              src={pelicula.poster_path}
              className="card-img-top"
              alt={pelicula.title}
            />
            <div className="card-body">
              <h5 className="card-title">{pelicula.title}</h5>
              <p>Calificación: {pelicula.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
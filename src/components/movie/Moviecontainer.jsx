import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Movies from "./Movies";
import StarFilter from "./Rating";
import InfiniteScroll from "react-infinite-scroll-component";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Moviecontainer = ({ showSearch }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const loaderRef = useRef(null);

  // Función para traer películas
  const fetchMovies = async (pageToLoad) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pageToLoad}`
      );
      const data = await res.json();

      setMovies((prevMovies) => {
        const combined = [...prevMovies, ...data.results];
        const uniqueMovies = Array.from(
          new Map(combined.map((movie) => [movie.id, movie])).values()
        );
        return uniqueMovies;
      });
      setPage(pageToLoad);
    } catch (err) {
      console.error("Error cargando películas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Manejo estrellas
  const handleRatingChange = (stars) => {
    setRatingFilter(stars);
  };

  // Filtrar y ordenar películas según rating y búsqueda
  const filteredMovies = useMemo(() => {
    let filtered = movies;

    if (ratingFilter) {
      const min = (ratingFilter - 1) * 2;
      filtered = filtered.filter((movie) => movie.vote_average >= min);
    }

    if (searchQuery) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Ordenar de menor a mayor rating
    return filtered.sort((a, b) => a.vote_average - b.vote_average);
  }, [ratingFilter, searchQuery, movies]);

  return (
    <>
      <div className="container my-4">
        <h3 className="mb-3 text-white d-flex justify-content-center align-items-center">
          Filtrar por rating
        </h3>
        <StarFilter onChange={handleRatingChange} />

        {showSearch && (
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "30%",
              zIndex: 10,
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el título de una película..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="container mt-4">
        <InfiniteScroll
          dataLength={filteredMovies.length}
          next={() => fetchMovies(page + 1)}
          hasMore={true}
          loader={<p className="text-center">Cargando más películas...</p>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Has llegado al final.</b>
            </p>
          }
        >
          <Movies movies={filteredMovies} />
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Moviecontainer;

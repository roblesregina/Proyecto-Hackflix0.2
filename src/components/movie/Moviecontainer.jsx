import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Movies from "./Movies";
import StarFilter from "../Rating";

const API_KEY = "57186adfe10ba4b885487a0a103bad45";

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
    } catch (err) {
      console.error("Error cargando películas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Scroll infinito
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchMovies(nextPage);
      }
    },
    [loading, page]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

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
        <Movies movies={filteredMovies} />
      </div>

      <div ref={loaderRef} style={{ height: "100px" }} />
      {loading && <p className="text-center">Cargando más películas...</p>}
    </>
  );
};

export default Moviecontainer;

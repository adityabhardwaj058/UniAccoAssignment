import "./InfiniteScroll.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "../movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Filter } from "../filter/Filter";

export function InfiniteScrollComponent() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [moviesAvailable, setMoviesAvailable] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getNewMovies();
  }, []);

  const getNewMovies = async () => {
    try {
      const newMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=38ea5e7c8561a585923cb35fd520dfa3&page=${page}`
      );
      setMovies((previousMovies) => [
        ...previousMovies,
        ...newMovies.data.results,
      ]);
      setLoading(false);
      if (page >= 43 || newMovies.length === 0) {
        setMoviesAvailable(false);
      } else {
        setPage(page + 1);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      setMoviesAvailable(false);
    }
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    if (filter !== "" && filteredMovies.length === 0) {
      setMoviesAvailable(false);
    } else {
      setMoviesAvailable(true);
    }
  }, [filter, filteredMovies.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(movies);

  return (
    <>
      <Filter value={filter} onChange={handleFilter} />
      <InfiniteScroll
        dataLength={movies.length}
        next={getNewMovies}
        hasMore={moviesAvailable}
        loader={<h4>Loading...</h4>}
        className="movieCardContainer"
        endMessage={<p style={{ textAlign: "center" }}></p>}
      >
        {filter === "" ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : filteredMovies.length === 0 ? (
          <div className="noMovies">No Movies found</div>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        )}
      </InfiniteScroll>
    </>
  );
}

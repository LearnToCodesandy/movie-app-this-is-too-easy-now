import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./styles.css";

export default function App() {
  // const URL =
  const [movie, setMovie] = useState("superman");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  // handlers
  const handleFetch = async () => {
    const URL = `https://www.omdbapi.com/?s=${movie}&apikey=c6c0ee25`;
    const response = await fetch(URL);
    const data = await response.json();
    if (data.Response === "True") {
      setError(false);
      setMovies(data.Search);
    } else {
      setMovie([]);
      setError(true);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="container">
      <h1>Movie App</h1>
      <div className="movie-header">
        <input
          type="text"
          placeholder="enter a movie name ..."
          onChange={(e) => setMovie(e.target.value)}
        />
        <button
          className="Search"
          onClick={() => {
            handleFetch();
            setMovie("");
          }}
        >
          Search
        </button>
      </div>
      <div className="movie-body">
        {error ? (
          <p>No movie found</p>
        ) : (
          movies.map((movie) => {
            return <MovieCard movie={movie} key={Math.random()} />;
          })
        )}
      </div>
    </div>
  );
}

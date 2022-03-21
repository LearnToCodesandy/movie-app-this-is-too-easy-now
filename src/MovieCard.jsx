const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="image">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300"
          }
          alt="poster not found!"
        />
      </div>
      <div className="content">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <span className="badge">{movie.Type}</span>
      </div>
    </div>
  );
};

export default MovieCard;

import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieItem = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieItem;

import React, { useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (movies) => {
    setSearchResults(movies);
  };

  return (
    <div className="container">
      <h1>Welcome to Movie Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default HomePage;

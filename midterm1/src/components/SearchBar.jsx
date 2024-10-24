import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      const searchResults = [
        { id: 1, title: "Inception", releaseDate: "2010", rating: "8.8" },
        { id: 2, title: "The Dark Knight", releaseDate: "2008", rating: "9.0" },
      ];
      onSearch(searchResults);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

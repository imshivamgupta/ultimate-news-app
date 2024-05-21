// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ setSearchKeyword }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKeyword(keyword);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search articles..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

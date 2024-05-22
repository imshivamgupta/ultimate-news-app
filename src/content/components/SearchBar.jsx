// src/components/SearchBar.js
import React, { useState, useEffect } from "react";
import Select from "./Select";
import { useDispatch, useSelector } from "react-redux";
import { setPreferences } from "../../store/slices/articlesSlice";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ searchKeyword, filters, visibility }) => {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const preferences = useSelector((state) => state.articles.preferences);

  const [sourceSelections, setSourceSelections] = useState("");
  const [categorySelections, setCategorySelections] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    setSourceSelections(preferences.source || "");
    setCategorySelections(preferences.category || "");
    setSelectedDate(preferences.date || "");
    console.log(preferences, "here");
  }, [preferences]);

  const handleSearch = (e) => {
    e.preventDefault();
    const p = {
      source: sourceSelections,
      category: categorySelections,
      date: selectedDate,
    };
    setPreferences(p);
    searchKeyword(keyword, p);
  };

  return (
    <form
      className={`search-panel ${!visibility ? "hide" : ""}`}
      onSubmit={handleSearch}
    >
      <div className="filters-panel">
        <Select
          title="Pick Your favorite Source"
          options={filters.sources}
          value={sourceSelections}
          onChange={setSourceSelections}
          multiple={false}
        />
        <Select
          title="Pick Your favorite Category"
          options={filters.categories}
          value={categorySelections}
          onChange={setCategorySelections}
          multiple={false}
        />

        <input
          type="date"
          onChange={(e) => setSelectedDate(e.target.value)}
          value={selectedDate}
        />
      </div>

      <div className="keyword-panel">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search articles..."
          required
        />

        <button type="submit">
          <IoSearchOutline style={{ marginRight: "6px" }} />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

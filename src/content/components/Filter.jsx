// src/components/Filter.js
import React, { useState } from "react";

const sources = [
  { value: "bbc-news", label: "BBC News" },
  { value: "cnn", label: "CNN" },
  { value: "the-verge", label: "The Verge" },
  { value: "techcrunch", label: "TechCrunch" },
  { value: "bloomberg", label: "Bloomberg" },
  // Add other sources as needed
];

const categories = [
  { value: "business", label: "Business" },
  { value: "entertainment", label: "Entertainment" },
  { value: "general", label: "General" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" },
];

const Filter = ({ setFilters }) => {
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleFilterChange = () => {
    setFilters({
      source: selectedSource,
      category: selectedCategory,
      date: selectedDate,
    });
  };

  return (
    <div>
      <select
        onChange={(e) => setSelectedSource(e.target.value)}
        value={selectedSource}
      >
        <option value="">All Sources</option>
        {sources.map((source) => (
          <option key={source.value} value={source.value}>
            {source.label}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
        value={selectedDate}
      />

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;

// src/components/PreferencesForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreferences } from "../../store/slices/preferencesSlice";

const PreferencesForm = () => {
  const dispatch = useDispatch();
  const preferences = useSelector((state) => state.preferences);

  const [sources, setSourcesState] = useState(preferences.sources.join(", "));
  const [categories, setCategoriesState] = useState(
    preferences.categories.join(", ")
  );
  const [authors, setAuthorsState] = useState(preferences.authors.join(", "));

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
    if (savedPreferences) {
      dispatch(setPreferences(savedPreferences));
    }
  }, [dispatch]);

  const handleSave = () => {
    const newPreferences = {
      sources: sources.split(",").map((s) => s.trim()),
      categories: categories.split(",").map((c) => c.trim()),
      authors: authors.split(",").map((a) => a.trim()),
    };
    dispatch(setPreferences(newPreferences));
    localStorage.setItem("preferences", JSON.stringify(newPreferences));
  };

  return (
    <div>
      <h2>Customize Your News Feed</h2>
      <div>
        <h3>Sources</h3>
        <input
          type="text"
          value={sources}
          onChange={(e) => setSourcesState(e.target.value)}
        />
      </div>
      <div>
        <h3>Categories</h3>
        <input
          type="text"
          value={categories}
          onChange={(e) => setCategoriesState(e.target.value)}
        />
      </div>
      <div>
        <h3>Authors</h3>
        <input
          type="text"
          value={authors}
          onChange={(e) => setAuthorsState(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save Preferences</button>
    </div>
  );
};

export default PreferencesForm;

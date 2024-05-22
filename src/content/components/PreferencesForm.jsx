// src/components/PreferenceForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreferences } from "../../store/slices/articlesSlice";
import Select from "./Select";

const PreferenceForm = ({ filters, onSavePreferences, clearPrefenences }) => {
  const dispatch = useDispatch();

  const preferences = useSelector((state) => state.articles.preferences);

  const [authorSelections, setAuthorSelections] = useState("");
  const [sourceSelections, setSourceSelections] = useState("");
  const [categorySelections, setCategorySelections] = useState("");

  useEffect(() => {
    setAuthorSelections(preferences.author || "");
    setSourceSelections(preferences.source || "");
    setCategorySelections(preferences.category || "");
  }, [preferences]);

  const handleSavePreferences = (e) => {
    e.preventDefault();
    const newPreferences = {
      author: authorSelections,
      source: sourceSelections,
      category: categorySelections,
    };

    if (
      authorSelections != "" &&
      sourceSelections != "" &&
      categorySelections != ""
    ) {
      localStorage.setItem("preferences", JSON.stringify(newPreferences));
      onSavePreferences(newPreferences);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("preferences");
    clearPrefenences({
      author: "",
      source: "",
      category: "",
    });
  };
  return (
    <form className={"preference-form"} onSubmit={handleSavePreferences}>
      <h3>Set Your Preferences</h3>
      <Select
        label="Select Preferred Authors"
        options={filters.authors}
        value={authorSelections}
        onChange={setAuthorSelections}
        multiple={false}
      />
      <Select
        label="Select Preferred Sources"
        options={filters.sources}
        value={sourceSelections}
        onChange={setSourceSelections}
      />
      <Select
        label="Select Preferred Categories"
        options={filters.categories}
        value={categorySelections}
        onChange={setCategorySelections}
      />
      <button type="submit">Save Preferences</button>
      <p onClick={clearLocalStorage}>Clear Settings</p>
    </form>
  );
};

export default PreferenceForm;

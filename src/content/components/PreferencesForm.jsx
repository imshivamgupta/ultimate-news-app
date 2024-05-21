// src/components/PreferenceForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   setAuthors,
//   setSources,
//   setCategories,
// } from "../store/slices/preferencesSlice";

const PreferenceForm = ({ filters }) => {
  const dispatch = useDispatch();
  // const { list: authors, status: authorStatus } = useSelector(
  //   (state) => state.authors
  // );
  // const { list: sources, status: sourceStatus } = useSelector(
  //   (state) => state.sources
  // );
  // const { list: categories, status: categoryStatus } = useSelector(
  //   (state) => state.categories
  // );

  // const selectedAuthors = useSelector((state) => state.preferences.authors);
  // const selectedSources = useSelector((state) => state.preferences.sources);
  // const selectedCategories = useSelector(
  //   (state) => state.preferences.categories
  // );

  // const [authorSelections, setAuthorSelections] = useState([]);
  // const [sourceSelections, setSourceSelections] = useState([]);
  // const [categorySelections, setCategorySelections] = useState([]);

  // useEffect(() => {
  //   if (authorStatus === "idle") {
  //     dispatch(fetchAuthorsAsync());
  //   }
  //   if (sourceStatus === "idle") {
  //     dispatch(fetchSourcesAsync());
  //   }
  //   if (categoryStatus === "idle") {
  //     dispatch(fetchCategoriesAsync());
  //   }
  //   setAuthorSelections(selectedAuthors);
  //   setSourceSelections(selectedSources);
  //   setCategorySelections(selectedCategories);
  // }, [
  //   authorStatus,
  //   sourceStatus,
  //   categoryStatus,
  //   dispatch,
  //   selectedAuthors,
  //   selectedSources,
  //   selectedCategories,
  // ]);

  // const handleAuthorChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setAuthorSelections([...authorSelections, value]);
  //   } else {
  //     setAuthorSelections(
  //       authorSelections.filter((author) => author !== value)
  //     );
  //   }
  // };

  // const handleSourceChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setSourceSelections([...sourceSelections, value]);
  //   } else {
  //     setSourceSelections(
  //       sourceSelections.filter((source) => source !== value)
  //     );
  //   }
  // };

  // const handleCategoryChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setCategorySelections([...categorySelections, value]);
  //   } else {
  //     setCategorySelections(
  //       categorySelections.filter((category) => category !== value)
  //     );
  //   }
  // };

  // const handleSavePreferences = () => {
  //   dispatch(setAuthors(authorSelections));
  //   dispatch(setSources(sourceSelections));
  //   dispatch(setCategories(categorySelections));
  // };

  return (
    <div>
      <h3>Select Preferred Authors</h3>

      <button>Save Preferences</button>
    </div>
  );
};

export default PreferenceForm;

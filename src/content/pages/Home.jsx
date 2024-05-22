// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticlesAsync,
  fetchFiltersAsync,
  setSearchKeyword,
  setFilters,
  setPreferences,
  setShowPreferencePopup,
  setShowMenuSearch,
} from "../../store/slices/articlesSlice";
import {
  SearchBar,
  Filter,
  ArticleList,
  Header,
  PreferencesForm,
  Loader,
} from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const [filtersLoader, setFiltersLoader] = useState(false);
  // const [PForm, setPForm] = useEffect
  const {
    articles,
    searchKeyword,
    filters,
    status,
    error,
    showPreferencePopup,
    showMenuSearch,
  } = useSelector((state) => state.articles);

  const handleSavePreferences = (preferences) => {
    if (
      preferences.author != "" &&
      preferences.source != "" &&
      preferences.category != ""
    ) {
      dispatch(setPreferences(preferences));
      dispatch(
        fetchArticlesAsync({ query: searchKeyword, filters: preferences })
      );
      dispatch(setShowPreferencePopup(false));
    }
  };

  useEffect(() => {
    // if (searchKeyword) {
    //   dispatch(fetchArticlesAsync({ query: searchKeyword, filters }));
    // }
    if (!filtersLoader) {
      dispatch(fetchFiltersAsync());
      setFiltersLoader(true);
    }

    const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
    if (savedPreferences && showPreferencePopup) {
      dispatch(setPreferences(savedPreferences));
      dispatch(
        fetchArticlesAsync({ query: searchKeyword, filters: savedPreferences })
      );
      dispatch(setShowPreferencePopup(false));
    }
  }, [searchKeyword, filters, dispatch, showPreferencePopup]);

  return (
    <main>
      <Header />
      <SearchBar
        visibility={showMenuSearch}
        setSearchKeyword={(keyword) => dispatch(setSearchKeyword(keyword))}
        filters={filters}
      />
      {status === "loading" && <Loader />}
      {status === "failed" && <p>Error: {error}</p>}
      {showPreferencePopup && (
        <PreferencesForm
          filters={filters}
          onSavePreferences={handleSavePreferences}
        />
      )}
      <p>
        News Articles <sup>({articles.length})</sup>{" "}
      </p>
      <ArticleList articles={articles} />
    </main>
  );
};

export default Home;

// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticlesAsync,
  fetchFiltersAsync,
  setSearchKeyword,
  setFilters,
  setPreferences,
} from "../../store/slices/articlesSlice";
import {
  SearchBar,
  Filter,
  ArticleList,
  Header,
  PreferencesForm,
} from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const [pForm, setPform] = useState(true);
  const [filtersLoader, setFiltersLoader] = useState(false);
  const { articles, searchKeyword, filters, status, error } = useSelector(
    (state) => state.articles
  );

  const handleSavePreferences = (preferences) => {
    if (
      preferences.author != "" &&
      preferences.source != "" &&
      preferences.category != ""
    ) {
      dispatch(setPreferences(preferences));
      dispatch(fetchArticlesAsync({ query: "bitcoin", filters: preferences }));
      setPform(false);
    }
  };

  useEffect(() => {
    if (searchKeyword) {
      dispatch(fetchArticlesAsync({ query: searchKeyword, filters }));
    }
    if (!filtersLoader) {
      dispatch(fetchFiltersAsync());
      setFiltersLoader(true);
    }
  }, [searchKeyword, filters, dispatch]);

  return (
    <main>
      <Header />
      <div>
        <SearchBar
          setSearchKeyword={(keyword) => dispatch(setSearchKeyword(keyword))}
          filters={filters}
        />
        {/* <Filter setFilters={(filters) => dispatch(setFilters(filters))} /> */}
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {pForm && (
        <PreferencesForm
          filters={filters}
          onSavePreferences={handleSavePreferences}
        />
      )}
      <p>News Articles: {articles.length} </p>
      <ArticleList articles={articles} />
    </main>
  );
};

export default Home;

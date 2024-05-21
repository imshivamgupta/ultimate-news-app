// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticlesAsync,
  fetchFiltersAsync,
  setSearchKeyword,
  setFilters,
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
  const [pForm, setPform] = useState(false);
  const { articles, searchKeyword, filters, status, error } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    if (searchKeyword) {
      dispatch(fetchArticlesAsync({ query: searchKeyword, filters }));
    } else if (!pForm) {
      dispatch(fetchFiltersAsync());
      setPform(true);
    }
  }, [searchKeyword, filters, dispatch]);

  return (
    <main>
      <Header />
      <div style={{ display: "none" }}>
        {/* <SearchBar
          setSearchKeyword={(keyword) => dispatch(setSearchKeyword(keyword))}
        />
        <Filter setFilters={(filters) => dispatch(setFilters(filters))} /> */}
      </div>
      <PreferencesForm filters={filters} />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {/* <ArticleList articles={articles} /> */}
    </main>
  );
};

export default Home;

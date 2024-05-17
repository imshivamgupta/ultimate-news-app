// src/pages/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticlesAsync,
  setSearchKeyword,
  setFilters,
} from "../../store/slices/articlesSlice";
import { SearchBar, Filter, ArticleList } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, searchKeyword, filters, status, error } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    if (searchKeyword) {
      dispatch(fetchArticlesAsync({ query: searchKeyword, filters }));
    }
  }, [searchKeyword, filters, dispatch]);

  return (
    <div>
      <SearchBar
        setSearchKeyword={(keyword) => dispatch(setSearchKeyword(keyword))}
      />
      <Filter setFilters={(filters) => dispatch(setFilters(filters))} />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

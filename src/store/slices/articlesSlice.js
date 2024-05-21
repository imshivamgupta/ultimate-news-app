// src/store/slices/articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles } from "../../services/api";

export const fetchArticlesAsync = createAsyncThunk(
  "articles/fetchArticles",
  async ({ query, filters }) => {
    const response = await fetchArticles(query, filters);
    console.log(response);
    return response;
  }
);

export const fetchArticleByIdAsync = createAsyncThunk(
  "articles/fetchArticleById",
  async (id, { getState }) => {
    const articles = getState().articles.allArticles;
    return articles[id] || null;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    searchKeyword: "bitcoin",
    filters: {
      source: "",
      category: "",
      date: "",
    },
    status: "idle",
    error: null,
  },
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticlesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchKeyword, setFilters } = articlesSlice.actions;

export default articlesSlice.reducer;

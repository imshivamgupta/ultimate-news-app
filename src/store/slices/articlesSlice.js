// src/store/slices/articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles, fetchFilters } from "../../services/api";

//Pull all the articles in once from endpoint
export const fetchArticlesAsync = createAsyncThunk(
  "articles/fetchArticles",
  async ({ query, preferences }) => {
    const response = await fetchArticles(query, preferences);
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

export const fetchFiltersAsync = createAsyncThunk(
  "articles/fetchFilters",
  async () => {
    const response = await fetchFilters();
    console.log(response);
    return response;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    searchKeyword: "",
    filters: {
      authors: [],
      sources: [],
      categories: [],
    },
    // Personalized Feature for Home
    preferences: {
      author: "",
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
    setFilters: (state, { authors, sources, categories }) => {
      state.filters.authors = authors;
      state.filters.sources = sources;
      state.filters.categories = categories;
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
      })
      .addCase(fetchFiltersAsync.fulfilled, (state, action) => {
        state.filters.authors = action.payload.authors;
        state.filters.sources = action.payload.sources;
        state.filters.categories = action.payload.categories;
      });
  },
});

export const { setSearchKeyword, setFilters } = articlesSlice.actions;

export default articlesSlice.reducer;

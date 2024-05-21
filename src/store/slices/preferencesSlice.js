// src/store/slices/preferencesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    sources: [],
    categories: [],
    authors: [],
  },
  reducers: {
    setSources(state, action) {
      state.sources = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setAuthors(state, action) {
      state.authors = action.payload;
    },
    setPreferences(state, action) {
      state.sources = action.payload.sources;
      state.categories = action.payload.categories;
      state.authors = action.payload.authors;
    },
  },
});

export const { setSources, setCategories, setAuthors, setPreferences } =
  preferencesSlice.actions;
export default preferencesSlice.reducer;

// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import preferencesSlice from "./slices/preferencesSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    preferences: preferencesSlice,
  },
});

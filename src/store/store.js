// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

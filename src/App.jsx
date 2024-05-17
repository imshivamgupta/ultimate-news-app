import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./content/pages/Home";
import ArticleDetail from "./content/pages/ArticleDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./content/pages/Home";
import ArticleDetail from "./content/pages/ArticleDetail";
import Menu from "./content/components/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

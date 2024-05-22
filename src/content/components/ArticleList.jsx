// src/components/ArticleList.js
import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className="card-wrapper">
      {articles.map((article, index) => {
        return (
          article?.author && (
            <ArticleItem key={index} article={article} id={index} />
          )
        );
      })}
    </div>
  );
};

export default ArticleList;

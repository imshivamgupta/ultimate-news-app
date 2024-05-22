import React from "react";
import { Link } from "react-router-dom";

const ArticleItem = ({ article, link }) => {
  return (
    <div className={"card card-news"}>
      <img
        src={article?.urlToImage || "https://picsum.photos/200/300"}
        alt={article.title}
        className="article-image"
      />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {/* <p>Article By:{article.author}</p> */}
      {/* <Link to={`/article/${article.id}}`}>Read more</Link> */}
    </div>
  );
};

export default ArticleItem;

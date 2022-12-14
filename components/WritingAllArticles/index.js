import React, { useState, useEffect } from "react";
import { client } from "../../client";

/* Components */
import ArticleCard from "./ArticleCard";

const WritingAllArticles = () => {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const query = '*[_type == "article"] | order(_createdAt desc)';
    client.fetch(query).then((data) => {
      setArticleData(data);
      console.log({ data });
    });
  }, []);
  return (
    <section className="writing_allArticles">
      <div className="container_sm">
        <p className="title ht_text">All articles :</p>

        <div className="writing_allArticles--post_wrapper">
          {articleData?.map((article, index) => {
            return <ArticleCard key={index} data={article} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WritingAllArticles;

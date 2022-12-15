import React from "react";
import Link from "next/link";

/* Components */
import ArticleCard from "../WritingAllArticles/ArticleCard";

const ArticleByCategory = ({ data, category }) => {

  return (
    <section className="article_by_category">
      <div className="container_sm container_y_3">
        <h1 className="ht_text center_text">#{category?.title}</h1>
        <p className="center_text">Articles by this category</p>
        <div className="article_by_category--wrapper container_y_3">
          {data?.length > 0 &&
            data?.map((article, index) => {
              return (
                <Link href={`/writing/articles/${article.slug.current}`}>
                  <ArticleCard key={index} data={article} />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ArticleByCategory;

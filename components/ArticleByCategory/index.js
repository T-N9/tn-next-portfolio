import React from "react";
import Link from "next/link";

/* Components */
import ArticleCard from "../WritingAllArticles/ArticleCard";
import NotFound from "../../assets/NotFound";

const ArticleByCategory = ({ data, category }) => {
  return (
    <section className="article_by_category">
      <div className="container_sm container_y_3">
        <h1 className="ht_text center_text">#{category?.title}</h1>
        <p className="center_text">Articles by this category</p>

        {data?.length > 0 ? (
          <div className="article_by_category--wrapper container_y_3">
            {data?.map((article, index) => {
              return (
                <Link href={`/writing/articles/${article.slug.current}`}>
                  <ArticleCard key={index} data={article} />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="not_found">
            <NotFound />
            <p>Articles not found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleByCategory;

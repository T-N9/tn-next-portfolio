import React from "react";

/* Components */
import ArticleCard from "../WritingAllArticles/ArticleCard";
import NotFound from "../../assets/NotFound";
import Pagination from "../Pagination";

const ArticleByCategory = ({
  data,
  category,
  pageNumber,
  pages,
  noItems,
  slug,
  loading,
}) => {
  return (
    <section className="article_by_category">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </div>
      <div className="container_sm container_y_3">
        <h1 className="ht_text center_text">#{category?.title}</h1>
        <p className="center_text">Articles by this category</p>

        <div className="container_y_2">
          <Pagination
            baseLink={`/writing/categories/${slug}`}
            pageNumber={pageNumber}
            pages={pages}
            noItems={noItems}
          />
        </div>

        {loading ? (
          <div className="flex_auto loading_sec">
            <i className={`gg-${"spinner"}`}></i>
          </div>
        ) : (
          <>
            {data?.length > 0 ? (
              <div className="article_by_category--wrapper container_y_3">
                {data?.map((article, index) => {
                  return (
                    <a
                      key={index}
                      href={`/writing/articles/${article.slug.current}`}
                    >
                      <ArticleCard data={article} />
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="not_found">
                <NotFound />
                <p>Articles not found.</p>
              </div>
            )}
          </>
        )}

        <Pagination
          baseLink={`/writing/categories/${slug}`}
          pageNumber={pageNumber}
          pages={pages}
          noItems={noItems}
        />
      </div>
    </section>
  );
};

export default ArticleByCategory;

import React, { useEffect } from "react";
import { client } from "../../client";
import { useDispatch, useSelector } from "react-redux";
import { setArticleData } from "../../store/slices/WritingSlice";
import Link from "next/link";

/* action */
import {
  setStartLoading,
  setStopLoading,
} from "../../store/slices/LoadingSlice";

/* Components */
import ArticleCard from "./ArticleCard";

const WritingAllArticles = () => {
  const dispatch = useDispatch();
  const { articleData } = useSelector((state) => state.writingData);

  useEffect(() => {
    dispatch(setStartLoading());
    const query = '*[_type == "article"] | order(_createdAt desc)';

    if (articleData.length === 0) {
      client.fetch(query).then((data) => {
        dispatch(setArticleData(data));
        dispatch(setStopLoading());
      });
    } else {
      dispatch(setStopLoading());
    }
  }, []);
  return (
    <section className="writing_allArticles">
      <div className="container_sm">
        <p className="title ht_text">All articles :</p>

        <div className="writing_allArticles--post_wrapper">
          {articleData.length > 0 &&
            articleData?.map((article, index) => {
              return (
                <Link
                  key={index}
                  href={`writing/articles/${article.slug.current}`}
                >
                  <ArticleCard data={article} />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WritingAllArticles;

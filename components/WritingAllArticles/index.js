import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { useDispatch, useSelector } from "react-redux";
import { setArticleData } from "../../store/slices/WritingSlice";
import Link from "next/link";

/* Components */
import ArticleCard from "./ArticleCard";

const WritingAllArticles = () => {
  const dispatch = useDispatch();
  const { articleData } = useSelector((state) => state.writingData);

  // const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const query = '*[_type == "article"] | order(_createdAt desc)';

    if (articleData.length === 0) {
      client.fetch(query).then((data) => {
        dispatch(setArticleData(data));
        console.log({data});
      });
    }
  }, []);
  return (
    <section className="writing_allArticles">
      <div className="container_sm">
        <p className="title ht_text">All articles :</p>

        <div className="writing_allArticles--post_wrapper">
          {articleData.length > 0 &&
            articleData?.map((article, index) => {
              return <Link href={`writing/articles/${article.slug.current}`}>
                <ArticleCard key={index} data={article} />
              </Link>;
            })}
        </div>
      </div>
    </section>
  );
};

export default WritingAllArticles;

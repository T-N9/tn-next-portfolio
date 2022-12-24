import React, { useEffect, useState } from "react";
import { client } from "../../client";
import { useDispatch, useSelector } from "react-redux";
import { setArticleData } from "../../store/slices/WritingSlice";
import Link from "next/link";
import { useRouter } from "next/router";

/* action */
import {
  setStartLoading,
  setStopLoading,
} from "../../store/slices/LoadingSlice";

/* Util */
import CalPaginate from "../../hooks/CalPaginate";

/* Components */
import ArticleCard from "./ArticleCard";
import Pagination from "../Pagination";

const WritingAllArticles = () => {
  const dispatch = useDispatch();
  const { articleData } = useSelector((state) => state.writingData);
  const [dataCount, setDataCount] = useState(null);
  const [arctLoading, setArctLoading] = useState(false);

  const router = useRouter();
  const pageNumber = parseInt(router.query.page) || 1;

  const { startIndex, endIndex, pages, noItems } = CalPaginate(
    dataCount,
    pageNumber
  );
  // console.log({
  //   startIndex,
  //   endIndex,
  //   pages,
  //   noItems,
  // });

  useEffect(() => {
    client.fetch(`count(*[_type == 'article'])`).then((data) => {
      setDataCount(data);
    });
  }, []);

  useEffect(() => {
    dispatch(setStartLoading());
    setArctLoading(true);

    if (startIndex !== null && endIndex !== null) {
      const query = `*[_type == "article"] | order(_createdAt desc) [${startIndex}...${endIndex}]`;

      client.fetch(query).then((data) => {
        dispatch(setArticleData(data));
        dispatch(setStopLoading());
        setArctLoading(false);
      });
    }
  }, [pageNumber, startIndex, endIndex]);

  return (
    <section className="writing_allArticles">
      <div className="container_sm">
        <div className="writing_allArticles--header container_y_2">
          <p className="title ht_text">All articles :</p>

          <Pagination
            baseLink={"/writing"}
            pageNumber={pageNumber}
            pages={pages}
            noItems={noItems}
          />
        </div>

        {!arctLoading ? (
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
        ) : (
          <div className="flex_auto loading_sec">
            <i className={`gg-${"spinner"}`}></i>
          </div>
        )}

        <div className="container_y_2">
          <Pagination
            baseLink={"/writing"}
            pageNumber={pageNumber}
            pages={pages}
            noItems={noItems}
          />
        </div>
      </div>
    </section>
  );
};

export default WritingAllArticles;
